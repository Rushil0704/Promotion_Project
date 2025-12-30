import React from "react";

export const Hero = () => {
	return (
		// Main Hero Section with background grid and color
		<section className="relative bg-[#F5F3E8] overflow-hidden">
			{/* Grid Background Image */}
			<div
				className="absolute inset-0 bg-[url('/Images/Grid.png')] bg-center bg-no-repeat pointer-events-none mix-blend-multiply opacity-40"
				aria-hidden="true"
			></div>

			<div className="container mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
					{/* Left Column: Text and Buttons */}
					<div className="flex-1 flex flex-col items-start gap-8 text-[#1A1A1A]">
						{/* Top "Loved by..." Pill */}
						<div className="inline-flex items-center bg-white/60 border border-[#E5E3D8] rounded-full  shadow-sm backdrop-blur-sm pr-7.5 py-3.75] pl-2">
							<img
								src="/Images/Image1.png" // Replace with your image path
								alt="Users"
								className="w-9.5 h-9.5  object-contain"
							/>
							<img
								src="/Images/Image2.png" // Replace with your image path
								alt="Users"
								className="w-9.5 h-9.5 object-contain"
							/>
							<img
								src="/Images/Image3.png" // Replace with your image path
								alt="Users"
								className="w-9.5 h-9.5 object-contain"
							/>
							<span className="text-[18px] text-black font-medium ml-4">
								Loved by 2.4M users with a 4.8 rating
							</span>
						</div>

						{/* Main Headline */}
						<h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight">
							Scan Any Product. Know{" "}
							<br className="hidden lg:block" />
							<span className="relative inline-block">
								How Healthy It Really Is
								{/* Yellow underline effect */}
								<span className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFD700] -z-10 opacity-80 rounded-full"></span>
							</span>
						</h1>

						{/* Sub-text paragraph */}
						<p className="text-lg text-[#4A4A4A] max-w-xl leading-relaxed">
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
									<img
										src="/Images/google-play-badge.png" // Replace with your Google Play badge image
										alt="Get it on Google Play"
										className="h-[50px] w-auto"
									/>
								</div>
							</a>
							{/* App Store Button - Using dark green background */}
							<a
								href="#"
								className="transition-transform hover:-translate-y-1"
							>
								<div className="bg-[#114D3A] rounded-xl p-1.5">
									<img
										src="/Images/app-store-badge.png" // Replace with your App Store badge image
										alt="Download on the App Store"
										className="h-[50px] w-auto"
									/>
								</div>
							</a>
						</div>
					</div>

					{/* Right Column: Phone and Graphics */}
					<div className="flex-1 relative w-full max-w-[500px] lg:max-w-none flex justify-center lg:justify-end">
						<div className="relative w-[350px] md:w-[400px] lg:w-[480px] aspect-[4/5] flex justify-center items-center">
							{/* Yellow Splash Background */}
							<img
								src="/Images/Ellipse.png" // Replace with your yellow splash image
								alt=""
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-auto max-w-none z-0 scale-110 lg:scale-125"
							/>

							{/* Mobile Phone Mockup */}
							<img
								src="/Images/Group.png" // Replace with your phone mockup image
								alt="App Screenshot on Phone"
								className="relative z-10 w-full h-auto drop-shadow-2xl"
							/>

							{/* Floating Product Card */}
							<img
								src="/Images/floating-card.png" // Replace with your floating card image
								alt="Product Scan Result"
								className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-[200px] md:w-[240px] h-auto shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
