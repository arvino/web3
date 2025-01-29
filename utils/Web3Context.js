import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import IdentityABI from '../contracts/artifacts/contracts/src/Identity.sol/Identity.json';

const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  async function connectWallet() {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setAccount(accounts[0]);
        initializeContract();
      } else {
        throw new Error('Please install MetaMask');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  }

  async function initializeContract() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const identityContract = new ethers.Contract(
        contractAddress,
        IdentityABI.abi,
        signer
      );
      setContract(identityContract);
    } catch (error) {
      console.error('Error initializing contract:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  const value = {
    account,
    contract,
    loading,
    connectWallet
  };

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}

export function useWeb3() {
  return useContext(Web3Context);
} 