"use client";
import { useEffect, useState, useMemo, RefObject, useRef } from "react";

type UseInView = <T extends Element>(ref: RefObject<T>) => boolean;

export const useInView: UseInView = (ref) => {
	const [isViewing, setIsViewing] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(([entries]) => {
				if (entries && entries) {
					// Check if entries array and first entry exist
					setIsViewing(entries.isIntersecting);
				}
			}),
		[]
	);

	useEffect(() => {
		const currentRef = ref.current;
		if (currentRef) {
			observer.observe(currentRef);
			return () => {
				observer.unobserve(currentRef);
			};
		}
	}, [ref, observer]);

	return isViewing;
};
