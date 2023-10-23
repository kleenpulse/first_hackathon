"use client";

import { items } from "@/constants/constants";
import { TimelineComponent } from "../Reuseable/TimelineComponent";

export const Timeline = () => {
	return (
		<div className="flex flex-col w-full justify-between items-center max-container py-8">
			<div className="flex flex-col justify-center items-center w-full mb-8">
				<h2 className="text-[32px] font-bold text-white ">Timeline</h2>
				<p className="font-montserrat text-[14px] text-center text-white w-full max-w-[346px]">
					Here is the breakdown of the time we anticipate using for the upcoming
					event.
				</p>
			</div>
			<div className="flex flex-col w-full  items-center sm:px-8 px-4 py-6">
				{items.map((item, index) => (
					<TimelineComponent
						key={item.id}
						cardTitle={item.cardTitle}
						date={item.title}
						cardDetails={item.cardDetailedText}
						index={index}
						last={items.length - 1}
						isALT
					/>
				))}
			</div>
		</div>
	);
};
