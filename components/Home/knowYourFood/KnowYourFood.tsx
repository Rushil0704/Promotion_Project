'use client';

import Image from 'next/image';

export const KnowYourFood = () => {
    return (
        <div className="container relative pt-10">
            <div className="bg-yellow-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 ">
                {/* Left Content */}
                <div className="flex-1 text-left max-w-[60%]">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6 leading-tight">
                        Know Your Food. <br />
                        Protect Your Health.
                    </h2>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        Your health starts with awareness. Use our smart scanner to decode labels, spot hidden ingredients, and choose food that truly supports your lifestyle.
                    </p>

                    <button className="bg-teal-900 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
                        Try The Scanner Now
                    </button>
                </div>
            </div>
            <Image
                src="/Images/knowYourFood.png"
                alt="Woman with healthy food"
                height={300}
                width={500}
                className="object-contain absolute w-auto h-80 md:h-130 bottom-0 right-20"
                priority
            />
        </div>
    );
}