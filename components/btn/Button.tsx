export default function Button({
	text,
	type,
	disabled = false,
}: {
	text: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}) {
	return (
		<button
			disabled={disabled}
			type={type ? type : "button"}
			className={`text-white btn-gradient py-4 px-10  font-medium rounded text-lg tracking-wide ${
				disabled && "opacity-50 cursor-not-allowed"
			}`}
		>
			{text}
		</button>
	);
}
