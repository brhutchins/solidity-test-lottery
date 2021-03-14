const keys = require('./getKeys.js');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
    keys.mnemonic,
    keys.infuraRinkeby
);

const web3 = new Web3(provider);
const test_web3 = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('account address: ', accounts[0]);
}
test_web3();

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
                  .deploy({ data: '0x0' + bytecode })
                  .send({ gas: '800000', from: accounts[0] })

    console.log('Contract deployed to', result.options.address);
};
deploy();
