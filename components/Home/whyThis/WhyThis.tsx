import React from "react";
import Image from "next/image";

export const WhyThis = () => {
	return (
		<section className="bg-[#F5F3E8] overflow-hidden">
			<div className="container mx-auto ">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
					{/* Left Section: Text Content */}
					<div className="flex-1 text-left">
						<h2 className="text-3xl md:text-5xl lg:text-[54px] font-semibold text-[#114D3A] mb-4.5 ">
							Why This App Exists
						</h2>

						<div className="space-y-4.5  text-lg lg:text-[20px] leading-7.5 text-text ">
							<p>
								Instantly scan product barcodes to check health
								ratings, nutrition quality, and better
								alternatives - so you can make smarter,
								healthier choices every day. This app exists to
								help you understand what’s really inside the
								food you eat - by scanning products and
								instantly breaking down ingredients, nutrition,
								and health impact, so you can make smarter,
								healthier choices every day.
							</p>

							<p>
								Because most food labels are confusing,
								misleading, or ignored. This app exists to turn
								complex ingredient lists and nutrition data into
								clear, honest insights, so you always know what
								you’re putting into your body before you buy or
								eat, scans into meaningful health insights,
								helping users understand nutrition clearly and
								choose better food every day.
							</p>
						</div>
					</div>

					{/* Right Section: Mobile Image with Decorative Background */}
					<div className="flex-1 relative flex justify-center items-center w-full min-h-100 md:min-h-137.5">
						{/* Dark Green Decorative Shape (Pill Shape) */}
						<div className=" " />

						{/* Phone Image Overlay */}
						<div className="relative z-10 w-60 md:w-105 drop-shadow-2xl">
							<Image
								src="/Images/Mobile.png" 
								alt="App Interface"
								width={320}
								height={650}
								className="h-auto w-full object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
