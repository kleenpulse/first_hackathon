"use client";
// import { useInView } from "@/hooks/useInView";
import { useRef } from "react";

import useWindowSize from "react-use/lib/useWindowSize";
import useInView from "@/hooks/useInView";

interface Props {
	cardTitle: string;
	cardDetails: string;
	date: string;
	index: number;
	last: number;
	isALT?: boolean;
}

export const TimelineComponent = ({
	cardTitle,
	cardDetails,
	date,
	index,
	last,
	isALT = true,
}: Props) => {
	const { width } = useWindowSize();
	const ref = useRef(null);

	// const isView = true;

	const isView = useInView(ref);

	const isLast = index === last;
	if (isALT && width <= 768) {
		isALT = false;
	}

	return (
		<div
			className={`${
				isALT && index % 2 === 0 ? "" : "flex-row-reverse"
			} flex w-full justify-center text-white ${!isALT && "pb-8 lg:pb-12"} ${
				isView ? "in-view" : "not-in-view"
			}`}
			ref={ref}
		>
			<div
				className={`${
					isALT && index % 2 === 0 ? "items-end" : ""
				} w-full  flex flex-col ${isLast ? "" : "mb-1 lg:mb-12"} `}
			>
				<h1 className={` text-primary lg:font-bold font-medium text-xl `}>
					{cardTitle}
				</h1>
				<p
					className={`text-white text-[15px] tracking-wide leading-7 w-full max-w-[450px] xl:max-w-[535px] ${
						isALT && index % 2 === 0 ? "text-right" : ""
					}`}
				>
					{cardDetails}
				</p>
				{!isALT && (
					<h1 className={`text-primary lg:font-bold font-medium text-xl `}>
						{date}
					</h1>
				)}
			</div>

			<div
				className={` bg-primary w-[5px] ${
					isView ? "height" : "not-height"
				} mx-4 mr-6 sm:mx-8 lg:mx-16 flex items-center relative`}
			>
				<span
					className={`absolute text-white font-medium text-xl h-10 w-10 flex items-center justify-center btn-gradient rounded-full translate-x-[-50%]  ${
						isALT && isLast
							? "bottom-0"
							: isALT
							? "top-[50%] left-[50%] translate-y-[-50%]"
							: "top-0 left-[50%] translate-x-[-50%]"
					}`}
				>
					{index + 1}
				</span>
			</div>
			{isALT && (
				<div
					className={`relative w-full flex items-center ${
						index % 2 === 0 ? "" : "justify-end"
					}`}
				>
					<h1
						className={`text-primary lg:font-bold font-medium text-xl ${
							isLast ? "absolute bottom-1" : ""
						}`}
					>
						{date}
					</h1>
				</div>
			)}
		</div>
	);
};
