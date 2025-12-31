'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
// @ts-expect-error slick-carousel does not provide TypeScript definitions
import 'slick-carousel/slick/slick.css';
// @ts-expect-error slick-carousel does not provide TypeScript definitions
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
    id: number;
    text: string;
    author: string;
    title: string;
    avatar: string;
}

export const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            text: 'This app makes food labels so easy to understand. I just scan and instantly know if a product is actually healthy or not.',
            author: 'Floyd Miles',
            title: 'AC manager',
            avatar: '/Images/Image1.png',
        },
        {
            id: 2,
            text: 'Now I don\'t waste time reading confusing ingredients. The scan results are clear, helpful, and super quick.',
            author: 'Floyd Miles',
            title: 'AC manager',
            avatar: '/Images/Image2.png',
        },
        {
            id: 3,
            text: 'The design is easy to use, and the health grading makes decisions stress-free. Great for everyday use.',
            author: 'Floyd Miles',
            title: 'AC manager',
            avatar: '/Images/Image1.png',
        },
        {
            id: 4,
            text: 'Best app for health-conscious shopping. Makes ingredient checking a breeze with instant feedback.',
            author: 'Floyd Miles',
            title: 'AC manager',
            avatar: '/Images/Image2.png',
        },
        {
            id: 5,
            text: 'Love how simple and intuitive this app is. No more confusion about what\'s really in my food.',
            author: 'Floyd Miles',
            title: 'AC manager',
            avatar: '/Images/Image1.png',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        dotsClass: 'slick-dots custom-dots',
        beforeChange: (_: number, next: number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="container">
            {/* Title */}
            <h2 className="text-4xl md:text-[54px] font-semibold text-center mb-12 text-[#114D3A]">
                Testimonials
            </h2>

            {/* Testimonials Slider */}
            <div className="mb-8">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => {
                        const isCenter = index === currentSlide;
                        return (
                            <div key={testimonial.id} className="px-4">
                                <div
                                    className={`rounded-2xl p-8 transition-all duration-300 min-h-64 flex flex-col justify-between ${isCenter
                                        ? "bg-secondary text-white shadow-lg"
                                        : "bg-white text-gray-700 shadow-md"
                                        }`}
                                >
                                    {/* Quote Icon */}
                                    <div className="mb-6">
                                        <Image
                                            src="/Images/tumb.png"
                                            alt="Quote Icon"
                                            width={60}
                                            height={47}
                                            className={`transition-all duration-300 ${isCenter
                                                ? "opacity-40"
                                                : "brightness-0 opacity-20"
                                                }`}
                                        />
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className={`text-base md:text-lg mb-12 md:min-h-28 ${isCenter ? 'text-white' : 'text-text-dark'}`}>
                                        {testimonial.text}
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-10 h-10">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.author}
                                                fill
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className={`font-semibold text-sm md:text-base ${isCenter ? 'text-white' : 'text-black'}`}>
                                                {testimonial.author}
                                            </p>
                                            <p
                                                className={`text-xs md:text-sm ${isCenter
                                                    ? "text-white"
                                                    : "text-[#A7A7A7]"
                                                    }`}
                                            >
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>

            <style jsx>{`
				:global(.custom-dots) {
					text-align: center;
					padding-top: 20px;
				}

				:global(.custom-dots li) {
					display: inline-block;
					width: 12px;
					height: 12px;
					margin: 0 6px;
				}

				:global(.custom-dots li button) {
					display: block;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					background-color: #ffca00;
					border: none;
					cursor: pointer;
					transition: all 0.3s ease;
					padding: 0;
				}

				:global(.custom-dots li button:hover) {
					background-color: #ffca00;
				}

				:global(.custom-dots li.slick-active button) {
					background-color: #08523b;
					transform: scale(1.3);
				}
			`}</style>
        </div>
    );
};