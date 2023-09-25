import Image from "next/image";
import Button from "../btn/Button";

export const Hero = () => {
	return (
		<div className="flex flex-1 max-[1043px]:flex-col max-[1043px]:justify-between w-full max-container justify-center z-10  relative h-full min-[1440px]:px-0 px-2 sm:px-8">
			<div className="flex flex-col w-full justify-center gap-8  max-[1043px]:items-center ">
				<div className="flex relative z-10 min-[1043px]:hidden mb-16 py-6">
					<p className="text-white text-[17px] sm:text-[28px] italic font-bold font-montserrat">
						Igniting a Revolution in HR Innovation{" "}
					</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="253"
						height="17"
						viewBox="0 0 255 17"
						fill="none"
						className="absolute bottom-3 right-0 "
					>
						<path
							d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
							stroke="#FF26B9"
							strokeWidth="5"
						/>
					</svg>
				</div>
				<h1 className="relative text-[40px]  lg:text-5xl xl:text-6xl min-[1440px]:text-[70px]  font-bold text-white w-fit max-md:text-center leading-none">
					getlinked Tech
					<img
						src={"/assets/hero-bulb.png"}
						alt="bulb"
						className="absolute -top-16 max-[1043px]:-top-9 right-6 max-[1043px]:h-12"
					/>
				</h1>
				<div className="flex items-center">
					<h1 className="  text-4xl lg:text-5xl xl:text-6xl min-[1440px]:text-[70px]  font-bold text-white w-fit max-md:text-center ">
						Hackathon <span className="text-primary">1.0</span>
					</h1>

					<img
						src={"/assets/chain.svg"}
						alt="chain"
						className="max-[1043px]:w-10"
					/>
					<img
						src={"/assets/spark.svg"}
						alt="spark"
						className="max-[1043px]:w-10"
					/>
				</div>
				<p className="font-montserrat sm:text-[20px] text-white  w-[80%] max-w-[530px] font-medium max-lg:text-center">
					Participate in getlinked tech Hackathon 2023 stand a chance to win a
					Big prize
				</p>
				<div>
					<Button text="Register" />
				</div>
				<p className="font-unica text-white text-[64px]">
					00<span className="text-[12px]">H</span> 00
					<span className="text-[12px]">M</span> 00
					<span className="text-[12px]">S</span>
				</p>
			</div>
			<div className="flex flex-col w-full items-center justify-evenly  relative ">
				<div className="flex relative z-10 max-[1043px]:hidden mt-4">
					<p className="text-white text-[23px] xl:text-[30px] italic font-bold font-montserrat">
						Igniting a Revolution in HR Innovation{" "}
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="253"
						height="17"
						viewBox="0 0 255 17"
						fill="none"
						className="absolute -bottom-3 right-0 "
					>
						<path
							d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
							stroke="#FF26B9"
							strokeWidth="5"
						/>
					</svg>
				</div>
				<div className="relative bg-hero-man w-full h-full max-[1043px]:pt-16">
					<div className="flex w-full h-full relative">
						<Image
							src={"/assets/illustrations/hero-man.png"}
							alt="judging"
							width={800}
							height={800}
							className="min-[1043px]:absolute bottom-0 -z-[1] xl:scale-125"
						/>
						<div className="purple-glow absolute top-10 right-0" />
					</div>
				</div>
			</div>
		</div>
	);
};
