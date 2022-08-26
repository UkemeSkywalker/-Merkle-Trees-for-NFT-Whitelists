import {ethers} from "hardhat"

async function main() {
    

    const CONTRACTADDRESS = "0x9996e4d77059998A729a42aD948e138cBD61109f";
    const USERADDRESS = "0xEd521548b91C5e4f58bCc1f30dE9691eff517048";

    const getContract = await ethers.getContractFactory("AkutarsReplicas");

    const NFTURL = "https://gateway.pinata.cloud/ipfs/QmNyqHuexuTv1xMx7KUrh1YwTTFmxjPQNXcfAWCpq52sj8";

    const deploy = getContract.attach(CONTRACTADDRESS);

    const mint  = await deploy.safeMint( USERADDRESS, NFTURL);

    const mintResult = mint;

    console.log("mint successful:", mintResult.hash);



}

main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;
})