// ===============================
// StatsSection.jsx (ecommerce services)
// ===============================
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// simple counter hook with requestAnimationFrame
function useCounter(target = 0, { duration = 1200, inView = false } = {}) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!inView) return;

    const step = (ts) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic easeOut
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [target, duration, inView]);

  return value;
}

function CounterCard({ target, label, suffix = "", prefix = "", hint }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const value = useCounter(target, { duration: 1500, inView });

  return (
    <div
      ref={ref}
      className="relative rounded-2xl bg-white border border-gray-200 shadow-sm p-8 md:p-10"
    >
      <div className="text-5xl md:text-6xl font-bold text-gray-900">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-4 text-lg font-medium text-gray-900">{label}</div>
      {hint && <p className="mt-2 text-sm text-gray-500">{hint}</p>}
    </div>
  );
}

export default function EcommerceStatsSection() {
  return (
    <section className="w-full bg-[#000000] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <CounterCard
          target={19}
          suffix="+ Years"
          label="in Marketplace Growth"
          hint="Amazon, eBay, and Etsy expertise since 2006."
        />
        <CounterCard
          target={150}
          suffix="+"
          label="Stores Launched"
          hint="End-to-end setup, verification, and go-live."
        />
        <CounterCard
          target={1200}
          suffix="+"
          label="Listings Optimized"
          hint="SEO, A+ content, and conversion-first media."
        />
        <CounterCard
          target={25}
          prefix="$"
          suffix="M+"
          label="Ad Spend Managed"
          hint="Sponsored Products, Brands, and DSP performance."
        />
        <CounterCard
          target={4800}
          suffix="+"
          label="Verified Reviews Collected"
          hint="Review strategy, follow-ups, and compliance."
        />
        <CounterCard
          target={35}
          suffix="%"
          label="Average Sales Lift"
          hint="Typical uplift after 90 days of optimization."
        />
      </div>
    </section>
  );
}
