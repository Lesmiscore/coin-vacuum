module.exports = {
    monacoin: {
        explorers: [
            "https://mona.monya.ga/insight-api-monacoin",
            "https://mona.insight.monaco-ex.org/insight-api-monacoin",
            "https://mona.insight.monacoin.ml/insight-api-monacoin"
        ],
        lib: "btc",
        network: {
            messagePrefix: '\x19Monacoin Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 50,
            scriptHash: 55,
            wif: 178,
            bech32: "mona"
        }
    },
    bitzeny: {
        explorers: [
            "https://zeny.insight.monaco-ex.org/api",
            "https://zenyinsight.tomotomo9696.xyz/api",
            "https://insight.bitzeny.jp/api",
            "https://insight.bitzeny.cloud/api"
        ],
        lib: "btc",
        network: {
            messagePrefix: '\x18BitZeny Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 81,
            scriptHash: 5,
            wif: 128
        }
    },
    bitcoin: {
        explorers: [
            "https://btc-bitcore1.trezor.io/api",
            "https://btc-bitcore4.trezor.io/api",
            "https://btc-bitcore5.trezor.io/api",
            "https://btc-bitcore2.trezor.io/api",
            "https://insight.bitpay.com"
        ],
        lib: "btc",
        network: {
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 0,
            scriptHash: 5,
            wif: 128
        }
    },
    litecoin: {
        explorers: [
            "https://insight.litecore.io/api"
        ],
        lib: "btc",
        network: {
            messagePrefix: '\x19Litecoin Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 48,
            scriptHash: 5,
            wif: 176,
            bech32: "lc"
        }
    },
    fujicoin: {
        explorers: [
            "http://explorer.fujicoin.org/api"
        ],
        lib: "btc",
        network: {
            messagePrefix: '\x19Fujicoin Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 36,
            scriptHash: 16,
            wif: 164
        }
    },
    bitcoincash: {
        explorers: [
            "https://bch-bitcore1.trezor.io/api",
            "https://bch-bitcore2.trezor.io/api",
            "https://bch-bitcore3.trezor.io/api"
        ],
        lib: "bch",
        network: {
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 0,// 1
            scriptHash: 5,// 3
            wif: 128
        }
    },
    koto: {
        explorers: [
            "https://insight.kotocoin.info/api"
        ],
        "lib": "zec",
        "network": {
            "messagePrefix": "\u0015Koto Signed Message:\n",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 6198,
            "scriptHash": 6203,
            "wif": 128
        }
    },
    dash: {
        explorers: [
            "https://dash-bitcore1.trezor.io/api",
            "https://dash-bitcore2.trezor.io/api",
            "https://dash-bitcore3.trezor.io/api"
        ],
        lib: "btc",
        "network": {
            "messagePrefix": "\u0019DarkCoin Signed Message:\n",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 76,
            "scriptHash": 16,
            "wif": 204
        }
    },
    zcash: {
        explorers: [
            "https://zec-bitcore1.trezor.io/api",
            "https://zec-bitcore2.trezor.io/api",
            "https://zec-bitcore3.trezor.io/api"
        ],
        lib: "zec",
        "network": {
            "messagePrefix": "\u0016Zcash Signed Message:\n",
            "bip32": {
                "public": 76067358,
                "private": 76066276
            },
            "pubKeyHash": 7352,
            "scriptHash": 7357,
            "wif": 128
        }
    },
    yajucoin: {
        explorers: [
            "https://yaju.insight.monacoin.ml/api"
        ],
        lib: "btc",
        network: {
            messagePrefix: '\x19YAJUCOIN Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 78,
            scriptHash: 85, // n
            wif: 206
        }
    },
    ringo: {
        explorers: [
            "http://namuyan.dip.jp/MultiLightBlockExplorer/apis.php?data=ringo/api"
        ],
        lib: "blk",
        network: {
            messagePrefix: '\x16Ringo Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 60,
            scriptHash: 85,
            wif: 188
        }
    },
    kumacoin: {
        explorers: [
            "http://namuyan.dip.jp/MultiLightBlockExplorer/apis.php?data=kuma/api"
        ],
        lib: "blk",
        network: {
            messagePrefix: '\x19Kumacoin Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 45,
            scriptHash: 8,
            wif: 173
        }
    },
    neetcoin: {
        explorers: [
            "https://insight.neetcoin.jp/api"
        ],
        lib: "blk",
        network: {
            messagePrefix: '\x19NEETCOIN Signed Message:\n',
            bip32: {
                public: 0x0488b21e,
                private: 0x0488ade4
            },
            pubKeyHash: 53, // N
            scriptHash: 112, // n
            wif: 181
        }
    }
};
