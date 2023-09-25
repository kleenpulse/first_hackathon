import Button from "@/components/btn/Button";
import { OverviewCard } from "@/components/cards/OverviewCard";
import { overviews } from "@/constants/constants";
import Image from "next/image";
import React from "react";

export const Judging = () => {
	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 border-b border-gray-600 ">
			<div className="flex justify-center gap-8 lg:gap-16 xl:gap-28 w-full items-center max-container sm:px-12">
				<div className="flex w-full">
					<Image
						src={"/assets/illustrations/woman-man.png"}
						alt="judging"
						width={800}
						height={800}
					/>
				</div>
				<div className="flex justify-center items-center  w-full max-lg:mx-4">
					<div className="flex flex-col justify-center items-start ">
						<h2 className="text-[32px] font-bold text-white mb-6">
							Judging Criteria
							<br /> <span className="text-primary">Key attributes</span>
						</h2>
						{overviews.map((overview) => (
							<p
								key={overview.highlight}
								className="text-white text-[15px] mb-8 font-normal tracking-wide w-full max-w-[450px] xl:max-w-[550px]"
							>
								<span className="text-darkPink text-[16px] font-bold font-montserrat">
									{overview.highlight}&nbsp;
								</span>
								{overview.desc}
							</p>
						))}
						<Button text="Read more" />
					</div>
				</div>
			</div>
		</div>
	);
};
