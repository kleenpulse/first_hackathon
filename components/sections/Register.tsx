"use client";
import Button from "@/components/btn/Button";

import Image from "next/image";
import { useState } from "react";

const Register = () => {
	const [formData, setFormData] = useState({
		team: "",
		phone: "",
		email: "",
		topic: "",
		category: "",
		size: "",
	});
	const isDisabled =
		!formData.team ||
		!formData.phone ||
		!formData.email ||
		!formData.topic ||
		!formData.category ||
		!formData.size;
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<div className="h-full items-center justify-center w-full flex px-4 sm:px-10 lg:px-16 relative z-10 ">
			<div className="flex justify-center lg:justify-between w-full h-full items-center max-container max-lg:flex-col mt-10 md:mt-0">
				<div className="flex lg:w-[85%] w-1/2 sm:mt-10 mt-12 max-sm:mb-2  lg:mt-0">
					<Image
						src="/assets/illustrations/register-illustration.png"
						alt="illustration"
						width={700}
						height={700}
						loading="eager"
						priority
						className=" max-[500px]:scale-125"
					/>
				</div>
				<div className="flex w-full justify-center  ">
					<div className="flex flex-col sm:p-6 xl:p-16 md:bg-[#d9d9d909]  font-montserrat tracking-wide w-full backdrop-blur-xl rounded-lg max-w-[750px] md:shadow-lg gap-6 lg:gap-10">
						<h1 className="text-primary font-semibold text-[17px] lg:text-[25px]">
							Register
						</h1>
						<div>
							<p className="text-white font-montserrat text-[17px] relative w-fit mb-2">
								Be part of this movement!
								<span className="text-primary tracking-widest pl-1">
									...................................
								</span>
								<div className="flex justify-center absolute right-12 -top-4">
									<img src="/assets/illustrations/person-1.png" />
									<img src="/assets/illustrations/person-2.png" />
								</div>
							</p>
							<p className="text-white font-medium font-montserrat text-[20px]">
								CREATE YOUR ACCOUNT
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-10 items-center text-white "
						>
							<label htmlFor="team">
								Team's Name
								<input
									type="text"
									placeholder="Your Team Name"
									name="team"
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
									type="number"
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
									type="email"
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
									type="text"
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
									required
									name="category"
									className="w-full p-2 outline-none rounded-md bg-secondary border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
									onChange={(e) =>
										setFormData({
											...formData,
											[e.target.name]: e.target.value,
										})
									}
									defaultValue={"select"}
								>
									<option value="select" disabled>
										Select Category
									</option>
									<option value="web">Web</option>
									<option value="mobile">Mobile</option>
									<option value="UI/UX">UI/UX</option>
								</select>
							</label>

							<label htmlFor="size">
								Group Size
								<input
									type="number"
									placeholder="Your Team Size"
									name="size"
									required
									pattern="^[+]?[0-9]{10,15}$"
									className="w-full p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 focus:border-primary focus:valid:border-green-400  transition-all duration-300"
									onChange={(e) =>
										setFormData({
											...formData,
											[e.target.name]: e.target.value.trim(),
										})
									}
								/>
							</label>

							<div>
								<Button text="Submit" type="submit" disabled={isDisabled} />
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
	);
};

export default Register;
