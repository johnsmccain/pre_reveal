/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

export default function Navber({ handleClick, account }: any) {
	const [isConnectec, setIsConnectec] = useState<boolean>(false);
	useEffect(() => {
		if (account) setIsConnectec(true);
		// console.log(account);
		return () => {};
	}, [account]);

	return (
		<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="lg:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<a href="#" className="mr-6 hidden lg:flex">
						<MountainIcon className="h-6 w-6" />
						<span className="sr-only">Acme Inc</span>
					</a>
					<div className="grid gap-2 py-6">
						<a
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold">
							Home
						</a>
						<Link
							to={"/nfts"}
							className="flex w-full items-center py-2 text-lg font-semibold">
							NFTs
						</Link>
						{/* <Link
							to={"/reveal"}
							className="flex w-full items-center py-2 text-lg font-semibold">
							Reveal
						</Link> */}
						{isConnectec ? (
							<Button
								variant="outline"
								className="flex w-full items-center py-2 text-lg font-semibold">
								{account.slice(0, 4)}...{account.slice(-4)}
							</Button>
						) : (
							<Button
								variant="outline"
								onClick={() => handleClick()}
								className="flex w-full items-center py-2 text-lg font-semibold">
								Connect
							</Button>
						)}
					</div>
				</SheetContent>
			</Sheet>
			<a href="#" className="mr-6 hidden lg:flex">
				<MountainIcon className="h-6 w-6" />
				<span className="sr-only">Guild Audit</span>
			</a>
			<nav className="ml-auto hidden lg:flex gap-6">
				<Link
					to={"/"}
					className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
					Home
				</Link>
				<Link
					to={"/nfts"}
					className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
					NFTs
				</Link>
				{/* <Link
					to={"/reveal"}
					className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
					RevealNFT
				</Link> */}
				{isConnectec ? (
					<Button
						variant="outline"
						className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
						{account.slice(0, 4)}...{account.slice(-4)}
					</Button>
				) : (
					<Button
						variant="outline"
						onClick={() => handleClick()}
						className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
						Connect
					</Button>
				)}
			</nav>
		</header>
	);
}

function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}
