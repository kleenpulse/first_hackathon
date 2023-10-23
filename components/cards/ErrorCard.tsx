"use client";

import { Dispatch, SetStateAction } from "react";
import Button from "../btn/Button";

interface ErrorCardProps {
	setError: Dispatch<SetStateAction<boolean>>;
	email?: string;
	message: string | undefined;
}
const ErrorCard: React.FC<ErrorCardProps> = ({ setError, email, message }) => {
	const handleCloseClick = () => {
		setError(false);
	};

	return (
		<section className="w-full h-screen fixed z-[99] grid place-items-center backdrop-blur-md top-0 left-0">
			<div className="flex w-[90%]  lg:max-w-[800px] justify-center items-center p-[2px]  nav-gradient rounded-3xl relative z-[999]">
				<div className="flex flex-col py-8 w-full items-center gap-4 sm:gap-2 bg-secondary px-4 sm:px-8 lg:px-16 rounded-3xl max-sm:text-center ">
					<p className="text-white sm:text-xl font-medium lg:text-2xl uppercase md:font-bold tracking-wider max-sm:mt-3">
						{message}
					</p>

					{email && (
						<p className="text-white font-montserrat text-lg">
							Email: <span>{email}</span>
						</p>
					)}
				</div>

				<div
					className="absolute top-2 right-2 cursor-pointer nav-gradient h-9 w-9 rounded-full flex justify-center items-center p-[1px]"
					onClick={handleCloseClick}
				>
					<div className="font-semibold text-xl text-white bg-secondary h-full w-full rounded-full flex justify-center items-center ">
						<span>X</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorCard;
