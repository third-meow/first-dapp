pragma solidity ^0.4.2;
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
    current = "unset";
  }

  /*
  Sets the current weather report
  */
  function setWeather(bytes32 _report) public {
    current = _report;
  }
}

