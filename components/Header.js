import React from 'react';
import { useWeb3 } from '../utils/Web3Context';
import styles from '../styles/Header.module.css';

export default function Header() {
  const { account, connectWallet } = useWeb3();

  return (
    <header className={styles.header}>
      <div className={styles.walletConnect}>
        {account ? (
          <div className={styles.accountInfo}>
            <i className="fas fa-wallet"></i>
            <span>{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
          </div>
        ) : (
          <button onClick={connectWallet} className={styles.connectButton}>
            <i className="fas fa-plug"></i>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
} 