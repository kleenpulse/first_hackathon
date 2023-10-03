"use client";

import dynamic from "next/dynamic";

import useWindowSize from "react-use/lib/useWindowSize";
// import Confetti from "react-confetti";
import Image from "next/image";

import { Dispatch, SetStateAction } from "react";
import Button from "../btn/Button";

interface SuccessCardProps {
	success: Dispatch<SetStateAction<boolean>>;
	onSuccess: boolean;
}

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });
const SuccessCard: React.FC<SuccessCardProps> = ({ success, onSuccess }) => {
	const { width, height } = useWindowSize();

	const handleCloseClick = () => {
		console.log("first");
		success(false);
	};

	return (
		<section className="w-full h-screen fixed z-[99] grid place-items-center backdrop-blur-md top-0 left-0">
			{onSuccess && <Confetti width={width} height={height} />}
			<div className="flex w-[90%] h-[467px] sm:h-[684px] lg:max-w-[700px] justify-center items-center border border-primary px-4 sm:px-10 lg:px-16">
				<div className="flex flex-col w-full h-full justify-center items-center">
					<div className="flex relative justify-center items-center w-full max-w-[500px]">
						<Image
							src="/assets/illustrations/success.png"
							alt="success"
							width={300}
							height={300}
							priority
							loading="eager"
						/>
						<Image
							src="/assets/green-check.png"
							alt="success"
							width={250}
							height={200}
							className="absolute z-[-1] left-6 top-0"
						/>
					</div>
					<div className="flex flex-col items-center w-full gap-4">
						<p className="font-montserrat text-white font-medium text-[20px] sm:text-3xl text-center ">
							Congratulations
							<br /> you have successfully Registered!
						</p>
						<p className="font-montserrat text-white">
							Yes, it was easy and you did it!
						</p>
						<div className="flex">
							<p className="font-montserrat text-white">
								check your mail box for next step
							</p>
							<img src="/assets/emoji.png" height={20} width={20} alt="emoji" />
						</div>
					</div>
					<div
						className="flex w-full mt-4 sm:mt-6 lg:mt-10"
						onClick={handleCloseClick}
						role="button"
					>
						<Button text="Back" fullWidth />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessCard;
