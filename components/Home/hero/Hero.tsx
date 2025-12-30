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
					<div className="flex-1 flex flex-col items-start gap-8 relative">
					
						{/* Subtle glow: light blurred ellipse + base glow image (reduced) */}
						<div
							className="absolute top-[8%] -left-[12%] rotate-[6deg] w-[450px] h-[474px] rounded-full bg-[rgba(255,202,0,0.2)] filter blur-[290px] pointer-events-none -z-20"
							aria-hidden="true"
						/>
						<Image
							src="/Images/Glow.png"
							alt=""
							fill
							className="absolute top-[2%] -left-[15%] w-[120%] max-w-none h-auto z-0 pointer-events-none opacity-60"
						/>
						{/* ----------------------------------------- */}

						{/* Top "Loved by..." Pill */}
						<div className="inline-flex items-center bg-white/60 border border-[#E5E3D8] rounded-full shadow-sm backdrop-blur-sm pr-6 py-2 pl-2">
						
							<div className="flex items-center">
							
								<div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden z-30">
									<Image
										src="/Images/Image1.png"
										alt="User 1"
										fill
										className="object-cover"
									/>
								</div>

							
								<div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden z-20 -ml-3">
									<Image
										src="/Images/Image2.png"
										alt="User 2"
										fill
										className="object-cover"
									/>
								</div>

						
								<div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden z-10 -ml-3">
									<Image
										src="/Images/Image3.png"
										alt="User 3"
										fill
										className="object-cover"
									/>
								</div>
							</div>

							<span className="text-[16px] md:text-[18px] text-black font-medium ml-3">
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
						<div className="flex flex-wrap gap-5 mt-4">
							{/* Google Play Button */}
							<a
								href="#"
								className="transition-transform hover:-translate-y-1 active:scale-95"
							>
								<div className="bg-[#114D3A] rounded-2xl  flex items-center gap-3 h-full px-3 w-49 border border-white/10">
									{/* Icon */}
									<Image
										src="/Images/Playstore.png" // અહિયાં ફક્ત Play Store ના લોગો વાળી ઈમેજ રાખવી
										alt="Google Play Icon"
										width={30}
										height={36}
										className="object-contain"
									/>
									{/* Text Section */}
									<div className="flex flex-col items-start leading-none">
										<span className="text-white text-[11px] font-medium uppercase tracking-wider mb-1">
											GET IT ON
										</span>
										<span className="text-[#FFD700] text-[22px] font-bold">
											Google Play
										</span>
									</div>
								</div>
							</a>

							{/* App Store Button */}
							<a
								href="#"
								className="transition-transform hover:-translate-y-1 active:scale-95"
							>
								<div className="bg-[#114D3A] rounded-2xl px-3 flex items-center gap-3 h-17 min-w-[190px] border border-white/10">
									{/* Icon */}
									<Image
										src="/Images/Apple.png"
										alt="App Store Icon"
										width={30}
										height={36}
										className="object-contain filter brightness-0 invert"
									/>
									{/* Text Section */}
									<div className="flex flex-col items-start leading-none">
										<span className="text-white text-[11px] font-medium uppercase tracking-wider mb-1">
											GET IT ON
										</span>
										<span className="text-[#FFD700] text-[22px] font-bold">
											App Store
										</span>
									</div>
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

							{/* Floating Product Card - Commented out as per your previous code, uncomment if needed */}
							{/* <Image
                src="/Images/floating-card.png"
                alt="Product Scan Result"
                width={240}
                height={300}
                className="absolute -bottom-10 -right-4 lg:-right-10 z-20 w-50 md:w-60 h-auto shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] rounded-2xl"
              /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
