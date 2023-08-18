import React, { useEffect, useState } from "react";
import { contractAbi, contractAddress } from "../utils/constants";
import { ethers } from 'ethers'

export const TransactionContext = React.createContext();
const { ethereum } = window;
const getTransactionContract = () => {

    const provider = new ethers.BrowserProvider(ethereum);
    const signer = provider.getSigner()
    const TransactionContract = new ethers.Contract(contractAddress, contractAbi, signer);

    console.log(TransactionContract)
}


export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState(null)
    const [formData,setFormData] = useState({addressTo:'', amount:'', message:'', keyword:''});

    const handleChange = (e,name)=>{
        setFormData((prevState)=>({...prevState, [name]:e.target.value}))
    }
    const checkIfWalletConnected = async () => {
        try {
            if (!ethereum) return alert('please connect your metamask wallet');
            const accounts = await ethereum.request({ method: 'eth_accounts' })

            if (accounts.length) {
                setCurrentAccount(accounts[0])
            } else {
                alert('No Account Found......')
            }
            console.log(accounts)
        } catch (err) {
            console.log(err)
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('please connect your metamask wallet');
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setCurrentAccount(accounts[0])

            console.log(currentAccount)
        } catch (error) {
            console.log(error)

            throw new Error('No ethereum object.')
        }

    }


    useEffect(() => {
        checkIfWalletConnected()
    }, [])

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </TransactionContext.Provider>
    )
}
