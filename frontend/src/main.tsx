import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// // 1. Get projectId
// const projectId = "YOUR_PROJECT_ID";

// // 2. Set chains
// const mainnet = {
// 	chainId: 31337,
// 	name: "Ethereum",
// 	currency: "ETH",
// 	explorerUrl: "https://etherscan.io",
// 	rpcUrl: "http://127.0.0.1:8545",
// };

// // 3. Create a metadata object
// const metadata = {
// 	name: "My Website",
// 	description: "My Website description",
// 	url: "http://localhost:5173", // origin must match your domain & subdomain
// 	icons: ["https://avatars.mywebsite.com/"],
// };

// // 4. Create Ethers config
// const ethersConfig = defaultConfig({
// 	/*Required*/
// 	metadata,

// 	// /*Optional*/
// 	// enableEIP6963: true, // true by default
// 	// enableInjected: true, // true by default
// 	// enableCoinbase: true, // true by default
// 	// rpcUrl: "...", // used for the Coinbase SDK
// 	// defaultChainId: 31337, // used for the Coinbase SDK
// });

// // 5. Create a Web3Modal instance
// createWeb3Modal({
// 	ethersConfig,
// 	chains: [mainnet],
// 	projectId,
// 	enableAnalytics: true, // Optional - defaults to your Cloud configuration
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Toaster />
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
