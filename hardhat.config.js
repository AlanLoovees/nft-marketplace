require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// // task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
// //   const accounts = await hre.ethers.getSigners();

// //   for (const account of accounts) {
// //     console.log(account.address);
// //   }
// // });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
require("@nomiclabs/hardhat-etherscan");
// const projectId = "3bcf3dc6d78a49a1a69e16f0dc4d8c5d";
// const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/497e2268f4c94a49b0b12d14c75a78ca",
      accounts: ['0x45553064b1ce64a8d1ec0bbbc94a32e0ca25b1d8e3c3af1d01c5980d377f9f00']
    }
  },
  etherscan: {
      apiKey: "XTCXYZJVXJYHYEEA5B5MU4V3MJDENXC9A2"
  },
  solidity: "0.8.4"
};
