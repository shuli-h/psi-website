'use client';

import { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    tag: 'בטיחות',
    title: 'בדיקות בטיחות למתקני משחקים בהתאם לת״י 1498',
    subtitle: 'בטיחות הילדים היא האחריות של כולנו!',
    description: 'אנו מבצעים בדיקות בטיחות שנתיות ותקופתיות למתקני משחקים בהתאם לת״י 1498',
    desktopDescExtra: ' הבדיקה כוללת איתור מפגעים',
    mobileDescExtra: ' הבדיקה כוללת איתור מפגעים בטיחותיים, בחינת תקינות רכיבים ומחברים, בדיקת שחיקה ובלאי, זיהוי נקודות לכידה וסיכונים אפשריים, בדיקת יציבות ושלמות המתקנים, הערכת סיכוני שימוש',
    modalContent: (
      <>
        <p className="text-gray-600 text-base leading-relaxed" style={{ fontWeight: 400 }}>
          אנו מבצעים בדיקות בטיחות שנתיות ותקופתיות למתקני משחקים בהתאם לדרישות התקן הישראלי ת״י 1498
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          הבדיקות כוללות:
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          איתור מפגעים בטיחותיים, בחינת תקינות רכיבים ומחברים, בדיקת שחיקה ובלאי, זיהוי נקודות לכידה וסיכונים אפשריים, בדיקת יציבות ושלמות המתקנים, הערכת סיכוני שימוש, ומתן המלצות מקצועיות לטיפול בליקויים.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          המטרה שלנו היא לא רק לזהות ליקויים, אלא לסייע לכם ליצור סביבת משחק בטוחה, אמינה ומהנה עבור הילדים.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          השירות הזה מתאים:
        </p>
        <ul className="text-gray-500 text-base leading-relaxed list-disc ps-5" style={{ fontWeight: 300 }}>
          <li>גני ילדים פרטיים וציבוריים</li>
          <li>בתי ספר</li>
          <li>רשויות מקומיות</li>
          <li>קיבוצים ומושבים</li>
          <li>חברות תחזוקה</li>
          <li>מרכזים קהילתיים</li>
          <li>לקוחות פרטיים</li>
        </ul>
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21L8 3M21 21L16 3M8 3h8M10 3v10M14 3v10M8 13h4M12 13h4" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: 'תחזוקה',
    title: 'בדיקות בטיחות למתקני כושר בהתאם לת״י 1497 ו-EN 16630',
    description: 'מתקני כושר ציבוריים חשופים לשימוש אינטנסיבי ולעומסים משתנים. בדיקות תקופתיות מאפשרות לזהות ליקויים בזמן',
    desktopDescExtra: ' ולמנוע סיכונים מיותרים. הבדיקות כוללות בחינת יציבות ותקינות רכיבים',
    mobileDescExtra: ' ולמנוע סיכונים מיותרים. אנו מבצעים בדיקות בטיחות מקצועיות למתקני כושר בהתאם לדרישות התקנים הרלוונטיים, תוך בחינת תקינות מכנית של המתקנים',
    modalContent: (
      <>
        <p className="text-gray-600 text-base leading-relaxed" style={{ fontWeight: 400 }}>
          מתקני כושר ציבוריים חשופים לשימוש אינטנסיבי ולעומסים משתנים. בדיקות תקופתיות מאפשרות לזהות ליקויים בזמן ולמנוע סיכונים מיותרים.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          אנו מבצעים בדיקות בטיחות מקצועיות למתקני כושר בהתאם לדרישות התקנים הרלוונטיים.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          הבדיקות כוללות בחינת יציבות המתקנים, תקינות רכיבים וחיבורים, זיהוי בלאי ושחיקה, איתור מפגעים בטיחותיים ובדיקת התאמת המתקנים לדרישות התקנים הרלוונטיים.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          תוך בחינת:
        </p>
        <ul className="text-gray-500 text-base leading-relaxed list-disc ps-5" style={{ fontWeight: 300 }}>
          <li>תקינות מכנית של המתקנים</li>
          <li>יציבות ועיגון</li>
          <li>שלמות רכיבים</li>
          <li>תקינות חיבורים ומנגנונים</li>
          <li>שחיקה ובלאי</li>
          <li>תפקוד בטוח של כלל המערכת</li>
        </ul>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          מטרת הבדיקה היא להבטיח סביבת פעילות בטוחה ואמינה לכלל המשתמשים.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          השירות מתאים ל:
        </p>
        <ul className="text-gray-500 text-base leading-relaxed list-disc ps-5" style={{ fontWeight: 300 }}>
          <li>פארקים ציבוריים</li>
          <li>חדרי כושר</li>
          <li>מוסדות חינוך</li>
          <li>רשויות מקומיות</li>
          <li>מתקני ספורט קהילתיים</li>
        </ul>
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12M3 10v4M21 10v4M3 12h3M18 12h3M6 9v6M18 9v6" />
      </svg>
    ),
  },
  {
    id: 3,
    tag: 'ייעוץ',
    title: 'ייצור והדפסה תלת־ממדית של מדידי בדיקה בהתאם לת״י 1498 ו-1497',
    subtitle: 'ציוד מקצועי לבודקים, רשויות ואנשי תחזוקה',
    description:'אנו מתמחים בייצור ובהדפסה תלת־ממדית של מדידי בדיקה יעודיים',
    mobileDescExtra: ' בהתאם לדרישות תקני ת״י 1498 ות״י 1497, המשמשים לביצוע בדיקות בטיחות במתקני משחקים ומתקני כושר. המדידים מיוצרים תוך הקפדה על דיוק גיאומטרי גבוה',
    modalContent: (
      <>
        <p className="text-gray-600 text-base leading-relaxed" style={{ fontWeight: 400 }}>
          אנו מתמחים בייצור ובהדפסה תלת־ממדית של מדידי בדיקה ייעודיים
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          בהתאם לדרישות תקני ת״י 1498 ות״י 1497, המשמשים לביצוע בדיקות בטיחות במתקני משחקים ומתקני כושר.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          המדידים מיוצרים תוך הקפדה על דיוק גיאומטרי גבוה, איכות ייצור מוקפדת והתאמה מלאה לדרישות התקנים, ומאפשרים לבצע בדיקות בצורה מקצועית, יעילה ועקבית.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          בין המדידים שאנו מייצרים:
        </p>
        <ul className="text-gray-500 text-base leading-relaxed list-disc ps-5" style={{ fontWeight: 300 }}>
          <li>מדידי לכידת ראש</li>
          <li>מדידי לכידת צוואר</li>
          <li>מדידי לכידת אצבעות</li>
          <li>מדידי בדיקת פתחים ומרווחים</li>
          <li>מדידים ייעודיים למתקני כושר</li>
          <li>מדידים מותאמים אישית בהתאם לצורכי הלקוח</li>
        </ul>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          כל מדיד מתוכנן ומיוצר מתוך הבנה מעמיקה של דרישות התקן והצרכים האמיתיים של אנשי המקצוע בשטח.
        </p>
        <p className="text-gray-500 text-base leading-relaxed" style={{ fontWeight: 300 }}>
          למה לבחור במדידים שלנו?
        </p>
        <ul className="text-gray-500 text-base leading-relaxed list-none" style={{ fontWeight: 300 }}>
          <li>✔ דיוק גבוה ואיכות ייצור מוקפדת</li>
          <li>✔ פיתוח ותכנון על ידי מהנדס מכונות</li>
          <li>✔ התאמה מלאה לדרישות התקנים</li>
          <li>✔ נוחות עבודה ומשקל נמוך</li>
          <li>✔ עמידות גבוהה לאורך זמן</li>
          <li>✔ אפשרות להתאמה אישית</li>
          <li>✔ אספקה מהירה וליווי מקצועי</li>
        </ul>
      </>
    ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Services() {
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setOpenModal(null); };
    if (openModal) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [openModal]);

  return (
    <>
      <section
        className="w-full py-20 pl-6 lg:pl-10 pr-4"
        style={{ backgroundColor: '#F7F8F9', fontFamily: 'var(--font-rubik)' }}
        dir="rtl"
      >
        <div className="max-w-screen-xl ml-auto w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* ── LEFT side: Cards ─────────────────────── */}
          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 order-2 lg:order-1">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 w-full sm:aspect-square lg:h-[264px] lg:aspect-auto"
                style={{
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  minWidth: '260px',
                }}
              >
                {/* Icon + title on same row */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-green-700 shrink-0"
                    style={{ backgroundColor: '#E8F5E9' }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-base leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Subtitle (optional) + description + read-more link */}
                <div className="flex flex-col gap-2">
                  {service.subtitle && (
                    <p className="text-gray-700 text-base leading-snug" style={{ fontWeight: 500 }}>
                      {service.subtitle}
                    </p>
                  )}
                  <p className="text-gray-500 text-[15px] leading-relaxed" style={{ fontWeight: 300 }}>
                    {service.description}
                    {service.desktopDescExtra && (
                      <span className="hidden lg:inline">{service.desktopDescExtra}</span>
                    )}
                    {service.mobileDescExtra && (
                      <span className="lg:hidden">{service.mobileDescExtra}</span>
                    )}
                    {!service.description2 && (
                      <>{' '}<span
                        onClick={() => setOpenModal(service)}
                        className="text-gray-600 font-semibold cursor-pointer hover:text-gray-800 transition-colors"
                      >להמשך לחצו כאן</span></>
                    )}
                  </p>
                  {service.description2 && (
                    <p className="text-gray-500 text-[15px] leading-relaxed" style={{ fontWeight: 300 }}>
                      {service.description2}{' '}
                      <span
                        onClick={() => setOpenModal(service)}
                        className="text-gray-600 font-semibold cursor-pointer hover:text-gray-800 transition-colors"
                      >להמשך לחצו כאן</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT side: Text ───────────────────────── */}
          <div className="w-full lg:w-[30%] lg:flex-none flex flex-col gap-5 text-right px-4 lg:px-6 order-1 lg:order-2 -mt-8 lg:mt-0">
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

            <p className="text-gray-500 text-lg lg:text-[17px] leading-relaxed" style={{ fontWeight: 300 }}>
              בטיחות אמיתית מתחילה בבדיקה מקצועית ויסודית. אנו ב-PSI מספקים מעטפת שירותים מלאה בתחום בטיחות מתקני המשחק והכושר – החל מבדיקות תקופתיות בהתאם לדרישות התקן ועד פתרונות מקצועיים המסייעים לכם להגן על המשתמשים ולעמוד בדרישות החוק.
            </p>
          </div>

        </div>
      </section>

      {/* ── Modal ─────────────────────────────────── */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-8 relative"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)', fontFamily: 'var(--font-rubik)' }}
            dir="rtl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button — physical top-left, away from RTL content */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="סגור"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header: icon + title */}
            <div className="flex items-start gap-3 mb-6 pl-8">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-green-700 shrink-0"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                {openModal.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-lg leading-snug">
                {openModal.title}
              </h3>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 text-right">
              {openModal.modalContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
