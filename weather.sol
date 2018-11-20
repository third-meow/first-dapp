pragma solidity ^0.4.25;
// We have to specify what version of compiler this code will compile with

contract Weather {
  /*
  The weather report
  */
  bytes32 public current;

  /*
  This is the constructor which will be called once when you
  deploy the contract to the blockchain
  */
  constructor() public {
    current = "Nobody knows";
  }

  /*
  Returns the current weather report
  */
  function currentWeather() public returns (bytes32) {
    return current;
  }

  /*
  Sets the current weather report
  */
  function setWeather(bytes32 report) public {
    current = report;
  }
}
