"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export const ExploreourApp = () => {
	const [currentSlide, setCurrentSlide] = useState(2);
	const [isMobile, setIsMobile] = useState(false);
	const [touchStart, setTouchStart] = useState(0);
	const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

	const slides = [
		{ id: 1, image: "/Images/Explore1.png" },
		{ id: 2, image: "/Images/Explore2.png" },
		{ id: 3, image: "/Images/Explore3.png" },
		{ id: 4, image: "/Images/Explore4.png" },
		{ id: 5, image: "/Images/Explore5.png" },
	];

	// Screen size detect કરવા માટે
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const resetTimer = () => {
		if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
		autoPlayTimer.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);
	};

	useEffect(() => {
		resetTimer();
		return () => {
			if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
		};
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
		resetTimer();
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
		resetTimer();
	};

	const handleSlideClick = (index: number) => {
		setCurrentSlide(index);
		resetTimer();
	};

	const getPhonePosition = (index: number) => {
		const adjustedIndex =
			(index - currentSlide + 2 + slides.length) % slides.length;

		// મોબાઈલ અને ડેસ્કટોપ માટે અલગ અલગ TranslateX
		const desktopX = [-500, -290, 0, 290, 500];
		const mobileX = [-240, -145, 0, 145, 240]; // અહીં વેલ્યુ ઘટાડી છે

		const currentX = isMobile ? mobileX : desktopX;

		const positions = [
			{ scale: 0.7, zIndex: 1, opacity: 0.4, translateX: currentX[0] },
			{ scale: 0.85, zIndex: 3, opacity: 0.7, translateX: currentX[1] },
			{ scale: 1.1, zIndex: 10, opacity: 1, translateX: currentX[2] },
			{ scale: 0.85, zIndex: 3, opacity: 0.7, translateX: currentX[3] },
			{ scale: 0.7, zIndex: 1, opacity: 0.4, translateX: currentX[4] },
		];

		return positions[adjustedIndex];
	};

	const handleTouchStart = (e: React.TouchEvent) =>
		setTouchStart(e.targetTouches[0].clientX);
	const handleTouchEnd = (e: React.TouchEvent) => {
		const touchEnd = e.changedTouches[0].clientX;
		if (touchStart - touchEnd > 50) nextSlide();
		if (touchEnd - touchStart > 50) prevSlide();
	};

	return (
		<div className="w-full py-16 px-4 bg-[#F5F3E8] overflow-hidden">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#114D3A]">
					Explore our App
				</h2>

				<div
					className="relative w-full flex justify-center items-center min-h-[450px] md:min-h-[550px] mb-12"
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					<div className="relative w-full h-full flex justify-center items-center">
						{slides.map((slide, index) => {
							const position = getPhonePosition(index);
							const isActive = index === currentSlide;

							return (
								<div
									key={slide.id}
									className="absolute transition-all duration-700 ease-in-out cursor-pointer"
									onClick={() => handleSlideClick(index)}
									style={{
										transform: `translateX(${position.translateX}px) scale(${position.scale})`,
										zIndex: position.zIndex,
										opacity: position.opacity,
									}}
								>
									<div className="relative w-48 h-[400px] md:w-64 md:h-[500px]">
										<Image
											src={slide.image}
											alt={`App screen ${slide.id}`}
											fill
											className="object-contain"
											priority={isActive}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* App Store Buttons */}
				<div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
					<button className="flex items-center gap-3 bg-[#114D3A] text-white px-8 py-3 rounded-2xl border border-white/10 transition-all hover:scale-105 active:scale-95 shadow-lg">
						<Image
							src="/Images/Playstore.png"
							alt="Google Play"
							width={30}
							height={30}
							className="object-contain"
						/>
						<div className="flex flex-col items-start leading-tight text-left">
							<span className="text-[12px] tracking-wider opacity-80 uppercase">
								GET IT ON
							</span>
							<span className="text-xl font-bold text-[#FFD700]">
								Google Play
							</span>
						</div>
					</button>

					<button className="flex items-center gap-3 bg-[#114D3A] text-white px-8 py-3 rounded-2xl border border-white/10 transition-all hover:scale-105 active:scale-95 shadow-lg">
						<Image
							src="/Images/Apple.png"
							alt="App Store"
							width={30}
							height={30}
							className="object-contain brightness-0 invert"
						/>
						<div className="flex flex-col items-start leading-tight text-left">
							<span className="text-[12px] tracking-wider opacity-80 uppercase">
								GET IT ON
							</span>
							<span className="text-xl font-bold text-[#FFD700]">
								App Store
							</span>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};
