import { useEffect, useState } from "react";
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
			<h1 className="font-sans">
				Click the Mint NFT button to mint a random NFT
			</h1>
			<div className="flex justify-center py-9">
				{isconnected && <Button onClick={mintNFT}>Mint now</Button>}
				{!isconnected && <Button>Connect Wallet</Button>}
			</div>
		</div>
	);
};
