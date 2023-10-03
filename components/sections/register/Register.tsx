"use client";
import Button from "@/components/btn/Button";

import Image from "next/image";
import { useState } from "react";
import { checkBoxClassName } from "./className";
import LoadingSpinner from "@/components/loaders/LoadingSpinner";
import { useRouter } from "next/navigation";
import SuccessCard from "@/components/cards/SuccessCard";
import ErrorCard from "@/components/cards/ErrorCard";

type FormData = {
	team: string;
	phone: string;
	email: string;
	project: string;
	category: string;
	size: string;
	privacy: boolean;
};
const Register = () => {
	const route = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isResult, setIsResult] = useState<any>([]);

	const initialFormData: FormData = {
		team: "",
		phone: "",
		email: "",
		project: "",
		category: "select",
		size: "",
		privacy: false,
	};

	const [formData, setFormData] = useState<FormData>(initialFormData);

	const [isChecked, setIsChecked] = useState(formData.privacy);
	const isDisabled =
		!formData.team ||
		!formData.phone ||
		!formData.email ||
		!formData.project ||
		!formData.category ||
		Number(formData.size) < 2 ||
		!formData.privacy;

	const handleOnChange = () => {
		setIsChecked(!isChecked);
		setFormData({
			...formData,
			privacy: !isChecked,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		e.preventDefault();

		try {
			await fetch("/api/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: formData.email,
					phone: formData.phone,
					team: formData.team,
					size: Number(formData.size),
					project: formData.project,
					category: Number(formData.category),
					privacy: formData.privacy,
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
			if (Object.keys(isResult).length === 1) {
				setIsError(true);
			}
			if (Object.keys(isResult).length > 1) {
				setTimeout(() => {
					setFormData(initialFormData);
					setIsChecked(false);
					setIsSuccess(true);
					route.refresh();
				}, 1000);
			}
		}
	};

	return (
		<>
			{isSuccess && (
				<SuccessCard success={setIsSuccess} onSuccess={isSuccess} />
			)}
			{isError && (
				<ErrorCard
					setError={setIsError}
					email={formData.email}
					message={isResult?.email[0]}
				/>
			)}
			<div className="h-full items-center justify-center w-full flex px-4 sm:px-10 lg:px-16 relative z-10 ">
				<div className="flex justify-center lg:justify-between w-full h-full items-center max-container max-lg:flex-col  pb-12 lg:pb-0">
					<div className="flex lg:w-[85%] w-1/2  max-sm:mb-2  ">
						<Image
							src="/assets/illustrations/register-illustration.png"
							alt="illustration"
							width={700}
							height={700}
							loading="eager"
							priority
							className=" max-sm:mt-4"
						/>
					</div>
					<div className="flex w-full justify-center  ">
						<div className="flex flex-col sm:p-6 xl:p-16 md:bg-[#d9d9d909]  font-montserrat tracking-wide w-full backdrop-blur-xl rounded-lg max-w-[750px] md:shadow-lg gap-4 sm:gap-6 lg:gap-10">
							<h1 className="text-primary font-semibold text-[17px] lg:text-[25px]">
								Register
							</h1>
							<div>
								<p className="text-white font-montserrat text-[17px] relative w-fit mb-2">
									Be part of this movement!
									<span className="text-primary tracking-widest pl-1">
										...................................
									</span>
									<span className="movement">
										<img src="/assets/illustrations/person-1.png" />
										<img src="/assets/illustrations/person-2.png" />
									</span>
								</p>
								<p className="text-white font-medium font-montserrat text-[20px]">
									CREATE YOUR ACCOUNT
								</p>
							</div>

							<form
								onSubmit={handleSubmit}
								className="w-full flex flex-col gap-4 sm:gap-10 items-center text-white "
								id="register-form"
							>
								<div className="flex  flex-col sm:grid sm:grid-cols-2 w-full gap-4 sm:gap-10">
									<label htmlFor="team">
										Team's Name
										<input
											type="text"
											placeholder="Your Team Name"
											name="team"
											value={formData.team}
											id="team"
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
									</label>

									<label htmlFor="phone">
										Phone
										<input
											id="phone"
											type="number"
											value={formData.phone}
											placeholder="Your Team Name"
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
									</label>

									<label htmlFor="email">
										Email
										<input
											id="email"
											type="email"
											value={formData.email}
											placeholder="Your email"
											name="email"
											required
											pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
											className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
											onChange={(e) =>
												setFormData({
													...formData,
													[e.target.name]: e.target.value,
												})
											}
										/>
									</label>
									<label htmlFor="project">
										Project Topic
										<input
											id="project"
											type="text"
											value={formData.project}
											placeholder="Your Project Topic"
											name="project"
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
									</label>

									{/* Select category */}
									<label htmlFor="category">
										Category
										<select
											id="category"
											required
											name="category"
											className="w-full p-2 outline-none rounded-md bg-secondary border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
											onChange={(e) =>
												setFormData({
													...formData,
													[e.target.name]: e.target.value,
												})
											}
											value={formData.category}
										>
											<option value="select" disabled>
												Select Category
											</option>
											<option value="1">Web</option>
											<option value="2">Mobile</option>
											<option value="3">UI/UX</option>
										</select>
									</label>

									<label htmlFor="size">
										Group Size
										<input
											id="size"
											value={formData.size}
											type="number"
											placeholder="Your Team Size"
											name="size"
											required
											className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
											onChange={(e) =>
												setFormData({
													...formData,
													[e.target.name]: e.target.value,
												})
											}
										/>
									</label>
								</div>
								<div className="flex w-full flex-col gap-2 max-sm:items-center">
									<p className="text-darkPink font-montserrat text-[10px] sm:text-[12px] italic font-normal tracking-wide">
										Please review your registration details before submitting
									</p>
									{/* Privacy checkbox */}
									<label htmlFor="privacy" className="flex ">
										<input
											id="privacy"
											type="checkbox"
											name="privacy"
											value={""}
											checked={isChecked}
											required
											className={checkBoxClassName}
											onChange={handleOnChange}
										/>
										<span className="ml-2 text-[13px] max-sm:text-left">
											I agreed with the event terms and conditions and privacy
											policy
										</span>
									</label>
								</div>

								<div className=" sm:w-full flex relative">
									{isLoading && (
										<div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-1/2">
											<LoadingSpinner />
										</div>
									)}
									<Button
										text="Register Now"
										type="submit"
										disabled={isDisabled}
										loading={isLoading}
										fullWidth
									/>
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
		</>
	);
};

export default Register;
