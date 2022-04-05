# CrpytoExchange
This DApp is an exchange that runs on a local blockchain and allows users that have test Ether (ETH) to trade (buy and sell) the exchange's token (the DApp token). It is powered by 2 smart contracts: EthSwap - the contract of the exchange that defines the functions for buying & selling tokens AND Token - a contract that describes the requirements of the ERC-20 standard for issuing fungible tokens on the Ethereum Blockchain.

# Installation
To setup this project (on a Windows machine):

Install the above technologies (Truffle, Ganache, Metamask)
Make Sure Ganache is running (Ganache is the local blockchain)
Connect your MetaMask wallet to Ganache:
a. Click the MetaMask browser extension
b. Click the Networks tab and select Custom RPC
c. Enter settings:
      i. Network Name => Ganache
      ii. New RPC URL (the RPC server on your running Ganache) => http://localhost:7545
      iii. Chain ID => 1337 Explanation
d. Click Save
Select the newly added Ganache network and click the profile picture to reveal more settings
Select "Import Account"
Go to Ganache:
      i. Click the key icon on the first address(Important!) (Ganache provides you with 10 accounts each prefunded with test Ether)
      ii. Copy the private key
Go back to MetaMask, make sure the "Private Key" option is selected, paste the private key you copied and click import.
# Run Project

npm install
truffle migrate
npm start
