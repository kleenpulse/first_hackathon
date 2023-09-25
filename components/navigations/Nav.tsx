"use client";

import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { useState } from "react";
import Button from "../btn/Button";
import Image from "next/image";

export const Nav = () => {
	const [isMenu, setIsMenu] = useState(false);

	return (
		<nav className="flex w-full py-4 sm:py-8 lg:py-0 lg:mt-10 lg:pb-6 max-container min-[1440px]:px-0 px-2 sm:px-8">
			<div className="flex justify-evenly items-center w-full ">
				<div className="flex w-full">
					<p className="text-3xl font-bold text-white">
						get<span className="text-primary">linked</span>
					</p>
				</div>
				<div className=" hidden lg:flex justify-between w-full items-center">
					<div className="flex gap-6   xl:gap-12 mr-8 xl:mr-0">
						{navLinks.map((link) => (
							<Link
								href={link.tag}
								key={link.title}
								className="text-white hover:text-primary transition-colors duration-300 tracking-wide text-lg "
							>
								{link.title}
							</Link>
						))}
					</div>
					<Button text="Register" />
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
						className={`fixed h-screen backdrop-blur-lg w-full z-40 bottom-0 right-0 bg-secondary/30 ${
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
									className={`text-white bg transition-colors duration-300 tracking-wide text-lg`}
									onClick={() => setIsMenu(!isMenu)}
								>
									{link.title}
								</Link>
							))}
							<div>
								<Button text="Register" />
							</div>
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
