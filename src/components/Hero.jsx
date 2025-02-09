import React from 'react';
import Cards from './Cards';
import { ABI, Address } from '@/utils/person';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

export default function Hero(props) {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("Connect Metamask");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");

  const [getPeopleData, setGetPeopleData] = useState([]);

  async function initweb3() {
    if (window.ethereum) {
      const web3instance = new Web3(window.ethereum);
      setWeb3(web3instance);
      try {
        await window.ethereum.enable();
        const accounts = await web3instance.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      const web3instance = new Web3(window.web3.currentProvider);
      setWeb3(web3instance);
      const accounts = await web3instance.eth.getAccounts();
      setAccount(accounts[0]);
    } else {
      alert("Please add Metamask to your browser");
    }
  }

  useEffect(() => {
    if (web3) {
      const contractInstant = new web3.eth.Contract(ABI, Address);
      setContract(contractInstant);
    }
  }, [web3]);

  async function callGetPeople() {
    if (contract) {
      const data = await contract.methods.getPeople().call();
      console.log(data);
      setGetPeopleData(data);
    } else {
      alert("Connect with Metamask to get Data");
    }
  }

  async function callAddPeople() {
    if (contract && firstname !== "" && lastname !== "" && message !== "" && account !== "Connect Metamask") {
      const data = await contract.methods.addPeople(firstname, lastname, message, account).send({ from: account });
      console.log(data);
      callGetPeople();
    } else {
      alert("Please Fill all Fields");
    }
  }

  return (
    <div className={`${props.lightMode ? "text-black bg-white" : "text-white bg-black"} flex flex-col gap-6 px-5 sm:px-10 md:px-20 py-10`}>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row gap-6'>
        {/* Left Section - Text */}
        <div className='w-full md:w-1/2 flex flex-col gap-3 justify-center text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold'>sealX3</h1>
          <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${props.lightMode ? "text-black/60" : "text-white/75"}`}>
            Seal Truth on Blockchain
          </h3>
          <p className='text-sm sm:text-base w-full md:w-3/4 mx-auto md:mx-0'>
            SealX is a Web3-powered decentralized application (dApp) that enables users to permanently inscribe messages on the Ethereum Sepolia testnet via a Solidity-based smart contract. Leveraging MetaMask authentication, users can securely submit their first name, last name, and message, ensuring tamper-proof, censorship-resistant, and verifiable on-chain records.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className={`hover:scale-105 duration-500 hover:shadow-lg hover:shadow-green-500 w-full md:w-1/2 mx-auto px-5 sm:px-10 md:px-16 py-6 sm:py-12 border rounded-xl ${props.lightMode ? "border-black" : "border-white"} flex flex-col gap-5`}>
          <h1 className='text-center text-2xl sm:text-3xl font-semibold'>Form</h1>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col'>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name='firstname'
                id='firstname'
                className={`${props.lightMode ? "bg-green-100" : "bg-black/50"} w-full p-2 sm:p-3 rounded-xl border`}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name='lastname'
                id='lastname'
                className={`${props.lightMode ? "bg-green-100" : "bg-black/50"} w-full p-2 sm:p-3 rounded-xl border`}
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="message">Message</label>
              <input
                type="text"
                name='message'
                id='message'
                className={`${props.lightMode ? "bg-green-100" : "bg-black/50"} w-full p-2 sm:p-3 rounded-xl border`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <button
                className='px-5 py-2 bg-orange-500 hover:bg-orange-600 duration-200 rounded-xl hover:font-semibold w-full sm:w-auto text-xs sm:text-sm md:text-base break-all text-center'
                onClick={initweb3}
              >
                {account}
              </button>
            </div>
            <div className='flex flex-col'>
              <button
                className='px-5 py-2 bg-green-500 hover:bg-green-600 duration-200 rounded-xl hover:font-semibold'
                onClick={callAddPeople}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div>
        <div className='flex flex-col sm:flex-row gap-5 items-center'>
          <h2 className='text-2xl sm:text-3xl font-bold'>Cards</h2>
          <button
            className='bg-green-500 hover:bg-green-700 duration-500 hover:scale-110 border rounded-xl font-bold p-2 text-black'
            onClick={callGetPeople}
          >
            Get Data
          </button>
        </div>
        <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {getPeopleData
            .slice()
            .reverse()
            .map((item, index) => (
              <Cards
                key={index}
                lightMode={props.lightMode}
                firstName={item[0]}
                lastName={item[1]}
                message={item[2]}
                walletAddress={item[3]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}