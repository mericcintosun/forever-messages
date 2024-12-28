// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageBoard {
    struct Message {
        string name;
        string content;
        address sender;
    }

    Message[] public messages;

    event MessageAdded(string name, string content, address sender);

    function addMessage(string calldata _name, string calldata _content) public {
        messages.push(Message(_name, _content, msg.sender));
        emit MessageAdded(_name, _content, msg.sender);
    }

    function getMessages() public view returns (Message[] memory) {
        return messages;
    }
}
