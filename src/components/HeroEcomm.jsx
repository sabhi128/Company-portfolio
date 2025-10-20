// Ecommerce.jsx
import React from "react";

export default function HeroEcomm() {
    return (
        <section className="w-full py-20 bg-black text-zinc-900">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
                    {/* LEFT: Copy */}
                    <div>
                        <h1 className="font-extrabold text-white tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl">
                            <span className="block">Marketplace</span>
                            <span className="block">management</span>
                            <span className="block">services</span>
                            <span className="mt-4 block text-3xl font-semibold italic bg-gradient-to-r from-[#FF9900] via-[#E53238] via-[#0064D2] to-[#D5641C] bg-clip-text text-transparent">
                                on Amazon, eBay, and Etsy
                            </span>
                        </h1>

                        <div className="mt-8 max-w-2xl space-y-6 text-lg leading-7 text-white">
                            <p>
                                We offer a full range of e-commerce promotion services, from
                                registration and verification to niche analysis and product
                                management.
                            </p>
                            <p>
                                We provide services to help you launch products and increase
                                sales on Amazon, eBay, Etsy, and other marketplaces. With our
                                services, you can enter new markets and improve sales
                                performance in existing ones.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href="/contact"
                                className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-600 active:translate-y-px"
                            >
                                Challenge us!
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Testimonial / Statement Card */}
                    <div className="relative py-10">
                        {/* subtle glow */}
                        <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-sky-200/20 blur-2xl" />
                        <div className="relative rounded-[2rem] border border-sky-300/80 bg-white p-6 shadow-[0_20px_60px_-10px_rgba(2,132,199,0.25)] md:p-10">
                            <p className="text-[15px] leading-7 text-zinc-600 md:text-base">
                                <span className="font-semibold text-zinc-800">
                                    Amazon, eBay, and Etsy
                                </span>{" "}
                                are powerful marketplaces that can dramatically expand your online reach.
                                When used effectively, they help grow your brand visibility, attract new customers,
                                and accelerate sales. But without the right marketing strategy, these platforms
                                can quickly turn into time-consuming challenges with little return.
                            </p>

                            <p className="mt-6 text-[15px] leading-7 text-zinc-600 md:text-base">
                                Our marketplace experts drive measurable growth by optimizing and promoting
                                your products across top eCommerce platforms. Since 2020, we’ve helped brands
                                and businesses scale faster, boost profitability, and dominate digital marketplaces
                                through smart marketing and data-driven strategy.
                            </p>


                            <div className="mt-10 flex items-center gap-4">
                                <img
                                    src="/awa.jpg"
                                    alt="Oleksandr Vlasenko"
                                    className="h-14 w-14 rounded-full object-cover ring-2 ring-sky-300"
                                />
                                <div>
                                    <div className="text-base font-semibold text-zinc-900">
                                        Muhammad Awais
                                    </div>
                                    <div className="text-sm text-zinc-500">
                                        Head of Marketplace Growth
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END right card */}
                </div>
            </div>
        </section>
    );
}
