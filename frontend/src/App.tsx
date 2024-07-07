// import ConnectButton from "./components/ConnectBtn";

// import BalanceBtn from "./components/BalanceBtn";
import { ethers } from "ethers";
// import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useEffect, useState } from "react";
import Navber from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { RevealNFT } from "./screens/RevealNFT";
import { NFTs } from "./screens/NFTs";
import { MintNFT } from "./screens/MintNFT";
import { Toaster } from "react-hot-toast";
// import { useWeb3ModalAccount } from "@web3modal/ethers/react";
export default function App() {
	const [signer, setSigner] = useState<any>();
	// const [provider, setProvider] = useState<any>();
	const [account, setAccount] = useState<any>();

	// const [accountAddress, setAccountAddress] = useState<string>();
	const connect = async () => {
		let providerx;
		try {
			if (window.ethereum == null) {
				// If MetaMask is not installed, we use the default provider,
				// which is backed by a variety of third-party services (such
				// as INFURA). They do not have private keys installed,
				// so they only have read-only access
				console.log("MetaMask not installed; using read-only defaults");
				providerx = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
				// setProvider(providerx);
			} else {
				// Connect to the MetaMask EIP-1193 object. This is a standard
				// protocol that allows Ethers access to make all read-only
				// requests through MetaMask.
				providerx = new ethers.BrowserProvider(window.ethereum as any);
				// setProvider(providerx);
				// It also provides an opportunity to request access to write
				// operations, which will be performed by the private key
				// that MetaMask manages for the user.
				setSigner(await providerx?.getSigner());
				setAccount(await (await providerx.getSigner()).getAddress());
			}
		} catch (error) {}
	};

	useEffect(() => {
		connect();
	}, []);
	return (
		<>
			<Toaster />
			{/* <w3m-connect-button /> */}
			<Navber handleClick={connect} account={account} />

			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 container">
				<Routes>
					<Route path="/" element={<MintNFT signer={signer} />} />
					<Route path="/nfts" element={<NFTs signer={signer} />} />
					<Route path={`/reveal/:id`} element={<RevealNFT signer={signer} />} />
				</Routes>
			</main>
		</>
	);
}
