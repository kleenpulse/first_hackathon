"use client";

import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "../btn/Button";
import Image from "next/image";

export const Nav = ({
	path,
	pathname,
}: {
	path?: string;
	pathname?: string;
}) => {
	const [isMenu, setIsMenu] = useState(false);

	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== "undefined") {
				setScrollY(window.scrollY);
			}
		};

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	const navPadding =
		scrollY >= 120 ? "py-2 sm:py-4 lg:py-2" : "py-4 sm:py-8 lg:py-6";

	return (
		<nav
			className={`flex w-full ${navPadding} max-container min-[1440px]:px-0 px-2 sm:px-8 ${
				pathname?.includes("contact") ? "!py-4" : ""
			}`}
		>
			<div className="flex justify-evenly items-center w-full ">
				<div className="flex w-full">
					<Link href="/" className="text-3xl font-bold text-white main">
						<p>
							get<span className="text-primary">linked</span>
						</p>
					</Link>
				</div>
				<div className=" hidden lg:flex justify-between w-full items-center">
					<div className="flex gap-6   xl:gap-12 mr-8 xl:mr-0">
						{navLinks.map((link) => (
							<Link
								href={link.tag}
								key={link.title}
								className={`text-white links font-medium transition-all duration-300 tracking-wide text-lg ${
									pathname?.includes(link.title.toLowerCase())
										? "active-link"
										: ""
								}`}
								prefetch
							>
								{link.title}
							</Link>
						))}
					</div>
					<Link href="/contact?path=register" className="">
						{path === "register" ? (
							<div className="register  p-[2px] rounded-lg font-medium  text-lg tracking-wide cursor-not-allowed opacity-50">
								<button className="bg-secondary py-[14px] px-[40px] rounded-lg  w-full text-white">
									Register
								</button>
							</div>
						) : (
							<Button text="Register" />
						)}
					</Link>
				</div>

				<div className=" lg:hidden flex w-full justify-end relative">
					<Image
						src={"/assets/menu.svg"}
						alt="menu"
						width={35}
						height={35}
						className={`cursor-pointer  ${isMenu && "hidden"}`}
						onClick={() => setIsMenu(!isMenu)}
					/>

					<div
						className={`fixed h-screen backdrop-blur-lg w-full z-50 bottom-0 right-0 bg-secondary/30 ${
							!isMenu && "hidden"
						} `}
						onClick={() => setIsMenu(!isMenu)}
					/>
					<div
						className={`flex fixed sm:absolute top-8  right-4 z-50 h-fit w-[250px] nav-gradient  items-center rounded-xl shadow-xl shadow-black/40 p-[2px] opacity-0 show-menu ${
							!isMenu && "hidden"
						}`}
					>
						<div className="flex flex-col pl-4 py-6 gap-6 relative w-full h-full bg-secondary rounded-xl">
							{navLinks.map((link) => (
								<Link
									href={link.tag}
									key={link.title}
									className={`text-white links font-medium transition-all duration-300 tracking-wide text-lg w-fit ${
										pathname?.includes(link.title.toLowerCase())
											? "active-link"
											: ""
									}`}
									onClick={() => setIsMenu(!isMenu)}
								>
									{link.title}
								</Link>
							))}

							<Link
								href="/contact?path=register"
								onClick={() => setIsMenu(!isMenu)}
								role="button"
							>
								{path === "register" ? (
									<div className="register  p-[2px] rounded-lg font-medium  text-lg tracking-wide w-fit cursor-not-allowed opacity-50">
										<button
											disabled={path === "register" ? true : false}
											className="bg-secondary py-[14px] rounded-lg  px-8 text-white"
										>
											Register
										</button>
									</div>
								) : (
									<Button text="Register" />
								)}
							</Link>

							<div
								className="absolute top-2 right-2 cursor-pointer nav-gradient h-9 w-9 rounded-full flex justify-center items-center p-[1px]"
								onClick={() => setIsMenu(!isMenu)}
							>
								<div className="font-medium text-xl text-white bg-secondary h-full w-full rounded-full flex justify-center items-center">
									<span>X</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
