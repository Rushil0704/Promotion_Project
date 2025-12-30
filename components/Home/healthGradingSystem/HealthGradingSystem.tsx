import React from "react";
import Image from "next/image";

export const HealthGradingSystem = () => {
	const grades = [
		{ letter: "A", description: "Excellent nutritional value" },
		{ letter: "B", description: "Good, safe for regular use" },
		{ letter: "C", description: "Average, limited consumption" },
		{ letter: "D", description: "Poor health impact" },
	];

	return (
		<section className="py-20 bg-[#F5F3E8]">
			<div className="container mx-auto px-4 lg:px-20">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
						Health Grading System
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Each product is graded using a simple health score based
						on nutrition quality, ingredient safety, and overall
						impact on your health, making it easy to understand at a
						glance.
					</p>
				</div>

				{/* Image Background Container */}
				<div className="relative w-full  h-[460px] flex items-center">
					{/* Background Rectangle Image */}
					<div className="absolute inset-0 z-0">
						<Image
							src="/Images/Rectangle.png"
							alt="background shape"
							fill
							className="object-fill lg:object-stretch" // આનાથી ઇમેજ પૂરા બોક્સમાં ફેલાઈ જશે
							priority
						/>
					</div>

					{/* Content Layer (Relative to stay above the background image) */}
					<div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-10 py-12 lg:px-20 lg:py-0">
						{/* Left Section: Grades List */}
						<div className="flex-1 w-full lg:w-auto">
							<h3 className="text-2xl lg:text-[32px] font-bold text-black mb-6 leading-tight">
								Simple Health Grades{" "}
								<br className="hidden lg:block" /> You Can Trust
							</h3>

							{/* Grades Explained Button */}
							<button className="border-2 border-black text-black font-semibold rounded-full px-6 py-2 text-sm mb-8 hover:bg-black hover:text-white transition-colors">
								Grades Explained
							</button>

							{/* Grade Items */}
							<ul className="space-y-4">
								{grades.map((grade, index) => (
									<li
										key={index}
										className="flex items-center gap-3"
									>
										<span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
										<span className="text-black text-lg lg:text-xl">
											<span className="font-bold">
												Grade {grade.letter}
											</span>{" "}
											– {grade.description}
										</span>
									</li>
								))}
							</ul>
						</div>

						{/* Right Section: Woman Image & Star Icon */}
						<div className="flex-1 relative w-full lg:w-auto flex justify-center items-end ">
							{/* Star Icon - Positioned according to the first photo */}
							<div className="absolute top-0 right-0 lg:top-10 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 z-20">
								<Image
									src="/Images/star.png"
									alt="Star icon"
									fill
									className="object-contain"
								/>
							</div>

							{/* Woman Image - Using object-contain to look like she's standing in the shape */}
							<div className="relative w-full h-[400px] lg:h-[518px] z-10">
								<Image
									src="/Images/image.png"
									alt="Woman with phone"
									fill
									className="object-contain " 
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
