import {ethers} from "hardhat";


async function main() {
    
    const deployNft = await ethers.getContractFactory("AkutarsReplicas");
    const DeployNft = (await deployNft).deploy();

    await (await DeployNft).deployed();

    console.log("Contract deployed to:",  (await DeployNft).address);
}

main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})