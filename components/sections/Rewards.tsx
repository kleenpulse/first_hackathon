import Image from "next/image";
import React from "react";
import { OverviewCard } from "../cards/OverviewCard";

export const Rewards = () => {
	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 h-full flex-1 ">
			<div className="max-lg:flex-col flex justify-center w-full items-center max-container sm:px-12 h-full lg:gap-8 xl:gap-16">
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
					<div className="flex flex-col mb-8 lg:mb-16 max-lg:w-full max-lg:items-center max-lg:px-2 ">
						<h2 className="text-[32px] font-bold text-white mb-6">
							Prizes and
							<br /> <span className="text-primary">Rewards</span>
						</h2>
						<p className="text-white text-[14px] font-montserrat tracking-wide leading-7 w-full max-w-[400px] xl:max-w-[550px] max-lg:text-center ">
							Highlight of the prizes or rewards for winners and for
							participants.
						</p>
					</div>
					<div className="flex justify-center w-full overflow-hidden  mt-6 max-sm:px-1 lg:h-full lg:pt-16">
						<div className="flex gap-4 lg:gap-6 sm:gap-8 lg:items-start w-full max-lg:justify-center h-full items-center mt-32 max-[440px]:scale-75">
							<div className="flex relative border border-primary rounded-lg bg-primary/10 justify-center items-center sm:max-w-[180px] h-[210px] mb-4">
								<div className=" absolute -top-[4rem]">
									<Image
										src={"/assets/medals/silver.png"}
										alt="judging"
										width={300}
										height={300}
									/>
								</div>
								<div className="flex flex-col px-4 mb-8  w-full justify-end items-center  h-full">
									<p className="text-center text-white font-medium text-[34px] leading-none mb-2">
										2nd
										<span className="font-normal text-[20px] leading-none block">
											Runner
										</span>
									</p>
									<p className="text-center text-primary font-bold text-[20px] font-montserrat">
										N300,000
									</p>
								</div>
							</div>

							<div className="flex relative border border-purple rounded-lg bg-purple/10 justify-center items-center sm:max-w-[180px] h-[210px]">
								<div className=" absolute -top-24 w-full scale-150">
									<Image
										src={"/assets/medals/gold.png"}
										alt="judging"
										width={300}
										height={300}
									/>
								</div>
								<div className="flex flex-col px-4 mb-12  w-full justify-end items-center  h-full">
									<p className="text-center text-white font-medium text-[34px] leading-none mb-2">
										1st
										<span className="font-normal text-[20px] leading-none block">
											Runner
										</span>
									</p>
									<p className="text-center text-purple font-bold text-[20px] font-montserrat">
										N400,000
									</p>
								</div>
							</div>

							<div className="flex relative border border-primary rounded-lg bg-primary/10 justify-center items-center sm:max-w-[180px] h-[210px] mb-4">
								<div className=" absolute -top-[4rem]">
									<Image
										src={"/assets/medals/bronze.png"}
										alt="judging"
										width={300}
										height={300}
									/>
								</div>
								<div className="flex flex-col px-4 mb-8  w-full justify-end items-center  h-full">
									<p className="text-center text-white font-medium text-[34px] leading-none mb-2">
										3rd
										<span className="font-normal text-[20px] leading-none block">
											Runner
										</span>
									</p>
									<p className="text-center text-primary font-bold text-[20px] font-montserrat">
										N150,000
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
