import Web3 from 'web3';
import abi from '@/assets/abi.json';

const ContractAddress = '0x2471e7b864f03cc12a482a08a49b603b3967c7ae';
export default class Wallet {
  constructor(instance) {
    this.instance = instance;
    if (typeof window.web3 !== 'undefined') {
      this.wallet = new Web3(window.web3.currentProvider);
    } else {
      instance.$message({
        type: 'error',
        message: '没有找到 Web3 插件，无法交易, 考虑一下安装 MetaMask 插件？',
      });
    }
    if (this.wallet.eth.accounts.length === 0) {
      instance.$message({
        type: 'error',
        message: '您的 Web3 插件没有登录或注册钱包，尚不能使用交易功能。',
      });
    }
    this.account = this.wallet.eth.accounts[0];
    this.wallet.eth.defaultAccount = this.account;
    const Contract = this.wallet.eth.contract(abi);
    // On test network
    this.contract = Contract.at(ContractAddress);
  }

  toWei(price) {
    return this.wallet.toWei(Number(price), 'ether');
  }

  toEther(price) {
    return this.wallet.fromWei(Number(price), 'ether');
  }
}
