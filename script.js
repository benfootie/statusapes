// Initialize Web3
const web3 = new Web3(window.ethereum);

// Contract details
const contractAddress = '0x3cEF1B58D1349749886Ee8a44130D0D9568291d7'; // Matches Apechain deployment
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CHARS_PER_LINE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_BATCH_SIZE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_TEXT_LENGTH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MINT_PRICE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "batchMintNFT",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenText",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "mintNFT",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "refreshMetadata",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "setTokenText",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Desired network ID for Apechain
const desiredNetworkId = 33139;

// Check if MetaMask is on the right network
async function checkNetwork() {
    const networkId = await web3.eth.net.getId();
    console.log('Current network ID:', networkId);
    if (Number(networkId) !== desiredNetworkId) {
        alert(`Please switch MetaMask to Apechain (ID: ${desiredNetworkId}). Current network ID: ${networkId}`);
        throw new Error('Incorrect network');
    }
}

// Connect wallet function
async function connectWallet() {
    if (window.ethereum && window.ethereum.isMetaMask) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            await checkNetwork();
            console.log('Connected to account:', accounts[0]);
            return accounts[0];
        } catch (error) {
            console.error('Connection error:', error);
            alert('Failed to connect wallet: ' + error.message);
            return null;
        }
    } else {
        alert('Please install MetaMask to use this feature.');
        return null;
    }
}

// Function to update minted count
async function updateMintedCount() {
    try {
        const totalSupply = await contract.methods.totalSupply().call();
        document.getElementById('minted-count').textContent = `Minted: ${totalSupply} / 2222`;
    } catch (error) {
        console.error('Error fetching total supply:', error);
    }
}

// Function to fetch and display mint price
async function fetchAndDisplayMintPrice() {
    try {
        const mintPriceWei = await contract.methods.MINT_PRICE().call();
        const mintPriceApe = web3.utils.fromWei(mintPriceWei, 'ether');
        document.getElementById('mint-price').textContent = `Mint Price: ${mintPriceApe} $Ape`;
        return mintPriceWei; // Return price in wei for transaction
    } catch (error) {
        console.error('Error fetching mint price:', error);
        alert('Failed to fetch mint price. Please try again.');
        return null;
    }
}

// Mint Page Logic
if (document.getElementById('connect-wallet-mint')) {
    updateMintedCount(); // Update the count when the page loads

    document.getElementById('connect-wallet-mint').addEventListener('click', async () => {
        const userAddress = await connectWallet();
        if (!userAddress) return;

        console.log('User address:', userAddress);

        try {
            // Fetch and display the mint price
            const mintPrice = await fetchAndDisplayMintPrice();
            if (!mintPrice) return;

            // Show the mint button
            document.getElementById('mint-area').innerHTML = '<button id="mint-button">Mint</button>';
            document.getElementById('mint-button').addEventListener('click', async () => {
                try {
                    // Estimate gas for the publicMint transaction, including value
                    const gasEstimate = await contract.methods.publicMint().estimateGas({
                        from: userAddress,
                        value: mintPrice
                    });
                    console.log('Mint gas estimate:', gasEstimate);

                    // Attempt to mint with the correct value
                    const tx = await contract.methods.publicMint().send({
                        from: userAddress,
                        value: mintPrice,
                        gas: Math.floor(gasEstimate * 1.2) // 20% buffer
                    });
                    console.log('Mint transaction receipt:', tx);
                    alert('Minted successfully!');
                    updateMintedCount(); // Update the count after a successful mint
                } catch (error) {
                    console.error('Minting error:', error);
                    // Handle specific error messages from the contract
                    if (error.message.includes("Already minted")) {
                        alert('You have already minted an NFT from this wallet.');
                    } else if (error.message.includes("Maximum supply reached")) {
                        alert('Maximum supply has been reached.');
                    } else if (error.message.includes("Incorrect payment amount")) {
                        alert('Incorrect payment amount. Please send the exact mint price.');
                    } else if (error.message.includes("out of gas")) {
                        alert('Minting failed: Out of gas. Please try again with a higher gas limit.');
                    } else if (error.message.includes("revert")) {
                        alert('Minting failed: The contract reverted the transaction. Check if all conditions are met.');
                    } else {
                        alert('Minting failed: ' + error.message);
                    }
                }
            });
        } catch (error) {
            console.error('Error during minting setup:', error);
            alert('Failed to set up minting: ' + error.message);
        }
    });
}

// Status Update Logic (unchanged)
if (document.getElementById('connect-wallet')) {
    document.getElementById('connect-wallet').addEventListener('click', async () => {
        const userAddress = await connectWallet();
        if (!userAddress) return;

        // Show the update form
        document.getElementById('update-form').style.display = 'block';

        // Handle status text input
        const textInput = document.getElementById('status-text');
        const charCount = document.getElementById('char-count');
        const submitBtn = document.getElementById('submit-btn');

        textInput.addEventListener('input', () => {
            const length = textInput.value.length;
            charCount.textContent = length;
            // Enable submit button if length is between 1 and 128 characters
            submitBtn.disabled = length === 0 || length > 128;
        });

        // Handle status submission
        submitBtn.addEventListener('click', async () => {
            const tokenId = document.getElementById('token-id').value;
            const text = textInput.value;

            if (!tokenId || text.length === 0 || text.length > 128) {
                alert('Please enter a valid Token ID and status text (1-128 characters).');
                return;
            }

            try {
                // Check token ownership
                const owner = await contract.methods.ownerOf(tokenId).call();
                console.log('Token owner:', owner);
                if (owner.toLowerCase() !== userAddress.toLowerCase()) {
                    alert('You do not own this token.');
                    return;
                }

                // Estimate gas for the setTokenText transaction
                const gasEstimate = await contract.methods.setTokenText(tokenId, text).estimateGas({ from: userAddress });
                console.log('SetTokenText gas estimate:', gasEstimate);

                // Update status
                const tx = await contract.methods.setTokenText(tokenId, text).send({
                    from: userAddress,
                    gas: Math.floor(gasEstimate * 1.2) // 20% buffer
                });
                console.log('SetTokenText transaction receipt:', tx);
                alert('Status updated successfully!');
            } catch (error) {
                console.error('Update error:', error);
                // Improved error handling for more specific messages
                if (error.message.includes("out of gas")) {
                    alert('Transaction failed: Out of gas. Please try again with a higher gas limit.');
                } else if (error.message.includes("revert")) {
                    alert('Transaction failed: The contract reverted the transaction. Check if all conditions are met (e.g., token exists, you are the owner, text length is valid).');
                } else if (error.message.includes("Returned values aren't valid")) {
                    alert('Transaction failed: Likely an ABI mismatch or network issue. Ensure MetaMask is on the same network as Remix and the contract address matches the one in Remix.');
                } else {
                    alert('Failed to update status: ' + error.message);
                }
            }
        });
    });
}