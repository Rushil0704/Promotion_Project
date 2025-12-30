import React from "react";
import Image from "next/image";

export const HowItWorks = () => {
	return (
		<section className="bg-[#F5F3E8] py-16 lg:py-24 overflow-hidden">
			<div className="container mx-auto px-6 lg:px-20">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
					{/* Left Column: Mobile sticking out of Rectangle */}
					{/* h-[500px] md:h-[650px] આપવાથી ફોનને બહાર નીકળવા માટે પૂરતી જગ્યા મળશે */}
					<div className="flex-1 relative flex justify-center items-center w-full h-[500px] md:h-[740px]">
						{/* 1. Rectangle Background Image - આને થોડું નાનું રાખ્યું છે */}
						<div className="absolute z-0 w-[280px] md:w-[440px] transition-all">
							<Image
								src="/Images/Rectangle12.png"
								alt="Background Shape"
								width={480}
								height={580}
								className="w-full h-auto object-contain opacity-100"
							/>
						</div>

						{/* 2. Phone Image - આની width વધારી છે જેથી તે બહાર (outside) દેખાય */}
						<div className="absolute z-10 w-[240px] md:w-[460px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all">
							<Image
								src="/Images/iphone14Pro.png"
								alt="Phone Mockup"
								width={360}
								height={750}
								className="w-full h-auto object-contain"
							/>
						</div>
					</div>

					{/* Right Column: Text Content */}
					<div className="flex-1 text-left">
						<h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#114D3A] mb-[18px]">
							How It Works
						</h2>
						<p className="text-[#4A4A4A] text-lg lg:text-[20px] leading-relaxed max-w-2xl font-light">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&apos;s standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It
							has survived not only five centuries, but also the
							leap into electronic typesetting, remaining
							essentially unchanged.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
