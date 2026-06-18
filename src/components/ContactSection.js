'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        router.push('/thank-you');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full bg-green-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* ── Heading ─────────────────────────────── */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let&apos;s Make It Happen!
          </h2>

          {/* Green curved smile decoration */}
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

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto font-bold" dir="rtl">
            יש לכם שאלה או שאתם רוצים להתחיל בתהליך? מלאו את הטופס למטה ואנו נחזור אליכם בהקדם האפשרי
          </p>
        </div>

        {/* ── Contact Form ─────────────────────────── */}
        <form
            onSubmit={handleSubmit}
            dir="rtl"
            className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5"
          >
            {/* Row 1: שם פרטי + שם משפחה */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  שם פרטי <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder=""
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  שם משפחה <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder=""
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 2: מספר טלפון + אימייל */}
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  מספר טלפון <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-000-0000"
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  אימייל
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="israel@example.com"
                  className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Row 3: כתובת למשלוח */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="address" className="text-sm font-medium text-gray-700">
                כתובת למשלוח
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                placeholder="רחוב, עיר"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>

            {/* Row 4: כתבו לנו */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                כתבו לנו
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="איך נוכל לעזור לכם?"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-600 text-sm text-center">
                אירעה שגיאה בשליחת הטופס. אנא נסו שוב או צרו קשר ישירות.
              </p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold text-base px-10 py-3.5 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'שולח...' : 'לקבלת הצעת מחיר'}
              </button>
            </div>
          </form>

      </div>
    </section>
  );
}
