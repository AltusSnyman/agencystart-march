import { useState } from "react";

const faqs = [
  {
    question: "Do I need technical experience?",
    answer:
      "Not at all. Our training starts from absolute zero. If you can send an email, you can do this. The 5-day sprint walks you through everything step-by-step.",
  },
  {
    question: "How quickly can I start making money?",
    answer:
      "This depends entirely on your effort, experience, and market. Some members have reported landing clients within weeks, while others take longer. We provide the tools and training, but results are not guaranteed and vary significantly by individual.",
  },
  {
    question: "What software costs should I expect?",
    answer:
      "Just $97/mo. That covers your GoHighLevel license, all snapshots, training, and community access. No hidden fees.",
  },
  {
    question: "Is this ongoing support or a one-time course?",
    answer:
      "Ongoing. You get continuous mentorship, weekly live calls, and community support for as long as you're a member.",
  },
  {
    question: "What if I can't find clients?",
    answer:
      "We give you cold email scripts, a 100K leads pack, call coaching, and a proven outreach framework. Finding clients is part of the training.",
  },
  {
    question: "What happens if I wait?",
    answer:
      "The standard rate is $197/mo. The current founder's rate of $97/mo is available while we're growing the community.",
  },
  {
    question: "How does the guarantee work?",
    answer:
      "Follow the Month-1 setup steps. If you've done the work and it hasn't paid for itself, email us within 30 days for a full refund.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-[#64748B] text-center max-w-2xl mx-auto mb-12">
          Got questions? We've got answers.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT — FAQ accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 py-4">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center cursor-pointer text-left"
                >
                  <span className="font-semibold text-[#0F172A]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#64748B] transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === i ? (
                  <div className="overflow-hidden opacity-100 pt-2 pb-1">
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* RIGHT — FAQ video */}
          <div className="glass-card p-2">
            <iframe
              src="https://www.loom.com/embed/4cfc67cdb5d24229841aae6e8ede8a46"
              className="w-full aspect-video rounded-xl"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
