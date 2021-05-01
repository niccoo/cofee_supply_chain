var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "VALUE CHANGED BEFORE COMMIT ON GIT";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/60a6d934b0f04334a5011b55c6985eeb");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
     solc: {
       version: "0.4.24"  // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
};



