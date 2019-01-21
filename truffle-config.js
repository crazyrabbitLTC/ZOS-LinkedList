"use strict";
var HDWalletProvider = require("truffle-hdwallet-provider");
var secrets = require("./secrets.js");
var api-rinkeby = secrets.api-rinkeby;
var api-mainnet = secrets.api-mainnet;
var mnemonic = secrets.mnemonic;

console.log("Mnemonic is: ", mnemonic);

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
          api-mainnet, 2
        );
      },
      gas: 200000000,
      gasPrice: 5e7,
      network_id: 1
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          api-rinkeby
        );
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 3
    }
  }
};
