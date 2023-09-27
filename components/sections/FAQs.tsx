"use client";
import { faqs } from "@/constants/constants";
import Image from "next/image";
import React, { useState } from "react";

export const FAQs = () => {
	// Initialize an array of boolean values to track the expanded/collapsed state of each FAQ item
	const [showFaws, setShowFaws] = useState(new Array(faqs.length).fill(false));

	// Function to toggle the state of a specific FAQ item by index
	const toggleFaq = (index: number) => {
		const newShowFaws = [...showFaws];
		newShowFaws[index] = !newShowFaws[index];
		setShowFaws(newShowFaws);
	};

	return (
		<div className="flex justify-center w-full items-center py-20 relative z-10 ">
			<div className="flex max-lg:flex-col-reverse justify-center gap-8 lg:gap-16 xl:gap-28 w-full items-center max-container sm:px-12">
				<div className="flex justify-center items-center  w-full max-lg:mx-4">
					<div className="flex flex-col justify-center items-start ">
						<div className="flex flex-col mb-8 lg:mb-16 max-lg:w-full max-lg:text-center max-lg:px-2">
							<h2 className="text-[32px] font-bold text-white mb-6">
								Frequently Ask
								<br /> <span className="text-primary">Questions</span>
							</h2>
							<p className="text-white text-[14px] font-montserrat tracking-wide leading-7 w-full max-w-[400px] xl:max-w-[550px]">
								We got answers to the questions that you might want to ask about
								getlinked Hackathon 1.0
							</p>
						</div>
						<div className="flex flex-col max-lg:px-2">
							{faqs.map((faq, index) => (
								<div
									key={(faq.question + index).toString()}
									className="text-white text-[15px] mb-6 pb-4 font-montserrat flex w-full justify-between items-center gap-4 xl:gap-8 border-b border-primary"
								>
									<div className="flex flex-col">
										<p className="font-medium">{faq.question} </p>
										{showFaws[index] ? (
											<p className="ml-2">- {faq.answer}</p>
										) : null}
									</div>

									<span
										onClick={() => toggleFaq(index)}
										className="text-primary text-[28px] font-medium select-none cursor-pointer"
									>
										{showFaws[index] ? "-" : "+"}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex w-full justify-center flex-col items-center">
					<div className="relative font-tommy  font-bold text-[#af86ab] max-w-[300px] w-full  h-[120px] max-[500px]:max-w-[250px] max-[400px]:max-w-[200px] -left-[5rem] max-[600px]:-left-[4rem]">
						<div className="flex absolute justify-center w-full h-[100px] bottom-0 perspective">
							<span className="font-tommy absolute left-0 text-5xl -bottom-6 scale-y-125">
								?
							</span>
							<span className="font-tommy absolute -top-12 text-[128px] scale-y-125 text-primary rotate-bounce">
								?
							</span>
							<span className="font-tommy absolute right-0  text-5xl -bottom-8 scale-y-125">
								?
							</span>
						</div>
					</div>
					<div className="flex w-full max-lg:max-w-[600px] max-lg:flex-col p-6 relative items-center justify-center">
						<Image
							src={"/assets/illustrations/faq-image.png"}
							alt="judging"
							width={800}
							height={800}
							layout="responsive"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
