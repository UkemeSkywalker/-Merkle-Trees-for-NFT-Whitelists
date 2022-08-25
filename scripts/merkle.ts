import {ethers} from "hardhat";
import keccak256 = require("keccak256");
import {MerkleTree} from "merkletreejs";

async function main() {

    let [user1, user2, user3, user4, user5, user6, user7] = await ethers.getSigners();

    let whiteList = [
        user1.address,
        user2.address,
        user3.address,
        user4.address,
        user5.address,
        user6.address,
        user7.address
    ]
    
    const leafNodes = whiteList.map(addr => (keccak256(addr)));
    const merkletree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

    const rootHash = merkletree.getRoot();

    console.log("Whitelist Merkle Tree\n", merkletree.toString());

    const claimingAddress = leafNodes[0];

    const hexProof = merkletree.getHexProof(claimingAddress);
    console.log("claimingAddress:", claimingAddress.toLocaleString(), "\n Merkle Proof:", hexProof);

}

main()
.catch((error) => {
    console.error(error);
    process.exitCode = 1;

})
