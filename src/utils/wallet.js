import Web3 from 'web3';
import abi from '@/assets/abi.json';

// On Main Network
const ContractAddress = '0x0c01d1a41f21863c194c8e948054f8e3a433c424';
export default class Wallet {
  constructor(instance) {
    this.instance = instance;
    if (typeof window.web3 !== 'undefined') {
      this.wallet = new Web3(window.web3.currentProvider);
    } else {
      instance.$message({
        type: 'error',
        message: '没有找到浏览器 Web3 插件，无法购买以太坟, 谷歌浏览器用户考虑一下安装 MetaMask 来进行交互？',
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
