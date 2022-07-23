import React, { createContext, useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";

export const MetamaskContext = createContext();

export const MetamaskProvider = ({ children }) => {
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState(0);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        (async function connectMetamask() {
            try {
                if (window.ethereum.networkVersion !== "4") {
                    await window.ethereum.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: "0x4" }],
                    });
                }
                if (window.ethereum) {
                    const _provider = new ethers.providers.Web3Provider(
                        window.ethereum,
                        "rinkeby"
                    );

                    // Prompt user for account connections
                    await _provider.send("eth_requestAccounts", []);
                    const signer = _provider.getSigner();
                    setAddress(await signer.getAddress());
                    setBalance(await signer.getBalance());
                } else {
                    toast.error("Please connect to Metamask");
                }
            } catch (error) {
                toast.error(error.message);
            }
        })();
        setProvider(new ethers.providers.Web3Provider(window.ethereum, "rinkeby"));
    }, []);
    return (
        <MetamaskContext.Provider value= {{ address, balance: ethers.utils.formatEther(balance), provider }}>
    { children }
    </MetamaskContext.Provider>
  );
};
