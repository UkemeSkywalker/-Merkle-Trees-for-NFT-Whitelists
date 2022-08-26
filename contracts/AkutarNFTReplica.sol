// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AkutarReplicaNFT is ERC721, Ownable {

    constructor() ERC721("AkutarReplicaNFT", "ARP"){}

    function safeMint(address to, uint tokenId) public onlyOwner{
        _safeMint(to, tokenId);
    }
}



