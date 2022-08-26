<<<<<<< HEAD
require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  solidity: "0.8.9",
  networks: {
      goerli: {
        url: process.env.ALCHEMY_URL,
        accounts: [process.env.GANDALF_PRIVATE_KEY]
      }
    
  }
};


=======
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
};

export default config;
>>>>>>> origin/master
