import React from "react";

export const KeyFeatures = () => {
	const features = [
		{
			title: "Barcode Product Scanner",
			desc: "Instantly scan any barcode to reveal what's inside the product and how it affects your health in seconds.",
		},
		{
			title: "Healthier Alternatives",
			desc: "Discover better food options instantly, helping you switch to healthier choices without confusion or guesswork.",
		},
		{
			title: "Smart Health Analysis",
			desc: "Our system breaks down ingredients, nutrients, and additives to show how healthy the product really is.",
		},
		{
			title: "Scan History",
			desc: "Quickly revisit previously scanned products, track your choices, and compare how your food habits improve over time.",
		},
		{
			title: "Product Ratings",
			desc: "See clear ratings and explanations so you can make informed decisions at a glance.",
		},
		{
			title: "Reward Points",
			desc: "Earn points for healthy choices and redeem rewards as your habits improve.",
		},
	];

	return (
		// સેક્શનમાં overflow-hidden રાખવું જેથી Glow બહાર ન નીકળે
		<section className="relative overflow-hidden py-16 md:py-24">
			{/* --- RIGHT SIDE GLOW (Tailwind Classes) --- */}
			<div className="absolute pointer-events-none rounded-full bg-primary/15 blur-[150px] w-149 h-164.75 top-[12%] -right-25 -z-10" />

			{/* --- LEFT SIDE GLOW (Tailwind Classes) --- */}
			<div className="absolute pointer-events-none rounded-full bg-primary/15 blur-[150px] w-150 h-162.5 bottom-[10%] -left-12.5 -z-10" />

			<div className="container relative z-10 flex flex-col gap-8 md:gap-12 mx-auto px-4">
				<div className="text-center max-w-2xl mx-auto">
					<h2 className="text-3xl md:text-5xl font-bold text-[#114D3A]">
						Key Features
					</h2>
					<p className="text-base text-gray-500 mt-4">
						Powerful Features Designed for Everyday Health
					</p>
				</div>

				<div className="relative">
					<ul className="flex flex-col">
						{features.map((f, idx) => (
							<li
								key={idx}
								className="flex md:flex-row flex-col justify-between items-center md:gap-10 gap-4 border-b border-[#bbb] py-10 md:py-14 last:border-0"
							>
								{/* Badge Section */}
								<div className="flex items-start md:items-center">
									<div className="relative w-full flex justify-center">
										<div className="md:w-20 md:h-20 w-14 h-14 rounded-full bg-[#114D3A]/10 text-[#114D3A] flex items-center justify-center font-bold text-[22px] md:text-[28px]">
											{String(idx + 1).padStart(2, "0")}
										</div>
									</div>
								</div>

								{/* Title Section */}
								<div className="flex items-center flex-1 w-full">
									<div className="w-full md:text-start text-center">
										<h3 className="text-xl md:text-[30px] font-bold text-[#1A1A1A]">
											{f.title}
										</h3>
									</div>
								</div>

								{/* Description Section */}
								<div className="md:text-start text-center flex-[1.5] w-full">
									<p className="text-base md:text-[18px] text-gray-500 leading-relaxed">
										{f.desc}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
