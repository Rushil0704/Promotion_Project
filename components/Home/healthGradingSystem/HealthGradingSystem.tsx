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
		<section className=" bg-[#F5F3E8]">
			<div className="container mx-auto ">
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
				<div className="relative w-full  md:h-115 flex items-center overflow-x-hidden overflow-y-visible">
					{/* Background Rectangle Image */}
					<div className="absolute inset-0 z-0">
						<Image
							src="/Images/Rectangle.png"
							alt="background shape"
							fill
							className="object-fill lg:object-stretch"
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
										<span className="w-2 h-2 bg-black rounded-full shrink-0"></span>
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

					</div>
					<div className="absolute top-0 right-0 lg:top-10 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 z-20">
						<Image
							src="/Images/star.png"
							alt="Star icon"
							fill
							className="object-contain"
						/>
					</div>
					<div className="absolute -right-10 bottom-0 w-full h-100 lg:h-129.5 z-10 hidden lg:block">
						<Image
							src="/Images/image.png"
							alt="Woman with phone"
							fill
							className="object-contain translate-x-20 lg:translate-x-0 scale-x-[-1]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
