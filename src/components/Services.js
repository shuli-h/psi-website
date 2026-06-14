const services = [
  {
    id: 1,
    tag: 'בטיחות',
    title: 'בדיקת תקן מוסמכת לגנים ציבוריים',
    description: 'ביצוע בדיקות מקצועיות ומקיפות למגרשי משחקים בהתאם לתקנים הישראליים והבינלאומיים.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 21L9 5h6L22 21M11 5v10h2V5" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: 'תחזוקה',
    title: 'בדיקת תקן מוסמכת לחדרי כושר',
    description: 'שירותי תחזוקה שוטפת ותיקון ציוד מגרשי משחקים כדי להבטיח פעילות בטוחה ורציפה.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M3 10v4M21 10v4M3 12h3M18 12h3M6 9v6M18 9v6" />
      </svg>
    ),
  },
  {
    id: 3,
    tag: 'ייעוץ',
    title: 'הדפסת מדדים',
    description: 'ליווי מקצועי, הכשרות והדרכות לצוותים ורשויות בתחום בטיחות מגרשי משחקים.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      className="w-full py-20 pl-6 lg:pl-10 pr-4"
      style={{ backgroundColor: '#F7F8F9', fontFamily: 'var(--font-rubik)' }}
      dir="rtl"
    >
      <div className="max-w-6xl ml-auto w-full flex flex-col lg:flex-row items-start gap-8">

        {/* ── LEFT side: Cards ─────────────────────── */}
        <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 w-full aspect-square"
              style={{
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                minWidth: '260px',
                minHeight: '260px',
              }}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-center justify-between">
                {/* Icon circle */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-green-700"
                  style={{ backgroundColor: '#E8F5E9' }}
                >
                  {service.icon}
                </div>

              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-bold text-base leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

       {/* ── RIGHT side: Text ───────────────────────── */}
<div className="w-full lg:w-64 shrink-0 flex flex-col gap-5 text-right px-4 lg:px-6">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
    <span className="relative inline-block whitespace-nowrap">
      השירותים שלנו
      <svg
        aria-hidden="true"
        viewBox="0 0 320 22"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 w-[95%] pointer-events-none"
        style={{ bottom: '-10px', height: '22px' }}
      >
        <path
          d="M3,13
             C18,8  55,5  100,7
             C145,9 185,5  230,7
             C265,9 295,6  317,9
             C318,11 316,15 314,16
             C290,14 255,17 215,15
             C170,13 125,17  80,15
             C50,14  22,17   4,16
             Z"
          fill="#c8e6c9"
          opacity="0.85"
        />
        <path
          d="M8,15
             C35,11  80,9  130,11
             C175,13 210,10 255,12
             C278,13 300,11 313,13
             C312,16 295,18 260,17
             C215,16 165,18 115,17
             C75,16  38,18  9,17
             Z"
          fill="#a5d6a7"
          opacity="0.45"
        />
      </svg>
    </span>
  </h2>

  <p className="text-gray-500 text-lg leading-relaxed" style={{ fontWeight: 300 }}>
    אנו מציעים מגוון שירותים מקצועיים בתחום בטיחות מגרשי משחקים —
    מבדיקות ואישורים ועד תחזוקה וייעוץ מקצועי לרשויות ולגופים פרטיים.
  </p>
</div>

      </div>
    </section>
  );
}
