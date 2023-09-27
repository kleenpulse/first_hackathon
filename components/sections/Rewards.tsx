import Image from "next/image";
import React from "react";
import { OverviewCard } from "../cards/OverviewCard";

export const Rewards = () => {
	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 h-full flex-1 ">
			<div className="max-lg:flex-col flex justify-center w-full items-center max-container sm:px-12 h-full ">
				<div className="flex w-full p-6  items-center justify-center ">
					<div className="flex w-full max-lg:max-w-[600px]  p-6  items-center justify-center">
						<Image
							src={"/assets/illustrations/trophy.png"}
							alt="judging"
							width={800}
							height={800}
						/>
					</div>
				</div>
				<div className="flex flex-col w-full justify-between items-center h-full flex-1 relative ">
					<div className="">
						<OverviewCard
							title="Prizes and"
							highlight="Rewards"
							desc="Highlight of the prizes or rewards for winners and participants"
						/>
					</div>
					<div className="flex w-full overflow-hidden">
						<div className="flex gap-4 lg:gap-6 items-start w-full max-lg:justify-center">
							<div className="flex h-[125px] lg:h-[256px] w-[90px] lg:w-[190px] relative border border-primary rounded-lg bg-primary/10 justify-center items-center">
								<div className="flex flex-col absolute bottom-8 w-full justify-center items-center">
									<p className="text-center text-white font-medium text-[34px] leading-none mb-4">
										2nd
										<span className="font-normal text-[20px] leading-none block">
											Runner
										</span>
									</p>
									<p className="text-center text-primary font-bold text-[30px] font-montserrat">
										N300,000
									</p>
								</div>
								<Image
									src={"/assets/medals/silver.png"}
									alt="judging"
									width={300}
									height={300}
									className="absolute -top-[6rem] h-[176px] w-[170px]"
								/>
							</div>
							<div className=" lg:h-[276px] w-[90px] lg:w-[190px] relative border border-purple rounded-lg bg-purple/10 ">
								<div className="flex flex-col absolute bottom-8 w-full justify-center items-center">
									<p className="text-center text-white font-medium text-[34px] leading-none mb-4">
										1st
										<span className="font-normal text-[20px] leading-none block">
											Runner
										</span>
									</p>
									<p className="text-center text-purple font-bold text-[30px] font-montserrat">
										N400,000
									</p>
								</div>
								<div className="relative -top-[8rem] h-[250px] w-[280px] -left-[2.9rem]">
									<Image
										src={"/assets/medals/gold.png"}
										alt="1st runner"
										width={400}
										height={300}
										className="absolute object-contain h-full w-full"
									/>
								</div>
							</div>
							<div className="flex h-[125px] lg:h-[256px] w-[90px] lg:w-[190px] relative border border-primary rounded-lg bg-primary/10 justify-center items-center">
								<div className="flex flex-col absolute bottom-8 w-full justify-center items-center">
									<p className="text-center text-white font-medium text-[34px] leading-none mb-4">
										3rd
										<span className="font-normal text-[20px] leading-none block">
											Runner
										</span>
									</p>
									<p className="text-center text-primary font-bold text-[30px] font-montserrat">
										N150,000
									</p>
								</div>
								<Image
									src={"/assets/medals/bronze.png"}
									alt="judging"
									width={200}
									height={200}
									className="absolute -top-[6rem] h-[166px] w-[160px]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
