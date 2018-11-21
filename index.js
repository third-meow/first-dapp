
// Initialize Web3
if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
	console.log("cp");
} else {
	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	console.log("bp");
}

web3.eth.defaultAccount = web3.eth.accounts[9];
contractAbi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_report",
				"type": "string"
			}
		],
		"name": "setWeather",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "current",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
contractAddress = '0x9b103d6562fa58c3660c0b14fc39f497286157fc';

contract = web3.eth.contract(contractAbi).at(contractAddress);

// Display weather 
function dispLiveWeather(){
	current = contract.current()
	$('#currentWeather').html(current);
}

dispLiveWeather();

// Submit weather report
$('form').on('submit', function(event) {
  event.preventDefault();
	contract.setWeather($('input').val());
	dispLiveWeather();
});
