import { useEffect, useState } from "react";
import PrerevealAddress from "../../contractsData/Prereveal-address.json";
import PrerevealABI from "../../contractsData/Prereveal.json";
import { Contract } from "ethers";
import { useParams } from "react-router-dom";
import { IData } from "../interfaces";
export const RevealNFT = ({ signer }: any) => {
	// const [isconnected, setIsconnected] = useState<boolean>();
	const [account, setAccount] = useState<boolean>();
	const [data, setData] = useState<IData>();
	// const [ethData, setEthData] = useState<String>();
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
		// if (account) setIsconnected(true);
	}, [signer, account]);

	return (
		<div className="w-full bg-inherit ">
			<div className="flex justify-around gap-3 max-sm:block">
				<div className=" w-full relative rounded-lg overflow-hidden ">
					<img
						src={`https://ipfs.io/ipfs/${data?.image.split("/")[2]}`}
						className="h-full w-full"
					/>
					<div className="absolute bottom-0 p-5 bg-black bg-opacity-20">
						<p className="text-2xl font-bold text-yellow-50">{data?.name}</p>
					</div>
				</div>
				<div className=" w-full">
					{data?.attributes?.map((data: any) => {
						return (
							<div className="m-3 bg-black bg-opacity-20 flex justify-between py-2 px-3 rounded-lg">
								<div className="">{data?.trait_type}</div>
								<p>{data?.value}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
