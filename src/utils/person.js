export const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_walletAddress",
				"type": "address"
			}
		],
		"name": "addPeople",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPeople",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "_firstName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_lastName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "_message",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "_walletAddress",
						"type": "address"
					}
				],
				"internalType": "struct dlist.Person[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "peopleList",
		"outputs": [
			{
				"internalType": "string",
				"name": "_firstName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_walletAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalPeople",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const Address = "0xa4bfE84f3707e65A701E3711eBAc8F119DBED272"