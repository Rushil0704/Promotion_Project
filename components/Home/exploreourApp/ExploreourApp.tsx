'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const ExploreourApp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isSwipping, setIsSwipping] = useState(false);
    const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

    const slides = [
        { id: 1, image: '/Images/Explore1.png' },
        { id: 2, image: '/Images/Explore2.png' },
        { id: 3, image: '/Images/Explore3.png' },
        { id: 4, image: '/Images/Explore4.png' },
        { id: 5, image: '/Images/Explore5.png' },
    ];

    // Auto-play slides every 4 seconds
    useEffect(() => {
        autoPlayTimer.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => {
            if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
        };
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        // Reset auto-play timer
        if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
        autoPlayTimer.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        // Reset auto-play timer
        if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
        autoPlayTimer.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
    };

    // Handle touch swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsSwipping(false);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        setTouchEnd(endX);
        const diff = Math.abs(touchStart - endX);

        if (diff > 50) {
            setIsSwipping(true);
            if (touchStart - endX > 50) {
                // Swipe left - next slide
                nextSlide();
            } else if (endX - touchStart > 50) {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    };

    const handleSwipe = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe left - next slide
            nextSlide();
        } else if (touchEnd - touchStart > 50) {
            // Swipe right - previous slide
            prevSlide();
        }
    };

    const handleSlideClick = (index: number) => {
        if (!isSwipping) {
            setCurrentSlide(index);
            // Reset auto-play timer
            if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
            autoPlayTimer.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 4000);
        }
    };

    const getPhonePosition = (index: number) => {
        const adjustedIndex = (index - currentSlide + slides.length) % slides.length;

        const positions: { scale: number; zIndex: number; opacity: number; translateX: number }[] = [
            { scale: 0.5, zIndex: 1, opacity: 0.1, translateX: -500 },      // Far left
            { scale: 0.75, zIndex: 2, opacity: 0.5, translateX: -290 },     // Left adjacent
            { scale: 1, zIndex: 5, opacity: 1, translateX: 0 },             // Center
            { scale: 0.75, zIndex: 2, opacity: 0.5, translateX: 290 },      // Right adjacent
            { scale: 0.5, zIndex: 1, opacity: 0.1, translateX: 500 },       // Far right
        ];

        return positions[adjustedIndex];
    };

    return (
		<div className="w-full py-16 px-4">
			<div className="max-w-500 mx-auto">
				{/* Title */}
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-700">
					Explore our App
				</h2>

				{/* Carousel Container */}
				<div
					className="relative w-full flex justify-center items-center min-h-125 mb-12"
					onTouchStart={handleTouchStart}
					onTouchEnd={handleTouchEnd}
				>
					{/* Phones Carousel */}
					<div className="relative w-full h-125 flex justify-center items-center">
						{slides.map((slide, index) => {
							const position = getPhonePosition(index);

							return (
								<div
									key={slide.id}
									className="absolute transition-all duration-500 ease-out cursor-pointer hover:scale-105"
									onClick={() => handleSlideClick(index)}
									style={{
										transform: `translateX(${position.translateX}px) scale(${position.scale})`,
										zIndex: position.zIndex,
										opacity: position.opacity,
									}}
								>
									<div className="relative w-56 h-125">
										<Image
											src={slide.image}
											alt={`App screen ${slide.id}`}
											fill
											className="object-contain"
											priority
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* App Store Buttons */}
				<div className="flex flex-col sm:flex-row gap-5 justify-center">
					{/* Google Play Button */}
					<button className="flex items-center gap-3 bg-secondary text-white px-6 py-2 rounded-2xl border border-white/10 transition-transform hover:scale-105 active:scale-95">
						<Image
							src="/Images/Playstore.png"
							alt="Google Play"
							width={32}
							height={32}
							className="object-contain"
						/>
						<div className="flex flex-col items-start leading-tight">
							<span className="text-[15px] tracking-wider">
								GET IT ON
							</span>
							<span className="text-xl font-bold text-[#FFD700]">
								Google Play
							</span>
						</div>
					</button>

					{/* App Store Button */}
					<button className="flex items-center gap-3 bg-secondary text-white px-6 py-2 rounded-2xl border border-white/10 transition-transform hover:scale-105 active:scale-95">
						<Image
							src="/Images/Apple.png"
							alt="App Store"
							width={32}
							height={32}
							className="object-contain filter brightness-0 invert"
						/>
						<div className="flex flex-col items-start leading-tight">
							<span className="text-[15px]  tracking-wider">
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
}