"use client";
import { items } from "@/constants/constants";
import { Chrono } from "react-chrono";

export const Timeline = () => {
	return (
		<div className="flex flex-col w-full justify-between items-center max-container">
			<div className="flex flex-col justify-center items-center w-full mb-8">
				<h2 className="text-[32px] font-bold text-white ">Timeline</h2>
				<p className="font-montserrat text-[14px] text-center text-white w-full max-w-[346px]">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</p>
			</div>
			<div className=" w-full relative">
				<div className="absolute w-full flex justify-center">
					<div className="absolute top-0 bg-secondary w-2 h-[52px] z-10" />
				</div>
				<Chrono
					hideControls
					slideItemDuration={5000}
					slideShow
					fontSize={{
						title: "24px",

						cardTitle: "24px",
					}}
					controlPanel={false}
					items={items}
					mode="VERTICAL_ALTERNATING"
					theme={{
						cardBgColor: "transparent",

						primary: "#D434FE",
						cardTitleColor: "#D434FE",
						titleColor: "#D434FE",
						titleColorActive: "#D434FE",
						secondary: "#150E28",
						cardDetailsColor: "#fff",
					}}
					cardHeight="fit-content"
					cardDetailsWidth={200}
				>
					<div className="chrono-icons">
						{items.map((item, index) => (
							<div
								key={item.title}
								className="bg-secondary w-16 h-16 justify-center items-center flex"
							>
								<span className="timeline-gradient lg:w-12 lg:h-12 w-10 h-10 rounded-full  text-white justify-center items-center flex font-montserrat text-[24px]">
									{index + 1}
								</span>
							</div>
						))}
					</div>
				</Chrono>
			</div>
		</div>
	);
};
