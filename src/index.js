const coins = require("./coin");
const libs = require("./lib");

const _fetch = fetch || require("node-fetch");

function goVacuum(opt) {
    if (typeof opt != "object") {
        return Promise.reject("Not a object");
    }
    const coin = coins[opt.coin];
    const lib = libs[coin.lib];
    const wif = opt.wif + "";
    const dest = opt.dest + "";
    const fromEC = lib.ECPair.fromWIF(wif, coin);
    const from = fromEC.getAddress();
    const minimumTarget = parseInt(opt.minimum || -1);
    const feeInSat = parseInt(opt.fee || 200);

    const utxos = Promise.race(coin.explorers.map(s => _fetch(s + "/addr/" + from + "/utxo")));
    return utxos.then(utxo => {
        if (utxo.length <= 0) {
            return Promise.reject("No UTXO: cancelling");
        }
        // it's time to build transaction
        let txb = new lib.TransactionBuilder(coin);
        let totalBalanceSat = 0;
        utxo.forEach(tx => {
            const vin = txb.addInput(tx.txid, tx.vout);
            txb.inputs[vin].value = tx.satoshis;
            totalBalanceSat += tx.satoshis;
        });
        const balanceWoFee = totalBalanceSat - feeInSat;
        if (balanceWoFee < minimumTarget) {
            return Promise.reject("Balance is less than target: expected " + minimumTarget + " but " + balanceWoFee);
        }
        txb.addOutput(dest, balanceWoFee);

        for (let i = 0; i < txb.inputs.length; i++)
            txb.sign(i, fromWif);
        // broadcast tx
        return postProm(insight + "/tx/send", {
            rawtx: txb.build().toHex()
        }).then(x => x.body.txid);
    });
}

module.exports = { goVacuum };
