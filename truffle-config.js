"use strict";
var HDWalletProvider = require("truffle-hdwallet-provider");
var secrets = require("./secrets.js");
var apiRinkeby = secrets.apiRinkeby;
var apiMainnet = secrets.apiMainnet;
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
          apiMainnet
        );
      },
      gas: 200000000,
	gasPrice: 5e4,
      network_id: 1
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          apiRinkeby
        );
      },
      gas: 5000000,
      gasPrice: 5e9,
      network_id: 3
    }
  }
};
