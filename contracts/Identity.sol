// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Identity {
    string public name;
    string public role;
    uint public experience;

    constructor(string memory _name, string memory _role, uint _experience) {
        name = _name;
        role = _role;
        experience = _experience;
    }
} 