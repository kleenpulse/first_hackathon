import Image from "next/image";
import React from "react";
import Button from "../btn/Button";

export const PrivacyPolicy = () => {
	return (
		<div className="flex justify-center w-full items-center lg:py-20 py-10 relative z-10 ">
			<div className="flex max-lg:flex-col justify-center gap-8 lg:gap-16 xl:gap-28 w-full items-center max-container sm:px-12 relative">
				<div className="flex justify-center items-center  w-full max-lg:mx-4">
					<div className="flex flex-col justify-center items-start ">
						<div className="flex flex-col mb-8 lg:mb-16">
							<h2 className="text-[32px] font-bold text-white mb-6">
								Privacy Policy and
								<br /> <span className="text-primary">Terms</span>
								<p className="font-normal text-white/75 text-[14px] font-montserrat tracking-wide leading-7 w-full max-w-[400px] xl:max-w-[550px]">
									Last updated on September 12, 2023
								</p>
							</h2>
							<p className="text-white text-[14px] font-montserrat tracking-wide leading-7 w-full max-w-[350px] sm:max-w-[460px] ">
								Below are our privacy & policy, which outline a lot of goodies.
								it’s our aim to always take of our participant
							</p>
						</div>
						<div className="flex flex-col">
							<div className="flex flex-col p-8 lg:p-12 bg-[#d9d9d909]  text-white text-[14px] font-montserrat tracking-wide leading-7 w-full backdrop-blur-xl border border-primary rounded max-w-[569px]">
								<p>
									At getlinked tech Hackathon 1.0, we value your privacy and are
									committed to protecting your personal information. This
									Privacy Policy outlines how we collect, use, disclose, and
									safeguard your data when you participate in our tech hackathon
									event. By participating in our event, you consent to the
									practices described in this policy.
								</p>
								<p className="text-primary font-bold text-[16px] my-3">
									Licensing Policy
								</p>
								<p className="text-white font-medium text-[14px] my-3">
									Here are terms of our Standard License:
								</p>
								<p className="text-[14px] my-3 flex  gap-3 items-start ">
									<span className="bg-[#2DE100] w-[27px] h-[17px] flex items-center justify-center rounded-[50%] text-[10px] mt-[5px]">
										✓
									</span>
									<span>
										The Standard License grants you a non-exclusive right to
										navigate and register for our event
									</span>
								</p>
								<p className="text-[14px] my-3 flex  gap-3">
									<span className="bg-[#2DE100] w-[27px] h-[17px] flex items-center justify-center rounded-[50%] text-[10px] mt-[5px]">
										✓
									</span>
									<span>
										You are licensed to use the item available at any free
										source sites, for your project developement
									</span>
								</p>
								<div className="flex justify-center w-full mt-4">
									<Button text="Read More" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full max-lg:max-w-[600px] max-w-[400px]  lg:p-6 p-2 relative items-start justify-center h-full max-sm:min-h-[600px] min-h-[800px]  ">
					<Image
						src={"/assets/lock-icon.svg"}
						alt="judging"
						width={400}
						height={400}
						className=" scale-75 sm:scale-90 lg:hidden"
					/>
					<Image
						src={"/assets/illustrations/privacy.png"}
						alt="judging"
						width={500}
						height={500}
						className="absolute z-10 max-sm:w-[300px] bottom-0 "
					/>
				</div>
				<Image
					src={"/assets/lock-icon.svg"}
					alt="judging"
					width={400}
					height={400}
					className="absolute top-1 right-6 max-lg:hidden"
				/>
			</div>
		</div>
	);
};
