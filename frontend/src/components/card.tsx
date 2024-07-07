import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Contract } from "ethers";
import PrerevealAddress from "../../contractsData/Prereveal-address.json";
import PrerevealABI from "../../contractsData/Prereveal.json";
import toast from "react-hot-toast";

export const Card = ({ uri, id, signer }: any) => {
	const [data, setData] = useState<any>();

	async function fetchData() {
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

	async function revealNFT() {
		try {
			const contract = new Contract(
				PrerevealAddress.address,
				PrerevealABI.abi,
				signer
			);

			await (
				await contract.revealAndSetBaseURI(
					id,
					`https://ipfs.io/ipfs/QmWiQE65tmpYzcokCheQmng2DCM33DEhjXcPB6PanwpAZo/${
						1 + id
					}`
				)
			).wait();

			toast.success("Hi five 🎉 you just minted an nft", {
				position: "top-left",
			});
		} catch (error: any) {
			if (error?.info?.error?.message) {
				toast.error(error?.info?.error?.message, {
					position: "top-left",
				});
				console.log(error.info.error.message);
				return;
			}
			console.log(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, [uri, data]);

	return (
		<div className="max-w-[300px] w-full bg-slate-500 rounded-lg overflow-hidden">
			<div className=" mx-auto">
				{data && (
					<img
						src={`https://ipfs.io/ipfs/${data?.image.split("/")[2]}`}
						alt=""
						className="object-cover mx-auto"
					/>
				)}
				{!data && (
					<img
						src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${id}`}
						alt=""
						className="object-cover mx-auto h-4/5"
					/>
				)}
			</div>
			<div className="flex justify-around p-2">
				{!data && (
					<Button className="mr-2" onClick={revealNFT}>
						Reveal
					</Button>
				)}

				{data && (
					<Link to={`/reveal/${id}`} className="">
						<Button variant={"outline"} className="">
							Open
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};
