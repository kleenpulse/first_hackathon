import Image from "next/image";
import React from "react";

export const Sponsors = () => {
	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 h-full">
			<div className="flex flex-col justify-between  w-full items-center max-container sm:px-12 h-full ">
				<div className="flex w-full justify-center text-white flex-col items-center gap-6">
					<h2 className="text-[32px] font-bold">Partners and Sponsors</h2>
					<p className="text-[14px] font-montserrat tracking-wide leading-7 w-full max-w-[400px] lg:max-w-[530px] text-center">
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors
					</p>
				</div>
				<div className="flex justify-center items-center  w-full xl:max-[1255px] sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:place-items-center  border border-primary p-8 lg:p-16 sm:gap-10 lg:gap-16 mt-8 lg:mt-16 lg:py-28">
					<div className="flex py-4 brand-logo relative  justify-center items-center w-full ">
						<Image
							src={"/assets/brands/brand-liberty.png"}
							alt="judging"
							width={500}
							height={500}
							className="w-1/2 max-w-[130px]"
						/>
					</div>
					<div className="flex py-4 brand-logo relative  justify-center items-center w-full">
						<Image
							src={"/assets/brands/brand-liberpay.png"}
							alt="judging"
							width={500}
							height={500}
							className=" scale-95"
						/>
					</div>
					<div className="flex py-4 brand-logo relative  justify-center items-center w-full">
						<Image
							src={"/assets/brands/brand-winwise.png"}
							alt="judging"
							width={500}
							height={500}
							className="w-1/2 max-w-[130px]"
						/>
					</div>
					<div className="flex py-4 brand-logo relative  justify-center items-start w-full">
						<Image
							src={"/assets/brands/brand-whisper.png"}
							alt="judging"
							width={500}
							height={500}
							className="w-1/2 max-w-[130px]"
						/>
					</div>
					<div className="flex py-4 brand-logo relative  justify-center items-start w-full">
						<h1 className="text-[50px] font-typoHoop text-white font-medium">
							Pay<span className="font-typoHoop text-[#00a3ff]">box</span>
						</h1>
					</div>
					<div className="flex py-4 brand-logo justify-center items-start w-full ">
						<h1 className="text-[40px] font-voces text-white font-medium relative">
							Vuzual <span className="font-volkhov text-[#f00]">Plus</span>
							<p className="text-[11px] font-voces text-white/90 font-normal absolute right-0 bottom-0">
								Design Studios
							</p>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
