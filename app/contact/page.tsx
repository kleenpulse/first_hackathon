"use client";

import Button from "@/components/btn/Button";
import ErrorCard from "@/components/cards/ErrorCard";
import SuccessCard from "@/components/cards/SuccessCard";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { Nav } from "@/components/navigations/Nav";
import Register from "@/components/sections/register/Register";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const ContactPage = ({
	searchParams: { path },
}: {
	searchParams: { path?: string };
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isResult, setIsResult] = useState<any>([]);
	const pathname = usePathname();
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});
	const isDisabled =
		!formData.name || !formData.email || !formData.message || !formData.phone;
	const route = useRouter();
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		e.preventDefault();

		try {
			await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: formData.email,
					message: formData.message,
					name: formData.name,
					phone: formData.phone,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					setIsResult(data);
				});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
			setFormData({
				name: "",
				email: "",
				message: "",
				phone: "",
			});
		}
		console.log(isResult, "========", Object.keys(isResult).length);
		console.log(Array.isArray(isResult), "========", isResult);
	};
	console.log(isResult, "========", Object.keys(isResult).length);
	useEffect(() => {
		if (
			Object.keys(isResult).length === 6 ||
			Object.keys(isResult).find((key) => isResult[key].length === "id")
		) {
			setTimeout(() => {
				setFormData({
					name: "",
					email: "",
					message: "",
					phone: "",
				});

				setIsSuccess(true);
				route.refresh();
			}, 10);
			return;
		}
	}, [isResult]);

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
			{isSuccess && (
				<SuccessCard success={setIsSuccess} onSuccess={isSuccess} />
			)}
			{isError && (
				<ErrorCard
					setError={setIsError}
					email={formData.email}
					message={"Something went wrong"}
				/>
			)}
			<main className="bg-[#100B20] min-h-screen flex-1 flex  w-full contact-section items-center justify-center relative sm:pt-[10rem] pt-20">
				<div className="w-full border-b border-primary/20 flex justify-center absolute top-0 z-30">
					<Nav path={path} pathname={pathname} />
				</div>

				{path === "contact" ? (
					<div className="h-full items-center justify-center w-full flex px-4 sm:px-12 lg:px-20 relative z-10 ">
						<div className="flex justify-center lg:justify-between w-full h-full items-center max-container max-md:flex-col ">
							<div className="flex md:hidden flex-col w-full p-8 max-sm:pl-0 gap-6 ">
								<div className="max-sm:max-w-[239px] w-full">
									<p className="text-primary font-semibold text-[20px]">
										Questions or need assistance?
									</p>
									<p className="text-primary font-semibold text-[20px]">
										Let us know about it!
									</p>
								</div>
								<p className="text-white max-sm:text-[16px] font-montserrat max-sm:max-w-[239px]">
									Email us below to any question related to our event
								</p>
							</div>
							<div className="flex  w-full ">
								<div className="hidden md:flex gap-4  flex-col">
									<h1 className="text-4xl font-semibold text-primary lg:text-5xl xl:text-6xl">
										Get in touch
									</h1>
									<p className="text-[16px] font-montserrat text-white">
										Contact <br /> Information
									</p>
									<p className="text-[16px] font-montserrat text-white">
										27,Alara Street <br /> Yaba 100012 <br /> Lagos State
									</p>
									<p className="text-[16px] font-montserrat text-white">
										Call Us : 07067981819
									</p>
									<p className="text-[16px] font-montserrat text-white">
										we are open from Monday-Friday <br /> 08:00am - 05:00pm
									</p>
									<div className="flex flex-col gap-2 text-primary">
										<p>Share on</p>
										<div className="flex gap-6 items-center">
											<img src="/assets/socials/insta.svg" />
											<img src="/assets/socials/x.svg" />
											<img src="/assets/socials/fb.svg" />
											<img src="/assets/socials/linkedin.svg" />
										</div>
									</div>
								</div>
							</div>
							<div className="flex w-full lg:justify-center   ">
								<div className="flex flex-col sm:p-8 lg:p-16 md:bg-[#d9d9d909]   font-montserrat tracking-wide w-full backdrop-blur-xl rounded-lg max-w-[617px] md:shadow-lg gap-6 lg:gap-10">
									<div className="hidden md:flex flex-col">
										<p className="text-primary font-semibold text-[17px] lg:text-[20px]">
											Questions or need assistance?
										</p>
										<p className="text-primary font-semibold text-[17px] lg:text-[20px]">
											Let us know about it!
										</p>
									</div>
									<form
										onSubmit={handleSubmit}
										className="w-full flex flex-col gap-10 items-center text-white "
									>
										<input
											type="text"
											placeholder="First Name"
											name="name"
											id="name"
											value={formData.name}
											required
											className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
											min={2}
											onChange={(e) =>
												setFormData({
													...formData,
													[e.target.name]: e.target.value,
												})
											}
										/>
										<input
											id="phone"
											type="number"
											value={formData.phone}
											placeholder="Phone Number"
											name="phone"
											required
											pattern="^[+]?[0-9]{10,15}$"
											className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
											min={10}
											onChange={(e) =>
												setFormData({
													...formData,
													[e.target.name]: e.target.value.trim(),
												})
											}
										/>
										<input
											type="text"
											placeholder="Email"
											name="email"
											id="email"
											value={formData.email}
											required
											className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400 transition-all duration-300"
											min={2}
											onChange={(e) =>
												setFormData({
													...formData,
													[e.target.name]: e.target.value,
												})
											}
										/>
										<textarea
											placeholder="Message......"
											name="message"
											required
											id="mesage"
											value={formData.message}
											className="w-full h-[160px] md:h-[120px] p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 resize-none focus:border-primary focus:valid:border-green-400 transition-all duration-300"
											onChange={(e) =>
												setFormData({
													...formData,
													[e.target.name]: e.target.value,
												})
											}
										/>
										<div className=" sm:w-full flex relative justify-center">
											{isLoading && (
												<div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2">
													<LoadingSpinner />
												</div>
											)}
											<div className="max-sm:w-full">
												<Button
													text="Submit"
													type="submit"
													disabled={isDisabled}
													loading={isLoading}
													fullWidth
												/>
											</div>
										</div>
									</form>
									<div className="flex md:hidden flex-col gap-2 text-primary w-full items-center mt-4">
										<p>Share on</p>
										<div className="flex gap-6 items-center">
											<img src="/assets/socials/insta.svg" />
											<img src="/assets/socials/x.svg" />
											<img src="/assets/socials/fb.svg" />
											<img src="/assets/socials/linkedin.svg" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<Register />
				)}
			</main>
		</>
	);
};

export default ContactPage;
