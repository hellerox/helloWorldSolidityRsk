/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    rsk: {
      gas: 2500000,
      gasPrice: 1,
      from: "0x8b3118e6483d6ea16adba9a37b7a47d18d06f73d",
      host: "localhost",
      port: 4444,
      network_id: "*" // Match any network id
    }
  }
};
