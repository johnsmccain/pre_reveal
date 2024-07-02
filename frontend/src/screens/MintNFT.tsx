import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import toast from "react-hot-toast";
import { Contract } from "ethers";

import PrerevealAddress from "../../contractsData/Prereveal-address.json";
import PrerevealABI from "../../contractsData/Prereveal.json";

export const MintNFT = ({ signer }: any) => {
	const [isconnected, setIsconnected] = useState<boolean>();
	const [account, setAccount] = useState<boolean>();

	useEffect(() => {
		async function connect() {
			setAccount(await signer?.getAddress());
		}
		connect();
		if (account) setIsconnected(true);
	}, [signer, account]);

	async function mintNFT() {
		try {
			const contract = new Contract(
				PrerevealAddress.address,
				PrerevealABI.abi,
				signer
			);

			await (await contract.safeMint(account)).wait();
			toast.success("Hi five 🎉 you just minted an nft", {
				position: "top-left",
			});
		} catch (error: any) {
			toast.error(error.info.error.message, {
				position: "top-left",
			});
			console.log(error.info.error.message);
		}
	}

	return (
		<div className="w-full ">
			<h1>Mint NFT</h1>
			<div className="flex justify-center">
				{isconnected && <Button onClick={mintNFT}>Mint now</Button>}
				{!isconnected && <Button>Connect Wallet</Button>}
			</div>
		</div>
	);
};
