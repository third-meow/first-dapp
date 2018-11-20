pragma solidity ^0.4.25;
// We have to specify what version of compiler this code will compile with

contract Weather {
  /*
  The weather report
  */
  uint16 public current;

  /*
  This is the constructor which will be called once when you
  deploy the contract to the blockchain
  */
  constructor() public {
    current = 0;
  }

  /*
  Returns the current weather report
  */
  function currentWeather() public returns (uint16) {
    return current;
  }

  /*
  Sets the current weather report
  */
  function setWeather(uint16 report) public {
    current = report;
  }
}
