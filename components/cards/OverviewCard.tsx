interface Props {
	title: string;
	highlight: string;
	desc: string;
}

export const OverviewCard = ({ title, highlight, desc }: Props) => {
	return (
		<div className="flex flex-col justify-center items-start w-full max-lg:mx-4">
			<h2 className="text-[32px] font-bold text-white">
				{title} <br /> <span className="text-primary">{highlight}</span>
			</h2>
			<p className="text-white text-[15px] tracking-wide leading-7 w-full max-w-[450px] xl:max-w-[535px]">
				{desc}
			</p>
		</div>
	);
};
