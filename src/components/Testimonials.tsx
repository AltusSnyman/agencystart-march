import { useState, useRef, useCallback } from "react";

const testimonials = [
  { name: "Ariel Levit", role: "Agency Owner", video: "/assets/testimonials/videos/square/ariel_levit.mp4" },
  { name: "Eric Wood", role: "Founder", video: "/assets/testimonials/videos/square/eric_wood.mp4" },
  { name: "Jake Morrison", role: "Entrepreneur", video: "/assets/testimonials/videos/square/jake_morrison.mp4" },
  { name: "Jean-Marc", role: "Business Owner", video: "/assets/testimonials/videos/square/jean_marc.mp4" },
  { name: "Liam Carter", role: "Consultant", video: "/assets/testimonials/videos/square/liam_carter.mp4" },
  { name: "Quincy Thomas", role: "Agency Owner", video: "/assets/testimonials/videos/square/quincy_thomas.mp4" },
  { name: "Roy Velasquez", role: "CEO", video: "/assets/testimonials/videos/square/roy_velasquez.mp4" },
  { name: "Ryan Caldwell", role: "Growth Expert", video: "/assets/testimonials/videos/square/ryan_caldwell.mp4" },
  { name: "Sadek Aber", role: "Founder", video: "/assets/testimonials/videos/square/sadek_aber.mp4" },
  { name: "Syed Khalid", role: "Agency Owner", video: "/assets/testimonials/videos/square/syed_khalid.mp4" },
];

const imageTestimonials = [
  "Ariel Levit.png",
  "Eric Wood.png",
  "Jake Morrison.png",
  "Jean-Marc.png",
  "Liam Carter.png",
  "Quincy Thomas.png",
  "Roy Velasquez.png",
  "Ryan Caldwell.png",
  "Sadek Aber.png",
  "Siseko Dodo.png",
  "Syed Khalid Hussain.png",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleClick = useCallback(
    (index: number) => {
      const clickedVideo = videoRefs.current[index];

      if (activeIndex === index) {
        // Pause the currently playing video
        if (clickedVideo) {
          clickedVideo.pause();
          clickedVideo.muted = true;
        }
        setActiveIndex(null);
      } else {
        // Pause previously active video
        if (activeIndex !== null) {
          const prevVideo = videoRefs.current[activeIndex];
          if (prevVideo) {
            prevVideo.pause();
            prevVideo.muted = true;
          }
        }
        // Play the clicked video
        if (clickedVideo) {
          clickedVideo.muted = false;
          clickedVideo.play();
        }
        setActiveIndex(index);
      }
    },
    [activeIndex]
  );

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFF7ED 50%, #F8FAFC 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] text-center mb-4">
          Real Results From Real Members
        </h2>
        <p className="text-lg sm:text-xl text-[#64748B] text-center max-w-2xl mx-auto mb-4">
          Hear from people who started exactly where you are.
        </p>
        <p className="text-xs text-[#94A3B8] text-center max-w-xl mx-auto mb-12">
          * Results shown are not typical. Individual results vary significantly based on effort, experience, and market conditions. These testimonials represent individual experiences and should not be considered as guaranteed outcomes.
        </p>

        {/* Video testimonials grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => {
            const isPlaying = activeIndex === i;
            return (
              <div
                key={i}
                className="relative group cursor-pointer rounded-xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 aspect-square"
                onClick={() => handleClick(i)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  src={t.video}
                />

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Name + role */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/70 text-xs">{t.role}</p>
                </div>

                {/* Play button overlay (shown when paused) */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 4L16 10L6 16V4Z"
                          fill="#0F172A"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Image testimonials masonry grid */}
        <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {imageTestimonials.map((filename, i) => (
            <img
              key={i}
              src={`/assets/testimonials/${filename}`}
              alt={filename.replace(".png", "")}
              className="w-full rounded-xl shadow-sm border border-slate-100"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
