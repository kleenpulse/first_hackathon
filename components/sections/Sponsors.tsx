import Image from "next/image";
import React from "react";

export const Sponsors = () => {
	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 h-full">
			<div className="flex flex-col justify-between  w-full items-center max-container sm:px-12 px-4 h-full max-[450px]:px-0">
				<div className="flex w-full justify-center text-white flex-col items-center gap-6">
					<h2 className="sm:text-[32px] text-2xl font-bold">
						Partners and Sponsors
					</h2>
					<p className="text-[14px] font-montserrat tracking-wide leading-7 w-full max-w-[400px] lg:max-w-[530px] text-center">
						Getlinked Hackathon 1.0 is honored to have the following major
						companies as its partners and sponsors
					</p>
				</div>
				<div className="flex justify-center items-center  w-full xl:max-w-[1255px]  border-[2px] rounded-lg border-primary p-0 sm:p-3 lg:p-16  mt-8 lg:mt-16 max-[450px]:scale-90">
					<div className=" justify-center items-center  w-full  grid grid-cols-3 place-items-center  lg:gap-16 sm:gap-8 gap-6 max-[450px]:gap-2  lg:py-20">
						<div className="flex  brand-logo relative  justify-center items-center w-full ">
							<Image
								src={"/assets/brands/brand-liberty.png"}
								alt="judging"
								width={500}
								height={500}
								className="w-[70px] sm:w-[100px] lg:w-[130px] max-[450px]:w-[50%]"
							/>
						</div>
						<div className="flex  brand-logo relative  justify-center items-center w-full ">
							<Image
								src={"/assets/brands/brand-liberpay.png"}
								alt="judging"
								width={500}
								height={500}
								className="w-[70px] sm:w-[100px] lg:w-[130px] max-[450px]:w-[50%]"
							/>
						</div>
						<div className="flex h-full brand-logo relative  justify-center items-center w-full ">
							<Image
								src={"/assets/brands/brand-winwise.png"}
								alt="judging"
								width={500}
								height={500}
								className="w-[70px] sm:w-[100px] lg:w-[130px] max-[450px]:w-[50%]"
							/>
						</div>
						<div className="flex h-full brand-logo relative  justify-center items-center w-full ">
							<Image
								src={"/assets/brands/brand-whisper.png"}
								alt="judging"
								width={500}
								height={500}
								className="w-[70px] sm:w-[100px] lg:w-[130px] max-[450px]:w-[50%]"
							/>
						</div>
						<div className="flex h-full brand-logo relative  justify-center items-center w-full ">
							<h1 className="lg:text-[50px] md:text-[40px] text-sm:[30px] text-[20px] font-typoHoop text-white font-medium">
								Pay<span className="font-typoHoop text-[#00a3ff]">box</span>
							</h1>
						</div>
						<div className="flex h-full brand-logo   justify-center items-center w-full ">
							<h1 className="lg:text-[40px] sm:text-[25px] text-[20px] font-voces text-white font-medium relative">
								Vuzual <span className="font-volkhov text-[#f00]">Plus</span>
								<p className="lg:text-[11px] sm:text-[7px] text-[5px]  font-voces text-white/90 font-normal absolute right-0 md:bottom-0 -bottom-[2px]">
									Design Studios
								</p>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
