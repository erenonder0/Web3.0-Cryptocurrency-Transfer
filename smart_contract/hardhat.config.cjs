//https://eth-sepolia.g.alchemy.com/v2/cnyjSdo1nXePznvZpIhyDWCGkQQCoNX8
require("@nomicfoundation/hardhat-toolbox"); // hardhat-waffle artık kullanılmıyor bunun yerine hardhat-toolbox kullanıldı.

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/cnyjSdo1nXePznvZpIhyDWCGkQQCoNX8',
      accounts: [ '3b66d33829c3dbaa06b602b9ec0aef6d933e2d102a6b6281d6456cf23a5f2771' ]
    }
  }
}
