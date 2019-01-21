"use strict";
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic =
  "Your Twelve Word Mnemonic";

module.exports = {
  networks: {
    local: {
      host: "localhost",
      port: 9545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: "*"
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://mainnet.infura.io/v3/<<Your INFURA API TOKEN>>", 2
        );
      },
      gas: 200000000,
      gasPrice: 5e7,
      network_id: 1
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://rinkeby.infura.io/<<Your INFURA API TOKEN>>"
        );
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 3
    }
  }
};
