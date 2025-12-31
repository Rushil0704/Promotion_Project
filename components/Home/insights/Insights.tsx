"use client";

import Image from "next/image";

interface InsightCard {
	id: number;
	title: string;
	description: string;
	image: string;
	author: string;
	timeAgo: string;
	avatar: string;
}

export const Insights = () => {
	const insightCards: InsightCard[] = [
		{
			id: 1,
			title: "Learn, Scan & Eat Smarter",
			description:
				"Simple guides, health tips, and food insights to help you understand what's really inside your daily products...",
			image: "/Images/insights.png",
			author: "Floyd Miles",
			timeAgo: "5 day ago",
			avatar: "/Images/Image1.png",
		},
		{
			id: 2,
			title: "Decode Food Labels Easily",
			description:
				"Simple guides, health tips, and food insights to help you understand what's really inside your daily products...",
			image: "/Images/insights.png",
			author: "Floyd Miles",
			timeAgo: "5 day ago",
			avatar: "/Images/Image2.png",
		},
		{
			id: 3,
			title: "Learn, Scan & Eat Smarter",
			description:
				"Simple guides, health tips, and food insights to help you understand what's really inside your daily products...",
			image: "/Images/insights.png",
			author: "Floyd Miles",
			timeAgo: "5 day ago",
			avatar: "/Images/Image1.png",
		},
	];

	return (
		<div className="container">
			{/* Header */}
			<div className="flex justify-between items-center mb-12">
				<h2 className="text-4xl md:text-5xl font-bold text-[#114D3A]">
					Insights
				</h2>
				<button className="bg-[#114D3A] text-white font-medium py-3 px-8 rounded-full text-lg transition-colors duration-300">
					View all
				</button>
			</div>

			{/* Insights Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{insightCards.map((card) => (
					<div
						key={card.id}
						className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
					>
						{/* --- Image Container with 10px Space (Changes here) --- */}
						<div className="pt-2.5 px-2.5">
							<div className="relative w-full h-62 overflow-hidden rounded-2xl">
								<Image
									src={card.image}
									alt={card.title}
									fill
									className="object-cover"
								/>
							</div>
						</div>

						{/* Card Content */}
						<div className="p-6">
							<h3 className="text-[22px] font-semibold text-gray-900 mb-3 line-clamp-2">
								{card.title}
							</h3>

							<p className="text-text text-[20px] mb-6 leading-relaxed line-clamp-3">
								{card.description}
							</p>

							<div className="flex items-center gap-3 pt-4 border-t border-gray-100">
								<div className="relative w-10 h-10">
									<Image
										src={card.avatar}
										alt={card.author}
										fill
										className="rounded-full object-cover"
									/>
								</div>
								<div>
									<p className="font-semibold text-sm text-gray-900">
										{card.author}
									</p>
									<p className="text-xs text-gray-500">
										{card.timeAgo}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
