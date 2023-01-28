require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile proof hockey prison success surround'; 
let testAccounts = [
"0x69b1f50a1fc5f94a30eb1b582320b16cac5e378c8a9c2f3f0157156a8bed39ad",
"0x0e5bd292ee7be23b4384d1309a60be6cd8724a1c5022606388f68ca0c30a2e57",
"0x8651f8713b2ac83f36aad294f2c76377e3a88b268b19ec96d5ff73721b6aa192",
"0xa4b0d959487281d641fbef06394ff0dc35eb866d8fef9eedd998cbe32d12763b",
"0x79b308bc1e33bebc59cabd9a98938a55514e2cfbdee90e64926d6b091510d98c",
"0x379a02b0edc7bf83b789df7fe470f1ff06fba30b23752f6bf625ecc7fd615321",
"0x6252c40af688fa370249adf5f2a15202db24f9c448de62d2195c976ef0769133",
"0x12c066462ee8b32ac6872d3a4132af68d2cfe6446d072792e21e7e6d45124334",
"0xe32c57582404ffc6ff43a2af261e7c7c7686f89479493ec035dcd0dd962c9a4c",
"0x01f8841279ec8d31abbcda024f307b86664a67e6ba0d11c64dd41e87ba350f92"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

