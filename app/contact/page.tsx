"use client";
import Button from "@/components/btn/Button";
import { Nav } from "@/components/navigations/Nav";
import Register from "@/components/sections/register/Register";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ContactPage = ({
	searchParams: { path },
}: {
	searchParams: { path?: string };
}) => {
	const pathname = usePathname();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const isDisabled = !formData.name || !formData.email || !formData.message;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
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
						<div className="flex w-full lg:justify-center  h-[611px] ">
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
										type="text"
										placeholder="First Name"
										name="email"
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
										className="w-full h-[160px] md:h-[120px] p-2 outline-none rounded-md bg-transparent border-2 border-gray-500 py-3 resize-none focus:border-primary focus:valid:border-green-400 transition-all duration-300"
										onChange={(e) =>
											setFormData({
												...formData,
												[e.target.name]: e.target.value,
											})
										}
									/>
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
			) : (
				<Register />
			)}
		</main>
	);
};

export default ContactPage;
