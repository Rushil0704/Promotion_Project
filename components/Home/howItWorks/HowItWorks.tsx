import React from "react";
import Image from "next/image";

export const HowItWorks = () => {
	return (
		<section className="bg-[#F5F3E8] overflow-hidden">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
					{/* Image Column: Rectangle and Phone */}
					{/* મોબાઈલમાં min-h-[450px] આપવાથી ફોન કપાઈ નહીં જાય */}
					<div className="flex-1 relative flex justify-center items-center w-full min-h-112.5 md:min-h-137.5">
						{/* 1. Dark Green Rounded Background Shape */}
						{/* bg-[#114D3A] કલર ઉમેર્યો છે અને સાઈઝ એડજસ્ટ કરી છે */}
						<div className=" w-65 h-82.5 md:w-95 md:h-120 rounded-[40px] md:rounded-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

						{/* 2. Phone Image */}
						{/* z-10 થી તે ગ્રીન બોક્સની ઉપર રહેશે */}
						<div className="relative z-10 w-55 md:w-85 drop-shadow-2xl">
							<Image
								src="/Images/Group1.png" // તમારી ઇમેજનું નામ
								alt="How it works scanning"
								width={340}
								height={700}
								className="h-auto w-full object-contain"
								priority
							/>
						</div>
					</div>

					{/* Right Column: Text Content */}
					<div className="flex-1 text-left">
						<h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#114D3A] mb-4.5">
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
							essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing
							Lorem Ipsum passages.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
