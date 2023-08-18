// SPDX-License-Identifier: UNLICENSED

// 0x79ccdDDaf7AeF311EE54f99e4BE52514fE8F7f46
pragma solidity ^0.8.0;


contract Transactions {
   uint256 transactionCount;

   struct TransferStruct {
    address from;
    address reciver;
    uint256 amount;
    string message;
    uint256 timestamp;
    string keyword;
    }

    TransferStruct[] transactions;


   event Transfer(address from, address reciver, uint256 amount, string message, uint256 timestamp, string keyword);

   function addToBlockchain(address payable reciver, uint amount , string memory message, string  memory keyword) public{
    transactionCount += 1;
    transactions.push(TransferStruct(msg.sender,reciver,amount, message, block.timestamp, keyword));

    emit Transfer(msg.sender,reciver,amount, message, block.timestamp, keyword);
   }


   function getAllTransactions() public view returns(TransferStruct[] memory){
    return transactions;
   }


   function getTransactionCount () public view returns(uint256){
        return transactionCount;
   }
}
