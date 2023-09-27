export default function Button({ text }: { text: string }) {
	return (
		<button
			className={`text-white btn-gradient py-4 px-10  font-medium rounded text-lg tracking-wide `}
		>
			{text}
		</button>
	);
}
