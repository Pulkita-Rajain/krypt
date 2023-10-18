// https://eth-goerli.g.alchemy.com/v2/aawPaG7fRlQ9-7YY6rZ638_e14ULABWo

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/aawPaG7fRlQ9-7YY6rZ638_e14ULABWo',
      accounts: ['d771066e8ebc99e77c313e8adddf44331ccb63a7c9a8cda50d31c657be28ab40']
    },
   
  },
};