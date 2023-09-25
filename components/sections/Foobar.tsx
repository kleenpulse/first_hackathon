import { footerLinks } from "@/constants/constants";
import Link from "next/link";
import React from "react";

export const Foobar = () => {
	return (
		<div className="flex flex-col justify-center w-full items-center py-20 relative ">
			<div className="max-lg:flex-col flex w-full gap-10 lg:gap-16 xl:justify-between max-container justify-center">
				<div className="flex flex-col">
					<p className="text-3xl  font-bold text-white mb-4">
						get<span className="text-primary">linked</span>
					</p>
					<p className="font-montserrat text-[14px] text-white w-full max-w-[346px] lg:max-w-[446px]">
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</p>
					<div className="font-montserrat text-[14px] text-white mt-12 flex items-center">
						Terms of Use
						<span className="text-primary font-medium mx-2 text-2xl">|</span>
						Privacy Policy
					</div>
				</div>
				<div className="flex flex-col">
					<p className="text-primary font-medium text-2xl font-montserrat mb-4">
						Useful Links
					</p>
					<div className="flex flex-col gap-4 ml-2">
						{footerLinks.map((link) => (
							<Link
								href={link.href}
								key={link.title}
								className="text-white hover:text-primary transition-all duration-300  text-sm font-montserrat"
							>
								{link.title}
							</Link>
						))}
						<div className="flex items-center gap-4">
							<p className="text-primary font-medium text-[12px] font-montserrat">
								Follow us
							</p>
							<img src="/assets/socials/insta.svg" />
							<img src="/assets/socials/x.svg" />
							<img src="/assets/socials/fb.svg" />
							<img src="/assets/socials/linkedin.svg" />
						</div>
					</div>
				</div>
				<div className="flex flex-col">
					<p className="text-primary font-medium text-2xl font-montserrat mb-4">
						Contact Us
					</p>
					<div className="flex flex-col gap-6">
						<div className="flex text-white gap-3">
							<img src="/assets/socials/phone.svg" />
							<p>+234 6707653444</p>
						</div>
						<div className="flex text-white gap-3 items-start">
							<img src="/assets/socials/location.svg" />
							<div className="flex flex-col gap-2">
								<p>27,Alara Street</p>
								<p>Yaba 100012</p>
								<p>Lagos State</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex absolute bottom-2">
				<p className="mb-4 font-montserrat text-[12px] text-white w-full ">
					All rights reserved. © getlinked Ltd.
				</p>
			</div>
		</div>
	);
};
