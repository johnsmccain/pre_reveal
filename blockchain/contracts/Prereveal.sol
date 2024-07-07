// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Prereveal is ERC721, Ownable {
    uint256 public nextTokenId;
    string internal preRevealedURI =
        "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=John";
    string internal baseURI = "";

    struct Item {
        string uri;
        bool isReveal;
    }
    mapping(uint256 => Item) public items;

    event URILog(uint256 _tokenId, string _uri, bool _isReveal);

    constructor() ERC721("MyToken", "MTK") Ownable(msg.sender) {}

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = nextTokenId++;
        _safeMint(to, tokenId);
        items[tokenId].uri = preRevealedURI;
    }

    function tokenURI(
        uint tokenId
    ) public view virtual override returns (string memory) {
        if (items[tokenId].isReveal) {
            // return string.concat(items[tokenId].ur, tokenId.toString());
            // return super.tokenURI(tokenId);
        }
        return items[tokenId].uri;
    }

    function tokenURL(
        uint256 _tokenId
    ) public view returns (string memory, bool) {
        if (items[_tokenId].isReveal) {
            return (items[_tokenId].uri, items[_tokenId].isReveal);
        }
        return (items[_tokenId].uri, items[_tokenId].isReveal);
    }

    function setPrerevealURI(
        uint256 tokenId,
        string memory _prerevealedURI
    ) external onlyOwner {
        items[tokenId].isReveal = true;
        items[tokenId].uri = _prerevealedURI;
    }

    function revealAndSetBaseURI(
        uint256 tokenId,
        string memory baseURI_
    ) external onlyOwner {
        items[tokenId].isReveal = true;
        items[tokenId].uri = baseURI_;
    }
}
