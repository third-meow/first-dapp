
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
		"inputs": [],
		"name": "currentWeather",
		"outputs": [
			{
				"name": "",
				"type": "uint16"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "report",
				"type": "uint16"
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
				"type": "uint16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

contractAddress = '0x10f9be4493498c43ad70be1be5c5103e90d12c07';
contract = web3.eth.contract(contractAbi).at(contractAddress);

// Display weather 
function dispLiveWeather(){
	res = contract.currentWeather.call();
	current = res.c[0];
	$('#currentWeather').html(current);
}

dispLiveWeather();

// Submit weather report
$('form').on('submit', function(event) {
	event.preventDefault();
	contract.setWeather(Number($('input').val()));
	dispLiveWeather();
})
