const cards = [
  {
    title: 'מהנדס מכונות עם ראייה מערכתית',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'עמידה מלאה בדרישות התקן',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'שירות אישי וזמינות גבוהה',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    title: 'דוחות ברורים וישימים',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="w-full bg-blue-950 py-20 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-white leading-tight text-center mb-14"
          style={{ fontFamily: 'var(--font-rubik)' }}
        >
          <span className="relative inline-block whitespace-nowrap">
            אתם בידיים בטוחות
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-blue-800 rounded-2xl flex flex-col items-center text-center px-6 py-10 gap-5"
          >
            {/* Green circle behind icon */}
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              {card.icon}
            </div>

            {/* Card title */}
            <p className="text-white font-semibold text-base leading-snug">
              {card.title}
            </p>
          </div>
        ))}
        </div>

      </div>
    </section>
  );
}
