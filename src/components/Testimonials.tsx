const loomEmbeds = [
  "https://www.loom.com/embed/c40fa0a4c2334e358f0ff4bc8e243ed9",
  "https://www.loom.com/embed/4946b0101ffa470db83099a572e9c8f1",
  "https://www.loom.com/embed/639f190835c848d2abed2d7b330e74dc",
  "https://www.loom.com/embed/4c21f88038a445d69ed077e225d4346b",
  "https://www.loom.com/embed/e9218a22b6e4449483b4c39e9057129b",
  "https://www.loom.com/embed/95f9857aa3384642bcb57076519077ad",
  "https://www.loom.com/embed/9d57697974764dc0809f5e385c45e65c",
  "https://www.loom.com/embed/0dc873d4bfe7457e8bc40122242dbe53",
  "https://www.loom.com/embed/13d8a705b2d44e44adfa819800db5819",
  "https://www.loom.com/embed/044932a6daa847c5bc230ec94652630a",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loomEmbeds.map((url, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100 aspect-video"
            >
              <iframe
                src={url}
                allowFullScreen
                allow="autoplay; fullscreen"
                className="w-full h-full"
                loading="lazy"
                title={`Member testimonial ${i + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Image testimonials masonry grid */}
        <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {imageTestimonials.map((filename, i) => (
            <img
              key={i}
              src={`/assets/testimonials/${filename}`}
              alt="Member testimonial"
              className="w-full rounded-xl shadow-sm border border-slate-100"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
