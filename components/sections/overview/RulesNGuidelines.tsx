import { OverviewCard } from "@/components/cards/OverviewCard";
import Image from "next/image";
import React from "react";

export const RulesNGuidelines = () => {
	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 border-b border-gray-600">
			<div className="flex justify-between w-full items-center  sm:px-12">
				<div className="flex max-lg:flex-col-reverse justify-between w-full items-center max-container">
					<OverviewCard
						title="Rules and"
						highlight="Guidelines"
						desc="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundariesof technology, and creating solutions that can change the world,that's what we're all about!"
					/>
					<div className="flex w-full max-lg:max-w-[600px] max-lg:flex-col p-6 relative items-center justify-center">
						<Image
							src={"/assets/illustrations/rules-guidelines.png"}
							alt="judging"
							width={800}
							height={800}
						/>
						<img
							src="/assets/curl-line.png"
							alt="curl line"
							className="scale-150 lg:hidden mt-4"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
