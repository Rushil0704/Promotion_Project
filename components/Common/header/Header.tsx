"use client"; // Required for useState in Next.js

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

const navLinks = [
	{ name: "Home", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "About", href: "#" },
	{ name: "Testimonials", href: "#" },
	{ name: "Insights", href: "#" },
	{ name: "Contact", href: "#" },
];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="container mx-auto px-4">
			<header className="bg-secondary sticky top-5 rounded-full h-20 text-white flex justify-between items-center px-6 md:px-10 z-50">
				{/* Logo Section */}
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="w-6 h-6 bg-white rounded-full"></div>
					<span className="text-lg font-medium">Logo</span>
				</div>

				{/* Desktop Navigation - Hidden on mobile */}
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-6 xl:gap-12.5">
						{navLinks.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="text-sm font-light hover:opacity-70 transition-opacity"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile Menu Button - Shown only on mobile */}
				<div className="lg:hidden">
					<button onClick={() => setIsOpen(!isOpen)} className="p-2">
						{isOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Dropdown Menu */}
				{isOpen && (
					<div className="absolute top-24 left-0 w-full bg-secondary rounded-3xl p-6 flex flex-col gap-4 lg:hidden shadow-xl">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="text-lg border-b border-white/10 pb-2"
							>
								{link.name}
							</a>
						))}
					</div>
				)}
			</header>
		</div>
	);
};
