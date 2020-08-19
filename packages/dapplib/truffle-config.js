require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rebel pizza erosion hover enter equal gas'; 
let testAccounts = [
"0xe3ca2e8d76147cb82ddf193b2d2bfaf212369360bef1bd469a3419d67cfe7cfe",
"0xd69bd2e4118a2214303217e4a3f8d44d177afe8fedf46691e6feeb9ab216dafd",
"0x088e81e50aa0e21e36c1bb823540adf62e40a566b121392cd064b9bce1c608a6",
"0x7b2b5c0cb27676800c1c80c76d8f31ddfbc904c3d4ab58fe3be000dccfcab242",
"0x2dd5a308f5f8749d4c1873e746556f593832eab0ef943d691d60360848324ffd",
"0x2e1e1396a1714678eaeda739d7d3ddf03ffa126b302a2a8c03f55e2b5a526c55",
"0xfb2ccb0011c1bf8040e5afd510a0db1997b76505a523de8dc2f3d89267d8dcc8",
"0x28b19ffdb63eff100d3f681991ec49af7aa7a9a4f89eafd3576528ba5a03b11d",
"0x071cfe4c216c0095401acd7f9effaa6f612844acea52d744591a2410416dddee",
"0x7e430bec31075b3673d106db4bf13889cd2910e343a3b3af05e1566ddc4e1829"
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
            version: '^0.5.11'
        }
    }
};
