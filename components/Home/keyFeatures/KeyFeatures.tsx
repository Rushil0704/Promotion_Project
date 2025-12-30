export const KeyFeatures = () => {
    const features = [
        {
            title: 'Barcode Product Scanner',
            desc: "Instantly scan any barcode to reveal what's inside the product and how it affects your health in seconds."
        },
        {
            title: 'Healthier Alternatives',
            desc: 'Discover better food options instantly, helping you switch to healthier choices without confusion or guesswork.'
        },
        {
            title: 'Smart Health Analysis',
            desc: 'Our system breaks down ingredients, nutrients, and additives to show how healthy the product really is.'
        },
        {
            title: 'Scan History',
            desc: 'Quickly revisit previously scanned products, track your choices, and compare how your food habits improve over time.'
        },
        {
            title: 'Product Ratings',
            desc: 'See clear ratings and explanations so you can make informed decisions at a glance.'
        },
        {
            title: 'Reward Points',
            desc: 'Earn points for healthy choices and redeem rewards as your habits improve.'
        }
    ]

    return (
        <section className="container flex flex-col gap-8 md:gap-12">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Key Features</h2>
                <p className="text-sm text-gray-500 mt-2">Powerful Features Designed for Everyday Health</p>
            </div>

            <div className="relative">
                <ul className="flex flex-col">
                    {features.map((f, idx) => (
                        <li key={idx} className="flex md:flex-row flex-col justify-between items-center md:gap-10 gap-3 border-b border-[#bbb] py-11.75">
                            {/* left: badge column */}
                            <div className="flex items-start md:items-center">
                                <div className="relative w-full flex justify-center">
                                    <div className="md:size-17.5 size-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-semibold text-sm z-10 text-[20px] md:text-[26px]" style={{ minWidth: 40 }}>
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>

                            {/* middle: title + dividing line */}
                            <div className="flex items-center flex-1">
                                <div className="w-full md:text-start text-center">
                                    <h3 className="text-lg md:text-[26px] font-semibold text-gray-800">{f.title}</h3>
                                </div>
                            </div>

                            {/* right: description */}
                            <div className="md:text-start text-center flex-2">
                                <p className="text-base md:text-[18px] text-gray-500">{f.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}