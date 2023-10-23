"use client";

import AnimatedCursor from "react-animated-cursor";
import { Nav } from "@/components/navigations/Nav";
import { FAQs } from "@/components/sections/FAQs";
import { Foobar } from "@/components/sections/Foobar";
import { Hero } from "@/components/sections/Hero";
import { PrivacyPolicy } from "@/components/sections/PrivacyPolicy";
import { Rewards } from "@/components/sections/Rewards";
import { Sponsors } from "@/components/sections/Sponsors";
import { Timeline } from "@/components/sections/Timeline";
import { Intro } from "@/components/sections/overview/Intro";
import { Judging } from "@/components/sections/overview/Judging";
import { RulesNGuidelines } from "@/components/sections/overview/RulesNGuidelines";

export default function Home() {
	return (
		<>
			<AnimatedCursor
				innerSize={8}
				outerStyle={{
					border: "3px solid rgb(255, 0, 238)",
				}}
				innerStyle={{
					background: "rgba(200, 0, 255)",
				}}
				outerSize={35}
				color="255, 0, 238"
				outerAlpha={0}
				innerScale={0.7}
				outerScale={3}
				clickables={[
					"a",
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					"label[for]",
					"select",
					"textarea",
					"button",
					".link",
				]}
			/>

			<main className="bg-secondary flex flex-col w-full ">
				<section className="min-[1043px]:min-h-screen hero-section relative flex flex-col  w-full justify-center items-center h-full">
					<div className="w-full border-b border-primary/20 flex justify-center fixed top-0 z-30 backdrop-blur-xl">
						<Nav />
					</div>

					<Hero />
					<div className="bg-metrix absolute right-0 w-full h-full max-[1043px]:bottom-0" />
				</section>
				<section
					id="overview"
					className="bg-section relative flex  w-full justify-center items-center min-h-screen flex-col"
				>
					<Intro />
					<RulesNGuidelines />
				</section>

				<section className="bg-section relative flex  w-full justify-center items-center min-h-screen">
					<Judging />
				</section>
				<section
					className="bg-section relative flex  w-full justify-center items-center min-h-screen border-b border-gray-600 z-10"
					id="faqs"
				>
					<FAQs />
				</section>
				<section
					id="timeline"
					className="bg-secondary relative flex  w-full justify-center items-center min-h-screen  border-b border-gray-600 z-10"
				>
					<Timeline />
				</section>
				<section className="bg-section bg-[#100B20] relative flex  w-full justify-center items-center h-full lg:h-[945px] border-b border-gray-600 z-10">
					<Rewards />
				</section>
				<section className="bg-section relative flex  w-full justify-center items-center   border-b border-gray-600 z-10">
					<Sponsors />
				</section>
				<section className="bg-privacy relative flex  w-full justify-center items-center min-h-screen  border-b border-gray-600 z-10">
					<PrivacyPolicy />
				</section>
				<section className="bg-[#100B20] relative flex  w-full justify-center items-center ">
					<Foobar />
				</section>
			</main>
		</>
	);
}
