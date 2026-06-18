import Link from 'next/link';

export const metadata = {
  title: 'תודה על פנייתך | PSI',
};

export default function ThankYou() {
  return (
    <section className="w-full min-h-[80vh] bg-green-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading — same style as form section */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Thank you
        </h2>

        {/* Green curved smile decoration — identical to form section */}
        <svg
          viewBox="0 0 200 30"
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 mx-auto mt-3 mb-5"
          aria-hidden="true"
        >
          <path
            d="M 10 5 Q 100 28 190 5"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Subtitle — same style as form section subtitle */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto font-bold" dir="rtl">
          קיבלנו את פנייתך ונחזור אלייך בהקדם
        </p>

        {/* Back to home */}
        <div className="mt-10">
          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold text-base px-10 py-3.5 rounded-full transition-colors inline-block"
          >
            חזרה לדף הבית
          </Link>
        </div>

      </div>
    </section>
  );
}
