import { useEffect, useState } from "react";
import PrerevealAddress from "../../contractsData/Prereveal-address.json";
import PrerevealABI from "../../contractsData/Prereveal.json";
import { Contract } from "ethers";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export const RevealNFT = ({ signer }: any) => {
	const [isconnected, setIsconnected] = useState<boolean>();
	const [account, setAccount] = useState<boolean>();
	const [data, setData] = useState<[]>();
	const [ethData, setEthData] = useState<String>();
	const { id } = useParams();

	async function connectToBlockchain() {
		try {
			const contract = new Contract(
				PrerevealAddress.address,
				PrerevealABI.abi,
				signer
			);
			let ethe = await contract.tokenURI(id);
			fetchData(ethe);
		} catch (error) {
			console.log(error);
		}
	}
	console.log(data);
	async function fetchData(uri: string) {
		try {
			const response = await fetch(uri);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();

			setData(data);
		} catch (error) {
			console.error("Fetch error:", error);
		}
		4;
	}

	useEffect(() => {
		async function connect() {
			setAccount(await signer?.getAddress());
		}
		connect();
		connectToBlockchain();
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
		<div className="w-full bg-inherit ">
			<div className="flex justify-around gap-3">
				<div className="bg-red-500 w-full">
					<img src="" />
				</div>
				<div className="bg-green-500 w-full">right</div>
			</div>
		</div>
	);
};
