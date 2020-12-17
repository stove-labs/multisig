const multisig = artifacts.require('multisig');
const { alice } = require('../scripts/sandbox/accounts');
const { MichelsonMap } = require('@taquito/taquito');

// storage (pair (set key_hash) nat);
const initialStorage = [ // pair
    [alice.pkh], // set key_hash
    0 // nat
];
module.exports = async (deployer, network, accounts) => {

    // TODO format to await instead of .then
    deployer.deploy(multisig, initialStorage)
};
