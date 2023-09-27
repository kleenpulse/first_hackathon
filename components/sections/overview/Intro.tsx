import { OverviewCard } from "@/components/cards/OverviewCard";
import Image from "next/image";
import React from "react";

export const Intro = () => {
	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 border-b border-gray-600 ">
			<div className="flex max-lg:flex-col justify-center gap-8 lg:gap-16 xl:gap-28 w-full items-center max-container sm:px-12">
				<div className="flex w-full max-lg:max-w-[600px] max-lg:flex-col p-6 relative items-center justify-center">
					<Image
						src={"/assets/illustrations/bulb.png"}
						alt="judging"
						width={800}
						height={800}
						priority
					/>
					<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-center font-montserrat text-[24px] mt-4">
						The Big
						<br /> Idea!
					</p>
					<img
						src="/assets/curl-line.png"
						alt="curl line"
						className="scale-150 lg:hidden mt-4"
					/>
				</div>
				<div className="flex justify-center items-center  w-full max-lg:mx-4">
					<div className="flex flex-col justify-center items-start ">
						<OverviewCard
							title="Introduction to getlinked"
							highlight="tech Hackathon 1.0"
							desc="Our tech hackathon is a melting pot of visionaries, and its purpose is
				as clear as day: to shape the future. Whether you're a coding genius, a
				design maverick, or a concept wizard, you'll have the chance to
				transform your ideas into reality. Solving real-world problems, pushing
				the boundaries of technology, and creating solutions that can change the
				world, that's what we're all about!"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
