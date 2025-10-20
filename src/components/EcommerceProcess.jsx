// EcommerceProcess.jsx
import React from "react";

export default function EcommerceProcess() {
  const cards = [
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      title: "Amazon",
      items: [
        "Business and market analysis before launching sales",
        "Support during business registration for working with Amazon (in Europe and the USA)",
        "Promotion of listings",
        "Creating a Brand Page on Amazon",
        "Amazon Ads advertising",
        "Work with reviews",
        "Other assistance",
      ],
      
    },
    {
      id: 2,
      logo: "data:image/png;base64,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",
      title: "Etsy",
      items: [
        "Niche audit",
        "Creation and verification of a seller account",
        "Establishing the store design",
        "Promotion of listings",
        "Setting up advertising and bringing in external traffic",
      ],
      
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
      title: "eBay",
      items: [
        "Analysis of competitors",
        "Creating and confirming a seller account",
        "Setting up the store design",
        "Promotion of product lists",
        "Setting up advertising and attracting external traffic",
      ],
    },
  ];

  return (
    <section className="w-full bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-14">
          What is involved in the process of{" "}
          <span className="block text-sky-500">marketplace management?</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-sky-300 bg-white p-8 shadow-[0_10px_50px_-10px_rgba(2,132,199,0.15)] hover:shadow-[0_10px_60px_-10px_rgba(2,132,199,0.25)] transition"
            >
              <div className="mb-4">
                <img
                  src={card.logo}
                  alt={`${card.title} logo`}
                  className="h-10 w-auto"
                />
              </div>

              <h3 className="font-semibold text-lg mb-4">{card.title}</h3>

              <ul className="space-y-2 text-[15px] leading-relaxed text-zinc-700">
                {card.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-sky-500 text-lg leading-5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
