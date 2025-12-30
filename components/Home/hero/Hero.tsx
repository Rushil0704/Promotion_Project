import React from "react";
import Image from "next/image";

export const Hero = () => {
	return (
		// Main Hero Section with background grid and color
		<section className="relative bg-[#F5F3E8] overflow-hidden text-text">
			{/* Grid Background Image */}
			<div
				className="absolute inset-0 bg-[url('/Images/Grid.png')] bg-center bg-no-repeat pointer-events-none mix-blend-multiply opacity-100"
				aria-hidden="true"
			></div>

			<div className="container relative z-10">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
					{/* Left Column: Text and Buttons */}
					<div className="flex-1 flex flex-col items-start gap-8 ">
						{/* Top "Loved by..." Pill */}
						<div className="inline-flex items-center bg-white/60 border border-[#E5E3D8] rounded-full  shadow-sm backdrop-blur-sm pr-7.5 py-3.75] pl-2">
							<Image
								src="/Images/Image1.png"
								alt="Users"
								width={38}
								height={38}
								className="object-contain"
							/>
							<Image
								src="/Images/Image2.png"
								alt="Users"
								width={38}
								height={38}
								className="object-contain"
							/>
							<Image
								src="/Images/Image3.png"
								alt="Users"
								width={38}
								height={38}
								className="object-contain"
							/>
							<span className="text-[18px] text-black font-medium ml-4">
								Loved by 2.4M users with a 4.8 rating
							</span>
						</div>

						{/* Main Headline */}
						<h1 className="text-4xl md:text-5xl lg:text-[62px] font-bold leading-[1.1] tracking-tight text-secondary">
							Scan Any Product. Know{" "}
							<br className="hidden lg:block" />
							<span className="relative inline-block">
								How Healthy It Really Is
								{/* Yellow underline effect */}
								<span className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD700] -z-10 opacity-80 rounded-full"></span>
							</span>
						</h1>

						{/* Sub-text paragraph */}
						<p className="text-lg max-w-2xl leading-relaxed">
							Instantly scan product barcodes to check health
							ratings, nutrition quality, and better alternatives
							- so you can make smarter, healthier choices every
							day.
						</p>

						{/* App Store Buttons */}
						<div className="flex flex-wrap gap-4 mt-4">
							{/* Google Play Button - Using dark green background */}
							<a
								href="#"
								className="transition-transform hover:-translate-y-1"
							>
								<div className="bg-[#114D3A] rounded-xl p-1.5">
									<Image
										src="/Images/google-play-badge.png"
										alt="Get it on Google Play"
										width={160}
										height={50}
										className="h-12.5 w-auto"
									/>
								</div>
							</a>
							{/* App Store Button - Using dark green background */}
							<a
								href="#"
								className="transition-transform hover:-translate-y-1"
							>
								<div className="bg-[#114D3A] rounded-xl p-1.5">
									<Image
										src="/Images/app-store-badge.png"
										alt="Download on the App Store"
										width={160}
										height={50}
										className="h-12.5 w-auto"
									/>
								</div>
							</a>
						</div>
					</div>

					{/* Right Column: Phone and Graphics */}
					<div className="relative flex justify-center lg:justify-end">
						<div className="relative w-87.5 md:w-100 lg:w-120 aspect-4/5 flex justify-center items-center">
							{/* Yellow Splash Background */}
							<Image
								src="/Images/Ellipse.png"
								alt=""
								width={500}
								height={500}
								className="absolute top-1/2 left-3/5 -translate-x-1/2 -translate-y-1/2 w-[140%] h-auto max-w-none z-0"
							/>

							{/* Mobile Phone Mockup */}
							<Image
								src="/Images/Group.png"
								alt="App Screenshot on Phone"
								width={480}
								height={600}
								className="relative z-10 w-full h-auto drop-shadow-2xl"
							/>

							{/* Floating Product Card */}
							<Image
								src="/Images/floating-card.png"
								alt="Product Scan Result"
								width={240}
								height={300}
								className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-50 md:w-60 h-auto shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
