'use client';

import Image from 'next/image';

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
            title: 'Learn, Scan & Eat Smarter',
            description: 'Simple guides, health tips, and food insights to help you understand what\'s really inside your daily products...',
            image: '/Images/insights.png',
            author: 'Floyd Miles',
            timeAgo: '5 day ago',
            avatar: '/Images/Image1.png',
        },
        {
            id: 2,
            title: 'Decode Food Labels Easily',
            description: 'Simple guides, health tips, and food insights to help you understand what\'s really inside your daily products...',
            image: '/Images/insights.png',
            author: 'Floyd Miles',
            timeAgo: '5 day ago',
            avatar: '/Images/Image2.png',
        },
        {
            id: 3,
            title: 'Learn, Scan & Eat Smarter',
            description: 'Simple guides, health tips, and food insights to help you understand what\'s really inside your daily products...',
            image: '/Images/insights.png',
            author: 'Floyd Miles',
            timeAgo: '5 day ago',
            avatar: '/Images/Image1.png',
        },
    ];

    return (
		<div className="container">
			{/* Header */}
			<div className="flex justify-between items-center mb-12">
				<h2 className="text-4xl md:text-5xl font-bold text-teal-700">
					Insights
				</h2>
				<button className="bg-[#114D3A]  text-primary font-semibold py-2 px-6 rounded-full transition-colors duration-300">
					View all
				</button>
			</div>

			{/* Insights Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{insightCards.map((card) => (
					<div
						key={card.id}
						className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
					>
						{/* Card Image */}
						<div className="relative w-full h-48">
							<Image
								src={card.image}
								alt={card.title}
								fill
								className="object-cover"
							/>
						</div>

						{/* Card Content */}
						<div className="p-6">
							{/* Title */}
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{card.title}
							</h3>

							{/* Description */}
							<p className="text-gray-600 text-sm mb-6 leading-relaxed">
								{card.description}
							</p>

							{/* Author Info */}
							<div className="flex items-center gap-3 pt-4 border-t border-gray-200">
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
}