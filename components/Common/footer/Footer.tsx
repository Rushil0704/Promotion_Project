import React from "react";
import { Linkedin, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import Image from "next/image";


export const Footer = () => {
	return (
		<footer className="bg-secondary mt-20 relative pt-16 pb-10">
			{/* Centered Logo Pill - Using your "perfect" logic */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[300px] bg-white rounded-full flex justify-center items-center border-2 border-secondary text-secondary font-semibold text-[40px] z-10">
				Logo
			</div>

			<div className="container mx-auto px-6 lg:px-20">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
					{/* Left Section: Nav Links and Social Icons */}
					<div className="flex flex-col gap-11">
						{/* Navigation Links */}
						<nav className="flex flex-wrap gap-11 text-white text-[16px]">
							<a href="#" className="hover:underline">
								Home
							</a>
							<a href="#" className="hover:underline">
								About
							</a>
							<a href="#" className="hover:underline">
								Terms & Condition
							</a>
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>
						</nav>

						{/* Social Icons (Yellow) */}
						<div className="flex gap-6 text-[#FFD700]">
							{" "}
							{/* Using a gold/yellow color from your image */}
							<a href="#">
								<Linkedin
									size={34}
									fill="currentColor"
									stroke="none"
								/>
							</a>
							<a href="#">
								<Instagram size={34} />
							</a>
							<a href="#">
								<Youtube
									size={34}
									fill="currentColor"
									stroke="none"
								/>
							</a>
							<a href="#">
								<Twitter
									size={34}
									fill="currentColor"
									stroke="none"
								/>
							</a>
							<a href="#">
								<Facebook
									size={34}
									fill="currentColor"
									stroke="none"
								/>
							</a>
						</div>
					</div>

					{/* Right Section: Google Play Buttons and Copyright */}
					<div className="flex flex-col items-center md:items-end gap-6.5 w-full md:w-auto">
						{/* Google Play Badges - Two badges with spacing */}
						<div className="flex flex-wrap gap-5 justify-center md:justify-end">
							{/* First Google Play Badge */}
							<div className="bg-white rounded-2xl px-4 py-2 flex items-center gap-3 cursor-pointer hover:shadow-lg transition-shadow">
								<Image src="/Images/Playstore.png" alt="Google Play" width={30} height={36} />
								<div className="flex flex-col leading-tight">
									<span className="text-xs font-semibold text-secondary">GET IT ON</span>
									<span className="text-sm font-bold text-secondary">Google Play</span>
								</div>
							</div>

							{/* Second Google Play Badge */}
							<div className="bg-white rounded-2xl px-4 py-2 flex items-center gap-3 cursor-pointer hover:shadow-lg transition-shadow">
								<Image src="/Images/Apple.png" alt="App Store" width={30} height={36} />
								<div className="flex flex-col leading-tight">
									<span className="text-xs font-semibold text-secondary">GET IT ON</span>
									<span className="text-sm font-bold text-secondary">Google Play</span>
								</div>
							</div>
						</div>

						{/* Copyright Text */}
						<p className="text-white/75 text-xs md:text-[16px]">
							© 2025 mayieat All rights reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
