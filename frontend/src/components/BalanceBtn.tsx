import {
	useWeb3ModalProvider,
	useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import { BrowserProvider, Contract, formatUnits } from "ethers";
import PrerevealAddress from "../../contractsData/Prereveal-address.json";
import PrerevealABI from "../../contractsData/Prereveal.json";

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)

export default function () {
	const { address, chainId, isConnected } = useWeb3ModalAccount();
	const { walletProvider } = useWeb3ModalProvider();

	async function getBalance() {
		if (!isConnected) throw Error("User disconnected");

		const ethersProvider = new BrowserProvider(walletProvider as any);
		const signer = await ethersProvider.getSigner();
		// The Contract object
		const PrerevealContract = new Contract(
			PrerevealAddress.address,
			PrerevealABI.abi,
			signer
		);
		console.log(PrerevealContract);
		const USDTBalance = await PrerevealContract.balanceOf(address);

		console.log(formatUnits(USDTBalance, 18));
	}

	return <button onClick={getBalance}>Get User Balance</button>;
}
