import { useEffect, useState } from "react";
import { Card } from "../components/card";
import PrerevealAddress from "../../contractsData/Prereveal-address.json";
import PrerevealABI from "../../contractsData/Prereveal.json";
import { Contract } from "ethers";
export const NFTs = ({ signer }: { signer: any }) => {
	const [ethData, setEthData] = useState<Array<any>>();
	async function connectToBlockchain() {
		let tempArray = [];
		const contract = new Contract(
			PrerevealAddress.address,
			PrerevealABI.abi,
			signer
		);
		// console.log(await (await contract.safeMint(signer?.address)).wait());
		// console.log(await contract.owner());
		// await (await contract.safeMint(signer?.address)).wait();

		// console.log(await contract.nextTokenId());
		for (let i = 0; i < (await contract.nextTokenId()); i++) {
			tempArray.push(await contract.tokenURI(i));
		}
		setEthData(tempArray);
	}
	// console.log(ethData);

	useEffect(() => {
		connectToBlockchain();
	}, [signer]);
	// console.log(ethData);
	return (
		<div className="w-full">
			<div className="flex justify-center flex-wrap gap-3">
				{ethData?.map((data: any, id: number) => {
					return <Card key={id} uri={data} id={id} signer={signer} />;
				})}
			</div>
		</div>
	);
};
