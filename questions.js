/* ==========================================================================
   LINGUADUEL — ВОПРОСНИК (A0, A1, A2–B1)
   Добавляй новые объекты в QUESTIONS_DB по образцу ниже.
   tier: 0 -> A0, tier: 1 -> A1, tier: 2 -> A2–B1
   correct: индекс правильного ответа в массиве options (0..3)
   ========================================================================== */

var QUESTIONS_DB = [
  /* ========================================================================
     TIER 0: A0 (50 QUESTIONS)
     ======================================================================== */
  {
    id: "a0_1",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Приветствия",
    prompt: "Как по-испански сказать «Привет»?",
    options: ["Hola", "Adiós", "Gracias", "Perdón"],
    correct: 0,
    explanation: "«Hola» (читается «Ола», буква H не читается) — универсальное приветствие."
  },
  {
    id: "a0_2",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Вежливость",
    prompt: "Как по-испански сказать «Спасибо»?",
    options: ["Gracias", "De nada", "Buenos días", "Hola"],
    correct: 0,
    explanation: "«Gracias» означает «Спасибо». В ответ обычно говорят «De nada»."
  },
  {
    id: "a0_3",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Вежливость",
    prompt: "Что отвечают на «Gracias» (Не за что / Пожалуйста)?",
    options: ["De nada", "Perdón", "Buenas noches", "Adiós"],
    correct: 0,
    explanation: "«De nada» переводится как «Не за что / Пожалуйста» в ответ на благодарность."
  },
  {
    id: "a0_4",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Приветствия",
    prompt: "Как пожелать собеседнику «Доброе утро»?",
    options: ["Buenos días", "Buenas noches", "Hasta luego", "Mucho gusto"],
    correct: 0,
    explanation: "«Buenos días» используется утром и в первой половине дня."
  },
  {
    id: "a0_5",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прощание",
    prompt: "Как сказать «Спокойной ночи» или «Добрый вечер»?",
    options: ["Buenas noches", "Buenos días", "Por favor", "Hola"],
    correct: 0,
    explanation: "«Buenas noches» говорят вечером при встрече и перед сном."
  },
  {
    id: "a0_6",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Вежливость",
    prompt: "Как по-испански попросить «Пожалуйста» (при просьбе)?",
    options: ["Por favor", "De nada", "Gracias", "Adiós"],
    correct: 0,
    explanation: "«Por favor» добавляют к просьбе: «Un café, por favor»."
  },
  {
    id: "a0_7",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Вежливость",
    prompt: "Как сказать «Извини / Прости»?",
    options: ["Perdón", "Gracias", "Hola", "Bienvenido"],
    correct: 0,
    explanation: "«Perdón» используется, когда нужно извиниться или привлечь внимание."
  },
  {
    id: "a0_8",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прощание",
    prompt: "Как сказать «Пока / До свидания»?",
    options: ["Adiós", "Hola", "Gracias", "Por favor"],
    correct: 0,
    explanation: "«Adiós» — стандартное прощание в испанском языке."
  },
  {
    id: "a0_9",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число идёт сразу после «uno, dos, tres»?",
    options: ["Cuatro", "Cinco", "Siete", "Diez"],
    correct: 0,
    explanation: "Счёт от 1 до 4: uno (1), dos (2), tres (3), cuatro (4)."
  },
  {
    id: "a0_10",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет цифра «5»?",
    options: ["Cinco", "Dos", "Siete", "Diez"],
    correct: 0,
    explanation: "«Cinco» — пять. Например, «cinco minutos» — пять минут."
  },
  {
    id: "a0_11",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое из этих слов означает «10»?",
    options: ["Diez", "Uno", "Tres", "Cuatro"],
    correct: 0,
    explanation: "«Diez» — десять (10)."
  },
  {
    id: "a0_12",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Сколько будет «dos + cinco»?",
    options: ["Siete", "Tres", "Cuatro", "Diez"],
    correct: 0,
    explanation: "Dos (2) + cinco (5) = siete (7)."
  },
  {
    id: "a0_13",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое слово означает единицу «1»?",
    options: ["Uno", "Dos", "Tres", "Cinco"],
    correct: 0,
    explanation: "«Uno» — один (1)."
  },
  {
    id: "a0_14",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Как по-испански сказать «Синий / голубой»?",
    options: ["Azul", "Rojo", "Verde", "Negro"],
    correct: 0,
    explanation: "«Azul» — синий или голубой цвет."
  },
  {
    id: "a0_15",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Какой цвет по-испански называется «Verde»?",
    options: ["Зелёный", "Красный", "Белый", "Жёлтый"],
    correct: 0,
    explanation: "«Verde» означает зелёный цвет."
  },
  {
    id: "a0_16",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Как по-испански будет «Белый»?",
    options: ["Blanco", "Negro", "Rojo", "Azul"],
    correct: 0,
    explanation: "«Blanco» — белый, а противоположный ему чёрный — «negro»."
  },
  {
    id: "a0_17",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Какое слово переводится как «Чёрный»?",
    options: ["Negro", "Blanco", "Amarillo", "Verde"],
    correct: 0,
    explanation: "«Negro» — чёрный цвет."
  },
  {
    id: "a0_18",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Какого цвета лимон по-испански?",
    options: ["Amarillo", "Azul", "Negro", "Blanco"],
    correct: 0,
    explanation: "«Amarillo» — жёлтый цвет."
  },
  {
    id: "a0_19",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Собака»?",
    options: ["El perro", "El gato", "El pájaro", "El pez"],
    correct: 0,
    explanation: "«El perro» — собака, «el gato» — кот."
  },
  {
    id: "a0_20",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как в пекарне попросить «Хлеб»?",
    options: ["El pan", "El agua", "La leche", "El café"],
    correct: 0,
    explanation: "«El pan» — хлеб."
  },
  {
    id: "a0_21",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Напитки",
    prompt: "Что означает слово «La leche»?",
    options: ["Молоко", "Вода", "Яблоко", "Хлеб"],
    correct: 0,
    explanation: "«La leche» — молоко (например, «café con leche» — кофе с молоком)."
  },
  {
    id: "a0_22",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански сказать «Друг»?",
    options: ["El amigo", "El padre", "El niño", "La madre"],
    correct: 0,
    explanation: "«El amigo» — друг, «la amiga» — подруга."
  },
  {
    id: "a0_23",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Что означают слова «La madre y el padre»?",
    options: ["Мать и отец", "Брат и сестра", "Друг и подруга", "Мальчик и девочка"],
    correct: 0,
    explanation: "«La madre» — мать, «el padre» — отец."
  },
  {
    id: "a0_24",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Как по-испански называется «Книга»?",
    options: ["El libro", "La casa", "La luna", "El sol"],
    correct: 0,
    explanation: "«El libro» — книга, «la casa» — дом."
  },
  {
    id: "a0_25",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="65" cy="52" r="23" fill="#f59e0b"/>
            <polygon points="44,38 48,16 59,32" fill="#f59e0b"/>
            <polygon points="86,38 82,16 71,32" fill="#f59e0b"/>
            <circle cx="57" cy="48" r="3" fill="#0f172a"/>
            <circle cx="73" cy="48" r="3" fill="#0f172a"/>
            <polygon points="62,55 68,55 65,59" fill="#fb7185"/>
          </svg>`,
    prompt: "Кто изображён на картинке?",
    options: ["El gato", "El perro", "El pájaro", "El pez"],
    correct: 0,
    explanation: "На рисунке кот — «el gato»."
  },
  {
    id: "a0_26",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="65" cy="52" r="24" fill="#ef4444"/>
            <path d="M65 28 Q68 16 76 14" stroke="#92400e" stroke-width="4" fill="none" stroke-linecap="round"/>
            <ellipse cx="75" cy="22" rx="9" ry="5" fill="#22c55e" transform="rotate(-25 75 22)"/>
          </svg>`,
    prompt: "Как называется этот фрукт и какого он цвета?",
    options: ["La manzana roja", "La casa azul", "El libro verde", "El pan blanco"],
    correct: 0,
    explanation: "«La manzana» — яблоко, «roja» — красное."
  },
  {
    id: "a0_27",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="40" y="34" width="42" height="36" rx="6" fill="#f1f5f9"/>
            <path d="M82 40 h10 a8 8 0 0 1 0 18 h-10" fill="none" stroke="#f1f5f9" stroke-width="4"/>
            <ellipse cx="61" cy="36" rx="18" ry="4" fill="#78350f"/>
            <path d="M52 24 Q55 17 52 12 M66 24 Q69 17 66 12" stroke="#94a3b8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что налито в горячую чашку?",
    options: ["El café", "El agua", "La leche", "La manzana"],
    correct: 0,
    explanation: "На картинке горячий кофе — «el café»."
  },
  {
    id: "a0_28",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="65" cy="45" r="20" fill="#fbbf24"/>
            <g stroke="#fbbf24" stroke-width="3.5" stroke-linecap="round">
              <line x1="65" y1="11" x2="65" y2="19"/>
              <line x1="65" y1="71" x2="65" y2="79"/>
              <line x1="31" y1="45" x2="39" y2="45"/>
              <line x1="91" y1="45" x2="99" y2="45"/>
              <line x1="41" y1="21" x2="47" y2="27"/>
              <line x1="83" y1="63" x2="89" y2="69"/>
              <line x1="89" y1="21" x2="83" y2="27"/>
              <line x1="47" y1="63" x2="41" y2="69"/>
            </g>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El sol", "La luna", "El agua", "La casa"],
    correct: 0,
    explanation: "«El sol» — солнце, «la luna» — луна."
  },
  {
    id: "a0_29",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="74" y2="50" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="24" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las tres", "Son las cinco", "Son las diez", "Es la una"],
    correct: 0,
    explanation: "Стрелки показывают ровно 3:00 — «Son las tres»."
  },
  {
    id: "a0_30",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M42 52 a14 14 0 0 1 6 -27 a18 18 0 0 1 34 4 a12 12 0 0 1 4 23 z" fill="#94a3b8"/>
            <line x1="48" y1="60" x2="44" y2="74" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <line x1="64" y1="60" x2="60" y2="74" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <line x1="80" y1="60" x2="76" y2="74" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что падает из тучи на картинке?",
    options: ["El agua", "El pan", "El fuego", "El sol"],
    correct: 0,
    explanation: "Из дождевой тучи капает вода — «el agua»."
  },
  {
    id: "a0_31",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <line x1="65" y1="45" x2="65" y2="82" stroke="#22c55e" stroke-width="4" stroke-linecap="round"/>
            <circle cx="65" cy="24" r="10" fill="#fb7185"/>
            <circle cx="65" cy="50" r="10" fill="#fb7185"/>
            <circle cx="52" cy="37" r="10" fill="#fb7185"/>
            <circle cx="78" cy="37" r="10" fill="#fb7185"/>
            <circle cx="65" cy="37" r="8" fill="#fbbf24"/>
          </svg>`,
    prompt: "Что нарисовано на картинке?",
    options: ["La flor", "El libro", "El perro", "El café"],
    correct: 0,
    explanation: "«La flor» — цветок."
  },
  {
    id: "a0_32",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="65,14 28,44 102,44" fill="#fb7185"/>
            <rect x="38" y="44" width="54" height="36" fill="#e2e8f0"/>
            <rect x="58" y="56" width="14" height="24" fill="#0284c7"/>
          </svg>`,
    prompt: "Как по-испански называется это здание?",
    options: ["La casa", "El gato", "El agua", "La luna"],
    correct: 0,
    explanation: "«La casa» — дом."
  },
  {
    id: "a0_33",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Да и нет",
    prompt: "Как по-испански сказать «Да»?",
    options: ["Sí", "No", "Hoy", "Muy"],
    correct: 0,
    explanation: "«Sí» (с ударением на í) означает «Да», а «no» — «нет»."
  },
  {
    id: "a0_34",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число стоит между «cinco» и «siete»?",
    options: ["Seis", "Ocho", "Nueve", "Cuatro"],
    correct: 0,
    explanation: "Счёт подряд: cinco (5), seis (6), siete (7)."
  },
  {
    id: "a0_35",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое из этих слов означает «8»?",
    options: ["Ocho", "Seis", "Nueve", "Dos"],
    correct: 0,
    explanation: "«Ocho» — восемь (8)."
  },
  {
    id: "a0_36",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое слово означает цифру «9»?",
    options: ["Nueve", "Ocho", "Diez", "Uno"],
    correct: 0,
    explanation: "«Nueve» — девять (9)."
  },
  {
    id: "a0_37",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Знакомство",
    prompt: "Что говорят при знакомстве («Очень приятно»)?",
    options: ["Mucho gusto", "Hasta luego", "Buenas tardes", "Por favor"],
    correct: 0,
    explanation: "«Mucho gusto» говорят при знакомстве — «Очень приятно»."
  },
  {
    id: "a0_38",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Приветствия",
    prompt: "Как поприветствовать кого-то днём («Добрый день»)?",
    options: ["Buenas tardes", "Buenas noches", "Buenos días", "Adiós"],
    correct: 0,
    explanation: "«Buenas tardes» используют после полудня и до вечера."
  },
  {
    id: "a0_39",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El agua»?",
    options: ["Вода", "Хлеб", "Молоко", "Книга"],
    correct: 0,
    explanation: "«El agua» — вода."
  },
  {
    id: "a0_40",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Как по-испански сказать «Красный»?",
    options: ["Rojo", "Azul", "Verde", "Amarillo"],
    correct: 0,
    explanation: "«Rojo» — красный цвет."
  },
  {
    id: "a0_41",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="65" cy="46" r="22" fill="#e2e8f0"/>
            <circle cx="74" cy="40" r="18" fill="#0d1322"/>
          </svg>`,
    prompt: "Что изображено на ночном небе?",
    options: ["La luna", "El sol", "La flor", "El pan"],
    correct: 0,
    explanation: "«La luna» — луна."
  },
  {
    id: "a0_42",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="34" y="22" width="62" height="46" rx="4" fill="#38bdf8"/>
            <line x1="65" y1="22" x2="65" y2="68" stroke="#0f172a" stroke-width="3"/>
            <line x1="42" y1="34" x2="58" y2="34" stroke="#0f172a" stroke-width="2.5"/>
            <line x1="42" y1="44" x2="58" y2="44" stroke="#0f172a" stroke-width="2.5"/>
            <line x1="72" y1="34" x2="88" y2="34" stroke="#0f172a" stroke-width="2.5"/>
            <line x1="72" y1="44" x2="88" y2="44" stroke="#0f172a" stroke-width="2.5"/>
          </svg>`,
    prompt: "Какой предмет нарисован на картинке?",
    options: ["El libro", "La casa", "El gato", "El perro"],
    correct: 0,
    explanation: "На рисунке открытая книга — «el libro»."
  },
  {
    id: "a0_43",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прощание",
    prompt: "Как сказать «До скорого / Увидимся»?",
    options: ["Hasta luego", "Buenos días", "Mucho gusto", "Por favor"],
    correct: 0,
    explanation: "«Hasta luego» — распространённая фраза при прощании («До скорого»)."
  },
  {
    id: "a0_44",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Яблоко»?",
    options: ["La manzana", "La leche", "El pan", "El café"],
    correct: 0,
    explanation: "«La manzana» — яблоко."
  },
  {
    id: "a0_45",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El gato»?",
    options: ["Кот / кошка", "Собака", "Птица", "Рыба"],
    correct: 0,
    explanation: "«El gato» — кот."
  },
  {
    id: "a0_46",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански сказать «Брат»?",
    options: ["El hermano", "El padre", "El amigo", "El niño"],
    correct: 0,
    explanation: "«El hermano» — брат, «la hermana» — сестра."
  },
  {
    id: "a0_47",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Что означает слово «La hermana»?",
    options: ["Сестра", "Мать", "Подруга", "Девочка"],
    correct: 0,
    explanation: "«La hermana» — сестра."
  },
  {
    id: "a0_48",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет цифра «2»?",
    options: ["Dos", "Tres", "Uno", "Cuatro"],
    correct: 0,
    explanation: "«Dos» — два (2)."
  },
  {
    id: "a0_49",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое из этих слов означает «3»?",
    options: ["Tres", "Dos", "Seis", "Ocho"],
    correct: 0,
    explanation: "«Tres» — три (3)."
  },
  {
    id: "a0_50",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="65" cy="54" rx="28" ry="18" fill="#d97706"/>
            <ellipse cx="65" cy="50" rx="22" ry="12" fill="#fbbf24"/>
            <path d="M44 44 L52 54 M62 42 L68 54 M78 44 L84 54" stroke="#92400e" stroke-width="2.5" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El pan", "El sol", "La flor", "La casa"],
    correct: 0,
    explanation: "На картинке хлеб / батон — «el pan»."
  },

  /* ========================================================================
     TIER 1: A1 (28 QUESTIONS)
     ======================================================================== */
  {
    id: "a1_1",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Переведи: «Quiero un café con leche, por favor»",
    options: [
      "Я хочу кофе с молоком, пожалуйста",
      "Я пью чай без сахара, спасибо",
      "Где находится ближайшее кафе?",
      "Счёт, пожалуйста, я спешу"
    ],
    correct: 0,
    explanation: "«Quiero» — я хочу, «un café con leche» — кофе с молоком."
  },
  {
    id: "a1_2",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Выбери правильную форму глагола «tener»:",
    subprompt: "Yo _____ veinticinco años. (Мне 25 лет)",
    options: ["tengo", "tienes", "tiene", "tenemos"],
    correct: 0,
    explanation: "Возраст в испанском выражается через «tener»: «Yo tengo 25 años»."
  },
  {
    id: "a1_3",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как спросить «Сколько это стоит?» в магазине?",
    options: ["¿Cuánto cuesta?", "¿Dónde está?", "¿Qué hora es?", "¿Cómo te llamas?"],
    correct: 0,
    explanation: "«¿Cuánto cuesta?» — сколько стоит?"
  },
  {
    id: "a1_4",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Подбери правильный артикль:",
    subprompt: "_____ libro es muy interesante.",
    options: ["El", "La", "Las", "Unas"],
    correct: 0,
    explanation: "«Libro» — существительное мужского рода ед. числа, нужен артикль «El»."
  },
  {
    id: "a1_5",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Знак",
    svg: `<svg width="110" height="96" viewBox="0 0 110 96">
            <polygon points="55,10 98,84 12,84" fill="#fef08a" stroke="#e11d48" stroke-width="6" stroke-linejoin="round"/>
            <text x="55" y="70" fill="#0f172a" font-size="34" font-weight="900" text-anchor="middle">!</text>
          </svg>`,
    prompt: "Что означает слово «¡Cuidado!» на предупреждающем знаке?",
    options: ["Осторожно!", "Вход свободный", "Поворот направо", "Закрыто на обед"],
    correct: 0,
    explanation: "«¡Cuidado!» — «Осторожно! / Берегись!»."
  },
  {
    id: "a1_6",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Переведи на испанский: «Я не понимаю»",
    options: ["No entiendo", "No quiero", "No tengo", "No sé dónde"],
    correct: 0,
    explanation: "«Entender» — понимать. «No entiendo» — я не понимаю."
  },
  {
    id: "a1_7",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Выбери правильную форму глагола «vivir» (жить):",
    subprompt: "Nosotros _____ en Madrid.",
    options: ["vivimos", "vivo", "viven", "vives"],
    correct: 0,
    explanation: "Для «nosotros» окончание глаголов на -ir — «-imos»: vivimos."
  },
  {
    id: "a1_8",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Что означает вопрос «¿Dónde está la estación?»",
    options: ["Где находится вокзал?", "Когда отправляется поезд?", "Сколько стоит билет?", "Как тебя зовут?"],
    correct: 0,
    explanation: "«¿Dónde está...?» — где находится...?, «la estación» — станция / вокзал."
  },
  {
    id: "a1_9",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Вставь глагол «ir» (идти/ехать):",
    subprompt: "Mañana yo _____ a la playa.",
    options: ["voy", "vas", "va", "vamos"],
    correct: 0,
    explanation: "Спряжение глагола «ir» для «yo» — «voy»."
  },
  {
    id: "a1_10",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как сказать «Мне нравится музыка»?",
    options: ["Me gusta la música", "Tengo la música", "Soy música", "Quiero música"],
    correct: 0,
    explanation: "«Me gusta...» используется для выражения симпатии к объекту в ед. числе."
  },
  {
    id: "a1_11",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как спросить «Как тебя зовут?»?",
    options: ["¿Cómo te llamas?", "¿Cuántos años tienes?", "¿De dónde eres?", "¿Qué hora es?"],
    correct: 0,
    explanation: "«¿Cómo te llamas?» — стандартный вопрос «Как тебя зовут?»."
  },
  {
    id: "a1_12",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Что означает фраза «¿De dónde eres?»?",
    options: ["Откуда ты родом?", "Куда ты идёшь?", "Где ты работаешь?", "Сколько с меня?"],
    correct: 0,
    explanation: "«¿De dónde eres?» спрашивает о стране или городе происхождения."
  },
  {
    id: "a1_13",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Выбери правильную форму глагола «hablar» (говорить):",
    subprompt: "Ella _____ un poco de español.",
    options: ["habla", "hablo", "hablas", "hablamos"],
    correct: 0,
    explanation: "Для «él / ella / usted» в настоящем времени окончание «-a»: ella habla."
  },
  {
    id: "a1_14",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Что означает слово «Hoy»?",
    options: ["Сегодня", "Завтра", "Вчера", "Всегда"],
    correct: 0,
    explanation: "«Hoy» — сегодня, «mañana» — завтра, «ayer» — вчера."
  },
  {
    id: "a1_15",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Как по-испански сказать «Завтра»?",
    options: ["Mañana", "Hoy", "Ayer", "Nunca"],
    correct: 0,
    explanation: "«Mañana» переводится как «завтра»."
  },
  {
    id: "a1_16",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Подбери правильный артикль женского рода:",
    subprompt: "_____ casa es grande y bonita.",
    options: ["La", "El", "Los", "Unos"],
    correct: 0,
    explanation: "«Casa» — существительное женского рода ед. числа, поэтому «La casa»."
  },
  {
    id: "a1_17",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Кафе",
    prompt: "Как попросить счёт в ресторане?",
    options: ["La cuenta, por favor", "La mesa, por favor", "La llave, por favor", "La calle, por favor"],
    correct: 0,
    explanation: "«La cuenta» — счёт в кафе или ресторане."
  },
  {
    id: "a1_18",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Выбери правильную форму «ser»:",
    subprompt: "Yo _____ estudiante de español.",
    options: ["soy", "eres", "es", "somos"],
    correct: 0,
    explanation: "Форма глагола «ser» для «yo» — «soy»."
  },
  {
    id: "a1_19",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Погода",
    prompt: "Что означает выражение «Hace calor»?",
    options: ["Жарко", "Холодно", "Идёт снег", "Ветрено"],
    correct: 0,
    explanation: "«Hace calor» — жарко, «hace frío» — холодно."
  },
  {
    id: "a1_20",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Погода",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="48" cy="46" r="18" fill="#fbbf24"/>
            <path d="M56 58 a14 14 0 0 1 6 -27 a18 18 0 0 1 34 4 a12 12 0 0 1 4 23 z" fill="#cbd5e1"/>
          </svg>`,
    prompt: "Какая погода изображена на картинке?",
    options: ["Hay sol y nubes", "Está nevando", "Hace mucho frío", "Es de noche"],
    correct: 0,
    explanation: "На рисунке солнце и облака — «hay sol y nubes»."
  },
  {
    id: "a1_21",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Погода",
    prompt: "Что означает фраза «Hace frío»?",
    options: ["Холодно", "Жарко", "Солнечно", "Тепло"],
    correct: 0,
    explanation: "«Hace frío» — холодно."
  },
  {
    id: "a1_22",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Выбери правильную форму глагола «comer» (есть):",
    subprompt: "Tú _____ una manzana.",
    options: ["comes", "como", "come", "comemos"],
    correct: 0,
    explanation: "Для «tú» окончание глаголов на -er — «-es»: tú comes."
  },
  {
    id: "a1_23",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как перевести «¿Qué hora es?»?",
    options: ["Который час?", "Какой сегодня день?", "Где ты живёшь?", "Что это такое?"],
    correct: 0,
    explanation: "«¿Qué hora es?» — «Который час?»."
  },
  {
    id: "a1_24",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Подбери множественное число слова «libro»:",
    subprompt: "En la mesa hay dos _____.",
    options: ["libros", "libro", "libras", "libres"],
    correct: 0,
    explanation: "После «dos» ставится множественное число: «dos libros»."
  },
  {
    id: "a1_25",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Что означает фраза «No tengo tiempo»?",
    options: ["У меня нет времени", "Я не хочу есть", "Я не знаю ответа", "У меня нет денег"],
    correct: 0,
    explanation: "«No tengo tiempo» — у меня нет времени."
  },
  {
    id: "a1_26",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1",
    prompt: "Выбери правильную форму «estar» для состояния:",
    subprompt: "Hoy yo _____ muy cansado.",
    options: ["estoy", "estás", "está", "soy"],
    correct: 0,
    explanation: "Временное состояние передаётся через «estar»: «Estoy cansado»."
  },
  {
    id: "a1_27",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как сказать «Я работаю здесь»?",
    options: ["Trabajo aquí", "Vivo allí", "Como ahora", "Voy mañana"],
    correct: 0,
    explanation: "«Trabajar» — работать, «aquí» — здесь."
  },
  {
    id: "a1_28",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Город",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="20" y="38" width="90" height="14" rx="4" fill="#334155"/>
            <line x1="28" y1="45" x2="40" y2="45" stroke="#fbbf24" stroke-width="2.5"/>
            <line x1="56" y1="45" x2="68" y2="45" stroke="#fbbf24" stroke-width="2.5"/>
            <line x1="84" y1="45" x2="96" y2="45" stroke="#fbbf24" stroke-width="2.5"/>
            <rect x="28" y="18" width="24" height="16" fill="#64748b"/>
            <rect x="76" y="16" width="28" height="18" fill="#475569"/>
          </svg>`,
    prompt: "Как по-испански называется «улица»?",
    options: ["La calle", "La playa", "La montaña", "La estación"],
    correct: 0,
    explanation: "«La calle» — улица."
  },

  /* ========================================================================
     TIER 2: A2–B1 (10 QUESTIONS)
     ======================================================================== */
  {
    id: "b1_1",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика B1 • Ser vs Estar",
    prompt: "Выбери правильный глагол (географическое положение):",
    subprompt: "Madrid _____ en el centro de España.",
    options: ["está", "es", "son", "están"],
    correct: 0,
    explanation: "Для местоположения объектов в пространстве всегда используется «estar»."
  },
  {
    id: "b1_2",
    tier: 2,
    type: "visual",
    typeLabel: "Картинка B1 • Билет",
    svg: `<svg width="240" height="92" viewBox="0 0 240 92">
            <rect x="6" y="6" width="228" height="80" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <text x="18" y="28" fill="#38bdf8" font-size="11" font-weight="bold">RENFE • BILLETE DE TREN</text>
            <text x="18" y="48" fill="#f1f5f9" font-size="12" font-weight="bold">MADRID → SEVILLA</text>
            <text x="18" y="68" fill="#fbbf24" font-size="11">SALIDA: 14:30 • ANDÉN: 4</text>
          </svg>`,
    prompt: "Посмотри на билет: во сколько отправление и с какой платформы?",
    options: [
      "В 14:30 с 4-й платформы",
      "В 4:30 с 14-й платформы",
      "В 14:30 из Севильи в Мадрид",
      "Поезд прибывает на 4-й путь"
    ],
    correct: 0,
    explanation: "«Salida» — отправление (14:30), «Andén» — платформа (4)."
  },
  {
    id: "b1_3",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика B1 • Por vs Para",
    prompt: "Вставь верный предлог цели:",
    subprompt: "Estudio español _____ viajar por Latinoamérica.",
    options: ["para", "por", "en", "con"],
    correct: 0,
    explanation: "Для обозначения цели используется «para + инфинитив»."
  },
  {
    id: "b1_4",
    tier: 2,
    type: "translate",
    typeLabel: "Перевод B1 • Indefinido",
    prompt: "Переведи: «Вчера мы ходили в кино»",
    options: [
      "Ayer fuimos al cine",
      "Mañana vamos al cine",
      "Ayer íbamos en casa",
      "Hoy hemos ido al trabajo"
    ],
    correct: 0,
    explanation: "«Ayer» требует Pretérito Indefinido: форма «ir» для «мы» — «fuimos»."
  },
  {
    id: "b1_5",
    tier: 2,
    type: "visual",
    typeLabel: "Картинка B1 • Счёт в кафе",
    svg: `<svg width="230" height="98" viewBox="0 0 230 98">
            <rect x="10" y="6" width="210" height="86" rx="8" fill="#f8fafc"/>
            <text x="22" y="25" fill="#0f172a" font-size="11" font-weight="bold">LA CUENTA (СЧЁТ)</text>
            <text x="22" y="44" fill="#334155" font-size="11">2x Paella ............. 28,00 €</text>
            <text x="22" y="60" fill="#334155" font-size="11">Propina incluida ......  2,00 €</text>
            <text x="22" y="80" fill="#0f172a" font-size="12" font-weight="bold">TOTAL: 30,00 €</text>
          </svg>`,
    prompt: "Что означает строка «Propina incluida» в чеке?",
    options: [
      "Чаевые уже включены в счёт",
      "Скидка для постоянных гостей",
      "Оплата только наличными",
      "Напитки не входят в стоимость"
    ],
    correct: 0,
    explanation: "«Propina» — чаевые, «incluida» — включены."
  },
  {
    id: "b1_6",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика B1 • Местоимения",
    prompt: "Замени прямое дополнение местоимением:",
    subprompt: "¿Compraste el regalo? — Sí, _____ compré ayer.",
    options: ["lo", "le", "la", "los"],
    correct: 0,
    explanation: "«El regalo» — мужской род единственного числа, заменяется на «lo»."
  },
  {
    id: "b1_7",
    tier: 2,
    type: "translate",
    typeLabel: "Ложные друзья B1",
    prompt: "Что означает испанское слово «embarazada»?",
    options: ["Беременная", "Смущённая", "Опоздавшая", "Разочарованная"],
    correct: 0,
    explanation: "«Embarazada» = беременная, а «смущённая» будет «avergonzada»."
  },
  {
    id: "b1_8",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика B1 • Gustar",
    prompt: "Выбери правильный вариант:",
    subprompt: "A mis amigos les _____ mucho las películas de terror.",
    options: ["gustan", "gusta", "gustamos", "gusto"],
    correct: 0,
    explanation: "Подлежащее «las películas» во множественном числе требует «gustan»."
  },
  {
    id: "b1_9",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика B1 • Imperfecto",
    prompt: "Выбери форму повторяющегося действия в прошлом:",
    subprompt: "Cuando era niño, siempre _____ al fútbol en el parque.",
    options: ["jugaba", "jugué", "juego", "jugaré"],
    correct: 0,
    explanation: "Регулярные действия в детстве описываются через Pretérito Imperfecto: «jugaba»."
  },
  {
    id: "b1_10",
    tier: 2,
    type: "translate",
    typeLabel: "Ложные друзья B1",
    prompt: "Что означает испанское слово «constipado»?",
    options: ["Простуженный", "Упрямый", "Уставший", "Занятой"],
    correct: 0,
    explanation: "«Estar constipado» означает «быть простуженным / иметь насморк».",
},
/* ========================================================================
     TIER 0: A0 — ДОПОЛНИТЕЛЬНЫЕ 25 ВОПРОСОВ (a0_51 .. a0_75)
     ======================================================================== */
  {
    id: "a0_51",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дни недели",
    prompt: "Какой день недели по-испански называется «Lunes»?",
    options: ["Понедельник", "Среда", "Пятница", "Воскресенье"],
    correct: 0,
    explanation: "«Lunes» — понедельник, с него начинается испанская неделя."
  },
  {
    id: "a0_52",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дни недели",
    prompt: "Какое слово означает «Пятница»?",
    options: ["Viernes", "Martes", "Jueves", "Sábado"],
    correct: 0,
    explanation: "«Viernes» — пятница."
  },
  {
    id: "a0_53",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дни недели",
    prompt: "Как по-испански будет «Воскресенье»?",
    options: ["Domingo", "Sábado", "Lunes", "Miércoles"],
    correct: 0,
    explanation: "«Sábado» — суббота, «domingo» — воскресенье."
  },
  {
    id: "a0_54",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El queso»?",
    options: ["Сыр", "Мясо", "Рис", "Суп"],
    correct: 0,
    explanation: "«El queso» — сыр."
  },
  {
    id: "a0_55",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Как по-испански называется «Банан»?",
    options: ["El plátano", "La naranja", "La fresa", "La uva"],
    correct: 0,
    explanation: "«El plátano» — банан, «la naranja» — апельсин."
  },
  {
    id: "a0_56",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Что означает слово «La naranja»?",
    options: ["Апельсин", "Груша", "Арбуз", "Лимон"],
    correct: 0,
    explanation: "«La naranja» — апельсин (и оранжевый цвет)."
  },
  {
    id: "a0_57",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Птица»?",
    options: ["El pájaro", "El caballo", "La vaca", "El perro"],
    correct: 0,
    explanation: "«El pájaro» — птица."
  },
  {
    id: "a0_58",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El caballo»?",
    options: ["Лошадь / конь", "Корова", "Рыба", "Кот"],
    correct: 0,
    explanation: "«El caballo» — лошадь / конь."
  },
  {
    id: "a0_59",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански сказать «Рука / кисть»?",
    options: ["La mano", "El pie", "La cabeza", "El ojo"],
    correct: 0,
    explanation: "«La mano» — рука (исключение: женский род, хотя заканчивается на -o)."
  },
  {
    id: "a0_60",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «La cabeza»?",
    options: ["Голова", "Нога", "Спина", "Шея"],
    correct: 0,
    explanation: "«La cabeza» — голова."
  },
  {
    id: "a0_61",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Места",
    prompt: "Как по-испански будет «Школа»?",
    options: ["La escuela", "El banco", "La playa", "El hotel"],
    correct: 0,
    explanation: "«La escuela» — школа."
  },
  {
    id: "a0_62",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Места",
    prompt: "Что означает слово «La playa»?",
    options: ["Пляж", "Гора", "Лес", "Река"],
    correct: 0,
    explanation: "«La playa» — пляж."
  },
  {
    id: "a0_63",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Большой»?",
    options: ["Grande", "Pequeño", "Nuevo", "Bueno"],
    correct: 0,
    explanation: "«Grande» — большой, «pequeño» — маленький."
  },
  {
    id: "a0_64",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Pequeño»?",
    options: ["Маленький", "Хороший", "Плохой", "Старый"],
    correct: 0,
    explanation: "«Pequeño» — маленький."
  },
  {
    id: "a0_65",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как сказать «Хороший»?",
    options: ["Bueno", "Malo", "Frío", "Caliente"],
    correct: 0,
    explanation: "«Bueno» — хороший, «malo» — плохой."
  },
  {
    id: "a0_66",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Напитки",
    prompt: "Что означает слово «El té»?",
    options: ["Чай", "Кофе", "Сок", "Вино"],
    correct: 0,
    explanation: "«El té» — чай."
  },
  {
    id: "a0_67",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Напитки",
    prompt: "Как по-испански будет «Сок»?",
    options: ["El jugo", "La leche", "El agua", "El té"],
    correct: 0,
    explanation: "«El jugo» (в Испании также часто говорят «el zumo») — сок."
  },
  {
    id: "a0_68",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Что означает слово «El hijo»?",
    options: ["Сын", "Дочь", "Дедушка", "Внук"],
    correct: 0,
    explanation: "«El hijo» — сын, «la hija» — дочь."
  },
  {
    id: "a0_69",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански сказать «Дочь»?",
    options: ["La hija", "La madre", "La abuela", "La tía"],
    correct: 0,
    explanation: "«La hija» — дочь."
  },
  {
    id: "a0_70",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="65" cy="48" r="22" fill="#fb923c"/>
            <circle cx="65" cy="24" r="5" fill="#22c55e"/>
          </svg>`,
    prompt: "Какой фрукт изображён на картинке?",
    options: ["La naranja", "La manzana", "El plátano", "La flor"],
    correct: 0,
    explanation: "Оранжевый плод — «la naranja» (апельсин)."
  },
  {
    id: "a0_71",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="36" y="42" width="58" height="24" rx="10" fill="#fde047"/>
            <path d="M36 48 Q24 38 28 30 Q36 34 42 42" fill="#fde047"/>
            <circle cx="84" cy="50" r="2.5" fill="#0f172a"/>
          </svg>`,
    prompt: "Какой фрукт нарисован на картинке?",
    options: ["El plátano", "El pan", "El queso", "El sol"],
    correct: 0,
    explanation: "«El plátano» — банан."
  },
  {
    id: "a0_72",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="35" y="34" width="60" height="34" rx="6" fill="#facc15"/>
            <circle cx="52" cy="46" r="5" fill="#eab308"/>
            <circle cx="74" cy="54" r="6" fill="#eab308"/>
            <circle cx="58" cy="58" r="4" fill="#eab308"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El queso", "La casa", "El libro", "El agua"],
    correct: 0,
    explanation: "Кусочек сыра с дырочками — «el queso»."
  },
  {
    id: "a0_73",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Как по-испански называется «Стол»?",
    options: ["La mesa", "La silla", "La puerta", "La ventana"],
    correct: 0,
    explanation: "«La mesa» — стол, «la silla» — стул."
  },
  {
    id: "a0_74",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Что означает слово «La silla»?",
    options: ["Стул", "Кровать", "Окно", "Дверь"],
    correct: 0,
    explanation: "«La silla» — стул."
  },
  {
    id: "a0_75",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Местоимения",
    prompt: "Как по-испански будет «Я»?",
    options: ["Yo", "Tú", "Él", "Nosotros"],
    correct: 0,
    explanation: "«Yo» — я, «tú» — ты."
  },

  /* ========================================================================
     TIER 1: A1 — ДОПОЛНИТЕЛЬНЫЕ 25 ВОПРОСОВ (a1_29 .. a1_53)
     ======================================================================== */
  {
    id: "a1_29",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Querér",
    prompt: "Выбери правильную форму глагола «querer» (хотеть):",
    subprompt: "Ellos _____ ir al parque.",
    options: ["quieren", "quiero", "quieres", "queremos"],
    correct: 0,
    explanation: "Для «ellos / ellas / ustedes» глагол «querer» имеет форму «quieren»."
  },
  {
    id: "a1_30",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Вопросы",
    prompt: "Как перевести вопрос «¿Cuándo es el concierto?»?",
    options: ["Когда концерт?", "Где концерт?", "Сколько стоит билет?", "Кто поёт?"],
    correct: 0,
    explanation: "«¿Cuándo...?» — когда...?"
  },
  {
    id: "a1_31",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Вопросы",
    prompt: "Что означает вопрос «¿Por qué estudias español?»?",
    options: ["Почему ты учишь испанский?", "Когда ты приехал?", "Как дела в школе?", "Где твой словарь?"],
    correct: 0,
    explanation: "«¿Por qué...?» — почему / зачем...?"
  },
  {
    id: "a1_32",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Артикли",
    prompt: "Подбери неопределённый артикль мужского рода:",
    subprompt: "En la mochila tengo _____ cuaderno.",
    options: ["un", "una", "unos", "unas"],
    correct: 0,
    explanation: "«Cuaderno» (тетрадь) — мужской род ед. числа, нужен артикль «un»."
  },
  {
    id: "a1_33",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Артикли",
    prompt: "Подбери неопределённый артикль женского рода:",
    subprompt: "Quiero comprar _____ botella de agua.",
    options: ["una", "un", "unos", "el"],
    correct: 0,
    explanation: "«Botella» (бутылка) — женский род ед. числа, поэтому «una botella»."
  },
  {
    id: "a1_34",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Повседневность",
    prompt: "Как сказать «Я открываю дверь»?",
    options: ["Abro la puerta", "Cierro la ventana", "Limpio la mesa", "Busco la llave"],
    correct: 0,
    explanation: "«Abrir» — открывать («abro»), «la puerta» — дверь."
  },
  {
    id: "a1_35",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Повседневность",
    prompt: "Что означает фраза «Cierro la ventana»?",
    options: ["Я закрываю окно", "Я мою посуду", "Я читаю газету", "Я жду автобус"],
    correct: 0,
    explanation: "«Cerrar» — закрывать, «la ventana» — окно."
  },
  {
    id: "a1_36",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Poder",
    prompt: "Выбери правильную форму глагола «poder» (мочь):",
    subprompt: "¿_____ ayudarme, por favor?",
    options: ["Puedes", "Puedo", "Puede", "Podemos"],
    correct: 0,
    explanation: "При обращении на «ты» к собеседнику используется «¿Puedes ayudarme?»."
  },
  {
    id: "a1_37",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Общение",
    prompt: "Что означает фраза «Habla más despacio, por favor»?",
    options: [
      "Говори помедленнее, пожалуйста",
      "Повтори это громче, пожалуйста",
      "Напиши адрес на бумаге",
      "Я уже заплатил за всё"
    ],
    correct: 0,
    explanation: "«Más despacio» означает «медленнее»."
  },
  {
    id: "a1_38",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Согласование",
    prompt: "Выбери правильную форму прилагательного:",
    subprompt: "Las chicas son muy _____.",
    options: ["simpáticas", "simpático", "simpáticos", "simpática"],
    correct: 0,
    explanation: "«Las chicas» — женский род множественное число, окончание «-as»: simpáticas."
  },
  {
    id: "a1_39",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Еда",
    prompt: "Как сказать «Я пью воду»?",
    options: ["Bebo agua", "Como pan", "Leo un libro", "Escucho música"],
    correct: 0,
    explanation: "«Beber» — пить («bebo»), «agua» — вода."
  },
  {
    id: "a1_40",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Досуг",
    prompt: "Что означает фраза «Escucho música»?",
    options: ["Я слушаю музыку", "Я смотрю фильм", "Я пишу письмо", "Я гуляю в парке"],
    correct: 0,
    explanation: "«Escuchar» — слушать, «la música» — музыка."
  },
  {
    id: "a1_41",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Hay",
    prompt: "Выбери правильную форму для «в комнате есть стол»:",
    subprompt: "En la habitación _____ una mesa.",
    options: ["hay", "es", "somos", "estás"],
    correct: 0,
    explanation: "Безличная форма «hay» обозначает наличие чего-либо («есть / имеется»)."
  },
  {
    id: "a1_42",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Как спросить «Где находится метро?»?",
    options: ["¿Dónde está el metro?", "¿Qué hora tiene el metro?", "¿Quién toma el metro?", "¿Por qué hay metro?"],
    correct: 0,
    explanation: "«¿Dónde está el metro?» — где метро?"
  },
  {
    id: "a1_43",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Предлоги",
    prompt: "Выбери правильный предлог места:",
    subprompt: "El gato está _____ de la mesa.",
    options: ["debajo", "antes", "después", "sin"],
    correct: 0,
    explanation: "«Debajo de» означает «под чем-то»."
  },
  {
    id: "a1_44",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Семья",
    prompt: "Что означает фраза «Tengo dos hermanos»?",
    options: ["У меня два брата", "У меня две сестры", "Я живу один", "Мои родители дома"],
    correct: 0,
    explanation: "«Dos hermanos» — два брата (или брат и сестра в общем роде)."
  },
  {
    id: "a1_45",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Gustar",
    prompt: "Вставь правильное местоимение для «мне»:",
    subprompt: "_____ gusta mucho el chocolate.",
    options: ["Me", "Te", "Le", "Nos"],
    correct: 0,
    explanation: "«Me gusta» — мне нравится."
  },
  {
    id: "a1_46",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Кафе",
    prompt: "Как сказать «Без сахара, пожалуйста»?",
    options: ["Sin azúcar, por favor", "Con mucho hielo", "Para llevar aquí", "La cuenta, por favor"],
    correct: 0,
    explanation: "«Sin» — без, «azúcar» — сахар."
  },
  {
    id: "a1_47",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Saber",
    prompt: "Выбери правильную форму глагола «saber» (знать):",
    subprompt: "Yo no _____ la respuesta.",
    options: ["sé", "sabes", "sabe", "sabemos"],
    correct: 0,
    explanation: "Форма «saber» для «yo» — «sé» (с ударением)."
  },
  {
    id: "a1_48",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Что означает выражение «Por la mañana»?",
    options: ["Утром", "Вечером", "Вчера", "Каждую неделю"],
    correct: 0,
    explanation: "«Por la mañana» — утром, «por la tarde» — днём/вечером."
  },
  {
    id: "a1_49",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Время",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="55" y2="23" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="80" y2="50" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las doce y cuarto", "Son las tres en punto", "Es la una menos cuarto", "Son las seis y media"],
    correct: 0,
    explanation: "Часовая на 12, минутная на 3 (15 минут = cuarto) — «Son las doce y cuarto»."
  },
  {
    id: "a1_50",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Место",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="15" y="58" width="100" height="18" rx="4" fill="#fbbf24"/>
            <path d="M25 58 Q45 28 65 58 Q85 32 105 58" fill="#10b981"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La playa y el mar", "La estación de tren", "La biblioteca", "El supermercado"],
    correct: 0,
    explanation: "Песок и волны — «la playa y el mar» (пляж и море)."
  },
  {
    id: "a1_51",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Покупки",
    prompt: "Как сказать «Я плачу картой»?",
    options: ["Pago con tarjeta", "Compro un billete", "Busco un taxi", "Abro la tienda"],
    correct: 0,
    explanation: "«Pagar» — платить, «tarjeta» — банковская карта."
  },
  {
    id: "a1_52",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Estar",
    prompt: "Выбери правильную форму «estar» для «мы»:",
    subprompt: "Nosotros _____ en casa ahora.",
    options: ["estamos", "estoy", "están", "somos"],
    correct: 0,
    explanation: "Для «nosotros» форма глагола «estar» — «estamos»."
  },
  {
    id: "a1_53",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Общение",
    prompt: "Что означает фраза «Hasta mañana»?",
    options: ["До завтра", "До скорого", "Доброе утро", "Приятного аппетита"],
    correct: 0,
    explanation: "«Hasta mañana» — «До завтра»."
  },
  /* ========================================================================
     TIER 0: A0 — ДОПОЛНИТЕЛЬНЫЕ 10 ВОПРОСОВ (a0_76 .. a0_85)
     ======================================================================== */
  {
    id: "a0_76",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански называется «Рубашка»?",
    options: ["La camisa", "El zapato", "El sombrero", "La falda"],
    correct: 0,
    explanation: "«La camisa» — рубашка."
  },
  {
    id: "a0_77",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «Los zapatos»?",
    options: ["Туфли / ботинки", "Брюки", "Куртка", "Носки"],
    correct: 0,
    explanation: "«Los zapatos» — обувь (туфли или ботинки)."
  },
  {
    id: "a0_78",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Времена года",
    prompt: "Как по-испански будет «Лето»?",
    options: ["El verano", "El invierno", "El otoño", "La primavera"],
    correct: 0,
    explanation: "«El verano» — лето, «el invierno» — зима."
  },
  {
    id: "a0_79",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Времена года",
    prompt: "Что означает слово «El invierno»?",
    options: ["Зима", "Весна", "Осень", "Лето"],
    correct: 0,
    explanation: "«El invierno» — зима."
  },
  {
    id: "a0_80",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Транспорт",
    prompt: "Как по-испански сказать «Машина / автомобиль»?",
    options: ["El coche", "El tren", "El avión", "La bicicleta"],
    correct: 0,
    explanation: "«El coche» (в Испании) или «el carro» (в Латинской Америке) — машина."
  },
  {
    id: "a0_81",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Транспорт",
    prompt: "Что означает слово «El avión»?",
    options: ["Самолёт", "Поезд", "Автобус", "Корабль"],
    correct: 0,
    explanation: "«El avión» — самолёт."
  },
  {
    id: "a0_82",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански будет «Дедушка»?",
    options: ["El abuelo", "El tío", "El primo", "El padre"],
    correct: 0,
    explanation: "«El abuelo» — дедушка, «la abuela» — бабушка."
  },
  {
    id: "a0_83",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Местоимения",
    prompt: "Как переводится местоимение «Nosotros»?",
    options: ["Мы", "Они", "Вы", "Он"],
    correct: 0,
    explanation: "«Nosotros» — мы."
  },
  {
    id: "a0_84",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="28" y="42" width="74" height="22" rx="6" fill="#38bdf8"/>
            <polygon points="42,42 52,26 82,26 90,42" fill="#7dd3fc"/>
            <circle cx="46" cy="66" r="9" fill="#0f172a"/>
            <circle cx="84" cy="66" r="9" fill="#0f172a"/>
          </svg>`,
    prompt: "Какой транспорт изображён на картинке?",
    options: ["El coche", "El avión", "La casa", "El libro"],
    correct: 0,
    explanation: "На рисунке автомобиль — «el coche»."
  },
  {
    id: "a0_85",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="62" cy="46" rx="26" ry="15" fill="#fb7185"/>
            <polygon points="86,46 104,34 104,58" fill="#fb7185"/>
            <circle cx="48" cy="43" r="3" fill="#0f172a"/>
          </svg>`,
    prompt: "Кто изображён на картинке?",
    options: ["El pez", "El gato", "El perro", "El caballo"],
    correct: 0,
    explanation: "«El pez» — рыба (живая рыба в воде)."
  },

  /* ========================================================================
     TIER 1: A1 — ДОПОЛНИТЕЛЬНЫЕ 10 ВОПРОСОВ (a1_54 .. a1_63)
     ======================================================================== */
  {
    id: "a1_54",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Возвратные глаголы",
    prompt: "Выбери правильную форму глагола «llamarse» (зваться):",
    subprompt: "Mi hermana _____ Ana.",
    options: ["se llama", "me llamo", "te llamas", "nos llamamos"],
    correct: 0,
    explanation: "Для 3-го лица ед. числа («ella / mi hermana») используется «se llama»."
  },
  {
    id: "a1_55",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Указательные",
    prompt: "Выбери правильное указательное местоимение («эта»):",
    subprompt: "_____ camisa es muy bonita.",
    options: ["Esta", "Este", "Estos", "Ese"],
    correct: 0,
    explanation: "«Camisa» — женский род ед. числа, поэтому «Esta camisa»."
  },
  {
    id: "a1_56",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Распорядок дня",
    prompt: "Как сказать «Я встаю в семь утра»?",
    options: [
      "Me levanto a las siete",
      "Me acuesto a las diez",
      "Trabajo hasta las cinco",
      "Ceno con mi familia"
    ],
    correct: 0,
    explanation: "«Levantarse» — вставать с постели («me levanto»)."
  },
  {
    id: "a1_57",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Профессии",
    prompt: "Что означает фраза «Mi madre es médica»?",
    options: ["Моя мама — врач", "Моя мама — учительница", "Моя мама — повар", "Моя мама — переводчик"],
    correct: 0,
    explanation: "«Médico / médica» — врач, доктор."
  },
  {
    id: "a1_58",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Притяжательные",
    prompt: "Вставь правильное притяжательное местоимение («наши»):",
    subprompt: "_____ amigos viven en Barcelona.",
    options: ["Nuestros", "Nuestro", "Nuestra", "Mis"],
    correct: 0,
    explanation: "«Amigos» — мужской род множественное число, нужна форма «Nuestros»."
  },
  {
    id: "a1_59",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Направления",
    prompt: "Как перевести указание «Gira a la derecha»?",
    options: ["Поверни направо", "Иди прямо", "Поверни налево", "Остановись здесь"],
    correct: 0,
    explanation: "«A la derecha» — направо, «a la izquierda» — налево."
  },
  {
    id: "a1_60",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Ir a + инфинитив",
    prompt: "Выбери правильную конструкцию ближайшего будущего:",
    subprompt: "Esta tarde nosotros _____ estudiar español.",
    options: ["vamos a", "vamos", "van a", "voy a"],
    correct: 0,
    explanation: "Конструкция «ir a + инфинитив» для «nosotros» — «vamos a estudiar»."
  },
  {
    id: "a1_61",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Частота",
    prompt: "Что означает наречие «A veces»?",
    options: ["Иногда", "Всегда", "Никогда", "Часто"],
    correct: 0,
    explanation: "«A veces» переводится как «иногда»."
  },
  {
    id: "a1_62",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Muy vs Mucho",
    prompt: "Вставь правильное слово («очень»):",
    subprompt: "Este libro es _____ interesante.",
    options: ["muy", "mucho", "mucha", "muchos"],
    correct: 0,
    explanation: "Перед прилагательными («interesante») всегда ставится неизменяемое «muy»."
  },
  {
    id: "a1_63",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Направление",
    svg: `<svg width="110" height="90" viewBox="0 0 110 90">
            <rect x="15" y="15" width="80" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <path d="M72 45 H38 M50 33 L36 45 L50 57" fill="none" stroke="#fbbf24" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    prompt: "Куда указывает стрелка на знаке?",
    options: ["A la izquierda", "A la derecha", "Todo recto", "Hacia arriba"],
    correct: 0,
    explanation: "Стрелка указывает влево — «a la izquierda»."
  },
  /* ========================================================================
     TIER 0: A0 — ДОПОЛНИТЕЛЬНЫЕ 25 ВОПРОСОВ (a0_86 .. a0_110)
     ======================================================================== */
  {
    id: "a0_86",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Seis»?",
    options: ["6", "5", "7", "9"],
    correct: 0,
    explanation: "«Seis» — шесть (6)."
  },
  {
    id: "a0_87",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет цифра «7»?",
    options: ["Siete", "Seis", "Ocho", "Nueve"],
    correct: 0,
    explanation: "«Siete» — семь (7)."
  },
  {
    id: "a0_88",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое слово означает цифру «4»?",
    options: ["Cuatro", "Cinco", "Tres", "Ocho"],
    correct: 0,
    explanation: "«Cuatro» — четыре (4)."
  },
  {
    id: "a0_89",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Как по-испански сказать «Зелёный»?",
    options: ["Verde", "Rojo", "Azul", "Gris"],
    correct: 0,
    explanation: "«Verde» — зелёный."
  },
  {
    id: "a0_90",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Что означает слово «Gris»?",
    options: ["Серый", "Коричневый", "Розовый", "Оранжевый"],
    correct: 0,
    explanation: "«Gris» — серый цвет."
  },
  {
    id: "a0_91",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дни недели",
    prompt: "Какой день недели по-испански называется «Martes»?",
    options: ["Вторник", "Среда", "Четверг", "Понедельник"],
    correct: 0,
    explanation: "«Martes» — вторник."
  },
  {
    id: "a0_92",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дни недели",
    prompt: "Какое слово означает «Четверг»?",
    options: ["Jueves", "Martes", "Viernes", "Lunes"],
    correct: 0,
    explanation: "«Jueves» — четверг."
  },
  {
    id: "a0_93",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дни недели",
    prompt: "Как по-испански будет «Суббота»?",
    options: ["Sábado", "Domingo", "Viernes", "Lunes"],
    correct: 0,
    explanation: "«Sábado» — суббота."
  },
  {
    id: "a0_94",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дни недели",
    prompt: "Что означает слово «Miércoles»?",
    options: ["Среда", "Понедельник", "Пятница", "Вторник"],
    correct: 0,
    explanation: "«Miércoles» — среда."
  },
  {
    id: "a0_95",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански сказать «Бабушка»?",
    options: ["La abuela", "La madre", "La tía", "La hija"],
    correct: 0,
    explanation: "«La abuela» — бабушка, «el abuelo» — дедушка."
  },
  {
    id: "a0_96",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Что означает слово «El tío»?",
    options: ["Дядя", "Брат", "Отец", "Дедушка"],
    correct: 0,
    explanation: "«El tío» — дядя, «la tía» — тётя."
  },
  {
    id: "a0_97",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Курица / курятина»?",
    options: ["El pollo", "El pescado", "La carne", "El arroz"],
    correct: 0,
    explanation: "«El pollo» — курица (как блюдо — курятина)."
  },
  {
    id: "a0_98",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El arroz»?",
    options: ["Рис", "Сыр", "Мясо", "Суп"],
    correct: 0,
    explanation: "«El arroz» — рис."
  },
  {
    id: "a0_99",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Напитки",
    prompt: "Как по-испански будет «Вино»?",
    options: ["El vino", "La cerveza", "El zumo", "El agua"],
    correct: 0,
    explanation: "«El vino» — вино, «la cerveza» — пиво."
  },
  {
    id: "a0_100",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La vaca»?",
    options: ["Корова", "Лошадь", "Свинья", "Овца"],
    correct: 0,
    explanation: "«La vaca» — корова."
  },
  {
    id: "a0_101",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански сказать «Глаз»?",
    options: ["El ojo", "La boca", "La nariz", "La oreja"],
    correct: 0,
    explanation: "«El ojo» — глаз."
  },
  {
    id: "a0_102",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «El pie»?",
    options: ["Нога / ступня", "Рука", "Голова", "Палец"],
    correct: 0,
    explanation: "«El pie» — ступня / нога."
  },
  {
    id: "a0_103",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Места",
    prompt: "Как по-испански называется «Банк»?",
    options: ["El banco", "La tienda", "El mercado", "La farmacia"],
    correct: 0,
    explanation: "«El banco» — банк (а также «скамейка»)."
  },
  {
    id: "a0_104",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Что означает слово «La ventana»?",
    options: ["Окно", "Дверь", "Стена", "Пол"],
    correct: 0,
    explanation: "«La ventana» — окно, «la puerta» — дверь."
  },
  {
    id: "a0_105",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Плохой»?",
    options: ["Malo", "Bueno", "Grande", "Nuevo"],
    correct: 0,
    explanation: "«Malo» — плохой, «bueno» — хороший."
  },
  {
    id: "a0_106",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Местоимения",
    prompt: "Как переводится местоимение «Él»?",
    options: ["Он", "Она", "Ты", "Мы"],
    correct: 0,
    explanation: "«Él» — он, «ella» — она."
  },
  {
    id: "a0_107",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Часы",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="55" y2="23" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="75" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las seis en punto", "Son las doce y media", "Es la una menos cuarto", "Son las tres y cuarto"],
    correct: 0,
    explanation: "Обе стрелки показывают на 12 и 6 — ровно 6:00, «Son las seis en punto»."
  },
  {
    id: "a0_108",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="65,16 78,50 65,46 52,50" fill="#38bdf8"/>
            <rect x="55" y="48" width="20" height="16" rx="6" fill="#f1f5f9"/>
            <polygon points="49,54 34,60 34,56 49,50" fill="#0ea5e9"/>
            <polygon points="81,54 96,60 96,56 81,50" fill="#0ea5e9"/>
            <line x1="52" y1="70" x2="48" y2="80" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <line x1="78" y1="70" x2="82" y2="80" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
          </svg>`,
    prompt: "Какой транспорт изображён на картинке?",
    options: ["El avión", "El barco", "El tren", "El coche"],
    correct: 0,
    explanation: "«El avión» — самолёт."
  },
  {
    id: "a0_109",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="38" y="14" width="54" height="64" rx="4" fill="#92400e"/>
            <rect x="43" y="19" width="44" height="54" fill="#78350f"/>
            <circle cx="80" cy="48" r="3" fill="#fbbf24"/>
            <line x1="50" y1="27" x2="58" y2="27" stroke="#fbbf24" stroke-width="1.5"/>
            <line x1="50" y1="35" x2="58" y2="35" stroke="#fbbf24" stroke-width="1.5"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La puerta", "La ventana", "La mesa", "La silla"],
    correct: 0,
    explanation: "«La puerta» — дверь."
  },
  {
    id: "a0_110",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="60" y="52" width="10" height="28" rx="2" fill="#92400e"/>
            <circle cx="65" cy="36" r="22" fill="#16a34a"/>
            <circle cx="46" cy="48" r="13" fill="#22c55e"/>
            <circle cx="84" cy="48" r="13" fill="#22c55e"/>
            <circle cx="65" cy="28" r="11" fill="#22c55e"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El árbol", "La flor", "La casa", "La luna"],
    correct: 0,
    explanation: "«El árbol» — дерево."
  },

  /* ========================================================================
     TIER 1: A1 — ДОПОЛНИТЕЛЬНЫЕ 25 ВОПРОСОВ (a1_64 .. a1_88)
     ======================================================================== */
  {
    id: "a1_64",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Tener",
    prompt: "Выбери правильную форму глагола «tener»:",
    subprompt: "Nosotros _____ una casa grande.",
    options: ["tenemos", "tengo", "tienes", "tienen"],
    correct: 0,
    explanation: "Для «nosotros» глагол «tener» имеет форму «tenemos»."
  },
  {
    id: "a1_65",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Venir",
    prompt: "Выбери правильную форму глагола «venir» (приходить):",
    subprompt: "Yo _____ de México.",
    options: ["vengo", "vienes", "viene", "venimos"],
    correct: 0,
    explanation: "Для «yo» глагол «venir» имеет форму «vengo»."
  },
  {
    id: "a1_66",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Hacer",
    prompt: "Выбери правильную форму глагола «hacer» (делать):",
    subprompt: "¿Qué _____ tú los fines de semana?",
    options: ["haces", "hago", "hace", "hacemos"],
    correct: 0,
    explanation: "Для «tú» глагол «hacer» имеет форму «haces»."
  },
  {
    id: "a1_67",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Gustar (мн. ч.)",
    prompt: "Выбери правильную форму:",
    subprompt: "Me _____ los libros de aventuras.",
    options: ["gustan", "gusta", "gusto", "gustamos"],
    correct: 0,
    explanation: "«Los libros» — множественное число, поэтому «gustan»."
  },
  {
    id: "a1_68",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Presente continuo",
    prompt: "Выбери правильную форму продолженного времени:",
    subprompt: "Ahora mismo yo _____ leyendo un libro.",
    options: ["estoy", "soy", "tengo", "voy"],
    correct: 0,
    explanation: "Конструкция «estar + герундий»: «estoy leyendo» — я читаю прямо сейчас."
  },
  {
    id: "a1_69",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как сказать «Я живу в Москве»?",
    options: ["Vivo en Moscú", "Trabajo en Moscú", "Voy a Moscú", "Como en Moscú"],
    correct: 0,
    explanation: "«Vivir» — жить, «en» — в: «Vivo en Moscú»."
  },
  {
    id: "a1_70",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как сказать «У меня есть кошка»?",
    options: ["Tengo un gato", "Soy un gato", "Quiero un gato", "Veo un gato"],
    correct: 0,
    explanation: "«Tener» — иметь: «Tengo un gato» (у меня есть кот)."
  },
  {
    id: "a1_71",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Места",
    prompt: "Как спросить «Где туалет?»?",
    options: ["¿Dónde está el baño?", "¿Cuánto cuesta el baño?", "¿Qué hora es en el baño?", "¿Quién usa el baño?"],
    correct: 0,
    explanation: "«¿Dónde está...?» — где находится...?, «el baño» — туалет."
  },
  {
    id: "a1_72",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Состояние",
    prompt: "Как сказать «Мне холодно»?",
    options: ["Tengo frío", "Soy frío", "Hace frío", "Estoy frío"],
    correct: 0,
    explanation: "«Tener frío» — чувствовать холод: «Tengo frío»."
  },
  {
    id: "a1_73",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Вопросы",
    prompt: "Как спросить «Сколько тебе лет?»?",
    options: ["¿Cuántos años tienes?", "¿Cuánto dinero tienes?", "¿Cuántas horas son?", "¿Cuántos hermanos eres?"],
    correct: 0,
    explanation: "Возраст спрашивают через «tener»: «¿Cuántos años tienes?»."
  },
  {
    id: "a1_74",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Приветствия",
    prompt: "Что означает фраза «¿Cómo estás?»?",
    options: ["Как дела?", "Где ты?", "Кто ты?", "Сколько тебе лет?"],
    correct: 0,
    explanation: "«¿Cómo estás?» — как дела / как ты?"
  },
  {
    id: "a1_75",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1",
    prompt: "Как сказать «Мы идём в ресторан»?",
    options: ["Vamos al restaurante", "Venimos del restaurante", "Estamos en el restaurante", "Salimos del restaurante"],
    correct: 0,
    explanation: "«Ir a + al» (a + el) = «Vamos al restaurante»."
  },
  {
    id: "a1_76",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Вопросы",
    prompt: "Что означает вопрос «¿Qué estás haciendo?»?",
    options: ["Что ты делаешь?", "Где ты живёшь?", "Куда ты идёшь?", "Что ты хочешь?"],
    correct: 0,
    explanation: "«¿Qué estás haciendo?» — что ты (сейчас) делаешь?"
  },
  {
    id: "a1_77",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Ser vs Estar",
    prompt: "Выбери правильный глагол (постоянное качество):",
    subprompt: "María _____ alta y muy simpática.",
    options: ["es", "está", "hay", "son"],
    correct: 0,
    explanation: "Постоянные качества описываются через «ser»: «María es alta»."
  },
  {
    id: "a1_78",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Указательные",
    prompt: "Выбери указательное местоимение («эти»):",
    subprompt: "_____ zapatos son nuevos.",
    options: ["Estos", "Este", "Esta", "Estas"],
    correct: 0,
    explanation: "«Zapatos» — мужской род множественное число, поэтому «Estos»."
  },
  {
    id: "a1_79",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Personal a",
    prompt: "Выбери правильный вариант с предлогом:",
    subprompt: "Veo _____ mi amigo en el parque.",
    options: ["a", "en", "con", "de"],
    correct: 0,
    explanation: "Перед прямым дополнением-лицом ставится «a»: «Veo a mi amigo»."
  },
  {
    id: "a1_80",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Эмоции",
    prompt: "Как сказать «Я тебя люблю»?",
    options: ["Te quiero", "Te veo", "Te espero", "Te llamo"],
    correct: 0,
    explanation: "«Te quiero» — я тебя люблю (или «te amo» в более сильном смысле)."
  },
  {
    id: "a1_81",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Ir a",
    prompt: "Выбери правильную конструкцию ближайшего будущего:",
    subprompt: "Mañana yo _____ a trabajar temprano.",
    options: ["voy", "vas", "va", "vamos"],
    correct: 0,
    explanation: "Для «yo» глагол «ir» имеет форму «voy»: «voy a trabajar»."
  },
  {
    id: "a1_82",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Как спросить «Который час?»?",
    options: ["¿Qué hora es?", "¿Cuánto tiempo hay?", "¿Cuántos días son?", "¿A qué hora vienes?"],
    correct: 0,
    explanation: "«¿Qué hora es?» — стандартный вопрос о времени."
  },
  {
    id: "a1_83",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Кафе",
    prompt: "Как сказать «Я предпочитаю кофе»?",
    options: ["Prefiero café", "Bebo agua", "Quiero la cuenta", "Tomo té"],
    correct: 0,
    explanation: "«Preferir» — предпочитать («prefiero» — я предпочитаю)."
  },
  {
    id: "a1_84",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Muy vs Mucho",
    prompt: "Вставь правильное слово:",
    subprompt: "Tengo _____ trabajo esta semana.",
    options: ["mucho", "muy", "mucha", "muchos"],
    correct: 0,
    explanation: "Перед существительным мужского рода ед. числа «trabajo» ставится «mucho»."
  },
  {
    id: "a1_85",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Покупки",
    prompt: "Что означает вопрос «¿Cuánto cuesta esta camisa?»?",
    options: ["Сколько стоит эта рубашка?", "Какая рубашка тебе нравится?", "Где купить рубашку?", "Какого цвета рубашка?"],
    correct: 0,
    explanation: "«¿Cuánto cuesta...?» — сколько стоит...?"
  },
  {
    id: "a1_86",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Часы",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="27" y2="50" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="23" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las nueve en punto", "Son las seis y cuarto", "Es la una y media", "Son las doce menos cuarto"],
    correct: 0,
    explanation: "Часовая стрелка на 9, минутная на 12 — ровно 9:00, «Son las nueve en punto»."
  },
  {
    id: "a1_87",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Распорядок",
    prompt: "Что означает фраза «Me acuesto a las once»?",
    options: ["Я ложусь спать в одиннадцать", "Я встаю в одиннадцать", "Я обедаю в одиннадцать", "Я работаю до одиннадцати"],
    correct: 0,
    explanation: "«Acostarse» — ложиться спать («me acuesto»)."
  },
  {
    id: "a1_88",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Знак",
    svg: `<svg width="120" height="96" viewBox="0 0 120 96">
            <rect x="15" y="28" width="90" height="42" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="60" y="56" fill="#fbbf24" font-size="16" font-weight="bold" text-anchor="middle">SALIDA</text>
          </svg>`,
    prompt: "Что означает слово «SALIDA» на табличке?",
    options: ["Выход", "Вход", "Касса", "Туалет"],
    correct: 0,
    explanation: "«Salida» — выход, «entrada» — вход."
  },
  /* ========================================================================
     TIER 0: A0 — ДОПОЛНИТЕЛЬНЫЕ 20 ВОПРОСОВ (a0_111 .. a0_130)
     ======================================================================== */
  {
    id: "a0_111",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански будет «Тётя»?",
    options: ["La tía", "La prima", "La abuela", "La hermana"],
    correct: 0,
    explanation: "«La tía» — тётя, «el tío» — дядя."
  },
  {
    id: "a0_112",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Что означает слово «El niño»?",
    options: ["Мальчик / ребёнок", "Старик", "Учитель", "Сосед"],
    correct: 0,
    explanation: "«El niño» — мальчик / ребёнок, «la niña» — девочка."
  },
  {
    id: "a0_113",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Яйцо»?",
    options: ["El huevo", "El pan", "El queso", "El arroz"],
    correct: 0,
    explanation: "«El huevo» — яйцо."
  },
  {
    id: "a0_114",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La carne»?",
    options: ["Мясо", "Рыба", "Овощи", "Фрукты"],
    correct: 0,
    explanation: "«La carne» — мясо."
  },
  {
    id: "a0_115",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански будет «Суп»?",
    options: ["La sopa", "La ensalada", "La fruta", "La sal"],
    correct: 0,
    explanation: "«La sopa» — суп, «la ensalada» — салат."
  },
  {
    id: "a0_116",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La fresa»?",
    options: ["Клубника", "Вишня", "Арбуз", "Дыня"],
    correct: 0,
    explanation: "«La fresa» — клубника."
  },
  {
    id: "a0_117",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Мышь»?",
    options: ["El ratón", "El oso", "El lobo", "El pato"],
    correct: 0,
    explanation: "«El ratón» — мышь (а также компьютерная мышка)."
  },
  {
    id: "a0_118",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El oso»?",
    options: ["Медведь", "Волк", "Лиса", "Заяц"],
    correct: 0,
    explanation: "«El oso» — медведь."
  },
  {
    id: "a0_119",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Как по-испански будет «Розовый»?",
    options: ["Rosa", "Morado", "Marrón", "Dorado"],
    correct: 0,
    explanation: "«Rosa» — розовый цвет."
  },
  {
    id: "a0_120",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Что означает слово «Marrón»?",
    options: ["Коричневый", "Фиолетовый", "Серый", "Голубой"],
    correct: 0,
    explanation: "«Marrón» — коричневый цвет."
  },
  {
    id: "a0_121",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански сказать «Рот»?",
    options: ["La boca", "La nariz", "El pelo", "El dedo"],
    correct: 0,
    explanation: "«La boca» — рот."
  },
  {
    id: "a0_122",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «El pelo»?",
    options: ["Волосы", "Ухо", "Зуб", "Спина"],
    correct: 0,
    explanation: "«El pelo» — волосы."
  },
  {
    id: "a0_123",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански называется «Шляпа / шапка»?",
    options: ["El sombrero", "La chaqueta", "El vestido", "Los pantalones"],
    correct: 0,
    explanation: "«El sombrero» — шляпа / головной убор."
  },
  {
    id: "a0_124",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «El vestido»?",
    options: ["Платье", "Юбка", "Пальто", "Свитер"],
    correct: 0,
    explanation: "«El vestido» — платье."
  },
  {
    id: "a0_125",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански будет «Кровать»?",
    options: ["La cama", "El sofá", "La cocina", "El jardín"],
    correct: 0,
    explanation: "«La cama» — кровать."
  },
  {
    id: "a0_126",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «La cocina»?",
    options: ["Кухня", "Спальня", "Балкон", "Крыша"],
    correct: 0,
    explanation: "«La cocina» — кухня."
  },
  {
    id: "a0_127",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански сказать «Море»?",
    options: ["El mar", "El río", "El lago", "La nube"],
    correct: 0,
    explanation: "«El mar» — море."
  },
  {
    id: "a0_128",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «La estrella»?",
    options: ["Звезда", "Облако", "Ветер", "Дождь"],
    correct: 0,
    explanation: "«La estrella» — звезда."
  },
  {
    id: "a0_129",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански будет «Новый»?",
    options: ["Nuevo", "Viejo", "Rápido", "Lento"],
    correct: 0,
    explanation: "«Nuevo» — новый, «viejo» — старый."
  },
  {
    id: "a0_130",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Feliz»?",
    options: ["Счастливый", "Грустный", "Злой", "Усталый"],
    correct: 0,
    explanation: "«Feliz» — счастливый (например, «¡Feliz cumpleaños!» — С днём рождения!)."
  },

  /* ========================================================================
     TIER 1: A1 — ДОПОЛНИТЕЛЬНЫЕ 20 ВОПРОСОВ (a1_89 .. a1_108)
     ======================================================================== */
  {
    id: "a1_89",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Salir",
    prompt: "Выбери правильную форму глагола «salir» (выходить):",
    subprompt: "Yo _____ de casa a las ocho.",
    options: ["salgo", "sales", "sale", "salimos"],
    correct: 0,
    explanation: "Глагол «salir» имеет особую форму для «yo»: «salgo»."
  },
  {
    id: "a1_90",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Poner",
    prompt: "Выбери правильную форму глагола «poner» (класть / ставить):",
    subprompt: "Yo _____ los libros encima de la mesa.",
    options: ["pongo", "pones", "pone", "ponemos"],
    correct: 0,
    explanation: "Для «yo» глагол «poner» имеет форму «pongo»."
  },
  {
    id: "a1_91",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Dormir",
    prompt: "Выбери правильную форму глагола «dormir» (спать):",
    subprompt: "El bebé _____ ocho horas cada noche.",
    options: ["duerme", "dormo", "dormes", "duermen"],
    correct: 0,
    explanation: "В глаголе «dormir» корневая «o» меняется на «ue»: «él/ella duerme»."
  },
  {
    id: "a1_92",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Вопросы",
    prompt: "Подбери правильное вопросительное слово («Кто?»):",
    subprompt: "¿_____ es tu profesor de español?",
    options: ["Quién", "Qué", "Dónde", "Cuándo"],
    correct: 0,
    explanation: "«¿Quién?» спрашивает о человеке — «Кто?»."
  },
  {
    id: "a1_93",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Притяжательные",
    prompt: "Вставь правильное притяжательное слово («твои»):",
    subprompt: "¿Dónde están _____ llaves?",
    options: ["tus", "tu", "mi", "su"],
    correct: 0,
    explanation: "«Llaves» (ключи) во множественном числе требует форму «tus»."
  },
  {
    id: "a1_94",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Где можно купить свежий хлеб в Испании?",
    options: ["En la panadería", "En la farmacia", "En la biblioteca", "En el correo"],
    correct: 0,
    explanation: "«La panadería» — булочная / пекарня, «la farmacia» — аптека."
  },
  {
    id: "a1_95",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Что означает слово «La farmacia»?",
    options: ["Аптека", "Больница", "Почта", "Вокзал"],
    correct: 0,
    explanation: "«La farmacia» — аптека."
  },
  {
    id: "a1_96",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Еда",
    prompt: "Как сказать «Я голоден / хочу есть»?",
    options: ["Tengo hambre", "Tengo sed", "Tengo sueño", "Tengo prisa"],
    correct: 0,
    explanation: "«Tener hambre» — хотеть есть, «tener sed» — хотеть пить."
  },
  {
    id: "a1_97",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Состояние",
    prompt: "Что означает выражение «Tengo sed»?",
    options: ["Я хочу пить", "Я хочу спать", "Я спешу", "Мне жарко"],
    correct: 0,
    explanation: "«Tener sed» — испытывать жажду (хотеть пить)."
  },
  {
    id: "a1_98",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Транспорт",
    prompt: "Как сказать «Я еду на автобусе»?",
    options: ["Voy en autobús", "Voy a pie", "Voy en barco", "Voy en bici"],
    correct: 0,
    explanation: "«En autobús» — на автобусе, «a pie» — пешком."
  },
  {
    id: "a1_99",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Погода",
    prompt: "Что означает фраза «Está lloviendo»?",
    options: ["Идёт дождь", "Идёт снег", "Светит солнце", "Очень ветрено"],
    correct: 0,
    explanation: "«Llover» — идти (о дожде): «está lloviendo» — сейчас идёт дождь."
  },
  {
    id: "a1_100",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Погода",
    prompt: "Как перевести «Hace mucho viento»?",
    options: ["Очень ветрено", "Очень жарко", "Идёт сильный снег", "На улице туман"],
    correct: 0,
    explanation: "«El viento» — ветер, «hace mucho viento» — дует сильный ветер."
  },
  {
    id: "a1_101",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Который час",
    prompt: "Выбери правильный глагол для обозначения «1:00» (час дня):",
subprompt: "_____ la una de la tarde.",
options: ["Es", "Son", "Está", "Hay"],
correct: 0,
explanation: "Для одного часа («la una») используется единственное число «Es la una», для остальных часов — «Son las...»."
},
{
id: "a1_102",
tier: 1,
type: "translate",
typeLabel: "Перевод A1 • Предлоги",
prompt: "Что означает «Al lado del banco»?",
options: ["Рядом с банком", "Напротив банка", "Внутри банка", "За банком"],
correct: 0,
explanation: "«Al lado de» — рядом с / сбоку от чего-либо."
},
{
id: "a1_103",
tier: 1,
type: "translate",
typeLabel: "Перевод A1 • Предлоги",
prompt: "Как сказать «Напротив парка»?",
options: ["Enfrente del parque", "Debajo del parque", "Encima del parque", "Lejos del parque"],
correct: 0,
explanation: "«Enfrente de» — напротив."
},
{
id: "a1_104",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Числительные",
prompt: "Как по-испански будет число «50»?",
options: ["Cincuenta", "Quince", "Cinco", "Quinientos"],
correct: 0,
explanation: "«Cincuenta» — 50, а «quince» — 15."
},
{
id: "a1_105",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Числительные",
prompt: "Какое число означает слово «Cien»?",
options: ["100", "10", "1000", "20"],
correct: 0,
explanation: "«Cien» — сто (100)."
},
{
id: "a1_106",
tier: 1,
type: "translate",
typeLabel: "Перевод A1 • Профессии",
prompt: "Кто такой «El camarero»?",
options: ["Официант", "Водитель", "Строитель", "Полицейский"],
correct: 0,
explanation: "«El camarero / la camarera» — официант / официантка."
},
{
id: "a1_107",
tier: 1,
type: "translate",
typeLabel: "Перевод A1 • Досуг",
prompt: "Что означает фраза «Me gusta cocinar»?",
options: ["Мне нравится готовить", "Мне нравится танцевать", "Мне нравится плавать", "Мне нравится бегать"],
correct: 0,
explanation: "«Cocinar» — готовить еду."
},
{
id: "a1_108",
tier: 1,
type: "translate",
typeLabel: "Перевод A1 • Общение",
prompt: "Как вежливо попросить повторить фразу?",
options: ["¿Puedes repetir, por favor?", "¿Dónde vives ahora?", "¿Cuánto dinero tienes?", "¿Qué comes hoy?"],
correct: 0,
explanation: "«Repetir» — повторять: «¿Puedes repetir, por favor?»."
},
  /* ========================================================================
     TIER 0: A0 — ЕЩЁ 15 ВОПРОСОВ (a0_131 .. a0_145)
     ======================================================================== */
  {
    id: "a0_131",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански будет «Сын»?",
    options: ["El hijo", "El primo", "El nieto", "El tío"],
    correct: 0,
    explanation: "«El hijo» — сын, «la hija» — дочь."
  },
  {
    id: "a0_132",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Что означает слово «La abuela»?",
    options: ["Бабушка", "Тётя", "Мама", "Сестра"],
    correct: 0,
    explanation: "«La abuela» — бабушка, «el abuelo» — дедушка."
  },
  {
    id: "a0_133",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Сыр»?",
    options: ["El queso", "El pan", "El arroz", "La sal"],
    correct: 0,
    explanation: "«El queso» — сыр."
  },
  {
    id: "a0_134",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El arroz»?",
    options: ["Рис", "Сахар", "Масло", "Мука"],
    correct: 0,
    explanation: "«El arroz» — рис (из него готовят знаменитую паэлью)."
  },
  {
    id: "a0_135",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Напитки",
    prompt: "Как по-испански будет «Чай»?",
    options: ["El té", "El café", "El zumo", "La leche"],
    correct: 0,
    explanation: "«El té» — чай (пишется со знаком ударения, чтобы отличать от местоимения «te»)."
  },
  {
    id: "a0_136",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Рыба»?",
    options: ["El pez", "El pájaro", "El caballo", "La vaca"],
    correct: 0,
    explanation: "«El pez» — живая рыба (а рыба как блюдо на тарелке — «el pescado»)."
  },
  {
    id: "a0_137",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La vaca»?",
    options: ["Корова", "Овца", "Свинья", "Курица"],
    correct: 0,
    explanation: "«La vaca» — корова."
  },
  {
    id: "a0_138",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Как по-испански будет «Серый»?",
    options: ["Gris", "Negro", "Blanco", "Azul"],
    correct: 0,
    explanation: "«Gris» — серый цвет."
  },
  {
    id: "a0_139",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цвета",
    prompt: "Что означает цвет «Morado»?",
    options: ["Фиолетовый", "Оранжевый", "Жёлтый", "Зелёный"],
    correct: 0,
    explanation: "«Morado» (или «violeta») — фиолетовый цвет."
  },
  {
    id: "a0_140",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Как по-испански называется «Стул»?",
    options: ["La silla", "La mesa", "La puerta", "La ventana"],
    correct: 0,
    explanation: "«La silla» — стул, «la mesa» — стол."
  },
  {
    id: "a0_141",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «La ventana»?",
    options: ["Окно", "Дверь", "Стена", "Пол"],
    correct: 0,
    explanation: "«La ventana» — окно, «la puerta» — дверь."
  },
  {
    id: "a0_142",
    tier: 0,
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански сказать «Дерево»?",
    options: ["El árbol", "La flor", "La montaña", "El bosque"],
    correct: 0,
    explanation: "«El árbol» — дерево, «la flor» — цветок."
  },
  {
    id: "a0_143",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Время суток",
    prompt: "Что означает слово «La noche»?",
    options: ["Ночь", "Утро", "День", "Вечер"],
    correct: 0,
    explanation: "«La noche» — ночь."
  },
  {
    id: "a0_144",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански будет «Быстрый»?",
    options: ["Rápido", "Lento", "Fácil", "Difícil"],
    correct: 0,
    explanation: "«Rápido» — быстрый, «lento» — медленный."
  },
  {
    id: "a0_145",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Bonito»?",
    options: ["Красивый", "Умный", "Сильный", "Высокий"],
    correct: 0,
    explanation: "«Bonito / bonita» — красивый, милый."
  },

  /* ========================================================================
     TIER 1: A1 — ЕЩЁ 15 ВОПРОСОВ (a1_109 .. a1_123)
     ======================================================================== */
  {
    id: "a1_109",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Poder",
    prompt: "Выбери правильную форму глагола «poder» (мочь):",
    subprompt: "¿_____ ayudarme, por favor?",
    options: ["Puedes", "Podes", "Puedo", "Podemos"],
    correct: 0,
    explanation: "В глаголе «poder» корневая «o» меняется на «ue»: «¿Puedes ayudarme?» — Ты можешь мне помочь?"
  },
  {
    id: "a1_110",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Conocer",
    prompt: "Выбери правильную форму глагола «conocer» (знать / быть знакомым):",
    subprompt: "Yo no _____ Madrid todavía.",
    options: ["conozco", "conoces", "conoce", "conocemos"],
    correct: 0,
    explanation: "Для «yo» глагол «conocer» имеет окончание «-zco»: «yo conozco»."
  },
  {
    id: "a1_111",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Saber",
    prompt: "Выбери правильную форму глагола «saber» (знать информацию / уметь):",
    subprompt: "Yo no _____ dónde está la estación.",
    options: ["sé", "sabo", "sabes", "sabe"],
    correct: 0,
    explanation: "У глагола «saber» особая краткая форма для «yo»: «yo sé» (я знаю)."
  },
  {
    id: "a1_112",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Возвратные",
    prompt: "Вставь правильное возвратное местоимение:",
    subprompt: "Yo _____ levanto a las siete de la mañana.",
    options: ["me", "te", "se", "nos"],
    correct: 0,
    explanation: "С местоимением «yo» используется частица «me»: «yo me levanto» (я встаю)."
  },
  {
    id: "a1_113",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Указательные",
    prompt: "Как сказать «эта книга» (libro — мужской род)?",
    subprompt: "_____ libro es muy interesante.",
    options: ["Este", "Esta", "Estos", "Estas"],
    correct: 0,
    explanation: "Для существительных мужского рода единственного числа используется «este»."
  },
  {
    id: "a1_114",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Магазин",
    prompt: "Что означает слово «Barato»?",
    options: ["Дешёвый", "Дорогой", "Закрытый", "Бесплатный"],
    correct: 0,
    explanation: "«Barato» — дешёвый, «caro» — дорогой."
  },
  {
    id: "a1_115",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Магазин",
    prompt: "Как сказать «Я плачу картой»?",
    options: ["Pago con tarjeta", "Pago en efectivo", "Compro un regalo", "Busco la caja"],
    correct: 0,
    explanation: "«Con tarjeta» — картой, «en efectivo» — наличными."
  },
  {
    id: "a1_116",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Здоровье",
    prompt: "Как сказать «У меня болит голова»?",
    options: ["Me duele la cabeza", "Me duele el estómago", "Tengo fiebre", "Estoy cansado"],
    correct: 0,
    explanation: "«Me duele...» — у меня болит..., «la cabeza» — голова."
  },
  {
    id: "a1_117",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Эмоции",
    prompt: "Что означает фраза «Estoy cansado»?",
    options: ["Я устал", "Я голоден", "Я рад", "Я занят"],
    correct: 0,
    explanation: "«Cansado / cansada» — уставший."
  },
  {
    id: "a1_118",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Где можно отправить письмо или посылку?",
    options: ["En correos", "En el banco", "En el museo", "En el gimnasio"],
    correct: 0,
    explanation: "«Correos» (или «la oficina de correos») — почта."
  },
  {
    id: "a1_119",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Какой месяц называется «Enero»?",
    options: ["Январь", "Февраль", "Июнь", "Август"],
    correct: 0,
    explanation: "«Enero» — январь, первый месяц года."
  },
  {
    id: "a1_120",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Как по-испански будет «Август»?",
    options: ["Agosto", "Abril", "Octubre", "Julio"],
    correct: 0,
    explanation: "«Agosto» — август."
  },
  {
    id: "a1_121",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Направления",
    prompt: "Что означает слово «Derecho» в фразе «Sigue todo derecho»?",
    options: ["Прямо", "Налево", "Направо", "Назад"],
    correct: 0,
    explanation: "«Todo derecho» (или «todo recto») — прямо вперёд, а «a la derecha» — направо."
  },
  {
    id: "a1_122",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Погода",
    prompt: "Как сказать «Сегодня солнечно»?",
    options: ["Hoy hace sol", "Hoy hace frío", "Hoy nieva", "Hoy está nublado"],
    correct: 0,
    explanation: "«Hace sol» — светит солнце / солнечно."
  },
  {
    id: "a1_123",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Хобби",
    prompt: "Что означает фраза «Leer un libro»?",
    options: ["Читать книгу", "Писать письмо", "Смотреть фильм", "Слушать музыку"],
    correct: 0,
    explanation: "«Leer» — читать."
  },
  /* ========================================================================
     АУДИО-ВОПРОСЫ: УРОВЕНЬ A0 (tier: 0)
     ======================================================================== */
  {
    id: "a0_audio_1",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Приветствие",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Hola, ¿cómo estás?",
    options: ["Привет, как дела?", "Сколько тебе лет?", "Где ты живёшь?", "Который час?"],
    correct: 0,
    explanation: "«Hola, ¿cómo estás?» — Привет, как дела?"
  },
  {
    id: "a0_audio_2",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Знакомство",
    prompt: "Что говорит диктор?",
    audioText: "Me llamo Carlos y soy de España.",
    options: ["Меня зовут Карлос, и я из Испании.", "Мой брат Карлос живёт в Мадриде.", "Я изучаю испанский язык.", "Карлос — мой лучший друг."],
    correct: 0,
    explanation: "«Me llamo Carlos y soy de España» — Меня зовут Карлос, и я из Испании."
  },
  {
    id: "a0_audio_3",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Какое число назвал диктор?",
    audioText: "Tengo siete gatos en casa.",
    options: ["7", "6", "8", "10"],
    correct: 0,
    explanation: "«Tengo siete gatos en casa» — У меня дома семь кошек («siete» = 7)."
  },
  {
    id: "a0_audio_4",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что просит человек?",
    audioText: "Un café con leche, por favor.",
    options: ["Кофе с молоком, пожалуйста.", "Стакан воды, пожалуйста.", "Чай с лимоном, пожалуйста.", "Счёт, пожалуйста."],
    correct: 0,
    explanation: "«Un café con leche, por favor» — Кофе с молоком, пожалуйста."
  },
  {
    id: "a0_audio_5",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "О ком идёт речь?",
    audioText: "Mi hermana tiene diez años.",
    options: ["Моей сестре 10 лет.", "Моему брату 10 лет.", "Моей дочери 12 лет.", "Моей маме 40 лет."],
    correct: 0,
    explanation: "«Mi hermana tiene diez años» — Моей сестре десять лет."
  },
  {
    id: "a0_audio_6",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цвета",
    prompt: "Какого цвета машина?",
    audioText: "El coche es rojo y muy rápido.",
    options: ["Красная", "Синяя", "Чёрная", "Белая"],
    correct: 0,
    explanation: "«El coche es rojo» — Машина красная."
  },
  {
    id: "a0_audio_7",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Вежливость",
    prompt: "Переведи услышанную фразу:",
    audioText: "Muchas gracias, hasta mañana.",
    options: ["Большое спасибо, до завтра.", "Извините, до свидания.", "Пожалуйста, добрый вечер.", "Доброе утро, как дела?"],
    correct: 0,
    explanation: "«Muchas gracias, hasta mañana» — Большое спасибо, до завтра."
  },
  {
    id: "a0_audio_8",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Какое животное упоминается?",
    audioText: "El perro grande bebe agua.",
    options: ["Большая собака пьёт воду.", "Маленький кот ест рыбу.", "Чёрная лошадь бежит.", "Белая птица летит."],
    correct: 0,
    explanation: "«El perro grande bebe agua» — Большая собака пьёт воду."
  },
  {
    id: "a0_audio_9",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Где находится книга?",
    audioText: "El libro está encima de la mesa.",
    options: ["Книга на столе.", "Книга под стулом.", "Книга в сумке.", "Книга на кровати."],
    correct: 0,
    explanation: "«El libro está encima de la mesa» — Книга лежит на столе."
  },
  {
    id: "a0_audio_10",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Понимание",
    prompt: "Что говорит собеседник?",
    audioText: "Lo siento, no hablo español.",
    options: ["Извините, я не говорю по-испански.", "Повторите, пожалуйста, медленнее.", "Я очень хорошо понимаю по-испански.", "Где находится центр города?"],
    correct: 0,
    explanation: "«Lo siento, no hablo español» — Извините, я не говорю по-испански."
  },

  /* ========================================================================
     АУДИО-ВОПРОСЫ: УРОВЕНЬ A1 (tier: 1)
     ======================================================================== */
  {
    id: "a1_audio_1",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Город",
    prompt: "Что ищет человек?",
    audioText: "Perdone, ¿dónde está la estación de tren?",
    options: ["Железнодорожный вокзал", "Ближайшую аптеку", "Станцию метро", "Центральный музей"],
    correct: 0,
    explanation: "«La estación de tren» — железнодорожный вокзал."
  },
  {
    id: "a1_audio_2",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Магазин",
    prompt: "Сколько стоит покупка?",
    audioText: "Esta camiseta cuesta veinte euros.",
    options: ["20 евро", "12 евро", "30 евро", "25 евро"],
    correct: 0,
    explanation: "«Esta camiseta cuesta veinte euros» — Эта футболка стоит двадцать евро."
  },
  {
    id: "a1_audio_3",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Погода",
    prompt: "Какая сегодня погода?",
    audioText: "Hoy hace mucho frío y llueve.",
    options: ["Очень холодно и идёт дождь.", "Жарко и светит солнце.", "Тепло и дует лёгкий ветер.", "Идёт сильный снег."],
    correct: 0,
    explanation: "«Hoy hace mucho frío y llueve» — Сегодня очень холодно и идёт дождь."
  },
  {
    id: "a1_audio_4",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Время",
    prompt: "Во сколько начинается встреча?",
    audioText: "La clase empieza a las nueve y media.",
    options: ["В 9:30", "В 9:00", "В 10:30", "В 8:30"],
    correct: 0,
    explanation: "«A las nueve y media» — в половине десятого (9:30)."
  },
  {
    id: "a1_audio_5",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Ресторан",
    prompt: "Что заказывает гость?",
    audioText: "Para comer quiero pollo con arroz.",
    options: ["Курицу с рисом", "Рыбу с картофелем", "Салат и суп", "Мясо с овощами"],
    correct: 0,
    explanation: "«Quiero pollo con arroz» — Я хочу курицу с рисом."
  },
  {
    id: "a1_audio_6",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Дни недели",
    prompt: "В какой день мы пойдём в кино?",
    audioText: "Vamos al cine el viernes por la tarde.",
    options: ["В пятницу вечером", "В субботу утром", "В четверг днём", "В воскресенье вечером"],
    correct: 0,
    explanation: "«El viernes por la tarde» — в пятницу вечером / после обеда."
  },
  {
    id: "a1_audio_7",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Транспорт",
    prompt: "На чём он ездит на работу?",
    audioText: "Normalmente voy al trabajo en autobús.",
    options: ["На автобусе", "На метро", "На машине", "Пешком"],
    correct: 0,
    explanation: "«Voy al trabajo en autobús» — Я езжу на работу на автобусе."
  },
  {
    id: "a1_audio_8",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Состояние",
    prompt: "Почему он хочет выпить воды?",
    audioText: "Tengo mucha sed y calor.",
    options: ["Ему хочется пить и жарко.", "Он очень устал и хочет спать.", "Он голоден и спешит.", "У него болит горло."],
    correct: 0,
    explanation: "«Tengo mucha sed y calor» — Я очень хочу пить и мне жарко."
  },
  {
    id: "a1_audio_9",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Распорядок",
    prompt: "Что она делает по утрам?",
    audioText: "Siempre desayuno tostadas con queso.",
    options: ["Всегда завтракает тостами с сыром.", "Обычно пьёт только кофе.", "Никогда не завтракает дома.", "Готовит яичницу и салат."],
    correct: 0,
    explanation: "«Siempre desayuno tostadas con queso» — Я всегда завтракаю тостами с сыром."
  },
  {
    id: "a1_audio_10",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Профессия",
    prompt: "Где работает его мама?",
    audioText: "Mi madre es médica y trabaja en un hospital.",
    options: ["В больнице", "В школе", "В банке", "В аптеке"],
    correct: 0,
    explanation: "«Es médica y trabaja en un hospital» — Она врач и работает в больнице."
  },
  /* ========================================================================
     ДОПОЛНИТЕЛЬНЫЕ АУДИО-ВОПРОСЫ: УРОВЕНЬ A0 (tier: 0)
     ======================================================================== */
  {
    id: "a0_audio_11",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Время суток",
    prompt: "Послушай и выбери правильный перевод:",
    audioText: "Buenos días, ¿qué tal?",
    options: ["Доброе утро, как дела?", "Добрый вечер, как тебя зовут?", "Спокойной ночи, до завтра.", "Привет, откуда ты?"],
    correct: 0,
    explanation: "«Buenos días, ¿qué tal?» — Доброе утро, как дела?"
  },
  {
    id: "a0_audio_12",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "О ком говорит диктор?",
    audioText: "Mi padre se llama Antonio.",
    options: ["Моего папу зовут Антонио.", "Моего брата зовут Антонио.", "Моего дедушку зовут Антонио.", "Моего сына зовут Антонио."],
    correct: 0,
    explanation: "«Mi padre se llama Antonio» — Моего отца зовут Антонио."
  },
  {
    id: "a0_audio_13",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что человек любит есть?",
    audioText: "Me gusta mucho el queso y el pan.",
    options: ["Сыр и хлеб", "Мясо и рис", "Яблоки и бананы", "Суп и рыбу"],
    correct: 0,
    explanation: "«Me gusta mucho el queso y el pan» — Мне очень нравятся сыр и хлеб."
  },
  {
    id: "a0_audio_14",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Сколько лет мальчику?",
    audioText: "El niño tiene cinco años.",
    options: ["5 лет", "4 года", "6 лет", "8 лет"],
    correct: 0,
    explanation: "«El niño tiene cinco años» — Мальчику пять лет («cinco» = 5)."
  },
  {
    id: "a0_audio_15",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цвета",
    prompt: "Какого цвета этот предмет?",
    audioText: "La manzana es verde y dulce.",
    options: ["Зелёное", "Красное", "Жёлтое", "Синее"],
    correct: 0,
    explanation: "«La manzana es verde y dulce» — Яблоко зелёное и сладкое."
  },
  {
    id: "a0_audio_16",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Где находится человек?",
    audioText: "Estoy en la cocina con mi madre.",
    options: ["На кухне с мамой", "В саду с собакой", "В комнате с братом", "На улице с другом"],
    correct: 0,
    explanation: "«Estoy en la cocina con mi madre» — Я на кухне со своей мамой."
  },
  {
    id: "a0_audio_17",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Какое животное упоминается в фразе?",
    audioText: "El pájaro blanco canta en el árbol.",
    options: ["Белая птица поёт на дереве.", "Чёрный кот спит на кровати.", "Маленькая мышь бежит по полу.", "Большая рыба плавает в море."],
    correct: 0,
    explanation: "«El pájaro blanco canta en el árbol» — Белая птица поёт на дереве."
  },
  {
    id: "a0_audio_18",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Одежда",
    prompt: "Что покупает девушка?",
    audioText: "Quiero comprar un vestido azul.",
    options: ["Синее платье", "Красную шляпу", "Чёрные туфли", "Белую рубашку"],
    correct: 0,
    explanation: "«Quiero comprar un vestido azul» — Я хочу купить синее платье."
  },
  {
    id: "a0_audio_19",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Прилагательные",
    prompt: "Какой это дом?",
    audioText: "Mi casa es pequeña pero muy bonita.",
    options: ["Маленький, но очень красивый", "Большой и старый", "Новый и дорогой", "Высокий и светлый"],
    correct: 0,
    explanation: "«Mi casa es pequeña pero muy bonita» — Мой дом маленький, но очень красивый."
  },
  {
    id: "a0_audio_20",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Погода",
    prompt: "Что говорит диктор о погоде?",
    audioText: "Hoy hace mucho sol en Madrid.",
    options: ["Сегодня в Мадриде очень солнечно.", "Сегодня в Мадриде идёт дождь.", "Сегодня в Мадриде холодно.", "Сегодня в Мадриде сильный ветер."],
    correct: 0,
    explanation: "«Hoy hace mucho sol en Madrid» — Сегодня в Мадриде очень солнечно."
  },

  /* ========================================================================
     ДОПОЛНИТЕЛЬНЫЕ АУДИО-ВОПРОСЫ: УРОВЕНЬ A1 (tier: 1)
     ======================================================================== */
  {
    id: "a1_audio_11",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Кафе",
    prompt: "Что просит посетитель в кафе?",
    audioText: "Camarero, la cuenta por favor.",
    options: ["Официант, счёт, пожалуйста.", "Официант, меню, пожалуйста.", "Официант, ещё один кофе, пожалуйста.", "Официант, где здесь туалет?"],
    correct: 0,
    explanation: "«Camarero, la cuenta por favor» — Официант, счёт, пожалуйста."
  },
  {
    id: "a1_audio_12",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Город",
    prompt: "Где находится аптека?",
    audioText: "La farmacia está enfrente del banco.",
    options: ["Напротив банка", "Рядом с парком", "За станцией метро", "На углу улицы"],
    correct: 0,
    explanation: "«La farmacia está enfrente del banco» — Аптека находится напротив банка."
  },
  {
    id: "a1_audio_13",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Здоровье",
    prompt: "На что жалуется человек?",
    audioText: "Hoy no puedo trabajar porque me duele la cabeza.",
    options: ["У него болит голова", "У него болит живот", "Он сильно устал", "У него высокая температура"],
    correct: 0,
    explanation: "«Me duele la cabeza» — У меня болит голова."
  },
  {
    id: "a1_audio_14",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Магазин",
    prompt: "Как человек хочет оплатить покупку?",
    audioText: "Prefiero pagar con tarjeta, no tengo efectivo.",
    options: ["Картой, так как нет наличных", "Наличными, так как забыл карту", "Переводом через телефон", "Попросит скидку у кассира"],
    correct: 0,
    explanation: "«Prefiero pagar con tarjeta, no tengo efectivo» — Я предпочитаю платить картой, у меня нет наличных."
  },
  {
    id: "a1_audio_15",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Повседневность",
    prompt: "Во сколько он встаёт по утрам?",
    audioText: "Todos los días me levanto a las siete en punto.",
    options: ["Ровно в 7:00", "В 7:30", "В 6:00", "В 8:15"],
    correct: 0,
    explanation: "«A las siete en punto» — ровно в семь часов."
  },
  {
    id: "a1_audio_16",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Путешествия",
    prompt: "Когда он едет в Испанию?",
    audioText: "En agosto vamos de vacaciones a Barcelona.",
    options: ["В августе", "В июле", "В июне", "В сентябре"],
    correct: 0,
    explanation: "«En agosto vamos de vacaciones a Barcelona» — В августе мы едем в отпуск в Барселону."
  },
  {
    id: "a1_audio_17",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Навыки",
    prompt: "Что умеет делать собеседник?",
    audioText: "Sé cocinar paella, pero no sé bailar salsa.",
    options: ["Умеет готовить паэлью, но не умеет танцевать сальсу.", "Умеет танцевать сальсу, но не умеет готовить.", "Умеет говорить по-испански и по-английски.", "Любит есть паэлью в ресторане."],
    correct: 0,
    explanation: "«Sé cocinar paella, pero no sé bailar salsa» — Я умею готовить паэлью, но не умею танцевать сальсу."
  },
  {
    id: "a1_audio_18",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Направление",
    prompt: "Куда нужно повернуть по инструкции?",
    audioText: "Sigue todo derecho y gira a la izquierda.",
    options: ["Идти прямо и повернуть налево", "Идти прямо и повернуть направо", "Перейти дорогу и вернуться назад", "Остановиться у светофора"],
    correct: 0,
    explanation: "«Sigue todo derecho y gira a la izquierda» — Иди прямо и поверни налево."
  },
  {
    id: "a1_audio_19",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Хобби",
    prompt: "Чем она любит заниматься в свободное время?",
    audioText: "En mi tiempo libre me gusta leer libros y escuchar música.",
    options: ["Читать книги и слушать музыку", "Смотреть фильмы и гулять в парке", "Готовить ужин и заниматься спортом", "Играть в видеоигры с друзьями"],
    correct: 0,
    explanation: "«Me gusta leer libros y escuchar música» — Мне нравится читать книги и слушать музыку."
  },
  {
    id: "a1_audio_20",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Общение",
    prompt: "О чём просит собеседник?",
    audioText: "¿Puedes hablar más despacio, por favor? No entiendo.",
    options: ["Говорить помедленнее, потому что он не понимает.", "Говорить погромче, потому что плохо слышит.", "Повторить вопрос ещё два раза.", "Написать это слово на бумаге."],
    correct: 0,
    explanation: "«¿Puedes hablar más despacio, por favor? No entiendo» — Можешь говорить помедленнее, пожалуйста? Я не понимаю."
  },
  /* ========================================================================
     TIER 0: A0 — ЕЩЁ 10 РАЗНООБРАЗНЫХ ВОПРОСОВ (a0_146 .. a0_155)
     ======================================================================== */
  {
    id: "a0_146",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Антонимы",
    prompt: "Как по-испански сказать «Холодный» (антоним к «caliente»)?",
    options: ["Frío", "Dulce", "Alto", "Fuerte"],
    correct: 0,
    explanation: "«Frío» — холодный, «caliente» — горячий."
  },
  {
    id: "a0_147",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда и вкус",
    prompt: "Что означает слово «El azúcar»?",
    options: ["Сахар", "Соль", "Перец", "Мёд"],
    correct: 0,
    explanation: "«El azúcar» — сахар, «la sal» — соль."
  },
  {
    id: "a0_148",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Артикли",
    prompt: "Выбери правильный артикль для слова «problema» (исключение!):",
    subprompt: "No hay ningún problema — _____ problema.",
    options: ["el", "la", "las", "unas"],
    correct: 0,
    explanation: "Слово «problema» греческого происхождения и относится к мужскому роду: «el problema»."
  },
  {
    id: "a0_149",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа и офис",
    prompt: "Чем пишут на бумаге — что такое «El bolígrafo»?",
    options: ["Ручка", "Ластик", "Тетрадь", "Ножницы"],
    correct: 0,
    explanation: "«El bolígrafo» (сокращённо «el boli») — шариковая ручка."
  },
  {
    id: "a0_150",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански будет «Рука» (кисть)?",
    options: ["La mano", "El pie", "La pierna", "El brazo"],
    correct: 0,
    explanation: "«La mano» — кисть руки (исключение женского рода, оканчивающееся на -o)."
  },
  {
    id: "a0_151",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «La playa»?",
    options: ["Пляж", "Гора", "Озеро", "Остров"],
    correct: 0,
    explanation: "«La playa» — пляж."
  },
  {
    id: "a0_152",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Времена суток",
    prompt: "Как сказать «Сегодня вечером / ночью»?",
    options: ["Esta noche", "Ayer por la tarde", "Mañana por la mañana", "Todos los días"],
    correct: 0,
    explanation: "«Esta noche» — сегодня вечером / этой ночью."
  },
  {
    id: "a0_153",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Множественное число",
    prompt: "Как будет «карандаши» во множественном числе от «el lápiz»?",
    options: ["Los lápices", "Los lápizes", "Las lápices", "Los lápiz"],
    correct: 0,
    explanation: "Буква «z» на конце перед «-es» всегда меняется на «c»: «lápiz» -> «lápices»."
  },
  {
    id: "a0_154",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Транспорт",
    prompt: "Что такое «El avión»?",
    options: ["Самолёт", "Корабль", "Велосипед", "Трамвай"],
    correct: 0,
    explanation: "«El avión» — самолёт."
  },
  {
    id: "a0_155",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Общение",
    prompt: "Что означает слово «¡Cuidado!» на табличке?",
    options: ["Осторожно!", "Вход запрещён!", "Скидка!", "Открыто!"],
    correct: 0,
    explanation: "«¡Cuidado!» — Осторожно! / Берегись!"
  },

  /* ========================================================================
     TIER 1: A1 — ЕЩЁ 10 РАЗНООБРАЗНЫХ ВОПРОСОВ (a1_124 .. a1_133)
     ======================================================================== */
  {
    id: "a1_124",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Ser vs Estar",
    prompt: "Выбери правильный глагол для описания местоположения:",
    subprompt: "Barcelona _____ en el noreste de España.",
    options: ["está", "es", "tiene", "hay"],
    correct: 0,
    explanation: "Для географического положения всегда используется глагол «estar»: «Barcelona está en...»."
  },
  {
    id: "a1_125",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Hay vs Está",
    prompt: "Вставь правильное слово («В этом районе есть супермаркет»):",
    subprompt: "En este barrio _____ un supermercado muy grande.",
    options: ["hay", "está", "es", "son"],
    correct: 0,
    explanation: "О наличии неизвестного ранее предмета с неопределённым артиклем «un» сообщает форма «hay»."
  },
  {
    id: "a1_126",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Gustar",
    prompt: "Выбери правильную форму «gustar» для множественного числа:",
    subprompt: "A mis amigos les _____ mucho las tapas españolas.",
    options: ["gustan", "gusta", "gustamos", "gustáis"],
    correct: 0,
    explanation: "«Las tapas» во множественном числе, поэтому глагол согласуется с ними: «les gustan»."
  },
  {
    id: "a1_127",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Ближайшее будущее",
    prompt: "Как сказать «Завтра я собираюсь позвонить маме» (Ir a + инфинитив)?",
    subprompt: "Mañana _____ a llamar a mi madre.",
    options: ["voy", "vas", "va", "vamos"],
    correct: 0,
    explanation: "Конструкция «ir a + инфинитив» для «yo»: «voy a llamar»."
  },
  {
    id: "a1_128",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Быт и жильё",
    prompt: "Что означает слово «El alquiler» при поиске квартиры?",
    options: ["Аренда", "Этаж", "Лифт", "Сосед"],
    correct: 0,
    explanation: "«El alquiler» — аренда (например, «piso en alquiler» — квартира в аренду)."
  },
  {
    id: "a1_129",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Наречия частоты",
    prompt: "Что означает слово «A veces»?",
    options: ["Иногда", "Всегда", "Никогда", "Обычно"],
    correct: 0,
    explanation: "«A veces» — иногда, «siempre» — всегда, «nunca» — никогда."
  },
  {
    id: "a1_130",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Предлоги времени",
    prompt: "Какой предлог нужен перед днями недели в значении «по понедельникам»?",
    subprompt: "_____ lunes tengo clase de guitarra.",
    options: ["Los", "En", "A", "De"],
    correct: 0,
    explanation: "В испанском предлог «в» перед днями недели не ставится — используется определённый артикль: «los lunes» (по понедельникам)."
  },
  {
    id: "a1_131",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Покупки",
    prompt: "Что спрашивает продавец фразой «¿Qué talla usa?»?",
    options: ["Какой размер одежды вы носите?", "Какой цвет вам нравится?", "Как вы будете платить?", "Вам нужен пакет?"],
    correct: 0,
    explanation: "«La talla» — размер одежды (для обуви используется «el número»)."
  },
  {
    id: "a1_132",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Неправильные глаголы",
    prompt: "Выбери правильную форму глагола «venir» (приходить / приезжать):",
    subprompt: "¿A qué hora _____ tú a la fiesta?",
    options: ["vienes", "venes", "viene", "vengo"],
    correct: 0,
    explanation: "В глаголе «venir» для «tú» корневая «e» переходит в «ie»: «tú vienes»."
  },
  {
    id: "a1_133",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Выражения",
    prompt: "Что означает фраза «Tengo prisa»?",
    options: ["Я спешу", "Я боюсь", "Мне скучно", "Я согласен"],
    correct: 0,
    explanation: "«Tener prisa» — торопиться / спешить."
  },
  /* ========================================================================
     TIER 2: A2–B1 — ДОПОЛНИТЕЛЬНЫЕ 20 ВОПРОСОВ (b1_11 .. b1_30)
     ======================================================================== */
  {
    id: "b1_11",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Indefinido vs Imperfecto",
    prompt: "Выбери правильную форму прошедшего времени (однократное завершённое действие):",
    subprompt: "Ayer nosotros _____ al cine y vimos una película española.",
    options: ["fuimos", "íbamos", "vamos", "hemos ido"],
    correct: 0,
    explanation: "С маркером «ayer» (вчера) для завершённого действия в прошлом используется Pretérito Indefinido: «fuimos»."
  },
  {
    id: "b1_12",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Imperfecto",
    prompt: "Выбери форму прошедшего времени для описания привычки в детстве:",
    subprompt: "Cuando era niño, siempre _____ en el parque con mis amigos.",
    options: ["jugaba", "jugué", "juego", "he jugado"],
    correct: 0,
    explanation: "Для повторяющихся действий и описаний в прошлом («когда я был ребёнком») используется Pretérito Imperfecto: «jugaba»."
  },
  {
    id: "b1_13",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Pretérito Perfecto",
    prompt: "Выбери правильную форму для действия, связанного с настоящим («сегодня утром»):",
    subprompt: "Esta mañana yo no _____ café todavía.",
    options: ["he tomado", "tomé", "tomaba", "tomaré"],
    correct: 0,
    explanation: "С маркерами незаконченного периода времени («esta mañana», «hoy», «todavía») используется Pretérito Perfecto: «he tomado»."
  },
  {
    id: "b1_14",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Por vs Para",
    prompt: "Вставь правильный предлог («Этот подарок для тебя»):",
    subprompt: "He comprado este regalo _____ ti.",
    options: ["para", "por", "de", "a"],
    correct: 0,
    explanation: "Для указания получателя или цели всегда используется предлог «para»: «para ti»."
  },
  {
    id: "b1_15",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Por vs Para",
    prompt: "Вставь правильный предлог («Мы гуляли по центру города»):",
    subprompt: "Ayer paseamos _____ el centro histórico de Madrid.",
    options: ["por", "para", "en", "hasta"],
    correct: 0,
    explanation: "Движение внутри пространства или вдоль маршрута («по центру») передаётся предлогом «por»."
  },
  {
    id: "b1_16",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Ser vs Estar",
    prompt: "Выбери правильный глагол («Яблоко зелёное — ещё не спелое»):",
    subprompt: "No comas ese plátano, todavía _____ muy verde.",
    options: ["está", "es", "tiene", "hay"],
    correct: 0,
    explanation: "«Ser verde» — быть зелёным по цвету, а «estar verde» — быть неспелым (временное состояние)."
  },
  {
    id: "b1_17",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Ser vs Estar",
    prompt: "Выбери правильный глагол («Этот фильм очень скучный»):",
    subprompt: "No me gusta nada esta serie, _____ muy aburrida.",
    options: ["es", "está", "tiene", "hace"],
    correct: 0,
    explanation: "«Ser aburrido» — быть скучным (свойство), а «estar aburrido» — скучать (чувство человека)."
  },
  {
    id: "b1_18",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Futuro Simple",
    prompt: "Выбери правильную форму будущего времени от неправильного глагола «tener»:",
    subprompt: "El año que viene nosotros _____ más tiempo libre.",
    options: ["tendremos", "teneremos", "teníamos", "tuvimos"],
    correct: 0,
    explanation: "У глагола «tener» в будущем времени основа меняется на «tendr-»: «tendremos»."
  },
  {
    id: "b1_19",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Condicional",
    prompt: "Как вежливо сказать «Я бы хотел заказать столик на двоих»?",
    subprompt: "_____ reservar una mesa para dos personas, por favor.",
    options: ["Querría", "Quería", "Quise", "Quiero"],
    correct: 0,
    explanation: "Для вежливой просьбы используется условное наклонение (Condicional Simple): «querría» (или «me gustaría»)."
  },
  {
    id: "b1_20",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Местоимения",
    prompt: "Замени дополнения местоимениями («Я покупаю книгу маме» -> «Я ей её покупаю»):",
    subprompt: "¿Le compras el libro a tu madre? — Sí, _____ compro hoy.",
    options: ["se lo", "le lo", "lo le", "la lo"],
    correct: 0,
    explanation: "Когда встречаются два местоимения 3-го лица, «le/les» всегда превращается в «se»: «se lo compro»."
  },
  {
    id: "b1_21",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Subjuntivo база",
    prompt: "Выбери правильную форму после выражения желания «Espero que...»:",
    subprompt: "Espero que tú _____ un buen viaje.",
    options: ["tengas", "tienes", "tendrás", "tenías"],
    correct: 0,
    explanation: "После глаголов пожелания («espero que...») при смене субъекта требуется Presente de Subjuntivo: «tengas»."
  },
  {
    id: "b1_22",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Перифразы",
    prompt: "Как сказать «Я только что приехал домой» (Acabar de + инфинитив)?",
    subprompt: "_____ llegar a casa, estoy muy cansado.",
    options: ["Acabo de", "Vuelvo a", "Empiezo a", "Dejo de"],
    correct: 0,
    explanation: "Конструкция «acabar de + инфинитив» означает действие, которое только что произошло."
  },
  {
    id: "b1_23",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Идиомы",
    prompt: "Что означает разговорное выражение «No importa»?",
    options: ["Неважно / ничего страшного", "Невозможно", "Неправильно", "Неинтересно"],
    correct: 0,
    explanation: "«No importa» — не имеет значения / ничего страшного."
  },
  {
    id: "b1_24",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Что на самом деле означает испанское слово «Éxito»?",
    options: ["Успех", "Выход", "Экзамен", "Случай"],
    correct: 0,
    explanation: "«El éxito» — успех (ложный друг переводчика; а «выход» по-испански — «la salida»)."
  },
  {
    id: "b1_25",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Глаголы",
    prompt: "Что означает возвратный глагол «Quedarse»?",
    options: ["Оставаться", "Жаловаться", "Смеяться", "Ошибаться"],
    correct: 0,
    explanation: "«Quedarse» — оставаться где-либо (например, «me quedo en casa» — я остаюсь дома)."
  },
  {
    id: "b1_26",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Прошлое",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "El fin de semana pasado fuimos a la montaña.",
    options: ["В прошлые выходные мы ездили в горы.", "В следующие выходные мы поедем на пляж.", "Каждые выходные мы гуляем в парке.", "Вчера вечером мы вернулись из отпуска."],
    correct: 0,
    explanation: "«El fin de semana pasado fuimos a la montaña» — В прошлые выходные мы ездили в горы."
  },
  {
    id: "b1_27",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Планы",
    prompt: "Что собирается сделать говорящий?",
    audioText: "Si hace buen tiempo mañana, iremos a caminar por la playa.",
    options: ["Если завтра будет хорошая погода, они пойдут гулять по пляжу.", "Так как завтра пойдёт дождь, они останутся дома.", "Вчера была отличная погода, и они купались в море.", "Он надеется, что в отпуске будет солнечно."],
    correct: 0,
    explanation: "«Si hace buen tiempo mañana, iremos a caminar por la playa» — Если завтра будет хорошая погода, мы пойдём гулять по пляжу."
  },
  {
    id: "b1_28",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Совет",
    prompt: "Какой совет даёт собеседник?",
    audioText: "Te recomiendo probar la tortilla de patatas de este bar.",
    options: ["Советует попробовать картофельную тортилью в этом баре.", "Предупреждает, что в этом баре слишком высокие цены.", "Спрашивает, умеешь ли ты готовить испанскую тортилью.", "Говорит, что этот ресторан сегодня закрыт."],
    correct: 0,
    explanation: "«Te recomiendo probar la tortilla de patatas de este bar» — Рекомендую тебе попробовать картофельную тортилью в этом баре."
  },
  {
    id: "b1_29",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Опыт",
    prompt: "Что говорит диктор о своём опыте?",
    audioText: "Nunca he estado en México, pero me encantaría viajar allí.",
    options: ["Никогда не был в Мексике, но очень хотел бы туда съездить.", "Жил в Мексике два года и часто туда летает.", "Недавно вернулся из поездки по Мексике.", "Не любит путешествовать на самолёте."],
    correct: 0,
    explanation: "«Nunca he estado en México, pero me encantaría viajar allí» — Я никогда не был в Мексике, но мне бы очень хотелось туда съездить."
  },
  {
    id: "b1_30",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Ситуация",
    prompt: "Почему человек опоздал на встречу?",
    audioText: "Perdona el retraso, había mucho tráfico en el centro.",
    options: ["Из-за сильных пробок в центре города", "Потому что проспал и не услышал будильник", "Потому что перепутал время встречи", "Потому что автобус сломался по дороге"],
    correct: 0,
    explanation: "«Perdona el retraso, había mucho tráfico en el centro» — Извини за опоздание, в центре было очень плотное движение (пробки)."
  },  /* ========================================================================
     ЕЩЁ 10 АУДИО-ВОПРОСОВ: УРОВЕНЬ A0 (tier: 0)
     ======================================================================== */
  {
    id: "a0_audio_21",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "Послушай и выбери правильный перевод:",
    audioText: "Mi abuelo tiene ochenta años.",
    options: ["Моему дедушке 80 лет.", "Моей бабушке 80 лет.", "Моему папе 40 лет.", "Моему дяде 60 лет."],
    correct: 0,
    explanation: "«Mi abuelo tiene ochenta años» — Моему дедушке восемьдесят лет."
  },
  {
    id: "a0_audio_22",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда и напитки",
    prompt: "Что человек хочет на завтрак?",
    audioText: "Quiero un zumo de naranja y pan.",
    options: ["Апельсиновый сок и хлеб", "Яблочный сок и сыр", "Чай с сахаром и яйцо", "Молоко и клубнику"],
    correct: 0,
    explanation: "«Quiero un zumo de naranja y pan» — Я хочу апельсиновый сок и хлеб."
  },
  {
    id: "a0_audio_23",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Где находится кот?",
    audioText: "El gato negro duerme en la cama.",
    options: ["Чёрный кот спит на кровати.", "Белый пёс сидит под столом.", "Маленькая мышь бежит по кухне.", "Большая птица сидит на окне."],
    correct: 0,
    explanation: "«El gato negro duerme en la cama» — Чёрный кот спит на кровати."
  },
  {
    id: "a0_audio_24",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цвета и вещи",
    prompt: "Какого цвета его сумка?",
    audioText: "Mi mochila es amarilla y grande.",
    options: ["Жёлтая", "Зелёная", "Красная", "Серая"],
    correct: 0,
    explanation: "«Mi mochila es amarilla y grande» — Мой рюкзак жёлтый и большой."
  },
  {
    id: "a0_audio_25",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Приветствие",
    prompt: "Что говорит собеседник?",
    audioText: "Mucho gusto, encantado de conocerte.",
    options: ["Очень приятно, рад познакомиться.", "Извините, я очень спешу.", "Доброй ночи, до понедельника.", "Большое спасибо за помощь."],
    correct: 0,
    explanation: "«Mucho gusto, encantado de conocerte» — Очень приятно, рад с тобой познакомиться."
  },
  {
    id: "a0_audio_26",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Транспорт",
    prompt: "На чём он едет?",
    audioText: "Voy a la escuela en bicicleta.",
    options: ["На велосипеде", "На поезде", "На самолёте", "На машине"],
    correct: 0,
    explanation: "«Voy a la escuela en bicicleta» — Я еду в школу на велосипеде."
  },
  {
    id: "a0_audio_27",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Сколько книг на столе?",
    audioText: "Hay cuatro libros encima de la mesa.",
    options: ["4", "3", "5", "9"],
    correct: 0,
    explanation: "«Hay cuatro libros encima de la mesa» — На столе лежат четыре книги («cuatro» = 4)."
  },
  {
    id: "a0_audio_28",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Что открыто в комнате?",
    audioText: "La ventana está abierta porque hace calor.",
    options: ["Окно открыто, потому что жарко.", "Дверь закрыта, потому что холодно.", "Свет выключен, потому что ночь.", "Кровать стоит рядом со шкафом."],
    correct: 0,
    explanation: "«La ventana está abierta porque hace calor» — Окно открыто, потому что жарко."
  },
  {
    id: "a0_audio_29",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Время суток",
    prompt: "Когда они идут на пляж?",
    audioText: "Esta tarde vamos a la playa.",
    options: ["Сегодня днём / вечером", "Завтра утром", "Вчера ночью", "В воскресенье утром"],
    correct: 0,
    explanation: "«Esta tarde vamos a la playa» — Сегодня днём (после обеда) мы идём на пляж."
  },
  {
    id: "a0_audio_30",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Эмоции",
    prompt: "Как чувствует себя девушка?",
    audioText: "Hoy estoy muy feliz porque es mi cumpleaños.",
    options: ["Она очень счастлива, потому что у неё день рождения.", "Она очень устала, потому что много работала.", "Она голодна и хочет пообедать.", "Ей грустно, потому что идёт дождь."],
    correct: 0,
    explanation: "«Hoy estoy muy feliz porque es mi cumpleaños» — Сегодня я очень счастлива, потому что у меня день рождения."
  },

  /* ========================================================================
     ЕЩЁ 10 АУДИО-ВОПРОСОВ: УРОВЕНЬ A1 (tier: 1)
     ======================================================================== */
  {
    id: "a1_audio_21",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Покупки",
    prompt: "Что говорит покупатель?",
    audioText: "Esta chaqueta es muy cara, busco algo más barato.",
    options: ["Эта куртка слишком дорогая, я ищу что-то подешевле.", "Эта рубашка мне велика, нужен размер поменьше.", "Эти туфли очень удобные, я плачу наличными.", "Этот магазин закрывается через десять минут."],
    correct: 0,
    explanation: "«Esta chaqueta es muy cara, busco algo más barato» — Эта куртка очень дорогая, я ищу что-то подешевле."
  },
  {
    id: "a1_audio_22",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Город",
    prompt: "Где находится почта?",
    audioText: "La oficina de correos está al lado del supermercado.",
    options: ["Рядом с супермаркетом", "Напротив вокзала", "За городской библиотекой", "Внутри торгового центра"],
    correct: 0,
    explanation: "«La oficina de correos está al lado del supermercado» — Почта находится рядом с супермаркетом."
  },
  {
    id: "a1_audio_23",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Время",
    prompt: "Во сколько закрывается музей?",
    audioText: "El museo cierra a las seis y cuarto de la tarde.",
    options: ["В 18:15", "В 18:45", "В 16:15", "В 17:30"],
    correct: 0,
    explanation: "«A las seis y cuarto de la tarde» — в четверть седьмого вечера (18:15)."
  },
  {
    id: "a1_audio_24",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Планы",
    prompt: "Что он собирается делать завтра?",
    audioText: "Mañana voy a visitar a mis abuelos en el pueblo.",
    options: ["Навестить бабушку и дедушку в деревне", "Поехать на поезде в аэропорт", "Купить билеты в театр с друзьями", "Готовить ужин для всей семьи"],
    correct: 0,
    explanation: "«Mañana voy a visitar a mis abuelos en el pueblo» — Завтра я собираюсь навестить бабушку с дедушкой в деревне."
  },
  {
    id: "a1_audio_25",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Погода",
    prompt: "Какая погода зимой в этом городе?",
    audioText: "En invierno hace mucho viento y a veces nieva.",
    options: ["Дует сильный ветер и иногда идёт снег.", "Каждый день идёт сильный дождь.", "Стоит солнечная и тёплая погода.", "По утрам всегда густой туман."],
    correct: 0,
    explanation: "«En invierno hace mucho viento y a veces nieva» — Зимой дует сильный ветер и иногда идёт снег."
  },
  {
    id: "a1_audio_26",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Еда",
    prompt: "Почему он не ест сейчас?",
    audioText: "No tengo hambre, pero tengo mucha sed.",
    options: ["Он не голоден, но очень хочет пить.", "У него нет времени на обед.", "Ему не нравится эта еда.", "Он уже поужинал час назад."],
    correct: 0,
    explanation: "«No tengo hambre, pero tengo mucha sed» — Я не хочу есть, но очень хочу пить."
  },
  {
    id: "a1_audio_27",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Работа",
    prompt: "Кем работает её брат?",
    audioText: "Mi hermano es camarero en un restaurante italiano.",
    options: ["Официантом в итальянском ресторане", "Поваром в маленьком кафе", "Врачом в центральной больнице", "Учителем испанского языка"],
    correct: 0,
    explanation: "«Mi hermano es camarero en un restaurante italiano» — Мой брат работает официантом в итальянском ресторане."
  },
  {
    id: "a1_audio_28",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Расписание",
    prompt: "Когда у него занятия по испанскому?",
    audioText: "Tengo clase de español los lunes y los miércoles.",
    options: ["По понедельникам и средам", "По вторникам и четвергам", "По средам и пятницам", "Каждые выходные"],
    correct: 0,
    explanation: "«Los lunes y los miércoles» — по понедельникам и средам."
  },
  {
    id: "a1_audio_29",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Жильё",
    prompt: "Что говорится о квартире?",
    audioText: "Busco un piso pequeño con balcón cerca del metro.",
    options: ["Ищет небольшую квартиру с балконом рядом с метро.", "Сдаёт большую квартиру в центре без мебели.", "Живёт на пятом этаже в доме без лифта.", "Покупает новый дом с садом у моря."],
    correct: 0,
    explanation: "«Busco un piso pequeño con balcón cerca del metro» — Я ищу небольшую квартиру с балконом рядом с метро."
  },
  {
    id: "a1_audio_30",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Досуг",
    prompt: "Что друзья любят делать по выходным?",
    audioText: "Los sábados por la noche salimos a cenar tapas.",
    options: ["По субботам вечером ходят ужинать тапас.", "По воскресеньям утром бегают в парке.", "По пятницам смотрят кино дома.", "В субботу днём ходят в музей."],
    correct: 0,
    explanation: "«Los sábados por la noche salimos a cenar tapas» — По субботам вечером мы выходим поужинать тапас."
  },
  /* ========================================================================
     TIER 0: A0 — 5 АУДИРОВАНИЯ + 10 ГРАММАТИКИ (a0_audio_31..35, a0_156..165)
     ======================================================================== */
  {
    id: "a0_audio_31",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Tengo dos hermanos y una hermana.",
    options: ["У меня два брата и одна сестра.", "У меня две сестры и один брат.", "У меня нет братьев и сестёр.", "Моим братьям десять лет."],
    correct: 0,
    explanation: "«Tengo dos hermanos y una hermana» — У меня два брата и одна сестра."
  },
  {
    id: "a0_audio_32",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Предметы",
    prompt: "Что просит человек?",
    audioText: "Necesito un bolígrafo azul y papel.",
    options: ["Синюю ручку и бумагу", "Чёрный карандаш и книгу", "Красный стул и стол", "Новую сумку и ключи"],
    correct: 0,
    explanation: "«Necesito un bolígrafo azul y papel» — Мне нужна синяя ручка и бумага."
  },
  {
    id: "a0_audio_33",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Природа",
    prompt: "Что видит говорящий?",
    audioText: "La luna y las estrellas brillan en la noche.",
    options: ["Луна и звёзды светят ночью.", "Солнце светит над синим морем.", "Белые облака плывут по небу.", "Высокие деревья растут в лесу."],
    correct: 0,
    explanation: "«La luna y las estrellas brillan en la noche» — Луна и звёзды сияют ночью."
  },
  {
    id: "a0_audio_34",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Какой вкус у напитка?",
    audioText: "Este té está muy caliente y dulce.",
    options: ["Чай очень горячий и сладкий.", "Кофе холодный и без сахара.", "Вода очень холодная и чистая.", "Сок кислый, но вкусный."],
    correct: 0,
    explanation: "«Este té está muy caliente y dulce» — Этот чай очень горячий и сладкий."
  },
  {
    id: "a0_audio_35",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Транспорт",
    prompt: "Куда он едет?",
    audioText: "El avión sale para España por la mañana.",
    options: ["Самолёт вылетает в Испанию утром.", "Поезд прибывает в Мадрид вечером.", "Автобус едет в центр города.", "Корабль плывёт к острову."],
    correct: 0,
    explanation: "«El avión sale para España por la mañana» — Самолёт вылетает в Испанию утром."
  },
  {
    id: "a0_156",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Артикли",
    prompt: "Выбери правильный определённый артикль для слова «mesa» (стол):",
    subprompt: "_____ mesa es grande.",
    options: ["La", "El", "Los", "Un"],
    correct: 0,
    explanation: "Существительные на «-a» обычно женского рода, поэтому нужен артикль «La»."
  },
  {
    id: "a0_157",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Артикли",
    prompt: "Выбери правильный неопределённый артикль для слова «libro» (книга):",
    subprompt: "Yo leo _____ libro nuevo.",
    options: ["un", "una", "unas", "la"],
    correct: 0,
    explanation: "«Libro» — слово мужского рода единственного числа, поэтому используется «un»."
  },
  {
    id: "a0_158",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Ser",
    prompt: "Вставь правильную форму глагола «ser» («Мы студенты»):",
    subprompt: "Nosotros _____ estudiantes.",
    options: ["somos", "soy", "eres", "son"],
    correct: 0,
    explanation: "Для местоимения «nosotros» (мы) форма глагола «ser» — «somos»."
  },
  {
    id: "a0_159",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Ser",
    prompt: "Вставь правильную форму глагола «ser» («Ты из Испании?»):",
    subprompt: "¿Tú _____ de España?",
    options: ["eres", "es", "soy", "sois"],
    correct: 0,
    explanation: "Для местоимения «tú» (ты) используется форма «eres»."
  },
  {
    id: "a0_160",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Род прилагательных",
    prompt: "Выбери правильную форму прилагательного для женского рода («красивый дом»):",
    subprompt: "Una casa muy _____.",
    options: ["bonita", "bonito", "bonitos", "bonitas"],
    correct: 0,
    explanation: "Слово «casa» женского рода, поэтому прилагательное «bonito» меняет окончание на «-a»: «bonita»."
  },
  {
    id: "a0_161",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Множественное число",
    prompt: "Как будет «собаки» во множественном числе от «el perro»?",
    options: ["Los perros", "Las perros", "El perros", "Los perro"],
    correct: 0,
    explanation: "Во множественном числе артикль «el» меняется на «los», а к слову на гласную добавляется «-s»."
  },
  {
    id: "a0_162",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Притяжательные",
    prompt: "Как сказать «моя мама» по-испански?",
    subprompt: "_____ madre se llama Ana.",
    options: ["Mi", "Mis", "Tu", "Su"],
    correct: 0,
    explanation: "«Mi» — мой / моя (в единственном числе не меняется по родам)."
  },
  {
    id: "a0_163",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Estar",
    prompt: "Вставь правильную форму глагола «estar» («Где ты находишься?»):",
    subprompt: "¿Dónde _____ tú?",
    options: ["estás", "está", "estoy", "están"],
    correct: 0,
    explanation: "Для «tú» форма глагола «estar» — «estás» (обязательно со знаком ударения)."
  },
  {
    id: "a0_164",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Отрицание",
    prompt: "Куда ставится частица «no» в отрицательном предложении («Я не говорю по-французски»)?",
    subprompt: "Yo _____ hablo francés.",
    options: ["no", "nunca", "nada", "ni"],
    correct: 0,
    explanation: "Отрицательная частица «no» всегда ставится прямо перед глаголом: «Yo no hablo...»."
  },
  {
    id: "a0_165",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Исключения рода",
    prompt: "Выбери правильный артикль для слова «día» (день):",
    subprompt: "¡Buenos días! — _____ día.",
    options: ["El", "La", "Las", "Unas"],
    correct: 0,
    explanation: "«El día» — слово мужского рода, несмотря на окончание «-a»."
  },

  /* ========================================================================
     TIER 1: A1 — 5 АУДИРОВАНИЯ + 10 ГРАММАТИКИ (a1_audio_31..35, a1_134..143)
     ======================================================================== */
  {
    id: "a1_audio_31",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Магазин",
    prompt: "Что спрашивает покупатель?",
    audioText: "¿Puedo probarme estos pantalones, por favor?",
    options: ["Можно мне примерить эти брюки, пожалуйста?", "Сколько стоят эти чёрные туфли?", "У вас есть эта рубашка синего цвета?", "Где здесь находится касса?"],
    correct: 0,
    explanation: "«¿Puedo probarme estos pantalones, por favor?» — Могу ли я примерить эти брюки, пожалуйста?"
  },
  {
    id: "a1_audio_32",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Встреча",
    prompt: "Где и когда встречаются друзья?",
    audioText: "Quedamos delante del cine a las ocho menos cuarto.",
    options: ["Перед кинотеатром в 19:45", "Внутри кафе в 20:15", "Рядом с метро в 19:15", "На площади в 20:45"],
    correct: 0,
    explanation: "«Delante del cine a las ocho menos cuarto» — перед кинотеатром без четверти восемь (7:45 / 19:45)."
  },
  {
    id: "a1_audio_33",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Здоровье",
    prompt: "Почему он не пошёл на работу?",
    audioText: "Tiene fiebre y le duele mucho la garganta.",
    options: ["У него температура и сильно болит горло.", "У него болит спина после спорта.", "Он сломал ногу и лежит в больнице.", "У него сильно болит зуб с утра."],
    correct: 0,
    explanation: "«Tiene fiebre y le duele mucho la garganta» — У него температура и очень болит горло."
  },
  {
    id: "a1_audio_34",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Транспорт",
    prompt: "На какой остановке нужно выйти?",
    audioText: "Tienes que bajar en la tercera parada después del puente.",
    options: ["На третьей остановке после моста", "На первой остановке перед парком", "На конечной станции метро", "На второй остановке около вокзала"],
    correct: 0,
    explanation: "«En la tercera parada después del puente» — на третьей остановке после моста."
  },
  {
    id: "a1_audio_35",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Быт",
    prompt: "Что делает девушка вечером?",
    audioText: "Después de cenar siempre veo una serie un rato.",
    options: ["После ужина немного смотрит сериал.", "Перед сном читает новости в телефоне.", "Вечером гуляет с собакой в парке.", "После работы готовит обед на завтра."],
    correct: 0,
    explanation: "«Después de cenar siempre veo una serie un rato» — После ужина я всегда немного смотрю сериал."
  },
  {
    id: "a1_134",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Слияние предлогов",
    prompt: "Выбери правильную форму («Я возвращаюсь из парка», de + el):",
    subprompt: "Ahora vuelvo _____ parque con mi perro.",
    options: ["del", "de el", "al", "en el"],
    correct: 0,
    explanation: "Предлог «de» и артикль «el» всегда сливаются в одно слово «del»."
  },
  {
    id: "a1_135",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Слияние предлогов",
    prompt: "Выбери правильную форму («Мы идём в ресторан», a + el):",
    subprompt: "Esta noche vamos _____ restaurante nuevo.",
    options: ["al", "a el", "del", "por el"],
    correct: 0,
    explanation: "Предлог «a» и артикль «el» всегда сливаются в «al»."
  },
  {
    id: "a1_136",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Герундий (Estar + -ndo)",
    prompt: "Как сказать «Сейчас я учу испанский» (действие прямо в момент речи)?",
subprompt: "Ahora mismo estoy _____ español.",
options: ["estudiando", "estudiar", "estudiado", "estudio"],
correct: 0,
explanation: "Для действия в момент речи используется конструкция «estar + герундий»: «estoy estudiando»."
},
{
id: "a1_137",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Герундий (-er / -ir)",
prompt: "Выбери правильную форму герундия для глагола «comer» («Они сейчас едят»):",
subprompt: "Ellos están _____ en la cocina.",
options: ["comiendo", "comendo", "comido", "comen"],
correct: 0,
explanation: "Глаголы на «-er» и «-ir» образуют герундий с окончанием «-iendo»: «comiendo»."
},
{
id: "a1_138",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Сравнение",
prompt: "Вставь нужное слово в сравнении («Мадрид больше, чем Валенсия»):",
subprompt: "Madrid es más grande _____ Valencia.",
options: ["que", "de", "como", "tan"],
correct: 0,
explanation: "В конструкциях «más ... que» (более ... чем) и «menos ... que» (менее ... чем) используется союз «que»."
},
{
id: "a1_139",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Глагол Traer",
prompt: "Выбери правильную форму глагола «traer» (приносить) для «yo»:",
subprompt: "Yo _____ el postre para la cena.",
options: ["traigo", "trao", "traes", "traemos"],
correct: 0,
explanation: "У глагола «traer» в 1-м лице единственного числа появляется «-ig-»: «yo traigo»."
},
{
id: "a1_140",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Глагол Decir",
prompt: "Выбери правильную форму глагола «decir» (говорить / сказать) для «yo»:",
subprompt: "Yo siempre _____ la verdad.",
options: ["digo", "deco", "dices", "decimos"],
correct: 0,
explanation: "Глагол «decir» в 1-м лице единственного числа имеет форму «yo digo»."
},
{
id: "a1_141",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Muy vs Mucho",
prompt: "Выбери правильное слово перед существительным («У меня много работы»):",
subprompt: "Hoy tengo _____ trabajo en la oficina.",
options: ["mucho", "muy", "mucha", "muchos"],
correct: 0,
explanation: "Перед существительными используется «mucho/a/os/as» (а «muy» ставится только перед прилагательными и наречиями)."
},
{
id: "a1_142",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • También vs Tampoco",
prompt: "Как согласиться с отрицанием («Я тоже не ем мясо»)?",
subprompt: "No como carne. — Yo .",
options: ["tampoco", "también", "sí", "algo"],
correct: 0,
explanation: "«También» означает «тоже» в утверждении, а в отрицании всегда используется «tampoco»."
},
{
id: "a1_143",
tier: 1,
type: "grammar",
typeLabel: "Грамматика A1 • Указательные",
prompt: "Как сказать «эти туфли» (zapatos — мужской род, множественное число)?",
subprompt: " zapatos son muy cómodos.",
options: ["Estos", "Estas", "Este", "Esta"],
correct: 0,
explanation: "Для существительных мужского рода во множественном числе используется форма «estos»."
},
  /* ========================================================================
     TIER 2: A2–B1 — ДОПОЛНИТЕЛЬНЫЕ 20 ВОПРОСОВ (b1_31 .. b1_50)
     ======================================================================== */
  {
    id: "b1_31",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Imperativo (ты)",
    prompt: "Выбери правильную утвердительную форму повелительного наклонения для «tú» («Скажи мне правду!»):",
    subprompt: "Por favor, _____ la verdad ahora mismo.",
    options: ["dime", "decime", "digas", "dice"],
    correct: 0,
    explanation: "У глагола «decir» краткая неправильная форма повелительного наклонения на «tú» — «di» + местоимение «me» = «dime»."
  },
  {
    id: "b1_32",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Отрицательный Imperativo",
    prompt: "Как правильно запретить что-то на «tú» («Не говори этого!»)?",
    subprompt: "Por favor, no _____ eso delante de los niños.",
    options: ["digas", "di", "dices", "dirás"],
    correct: 0,
    explanation: "Отрицательный приказ всегда строится через Presente de Subjuntivo: «no digas»."
  },
  {
    id: "b1_33",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Pluscuamperfecto",
    prompt: "Выбери форму предпрошедшего времени (действие случилось раньше другого действия в прошлом):",
    subprompt: "Cuando llegué a la estación, el tren ya _____.",
    options: ["había salido", "ha salido", "salió", "salía"],
    correct: 0,
    explanation: "Для действия, завершившегося до другого момента в прошлом, используется Pretérito Pluscuamperfecto: «había salido»."
  },
  {
    id: "b1_34",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Subjuntivo (оценка)",
    prompt: "Выбери правильную форму после безличной оценки «Es importante que...»:",
    subprompt: "Es importante que vosotros _____ todos los días.",
    options: ["practiquéis", "practicáis", "practicaréis", "practicabais"],
    correct: 0,
    explanation: "После выражений оценки («es importante que», «es mejor que») используется Subjuntivo: «practiquéis»."
  },
  {
    id: "b1_35",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Subjuntivo (сомнение)",
    prompt: "Выбери правильную форму после глагола сомнения «No creo que...»:",
    subprompt: "No creo que él _____ razón en este caso.",
    options: ["tenga", "tiene", "tendrá", "tenía"],
    correct: 0,
    explanation: "Отрицание мнения («no creo que», «no pienso que») требует Subjuntivo: «tenga»."
  },
  {
    id: "b1_36",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Перифразы",
    prompt: "Как сказать «Он снова опоздал на работу» (Volver a + инфинитив)?",
    subprompt: "Hoy Carlos ha _____ llegar tarde a la oficina.",
    options: ["vuelto a", "acabado de", "dejado de", "puesto a"],
    correct: 0,
    explanation: "Конструкция «volver a + инфинитив» означает повторное действие («снова сделать что-то»)."
  },
  {
    id: "b1_37",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Перифразы",
    prompt: "Как сказать «Я бросил курить два года назад» (Dejar de + инфинитив)?",
    subprompt: "_____ fumar hace dos años y me siento mucho mejor.",
    options: ["Dejé de", "Acabé de", "Volví a", "Seguí"],
    correct: 0,
    explanation: "«Dejar de + инфинитив» означает прекратить какое-либо действие или привычку."
  },
  {
    id: "b1_38",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Llevar + герундий",
    prompt: "Как сказать «Я учу испанский уже три года»?",
    subprompt: "_____ tres años estudiando español.",
    options: ["Llevo", "Tengo", "Estoy", "Hago"],
    correct: 0,
    explanation: "Длительность действия, начатого в прошлом и продолжающегося сейчас, передаётся через «llevar + время + герундий»."
  },
  {
    id: "b1_39",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Союзы времени",
    prompt: "Выбери правильную форму после «Cuando» для будущего времени («Когда я приеду, я тебе позвоню»):",
    subprompt: "Cuando _____ a Madrid, te llamaré por teléfono.",
    options: ["llegue", "llegaré", "llego", "llegaba"],
    correct: 0,
    explanation: "После «cuando» при отсылке к будущему в испанском никогда не ставится Futuro — нужен Subjuntivo: «cuando llegue»."
  },
  {
    id: "b1_40",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Предлоги",
    prompt: "Какой предлог требует глагол «soñar» (мечтать о чём-либо)?",
    subprompt: "Siempre he soñado _____ viajar por América Latina.",
    options: ["con", "de", "en", "por"],
    correct: 0,
    explanation: "В испанском языке «мечтать о» всегда используется с предлогом «con»: «soñar con»."
  },
  {
    id: "b1_41",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Разговорное",
    prompt: "Что означает испанское выражение «¡Qué va!»?",
    options: ["Да ну! / Ничего подобного!", "Какая удача!", "Вот это да, согласен!", "Поехали быстрее!"],
    correct: 0,
    explanation: "«¡Qué va!» — популярное разговорное выражение несогласия («Да ну!», «Вовсе нет!»)."
  },
  {
    id: "b1_42",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Устойчивые фразы",
    prompt: "Что означает выражение «Darse cuenta de algo»?",
    options: ["Осознать / понять что-либо", "Ошибиться в расчётах", "Забыть о встрече", "Передумать в последний момент"],
    correct: 0,
    explanation: "«Darse cuenta de» — осознать, заметить, отдать себе отчёт в чём-либо."
  },
  {
    id: "b1_43",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Идиомы",
    prompt: "Что значит фраза «Estar sin blanca»?",
    options: ["Быть совсем без денег (на мели)", "Не спать всю ночь", "Быть в белой одежде", "Не знать правильного ответа"],
    correct: 0,
    explanation: "«Estar sin blanca» — разговорная идиома, означающая «сидеть без гроша / быть на мели»."
  },
  {
    id: "b1_44",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Как переводится испанское слово «Embarazada»?",
    options: ["Беременная", "Смущённая", "Уставшая", "Занятая"],
    correct: 0,
    explanation: "«Embarazada» — беременная (а «смущённый» по-испански — «avergonzado»)."
  },
  {
    id: "b1_45",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Работа и учёба",
    prompt: "Что означает слово «La entrevista»?",
    options: ["Собеседование / интервью", "Резюме", "Зарплата", "Отпуск"],
    correct: 0,
    explanation: "«La entrevista (de trabajo)» — собеседование при приёме на работу или интервью."
  },
  {
    id: "b1_46",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Пожелания",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Ojalá no llueva mañana porque queremos hacer una excursión.",
    options: ["Хоть бы завтра не пошёл дождь, потому что мы хотим поехать на экскурсию.", "Жаль, что вчера шёл дождь и мы отменили экскурсию.", "Говорят, завтра будет ливень, поэтому экскурсии не будет.", "Если завтра пойдёт дождь, мы возьмём с собой зонты."],
    correct: 0,
    explanation: "«Ojalá no llueva mañana porque queremos hacer una excursión» — Хоть бы завтра не пошёл дождь, ведь мы хотим отправиться на экскурсию."
  },
  {
    id: "b1_47",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Привычки",
    prompt: "Что говорит человек о своих привычках?",
    audioText: "Antes solía acostarme muy tarde, pero ahora madrugo todos los días.",
    options: ["Раньше он обычно ложился очень поздно, но теперь встаёт рано каждый день.", "Он всегда ложится спать рано, даже по выходным.", "Раньше он вставал в шесть утра, а теперь спит до обеда.", "Ему трудно просыпаться рано, когда на улице темно."],
    correct: 0,
    explanation: "«Antes solía acostarme muy tarde, pero ahora madrugo todos los días» — «soler» = иметь обыкновение, «madrugar» = рано вставать."
  },
  {
    id: "b1_48",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Условие",
    prompt: "Что бы сделал собеседник на твоём месте?",
    audioText: "Yo que tú, hablaría con el jefe antes de tomar una decisión.",
    options: ["На твоём месте он бы поговорил с начальником, прежде чем принимать решение.", "Он считает, что начальник уже принял окончательное решение.", "Он просит тебя не говорить начальнику об этой ошибке.", "Он собирается уволиться, не посоветовавшись с руководством."],
    correct: 0,
    explanation: "«Yo que tú, hablaría con el jefe...» — На твоём месте я бы поговорил с начальником..."
  },
  {
    id: "b1_49",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Прошлое",
    prompt: "Что произошло, когда они пришли в ресторан?",
    audioText: "Cuando llegamos al restaurante, ya habían cerrado la cocina.",
    options: ["Кухню уже закрыли до их прихода.", "Официант сразу принёс им меню и напитки.", "В ресторане не оказалось ни одного свободного столика.", "Они успели сделать заказ за пять минут до закрытия."],
    correct: 0,
    explanation: "«Cuando llegamos al restaurante, ya habían cerrado la cocina» — Когда мы пришли в ресторан, кухню уже закрыли."
  },
  {
    id: "b1_50",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Мнение",
    prompt: "Что человек думает об изучении языков?",
    audioText: "A pesar de que la gramática es difícil, me encanta aprender idiomas.",
    options: ["Несмотря на то что грамматика сложная, ему очень нравится учить языки.", "Он бросил учить испанский из-за слишком сложной грамматики.", "Он считает, что грамматику вообще не нужно учить.", "Для него произношение намного сложнее, чем грамматика."],
    correct: 0,
    explanation: "«A pesar de que» — несмотря на то что."
  },
  /* ========================================================================
     TIER 2: A2–B1 — ДОПОЛНИТЕЛЬНЫЕ 30 ВОПРОСОВ (b1_51 .. b1_80)
     ======================================================================== */
  {
    id: "b1_51",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Subjuntivo (цель)",
    prompt: "Выбери правильную форму глагола после союза цели «para que» («чтобы»):",
    subprompt: "Te explico la regla despacio para que la _____ bien.",
    options: ["entiendas", "entiendes", "entenderás", "entendías"],
    correct: 0,
    explanation: "После союза цели «para que» при смене субъекта всегда используется Subjuntivo: «entiendas»."
  },
  {
    id: "b1_52",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Subjuntivo (совет)",
    prompt: "Выбери правильную форму после глагола совета «Te aconsejo que...»:",
    subprompt: "Te aconsejo que _____ con un médico lo antes posible.",
    options: ["hables", "hablas", "hablarás", "hablabas"],
    correct: 0,
    explanation: "Глаголы совета («aconsejar que», «recomendar que») требуют после себя Subjuntivo: «hables»."
  },
  {
    id: "b1_53",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Сравнение",
    prompt: "Выбери правильное слово для сравнения количества («У неё столько же книг, сколько у меня»):",
    subprompt: "Ella tiene _____ libros como yo.",
    options: ["tantos", "tan", "tanto", "tantas"],
    correct: 0,
    explanation: "Перед существительным во множественном числе мужского рода («libros») используется согласованная форма «tantos ... como»."
  },
  {
    id: "b1_54",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Условные (1 тип)",
    prompt: "Выбери правильную форму глагола в реальном условии («Если у меня будут деньги, я куплю машину»):",
    subprompt: "Si _____ suficiente dinero, me compraré un coche nuevo.",
    options: ["tengo", "tenga", "tendré", "tenía"],
    correct: 0,
    explanation: "В реальном условии после «si» в испанском никогда не ставится ни Futuro, ни Presente de Subjuntivo — используется обычный Presente de Indicativo: «si tengo»."
  },
  {
    id: "b1_55",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Восклицания",
    prompt: "Какое слово нужно в восклицании перед прилагательным («Какой красивый город!»)?",
    subprompt: "¡_____ ciudad tan bonita!",
    options: ["Qué", "Cuál", "Cómo", "Cuánto"],
    correct: 0,
    explanation: "В восклицательных предложениях перед существительными и прилагательными всегда ставится «¡Qué...!»: «¡Qué ciudad tan bonita!»."
  },
  {
    id: "b1_56",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Относительные местоимения",
    prompt: "Вставь правильное относительное слово («Город, в котором я родился»):",
    subprompt: "La ciudad en _____ nací está cerca del mar.",
    options: ["la que", "quien", "lo que", "donde que"],
    correct: 0,
    explanation: "После предлога «en» с женским родом единственного числа («la ciudad») используется «la que» (или «la cual»)."
  },
  {
    id: "b1_57",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Предложные глаголы",
    prompt: "Какой предлог требует глагол «depender» («зависеть от»)?",
    subprompt: "Todo depende _____ tiempo que haga mañana.",
    options: ["del", "por el", "al", "con el"],
    correct: 0,
    explanation: "«Depender de» — зависеть от чего-либо; «de + el» сливается в «del»."
  },
  {
    id: "b1_58",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Предложные глаголы",
    prompt: "Какой предлог нужен с глаголом «acordarse» («помнить о»)?",
    subprompt: "¿Te acuerdas _____ nombre de nuestro primer profesor?",
    options: ["del", "al", "en el", "por el"],
    correct: 0,
    explanation: "Возвратный глагол «acordarse de» всегда требует предлог «de» («de + el» = «del»), в отличие от невозвратного «recordar algo»."
  },
  {
    id: "b1_59",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Косвенная речь",
    prompt: "Переведи фразу в косвенную речь («Он сказал, что придёт завтра»):",
    subprompt: "Ayer me dijo que _____ hoy a la reunión.",
    options: ["vendría", "vendrá", "viene", "venga"],
    correct: 0,
    explanation: "При согласовании времён в прошлом («dijo que») будущее время «vendrá» переходит в условное наклонение: «vendría»."
  },
  {
    id: "b1_60",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Неопределённые слова",
    prompt: "Выбери правильное слово («В комнате никого нет»):",
    subprompt: "He llamado a la puerta, pero no hay _____ en casa.",
    options: ["nadie", "alguien", "nada", "ningún"],
    correct: 0,
    explanation: "Для отрицания одушевлённого лица после «no» используется «nadie» (никто)."
  },
  {
    id: "b1_61",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Indefinido (неправильные)",
    prompt: "Выбери правильную форму прошедшего времени от глагола «poner» («Он накрыл на стол»):",
    subprompt: "Anoche mi hermano _____ la mesa para todos.",
    options: ["puso", "ponió", "ponía", "ha puesto"],
    correct: 0,
    explanation: "У глагола «poner» в Pretérito Indefinido особая основа «pus-»: «él puso»."
  },
  {
    id: "b1_62",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Indefinido (неправильные)",
    prompt: "Выбери правильную форму прошедшего времени от глагола «saber» («Вчера я узнал новость»):",
    subprompt: "Ayer _____ la noticia por la televisión.",
    options: ["supe", "sabí", "sabía", "he sabido"],
    correct: 0,
    explanation: "Глагол «saber» в Pretérito Indefinido имеет основу «sup-» («yo supe») и переводится как «узнал»."
  },
  {
    id: "b1_63",
    tier: 2,
    typeLabel: "Грамматика A2–B1 • Imperativo (вы — usted)",
    prompt: "Как вежливо попросить незнакомца на «usted» («Войдите, пожалуйста!»)?",
    subprompt: "_____ usted, por favor, le estábamos esperando.",
    options: ["Pase", "Pasa", "Pasas", "Pasad"],
    correct: 0,
    explanation: "Вежливый приказ на «usted» образуется от 3-го лица единственного числа Presente de Subjuntivo: «pase»."
  },
  {
    id: "b1_64",
    tier: 2,
    typeLabel: "Лексика A2–B1 • Разговорное",
    prompt: "Что означает разговорное выражение «Me da igual»?",
    options: ["Мне всё равно / без разницы", "Мне очень нравится", "Мне неловко", "Я с этим не согласен"],
    correct: 0,
    explanation: "«Me da igual» — устойчивый разговорный оборот со значением «мне без разницы / всё равно»."
  },
  {
    id: "b1_65",
    tier: 2,
    typeLabel: "Лексика A2–B1 • Устойчивые фразы",
    prompt: "Что означает выражение «Valer la pena»?",
    options: ["Стоить того (иметь смысл)", "Жалеть о прошлом", "Терять время зря", "Бояться перемен"],
    correct: 0,
    explanation: "«Vale la pena» — оно того стоит (например, «Este viaje vale la pena» — Эта поездка того стоит)."
  },
  {
    id: "b1_66",
    tier: 2,
    typeLabel: "Лексика A2–B1 • Устойчивые фразы",
    prompt: "Что значит фраза «Echar de menos a alguien»?",
    options: ["Скучать по кому-либо", "Выгнать кого-либо", "Недооценивать кого-либо", "Забыть о ком-либо"],
    correct: 0,
    explanation: "«Echar de menos» — скучать по человеку или месту (например, «Te echo de menos» — Я по тебе скучаю)."
  },
  {
    id: "b1_67",
    tier: 2,
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Как правильно переводится слово «Constipado» в фразе «Estoy constipado»?",
    options: ["Я простужен (у меня насморк)", "Я в замешательстве", "Я очень устал", "Я голоден"],
    correct: 0,
    explanation: "«Estar constipado» в Испании означает «быть простуженным» (ложный друг английского слова)."
  },
  {
    id: "b1_68",
    tier: 2,
    typeLabel: "Лексика A2–B1 • Связки речи",
    prompt: "Какое слово-связка переводится как «Тем не менее / однако»?",
    options: ["Sin embargo", "Por lo tanto", "Es decir", "En cambio"],
    correct: 0,
    explanation: "«Sin embargo» — однако / тем не менее; «por lo tanto» — следовательно; «es decir» — то есть."
  },
  {
    id: "b1_69",
    tier: 2,
    typeLabel: "Лексика A2–B1 • Характер",
    prompt: "Как по-испански описать человека, который «надёжный / ответственный»?",
    options: ["Responsable", "Tacaño", "Presumido", "Torpe"],
    correct: 0,
    explanation: "«Responsable» — ответственный; «tacaño» — жадный; «torpe» — неуклюжий."
  },
  {
    id: "b1_70",
    tier: 2,
    typeLabel: "Лексика A2–B1 • Повседневность",
    prompt: "Что означает глагол «Aprovechar» в фразе «Hay que aprovechar el buen tiempo»?",
    options: ["Воспользоваться (хорошей погодой)", "Испортить", "Подождать", "Предсказать"],
    correct: 0,
    explanation: "«Aprovechar» — извлекать пользу, с толком использовать время или возможность."
  },
  {
    id: "b1_71",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Переезд",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Llevamos dos meses viviendo en este barrio y estamos encantados.",
    options: ["Мы живём в этом районе уже два месяца и в полном восторге.", "Мы собираемся переехать в этот район через два месяца.", "Два месяца назад мы уехали из этого района.", "Мы ищем квартиру в этом районе уже два месяца."],
    correct: 0,
    explanation: "«Llevamos dos meses viviendo en este barrio y estamos encantados» — «llevar + время + герундий» обозначает длительность до настоящего момента."
  },
  {
    id: "b1_72",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Напоминание",
    prompt: "О чём просит собеседник?",
    audioText: "Avísame en cuanto llegues al aeropuerto para ir a recogerte.",
    options: ["Сообщить, как только прилетит в аэропорт, чтобы заехать за ним.", "Купить билеты в аэропорт заранее через интернет.", "Позвонить из отеля после заселения.", "Заказать такси до центрального вокзала."],
    correct: 0,
    explanation: "«Avísame en cuanto llegues al aeropuerto para ir a recogerte» — «en cuanto» = как только; «recoger» = забрать / встретить."
  },
{
    id: "b1_73",
    tier: 2,
    type: "audio",
typeLabel: "Аудирование A2–B1 • Работа",
prompt: "Почему она отказалась от предложения?",
audioText: "Rechazó el puesto porque el horario no le permitía estudiar.",
options: ["График работы не позволял ей учиться.", "Зарплата оказалась ниже, чем она ожидала.", "Офис находился слишком далеко от дома.", "Она нашла более интересную стажировку за границей."],
correct: 0,
explanation: "«Rechazó el puesto porque el horario no le permitía estudiar» — Она отклонила должность, потому что график не позволял ей учиться."
},
{
id: "b1_74",
tier: 2,
type: "audio",
typeLabel: "Аудирование A2–B1 • Ошибка",
prompt: "Что случилось вчера вечером?",
audioText: "Me di cuenta de que había dejado las llaves dentro de casa.",
options: ["Он понял, что оставил ключи внутри дома.", "Он потерял ключи от машины по дороге домой.", "Он забыл закрыть входную дверь на ключ.", "Он нашёл запасные ключи в кармане куртки."],
correct: 0,
explanation: "«Me di cuenta de que había dejado las llaves dentro de casa» — Я осознал, что оставил ключи внутри дома."
},
{
id: "b1_75",
tier: 2,
type: "audio",
typeLabel: "Аудирование A2–B1 • Кино",
prompt: "Какое впечатление оставил фильм?",
audioText: "Aunque la película era un poco larga, mereció mucho la pena verla.",
options: ["Хотя фильм был немного длинным, посмотреть его определённо стоило.", "Фильм оказался слишком скучным и затянутым.", "Они ушли из кинотеатра, не досмотрев до конца.", "Книга была намного интереснее этого фильма."],
correct: 0,
explanation: "«Aunque la película era un poco larga, mereció mucho la pena verla» — «aunque» = хотя; «merecer la pena» = стоить того."
},
{
id: "b1_76",
tier: 2,
type: "audio",
typeLabel: "Аудирование A2–B1 • Встреча",
prompt: "Что произошло с планами на вечер?",
audioText: "Tuvimos que cancelar la cena porque varios amigos se pusieron enfermos.",
options: ["Пришлось отменить ужин, так как несколько друзей заболели.", "Они перенесли ужин на субботу из-за плохой погоды.", "В ресторане не оказалось свободных мест на большую компанию.", "Друзья опоздали на ужин почти на целый час."],
correct: 0,
explanation: "«Tuvimos que cancelar la cena porque varios amigos se pusieron enfermos» — «ponerse enfermo» = заболеть."
},
{
id: "b1_77",
tier: 2,
type: "audio",
typeLabel: "Аудирование A2–B1 • Совет",
prompt: "Что советует говорящий?",
audioText: "No te preocupes tanto por los errores, lo importante es comunicarte.",
options: ["Не переживать так сильно из-за ошибок, главное — общаться.", "Выучить все исключения грамматики перед поездкой.", "Говорить медленнее, чтобы не делать ошибок.", "Записывать каждое новое слово в тетрадь."],
correct: 0,
explanation: "«No te preocupes tanto por los errores, lo importante es comunicarte» — Не переживай так из-за ошибок, главное — общаться."
},
{
id: "b1_78",
tier: 2,
type: "audio",
typeLabel: "Аудирование A2–B1 • Покупки",
prompt: "Почему он решил не покупать эту куртку?",
audioText: "Me quedaba un poco estrecha de hombros y no tenían una talla más.",
options: ["Она была узковата в плечах, а размера побольше не было.", "Ему не понравился цвет и материал подкладки.", "На куртке не работала молния.", "Она не продавалась со скидкой."],
correct: 0,
explanation: "«Me quedaba un poco estrecha de hombros y no tenían una talla más» — «quedar estrecho» = быть узким (об одежде)."
},
{
id: "b1_79",
tier: 2,
type: "audio",
typeLabel: "Аудирование A2–B1 • Привычки",
prompt: "Что изменилось в жизни собеседника?",
audioText: "Desde que trabajo desde casa, ahorro mucho tiempo en transporte.",
options: ["С тех пор как он работает из дома, он экономит много времени на дорогу.", "Он устал работать из дома и хочет вернуться в офис.", "Ему приходится ездить в офис два раза в неделю.", "Теперь он тратит больше времени на дорогу до работы."],
correct: 0,
explanation: "«Desde que trabajo desde casa, ahorro mucho tiempo en transporte» — «desde que» = с тех пор как; «ahorrar» = экономить."
},
{
id: "b1_80",
tier: 2,
type: "audio",
typeLabel: "Аудирование A2–B1 • Итог",
prompt: "Как прошёл экзамен?",
audioText: "Al principio estaba muy nervioso, pero al final todo salió genial.",
options: ["Сначала он сильно нервничал, но в итоге всё прошло отлично.", "Экзамен оказался сложнее, чем он предполагал.", "Он не успел ответить на последние два вопроса.", "Результаты экзамена объявят только на следующей неделе."],
correct: 0,
explanation: "«Al principio estaba muy nervioso, pero al final todo salió genial» — Вначале я очень нервничал, но в конце концов всё вышло отлично."
},
  /* ========================================================================
     ЕЩЁ 10 АУДИО-ВОПРОСОВ: УРОВЕНЬ A0 (tier: 0)
     ======================================================================== */
  {
    id: "a0_audio_36",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Mi tía vive en una casa grande.",
    options: ["Моя тётя живёт в большом доме.", "Моя сестра работает в новой школе.", "Моя мама гуляет в красивом парке.", "Моя бабушка готовит вкусный суп."],
    correct: 0,
    explanation: "«Mi tía vive en una casa grande» — Моя тётя живёт в большом доме."
  },
  {
    id: "a0_audio_37",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что человек ест на обед?",
    audioText: "Hoy como sopa de verduras y carne.",
    options: ["Овощной суп и мясо", "Рыбу с рисом и салат", "Хлеб с сыром и яйцо", "Яблоко и клубнику"],
    correct: 0,
    explanation: "«Hoy como sopa de verduras y carne» — Сегодня я ем овощной суп и мясо."
  },
  {
    id: "a0_audio_38",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цвета и вещи",
    prompt: "Какого цвета его куртка?",
    audioText: "Tengo una chaqueta negra muy bonita.",
    options: ["Чёрная", "Синяя", "Серая", "Зелёная"],
    correct: 0,
    explanation: "«Tengo una chaqueta negra muy bonita» — У меня есть очень красивая чёрная куртка."
  },
  {
    id: "a0_audio_39",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Сколько стульев в комнате?",
    audioText: "En la habitación hay seis sillas.",
    options: ["6", "5", "7", "8"],
    correct: 0,
    explanation: "«En la habitación hay seis sillas» — В комнате шесть стульев («seis» = 6)."
  },
  {
    id: "a0_audio_40",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Какое животное видит говорящий?",
    audioText: "Mira, un caballo marrón corre en el campo.",
    options: ["Коричневая лошадь бежит по полю.", "Белая корова стоит у реки.", "Маленькая собака играет с мячом.", "Чёрный медведь идёт по лесу."],
    correct: 0,
    explanation: "«Un caballo marrón corre en el campo» — Коричневая лошадь бежит по полю."
  },
  {
    id: "a0_audio_41",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Приветствие",
    prompt: "Что говорит собеседник при встрече?",
    audioText: "Buenas tardes, ¿cómo se llama usted?",
    options: ["Добрый день, как вас зовут?", "Доброе утро, откуда вы?", "Спокойной ночи, до завтра.", "Привет, где ты живёшь?"],
    correct: 0,
    explanation: "«Buenas tardes, ¿cómo se llama usted?» — Добрый день (вечер), как вас зовут?"
  },
  {
    id: "a0_audio_42",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Тело",
    prompt: "Что описывает диктор?",
    audioText: "La niña tiene los ojos azules y el pelo largo.",
    options: ["У девочки голубые глаза и длинные волосы.", "У мальчика карие глаза и короткие волосы.", "У женщины зелёные глаза и красная шляпа.", "У мужчины чёрные волосы и большие руки."],
    correct: 0,
    explanation: "«La niña tiene los ojos azules y el pelo largo» — У девочки голубые глаза и длинные волосы."
  },
  {
    id: "a0_audio_43",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Предметы",
    prompt: "Где находятся ключи?",
    audioText: "Las llaves están dentro de mi bolso.",
    options: ["Внутри моей сумки", "На кухонном столе", "Под стулом в комнате", "Рядом с входной дверью"],
    correct: 0,
    explanation: "«Las llaves están dentro de mi bolso» — Ключи находятся внутри моей сумки."
  },
  {
    id: "a0_audio_44",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Состояние",
    prompt: "Почему человек хочет спать?",
    audioText: "Tengo mucho sueño porque es muy tarde.",
    options: ["Потому что уже очень поздно.", "Потому что он много бегал в парке.", "Потому что на улице холодно.", "Потому что он рано встал утром."],
    correct: 0,
    explanation: "«Tengo mucho sueño porque es muy tarde» — Я очень хочу спать, потому что уже очень поздно."
  },
  {
    id: "a0_audio_45",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Природа",
    prompt: "Что делает человек летом?",
    audioText: "En verano me gusta nadar en el mar.",
    options: ["Плавать в море", "Гулять в горах", "Читать дома", "Ездить на поезде"],
    correct: 0,
    explanation: "«En verano me gusta nadar en el mar» — Летом мне нравится плавать в море."
  },

  /* ========================================================================
     ЕЩЁ 10 АУДИО-ВОПРОСОВ: УРОВЕНЬ A1 (tier: 1)
     ======================================================================== */
  {
    id: "a1_audio_36",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Покупки",
    prompt: "Что спрашивает покупатель в магазине?",
    audioText: "¿Tienen estos zapatos en el número cuarenta?",
    options: ["Есть ли у вас эти туфли сорокового размера?", "Сколько стоит эта пара чёрных туфель?", "Можно ли оплатить покупку картой?", "Во сколько закрывается этот магазин?"],
    correct: 0,
    explanation: "«¿Tienen estos zapatos en el número cuarenta?» — У вас есть эти туфли 40-го размера?"
  },
  {
    id: "a1_audio_37",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Город",
    prompt: "Как дойти до библиотеки?",
    audioText: "Cruza la plaza y gira a la derecha en la primera calle.",
    options: ["Перейти площадь и повернуть направо на первой улице", "Идти прямо до моста и повернуть налево", "Сесть на автобус рядом с вокзалом", "Пройти мимо банка и зайти в парк"],
    correct: 0,
    explanation: "«Cruza la plaza y gira a la derecha en la primera calle» — Перейди площадь и поверни направо на первой улице."
  },
  {
    id: "a1_audio_38",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Кафе",
    prompt: "Что отвечает официант посетителю?",
    audioText: "Lo siento, hoy no nos queda tortilla de patatas.",
    options: ["Извините, сегодня у нас не осталось картофельной тортильи.", "Сейчас принесу меню и стакан холодной воды.", "Свободный столик есть только на террасе.", "Кухня закрывается через пятнадцать минут."],
    correct: 0,
    explanation: "«Hoy no nos queda tortilla de patatas» — Сегодня у нас больше не осталось картофельной тортильи."
  },
  {
    id: "a1_audio_39",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Планы",
    prompt: "Что друзья собираются делать завтра?",
    audioText: "Mañana vamos a alquilar un coche para visitar la costa.",
    options: ["Арендовать машину, чтобы съездить на побережье", "Купить билеты на поезд в столицу", "Пойти пешком в горы с рюкзаками", "Встретиться в аэропорту рано утром"],
    correct: 0,
    explanation: "«Vamos a alquilar un coche para visitar la costa» — Мы собираемся арендовать машину, чтобы посетить побережье."
  },
  {
    id: "a1_audio_40",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Здоровье",
    prompt: "Что советует врач пациенту?",
    audioText: "Tienes que descansar en casa y beber mucha agua.",
    options: ["Отдыхать дома и пить много воды", "Принимать лекарство три раза в день после еды", "Прийти на повторный осмотр в пятницу", "Не выходить на улицу в холодную погоду"],
    correct: 0,
    explanation: "«Tienes que descansar en casa y beber mucha agua» — Тебе нужно отдыхать дома и пить много воды."
  },
  {
    id: "a1_audio_41",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Время",
    prompt: "Когда начинается фильм?",
    audioText: "La película empieza a las diez menos diez de la noche.",
    options: ["В 21:50", "В 22:10", "В 21:10", "В 20:50"],
    correct: 0,
    explanation: "«A las diez menos diez de la noche» — без десяти десять вечера (21:50)."
  },
  {
    id: "a1_audio_42",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Учёба",
    prompt: "Почему ей нравится изучать испанский?",
    audioText: "Estudio español porque quiero viajar por Sudamérica.",
    options: ["Хочет путешествовать по Южной Америке", "Планирует переехать работать в Мадрид", "У неё много друзей из Испании", "Любит смотреть испанские фильмы без перевода"],
    correct: 0,
    explanation: "«Estudio español porque quiero viajar por Sudamérica» — Я учу испанский, потому что хочу путешествовать по Южной Америке."
  },
  {
    id: "a1_audio_43",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Погода",
    prompt: "Какая погода ожидается на выходных?",
    audioText: "El sábado estará nublado, pero el domingo hará buen tiempo.",
    options: ["В субботу будет облачно, а в воскресенье — хорошая погода.", "Оба выходных дня будет идти сильный дождь.", "В субботу будет солнечно, а в воскресенье подует ветер.", "На выходных ожидается сильный мороз."],
    correct: 0,
    explanation: "«El sábado estará nublado, pero el domingo hará buen tiempo» — В субботу будет облачно, но в воскресенье будет хорошая погода."
  },
  {
    id: "a1_audio_44",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Дом",
    prompt: "Что нужно сделать перед выходом из квартиры?",
    audioText: "No olvides cerrar todas las ventanas antes de salir.",
    options: ["Закрыть все окна перед выходом", "Выключить свет на кухне и в коридоре", "Взять с собой зонт и ключи от машины", "Покормить собаку и налить ей воды"],
    correct: 0,
    explanation: "«No olvides cerrar todas las ventanas antes de salir» — Не забудь закрыть все окна перед тем, как выйти."
  },
  {
    id: "a1_audio_45",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Транспорт",
    prompt: "Сколько времени занимает дорога на метро?",
    audioText: "Desde mi casa hasta el centro tardo veinte minutos en metro.",
    options: ["20 минут", "15 минут", "30 минут", "40 минут"],
    correct: 0,
    explanation: "«Tardo veinte minutos en metro» — Дорога на метро занимает у меня двадцать минут."
  },
  /* ========================================================================
     TIER 0: A0 — ФИНАЛЬНЫЕ 22 ВОПРОСА ДО РОВНЫХ 500 (a0_166..183 + 4 аудио)
     ======================================================================== */
  {
    id: "a0_166",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Город",
    prompt: "Как по-испански называется «Улица»?",
    options: ["La calle", "La plaza", "El puente", "El barrio"],
    correct: 0,
    explanation: "«La calle» — улица, «la plaza» — площадь."
  },
  {
    id: "a0_167",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Город",
    prompt: "Что означает слово «El parque»?",
    options: ["Парк", "Магазин", "Школа", "Вокзал"],
    correct: 0,
    explanation: "«El parque» — парк."
  },
  {
    id: "a0_168",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански будет «Небо»?",
    options: ["El cielo", "La tierra", "El viento", "La nieve"],
    correct: 0,
    explanation: "«El cielo» — небо."
  },
  {
    id: "a0_169",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «La lluvia»?",
    options: ["Дождь", "Снег", "Туман", "Мороз"],
    correct: 0,
    explanation: "«La lluvia» — дождь, «la nieve» — снег."
  },
  {
    id: "a0_170",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Картофель»?",
    options: ["La patata", "El tomate", "La cebolla", "La zanahoria"],
    correct: 0,
    explanation: "«La patata» (в Латинской Америке — «la papa») — картофель."
  },
  {
    id: "a0_171",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La naranja»?",
    options: ["Апельсин", "Лимон", "Виноград", "Персик"],
    correct: 0,
    explanation: "«La naranja» — апельсин (а также оранжевый цвет)."
  },
  {
    id: "a0_172",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Курица»?",
    options: ["El pollo", "El cerdo", "La oveja", "El pato"],
    correct: 0,
    explanation: "«El pollo» — курица / цыплёнок."
  },
  {
    id: "a0_173",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «La camiseta»?",
    options: ["Футболка", "Пальто", "Носки", "Перчатки"],
    correct: 0,
    explanation: "«La camiseta» — футболка, «la camisa» — рубашка."
  },
  {
    id: "a0_174",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Как по-испански называется «Часы» (наручные или настенные)?",
    options: ["El reloj", "El espejo", "La lámpara", "El cuadro"],
    correct: 0,
    explanation: "«El reloj» — часы."
  },
  {
    id: "a0_175",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Что означает слово «El teléfono»?",
    options: ["Телефон", "Телевизор", "Компьютер", "Фотоаппарат"],
    correct: 0,
    explanation: "«El teléfono» (или «el móvil» в Испании) — телефон."
  },
  {
    id: "a0_176",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански будет «Лёгкий / простой»?",
    options: ["Fácil", "Difícil", "Largo", "Corto"],
    correct: 0,
    explanation: "«Fácil» — лёгкий / простой, «difícil» — трудный."
  },
  {
    id: "a0_177",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Limpio»?",
    options: ["Чистый", "Грязный", "Пустой", "Полный"],
    correct: 0,
    explanation: "«Limpio» — чистый, «sucio» — грязный."
  },
  {
    id: "a0_178",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Abrir»?",
    options: ["Открывать", "Закрывать", "Покупать", "Продавать"],
    correct: 0,
    explanation: "«Abrir» — открывать, «cerrar» — закрывать."
  },
  {
    id: "a0_179",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Как по-испански будет «Писать»?",
    options: ["Escribir", "Leer", "Escuchar", "Mirar"],
    correct: 0,
    explanation: "«Escribir» — писать."
  },
  {
    id: "a0_180",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Tener",
    prompt: "Вставь правильную форму глагола «tener» («У нас есть машина»):",
    subprompt: "Nosotros _____ un coche rojo.",
    options: ["tenemos", "tengo", "tienes", "tienen"],
    correct: 0,
    explanation: "Для местоимения «nosotros» (мы) форма глагола «tener» — «tenemos»."
  },
  {
    id: "a0_181",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Vivir",
    prompt: "Вставь правильную форму глагола «vivir» («Они живут в Испании»):",
    subprompt: "Ellos _____ en España.",
    options: ["viven", "vivo", "vives", "vivimos"],
    correct: 0,
    explanation: "Для «ellos / ellas» (они) глаголы на «-ir» имеют окончание «-en»: «viven»."
  },
  {
    id: "a0_182",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Союзы",
    prompt: "Как по-испански будет союз «и» («хлеб и вода»)?",
    subprompt: "Pan _____ agua, por favor.",
    options: ["y", "o", "pero", "ni"],
    correct: 0,
    explanation: "Союз «y» означает «и», а «o» означает «или»."
  },
  {
    id: "a0_183",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Союзы",
    prompt: "Как по-испански сказать «или» («чай или кофе»)?",
    subprompt: "¿Quieres té _____ café?",
    options: ["o", "y", "pero", "con"],
    correct: 0,
    explanation: "Союз «o» переводится как «или»."
  },
  {
    id: "a0_audio_46",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Профессии",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Mi padre es profesor en una escuela.",
    options: ["Мой папа работает учителем в школе.", "Мой брат учится в университете.", "Мой дядя работает врачом в больнице.", "Мой друг работает официантом в кафе."],
    correct: 0,
    explanation: "«Mi padre es profesor en una escuela» — Мой отец работает учителем в школе."
  },
  {
    id: "a0_audio_47",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Время",
    prompt: "Который час называет диктор?",
    audioText: "Son las tres de la tarde.",
    options: ["Три часа дня (15:00)", "Два часа дня (14:00)", "Четыре часа дня (16:00)", "Десять часов утра (10:00)"],
    correct: 0,
    explanation: "«Son las tres de la tarde» — Три часа дня."
  },
  {
    id: "a0_audio_48",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Город",
    prompt: "Где гуляют друзья?",
    audioText: "Los amigos caminan por el parque.",
    options: ["Друзья гуляют по парку.", "Друзья сидят в ресторане.", "Друзья едут в автобусе.", "Друзья плавают в море."],
    correct: 0,
    explanation: "«Los amigos caminan por el parque» — Друзья гуляют по парку."
  },
  {
    id: "a0_audio_49",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Покупки",
    prompt: "Что покупает человек?",
    audioText: "Compro tomates y patatas en el mercado.",
    options: ["Помидоры и картофель на рынке", "Яблоки и бананы в магазине", "Хлеб и молоко в булочной", "Рыбу и сыр в супермаркете"],
    correct: 0,
    explanation: "«Compro tomates y patatas en el mercado» — Я покупаю помидоры и картофель на рынке."
  },
  /* ========================================================================
     КОНСТРУКТОР ПРЕДЛОЖЕНИЙ (BUILDER): УРОВЕНЬ A0 (10 шт.)
     ======================================================================== */
  {
    id: "a0_build_1",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • База",
    prompt: "Собери на испанском: «Я хочу пить воду»",
    words: ["agua", "Yo", "pan", "beber", "quiero", "tengo"],
    answer: ["Yo", "quiero", "beber", "agua"],
    explanation: "«Yo quiero beber agua» — Я хочу пить воду."
  },
  {
    id: "a0_build_2",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Семья",
    prompt: "Собери на испанском: «Мою маму зовут Ана»",
    words: ["llama", "Ana", "Mi", "hermana", "madre", "se", "es"],
    answer: ["Mi", "madre", "se", "llama", "Ana"],
    explanation: "«Mi madre se llama Ana» — Мою маму зовут Ана."
  },
  {
    id: "a0_build_3",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Дом",
    prompt: "Собери на испанском: «Большой кот спит в доме»",
    words: ["casa", "grande", "El", "en", "gato", "la", "duerme", "perro"],
    answer: ["El", "gato", "grande", "duerme", "en", "la", "casa"],
    explanation: "«El gato grande duerme en la casa» — Прилагательное «grande» ставится после существительного."
  },
  {
    id: "a0_build_4",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Кафе",
    prompt: "Собери на испанском: «Один кофе с молоком, пожалуйста»",
    words: ["favor", "con", "Un", "por", "leche", "café", "agua", "sin"],
    answer: ["Un", "café", "con", "leche", "por", "favor"],
    explanation: "«Un café con leche, por favor» — Один кофе с молоком, пожалуйста."
  },
  {
    id: "a0_build_5",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Происхождение",
    prompt: "Собери на испанском: «Мы из Испании»",
    words: ["España", "de", "Nosotros", "somos", "estamos", "en", "Ellos"],
    answer: ["Nosotros", "somos", "de", "España"],
    explanation: "Для указания происхождения используется глагол «ser» + предлог «de»: «Nosotros somos de España»."
  },
  {
    id: "a0_build_6",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Цвета",
    prompt: "Собери на испанском: «У меня есть красная машина»",
    words: ["coche", "rojo", "un", "Yo", "tengo", "azul", "soy"],
    answer: ["Yo", "tengo", "un", "coche", "rojo"],
    explanation: "«Yo tengo un coche rojo» — У меня есть красная машина."
  },
  {
    id: "a0_build_7",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Еда",
    prompt: "Собери на испанском: «Мне очень нравится испанский сыр»",
    words: ["queso", "Me", "el", "español", "gusta", "mucho", "pan", "muy"],
    answer: ["Me", "gusta", "mucho", "el", "queso", "español"],
    explanation: "«Me gusta mucho el queso español» — С глаголом «gustar» используется наречие «mucho»."
  },
  {
    id: "a0_build_8",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Предметы",
    prompt: "Собери на испанском: «Книга лежит на столе»",
    words: ["mesa", "está", "El", "de", "libro", "la", "encima", "es", "debajo"],
    answer: ["El", "libro", "está", "encima", "de", "la", "mesa"],
    explanation: "«El libro está encima de la mesa» — Для местоположения используется глагол «estar»."
  },
  {
    id: "a0_build_9",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Отрицание",
    prompt: "Собери на испанском: «Я не говорю по-французски»",
    words: ["francés", "Yo", "hablo", "no", "español", "nunca"],
    answer: ["Yo", "no", "hablo", "francés"],
    explanation: "«Yo no hablo francés» — Отрицательная частица «no» ставится перед глаголом."
  },
  {
    id: "a0_build_10",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Встреча",
    prompt: "Собери на испанском: «Большое спасибо, до завтра»",
    words: ["mañana", "gracias", "Muchas", "hasta", "hoy", "por", "favor"],
    answer: ["Muchas", "gracias", "hasta", "mañana"],
    explanation: "«Muchas gracias, hasta mañana» — Большое спасибо, до завтра."
  },

  /* ========================================================================
     КОНСТРУКТОР ПРЕДЛОЖЕНИЙ (BUILDER): УРОВЕНЬ A1 (20 шт.)
     ======================================================================== */
  {
    id: "a1_build_1",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Город",
    prompt: "Собери на испанском: «Извините, где находится вокзал?»",
    words: ["estación", "está", "Perdone", "la", "dónde", "tren", "de", "es"],
    answer: ["Perdone", "dónde", "está", "la", "estación", "de", "tren"],
    explanation: "«Perdone, ¿dónde está la estación de tren?» — Извините, где находится железнодорожный вокзал?"
  },
  {
    id: "a1_build_2",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Транспорт",
    prompt: "Собери на испанском: «Обычно я езжу на работу на метро»",
    words: ["metro", "trabajo", "voy", "Normalmente", "en", "al", "del", "autobús"],
    answer: ["Normalmente", "voy", "al", "trabajo", "en", "metro"],
    explanation: "«Normalmente voy al trabajo en metro» — «a + el» сливается в «al»."
  },
  {
    id: "a1_build_3",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Ближайшее будущее",
    prompt: "Собери на испанском: «Завтра мы собираемся пойти в кино»",
    words: ["cine", "vamos", "Mañana", "al", "ir", "a", "Hoy", "del"],
    answer: ["Mañana", "vamos", "a", "ir", "al", "cine"],
    explanation: "«Mañana vamos a ir al cine» — Конструкция «ir a + инфинитив» для планов на будущее."
  },
  {
    id: "a1_build_4",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Повседневность",
    prompt: "Собери на испанском: «Каждый день я встаю в семь утра»",
    words: ["siete", "levanto", "Todos", "me", "los", "a", "días", "las", "te"],
    answer: ["Todos", "los", "días", "me", "levanto", "a", "las", "siete"],
    explanation: "«Todos los días me levanto a las siete» — Возвратный глагол «levantarse» с местоимением «me»."
  },
  {
    id: "a1_build_5",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Магазин",
    prompt: "Собери на испанском: «Я предпочитаю платить картой»",
    words: ["tarjeta", "pagar", "Prefiero", "con", "en", "efectivo", "comprar"],
    answer: ["Prefiero", "pagar", "con", "tarjeta"],
    explanation: "«Prefiero pagar con tarjeta» — Платить картой передаётся через предлог «con»."
  },
  {
    id: "a1_build_6",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Здоровье",
    prompt: "Собери на испанском: «Сегодня у меня очень болит голова»",
    words: ["cabeza", "duele", "Hoy", "la", "me", "mucho", "muy", "espalda"],
    answer: ["Hoy", "me", "duele", "mucho", "la", "cabeza"],
    explanation: "«Hoy me duele mucho la cabeza» — Сегодня у меня сильно болит голова."
  },
  {
    id: "a1_build_7",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Направление",
    prompt: "Собери на испанском: «Аптека находится напротив банка»",
    words: ["banco", "está", "La", "del", "farmacia", "enfrente", "al", "es"],
    answer: ["La", "farmacia", "está", "enfrente", "del", "banco"],
    explanation: "«La farmacia está enfrente del banco» — «enfrente de + el» = «enfrente del»."
  },
  {
    id: "a1_build_8",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Погода",
    prompt: "Собери на испанском: «Сегодня очень холодно и идёт дождь»",
    words: ["llueve", "frío", "Hoy", "y", "hace", "mucho", "está", "calor"],
    answer: ["Hoy", "hace", "mucho", "frío", "y", "llueve"],
    explanation: "«Hoy hace mucho frío y llueve» — Сегодня очень холодно и идёт дождь."
  },
  {
    id: "a1_build_9",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Действие сейчас",
    prompt: "Собери на испанском: «Прямо сейчас я учу испанский»",
    words: ["español", "estoy", "Ahora", "estudiando", "mismo", "soy", "estudiar"],
    answer: ["Ahora", "mismo", "estoy", "estudiando", "español"],
    explanation: "«Ahora mismo estoy estudiando español» — Конструкция «estar + герундий» для действия в момент речи."
  },
  {
    id: "a1_build_10",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Ресторан",
    prompt: "Собери на испанском: «Официант, принесите счёт, пожалуйста»",
    words: ["favor", "cuenta", "Camarero", "por", "la", "carta", "el"],
    answer: ["Camarero", "la", "cuenta", "por", "favor"],
    explanation: "«Camarero, la cuenta por favor» — Официант, счёт, пожалуйста."
  },
  {
    id: "a1_build_11",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Расписание",
    prompt: "Собери на испанском: «По понедельникам у меня урок гитары»",
    words: ["guitarra", "tengo", "Los", "de", "lunes", "clase", "En", "El"],
    answer: ["Los", "lunes", "tengo", "clase", "de", "guitarra"],
    explanation: "«Los lunes tengo clase de guitarra» — «По понедельникам» передаётся артиклем «los» без предлога."
  },
  {
    id: "a1_build_12",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Сравнение",
    prompt: "Собери на испанском: «Мадрид больше, чем Валенсия»",
    words: ["Valencia", "grande", "Madrid", "que", "es", "más", "de", "está"],
    answer: ["Madrid", "es", "más", "grande", "que", "Valencia"],
    explanation: "«Madrid es más grande que Valencia» — В сравнении «более ... чем» используется союз «que»."
  },
  {
    id: "a1_build_13",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Просьба",
    prompt: "Собери на испанском: «Можешь говорить помедленнее, пожалуйста?»",
    words: ["despacio", "hablar", "Puedes", "favor", "más", "por", "Puedo", "muy"],
    answer: ["Puedes", "hablar", "más", "despacio", "por", "favor"],
    explanation: "«¿Puedes hablar más despacio, por favor?» — Можешь говорить помедленнее, пожалуйста?"
  },
  {
    id: "a1_build_14",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Умения",
prompt: "Собери на испанском: «Я умею готовить, но не умею танцевать»",
words: ["bailar", "cocinar", "Sé", "no", "pero", "sé", "conozco", "y"],
answer: ["Sé", "cocinar", "pero", "no", "sé", "bailar"],
explanation: "«Sé cocinar, pero no sé bailar» — Для навыков и умений используется глагол «saber»."
},
{
id: "a1_build_15",
tier: 1,
type: "builder",
typeLabel: "Конструктор A1 • Жильё",
prompt: "Собери на испанском: «Я ищу небольшую квартиру рядом с метро»",
words: ["metro", "pequeño", "Busco", "del", "un", "cerca", "piso", "lejos"],
answer: ["Busco", "un", "piso", "pequeño", "cerca", "del", "metro"],
explanation: "«Busco un piso pequeño cerca del metro» — Я ищу небольшую квартиру рядом с метро."
},
{
id: "a1_build_16",
tier: 1,
type: "builder",
typeLabel: "Конструктор A1 • Время",
prompt: "Собери на испанском: «Поезд отправляется в половине десятого»",
words: ["media", "sale", "El", "y", "tren", "las", "a", "nueve", "diez"],
answer: ["El", "tren", "sale", "a", "las", "nueve", "y", "media"],
explanation: "«El tren sale a las nueve y media» — Поезд отправляется в 9:30."
},
{
id: "a1_build_17",
tier: 1,
type: "builder",
typeLabel: "Конструктор A1 • Состояние",
prompt: "Собери на испанском: «Я не голоден, но хочу пить»",
words: ["sed", "hambre", "No", "tengo", "pero", "tengo", "soy", "calor"],
answer: ["No", "tengo", "hambre", "pero", "tengo", "sed"],
explanation: "«No tengo hambre, pero tengo sed» — Я не хочу есть, но хочу пить."
},
{
id: "a1_build_18",
tier: 1,
type: "builder",
typeLabel: "Конструктор A1 • Досуг",
prompt: "Собери на испанском: «Моим друзьям нравится слушать музыку»",
words: ["música", "gusta", "A", "les", "mis", "escuchar", "amigos", "gustan"],
answer: ["A", "mis", "amigos", "les", "gusta", "escuchar", "música"],
explanation: "«A mis amigos les gusta escuchar música» — С инфинитивом «escuchar» глагол «gustar» всегда стоит в единственном числе."
},
{
id: "a1_build_19",
tier: 1,
type: "builder",
typeLabel: "Конструктор A1 • Покупки",
prompt: "Собери на испанском: «Сколько стоят эти чёрные туфли?»",
words: ["negros", "cuestan", "Cuánto", "zapatos", "estos", "cuesta", "este"],
answer: ["Cuánto", "cuestan", "estos", "zapatos", "negros"],
explanation: "«¿Cuánto cuestan estos zapatos negros?» — «Zapatos» во множественном числе требуют «cuestan» и «estos»."
},
{
id: "a1_build_20",
tier: 1,
type: "builder",
typeLabel: "Конструктор A1 • Отпуск",
prompt: "Собери на испанском: «В августе мы едем в Барселону»",
words: ["Barcelona", "vamos", "En", "a", "agosto", "en", "enero", "estamos"],
answer: ["En", "agosto", "vamos", "a", "Barcelona"],
explanation: "«En agosto vamos a Barcelona» — С месяцами используется предлог «en», а с направлением движения — «a»."
},
 /* ========================================================================
     КОНСТРУКТОР ПРЕДЛОЖЕНИЙ (BUILDER): ЕЩЁ 15 НА УРОВЕНЬ A1 (a1_build_21..35)
     ======================================================================== */
  {
    id: "a1_build_21",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Привычки",
    prompt: "Собери на испанском: «Я всегда завтракаю тостами с сыром»",
    words: ["queso", "desayuno", "Siempre", "con", "tostadas", "ceno", "sin"],
    answer: ["Siempre", "desayuno", "tostadas", "con", "queso"],
    explanation: "«Siempre desayuno tostadas con queso» — Я всегда завтракаю тостами с сыром."
  },
  {
    id: "a1_build_22",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Профессии",
    prompt: "Собери на испанском: «Моя мама работает врачом в больнице»",
    words: ["hospital", "trabaja", "Mi", "un", "madre", "en", "es", "médica", "hermana"],
    answer: ["Mi", "madre", "es", "médica", "trabaja", "en", "un", "hospital"],
    explanation: "«Mi madre es médica, trabaja en un hospital» — Перед профессией после «ser» артикль не ставится."
  },
  {
    id: "a1_build_23",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Направление",
    prompt: "Собери на испанском: «Иди прямо и поверни налево»",
    words: ["izquierda", "derecho", "Sigue", "a", "todo", "la", "y", "gira", "derecha"],
    answer: ["Sigue", "todo", "derecho", "y", "gira", "a", "la", "izquierda"],
    explanation: "«Sigue todo derecho y gira a la izquierda» — Иди прямо и поверни налево."
  },
  {
    id: "a1_build_24",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Погода",
    prompt: "Собери на испанском: «Зимой здесь дует сильный ветер»",
    words: ["viento", "aquí", "En", "mucho", "invierno", "hace", "verano", "muy"],
    answer: ["En", "invierno", "aquí", "hace", "mucho", "viento"],
    explanation: "«En invierno aquí hace mucho viento» — Зимой здесь очень ветрено."
  },
  {
    id: "a1_build_25",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Магазин",
    prompt: "Собери на испанском: «Эта куртка слишком дорогая для меня»",
    words: ["mí", "cara", "Esta", "para", "chaqueta", "demasiado", "es", "barata"],
    answer: ["Esta", "chaqueta", "es", "demasiado", "cara", "para", "mí"],
    explanation: "«Esta chaqueta es demasiado cara para mí» — Эта куртка слишком дорогая для меня."
  },
  {
    id: "a1_build_26",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Знакомство",
    prompt: "Собери на испанском: «Я ещё не знаю центр Мадрида»",
    words: ["Madrid", "conozco", "Todavía", "de", "no", "el", "centro", "sé"],
    answer: ["Todavía", "no", "conozco", "el", "centro", "de", "Madrid"],
    explanation: "«Todavía no conozco el centro de Madrid» — Для знакомства с местом используется «conocer»."
  },
  {
    id: "a1_build_27",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Выход",
    prompt: "Собери на испанском: «Не забудь закрыть окна перед выходом»",
    words: ["salir", "cerrar", "No", "de", "olvides", "las", "antes", "ventanas", "puertas"],
    answer: ["No", "olvides", "cerrar", "las", "ventanas", "antes", "de", "salir"],
    explanation: "«No olvides cerrar las ventanas antes de salir» — Не забудь закрыть окна перед тем, как выйти."
  },
  {
    id: "a1_build_28",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Город",
    prompt: "Собери на испанском: «В этом районе есть большой супермаркет»",
    words: ["grande", "un", "En", "hay", "este", "supermercado", "barrio", "está"],
    answer: ["En", "este", "barrio", "hay", "un", "supermercado", "grande"],
    explanation: "«En este barrio hay un supermercado grande» — О наличии объекта впервые сообщает «hay»."
  },
  {
    id: "a1_build_29",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Время",
    prompt: "Собери на испанском: «Музей закрывается в шесть вечера»",
    words: ["tarde", "cierra", "El", "de", "museo", "las", "a", "la", "seis"],
    answer: ["El", "museo", "cierra", "a", "las", "seis", "de", "la", "tarde"],
    explanation: "«El museo cierra a las seis de la tarde» — Музей закрывается в шесть часов вечера."
  },
  {
    id: "a1_build_30",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Встреча",
    prompt: "Собери на испанском: «Во сколько ты приходишь на праздник?»",
    words: ["fiesta", "vienes", "A", "la", "qué", "a", "hora", "vengo"],
    answer: ["A", "qué", "hora", "vienes", "a", "la", "fiesta"],
    explanation: "«¿A qué hora vienes a la fiesta?» — Во сколько ты приходишь на вечеринку?"
  },
  {
    id: "a1_build_31",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Дорога",
    prompt: "Собери на испанском: «Дорога на метро занимает двадцать минут»",
    words: ["metro", "minutos", "Tardo", "en", "veinte", "horas", "Tarda"],
    answer: ["Tardo", "veinte", "minutos", "en", "metro"],
    explanation: "«Tardo veinte minutos en metro» — Глагол «tardar» обозначает затрату времени."
  },
  {
    id: "a1_build_32",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Еда",
    prompt: "Собери на испанском: «На обед я хочу курицу с рисом»",
    words: ["arroz", "quiero", "Para", "con", "comer", "pollo", "cenar", "carne"],
    answer: ["Para", "comer", "quiero", "pollo", "con", "arroz"],
    explanation: "«Para comer quiero pollo con arroz» — На обед я хочу курицу с рисом."
  },
  {
    id: "a1_build_33",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Возраст",
    prompt: "Собери на испанском: «Моему старшему брату двадцать пять лет»",
    words: ["años", "tiene", "Mi", "cinco", "hermano", "veinte", "mayor", "y", "es"],
    answer: ["Mi", "hermano", "mayor", "tiene", "veinte", "y", "cinco", "años"],
    explanation: "«Mi hermano mayor tiene veinte y cinco (veinticinco) años» — Для возраста используется «tener»."
  },
  {
    id: "a1_build_34",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Учёба",
    prompt: "Собери на испанском: «Я учу испанский, потому что хочу путешествовать»",
    words: ["viajar", "porque", "Estudio", "quiero", "español", "para", "puedo"],
    answer: ["Estudio", "español", "porque", "quiero", "viajar"],
    explanation: "«Estudio español porque quiero viajar» — Я изучаю испанский, потому что хочу путешествовать."
  },
  {
    id: "a1_build_35",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Отдых",
    prompt: "Собери на испанском: «После ужина я немного смотрю сериал»",
    words: ["serie", "veo", "Después", "una", "de", "un", "cenar", "rato", "miro"],
    answer: ["Después", "de", "cenar", "veo", "una", "serie", "un", "rato"],
    explanation: "«Después de cenar veo una serie un rato» — После ужина я немного смотрю сериал."
  },

  /* ========================================================================
     TIER 0: A0 — ЕЩЁ 20 ОБЫЧНЫХ ВОПРОСОВ (a0_184 .. a0_203)
     ======================================================================== */
  {
    id: "a0_184",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Как по-испански будет «Двоюродный брат»?",
    options: ["El primo", "El sobrino", "El nieto", "El tío"],
    correct: 0,
    explanation: "«El primo» — двоюродный брат, «la prima» — двоюродная сестра."
  },
  {
    id: "a0_185",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Семья",
    prompt: "Что означает слово «La hija»?",
    options: ["Дочь", "Внучка", "Племянница", "Жена"],
    correct: 0,
    explanation: "«La hija» — дочь, «el hijo» — сын."
  },
  {
    id: "a0_186",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Банан»?",
    options: ["El plátano", "La pera", "La uva", "La sandía"],
    correct: 0,
    explanation: "«El plátano» (в Латинской Америке также «la banana») — банан."
  },
  {
    id: "a0_187",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La leche»?",
    options: ["Молоко", "Сметана", "Масло", "Йогурт"],
    correct: 0,
    explanation: "«La leche» — молоко."
  },
  {
    id: "a0_188",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Птица»?",
    options: ["El pájaro", "El pato", "El conejo", "El mono"],
    correct: 0,
    explanation: "«El pájaro» — птица."
  },
  {
    id: "a0_189",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El caballo»?",
    options: ["Лошадь", "Осёл", "Олень", "Верблюд"],
    correct: 0,
    explanation: "«El caballo» — лошадь."
  },
  {
    id: "a0_190",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански будет «Нос»?",
    options: ["La nariz", "La oreja", "El ojo", "La frente"],
    correct: 0,
    explanation: "«La nariz» — нос."
  },
  {
    id: "a0_191",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «El pie»?",
    options: ["Ступня / нога", "Колено", "Плечо", "Шея"],
    correct: 0,
    explanation: "«El pie» — ступня (во множественном числе — «los pies»)."
  },
  {
    id: "a0_192",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански называется «Дверь»?",
    options: ["La puerta", "El techo", "La pared", "El suelo"],
    correct: 0,
    explanation: "«La puerta» — дверь."
  },
  {
    id: "a0_193",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «El jardín»?",
    options: ["Сад", "Гараж", "Подвал", "Коридор"],
    correct: 0,
    explanation: "«El jardín» — сад."
  },
  {
    id: "a0_194",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански будет «Брюки / штаны»?",
options: ["Los pantalones", "Los calcetines", "Los guantes", "Los bolsillos"],
correct: 0,
explanation: "«Los pantalones» — брюки, штаны."
},
{
id: "a0_195",
tier: 0,
type: "translate",
typeLabel: "База A0 • Цвета",
prompt: "Что означает цвет «Amarillo»?",
options: ["Жёлтый", "Оранжевый", "Красный", "Белый"],
correct: 0,
explanation: "«Amarillo» — жёлтый."
},
{
id: "a0_196",
tier: 0,
type: "translate",
typeLabel: "База A0 • Прилагательные",
prompt: "Как по-испански сказать «Сильный»?",
options: ["Fuerte", "Débil", "Joven", "Pobre"],
correct: 0,
explanation: "«Fuerte» — сильный (а также «громкий» о звуке)."
},
{
id: "a0_197",
tier: 0,
type: "translate",
typeLabel: "База A0 • Прилагательные",
prompt: "Что означает слово «Rico» (о еде и о человеке)?",
options: ["Вкусный / богатый", "Горький / бедный", "Сладкий / добрый", "Солёный / злой"],
correct: 0,
explanation: "С глаголом «ser» («es rico») означает «богатый», а с «estar» («está rico») — «очень вкусный»."
},
{
id: "a0_198",
tier: 0,
type: "translate",
typeLabel: "База A0 • Глаголы",
prompt: "Что означает глагол «Comprar»?",
options: ["Покупать", "Готовить", "Искать", "Платить"],
correct: 0,
explanation: "«Comprar» — покупать."
},
{
id: "a0_199",
tier: 0,
type: "translate",
typeLabel: "База A0 • Глаголы",
prompt: "Как по-испански будет «Спать»?",
options: ["Dormir", "Correr", "Cantar", "Bailar"],
correct: 0,
explanation: "«Dormir» — спать."
},
{
id: "a0_200",
tier: 0,
type: "translate",
typeLabel: "База A0 • Время",
prompt: "Что означает слово «Ayer»?",
options: ["Вчера", "Сегодня", "Завтра", "Всегда"],
correct: 0,
explanation: "«Ayer» — вчера, «hoy» — сегодня, «mañana» — завтра."
},
{
id: "a0_201",
tier: 0,
type: "translate",
typeLabel: "База A0 • Время",
prompt: "Как по-испански сказать «Неделя»?",
options: ["La semana", "El mes", "El año", "La hora"],
correct: 0,
explanation: "«La semana» — неделя."
},
{
id: "a0_202",
tier: 0,
type: "grammar",
typeLabel: "Грамматика A0 • Глагол Hablar",
prompt: "Вставь правильную форму глагола «hablar» («Она говорит по-испански»):",
subprompt: "Ella _____ español muy bien.",
options: ["habla", "hablo", "hablas", "hablan"],
correct: 0,
explanation: "Для 3-го лица единственного числа («él / ella / usted») глаголы на «-ar» оканчиваются на «-a»: «habla»."
},
{
id: "a0_203",
tier: 0,
type: "grammar",
typeLabel: "Грамматика A0 • Глагол Comer",
prompt: "Вставь правильную форму глагола «comer» («Вы (друзья) едите фрукты»):",
subprompt: "Vosotros _____ mucha fruta.",
options: ["coméis", "comemos", "comen", "comes"],
correct: 0,
explanation: "Для местоимения «vosotros» (вы, мн. ч.) глаголы на «-er» имеют окончание «-éis»: «coméis»."
},
/* ========================================================================
     КОНСТРУКТОР ПРЕДЛОЖЕНИЙ (BUILDER): УРОВЕНЬ A2–B1 (30 шт.: b1_build_1 .. b1_build_30)
     ======================================================================== */
  {
    id: "b1_build_1",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Прошлое",
    prompt: "Собери на испанском: «Вчера мы ходили в кино с нашими друзьями»",
    words: ["cine", "fuimos", "Ayer", "con", "al", "amigos", "nuestros", "íbamos", "en"],
    answer: ["Ayer", "fuimos", "al", "cine", "con", "nuestros", "amigos"],
    explanation: "«Ayer fuimos al cine con nuestros amigos» — однократное действие в прошлом (Pretérito Indefinido: «fuimos»)."
  },
  {
    id: "b1_build_2",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Imperfecto",
    prompt: "Собери на испанском: «Когда я был ребёнком, я жил в деревне»",
    words: ["vivía", "niño", "Cuando", "pueblo", "era", "el", "en", "fui", "ciudad"],
    answer: ["Cuando", "era", "niño", "vivía", "en", "el", "pueblo"],
    explanation: "«Cuando era niño vivía en el pueblo» — длительное состояние и привычка в прошлом передаются через Imperfecto."
  },
  {
    id: "b1_build_3",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Pretérito Perfecto",
    prompt: "Собери на испанском: «Сегодня утром я уже выпил кофе»",
    words: ["tomado", "Esta", "café", "he", "mañana", "ya", "tomé", "has"],
    answer: ["Esta", "mañana", "ya", "he", "tomado", "café"],
    explanation: "«Esta mañana ya he tomado café» — с маркером «esta mañana» используется Pretérito Perfecto («he tomado»)."
  },
  {
    id: "b1_build_4",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Pluscuamperfecto",
    prompt: "Собери на испанском: «Когда мы пришли, поезд уже ушёл»",
    words: ["tren", "había", "Cuando", "salido", "llegamos", "ya", "el", "ha", "salió"],
    answer: ["Cuando", "llegamos", "el", "tren", "ya", "había", "salido"],
    explanation: "«Cuando llegamos el tren ya había salido» — действие до другого события в прошлом (Pluscuamperfecto: «había salido»)."
  },
  {
    id: "b1_build_5",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Por vs Para",
    prompt: "Собери на испанском: «Я учу испанский, чтобы путешествовать по миру»",
    words: ["viajar", "mundo", "Estudio", "por", "español", "el", "para", "a", "en"],
    answer: ["Estudio", "español", "para", "viajar", "por", "el", "mundo"],
    explanation: "«Estudio español para viajar por el mundo» — цель выражается через «para», а перемещение по пространству — через «por»."
  },
  {
    id: "b1_build_6",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Por vs Para",
    prompt: "Собери на испанском: «Я купил этот подарок для моей сестры»",
    words: ["regalo", "mi", "Compré", "para", "hermana", "este", "por", "esta"],
    answer: ["Compré", "este", "regalo", "para", "mi", "hermana"],
    explanation: "«Compré este regalo para mi hermana» — для указания получателя всегда используется предлог «para»."
  },
  {
    id: "b1_build_7",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Перифразы",
    prompt: "Собери на испанском: «Мы только что вернулись из Испании»",
    words: ["volver", "de", "España", "Acabamos", "de", "a", "Volvemos"],
    answer: ["Acabamos", "de", "volver", "de", "España"],
    explanation: "«Acabamos de volver de España» — конструкция «acabar de + инфинитив» означает «только что сделать что-то»."
  },
  {
    id: "b1_build_8",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Перифразы",
    prompt: "Собери на испанском: «Карлос снова опоздал на работу»",
    words: ["llegar", "tarde", "Carlos", "al", "volvió", "trabajo", "a", "de", "temprano"],
    answer: ["Carlos", "volvió", "a", "llegar", "tarde", "al", "trabajo"],
    explanation: "«Carlos volvió a llegar tarde al trabajo» — конструкция «volver a + инфинитив» передаёт повтор действия («снова»)."
  },
  {
    id: "b1_build_9",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Перифразы",
    prompt: "Собери на испанском: «Я бросил курить два года назад»",
    words: ["fumar", "dos", "Dejé", "años", "de", "hace", "desde", "a"],
    answer: ["Dejé", "de", "fumar", "hace", "dos", "años"],
    explanation: "«Dejé de fumar hace dos años» — «dejar de + инфинитив» означает прекратить действие, а «hace + время» переводится как «назад»."
  },
  {
    id: "b1_build_10",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Длительность",
    prompt: "Собери на испанском: «Она учит испанский уже три года»",
    words: ["años", "estudiando", "Lleva", "español", "tres", "estudia", "Tiene"],
    answer: ["Lleva", "tres", "años", "estudiando", "español"],
    explanation: "«Lleva tres años estudiando español» — для действия, начатого в прошлом и продолжающегося сейчас, используется «llevar + время + герундий»."
  },
  {
    id: "b1_build_11",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Надеюсь, что у тебя будет хорошее путешествие»",
    words: ["tengas", "viaje", "Espero", "un", "que", "buen", "tienes", "bueno"],
    answer: ["Espero", "que", "tengas", "un", "buen", "viaje"],
    explanation: "«Espero que tengas un buen viaje» — после «espero que» при смене субъекта нужен Subjuntivo («tengas»)."
  },
  {
    id: "b1_build_12",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Важно, чтобы вы практиковались каждый день»",
    words: ["practiquéis", "días", "Es", "todos", "importante", "los", "que", "practicáis", "cada"],
    answer: ["Es", "importante", "que", "practiquéis", "todos", "los", "días"],
    explanation: "«Es importante que practiquéis todos los días» — безличная оценка требует Subjuntivo («practiquéis»)."
  },
  {
    id: "b1_build_13",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Я не думаю, что завтра пойдёт дождь»",
    words: ["llueva", "No", "mañana", "creo", "que", "llueve", "ayer"],
    answer: ["No", "creo", "que", "llueva", "mañana"],
    explanation: "«No creo que llueva mañana» — после отрицания мнения («no creo que») ставится Subjuntivo («llueva»)."
  },
  {
    id: "b1_build_14",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Я говорю медленно, чтобы ты меня понял»",
    words: ["para", "entiendas", "Hablo", "me", "despacio", "que", "entiendes", "por"],
    answer: ["Hablo", "despacio", "para", "que", "me", "entiendas"],
    explanation: "«Hablo despacio para que me entiendas» — союз цели «para que» при смене лица требует Subjuntivo."
  },
  {
    id: "b1_build_15",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Когда я приеду в Мадрид, я тебе позвоню»",
    words: ["Madrid", "llamaré", "Cuando", "a", "llegue", "te", "llegaré", "en"],
    answer: ["Cuando", "llegue", "a", "Madrid", "te", "llamaré"],
    explanation: "«Cuando llegue a Madrid te llamaré» — после «cuando» о будущем действии ставится Subjuntivo («llegue»)."
  },
  {
    id: "b1_build_16",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Condicional",
    prompt: "Собери на испанском: «На твоём месте я бы поговорил с начальником»",
    words: ["hablaría", "tú", "Yo", "jefe", "que", "el", "con", "hablo", "a"],
    answer: ["Yo", "que", "tú", "hablaría", "con", "el", "jefe"],
    explanation: "«Yo que tú hablaría con el jefe» — совет в условном наклонении («hablaría»)."
  },
  {
    id: "b1_build_17",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Condicional",
    prompt: "Собери на испанском: «Я бы хотел забронировать столик на двоих»",
    words: ["mesa", "dos", "Querría", "para", "reservar", "una", "por", "un"],
    answer: ["Querría", "reservar", "una", "mesa", "para", "dos"],
    explanation: "«Querría reservar una mesa para dos» — вежливая просьба через Condicional Simple."
  },
  {
    id: "b1_build_18",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Futuro Simple",
    prompt: "Собери на испанском: «В следующем году у нас будет больше времени»",
    words: ["tendremos", "tiempo", "El", "más", "próximo", "año", "tuvimos", "menos"],
    answer: ["El", "próximo", "año", "tendremos", "más", "tiempo"],
    explanation: "«El próximo año tendremos más tiempo» — неправильная основа будущего времени «tendr-» от глагола «tener»."
  },
  {
    id: "b1_build_19",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Местоимения",
    prompt: "Собери на испанском: «Я подарю её (книгу) своему брату»",
    words: ["regalaré", "hermano", "Se", "mi", "la", "a", "Le", "lo"],
    answer: ["Se", "la", "regalaré", "a", "mi", "hermano"],
    explanation: "«Se la regalaré a mi hermano» — перед «lo/la» местоимение «le» всегда меняется на «se»."
  },
  {
    id: "b1_build_20",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Условие",
    prompt: "Собери на испанском: «Если будет хорошая погода, мы пойдём на пляж»",
    words: ["tiempo", "playa", "Si", "iremos", "hace", "la", "buen", "a", "haga", "en"],
    answer: ["Si", "hace", "buen", "tiempo", "iremos", "a", "la", "playa"],
    explanation: "«Si hace buen tiempo iremos a la playa» — в реальном условии после «si» используется Presente de Indicativo («hace»)."
  },
  {
    id: "b1_build_21",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Ser vs Estar",
    prompt: "Собери на испанском: «Этот банан всё ещё очень зелёный (неспелый)»",
    words: ["todavía", "verde", "Este", "muy", "plátano", "está", "es", "esta"],
    answer: ["Este", "plátano", "todavía", "está", "muy", "verde"],
    explanation: "«Este plátano todavía está muy verde» — значение «неспелый» (временное состояние) требует глагола «estar»."
  },
  {
    id: "b1_build_22",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Imperativo",
    prompt: "Собери на испанском: «Скажи мне всю правду прямо сейчас»",
    words: ["verdad", "mismo", "Dime", "la", "toda", "ahora", "Digas", "todo"],
    answer: ["Dime", "toda", "la", "verdad", "ahora", "mismo"],
    explanation: "«Dime toda la verdad ahora mismo» — в утвердительном приказе на «tú» местоимение присоединяется к глаголу («di + me»)."
  },
  {
    id: "b1_build_23",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Отрицательный Imperativo",
    prompt: "Собери на испанском: «Не выходи из дома без пальто»",
    words: ["casa", "abrigo", "No", "sin", "salgas", "de", "sal", "con"],
    answer: ["No", "salgas", "de", "casa", "sin", "abrigo"],
    explanation: "«No salgas de casa sin abrigo» — отрицательное повелительное наклонение строится через Subjuntivo («no salgas»)."
  },
  {
    id: "b1_build_24",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Устойчивые фразы",
    prompt: "Собери на испанском: «Я понял, что забыл ключи»",
    words: ["cuenta", "olvidé", "Me", "que", "di", "llaves", "de", "las", "daba", "los"],
    answer: ["Me", "di", "cuenta", "de", "que", "olvidé", "las", "llaves"],
    explanation: "«Me di cuenta de que olvidé las llaves» — оборот «darse cuenta de que» означает «осознать / понять, что»."
  },
  {
    id: "b1_build_25",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Уступка",
    prompt: "Собери на испанском: «Хотя фильм был длинным, мне он очень понравился»",
    words: ["película", "larga", "Aunque", "gustó", "la", "mucho", "era", "me", "estaba", "muy"],
    answer: ["Aunque", "la", "película", "era", "larga", "me", "gustó", "mucho"],
    explanation: "«Aunque la película era larga me gustó mucho» — реальный факт после «aunque» ставится в изъявительном наклонении."
  },
  {
    id: "b1_build_26",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Союзы времени",
    prompt: "Собери на испанском: «Позвони мне, как только приедешь в отель»",
    words: ["cuanto", "hotel", "Llámame", "al", "en", "llegues", "llegas", "del"],
    answer: ["Llámame", "en", "cuanto", "llegues", "al", "hotel"],
    explanation: "«Llámame en cuanto llegues al hotel» — после «en cuanto» при отсылке к будущему нужен Subjuntivo («llegues»)."
  },
  {
    id: "b1_build_27",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Пожелания",
    prompt: "Собери на испанском: «Хоть бы завтра не пошёл дождь на экскурсии»",
    words: ["llueva", "excursión", "Ojalá", "en", "no", "la", "mañana", "llueve", "ayer"],
    answer: ["Ojalá", "no", "llueva", "mañana", "en", "la", "excursión"],
    explanation: "«Ojalá no llueva mañana en la excursión» — после «ojalá» всегда используется Subjuntivo."
  },
  {
    id: "b1_build_28",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Предложные глаголы",
    prompt: "Собери на испанском: «Я всегда мечтал жить рядом с морем»",
    words: ["soñado", "vivir", "Siempre", "mar", "he", "cerca", "con", "del", "de", "lejos"],
    answer: ["Siempre", "he", "soñado", "con", "vivir", "cerca", "del", "mar"],
    explanation: "«Siempre he soñado con vivir cerca del mar» — глагол «soñar» в значении «мечтать о» требует предлога «con»."
  },
  {
    id: "b1_build_29",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Предложные глаголы",
    prompt: "Собери на испанском: «Ты помнишь имя нашего учителя?»",
    words: ["nombre", "profesor", "Te", "nuestro", "acuerdas", "de", "del", "al", "nuestra"],
    answer: ["Te", "acuerdas", "del", "nombre", "de", "nuestro", "profesor"],
    explanation: "«¿Te acuerdas del nombre de nuestro profesor?» — глагол «acordarse» требует предлог «de» («de + el» = «del»)."
  },
  {
    id: "b1_build_30",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Косвенная речь",
    prompt: "Собери на испанском: «Он сказал мне, что придёт на встречу завтра»",
    words: ["vendría", "reunión", "Me", "mañana", "dijo", "la", "que", "a", "dice", "en"],
    answer: ["Me", "dijo", "que", "vendría", "a", "la", "reunión", "mañana"],
    explanation: "«Me dijo que vendría a la reunión mañana» — при передаче будущих планов в косвенной речи в прошлом используется Condicional («vendría»)."
  },

  /* ========================================================================
     TIER 0: A0 — НОВЫЕ 25 ЗАДАНИЙ ОБЫЧНОГО ТИПА (a0_204 .. a0_228)
     ======================================================================== */
  {
    id: "a0_204",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет число «11»?",
    options: ["Once", "Doce", "Quince", "Veinte"],
    correct: 0,
    explanation: "«Once» — одиннадцать (11)."
  },
  {
    id: "a0_205",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Doce»?",
    options: ["12", "10", "14", "20"],
    correct: 0,
    explanation: "«Doce» — двенадцать (12)."
  },
  {
    id: "a0_206",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански сказать «20»?",
    options: ["Veinte", "Diez", "Quince", "Treinta"],
    correct: 0,
    explanation: "«Veinte» — двадцать (20)."
  },
  {
    id: "a0_207",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Времена года",
    prompt: "Какое время года по-испански называется «La primavera»?",
    options: ["Весна", "Осень", "Зима", "Лето"],
    correct: 0,
    explanation: "«La primavera» — весна."
  },
  {
    id: "a0_208",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Времена года",
    prompt: "Как по-испански будет «Осень»?",
    options: ["El otoño", "El verano", "El invierno", "La primavera"],
    correct: 0,
    explanation: "«El otoño» — осень."
  },
  {
    id: "a0_209",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El tomate»?",
    options: ["Помидор", "Огурец", "Лук", "Морковь"],
    correct: 0,
    explanation: "«El tomate» — помидор / томат."
  },
  {
    id: "a0_210",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Мороженое»?",
    options: ["El helado", "El pastel", "El chocolate", "La galleta"],
    correct: 0,
    explanation: "«El helado» — мороженое."
  },
  {
    id: "a0_211",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La sal»?",
    options: ["Соль", "Сахар", "Перец", "Масло"],
    correct: 0,
    explanation: "«La sal» — соль (женского рода)."
  },
  {
    id: "a0_212",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Кролик»?",
    options: ["El conejo", "El cerdo", "La oveja", "El león"],
    correct: 0,
    explanation: "«El conejo» — кролик."
  },
  {
    id: "a0_213",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El león»?",
    options: ["Лев", "Тигр", "Слон", "Обезьяна"],
    correct: 0,
    explanation: "«El león» — лев."
  },
  {
    id: "a0_214",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански называется «Юбка»?",
    options: ["La falda", "La camisa", "La gorra", "La corbata"],
    correct: 0,
    explanation: "«La falda» — юбка."
  },
  {
    id: "a0_215",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «Las gafas»?",
    options: ["Очки", "Перчатки", "Носки", "Сапоги"],
    correct: 0,
    explanation: "«Las gafas» (в Испании) — очки."
  },
  {
    id: "a0_216",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански сказать «Ухо»?",
    options: ["La oreja", "La boca", "La nariz", "La frente"],
    correct: 0,
    explanation: "«La oreja» — ухо."
  },
  {
    id: "a0_217",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «El brazo»?",
    options: ["Рука (от плеча до кисти)", "Нога", "Спина", "Шея"],
    correct: 0,
    explanation: "«El brazo» — рука целиком, а «la mano» — кисть руки."
  },
  {
    id: "a0_218",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «El espejo»?",
    options: ["Зеркало", "Шкаф", "Ковёр", "Подушка"],
    correct: 0,
    explanation: "«El espejo» — зеркало."
  },
  {
    id: "a0_219",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански будет «Гора»?",
    options: ["La montaña", "El río", "El bosque", "La isla"],
    correct: 0,
    explanation: "«La montaña» — гора."
  },
  {
    id: "a0_220",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «El río»?",
    options: ["Река", "Озеро", "Море", "Водопад"],
    correct: 0,
    explanation: "«El río» — река."
  },
  {
    id: "a0_221",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Местоимения",
    prompt: "Как переводится местоимение «Ellas»?",
    options: ["Они (только женщины)", "Мы", "Она", "Вы"],
    correct: 0,
    explanation: "«Ellas» — они (женский род), «ellos» — они (мужской или смешанный род)."
  },
  {
    id: "a0_222",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Leer",
    prompt: "Вставь правильную форму глагола «leer» («Я читаю газету»):",
    subprompt: "Yo _____ el periódico por la mañana.",
    options: ["leo", "lees", "lee", "leemos"],
    correct: 0,
    explanation: "Для местоимения «yo» форма глагола «leer» — «leo»."
  },
  {
    id: "a0_223",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Beber",
    prompt: "Вставь правильную форму глагола «beber» («Ты пьёшь молоко?»):",
    subprompt: "¿Tú _____ leche todos los días?",
    options: ["bebes", "bebo", "bebe", "bebemos"],
    correct: 0,
    explanation: "Для «tú» глаголы на «-er» имеют окончание «-es»: «bebes»."
  },
  {
    id: "a0_224",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Род существительных",
    prompt: "Выбери правильный артикль для слова «agua» (вода в ед. числе):",
    subprompt: "_____ agua fría está en la mesa.",
    options: ["El", "La", "Los", "Unas"],
    correct: 0,
    explanation: "Хотя «agua» женского рода («agua fría»), перед ударным «a-» в единственном числе ставится артикль «el» («el agua»)."
  },
  {
    id: "a0_225",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Множественное число",
    prompt: "Как будет «города» во множественном числе от «la ciudad»?",
    options: ["Las ciudades", "Los ciudades", "Las ciudads", "Las ciudad"],
    correct: 0,
    explanation: "К существительным на согласную во множественном числе добавляется окончание «-es»: «las ciudades»."
  },
  {
    id: "a0_226",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Предметы",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="42" cy="45" r="14" fill="none" stroke="#fbbf24" stroke-width="5"/>
            <line x1="56" y1="45" x2="104" y2="45" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
            <line x1="86" y1="45" x2="86" y2="57" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
            <line x1="98" y1="45" x2="98" y2="60" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La llave", "La puerta", "El reloj", "El teléfono"],
    correct: 0,
    explanation: "На картинке ключ — «la llave»."
  },
  {
    id: "a0_227",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Еда",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="50,44 80,44 65,80" fill="#d97706"/>
            <circle cx="65" cy="34" r="15" fill="#fb7185"/>
            <circle cx="56" cy="40" r="10" fill="#fde047"/>
            <circle cx="74" cy="40" r="10" fill="#f8fafc"/>
          </svg>`,
    prompt: "Как по-испански называется этот десерт?",
    options: ["El helado", "El queso", "El pan", "La sopa"],
    correct: 0,
    explanation: "Рожок мороженого — «el helado»."
  },
  {
    id: "a0_228",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Часы",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="55" y2="26" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="20" stroke="#f1f5f9" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las doce", "Son las seis", "Son las tres", "Son las nueve"],
    correct: 0,
    explanation: "Обе стрелки показывают на 12 — «Son las doce»."
  },

  /* ========================================================================
     TIER 1: A1 — НОВЫЕ 25 ЗАДАНИЙ ОБЫЧНОГО ТИПА (a1_144 .. a1_168)
     ======================================================================== */
  {
    id: "a1_144",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Какой месяц по-испански называется «Febrero»?",
    options: ["Февраль", "Январь", "Март", "Апрель"],
    correct: 0,
    explanation: "«Febrero» — февраль."
  },
  {
    id: "a1_145",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Как по-испански будет «Декабрь»?",
    options: ["Diciembre", "Noviembre", "Octubre", "Septiembre"],
    correct: 0,
    explanation: "«Diciembre» — декабрь."
  },
  {
    id: "a1_146",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Какое число означает слово «Cuarenta»?",
    options: ["40", "14", "50", "400"],
    correct: 0,
    explanation: "«Cuarenta» — сорок (40), а четырнадцать — «catorce»."
  },
  {
    id: "a1_147",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Как по-испански сказать «1000»?",
    options: ["Mil", "Cien", "Ciento", "Millón"],
    correct: 0,
    explanation: "«Mil» — тысяча (1000)."
  },
  {
    id: "a1_148",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Отель",
    prompt: "Что означает фраза «Quiero reservar una habitación doble»?",
    options: [
      "Я хочу забронировать двухместный номер",
      "Я хочу оплатить счёт за номер",
      "Где находится лифт в отеле?",
      "Мне нужен ключ от комнаты"
    ],
    correct: 0,
    explanation: "«Reservar una habitación doble» — забронировать двухместный номер."
  },
  {
    id: "a1_149",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Путешествия",
    prompt: "Что означает слово «La maleta»?",
    options: ["Чемодан", "Билет", "Паспорт", "Остановка"],
    correct: 0,
    explanation: "«La maleta» — чемодан (или «el equipaje» — багаж)."
  },
  {
    id: "a1_150",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Путешествия",
    prompt: "Как в кассе попросить «Билет туда и обратно»?",
    options: [
      "Un billete de ida y vuelta",
      "Un billete solo de ida",
      "Una mesa para dos personas",
      "Un mapa del centro"
    ],
    correct: 0,
    explanation: "«De ida y vuelta» — туда и обратно; «solo de ida» — только в одну сторону."
  },
  {
    id: "a1_151",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Ресторан",
    prompt: "Что такое «El postre» в меню ресторана?",
    options: ["Десерт", "Закуска", "Главное блюдо", "Напиток"],
    correct: 0,
    explanation: "«El postre» — десерт."
  },
  {
    id: "a1_152",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Погода",
    prompt: "Что означает выражение «Hay niebla»?",
    options: ["Туманно (стоит туман)", "Идёт град", "Очень душно", "Светит яркое солнце"],
    correct: 0,
    explanation: "«La niebla» — туман, «hay niebla» — на улице туман."
  },
  {
    id: "a1_153",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Погода",
    prompt: "Как перевести фразу «Hay tormenta»?",
    options: ["Гроза (идёт буря)", "Солнечно", "Морозно", "Безветренно"],
    correct: 0,
    explanation: "«La tormenta» — гроза / буря."
  },
  {
    id: "a1_154",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Распорядок",
    prompt: "Что означает глагол «Desayunar»?",
    options: ["Завтракать", "Обедать", "Ужинать", "Просыпаться"],
    correct: 0,
    explanation: "«Desayunar» — завтракать, «almorzar / comer» — обедать, «cenar» — ужинать."
  },
  {
    id: "a1_155",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Покупки",
    prompt: "Что означает табличка «Abierto» на двери магазина?",
    options: ["Открыто", "Закрыто", "Распродажа", "Вход"],
    correct: 0,
    explanation: "«Abierto» — открыто, «cerrado» — закрыто."
  },
  {
    id: "a1_156",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Ver",
    prompt: "Выбери правильную форму глагола «ver» (видеть) для «yo»:",
    subprompt: "Desde mi ventana _____ el parque.",
    options: ["veo", "vo", "ves", "vemos"],
    correct: 0,
    explanation: "У глагола «ver» для «yo» особая форма «veo»."
  },
  {
    id: "a1_157",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Dar",
    prompt: "Выбери правильную форму глагола «dar» (давать) для «yo»:",
    subprompt: "Siempre _____ un paseo por la tarde.",
    options: ["doy", "do", "das", "damos"],
    correct: 0,
    explanation: "Форма 1-го лица ед. числа от «dar» — «doy» («dar un paseo» — гулять)."
  },
  {
    id: "a1_158",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Jugar",
    prompt: "Выбери правильную форму глагола «jugar» (играть):",
    subprompt: "Los niños _____ al fútbol en el jardín.",
    options: ["juegan", "jugan", "juega", "jugamos"],
    correct: 0,
    explanation: "В глаголе «jugar» корневая «u» переходит в «ue»: «ellos juegan»."
  },
  {
    id: "a1_159",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Empezar",
    prompt: "Выбери правильную форму глагола «empezar» (начинаться):",
    subprompt: "La película _____ a las ocho.",
    options: ["empieza", "empeza", "empiezan", "empiezo"],
    correct: 0,
    explanation: "В глаголе «empezar» корневая «e» переходит в «ie»: «la película empieza»."
  },
  {
    id: "a1_160",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Pedir",
    prompt: "Выбери правильную форму глагола «pedir» (просить / заказывать):",
    subprompt: "Yo siempre _____ una ensalada.",
    options: ["pido", "pedo", "pides", "pedimos"],
    correct: 0,
    explanation: "В глаголе «pedir» корневая «e» меняется на «i»: «yo pido»."
  },
  {
    id: "a1_161",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Притяжательные",
    prompt: "Вставь правильное притяжательное слово («наша»):",
    subprompt: "_____ casa está cerca del centro.",
    options: ["Nuestra", "Nuestro", "Nuestros", "Mi"],
    correct: 0,
    explanation: "«Casa» — женский род ед. числа, поэтому нужна форма «Nuestra»."
  },
  {
    id: "a1_162",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Указательные",
    prompt: "Как сказать «тот дом (далеко)» (casa — женский род)?",
    subprompt: "_____ casa blanca es de mis abuelos.",
    options: ["Aquella", "Aquel", "Esta", "Ese"],
    correct: 0,
    explanation: "Для далёких объектов женского рода ед. числа используется «aquella»."
  },
  {
    id: "a1_163",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Сравнение",
    prompt: "Вставь правильное слово в сравнении равенства («Он такой же высокий, как брат»):",
    subprompt: "Carlos es _____ alto como su hermano.",
    options: ["tan", "tanto", "más", "muy"],
    correct: 0,
    explanation: "Перед прилагательным в сравнении «такой же ... как» используется неизменяемое «tan ... como»."
  },
  {
    id: "a1_164",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Неправильные сравнения",
    prompt: "Как сказать «лучше» в сравнении («Этот фильм лучше, чем тот»)?",
    subprompt: "Esta película es _____ que la otra.",
    options: ["mejor", "más bueno", "peor", "mayor"],
    correct: 0,
    explanation: "Вместо «más bueno» в испанском используется особая форма «mejor» (лучше)."
  },
  {
    id: "a1_165",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Возвратные глаголы",
    prompt: "Выбери правильную форму глагола «ducharse» (принимать душ):",
    subprompt: "Por las mañanas nosotros _____ antes de desayunar.",
    options: ["nos duchamos", "se duchan", "me ducho", "os ducháis"],
    correct: 0,
    explanation: "Для местоимения «nosotros» возвратная частица — «nos»: «nos duchamos»."
  },
  {
    id: "a1_166",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Время",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="71" y2="66" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="75" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las cuatro y media", "Son las seis y cuarto", "Son las tres en punto", "Son las cinco menos cuarto"],
    correct: 0,
    explanation: "Часовая стрелка между 4 и 5, минутная на 6 — «Son las cuatro y media» (4:30)."
  },
  {
    id: "a1_167",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Путешествия",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M50 25 V16 H80 V25" fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
            <rect x="30" y="25" width="70" height="48" rx="8" fill="#0284c7"/>
            <line x1="48" y1="25" x2="48" y2="73" stroke="#38bdf8" stroke-width="3"/>
            <line x1="82" y1="25" x2="82" y2="73" stroke="#38bdf8" stroke-width="3"/>
            <circle cx="42" cy="77" r="4" fill="#0f172a"/>
            <circle cx="88" cy="77" r="4" fill="#0f172a"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La maleta", "El billete", "El pasaporte", "La tienda"],
    correct: 0,
    explanation: "«La maleta» — дорожный чемодан."
  },
  {
    id: "a1_168",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Знак",
    svg: `<svg width="120" height="96" viewBox="0 0 120 96">
            <rect x="12" y="26" width="96" height="44" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="3"/>
            <text x="60" y="54" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">CERRADO</text>
          </svg>`,
    prompt: "Что означает табличка «CERRADO» на двери?",
    options: ["Закрыто", "Открыто", "Вход", "Скидки"],
    correct: 0,
    explanation: "«Cerrado» — закрыто, «abierto» — открыто."
  },
/* ========================================================================
     TIER 0: A0 — ЕЩЁ 25 НОВЫХ ЗАДАНИЙ (a0_229 .. a0_253)
     ======================================================================== */
  {
    id: "a0_229",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет число «13»?",
    options: ["Trece", "Doce", "Catorce", "Treinta"],
    correct: 0,
    explanation: "«Trece» — тринадцать (13)."
  },
  {
    id: "a0_230",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Quince»?",
    options: ["15", "5", "14", "50"],
    correct: 0,
    explanation: "«Quince» — пятнадцать (15)."
  },
  {
    id: "a0_231",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Салат»?",
    options: ["La ensalada", "La sopa", "La fruta", "La carne"],
    correct: 0,
    explanation: "«La ensalada» — салат."
  },
  {
    id: "a0_232",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Что означает слово «La pera»?",
    options: ["Груша", "Вишня", "Слива", "Дыня"],
    correct: 0,
    explanation: "«La pera» — груша."
  },
  {
    id: "a0_233",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански будет «Печенье»?",
    options: ["La galleta", "El pastel", "El pan", "El queso"],
    correct: 0,
    explanation: "«La galleta» — печенье."
  },
  {
    id: "a0_234",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Напитки",
    prompt: "Что означает слово «La cerveza»?",
    options: ["Пиво", "Вино", "Сок", "Лимонад"],
    correct: 0,
    explanation: "«La cerveza» — пиво."
  },
  {
    id: "a0_235",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Свинья / поросёнок»?",
    options: ["El cerdo", "La cabra", "El zorro", "El lobo"],
    correct: 0,
    explanation: "«El cerdo» — свинья (а также свинина в меню)."
  },
  {
    id: "a0_236",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El pato»?",
    options: ["Утка", "Гусь", "Лебедь", "Орёл"],
    correct: 0,
    explanation: "«El pato» — утка."
  },
  {
    id: "a0_237",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Овца»?",
    options: ["La oveja", "La vaca", "La rata", "La rana"],
    correct: 0,
    explanation: "«La oveja» — овца."
  },
  {
    id: "a0_238",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «El abrigo»?",
    options: ["Пальто", "Свитер", "Шарф", "Кепка"],
    correct: 0,
    explanation: "«El abrigo» — тёплое пальто."
  },
  {
    id: "a0_239",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански будут «Носки»?",
    options: ["Los calcetines", "Los guantes", "Los zapatos", "Los pantalones"],
    correct: 0,
    explanation: "«Los calcetines» — носки."
  },
  {
    id: "a0_240",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански будет «Зуб»?",
    options: ["El diente", "El dedo", "El cuello", "El hombro"],
    correct: 0,
    explanation: "«El diente» — зуб (мн. ч. — «los dientes»)."
  },
  {
    id: "a0_241",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «La pierna»?",
    options: ["Нога (от бедра до стопы)", "Спина", "Колено", "Ладонь"],
    correct: 0,
    explanation: "«La pierna» — нога целиком, «el pie» — ступня."
  },
  {
    id: "a0_242",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански называется «Диван»?",
    options: ["El sofá", "El sillón", "La cama", "La mesa"],
    correct: 0,
    explanation: "«El sofá» — диван."
  },
  {
    id: "a0_243",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «La lámpara»?",
    options: ["Лампа / светильник", "Штора", "Полка", "Картина"],
    correct: 0,
    explanation: "«La lámpara» — лампа."
  },
  {
    id: "a0_244",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански сказать «Лес»?",
    options: ["El bosque", "El campo", "El desierto", "El valle"],
    correct: 0,
    explanation: "«El bosque» — лес."
  },
  {
    id: "a0_245",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «La isla»?",
    options: ["Остров", "Берег", "Озеро", "Волна"],
    correct: 0,
    explanation: "«La isla» — остров (буква s читается)."
  },
  {
    id: "a0_246",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Транспорт",
    prompt: "Как по-испански будет «Корабль / лодка»?",
    options: ["El barco", "El tren", "El metro", "El camión"],
    correct: 0,
    explanation: "«El barco» — корабль или лодка."
  },
  {
    id: "a0_247",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Alto» (о человеке или здании)?",
    options: ["Высокий", "Низкий", "Широкий", "Тонкий"],
    correct: 0,
    explanation: "«Alto» — высокий, «bajo» — низкий."
  },
  {
    id: "a0_248",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Correr»?",
    options: ["Бегать", "Прыгать", "Плавать", "Гулять"],
    correct: 0,
    explanation: "«Correr» — бегать / бежать."
  },
  {
    id: "a0_249",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Местоимения",
    prompt: "Как по-испански будет местоимение «Она»?",
    options: ["Ella", "Él", "Usted", "Ellas"],
    correct: 0,
    explanation: "«Ella» (читается «эйя») — она."
  },
  {
    id: "a0_250",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Tener",
    prompt: "Вставь правильную форму глагола «tener» («У тебя есть велосипед?»):",
    subprompt: "¿Tú _____ una bicicleta?",
    options: ["tienes", "tengo", "tiene", "tenemos"],
    correct: 0,
    explanation: "Для «tú» глагол «tener» имеет форму «tienes»."
  },
  {
    id: "a0_251",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Vivir",
    prompt: "Вставь правильную форму глагола «vivir» («Я живу здесь»):",
    subprompt: "Yo _____ en esta calle.",
    options: ["vivo", "vives", "vive", "vivimos"],
    correct: 0,
    explanation: "Для местоимения «yo» в настоящем времени глаголы заканчиваются на «-o»: «yo vivo»."
  },
  {
    id: "a0_252",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Исключения рода",
    prompt: "Выбери правильный артикль для слова «mapa» (карта города — исключение!):",
    subprompt: "Necesito _____ mapa de Barcelona.",
    options: ["el", "la", "las", "unas"],
    correct: 0,
    explanation: "Слово «el mapa» мужского рода, несмотря на окончание «-a»."
  },
  {
    id: "a0_253",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Транспорт",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="20" y="30" width="90" height="32" rx="6" fill="#38bdf8"/>
            <rect x="28" y="38" width="16" height="12" rx="2" fill="#e0f2fe"/>
            <rect x="50" y="38" width="16" height="12" rx="2" fill="#e0f2fe"/>
            <rect x="72" y="38" width="16" height="12" rx="2" fill="#e0f2fe"/>
            <polygon points="94,30 110,44 110,62 94,62" fill="#0284c7"/>
            <circle cx="36" cy="66" r="6" fill="#0f172a"/>
            <circle cx="62" cy="66" r="6" fill="#0f172a"/>
            <circle cx="92" cy="66" r="6" fill="#0f172a"/>
            <line x1="12" y1="73" x2="118" y2="73" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
          </svg>`,
    prompt: "Какой транспорт изображён на картинке?",
    options: ["El tren", "El barco", "El avión", "La bicicleta"],
    correct: 0,
    explanation: "На рельсах едет поезд — «el tren»."
  },

  /* ========================================================================
     TIER 1: A1 — ЕЩЁ 25 НОВЫХ ЗАДАНИЙ (a1_169 .. a1_193)
     ======================================================================== */
  {
    id: "a1_169",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Какой месяц по-испански называется «Marzo»?",
    options: ["Март", "Май", "Июнь", "Ноябрь"],
    correct: 0,
    explanation: "«Marzo» — март."
  },
  {
    id: "a1_170",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Как по-испански будет «Октябрь»?",
    options: ["Octubre", "Septiembre", "Abril", "Julio"],
    correct: 0,
    explanation: "«Octubre» — октябрь."
  },
  {
    id: "a1_171",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Какое число означает слово «Treinta»?",
    options: ["30", "13", "300", "23"],
    correct: 0,
    explanation: "«Treinta» — тридцать (30)."
  },
  {
    id: "a1_172",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Как по-испански сказать «80»?",
    options: ["Ochenta", "Setenta", "Noventa", "Dieciocho"],
    correct: 0,
    explanation: "«Ochenta» — восемьдесят (80)."
  },
  {
    id: "a1_173",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Порядковые",
    prompt: "Что означает слово «Primero»?",
    options: ["Первый", "Второй", "Третий", "Последний"],
    correct: 0,
    explanation: "«Primero» (перед существительным м. р. сокращается до «primer») — первый."
  },
  {
    id: "a1_174",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Дом и отель",
    prompt: "Что означает слово «El ascensor»?",
    options: ["Лифт", "Лестница", "Коридор", "Балкон"],
    correct: 0,
    explanation: "«El ascensor» — лифт."
  },
  {
    id: "a1_175",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Как перевести фразу «En la esquina»?",
    options: ["На углу (улицы)", "В центре площади", "На другой стороне", "Около светофора"],
    correct: 0,
    explanation: "«La esquina» — внешний угол улицы или здания."
  },
  {
    id: "a1_176",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Поездки",
    prompt: "Что такое «El pasaporte»?",
    options: ["Паспорт", "Билет", "Чемодан", "Водительские права"],
    correct: 0,
    explanation: "«El pasaporte» — паспорт."
  },
  {
    id: "a1_177",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Магазин",
    prompt: "Что означает слово «El descuento»?",
    options: ["Скидка", "Чек", "Сдача", "Налог"],
    correct: 0,
    explanation: "«El descuento» — скидка."
  },
  {
    id: "a1_178",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Досуг",
    prompt: "Как в кассе музея или кинотеатра называют «билет / вход»?",
    options: ["La entrada", "La salida", "La parada", "La cuenta"],
    correct: 0,
    explanation: "«La entrada» — вход и входной билет (в кино, театр, музей)."
  },
  {
    id: "a1_179",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Покупки",
    prompt: "Что означает слово «El regalo»?",
    options: ["Подарок", "Сюрприз", "Письмо", "Открытка"],
    correct: 0,
    explanation: "«El regalo» — подарок."
  },
  {
    id: "a1_180",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Распорядок",
    prompt: "Что означает выражение «Cepillarse los dientes»?",
    options: ["Чистить зубы", "Умываться", "Причёсываться", "Одеваться"],
    correct: 0,
    explanation: "«Cepillarse los dientes» — чистить зубы щёткой."
  },
  {
    id: "a1_181",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Вежливость",
    prompt: "Что означает фраза «Con mucho gusto»?",
    options: ["С большим удовольствием", "Большое спасибо", "Мне очень жаль", "Ничего страшного"],
    correct: 0,
    explanation: "«Con mucho gusto» — «С большим удовольствием!» (вежливое согласие или ответ на благодарность)."
  },
  {
    id: "a1_182",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Транспорт",
    prompt: "Как сказать «Я иду пешком»?",
    options: ["Voy a pie", "Voy en coche", "Voy en metro", "Voy en tren"],
    correct: 0,
    explanation: "«Ir a pie» — идти пешком."
  },
  {
    id: "a1_183",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Что означает выражение «La semana que viene»?",
    options: ["На следующей неделе", "На прошлой неделе", "На этих выходных", "Через два дня"],
    correct: 0,
    explanation: "«La semana que viene» (буквально «неделя, которая идёт») — на следующей неделе."
  },
  {
    id: "a1_184",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Pensar",
    prompt: "Выбери правильную форму глагола «pensar» (думать):",
    subprompt: "¿Qué _____ tú de esta película?",
    options: ["piensas", "pensas", "pienso", "pensamos"],
    correct: 0,
    explanation: "В глаголе «pensar» корневая «e» переходит в «ie»: «¿Qué piensas tú?»."
  },
  {
    id: "a1_185",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Volver",
    prompt: "Выбери правильную форму глагола «volver» (возвращаться):",
    subprompt: "Mi padre _____ a casa a las seis.",
    options: ["vuelve", "volve", "vuelven", "volvemos"],
    correct: 0,
    explanation: "В глаголе «volver» корневая «o» меняется на «ue»: «él vuelve»."
  },
  {
    id: "a1_186",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Entender",
    prompt: "Выбери правильную форму глагола «entender» (понимать):",
    subprompt: "Ella no _____ esta palabra.",
    options: ["entiende", "entende", "entiendo", "entendemos"],
    correct: 0,
    explanation: "В глаголе «entender» корневая «e» переходит в «ie»: «ella entiende»."
  },
  {
    id: "a1_187",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Oír",
    prompt: "Выбери правильную форму глагола «oír» (слышать) для «yo»:",
    subprompt: "Yo no _____ nada desde aquí.",
    options: ["oigo", "oyo", "oyes", "oímos"],
    correct: 0,
    explanation: "У глагола «oír» особая форма для 1-го лица ед. числа: «yo oigo»."
  },
  {
    id: "a1_188",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Hay vs Estar",
    prompt: "Выбери правильный глагол для поиска конкретного предмета («Где мои очки?»):",
    subprompt: "¿Dónde _____ mis gafas?",
    options: ["están", "hay", "son", "tienen"],
    correct: 0,
    explanation: "Для местоположения конкретных предметов с притяжательным словом («mis gafas») нужен глагол «estar» во мн. числе: «están»."
  },
  {
    id: "a1_189",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Вопросы",
    prompt: "Какое вопросительное слово нужно, когда спрашиваем номер телефона или адрес?",
    subprompt: "¿_____ es tu número de teléfono?",
    options: ["Cuál", "Qué", "Quién", "Cómo"],
    correct: 0,
    explanation: "Перед глаголом «ser», когда запрашивается конкретное имя, адрес или номер, используется «¿Cuál es...?»."
  },
  {
    id: "a1_190",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Неправильные сравнения",
    prompt: "Как сказать «хуже» в сравнении («Сегодня погода хуже, чем вчера»)?",
    subprompt: "El tiempo de hoy es _____ que el de ayer.",
    options: ["peor", "más malo", "mejor", "menor"],
    correct: 0,
    explanation: "Вместо «más malo» всегда используется особая форма «peor» (хуже)."
  },
  {
    id: "a1_191",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Возвратные глаголы",
    prompt: "Вставь правильное возвратное местоимение для «tú»:",
    subprompt: "Tú siempre _____ lavas las manos antes de comer.",
    options: ["te", "me", "se", "nos"],
    correct: 0,
    explanation: "С местоимением «tú» используется возвратная частица «te»: «te lavas»."
  },
  {
    id: "a1_192",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Время",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="43" y2="30" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="29" y2="50" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las once menos cuarto", "Son las diez y cuarto", "Son las nueve y media", "Son las doce menos diez"],
    correct: 0,
    explanation: "Часовая стрелка почти на 11, минутная на 9 (без 15 минут 11) — «Son las once menos cuarto»."
  },
  {
    id: "a1_193",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Документы",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="40" y="14" width="50" height="64" rx="5" fill="#991b1b" stroke="#fbbf24" stroke-width="2"/>
            <circle cx="65" cy="40" r="11" fill="none" stroke="#fbbf24" stroke-width="2"/>
            <ellipse cx="65" cy="40" rx="5" ry="11" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
            <line x1="54" y1="40" x2="76" y2="40" stroke="#fbbf24" stroke-width="1.5"/>
            <line x1="49" y1="62" x2="81" y2="62" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
          </svg>`,
    prompt: "Какой документ нужен для поездки за границу?",
    options: ["El pasaporte", "La entrada", "La receta", "El descuento"],
    correct: 0,
    explanation: "На рисунке заграничный паспорт — «el pasaporte»."
  },
/* ========================================================================
     TIER 0: A0 — ЕЩЁ 25 НОВЫХ ЗАДАНИЙ (a0_254 .. a0_278)
     ======================================================================== */
  {
    id: "a0_254",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет цифра «0»?",
    options: ["Cero", "Uno", "Diez", "Cien"],
    correct: 0,
    explanation: "«Cero» — ноль (0)."
  },
  {
    id: "a0_255",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Catorce»?",
    options: ["14", "4", "15", "40"],
    correct: 0,
    explanation: "«Catorce» — четырнадцать (14)."
  },
  {
    id: "a0_256",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La cebolla»?",
    options: ["Лук", "Чеснок", "Капуста", "Перец"],
    correct: 0,
    explanation: "«La cebolla» — репчатый лук."
  },
  {
    id: "a0_257",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Морковь»?",
    options: ["La zanahoria", "La patata", "La lechuga", "La manzana"],
    correct: 0,
    explanation: "«La zanahoria» — морковь."
  },
  {
    id: "a0_258",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Что означает слово «Las uvas»?",
    options: ["Виноград", "Клубника", "Вишня", "Абрикос"],
    correct: 0,
    explanation: "«La uva / las uvas» — виноград (в Испании есть традиция есть 12 виноградин в новогоднюю ночь)."
  },
  {
    id: "a0_259",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански будет «Торт / пирог»?",
    options: ["El pastel", "El pan", "El queso", "El arroz"],
    correct: 0,
    explanation: "«El pastel» (или «la tarta» в Испании) — торт / пирог."
  },
  {
    id: "a0_260",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Обезьяна»?",
    options: ["El mono", "El oso", "El león", "El ratón"],
    correct: 0,
    explanation: "«El mono» — обезьяна."
  },
  {
    id: "a0_261",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El elefante»?",
    options: ["Слон", "Жираф", "Медведь", "Волк"],
    correct: 0,
    explanation: "«El elefante» — слон."
  },
  {
    id: "a0_262",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Тигр»?",
    options: ["El tigre", "El gato", "El perro", "El lobo"],
    correct: 0,
    explanation: "«El tigre» — тигр."
  },
  {
    id: "a0_263",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански называется «Шарф»?",
    options: ["La bufanda", "La camisa", "La falda", "La gorra"],
    correct: 0,
    explanation: "«La bufanda» — шарф."
  },
  {
    id: "a0_264",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «Los guantes»?",
    options: ["Перчатки", "Носки", "Туфли", "Очки"],
    correct: 0,
    explanation: "«Los guantes» — перчатки."
  },
  {
    id: "a0_265",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански будет «Палец»?",
    options: ["El dedo", "La mano", "El brazo", "El ojo"],
    correct: 0,
    explanation: "«El dedo» — палец (как на руке, так и на ноге)."
  },
  {
    id: "a0_266",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «La espalda»?",
    options: ["Спина", "Голова", "Нога", "Шея"],
    correct: 0,
    explanation: "«La espalda» — спина."
  },
  {
    id: "a0_267",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански называется «Подушка»?",
    options: ["La almohada", "La cama", "La silla", "La mesa"],
    correct: 0,
    explanation: "«La almohada» — подушка."
  },
  {
    id: "a0_268",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Что означает слово «El plato»?",
    options: ["Тарелка / блюдо", "Чашка", "Ложка", "Вилка"],
    correct: 0,
    explanation: "«El plato» — тарелка (а также блюдо в меню)."
  },
  {
    id: "a0_269",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Медленный»?",
    options: ["Lento", "Rápido", "Alto", "Fuerte"],
    correct: 0,
    explanation: "«Lento» — медленный (антоним к «rápido»)."
  },
  {
    id: "a0_270",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Viejo»?",
    options: ["Старый", "Новый", "Молодой", "Чистый"],
    correct: 0,
    explanation: "«Viejo» — старый."
  },
  {
    id: "a0_271",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Как по-испански будет «Петь»?",
    options: ["Cantar", "Bailar", "Leer", "Correr"],
    correct: 0,
    explanation: "«Cantar» — петь."
  },
  {
    id: "a0_272",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Nadar»?",
    options: ["Плавать", "Летать", "Спать", "Готовить"],
    correct: 0,
    explanation: "«Nadar» — плавать."
  },
  {
    id: "a0_273",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Ser",
    prompt: "Вставь правильную форму глагола «ser» («Вы очень милые»):",
    subprompt: "Vosotros _____ muy simpáticos.",
    options: ["sois", "somos", "son", "eres"],
    correct: 0,
    explanation: "Для местоимения «vosotros» (вы, мн. ч.) форма глагола «ser» — «sois»."
  },
  {
    id: "a0_274",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Фрукты",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M25 36 A40 40 0 0 0 105 36 Z" fill="#16a34a"/>
            <path d="M31 36 A34 34 0 0 0 99 36 Z" fill="#ef4444"/>
            <circle cx="52" cy="48" r="2.5" fill="#0f172a"/>
            <circle cx="65" cy="54" r="2.5" fill="#0f172a"/>
            <circle cx="78" cy="48" r="2.5" fill="#0f172a"/>
          </svg>`,
    prompt: "Какая ягода нарисована на картинке?",
    options: ["La sandía", "La manzana", "La naranja", "El plátano"],
    correct: 0,
    explanation: "Ломтик арбуза — «la sandía»."
  },
  {
    id: "a0_275",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Вещи",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="26" y="34" width="30" height="22" rx="6" fill="#0ea5e9" fill-opacity="0.35" stroke="#f1f5f9" stroke-width="3.5"/>
            <rect x="74" y="34" width="30" height="22" rx="6" fill="#0ea5e9" fill-opacity="0.35" stroke="#f1f5f9" stroke-width="3.5"/>
            <path d="M56 43 Q65 39 74 43" fill="none" stroke="#f1f5f9" stroke-width="3.5"/>
            <line x1="16" y1="42" x2="26" y2="42" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <line x1="104" y1="42" x2="114" y2="42" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["Las gafas", "Los zapatos", "Los libros", "Las llaves"],
    correct: 0,
    explanation: "«Las gafas» — очки."
  },
  {
    id: "a0_276",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Природа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="18,74 58,20 98,74" fill="#64748b"/>
            <polygon points="58,20 45,38 54,34 62,40 71,38" fill="#f8fafc"/>
            <polygon points="62,74 92,32 118,74" fill="#475569"/>
            <polygon points="92,32 82,46 92,43 101,46" fill="#f8fafc"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La montaña", "La playa", "El mar", "El jardín"],
    correct: 0,
    explanation: "«La montaña» — гора."
  },
  {
    id: "a0_277",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Вещи",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M52 22 A13 13 0 0 1 78 22" fill="none" stroke="#94a3b8" stroke-width="4"/>
            <rect x="40" y="22" width="50" height="54" rx="14" fill="#0284c7"/>
            <rect x="48" y="48" width="34" height="20" rx="6" fill="#38bdf8"/>
            <line x1="56" y1="48" x2="74" y2="48" stroke="#0f172a" stroke-width="2.5"/>
          </svg>`,
    prompt: "Как по-испански называется этот предмет?",
    options: ["La mochila", "La camisa", "La puerta", "La silla"],
    correct: 0,
    explanation: "«La mochila» — рюкзак / ранец."
  },
  {
    id: "a0_278",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Посуда",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="44,22 86,22 80,74 50,74" fill="#38bdf8" fill-opacity="0.25" stroke="#e2e8f0" stroke-width="3" stroke-linejoin="round"/>
            <polygon points="48,44 82,44 78,72 52,72" fill="#38bdf8" fill-opacity="0.75"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El vaso", "El plato", "El pan", "El reloj"],
    correct: 0,
    explanation: "«El vaso» — стакан."
  },

  /* ========================================================================
     TIER 1: A1 — ЕЩЁ 25 НОВЫХ ЗАДАНИЙ (a1_194 .. a1_218)
     ======================================================================== */
  {
    id: "a1_194",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Какой месяц по-испански называется «Abril»?",
    options: ["Апрель", "Август", "Март", "Июль"],
    correct: 0,
    explanation: "«Abril» — апрель."
  },
  {
    id: "a1_195",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Как по-испански будет «Ноябрь»?",
    options: ["Noviembre", "Diciembre", "Septiembre", "Octubre"],
    correct: 0,
    explanation: "«Noviembre» — ноябрь."
  },
  {
    id: "a1_196",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Какое число означает слово «Sesenta»?",
    options: ["60", "70", "16", "600"],
    correct: 0,
    explanation: "«Sesenta» — шестьдесят (60), а семьдесят — «setenta»."
  },
  {
    id: "a1_197",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Как по-испански сказать «90»?",
    options: ["Noventa", "Ochenta", "Setenta", "Diecinueve"],
    correct: 0,
    explanation: "«Noventa» — девяносто (90)."
  },
  {
    id: "a1_198",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Порядковые",
    prompt: "Что означает слово «Segundo»?",
    options: ["Второй", "Первый", "Третий", "Четвёртый"],
    correct: 0,
    explanation: "«Segundo / segunda» — второй / вторая."
  },
  {
    id: "a1_199",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Транспорт",
    prompt: "Что такое «La parada de autobús»?",
    options: ["Автобусная остановка", "Билетная касса", "Железнодорожный мост", "Парковка для машин"],
    correct: 0,
    explanation: "«La parada» — остановка общественного транспорта."
  },
  {
    id: "a1_200",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Люди",
    prompt: "Кто такой «El vecino»?",
    options: ["Сосед", "Коллега", "Продавец", "Гость"],
    correct: 0,
    explanation: "«El vecino / la vecina» — сосед / соседка."
  },
  {
    id: "a1_201",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Что означает слово «La biblioteca»?",
    options: ["Библиотека", "Книжный магазин", "Музей", "Университет"],
    correct: 0,
    explanation: "«La biblioteca» — библиотека (а книжный магазин — «la librería»)."
  },
  {
    id: "a1_202",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Выражения с Tener",
    prompt: "Как сказать «Я боюсь / мне страшно»?",
    options: ["Tengo miedo", "Tengo suerte", "Tengo sueño", "Tengo prisa"],
    correct: 0,
    explanation: "«Tener miedo» — бояться / испытывать страх."
  },
  {
    id: "a1_203",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Выражения с Tener",
    prompt: "Что означает фраза «Tienes razón»?",
    options: ["Ты прав", "Ты устал", "Ты спешишь", "Ты голоден"],
    correct: 0,
    explanation: "«Tener razón» — быть правым."
  },
  {
    id: "a1_204",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Путешествия",
    prompt: "Что означает слово «El equipaje»?",
    options: ["Багаж", "Паспорт", "Таможня", "Посадочный талон"],
    correct: 0,
    explanation: "«El equipaje» — багаж (мужского рода, единственного числа)."
  },
  {
    id: "a1_205",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Быт",
    prompt: "Что означает слово «La ducha»?",
    options: ["Душ", "Полотенце", "Мыло", "Зеркало"],
    correct: 0,
    explanation: "«La ducha» — душ («ducharse» — принимать душ)."
  },
  {
    id: "a1_206",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Cerrar",
    prompt: "Выбери правильную форму глагола «cerrar» (закрываться):",
    subprompt: "La tienda _____ a las nueve de la noche.",
    options: ["cierra", "cerra", "cierras", "cerramos"],
    correct: 0,
    explanation: "В глаголе «cerrar» корневая «e» переходит в «ie»: «la tienda cierra»."
  },
  {
    id: "a1_207",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Encontrar",
    prompt: "Выбери правильную форму глагола «encontrar» (находить):",
    subprompt: "Yo no _____ mis llaves.",
    options: ["encuentro", "encontro", "encuentras", "encontramos"],
    correct: 0,
    explanation: "В глаголе «encontrar» корневая «o» переходит в «ue»: «yo encuentro»."
  },
  {
    id: "a1_208",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Долженствование",
    prompt: "Как сказать «Сегодня мы должны заниматься» (tener que + инфинитив)?",
    subprompt: "Hoy nosotros _____ estudiar para el examen.",
    options: ["tenemos que", "tengo que", "tienen que", "hay que"],
    correct: 0,
    explanation: "Для личного долженствования с подлежащим «nosotros» используется «tenemos que + инфинитив»."
  },
  {
    id: "a1_209",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Otro",
    prompt: "Как правильно попросить «ещё один стакан воды» (без артикля «un»!)?",
    subprompt: "¿Me trae _____ vaso de agua, por favor?",
    options: ["otro", "un otro", "otros", "otra"],
    correct: 0,
    explanation: "В испанском перед «otro / otra» никогда не ставится неопределённый артикль «un / una»."
  },
  {
    id: "a1_210",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Безличное Hay que",
    prompt: "Вставь безличную конструкцию «нужно / необходимо»:",
    subprompt: "Para aprender español, _____ practicar todos los días.",
    options: ["hay que", "tiene que", "es que", "está que"],
    correct: 0,
    explanation: "Безличное «нужно / следует» без конкретного исполнителя передаётся через «hay que + инфинитив»."
  },
  {
    id: "a1_211",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Ir (мн. ч.)",
    prompt: "Выбери правильную форму глагола «ir» для «ellos»:",
    subprompt: "Ellos _____ al museo este sábado.",
    options: ["van", "vamos", "va", "voy"],
    correct: 0,
    explanation: "Для «ellos / ellas / ustedes» глагол «ir» имеет форму «van»."
  },
  {
    id: "a1_212",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Estar (мн. ч.)",
    prompt: "Выбери правильную форму глагола «estar» для «они»:",
    subprompt: "Mis padres _____ de vacaciones en Valencia.",
    options: ["están", "estamos", "está", "son"],
    correct: 0,
    explanation: "Для 3-го лица множественного числа («mis padres») форма глагола «estar» — «están»."
  },
  {
    id: "a1_213",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Muy vs Mucho",
    prompt: "Вставь правильное слово в фразе о погоде («Очень жарко»):",
    subprompt: "En julio hace _____ calor en Sevilla.",
    options: ["mucho", "muy", "mucha", "muchos"],
    correct: 0,
    explanation: "«Calor» — существительное мужского рода, поэтому используется «mucho calor» (а не «muy»)."
  },
  {
    id: "a1_214",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Время",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="77" y2="44" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="75" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las dos y media", "Son las tres en punto", "Son las seis y cuarto", "Es la una y media"],
    correct: 0,
    explanation: "Часовая стрелка между 2 и 3, минутная на 6 — «Son las dos y media» (2:30)."
  },
  {
    id: "a1_215",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Город",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <rect x="40" y="10" width="30" height="72" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="2.5"/>
            <circle cx="55" cy="25" r="8" fill="#ef4444"/>
            <circle cx="55" cy="46" r="8" fill="#fbbf24"/>
            <circle cx="55" cy="67" r="8" fill="#22c55e"/>
            <rect x="52" y="82" width="6" height="12" fill="#64748b"/>
          </svg>`,
    prompt: "Как по-испански называется это устройство на улице?",
    options: ["El semáforo", "La esquina", "La estación", "El puente"],
    correct: 0,
    explanation: "«El semáforo» — светофор."
  },
  {
    id: "a1_216",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Погода",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M25 46 A40 34 0 0 1 105 46 Z" fill="#38bdf8"/>
            <line x1="65" y1="46" x2="65" y2="74" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M65 74 A7 7 0 0 0 79 74" fill="none" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что нужно взять с собой в дождливый день?",
    options: ["El paraguas", "Las gafas de sol", "El sombrero", "La maleta"],
    correct: 0,
    explanation: "«El paraguas» — зонт (слово оканчивается на -s даже в единственном числе)."
  },
  {
    id: "a1_217",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Кафе",
    svg: `<svg width="210" height="96" viewBox="0 0 210 96">
            <rect x="8" y="6" width="194" height="84" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
            <text x="105" y="25" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">MENÚ DEL DÍA • 12 €</text>
            <text x="20" y="45" fill="#f1f5f9" font-size="10">1. Ensalada o sopa</text>
            <text x="20" y="61" fill="#f1f5f9" font-size="10">2. Pollo con patatas</text>
            <text x="20" y="77" fill="#6ee7b7" font-size="10">Postre y agua incluidos</text>
          </svg>`,
    prompt: "Что написано в нижней строке этого комплексного обеда?",
    options: [
      "Десерт и вода уже включены в цену",
      "Напитки оплачиваются отдельно",
      "Обед подаётся только на вынос",
      "Скидка действует только в пятницу"
    ],
    correct: 0,
    explanation: "«Postre y agua incluidos» — десерт и вода включены в стоимость меню дня."
  },
  {
    id: "a1_218",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Направление",
    svg: `<svg width="110" height="90" viewBox="0 0 110 90">
            <rect x="15" y="15" width="80" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <path d="M55 64 V28 M42 40 L55 26 L68 40" fill="none" stroke="#22c55e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    prompt: "Какое направление показывает знак?",
    options: ["Todo recto", "A la derecha", "A la izquierda", "Hacia atrás"],
    correct: 0,
    explanation: "Стрелка указывает прямо вперёд — «todo recto» (или «todo derecho»)."
  },

  /* ========================================================================
     TIER 2: A2–B1 — 25 НОВЫХ ЗАДАНИЙ (b1_81 .. b1_97 + b1_build_31 .. b1_build_38)
     ======================================================================== */
  {
    id: "b1_81",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Subjuntivo (эмоции)",
    prompt: "Выбери правильную форму после выражения радости «Me alegro de que...»:",
    subprompt: "Me alegro mucho de que tú _____ aquí hoy.",
    options: ["estés", "estás", "estarás", "estabas"],
    correct: 0,
    explanation: "После глаголов эмоций («me alegro de que...», «qué pena que...») при смене субъекта требуется Subjuntivo: «estés»."
  },
  {
    id: "b1_82",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Indefinido (неправильные)",
    prompt: "Выбери правильную форму прошедшего времени от глагола «tener»:",
    subprompt: "La semana pasada _____ una reunión muy importante.",
    options: ["tuve", "tení", "tenía", "tendré"],
    correct: 0,
    explanation: "В Pretérito Indefinido глагол «tener» меняет основу на «tuv-»: «yo tuve»."
  },
  {
    id: "b1_83",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Indefinido (неправильные)",
    prompt: "Выбери правильную форму прошедшего времени от глагола «hacer»:",
    subprompt: "¿Qué _____ tú ayer por la tarde?",
    options: ["hiciste", "haciste", "hacías", "harás"],
    correct: 0,
    explanation: "Глагол «hacer» в Pretérito Indefinido для «tú» имеет форму «hiciste»."
  },
  {
    id: "b1_84",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Por vs Para",
    prompt: "Вставь правильный предлог для указания срока (дедлайна):",
    subprompt: "Necesito este informe _____ el viernes sin falta.",
    options: ["para", "por", "en", "con"],
    correct: 0,
    explanation: "Для обозначения срока к определённому моменту («к пятнице») используется «para»."
  },
  {
    id: "b1_85",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Por vs Para",
    prompt: "Вставь правильный предлог для указания причины («из-за дождя»):",
    subprompt: "No pudimos salir de excursión _____ la lluvia.",
    options: ["por", "para", "sin", "hacia"],
    correct: 0,
    explanation: "Для выражения причины («из-за», «по причине») всегда ставится «por»."
  },
  {
    id: "b1_86",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Что означает испанское слово «La carpeta»?",
    options: ["Папка (для бумаг или на компьютере)", "Ковёр", "Картина", "Корзина"],
    correct: 0,
    explanation: "«La carpeta» — папка для документов (а «ковёр» по-испански — «la alfombra»)."
  },
  {
    id: "b1_87",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Идиомы",
    prompt: "Что означает разговорная идиома «Tomar el pelo a alguien»?",
    options: [
      "Подшучивать / разыгрывать кого-либо",
      "Стричься в парикмахерской",
      "Помогать кому-то в трудную минуту",
      "Сильно разозлиться на кого-то"
    ],
    correct: 0,
    explanation: "«Tomar el pelo» (буквально «брать за волосы») означает «морочить голову / подшучивать»."
  },
  {
    id: "b1_88",
    tier: 2,
    type: "visual",
    typeLabel: "Картинка A2–B1 • Объявление",
    svg: `<svg width="230" height="96" viewBox="0 0 230 96">
            <rect x="8" y="6" width="214" height="84" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
            <text x="115" y="27" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">SE ALQUILA PISO</text>
            <text x="115" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">2 habitaciones • Ascensor</text>
            <text x="115" y="68" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">SIN MUEBLES • 950 €/mes</text>
          </svg>`,
    prompt: "Что означает условие «SIN MUEBLES» в объявлении об аренде?",
    options: [
      "Квартира сдаётся без мебели",
      "В доме запрещено держать животных",
      "Коммунальные услуги не включены",
      "Квартира без балкона и отопления"
    ],
    correct: 0,
    explanation: "«Los muebles» — мебель, «sin muebles» — без мебели (пустая квартира)."
  },
  {
    id: "b1_89",
    tier: 2,
    type: "visual",
    typeLabel: "Картинка A2–B1 • Аэропорт",
    svg: `<svg width="235" height="94" viewBox="0 0 235 94">
            <rect x="8" y="6" width="219" height="82" rx="8" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
            <text x="20" y="27" fill="#38bdf8" font-size="10" font-weight="bold">SALIDAS / DEPARTURES</text>
            <text x="20" y="48" fill="#f1f5f9" font-size="12" font-weight="bold">IB 340 → MADRID</text>
            <text x="20" y="69" fill="#fbbf24" font-size="11" font-weight="bold">ESTADO: RETRASADO (45 MIN)</text>
          </svg>`,
    prompt: "Что сообщает табло о рейсе IB 340 в Мадрид?",
    options: [
      "Рейс задерживается на 45 минут",
      "Посадка на рейс уже завершена",
      "Рейс отменён из-за погоды",
      "Самолёт вылетает через 45 минут с выхода 340"
    ],
    correct: 0,
    explanation: "«Retrasado» — задержан / опаздывает."
  },
  {
    id: "b1_90",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Прошлое",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Mientras yo cocinaba, sonó el teléfono dos veces.",
    options: [
      "Пока я готовил, дважды зазвонил телефон.",
      "Когда я поужинал, я позвонил два раза.",
      "Телефон звонил всё время, пока я убирал кухню.",
      "Я забыл выключить плиту, когда говорил по телефону."
    ],
    correct: 0,
    explanation: "«Mientras yo cocinaba» (фон — Imperfecto) + «sonó el teléfono» (событие — Indefinido)."
  },
  {
    id: "b1_91",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Вежливая просьба",
    prompt: "О чём вежливо просит собеседник?",
    audioText: "¿Te importaría cerrar la puerta, por favor?",
    options: [
      "Не мог бы ты закрыть дверь, пожалуйста?",
      "Не подскажешь, открыт ли уже этот магазин?",
      "Можешь ли ты передать мне ключи от двери?",
      "Почему ты оставил входную дверь открытой?"
    ],
    correct: 0,
    explanation: "«¿Te importaría + инфинитив?» — вежливая просьба («Не возражал бы ты...?»)."
  },
  {
    id: "b1_92",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Сомнение",
    prompt: "Что думает говорящий о сроках проекта?",
    audioText: "Dudo mucho que podamos terminar el proyecto hoy.",
    options: [
      "Он сильно сомневается, что они смогут закончить проект сегодня.",
      "Он уверен, что команда сдаст проект до вечера.",
      "Они уже завершили большую часть проекта вчера.",
      "Он предлагает перенести проект на следующую неделю."
    ],
    correct: 0,
    explanation: "«Dudo mucho que podamos...» — «dudar que» (сомневаться, что) требует Subjuntivo («podamos»)."
  },
  {
    id: "b1_93",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Предположение",
    prompt: "Почему никто не отвечает на звонок?",
    audioText: "No contesta nadie; supongo que estarán de viaje.",
    options: [
      "Наверное, они сейчас в поездке / путешествии.",
      "Они ушли на работу и забыли телефон дома.",
      "Они уже вернулись из поездки, но спят.",
      "На телефоне разрядилась батарея."
    ],
    correct: 0,
    explanation: "«Supongo que estarán de viaje» — Futuro Simple часто выражает предположение о настоящем."
  },
  {
    id: "b1_94",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Магазин",
    prompt: "Зачем покупатель вернулся в магазин?",
    audioText: "Quisiera devolver esta camisa porque tiene un defecto.",
    options: [
      "Хочет вернуть рубашку, потому что у неё есть брак / дефект.",
      "Хочет обменять рубашку на размер побольше.",
      "Забыл забрать чек после оплаты покупки.",
      "Спрашивает, есть ли такая же рубашка другого цвета."
    ],
    correct: 0,
    explanation: "«Devolver» — вернуть товар, «tener un defecto» — иметь брак / дефект."
  },
  {
    id: "b1_95",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Совет",
    prompt: "Какой совет даёт собеседник?",
    audioText: "Deberías dormir más y evitar el café por la noche.",
    options: [
      "Тебе следовало бы больше спать и избегать кофе по вечерам.",
      "Тебе нужно пить больше кофе, чтобы не засыпать на работе.",
      "Тебе стоит ложиться спать в одно и то же время.",
      "Лучше вообще отказаться от чая и кофе на месяц."
    ],
    correct: 0,
    explanation: "«Deberías + инфинитив» — совет («тебе следовало бы...»), «evitar» — избегать."
  },
  {
    id: "b1_96",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Новости",
    prompt: "Что только что произошло?",
    audioText: "Acabo de recibir un correo importante de mi jefe.",
    options: [
      "Он только что получил важное письмо от своего начальника.",
      "Он собирается отправить отчёт своему начальнику.",
      "Он забыл ответить на вчерашнее письмо коллеги.",
      "Начальник только что позвонил ему по телефону."
    ],
    correct: 0,
    explanation: "«Acabo de recibir un correo...» — Я только что получил письмо..."
  },
  {
    id: "b1_97",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Поездка",
    prompt: "Что случилось с рейсом?",
    audioText: "El vuelo se canceló por culpa de la tormenta.",
    options: [
      "Рейс отменили из-за грозы.",
      "Рейс задержали на два часа из-за тумана.",
      "Самолёт приземлился в другом городе из-за ветра.",
      "Пассажирам предложили пересесть на поезд."
    ],
    correct: 0,
    explanation: "«Se canceló por culpa de la tormenta» — отменился по вине (из-за) грозы."
  },
  {
    id: "b1_build_31",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Прошлое",
    prompt: "Собери на испанском: «Пока я читал, пошёл сильный дождь»",
    words: ["llover", "yo", "Mientras", "fuerte", "a", "leía", "empezó", "leí", "en"],
    answer: ["Mientras", "yo", "leía", "empezó", "a", "llover", "fuerte"],
    explanation: "«Mientras yo leía empezó a llover fuerte» — длительный фон в Imperfecto («leía») и начавшееся событие в Indefinido («empezó»)."
  },
  {
    id: "b1_build_32",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Я очень рад, что ты здесь»",
    words: ["aquí", "mucho", "Me", "de", "estés", "alegro", "que", "estás", "muy"],
    answer: ["Me", "alegro", "mucho", "de", "que", "estés", "aquí"],
    explanation: "«Me alegro mucho de que estés aquí» — после «alegrarse de que» ставится Subjuntivo («estés»)."
  },
  {
    id: "b1_build_33",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Por vs Para",
    prompt: "Собери на испанском: «Этот отчёт нужен к пятнице»",
    words: ["viernes", "es", "Este", "para", "el", "informe", "por", "está"],
    answer: ["Este", "informe", "es", "para", "el", "viernes"],
    explanation: "«Este informe es para el viernes» — для дедлайна (срока) используется предлог «para»."
  },
  {
    id: "b1_build_34",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Вежливость",
    prompt: "Собери на испанском: «Я бы хотел поменять этот билет на завтра»",
    words: ["billete", "para", "Quisiera", "mañana", "este", "cambiar", "por", "esta"],
    answer: ["Quisiera", "cambiar", "este", "billete", "para", "mañana"],
    explanation: "«Quisiera cambiar este billete para mañana» — вежливая форма «quisiera» («я бы хотел»)."
  },
  {
    id: "b1_build_35",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Совет",
    prompt: "Собери на испанском: «Тебе не стоит переживать из-за этого»",
    words: ["por", "No", "eso", "preocuparte", "deberías", "para", "debes"],
    answer: ["No", "deberías", "preocuparte", "por", "eso"],
    explanation: "«No deberías preocuparte por eso» — глагол «preocuparse» требует предлога «por»."
  },
  {
    id: "b1_build_36",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Сомневаюсь, что они придут вовремя»",
    words: ["tiempo", "ellos", "Dudo", "a", "lleguen", "que", "llegan", "en"],
    answer: ["Dudo", "que", "ellos", "lleguen", "a", "tiempo"],
    explanation: "«Dudo que ellos lleguen a tiempo» — после глагола сомнения «dudar que» нужен Subjuntivo («lleguen»)."
  },
  {
    id: "b1_build_37",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Imperfecto de Subjuntivo",
    prompt: "Собери на испанском: «Он попросил меня помочь ему с багажом»",
    words: ["equipaje", "que", "Me", "con", "ayudara", "el", "pidió", "lo", "ayudo", "por"],
    answer: ["Me", "pidió", "que", "lo", "ayudara", "con", "el", "equipaje"],
    explanation: "«Me pidió que lo ayudara con el equipaje» — просьба в прошлом («pidió que») требует Imperfecto de Subjuntivo («ayudara»)."
  },
  {
    id: "b1_build_38",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Причина",
    prompt: "Собери на испанском: «Из-за пробок мы опоздали на поезд»",
    words: ["tren", "tráfico", "Por", "el", "perdimos", "del", "culpa", "Para", "al"],
    answer: ["Por", "culpa", "del", "tráfico", "perdimos", "el", "tren"],
    explanation: "«Por culpa del tráfico perdimos el tren» — «por culpa de» («по вине / из-за») + «perder el tren» («опоздать на поезд»)."
  },
/* ========================================================================
     НОВЫЕ ВОПРОСЫ: УРОВЕНЬ A0 (25 шт.: a0_279..292, a0_audio_50..58, a0_build_11..12)
     ======================================================================== */
  {
    id: "a0_279",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет число «16»?",
    options: ["Dieciséis", "Diecisiete", "Seis", "Sesenta"],
    correct: 0,
    explanation: "«Dieciséis» (пишется слитно с ударением на é) — шестнадцать (16)."
  },
  {
    id: "a0_280",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Dieciocho»?",
    options: ["18", "8", "14", "80"],
    correct: 0,
    explanation: "«Dieciocho» — восемнадцать (18)."
  },
  {
    id: "a0_281",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Как по-испански называется «Вилка»?",
    options: ["El tenedor", "La cuchara", "El cuchillo", "El plato"],
    correct: 0,
    explanation: "«El tenedor» — вилка, «la cuchara» — ложка, «el cuchillo» — нож."
  },
  {
    id: "a0_282",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Что означает слово «La cuchara»?",
    options: ["Ложка", "Вилка", "Чашка", "Тарелка"],
    correct: 0,
    explanation: "«La cuchara» — ложка (например, для супа)."
  },
  {
    id: "a0_283",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Как по-испански будет «Нож»?",
    options: ["El cuchillo", "El tenedor", "El vaso", "El tenedorcito"],
    correct: 0,
    explanation: "«El cuchillo» — нож."
  },
  {
    id: "a0_284",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Как по-испански называется «Лимон»?",
    options: ["El limón", "La naranja", "La pera", "La lima"],
    correct: 0,
    explanation: "«El limón» — лимон."
  },
  {
    id: "a0_285",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как в ресторане называют «Рыбу» (как блюдо на тарелке)?",
    options: ["El pescado", "El pez", "El pollo", "La carne"],
    correct: 0,
    explanation: "Живая рыба в воде — «el pez», а приготовленная рыба как еда — «el pescado»."
  },
  {
    id: "a0_286",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La tortuga»?",
    options: ["Черепаха", "Лягушка", "Змея", "Утка"],
    correct: 0,
    explanation: "«La tortuga» — черепаха."
  },
  {
    id: "a0_287",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански будет «Снег»?",
    options: ["La nieve", "La lluvia", "La nube", "El viento"],
    correct: 0,
    explanation: "«La nieve» — снег, «la lluvia» — дождь."
  },
  {
    id: "a0_288",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Молодой»?",
    options: ["Joven", "Viejo", "Corto", "Largo"],
    correct: 0,
    explanation: "«Joven» — молодой (форма не меняется по родам: «un hombre joven», «una mujer joven»)."
  },
  {
    id: "a0_289",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Эмоции",
    prompt: "Что означает слово «Triste»?",
    options: ["Грустный", "Счастливый", "Голодный", "Сильный"],
    correct: 0,
    explanation: "«Triste» — грустный (антоним к «feliz» / «contento»)."
  },
  {
    id: "a0_290",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Вежливое Вы",
    prompt: "Выбери правильную форму глагола при вежливом обращении на «usted» (Вы):",
    subprompt: "¿_____ usted español?",
    options: ["Habla", "Hablas", "Hablo", "Hablamos"],
    correct: 0,
    explanation: "Местоимение «usted» (вежливое «Вы» к одному человеку) всегда согласуется как 3-е лицо ед. числа: «¿Habla usted...?»."
  },
  {
    id: "a0_291",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Фрукты",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="65" cy="48" rx="30" ry="20" fill="#fde047"/>
            <circle cx="34" cy="48" r="5" fill="#fde047"/>
            <circle cx="96" cy="48" r="5" fill="#fde047"/>
            <ellipse cx="72" cy="24" rx="10" ry="5" fill="#22c55e" transform="rotate(-20 72 24)"/>
          </svg>`,
    prompt: "Какой фрукт изображён на картинке?",
    options: ["El limón", "La manzana", "El plátano", "La fresa"],
    correct: 0,
    explanation: "Жёлтый кислый фрукт — «el limón» (лимон)."
  },
  {
    id: "a0_292",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Часы",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="34" y2="62" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="23" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las ocho", "Son las cuatro", "Son las diez", "Son las dos"],
    correct: 0,
    explanation: "Часовая стрелка на 8, минутная на 12 — ровно восемь часов: «Son las ocho»."
  },
  {
    id: "a0_audio_50",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что просит покупатель?",
    audioText: "Quiero un helado de chocolate, por favor.",
    options: [
      "Шоколадное мороженое, пожалуйста.",
      "Яблочный пирог и чай, пожалуйста.",
      "Апельсиновый сок со льдом.",
      "Бутерброд с сыром, пожалуйста."
    ],
    correct: 0,
    explanation: "«Quiero un helado de chocolate, por favor» — Я хочу шоколадное мороженое, пожалуйста."
  },
  {
    id: "a0_audio_51",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья и работа",
    prompt: "Где работает его брат?",
    audioText: "Mi hermano trabaja en un hotel.",
    options: ["В отеле", "В школе", "В банке", "В магазине"],
    correct: 0,
    explanation: "«Mi hermano trabaja en un hotel» — Мой брат работает в отеле."
  },
  {
    id: "a0_audio_52",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Природа",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "La nieve es blanca y muy fría.",
    options: [
      "Снег белый и очень холодный.",
      "Море синее и тёплое.",
      "Небо серое и облачное.",
      "Ночь тёмная и тихая."
    ],
    correct: 0,
    explanation: "«La nieve es blanca y muy fría» — Снег белый и очень холодный."
  },
  {
    id: "a0_audio_53",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Знакомство",
    prompt: "Сколько лет говорящему и где он живёт?",
    audioText: "Tengo dieciséis años y vivo en Valencia.",
    options: [
      "Ему 16 лет, и он живёт в Валенсии.",
      "Ему 6 лет, и он живёт в Мадриде.",
      "Ему 17 лет, и он учится в Барселоне.",
      "Ему 26 лет, и он работает в Севилье."
    ],
    correct: 0,
    explanation: "«Tengo dieciséis años y vivo en Valencia» — Мне 16 лет, и я живу в Валенсии."
  },
  {
    id: "a0_audio_54",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Посуда",
    prompt: "Что просит гость за столом?",
    audioText: "Por favor, necesito una cuchara para la sopa.",
    options: [
      "Ложку для супа",
      "Вилку для мяса",
      "Нож для хлеба",
      "Стакан для воды"
    ],
    correct: 0,
    explanation: "«Necesito una cuchara para la sopa» — Мне нужна ложка для супа."
  },
  {
    id: "a0_audio_55",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Что происходит во дворе?",
    audioText: "El perro joven corre rápido por el jardín.",
    options: [
      "Молодая собака быстро бегает по саду.",
      "Старый кот медленно идёт по улице.",
      "Маленькая птица сидит на дереве.",
      "Белая лошадь спит в поле."
    ],
    correct: 0,
    explanation: "«El perro joven corre rápido por el jardín» — Молодая собака быстро бежит по саду."
  },
  {
    id: "a0_audio_56",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Эмоции",
    prompt: "Почему человеку грустно?",
    audioText: "Hoy estoy triste porque hace mal tiempo.",
    options: [
      "Потому что сегодня плохая погода.",
      "Потому что он потерял свои ключи.",
      "Потому что он не пошёл в кино.",
      "Потому что у него много работы."
    ],
    correct: 0,
    explanation: "«Hoy estoy triste porque hace mal tiempo» — Сегодня мне грустно, потому что плохая погода."
  },
  {
    id: "a0_audio_57",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Где лежит зелёный виноград?",
    audioText: "Las uvas verdes están encima de la mesa.",
    options: [
      "На столе",
      "Под стулом",
      "В сумке",
      "На кухне в холодильнике"
    ],
    correct: 0,
    explanation: "«Las uvas verdes están encima de la mesa» — Зелёный виноград лежит на столе."
  },
  {
    id: "a0_audio_58",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Досуг",
    prompt: "Что делают друзья на празднике?",
    audioText: "Bailamos y escuchamos música en la fiesta.",
    options: [
      "Танцуют и слушают музыку на вечеринке.",
      "Поют песни и едят торт дома.",
      "Читают книги и пьют чай в саду.",
      "Смотрят фильм в кинотеатре."
    ],
    correct: 0,
    explanation: "«Bailamos y escuchamos música en la fiesta» — Мы танцуем и слушаем музыку на празднике."
  },
  {
    id: "a0_build_11",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Учёба и работа",
    prompt: "Собери на испанском: «Я работаю в маленькой школе»",
    words: ["escuela", "Yo", "pequeña", "trabajo", "una", "en", "casa", "pequeño"],
    answer: ["Yo", "trabajo", "en", "una", "escuela", "pequeña"],
    explanation: "«Yo trabajo en una escuela pequeña» — Прилагательное согласуется с женским родом слова «escuela» («pequeña»)."
  },
  {
    id: "a0_build_12",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Напитки",
    prompt: "Собери на испанском: «Мои друзья пьют холодный сок»",
    words: ["zumo", "Mis", "frío", "beben", "amigos", "Mi", "agua", "caliente"],
    answer: ["Mis", "amigos", "beben", "zumo", "frío"],
    explanation: "«Mis amigos beben zumo frío» — Перед множественным числом «amigos» ставится «mis»."
  },

  /* ========================================================================
     НОВЫЕ ВОПРОСЫ: УРОВЕНЬ A1 (25 шт.: a1_219..231, a1_audio_46..54, a1_build_36..38)
     ======================================================================== */
  {
    id: "a1_219",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Какой месяц по-испански называется «Mayo»?",
    options: ["Май", "Март", "Июнь", "Июль"],
    correct: 0,
    explanation: "«Mayo» — май."
  },
  {
    id: "a1_220",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Как по-испански будет «Июль»?",
    options: ["Julio", "Junio", "Enero", "Abril"],
    correct: 0,
    explanation: "«Julio» — июль, «junio» — июнь."
  },
  {
    id: "a1_221",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Какое число означает слово «Setenta»?",
    options: ["70", "60", "17", "700"],
    correct: 0,
    explanation: "«Setenta» — семьдесят (70), а шестьдесят — «sesenta»."
  },
  {
    id: "a1_222",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Как по-испански сказать «200»?",
    options: ["Doscientos", "Veinte", "Mil", "Doce"],
    correct: 0,
    explanation: "«Doscientos» — двести (200)."
  },
  {
    id: "a1_223",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Порядковые",
    prompt: "Что означает слово «Tercero»?",
    options: ["Третий", "Второй", "Четвёртый", "Последний"],
    correct: 0,
    explanation: "«Tercero» (перед существительным мужского рода — «tercer») — третий."
  },
  {
    id: "a1_224",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Где можно купить новые книги, а не просто взять их почитать?",
    options: ["En la librería", "En la biblioteca", "En la farmacia", "En la panadería"],
    correct: 0,
    explanation: "«La librería» — книжный магазин (где книги покупают), а «la biblioteca» — библиотека."
  },
  {
    id: "a1_225",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Выражения с Tener",
    prompt: "Что означает фраза «Tengo mucha suerte»?",
    options: ["Мне очень везёт", "Я очень спешу", "Я сильно устал", "Я боюсь темноты"],
    correct: 0,
    explanation: "«Tener suerte» — иметь удачу, везти."
  },
  {
    id: "a1_226",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Что означает выражение «Al mediodía»?",
    options: ["В полдень (около 12:00)", "В полночь", "Ранним утром", "Поздним вечером"],
    correct: 0,
    explanation: "«El mediodía» — полдень, «la medianoche» — полночь."
  },
  {
    id: "a1_227",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Preferir",
    prompt: "Выбери правильную форму глагола «preferir» (предпочитать):",
    subprompt: "Ella _____ tomar té verde por la mañana.",
    options: ["prefiere", "prefere", "prefiero", "preferimos"],
    correct: 0,
    explanation: "В глаголе «preferir» ударная «e» в корне меняется на «ie»: «ella prefiere»."
  },
  {
    id: "a1_228",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Costar",
    prompt: "Выбери правильную форму глагола «costar» (стоить) для множественного числа:",
    subprompt: "¿Cuánto _____ estas entradas para el cine?",
    options: ["cuestan", "cuesta", "costan", "costamos"],
    correct: 0,
    explanation: "«Estas entradas» во множественном числе требуют форму «cuestan» (с чередованием o → ue)."
  },
  {
    id: "a1_229",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Encantar",
    prompt: "Выбери правильную форму глагола «encantar» (очень нравиться):",
    subprompt: "Me _____ los idiomas extranjeros.",
    options: ["encantan", "encanta", "encanto", "encantamos"],
    correct: 0,
    explanation: "«Los idiomas» (мужской род, мн. ч.) — подлежащее во множественном числе, поэтому «me encantan»."
  },
  {
    id: "a1_230",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Время",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="67" y2="70" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="80" y2="50" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: [
      "Son las cinco y cuarto",
      "Son las cinco y media",
      "Son las tres y veinticinco",
      "Son las cinco menos cuarto"
    ],
    correct: 0,
    explanation: "Часовая стрелка чуть за 5, минутная на 3 (15 минут = cuarto) — «Son las cinco y cuarto»."
  },
  {
    id: "a1_231",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Кафе",
    svg: `<svg width="220" height="92" viewBox="0 0 220 92">
            <rect x="8" y="6" width="204" height="80" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <text x="110" y="28" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">WI-FI GRATIS</text>
            <text x="110" y="49" fill="#f1f5f9" font-size="11" text-anchor="middle">RED: CafeSol</text>
            <text x="110" y="69" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">CONTRASEÑA: sol2025</text>
          </svg>`,
    prompt: "Что означает слово «CONTRASEÑA» на табличке в кафе?",
    options: ["Пароль", "Счёт", "Скидка", "Адрес"],
    correct: 0,
    explanation: "«La contraseña» — пароль (например, от Wi-Fi)."
  },
  {
    id: "a1_audio_46",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Кафе",
    prompt: "Что просит посетитель в кафе?",
    audioText: "¿Me puede dar la contraseña del wifi, por favor?",
    options: [
      "Не могли бы вы дать пароль от Wi-Fi, пожалуйста?",
      "Не могли бы вы принести меню, пожалуйста?",
      "Где здесь можно зарядить телефон?",
      "Можно ли сесть за столик у окна?"
    ],
    correct: 0,
    explanation: "«¿Me puede dar la contraseña del wifi, por favor?» — Можете дать мне пароль от Wi-Fi, пожалуйста?"
  },
  {
    id: "a1_audio_47",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Ресторан",
    prompt: "На сколько человек гость хочет забронировать столик?",
    audioText: "Quiero reservar una mesa para cuatro personas.",
    options: ["На 4 человека", "На 2 человека", "На 6 человек", "На 5 человек"],
    correct: 0,
    explanation: "«Para cuatro personas» — на четырёх человек."
  },
  {
    id: "a1_audio_48",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Магазин",
    prompt: "Как работает супермаркет?",
    audioText: "El supermercado abre a las nueve y cierra a las diez.",
    options: [
      "Открывается в 9:00 и закрывается в 22:00.",
      "Открывается в 8:00 и закрывается в 21:00.",
      "Открывается в 10:00 и закрывается в 20:00.",
      "Работает круглосуточно без перерыва."
    ],
    correct: 0,
    explanation: "«Abre a las nueve y cierra a las diez» — открывается в девять и закрывается в десять."
  },
  {
    id: "a1_audio_49",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Погода",
    prompt: "Какая погода летом на юге?",
    audioText: "En julio siempre hace mucho calor en el sur.",
    options: [
      "В июле на юге всегда очень жарко.",
      "В июне на севере часто идёт дождь.",
      "В августе у моря дует прохладный ветер.",
      "Весной в горах ещё лежит снег."
    ],
    correct: 0,
    explanation: "«En julio siempre hace mucho calor en el sur» — В июле на юге всегда очень жарко."
  },
  {
    id: "a1_audio_50",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Транспорт",
    prompt: "Почему он предпочитает поехать на такси?",
    audioText: "Prefiero ir al aeropuerto en taxi porque llevo dos maletas.",
    options: [
      "Потому что везёт два чемодана.",
      "Потому что метро уже закрыто ночью.",
      "Потому что опаздывает на утренний рейс.",
      "Потому что не знает дорогу к остановке."
    ],
    correct: 0,
    explanation: "«Porque llevo dos maletas» — потому что у меня с собой два чемодана."
  },
  {
    id: "a1_audio_51",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Ситуация",
    prompt: "Почему собеседник рад?",
    audioText: "Hoy tengo mucha suerte porque encontré mis llaves.",
    options: [
      "Ему повезло — он нашёл свои ключи.",
      "Он получил скидку в любимом магазине.",
      "Он выиграл билеты в театр на субботу.",
      "Он сдал экзамен по испанскому языку."
    ],
    correct: 0,
    explanation: "«Hoy tengo mucha suerte porque encontré mis llaves» — Сегодня мне очень повезло, потому что я нашёл свои ключи."
  },
  {
    id: "a1_audio_52",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Еда",
    prompt: "Что они едят в полдень?",
    audioText: "Al mediodía comemos ensalada y pescado fresco.",
    options: [
      "Салат и свежую рыбу",
      "Овощной суп и жареную курицу",
      "Рис с мясом и помидорами",
      "Тосты с сыром и апельсиновый сок"
    ],
    correct: 0,
    explanation: "«Al mediodía comemos ensalada y pescado fresco» — В полдень мы едим салат и свежую рыбу."
  },
  {
    id: "a1_audio_53",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Учёба",
    prompt: "Что говорит студент о преподавателе?",
    audioText: "Vuestro profesor de español habla muy claro.",
    options: [
      "Ваш учитель испанского говорит очень понятно (чётко).",
      "Наш учитель испанского задаёт много домашних заданий.",
      "Его учитель испанского родом из Аргентины.",
      "Мой учитель говорит слишком быстро на уроках."
    ],
    correct: 0,
    explanation: "«Vuestro profesor de español habla muy claro» — Ваш учитель испанского говорит очень чётко/понятно."
  },
  {
    id: "a1_audio_54",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Планы",
    prompt: "Почему он не может пойти в кино?",
    audioText: "No puedo ir al cine hoy porque tengo que estudiar.",
    options: [
      "Потому что ему нужно заниматься (учиться).",
      "Потому что он должен работать до вечера.",
      "Потому что у него болит голова.",
      "Потому что все билеты уже раскуплены."
    ],
    correct: 0,
    explanation: "«Porque tengo que estudiar» — потому что я должен учиться."
  },
  {
    id: "a1_build_36",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Планы",
    prompt: "Собери на испанском: «В субботу я собираюсь купить подарок»",
    words: ["regalo", "El", "comprar", "sábado", "a", "voy", "un", "En", "una"],
    answer: ["El", "sábado", "voy", "a", "comprar", "un", "regalo"],
    explanation: "«El sábado voy a comprar un regalo» — с днём недели используется артикль «El», а не предлог «en»."
  },
  {
    id: "a1_build_37",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Обязанности",
    prompt: "Собери на испанском: «Мы должны выйти рано завтра»",
    words: ["temprano", "Tenemos", "mañana", "salir", "que", "tarde", "de"],
    answer: ["Tenemos", "que", "salir", "temprano", "mañana"],
    explanation: "«Tenemos que salir temprano mañana» — конструкция долженствования «tener que + инфинитив»."
  },
  {
    id: "a1_build_38",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Сравнение",
    prompt: "Собери на испанском: «Этот отель лучше, чем тот»",
    words: ["mejor", "Este", "ese", "hotel", "que", "es", "más", "bueno"],
    answer: ["Este", "hotel", "es", "mejor", "que", "ese"],
    explanation: "«Este hotel es mejor que ese» — вместо «más bueno» всегда используется «mejor»."
  },

  /* ========================================================================
     НОВЫЕ ВОПРОСЫ: УРОВЕНЬ A2–B1 (20 шт.: b1_98..112, b1_build_39..43)
     ======================================================================== */
  {
    id: "b1_98",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Indefinido (неправильные)",
    prompt: "Выбери правильную форму прошедшего времени от глагола «decir» («Он сказал правду»):",
    subprompt: "Al final, Pablo nos _____ toda la verdad.",
    options: ["dijo", "deció", "decía", "ha dicho"],
    correct: 0,
    explanation: "В Pretérito Indefinido глагол «decir» имеет особую основу «dij-» и форму 3-го лица ед. ч. «dijo»."
  },
  {
    id: "b1_99",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Indefinido (неправильные)",
    prompt: "Выбери правильную форму прошедшего времени от глагола «estar» («Вчера она была дома»):",
    subprompt: "Ayer Elena _____ en casa todo el día.",
    options: ["estuvo", "estaba", "estó", "está"],
    correct: 0,
    explanation: "Для ограниченного во времени завершённого периода («весь вчерашний день») используется Pretérito Indefinido: основа «estuv-» → «estuvo»."
  },
  {
    id: "b1_100",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Причастия (неправильные)",
    prompt: "Выбери правильное причастие от глагола «escribir» (писать):",
    subprompt: "Todavía no he _____ el informe mensual.",
    options: ["escrito", "escribido", "escribiendo", "escribo"],
    correct: 0,
    explanation: "У глагола «escribir» неправильное причастие — «escrito» («he escrito»)."
  },
  {
    id: "b1_101",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Причастия (неправильные)",
    prompt: "Выбери правильное причастие от глагола «romper» (сломать / разбить):",
    subprompt: "¡Cuidado! Se ha _____ el vaso de cristal.",
    options: ["roto", "rompido", "rompe", "rompía"],
    correct: 0,
    explanation: "У глагола «romper» неправильное причастие — «roto» («se ha roto» — разбился)."
  },
  {
    id: "b1_102",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Subjuntivo (вероятность)",
    prompt: "Выбери форму глагола после «Quizás» (возможно), подчёркивающую сомнение:",
    subprompt: "Quizás Laura _____ más tarde a la reunión.",
    options: ["venga", "vino", "venía", "vendrás"],
    correct: 0,
    explanation: "После наречий сомнения («quizás», «tal vez»), стоящих перед глаголом, часто используется Subjuntivo: «venga»."
  },
  {
    id: "b1_103",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Imperativo (неправильные)",
    prompt: "Выбери правильную форму приказа на «tú» от глагола «hacer» («Застели кровать!»):",
    subprompt: "Por favor, _____ la cama antes de salir.",
    options: ["haz", "hace", "hagas", "hacemos"],
    correct: 0,
    explanation: "У глагола «hacer» краткая неправильная форма утвердительного приказа на «tú» — «haz»."
  },
  {
    id: "b1_104",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Por vs Para",
    prompt: "Вставь правильный предлог для указания способа связи («по электронной почте»):",
    subprompt: "Te envío los billetes _____ correo electrónico.",
    options: ["por", "para", "en", "con"],
    correct: 0,
    explanation: "Средства связи и способы передачи («по почте», «по телефону») в испанском вводятся предлогом «por»."
  },
  {
    id: "b1_105",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Что означает испанский глагол «Soportar» в фразе «No soporto el ruido»?",
    options: [
      "Терпеть / выносить (не выношу шум)",
      "Поддерживать кого-либо",
      "Спрашивать совета",
      "Спорить с кем-либо"
    ],
    correct: 0,
    explanation: "«Soportar» — терпеть, выносить (ложный друг слова «support»; а «поддерживать» по-испански — «apoyar»)."
  },
  {
    id: "b1_106",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Что означает испанское прилагательное «Sensible»?",
    options: ["Чувствительный / ранимый", "Разумный / здравомыслящий", "Упрямый", "Равнодушный"],
    correct: 0,
    explanation: "«Sensible» — чувствительный, восприимчивый (а «разумный / благоразумный» — «sensato»)."
  },
  {
    id: "b1_107",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Глаголы изменений",
    prompt: "Что означает выражение «Quedarse dormido»?",
    options: [
      "Проспать / случайно заснуть",
      "Лечь спать вовремя",
      "Проснуться очень рано",
      "Не спать всю ночь"
    ],
    correct: 0,
    explanation: "«Quedarse dormido» — нечаянно заснуть или проспать будильник."
  },
  {
    id: "b1_108",
    tier: 2,
    type: "visual",
    typeLabel: "Картинка A2–B1 • Отель",
    svg: `<svg width="235" height="96" viewBox="0 0 235 96">
            <rect x="8" y="6" width="219" height="84" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
            <text x="117" y="27" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">RECEPCIÓN • AVISO</text>
            <text x="117" y="48" fill="#f1f5f9" font-size="11" text-anchor="middle">Salida (Check-out): antes de las 12:00</text>
            <text x="117" y="68" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">Consigna de equipaje gratuita</text>
          </svg>`,
    prompt: "Что означает строка «Consigna de equipaje gratuita» на табличке отеля?",
    options: [
      "Бесплатная камера хранения багажа",
      "Бесплатный трансфер в аэропорт",
      "Поздний выезд оплачивается отдельно",
      "Уборка номера по запросу гостей"
    ],
    correct: 0,
    explanation: "«La consigna de equipaje» — камера хранения багажа, «gratuita» — бесплатная."
  },
  {
    id: "b1_109",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Опоздание",
    prompt: "Почему говорящий извиняется?",
    audioText: "Lo siento mucho, me quedé dormido y perdí el autobús.",
    options: [
      "Он проспал и опоздал на автобус.",
      "Он перепутал остановку и уехал не туда.",
      "Он забыл купить билет на утренний автобус.",
      "Автобус сломался по дороге в центр."
    ],
    correct: 0,
    explanation: "«Me quedé dormido y perdí el autobús» — я проспал и упустил автобус."
  },
  {
    id: "b1_110",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Планы",
    prompt: "Что планирует компания на длинные выходные?",
    audioText: "Quizás vayamos a Granada este puente si encontramos hotel.",
    options: [
      "Возможно, поедут в Гранаду на эти длинные выходные, если найдут отель.",
      "Точно полетят в Гранаду в следующем месяце.",
      "Отменили поездку в Гранаду из-за высоких цен на отели.",
      "Уже забронировали отель в центре Гранады на субботу."
    ],
    correct: 0,
    explanation: "«El puente» в Испании — длинные выходные (рабочий день-«мостик» между праздником и уикендом); после «quizás» стоит Subjuntivo «vayamos»."
  },
  {
    id: "b1_111",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Работа",
    prompt: "Что человек говорит о письме?",
    audioText: "Todavía no he escrito el correo, pero lo haré enseguida.",
    options: [
      "Он ещё не написал письмо, но сделает это прямо сейчас.",
      "Он уже отправил письмо полчаса назад.",
      "Он забыл прикрепить файл к электронному письму.",
      "Он напишет письмо только завтра утром."
    ],
    correct: 0,
    explanation: "«Todavía no he escrito el correo, pero lo haré enseguida» — «enseguida» = немедленно / прямо сейчас."
  },
  {
    id: "b1_112",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Прогулка",
    prompt: "Что они решили сделать, несмотря на погоду?",
    audioText: "Aunque hacía frío, decidimos dar una vuelta por el centro.",
    options: [
      "Несмотря на холод, решили прогуляться по центру.",
      "Из-за холода остались пить кофе в отеле.",
      "Решили вернуться домой, так как пошёл дождь.",
      "Поехали в торговый центр на такси."
    ],
    correct: 0,
    explanation: "«Dar una vuelta» — прогуляться, пройтись; «aunque hacía frío» — хотя было холодно."
  },
  {
    id: "b1_build_39",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Ser vs Estar",
    prompt: "Собери на испанском: «Мы уже готовы выйти из дома»",
    words: ["listos", "Ya", "salir", "estamos", "para", "de", "casa", "somos", "por"],
    answer: ["Ya", "estamos", "listos", "para", "salir", "de", "casa"],
    explanation: "«Ya estamos listos para salir de casa» — «estar listo» означает «быть готовым» (а «ser listo» — «быть умным/сообразительным»)."
  },
  {
    id: "b1_build_40",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Позвони мне до того, как уйдёшь»",
    words: ["vayas", "antes", "Llámame", "te", "que", "de", "vas", "después"],
    answer: ["Llámame", "antes", "de", "que", "te", "vayas"],
    explanation: "«Llámame antes de que te vayas» — после союза «antes de que» всегда требуется Subjuntivo («te vayas»)."
  },
  {
    id: "b1_build_41",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Отрицание",
    prompt: "Собери на испанском: «Вчера я никого не видел в офисе»",
    words: ["nadie", "Ayer", "vi", "oficina", "no", "en", "a", "la", "alguien", "veía"],
    answer: ["Ayer", "no", "vi", "a", "nadie", "en", "la", "oficina"],
    explanation: "«Ayer no vi a nadie en la oficina» — двойное отрицание с «no ... nadie» и обязательный предлог «a» перед лицом."
  },
  {
    id: "b1_build_42",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Прошлое и причина",
    prompt: "Собери на испанском: «Он не смог прийти на ужин из-за работы»",
    words: ["cena", "No", "trabajo", "pudo", "por", "venir", "la", "a", "para", "podía"],
    answer: ["No", "pudo", "venir", "a", "la", "cena", "por", "trabajo"],
    explanation: "«No pudo venir a la cena por trabajo» — однократная невозможность в прошлом («pudo») и причина через «por»."
  },
  {
    id: "b1_build_43",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Идиомы",
    prompt: "Собери на испанском: «Мне хочется прогуляться по парку»",
    words: ["vuelta", "Tengo", "parque", "de", "por", "ganas", "una", "dar", "el", "para", "en"],
    answer: ["Tengo", "ganas", "de", "dar", "una", "vuelta", "por", "el", "parque"],
    explanation: "«Tengo ganas de dar una vuelta por el parque» — «tener ganas de» (хотеться) + «dar una vuelta por» (прогуляться по)."
  },
/* ========================================================================
     НОВЫЕ 40 ВОПРОСОВ: УРОВЕНЬ A0 (tier: 0)
     22 тест/грамматика + 5 визуальных + 11 аудио + 2 конструктора
     ======================================================================== */
  {
    id: "a0_293",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет число «17»?",
    options: ["Diecisiete", "Dieciséis", "Diecinueve", "Setenta"],
    correct: 0,
    explanation: "«Diecisiete» — семнадцать (17)."
  },
  {
    id: "a0_294",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Diecinueve»?",
    options: ["19", "9", "18", "90"],
    correct: 0,
    explanation: "«Diecinueve» — девятнадцать (19)."
  },
  {
    id: "a0_295",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Сливочное масло»?",
    options: ["La mantequilla", "La miel", "La pimienta", "La harina"],
    correct: 0,
    explanation: "«La mantequilla» — сливочное масло (а оливковое/растительное масло — «el aceite»)."
  },
  {
    id: "a0_296",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La miel»?",
    options: ["Мёд", "Шоколад", "Сахар", "Варенье"],
    correct: 0,
    explanation: "«La miel» — мёд (женского рода)."
  },
  {
    id: "a0_297",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Как по-испански будет «Чашка»?",
    options: ["La taza", "El vaso", "La botella", "El plato"],
    correct: 0,
    explanation: "«La taza» — чашка (для кофе или чая), «el vaso» — стакан."
  },
  {
    id: "a0_298",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Что означает слово «La botella»?",
    options: ["Бутылка", "Тарелка", "Ложка", "Кастрюля"],
    correct: 0,
    explanation: "«La botella» — бутылка (например, «una botella de agua»)."
  },
  {
    id: "a0_299",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Волк»?",
    options: ["El lobo", "El zorro", "El oso", "El león"],
    correct: 0,
    explanation: "«El lobo» — волк."
  },
  {
    id: "a0_300",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La mariposa»?",
    options: ["Бабочка", "Пчела", "Лягушка", "Черепаха"],
    correct: 0,
    explanation: "«La mariposa» — бабочка."
  },
  {
    id: "a0_301",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Лягушка»?",
    options: ["La rana", "La abeja", "La rata", "La oveja"],
    correct: 0,
    explanation: "«La rana» — лягушка."
  },
  {
    id: "a0_302",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «La gorra»?",
    options: ["Кепка / бейсболка", "Шарф", "Куртка", "Ремень"],
    correct: 0,
    explanation: "«La gorra» — кепка, «el sombrero» — шляпа."
  },
  {
    id: "a0_303",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански называется «Свитер»?",
    options: ["El jersey", "El abrigo", "El vestido", "El zapato"],
    correct: 0,
    explanation: "«El jersey» (в Испании) или «el suéter» — свитер / джемпер."
  },
  {
    id: "a0_304",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «La nube»?",
    options: ["Облако / туча", "Волна", "Озеро", "Ветер"],
    correct: 0,
    explanation: "«La nube» — облако (женского рода)."
  },
  {
    id: "a0_305",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански будет «Озеро»?",
    options: ["El lago", "El mar", "El río", "El bosque"],
    correct: 0,
    explanation: "«El lago» — озеро."
  },
  {
    id: "a0_306",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «El corazón»?",
    options: ["Сердце", "Плечо", "Шея", "Колено"],
    correct: 0,
    explanation: "«El corazón» — сердце."
  },
  {
    id: "a0_307",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански называется «Стена»?",
    options: ["La pared", "El suelo", "El techo", "La puerta"],
    correct: 0,
    explanation: "«La pared» — стена, «el suelo» — пол, «el techo» — потолок/крыша."
  },
  {
    id: "a0_308",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Dulce» (о вкусе)?",
    options: ["Сладкий", "Солёный", "Кислый", "Горький"],
    correct: 0,
    explanation: "«Dulce» — сладкий (а также пресный, если речь о воде)."
  },
  {
    id: "a0_309",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Грязный»?",
    options: ["Sucio", "Limpio", "Lleno", "Vacío"],
    correct: 0,
    explanation: "«Sucio» — грязный, «limpio» — чистый."
  },
  {
    id: "a0_310",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Corto»?",
    options: ["Короткий", "Длинный", "Трудный", "Широкий"],
    correct: 0,
    explanation: "«Corto» — короткий, «largo» — длинный."
  },
  {
    id: "a0_311",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Mirar»?",
    options: ["Смотреть", "Слушать", "Прыгать", "Спрашивать"],
    correct: 0,
    explanation: "«Mirar» — смотреть на что-либо."
  },
  {
    id: "a0_312",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Исключения рода",
    prompt: "Выбери правильный артикль для слова «foto» (сокращение от «fotografía»):",
    subprompt: "Mira _____ foto de mi familia.",
    options: ["la", "el", "los", "un"],
    correct: 0,
    explanation: "Слово «la foto» — женского рода (так как это сокращение от «la fotografía»)."
  },
  {
    id: "a0_313",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Притяжательные",
    prompt: "Выбери правильное притяжательное слово перед множественным числом («мои»):",
    subprompt: "_____ libros están en la mochila.",
    options: ["Mis", "Mi", "Tu", "Su"],
    correct: 0,
    explanation: "Перед существительным во множественном числе («libros») притяжательное слово тоже получает «-s»: «Mis libros»."
  },
  {
    id: "a0_314",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Vivir",
    prompt: "Вставь правильную форму глагола «vivir» для «вы» (друзья):",
    subprompt: "¿Dónde _____ vosotros?",
    options: ["vivís", "vivimos", "viven", "vives"],
    correct: 0,
    explanation: "Для местоимения «vosotros» глаголы на «-ir» имеют окончание «-ís»: «vivís»."
  },
  {
    id: "a0_315",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Посуда",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="42" y="34" width="40" height="36" rx="6" fill="#38bdf8"/>
            <path d="M82 41 h10 a8 8 0 0 1 0 18 h-10" fill="none" stroke="#38bdf8" stroke-width="4.5"/>
            <ellipse cx="62" cy="36" rx="17" ry="4" fill="#e0f2fe"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La taza", "El vaso", "El plato", "La botella"],
    correct: 0,
    explanation: "Чашка с ручкой — «la taza»."
  },
  {
    id: "a0_316",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Природа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M65 18 C82 36 86 52 78 66 C74 73 65 76 65 76 C65 76 56 73 52 66 C44 52 48 36 65 18 Z" fill="#f97316"/>
            <path d="M65 36 C73 46 75 56 70 65 C68 69 65 71 65 71 C65 71 62 69 60 65 C55 56 57 46 65 36 Z" fill="#fde047"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El fuego", "El agua", "La nieve", "La nube"],
    correct: 0,
    explanation: "«El fuego» — огонь / пламя."
  },
  {
    id: "a0_317",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Символы",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M65 74 C65 74 30 52 30 34 A17 17 0 0 1 65 30 A17 17 0 0 1 100 34 C100 52 65 74 65 74 Z" fill="#ef4444"/>
          </svg>`,
    prompt: "Как по-испански называется этот символ?",
    options: ["El corazón", "La estrella", "La luna", "La flor"],
    correct: 0,
    explanation: "«El corazón» — сердце."
  },
  {
    id: "a0_318",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Транспорт",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="38" cy="60" r="16" fill="none" stroke="#38bdf8" stroke-width="4"/>
            <circle cx="92" cy="60" r="16" fill="none" stroke="#38bdf8" stroke-width="4"/>
            <path d="M38 60 L58 38 H82 L92 60 M58 38 L64 60 H38 M82 38 L80 28 H89" fill="none" stroke="#fbbf24" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    prompt: "Какой транспорт изображён на картинке?",
    options: ["La bicicleta", "El coche", "El tren", "El barco"],
    correct: 0,
    explanation: "«La bicicleta» (кратко «la bici») — велосипед."
  },
  {
    id: "a0_319",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Природа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M36 60 a15 15 0 0 1 8 -28 a20 20 0 0 1 38 4 a14 14 0 0 1 6 24 z" fill="#e2e8f0"/>
          </svg>`,
    prompt: "Что изображено на небе?",
    options: ["La nube", "El sol", "La estrella", "La lluvia"],
    correct: 0,
    explanation: "«La nube» — облако."
  },
  {
    id: "a0_audio_59",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Какое число услышал?",
    audioText: "En la mesa hay dieciocho manzanas.",
    options: ["18", "8", "16", "14"],
    correct: 0,
    explanation: "«En la mesa hay dieciocho manzanas» — На столе восемнадцать яблок («dieciocho» = 18)."
  },
  {
    id: "a0_audio_60",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что человек ест на завтрак?",
    audioText: "Como pan con mantequilla y miel.",
    options: ["Хлеб со сливочным маслом и мёдом", "Хлеб с сыром и помидорами", "Тосты с яйцом и солью", "Печенье с молоком"],
    correct: 0,
    explanation: "«Como pan con mantequilla y miel» — Я ем хлеб со сливочным маслом и мёдом."
  },
  {
    id: "a0_audio_61",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Какое животное упоминается в фразе?",
    audioText: "La tortuga camina muy lento en el jardín.",
    options: [
      "Черепаха очень медленно идёт по саду.",
      "Лягушка прыгает рядом с озером.",
      "Кролик быстро бежит по лесу.",
      "Утка плавает в маленькой реке."
    ],
    correct: 0,
    explanation: "«La tortuga camina muy lento en el jardín» — Черепаха идёт очень медленно по саду."
  },
  {
    id: "a0_audio_62",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Одежда",
    prompt: "Что надевает мальчик?",
    audioText: "El niño lleva una gorra roja y un jersey azul.",
    options: [
      "Красную кепку и синий свитер",
      "Чёрную шляпу и жёлтую рубашку",
      "Белую футболку и серые брюки",
      "Зелёное пальто и тёплый шарф"
    ],
    correct: 0,
    explanation: "«Una gorra roja y un jersey azul» — красная кепка и синий свитер."
  },
  {
    id: "a0_audio_63",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Посуда",
    prompt: "Что стоит на столе?",
    audioText: "Hay una botella de agua y dos vasos limpios.",
    options: [
      "Бутылка воды и два чистых стакана",
      "Две чашки чая и три тарелки",
      "Вилка, нож и одна ложка",
      "Большой торт и пять чашек"
    ],
    correct: 0,
    explanation: "«Una botella de agua y dos vasos limpios» — бутылка воды и два чистых стакана."
  },
  {
    id: "a0_audio_64",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Природа",
    prompt: "Где они гуляют?",
    audioText: "Caminamos por el bosque cerca del lago.",
    options: [
      "Гуляют по лесу рядом с озером.",
      "Отдыхают на пляже у синего моря.",
      "Поднимаются на высокую гору.",
      "Сидят в парке в центре города."
    ],
    correct: 0,
    explanation: "«Caminamos por el bosque cerca del lago» — Мы гуляем по лесу рядом с озером."
  },
  {
    id: "a0_audio_65",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Какого цвета стена в комнате?",
    audioText: "La pared de mi habitación es blanca.",
    options: ["Белая", "Серая", "Жёлтая", "Зелёная"],
    correct: 0,
    explanation: "«La pared de mi habitación es blanca» — Стена моей комнаты белая."
  },
  {
    id: "a0_audio_66",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Вежливость",
    prompt: "Что спрашивает продавец?",
    audioText: "Perdón, ¿habla usted inglés o español?",
    options: [
      "Извините, вы говорите по-английски или по-испански?",
      "Извините, вы из Испании или из Мексики?",
      "Пожалуйста, вы хотите чай или кофе?",
      "Простите, как называется эта улица?"
    ],
    correct: 0,
    explanation: "«Perdón, ¿habla usted inglés o español?» — Извините, вы говорите по-английски или по-испански?"
  },
  {
    id: "a0_audio_67",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Фото",
    prompt: "Что показывает друг?",
    audioText: "Mira esta foto de mi perro pequeño.",
    options: [
      "Фотографию своей маленькой собаки",
      "Новую книгу про животных",
      "Рисунок своего большого дома",
      "Письмо от своего дедушки"
    ],
    correct: 0,
    explanation: "«Mira esta foto de mi perro pequeño» — Посмотри на это фото моей маленькой собаки."
  },
  {
    id: "a0_audio_68",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Вкус",
    prompt: "Какой это напиток?",
    audioText: "Este zumo de limón no es dulce.",
    options: [
      "Этот лимонный сок не сладкий.",
      "Этот апельсиновый сок очень холодный.",
      "Этот горячий чай с сахаром.",
      "Это молоко очень свежее."
    ],
    correct: 0,
    explanation: "«Este zumo de limón no es dulce» — Этот лимонный сок не сладкий."
  },
  {
    id: "a0_audio_69",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "Что делают дети вечером?",
    audioText: "Mis hijos leen un libro antes de dormir.",
    options: [
      "Дети читают книгу перед сном.",
      "Дети играют в саду с кошкой.",
      "Дети ужинают на кухне с папой.",
      "Дети смотрят телевизор в комнате."
    ],
    correct: 0,
    explanation: "«Mis hijos leen un libro antes de dormir» — Мои дети читают книгу перед сном."
  },
  {
    id: "a0_build_13",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Семья",
    prompt: "Собери на испанском: «Мой брат читает новую книгу»",
    words: ["nuevo", "Mi", "libro", "lee", "un", "hermano", "una", "escribe"],
    answer: ["Mi", "hermano", "lee", "un", "libro", "nuevo"],
    explanation: "«Mi hermano lee un libro nuevo» — прилагательное «nuevo» ставится после существительного «libro»."
  },
  {
    id: "a0_build_14",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Дом",
    prompt: "Собери на испанском: «Белая чашка находится на кухне»",
    words: ["cocina", "La", "blanca", "está", "taza", "en", "la", "blanco", "es"],
    answer: ["La", "taza", "blanca", "está", "en", "la", "cocina"],
    explanation: "«La taza blanca está en la cocina» — для местоположения используется глагол «estar»."
  },

  /* ========================================================================
     НОВЫЕ 40 ВОПРОСОВ: УРОВЕНЬ A1 (tier: 1)
     22 тест/грамматика + 5 визуальных + 10 аудио + 3 конструктора
     ======================================================================== */
  {
    id: "a1_232",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Какой месяц по-испански называется «Junio»?",
    options: ["Июнь", "Июль", "Январь", "Май"],
    correct: 0,
    explanation: "«Junio» — июнь, «julio» — июль."
  },
  {
    id: "a1_233",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Как по-испански будет «Сентябрь»?",
    options: ["Septiembre", "Octubre", "Noviembre", "Febrero"],
    correct: 0,
    explanation: "«Septiembre» — сентябрь."
  },
  {
    id: "a1_234",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Как по-испански сказать «500»?",
    options: ["Quinientos", "Cincuenta", "Quince", "Doscientos"],
    correct: 0,
    explanation: "«Quinientos» — пятьсот (500)."
  },
  {
    id: "a1_235",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Порядковые",
    prompt: "Что означает слово «Último»?",
    options: ["Последний", "Следующий", "Первый", "Четвёртый"],
    correct: 0,
    explanation: "«Último / última» — последний, крайний по порядку."
  },
  {
    id: "a1_236",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Что такое «El aeropuerto»?",
    options: ["Аэропорт", "Автовокзал", "Морской порт", "Станция метро"],
    correct: 0,
    explanation: "«El aeropuerto» — аэропорт."
  },
  {
    id: "a1_237",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Что означает слово «El puente»?",
    options: ["Мост", "Площадь", "Светофор", "Перекрёсток"],
    correct: 0,
    explanation: "«El puente» — мост (мужского рода)."
  },
  {
    id: "a1_238",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Магазин",
    prompt: "Где в магазине одежды можно примерить вещи — что такое «El probador»?",
    options: ["Примерочная", "Касса", "Витрина", "Отдел скидок"],
    correct: 0,
    explanation: "«El probador» — примерочная кабина (от глагола «probarse» — примерять)."
  },
  {
    id: "a1_239",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Покупки",
    prompt: "Что означает слово «El cambio» при оплате наличными?",
    options: ["Сдача", "Чек", "Ценник", "Кошелёк"],
    correct: 0,
    explanation: "«El cambio» (или «la vuelta») — сдача, а также обмен валюты."
  },
  {
    id: "a1_240",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Отель",
    prompt: "Как попросить в отеле «одноместный номер»?",
    options: [
      "Una habitación individual",
      "Una habitación doble",
      "Una mesa libre",
      "Una entrada infantil"
    ],
    correct: 0,
    explanation: "«Habitación individual» — одноместный номер, «habitación doble» — двухместный."
  },
  {
    id: "a1_241",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Профессии",
    prompt: "Кто такой «El cocinero»?",
    options: ["Повар", "Официант", "Пекарь", "Водитель"],
    correct: 0,
    explanation: "«El cocinero / la cocinera» — повар (от глагола «cocinar» — готовить)."
  },
  {
    id: "a1_242",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Профессии",
    prompt: "Что означает слово «El periodista»?",
    options: ["Журналист", "Переводчик", "Художник", "Программист"],
    correct: 0,
    explanation: "«El / la periodista» — журналист (окончание «-ista» одинаково для обоих родов)."
  },
  {
    id: "a1_243",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Выражения с Tener",
    prompt: "Как сказать «Мне жарко» (о человеке)?",
    options: ["Tengo calor", "Hace calor", "Estoy calor", "Soy calor"],
    correct: 0,
    explanation: "О погоде говорят «hace calor», а о своём ощущении — «tengo calor»."
  },
  {
    id: "a1_244",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Наречия",
    prompt: "Что означает слово «Temprano»?",
    options: ["Рано", "Поздно", "Медленно", "Редко"],
    correct: 0,
    explanation: "«Temprano» — рано, «tarde» — поздно."
  },
  {
    id: "a1_245",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Чередование гласных",
    prompt: "Выбери правильную форму глагола «dormir» для «мы» (внимание: без чередования!):",
    subprompt: "Los domingos nosotros _____ hasta las diez.",
    options: ["dormimos", "duermimos", "duermen", "dormen"],
    correct: 0,
    explanation: "В формах «nosotros» и «vosotros» корневая гласная не меняется: «dormimos» (без «ue»)."
  },
  {
    id: "a1_246",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Чередование гласных",
    prompt: "Выбери правильную форму глагола «querer» для «мы»:",
    subprompt: "Nosotros _____ aprender a bailar flamenco.",
    options: ["queremos", "quieremos", "quieren", "quiero"],
    correct: 0,
    explanation: "Для «nosotros» основа остаётся обычной: «nosotros queremos»."
  },
  {
    id: "a1_247",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Hacer",
    prompt: "Выбери правильную форму глагола «hacer» для «они»:",
    subprompt: "¿Qué _____ tus hermanos los sábados?",
    options: ["hacen", "hago", "hace", "hacemos"],
    correct: 0,
    explanation: "Для 3-го лица множественного числа («tus hermanos») форма глагола «hacer» — «hacen»."
  },
  {
    id: "a1_248",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Ir",
    prompt: "Выбери правильную форму глагола «ir» для «вы» (друзья):",
    subprompt: "¿Adónde _____ vosotros esta tarde?",
    options: ["vais", "vamos", "van", "vas"],
    correct: 0,
    explanation: "Форма глагола «ir» для «vosotros» — «vais»."
  },
  {
    id: "a1_249",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Профессии и Ser",
    prompt: "Выбери правильный вариант («Мой дядя — инженер»):",
    subprompt: "Mi tío _____ en una empresa grande.",
    options: ["es ingeniero", "es un ingeniero", "está ingeniero", "tiene ingeniero"],
    correct: 0,
    explanation: "В испанском перед названием профессии без уточняющего прилагательного артикль не ставится: «es ingeniero»."
  },
  {
    id: "a1_250",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Вопросы со временем",
    prompt: "Какой предлог нужен, чтобы спросить «Во сколько начинается урок?»?",
    subprompt: "¿_____ qué hora empieza la clase?",
    options: ["A", "En", "De", "Por"],
    correct: 0,
    explanation: "Для точного времени события («во сколько?») всегда используется предлог «a»: «¿A qué hora...?»."
  },
  {
    id: "a1_251",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Неопределённые слова",
    prompt: "Вставь правильное слово в вопросе («Ты хочешь чего-нибудь попить?»):",
    subprompt: "¿Quieres tomar _____ frío?",
    options: ["algo", "nada", "alguien", "alguno"],
    correct: 0,
    explanation: "Для неодушевлённого «что-нибудь» используется «algo»."
  },
  {
    id: "a1_252",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Отрицание",
    prompt: "Вставь правильное отрицательное слово («Я ничего не хочу»):",
    subprompt: "Gracias, ahora no quiero _____.",
    options: ["nada", "algo", "nadie", "nunca"],
    correct: 0,
    explanation: "После «no» для значения «ничего» используется слово «nada»."
  },
  {
    id: "a1_253",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Conocer vs Saber",
    prompt: "Какой глагол нужен для знакомства с человеком («Я знаю Хуана»)?",
    subprompt: "Sí, yo _____ muy bien a Juan.",
    options: ["conozco", "sé", "sabo", "conoce"],
    correct: 0,
    explanation: "Для знакомства с людьми и местами используется «conocer» («yo conozco a Juan»)."
  },
  {
    id: "a1_254",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Время",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="67" y2="30" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="75" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: [
      "Es la una y media",
      "Son las seis y cinco",
      "Son las doce y media",
      "Es la una en punto"
    ],
    correct: 0,
    explanation: "Для 1:30 используется единственное число «Es la una y media»."
  },
  {
    id: "a1_255",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Знак",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="36" fill="#1e3a8a" stroke="#ef4444" stroke-width="7"/>
            <text x="55" y="61" fill="#f8fafc" font-size="32" font-weight="900" text-anchor="middle">P</text>
            <line x1="30" y1="25" x2="80" y2="75" stroke="#ef4444" stroke-width="7" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что запрещает этот дорожный знак?",
    options: [
      "Prohibido aparcar (Парковка запрещена)",
      "Prohibido girar a la derecha",
      "Paso obligatorio para peatones",
      "Parada de autobús"
    ],
    correct: 0,
    explanation: "Перечёркнутая буква P — «Prohibido aparcar» (стоянка/парковка запрещена)."
  },
  {
    id: "a1_256",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Магазин",
    svg: `<svg width="210" height="92" viewBox="0 0 210 92">
            <rect x="8" y="6" width="194" height="80" rx="8" fill="#991b1b" stroke="#fbbf24" stroke-width="2.5"/>
            <text x="105" y="34" fill="#fbbf24" font-size="16" font-weight="900" text-anchor="middle">REBAJAS</text>
            <text x="105" y="57" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">HASTA EL 50%</text>
            <text x="105" y="75" fill="#fde68a" font-size="10" text-anchor="middle">Solo esta semana</text>
          </svg>`,
    prompt: "Что означает вывеска «REBAJAS» в витрине магазина?",
    options: ["Распродажа / скидки", "Только наличные", "Магазин закрыт на ремонт", "Новая коллекция без скидок"],
    correct: 0,
    explanation: "«Las rebajas» — сезонная распродажа, «hasta el 50%» — скидки до 50%."
  },
  {
    id: "a1_257",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Отель",
    svg: `<svg width="215" height="90" viewBox="0 0 215 90">
            <rect x="10" y="10" width="195" height="70" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="107" y="39" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">NO MOLESTAR</text>
            <text x="107" y="60" fill="#94a3b8" font-size="11" text-anchor="middle">Habitación 204</text>
          </svg>`,
    prompt: "Зачем эту табличку вешают на дверь номера в отеле?",
    options: [
      "«Не беспокоить»",
      "«Уберите, пожалуйста, номер»",
      "«Свободный номер»",
      "«Ключ на ресепшене»"
    ],
    correct: 0,
    explanation: "«Molestar» — беспокоить / мешать; «No molestar» — «Не беспокоить»."
  },
  {
    id: "a1_258",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Направление",
    svg: `<svg width="110" height="90" viewBox="0 0 110 90">
            <rect x="15" y="15" width="80" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <path d="M38 45 H72 M60 33 L74 45 L60 57" fill="none" stroke="#fbbf24" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    prompt: "Куда указывает стрелка?",
    options: ["A la derecha", "A la izquierda", "Todo recto", "Al lado"],
    correct: 0,
    explanation: "Стрелка указывает направо — «a la derecha»."
  },
  {
    id: "a1_audio_55",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Транспорт",
    prompt: "Где нужно ждать автобус?",
    audioText: "La parada de autobús está al lado del puente.",
    options: [
      "Автобусная остановка находится рядом с мостом.",
      "Станция метро находится напротив площади.",
      "Такси ждёт у входа в аэропорт.",
      "Остановка трамвая на углу улицы."
    ],
    correct: 0,
    explanation: "«La parada de autobús está al lado del puente» — Автобусная остановка рядом с мостом."
  },
  {
    id: "a1_audio_56",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Магазин",
    prompt: "Что спрашивает покупатель?",
    audioText: "Perdone, ¿dónde están los probadores?",
    options: [
      "Извините, где находятся примерочные?",
      "Извините, где можно оплатить картой?",
      "Скажите, когда начинается распродажа?",
      "У вас есть эта куртка другого размера?"
    ],
    correct: 0,
    explanation: "«¿Dónde están los probadores?» — Где находятся примерочные?"
  },
  {
    id: "a1_audio_57",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Отель",
    prompt: "На каком этаже находится номер?",
    audioText: "Su habitación está en el tercer piso, puede usar el ascensor.",
    options: [
      "На третьем этаже, можно воспользоваться лифтом.",
      "На первом этаже рядом с ресепшеном.",
      "На четвёртом этаже, но лифт не работает.",
      "На втором этаже в конце коридора."
    ],
    correct: 0,
    explanation: "«En el tercer piso, puede usar el ascensor» — На третьем этаже, можете воспользоваться лифтом."
  },
  {
    id: "a1_audio_58",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Погода",
    prompt: "Что нужно взять с собой на прогулку?",
    audioText: "Coge el paraguas porque hay nubes negras.",
    options: [
      "Зонт, потому что на небе чёрные тучи.",
      "Солнцезащитные очки, потому что очень ярко.",
      "Тёплый шарф, потому что дует ветер.",
      "Бутылку воды, потому что очень жарко."
    ],
    correct: 0,
    explanation: "«Coge el paraguas porque hay nubes negras» — Возьми зонт, потому что там чёрные тучи."
  },
  {
    id: "a1_audio_59",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Профессии",
    prompt: "Кем работает её муж?",
    audioText: "Mi marido es cocinero y trabaja en un hotel grande.",
    options: [
      "Поваром в большом отеле",
      "Журналистом на телевидении",
      "Официантом в маленьком баре",
      "Инженером в международной фирме"
    ],
    correct: 0,
    explanation: "«Mi marido es cocinero y trabaja en un hotel grande» — Мой муж повар и работает в большом отеле."
  },
  {
    id: "a1_audio_60",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Выходные",
    prompt: "Что говорят друзья о своём расписании?",
    audioText: "Los domingos dormimos hasta las diez de la mañana.",
    options: [
      "По воскресеньям они спят до десяти утра.",
      "По субботам они встают в семь часов.",
      "Каждый день они ложатся спать в десять вечера.",
      "В воскресенье утром они бегают в парке."
    ],
    correct: 0,
    explanation: "«Los domingos dormimos hasta las diez de la mañana» — По воскресеньям мы спим до десяти утра."
  },
  {
    id: "a1_audio_61",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Покупки",
    prompt: "Сколько денег возвращает кассир?",
    audioText: "Aquí tiene su cambio, cinco euros y el recibo.",
    options: [
      "5 евро сдачи и чек",
      "15 евро сдачи без чека",
      "Скидку 5 евро по карте",
      "Новую сумку за 5 евро"
    ],
    correct: 0,
    explanation: "«Aquí tiene su cambio, cinco euros y el recibo» — Вот ваша сдача, пять евро и чек."
  },
  {
    id: "a1_audio_62",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Встреча",
    prompt: "Почему он не идёт на вечеринку?",
    audioText: "No puedo ir porque tengo que recoger a mi amigo en el aeropuerto.",
    options: [
      "Нужно встретить друга в аэропорту.",
      "Нужно сдать экзамен завтра утром.",
      "У него болит горло и высокая температура.",
      "Он уезжает на поезде в другой город."
    ],
    correct: 0,
    explanation: "«Tengo que recoger a mi amigo en el aeropuerto» — Я должен встретить (забрать) друга в аэропорту."
  },
  {
    id: "a1_audio_63",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Учёба",
    prompt: "Что говорит девушка о книгах?",
    audioText: "Compro las novelas en la librería de la esquina.",
    options: [
      "Она покупает романы в книжном магазине на углу.",
      "Она берёт учебники в городской библиотеке.",
      "Она читает новости в интернете по утрам.",
      "Она дарит книги своим друзьям на праздники."
    ],
    correct: 0,
    explanation: "«Compro las novelas en la librería de la esquina» — Я покупаю романы в книжном магазине на углу."
  },
  {
    id: "a1_audio_64",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Навыки",
    prompt: "Что она говорит о вождении?",
    audioText: "Tengo miedo de conducir cuando nieva.",
    options: [
      "Ей страшно водить машину, когда идёт снег.",
      "Ей нравится ездить быстро по пустой дороге.",
      "Она предпочитает ездить на велосипеде весной.",
      "Она ещё не умеет водить машину в городе."
    ],
    correct: 0,
    explanation: "«Tengo miedo de conducir cuando nieva» — Я боюсь водить машину, когда идёт снег."
  },
  {
    id: "a1_build_39",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Время",
    prompt: "Собери вопрос на испанском: «Во сколько открывается супермаркет?»",
    words: ["supermercado", "A", "abre", "hora", "qué", "el", "cierra", "la"],
    answer: ["A", "qué", "hora", "abre", "el", "supermercado"],
    explanation: "«¿A qué hora abre el supermercado?» — Во сколько открывается супермаркет?"
  },
  {
    id: "a1_build_40",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Привычки",
    prompt: "Собери на испанском: «Мы спим по восемь часов каждую ночь»",
    words: ["noches", "Dormimos", "las", "horas", "todas", "ocho", "Duermimos", "los"],
    answer: ["Dormimos", "ocho", "horas", "todas", "las", "noches"],
    explanation: "«Dormimos ocho horas todas las noches» — в форме «nosotros» глагол «dormir» не меняет «o» на «ue»."
  },
  {
    id: "a1_build_41",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Магазин",
    prompt: "Собери на испанском: «Я собираюсь примерить эту рубашку в примерочной»",
    words: ["probador", "Voy", "camisa", "probarme", "el", "a", "esta", "en", "este"],
    answer: ["Voy", "a", "probarme", "esta", "camisa", "en", "el", "probador"],
    explanation: "«Voy a probarme esta camisa en el probador» — возвратное местоимение «me» крепится к инфинитиву «probar»."
  },

  /* ========================================================================
     НОВЫЕ 20 ВОПРОСОВ: УРОВЕНЬ A2–B1 (tier: 2)
     8 грамматика/лексика + 2 визуальных + 5 аудио + 5 конструкторов
     ======================================================================== */
  {
    id: "b1_113",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Indefinido (неправильные)",
    prompt: "Выбери правильную форму прошедшего времени от глагола «venir» («Она пришла поздно»):",
    subprompt: "Anoche Marta _____ a la cena media hora tarde.",
    options: ["vino", "venió", "venía", "vendrá"],
    correct: 0,
    explanation: "У глагола «venir» в Pretérito Indefinido особая основа «vin-»: «ella vino»."
  },
  {
    id: "b1_114",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Imperfecto (неправильные)",
    prompt: "Выбери правильную форму Imperfecto от глагола «ir» («Мы часто ходили в горы»):",
    subprompt: "Cuando vivíamos en el norte, _____ a la montaña cada mes.",
    options: ["íbamos", "fuimos", "vamos", "iríamos"],
    correct: 0,
    explanation: "«Ir» — один из трёх неправильных глаголов в Pretérito Imperfecto: «iba, ibas, iba, íbamos, ibais, iban»."
  },
  {
    id: "b1_115",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Futuro Simple",
    prompt: "Выбери правильную форму будущего времени от «haber» (безличное «будет много людей»):",
    subprompt: "Mañana _____ mucha gente en el estadio.",
    options: ["habrá", "haberá", "habría", "hay"],
    correct: 0,
    explanation: "Безличная форма будущего времени от «haber» — «habrá» («будет / будут»)."
  },
  {
    id: "b1_116",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Безличное Se",
    prompt: "Как на вывеске правильно написать «Здесь говорят по-испански»?",
    subprompt: "_____ español en esta tienda.",
    options: ["Se habla", "Se hablan", "Habla se", "Está hablado"],
    correct: 0,
    explanation: "Безличная конструкция с «se» согласуется с единственным числом («español»): «Se habla español»."
  },
  {
    id: "b1_117",
    tier: 2,
    type: "grammar",
    typeLabel: "Грамматика A2–B1 • Местоимение Lo que",
    prompt: "Вставь правильное союзное слово в значении «то, что»:",
    subprompt: "No entiendo _____ me estás diciendo.",
    options: ["lo que", "el que", "la que", "quien"],
    correct: 0,
    explanation: "«Lo que» переводится как «то, что» и относится ко всей ситуации или мысли в целом."
  },
  {
    id: "b1_118",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Что означает испанское наречие «Actualmente»?",
    options: ["В настоящее время / сейчас", "На самом деле", "Актуально / злободневно", "Внезапно"],
    correct: 0,
    explanation: "«Actualmente» = «сейчас, в наши дни» (а «на самом деле» по-испански — «en realidad»)."
  },
  {
    id: "b1_119",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Ложные друзья",
    prompt: "Что означает глагол «Asistir a» в фразе «Asistir a un concierto»?",
    options: [
      "Присутствовать на концерте / посетить его",
      "Помогать музыкантам на сцене",
      "Опоздать на начало концерта",
      "Организовать концерт"
    ],
    correct: 0,
    explanation: "«Asistir a» означает «посетить мероприятие / присутствовать» (а «помогать» — «ayudar»)."
  },
  {
    id: "b1_120",
    tier: 2,
    type: "translate",
    typeLabel: "Лексика A2–B1 • Идиомы",
    prompt: "Что значит идиома «Costar un ojo de la cara»?",
    options: [
      "Стоить безумно дорого",
      "Быть совершенно бесплатным",
      "Вызывать сильную усталость",
      "Требовать много времени"
    ],
    correct: 0,
    explanation: "«Costar un ojo de la cara» (буквально «стоить глаза с лица») — стоить баснословно дорого."
  },
  {
    id: "b1_121",
    tier: 2,
    type: "visual",
    typeLabel: "Картинка A2–B1 • Ресторан",
    svg: `<svg width="235" height="96" viewBox="0 0 235 96">
            <rect x="8" y="6" width="219" height="84" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
            <text x="117" y="28" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">CARTA DE ALÉRGENOS</text>
            <text x="117" y="49" fill="#f1f5f9" font-size="11" text-anchor="middle">Paella marinera • 16 €</text>
            <text x="117" y="69" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">APTA PARA CELÍACOS (SIN GLUTEN)</text>
          </svg>`,
    prompt: "Кому подходит эта паэлья согласно надписи «APTA PARA CELÍACOS»?",
    options: [
      "Людям, которым нельзя глютен",
      "Только вегетарианцам",
      "Людям с аллергией на морепродукты",
      "Детям до двенадцати лет"
    ],
    correct: 0,
    explanation: "«Apto para celíacos (sin gluten)» — подходит для людей с непереносимостью глютена."
  },
  {
    id: "b1_122",
    tier: 2,
    type: "visual",
    typeLabel: "Картинка A2–B1 • Музей",
    svg: `<svg width="235" height="96" viewBox="0 0 235 96">
            <rect x="8" y="6" width="219" height="84" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
            <text x="117" y="28" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">NORMAS DE LA SALA</text>
            <text x="117" y="49" fill="#f1f5f9" font-size="11" text-anchor="middle">Prohibido tocar las obras</text>
            <text x="117" y="69" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">Permitido hacer fotos SIN flash</text>
          </svg>`,
    prompt: "Что разрешено делать в этом зале музея?",
    options: [
      "Фотографировать без вспышки",
      "Трогать экспонаты в перчатках",
      "Снимать видео со штативом и вспышкой",
      "Заходить с едой и напитками"
    ],
    correct: 0,
    explanation: "«Permitido hacer fotos sin flash» — разрешено фотографировать без вспышки (а трогать экспонаты запрещено)."
  },
  {
    id: "b1_123",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Согласие",
    prompt: "Что отвечает собеседник?",
    audioText: "Estoy totalmente de acuerdo contigo en ese punto.",
    options: [
      "Он полностью согласен с тобой в этом вопросе.",
      "Он категорически не согласен с твоим мнением.",
      "Ему нужно время, чтобы обдумать это предложение.",
      "Он не понял, о какой именно точке зрения идёт речь."
    ],
    correct: 0,
    explanation: "«Estar de acuerdo con alguien» — быть согласным с кем-либо."
  },
  {
    id: "b1_124",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Изменения",
    prompt: "Что произошло во время разговора?",
    audioText: "Se puso muy nervioso cuando empezó la entrevista.",
    options: [
      "Он сильно разволновался, когда началось собеседование.",
      "Он обрадовался, когда получил приглашение на собеседование.",
      "Он уверенно ответил на все вопросы интервьюера.",
      "Он перепутал время начала собеседования."
    ],
    correct: 0,
    explanation: "«Ponerse + прилагательное» означает резкое изменение эмоционального состояния («разволноваться»)."
  },
  {
    id: "b1_125",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Благодарность",
    prompt: "За что благодарит говорящий?",
    audioText: "Muchas gracias por haberme ayudado con la mudanza.",
    options: [
      "За то, что помог ему с переездом.",
      "За то, что одолжил ему машину на выходные.",
      "За то, что пригласил его на новоселье.",
      "За то, что нашёл для него новую квартиру."
    ],
    correct: 0,
    explanation: "«La mudanza» — переезд; «gracias por haberme ayudado» — спасибо за то, что помог мне."
  },
  {
    id: "b1_126",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Время",
    prompt: "Почему друзья решили пойти домой?",
    audioText: "Vámonos ya porque se está haciendo muy tarde.",
    options: [
      "Потому что уже становится очень поздно.",
      "Потому что скоро закроется метро.",
      "Потому что на улице начался сильный дождь.",
      "Потому что все очень устали после работы."
    ],
    correct: 0,
    explanation: "«Se está haciendo muy tarde» — становится очень поздно."
  },
  {
    id: "b1_127",
    tier: 2,
    type: "audio",
    typeLabel: "Аудирование A2–B1 • Покупки",
    prompt: "Почему он не купил те часы?",
    audioText: "Me encantaba ese reloj, pero costaba un ojo de la cara.",
    options: [
      "Они стоили баснословно дорого.",
      "У них был поцарапан экран.",
      "Они не подходили к его костюму.",
      "В магазине их уже раскупили."
    ],
    correct: 0,
    explanation: "«Costaba un ojo de la cara» — стоили безумно дорого."
  },
  {
    id: "b1_build_44",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «Не думаю, что они придут на встречу»",
    words: ["reunión", "No", "que", "la", "creo", "vengan", "a", "vienen", "en"],
    answer: ["No", "creo", "que", "vengan", "a", "la", "reunión"],
    explanation: "«No creo que vengan a la reunión» — после «no creo que» требуется Subjuntivo («vengan»)."
  },
  {
    id: "b1_build_45",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Futuro Simple",
    prompt: "Собери на испанском: «Завтра на концерте будет много людей»",
    words: ["mañana", "Habrá", "en", "gente", "concierto", "mucha", "el", "Habría", "muy"],
    answer: ["Habrá", "mucha", "gente", "en", "el", "concierto", "mañana"],
    explanation: "«Habrá mucha gente en el concierto mañana» — безличное «будет» передаётся формой «habrá»."
  },
  {
    id: "b1_build_46",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Por vs Para",
    prompt: "Собери на испанском: «Спасибо за помощь с этой проблемой»",
    words: ["problema", "Gracias", "con", "ayudarme", "este", "por", "para", "esta"],
    answer: ["Gracias", "por", "ayudarme", "con", "este", "problema"],
    explanation: "«Gracias por ayudarme con este problema» — после «gracias» используется «por», а «problema» — мужского рода («este problema»)."
  },
  {
    id: "b1_build_47",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Condicional",
    prompt: "Собери на испанском: «Я бы хотел посетить твою лекцию»",
    words: ["conferencia", "Me", "a", "asistir", "gustaría", "tu", "gusta", "en"],
    answer: ["Me", "gustaría", "asistir", "a", "tu", "conferencia"],
    explanation: "«Me gustaría asistir a tu conferencia» — глагол «asistir» (посетить мероприятие) требует предлога «a»."
  },
  {
    id: "b1_build_48",
    tier: 2,
    type: "builder",
    typeLabel: "Конструктор A2–B1 • Subjuntivo",
    prompt: "Собери на испанском: «До того как начнётся фильм, выключи телефон»",
    words: ["móvil", "Antes", "empiece", "el", "de", "película", "que", "apaga", "la", "empieza"],
    answer: ["Antes", "de", "que", "empiece", "la", "película", "apaga", "el", "móvil"],
    explanation: "«Antes de que empiece la película, apaga el móvil» — союз «antes de que» всегда требует Subjuntivo («empiece»)."
  },
/* ========================================================================
     ЕЩЁ 50 ВОПРОСОВ: УРОВЕНЬ A0 (tier: 0)
     28 тест/грамматика + 6 визуальных + 13 аудио + 3 конструктора
     ======================================================================== */
  {
    id: "a0_320",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа",
    prompt: "Как по-испански называется «Ластик / стёрка»?",
    options: ["La goma", "La regla", "La pizarra", "La tiza"],
    correct: 0,
    explanation: "«La goma» (или «la goma de borrar») — школьный ластик."
  },
  {
    id: "a0_321",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа",
    prompt: "Что означает слово «La pizarra»?",
    options: ["Школьная доска", "Парта", "Тетрадь", "Линейка"],
    correct: 0,
    explanation: "«La pizarra» — классная доска."
  },
  {
    id: "a0_322",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа",
    prompt: "Как по-испански сказать «Словарь»?",
    options: ["El diccionario", "El cuaderno", "El periódico", "El mapa"],
    correct: 0,
    explanation: "«El diccionario» — словарь."
  },
  {
    id: "a0_323",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El pepino»?",
    options: ["Огурец", "Помидор", "Чеснок", "Кабачок"],
    correct: 0,
    explanation: "«El pepino» — огурец."
  },
  {
    id: "a0_324",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански будет «Чеснок»?",
    options: ["El ajo", "La cebolla", "La sal", "El limón"],
    correct: 0,
    explanation: "«El ajo» — чеснок."
  },
  {
    id: "a0_325",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Что означает слово «El melón»?",
    options: ["Дыня", "Арбуз", "Ананас", "Персик"],
    correct: 0,
    explanation: "«El melón» — дыня, «la sandía» — арбуз."
  },
  {
    id: "a0_326",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как в Испании называют «Бутерброд / сэндвич из багета»?",
    options: ["El bocadillo", "El pastel", "El plato", "El huevo"],
    correct: 0,
    explanation: "«El bocadillo» (разговорное «bocata») — классический испанский бутерброд из багета."
  },
  {
    id: "a0_327",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El caramelo»?",
    options: ["Конфета / леденец", "Печенье", "Мороженое", "Варенье"],
    correct: 0,
    explanation: "«El caramelo» — конфета, леденец."
  },
  {
    id: "a0_328",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Лиса»?",
    options: ["El zorro", "El lobo", "El conejo", "El pato"],
    correct: 0,
    explanation: "«El zorro» — лис / лиса."
  },
  {
    id: "a0_329",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La abeja»?",
    options: ["Пчела", "Бабочка", "Муравей", "Птица"],
    correct: 0,
    explanation: "«La abeja» — пчела (она делает «la miel» — мёд)."
  },
  {
    id: "a0_330",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански называется «Жираф»?",
    options: ["La jirafa", "El elefante", "El tigre", "El mono"],
    correct: 0,
    explanation: "«La jirafa» — жираф (женского рода, пишется через j)."
  },
  {
    id: "a0_331",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «La piedra»?",
    options: ["Камень", "Песок", "Трава", "Лист"],
    correct: 0,
    explanation: "«La piedra» — камень."
  },
  {
    id: "a0_332",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански сказать «Трава»?",
    options: ["La hierba", "La arena", "La nube", "La flor"],
    correct: 0,
    explanation: "«La hierba» — трава (начальная «h» не читается)."
  },
  {
    id: "a0_333",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «El armario»?",
    options: ["Шкаф", "Диван", "Ковёр", "Стол"],
    correct: 0,
    explanation: "«El armario» — шкаф для одежды или посуды."
  },
  {
    id: "a0_334",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански будет «Мыло»?",
    options: ["El jabón", "La toalla", "El cepillo", "El espejo"],
    correct: 0,
    explanation: "«El jabón» — мыло, «la toalla» — полотенце."
  },
  {
    id: "a0_335",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «La toalla»?",
    options: ["Полотенце", "Подушка", "Одеяло", "Штора"],
    correct: 0,
    explanation: "«La toalla» — полотенце."
  },
  {
    id: "a0_336",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Как по-испански называется «Коробка / ящик»?",
    options: ["La caja", "La bolsa", "La carta", "La llave"],
    correct: 0,
    explanation: "«La caja» — коробка (а также касса в магазине)."
  },
  {
    id: "a0_337",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «La cara»?",
    options: ["Лицо", "Шея", "Спина", "Плечо"],
    correct: 0,
    explanation: "«La cara» — лицо."
  },
  {
    id: "a0_338",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански будет «Шея»?",
    options: ["El cuello", "El brazo", "El dedo", "La rodilla"],
    correct: 0,
    explanation: "«El cuello» — шея (а также воротник рубашки)."
  },
  {
    id: "a0_339",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «El cinturón»?",
    options: ["Ремень / пояс", "Галстук", "Карман", "Воротник"],
    correct: 0,
    explanation: "«El cinturón» — ремень."
  },
  {
    id: "a0_340",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Полный»?",
    options: ["Lleno", "Vacío", "Oscuro", "Duro"],
    correct: 0,
    explanation: "«Lleno» — полный, «vacío» — пустой."
  },
  {
    id: "a0_341",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Vacío»?",
    options: ["Пустой", "Грязный", "Тёмный", "Мягкий"],
    correct: 0,
    explanation: "«Vacío» — пустой."
  },
  {
    id: "a0_342",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Как по-испански будет «Прыгать»?",
    options: ["Saltar", "Caminar", "Nadar", "Cantar"],
    correct: 0,
    explanation: "«Saltar» — прыгать."
  },
  {
    id: "a0_343",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Dibujar»?",
    options: ["Рисовать", "Читать", "Писать", "Считать"],
    correct: 0,
    explanation: "«Dibujar» — рисовать."
  },
  {
    id: "a0_344",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Escribir",
    prompt: "Вставь правильную форму глагола «escribir» («Я пишу письмо»):",
    subprompt: "Yo _____ una carta a mi abuela.",
    options: ["escribo", "escribes", "escribe", "escribimos"],
    correct: 0,
    explanation: "Для местоимения «yo» в настоящем времени глагол имеет окончание «-o»: «yo escribo»."
  },
  {
    id: "a0_345",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Abrir",
    prompt: "Вставь правильную форму глагола «abrir» («Мы открываем дверь»):",
    subprompt: "Nosotros _____ la puerta de la casa.",
    options: ["abrimos", "abro", "abres", "abren"],
    correct: 0,
    explanation: "Для «nosotros» глаголы на «-ir» имеют окончание «-imos»: «abrimos»."
  },
  {
    id: "a0_346",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Множественное число",
    prompt: "Как будет «цветы» во множественном числе от «la flor»?",
    options: ["Las flores", "Las flors", "Los flores", "La flores"],
    correct: 0,
    explanation: "К слову на согласную («flor») добавляется «-es» и артикль «las»: «las flores»."
  },
  {
    id: "a0_347",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Исключения рода",
    prompt: "Выбери правильный артикль для слова «idioma» (язык — слово греческого происхождения):",
    subprompt: "El español es _____ idioma muy bonito.",
    options: ["un", "una", "la", "unas"],
    correct: 0,
    explanation: "Слово «el idioma» — мужского рода, несмотря на окончание «-a» («un idioma»)."
  },
  {
    id: "a0_348",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Фрукты",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="65,10 56,28 74,28" fill="#16a34a"/>
            <polygon points="50,15 58,29 66,24" fill="#22c55e"/>
            <polygon points="80,15 72,29 64,24" fill="#22c55e"/>
            <ellipse cx="65" cy="54" rx="20" ry="25" fill="#f59e0b"/>
            <line x1="50" y1="42" x2="80" y2="66" stroke="#b45309" stroke-width="2"/>
            <line x1="80" y1="42" x2="50" y2="66" stroke="#b45309" stroke-width="2"/>
          </svg>`,
    prompt: "Какой фрукт изображён на картинке?",
    options: ["La piña", "La manzana", "La pera", "El plátano"],
    correct: 0,
    explanation: "Ананас по-испански — «la piña»."
  },
  {
    id: "a0_349",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Ягоды",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M52 54 Q62 24 72 20 Q78 24 84 54" fill="none" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/>
            <circle cx="50" cy="60" r="12" fill="#e11d48"/>
            <circle cx="84" cy="60" r="12" fill="#e11d48"/>
          </svg>`,
    prompt: "Как по-испански называется эта ягода?",
    options: ["La cereza", "La naranja", "El limón", "El tomate"],
    correct: 0,
    explanation: "«La cereza» — вишня / черешня."
  },
  {
    id: "a0_350",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Школа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="26" y="40" width="64" height="14" fill="#fbbf24"/>
            <rect x="20" y="40" width="8" height="14" rx="2" fill="#fb7185"/>
            <polygon points="90,40 110,47 90,54" fill="#fde68a"/>
            <polygon points="103,44.5 110,47 103,49.5" fill="#0f172a"/>
          </svg>`,
    prompt: "Какой школьный предмет нарисован на картинке?",
    options: ["El lápiz", "El libro", "La goma", "La regla"],
    correct: 0,
    explanation: "Карандаш — «el lápiz»."
  },
  {
    id: "a0_351",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Предметы",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="34" y="28" width="62" height="44" rx="4" fill="#d97706" stroke="#92400e" stroke-width="2.5"/>
            <line x1="34" y1="42" x2="96" y2="42" stroke="#92400e" stroke-width="2.5"/>
            <rect x="57" y="34" width="16" height="8" fill="#fbbf24"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La caja", "La mesa", "La cama", "La ventana"],
    correct: 0,
    explanation: "Картонная коробка — «la caja»."
  },
  {
    id: "a0_352",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Транспорт",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="28,54 102,54 88,72 42,72" fill="#92400e"/>
            <line x1="65" y1="16" x2="65" y2="54" stroke="#e2e8f0" stroke-width="3"/>
            <polygon points="67,18 96,48 67,48" fill="#f8fafc"/>
            <polygon points="63,24 40,48 63,48" fill="#38bdf8"/>
          </svg>`,
    prompt: "Какой транспорт изображён на картинке?",
    options: ["El barco", "El avión", "El coche", "El tren"],
    correct: 0,
    explanation: "Корабль / парусная лодка — «el barco»."
  },
  {
    id: "a0_353",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Часы",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="76" y2="38" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="23" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las dos", "Son las cuatro", "Son las diez", "Son las seis"],
    correct: 0,
    explanation: "Часовая стрелка на 2, минутная на 12 — ровно два часа: «Son las dos»."
  },
  {
    id: "a0_audio_70",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Школа",
    prompt: "Что лежит на парте у ученика?",
    audioText: "Tengo un lápiz, una goma y un diccionario.",
    options: [
      "Карандаш, ластик и словарь",
      "Ручка, тетрадь и книга",
      "Линейка, ножницы и бумага",
      "Рюкзак, карта и телефон"
    ],
    correct: 0,
    explanation: "«Tengo un lápiz, una goma y un diccionario» — У меня есть карандаш, ластик и словарь."
  },
  {
    id: "a0_audio_71",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что человек заказывает на десерт?",
    audioText: "Quiero un pastel de manzana y miel.",
    options: [
      "Яблочный пирог с мёдом",
      "Шоколадное мороженое с орехами",
      "Сладкое печенье с молоком",
      "Свежую клубнику с сахаром"
    ],
    correct: 0,
    explanation: "«Quiero un pastel de manzana y miel» — Я хочу яблочный пирог и мёд."
  },
  {
    id: "a0_audio_72",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Кого видел ребёнок в зоопарке?",
    audioText: "En el parque hay una jirafa alta y un elefante gris.",
    options: [
      "Высокого жирафа и серого слона",
      "Большого медведя и рыжую лису",
      "Жёлтого льва и быстрого тигра",
      "Весёлую обезьяну и зелёную черепаху"
    ],
    correct: 0,
    explanation: "«Una jirafa alta y un elefante gris» — высокий жираф и серый слон."
  },
  {
    id: "a0_audio_73",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Где лежат чистые полотенца?",
    audioText: "Las toallas limpias están dentro del armario.",
    options: [
      "Внутри шкафа",
      "На кровати в спальне",
      "На стуле в ванной",
      "В коробке на кухне"
    ],
    correct: 0,
    explanation: "«Las toallas limpias están dentro del armario» — Чистые полотенца лежат внутри шкафа."
  },
  {
    id: "a0_audio_74",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Стакан",
    prompt: "Что говорит человек о своём стакане?",
    audioText: "Mi vaso está vacío, quiero más agua.",
    options: [
      "Его стакан пуст, и он хочет ещё воды.",
      "Его чашка полна горячего чая.",
      "Его стакан грязный, нужен другой.",
      "Он уже выпил весь апельсиновый сок."
    ],
    correct: 0,
    explanation: "«Mi vaso está vacío, quiero más agua» — Мой стакан пустой, я хочу ещё воды."
  },
  {
    id: "a0_audio_75",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Одежда",
    prompt: "Что ищет мальчик?",
    audioText: "No encuentro mis calcetines ni mi cinturón negro.",
    options: [
      "Свои носки и чёрный ремень",
      "Свои перчатки и серый шарф",
      "Свои туфли и синие брюки",
      "Свою кепку и тёплое пальто"
    ],
    correct: 0,
    explanation: "«Mis calcetines ni mi cinturón negro» — мои носки и мой чёрный ремень."
  },
  {
    id: "a0_audio_76",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Сколько лет её сестре?",
    audioText: "Mi hermana tiene diecisiete años.",
    options: ["17 лет", "16 лет", "19 лет", "7 лет"],
    correct: 0,
    explanation: "«Mi hermana tiene diecisiete años» — Моей сестре семнадцать лет."
  },
  {
    id: "a0_audio_77",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Природа",
    prompt: "Что происходит в саду?",
    audioText: "Las abejas y las mariposas vuelan sobre las flores.",
    options: [
      "Пчёлы и бабочки летают над цветами.",
      "Птицы поют на высоких деревьях.",
      "Лягушки сидят на камнях у воды.",
      "Собака бегает по зелёной траве."
    ],
    correct: 0,
    explanation: "«Las abejas y las mariposas vuelan sobre las flores» — Пчёлы и бабочки летают над цветами."
  },
  {
    id: "a0_audio_78",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "Что делает бабушка утром?",
    audioText: "Mi abuela lava su cara con agua fría y jabón.",
    options: [
      "Умывает лицо холодной водой с мылом.",
      "Готовит завтрак на светлой кухне.",
      "Читает утреннюю газету в саду.",
      "Поливает красивые цветы у дома."
    ],
    correct: 0,
    explanation: "«Lava su cara con agua fría y jabón» — моет лицо холодной водой и мылом."
  },
  {
    id: "a0_audio_79",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Какой салат они готовят?",
    audioText: "Preparamos una ensalada con tomate, pepino y sal.",
    options: [
      "Салат с помидором, огурцом и солью",
      "Суп с картофелем, луком и чесноком",
      "Рис с курицей и зелёным перцем",
      "Фруктовый салат с дыней и виноградом"
    ],
    correct: 0,
    explanation: "«Con tomate, pepino y sal» — с помидором, огурцом и солью."
  },
  {
    id: "a0_audio_80",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Языки",
    prompt: "Что говорит диктор об испанском языке?",
    audioText: "El español es un idioma muy bonito.",
    options: [
      "Испанский — очень красивый язык.",
      "Испанский — довольно лёгкий язык.",
      "Испанский очень популярен в мире.",
      "Я учу испанский каждый день."
    ],
    correct: 0,
    explanation: "«El español es un idioma muy bonito» — Испанский — очень красивый язык."
  },
  {
    id: "a0_audio_81",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Действия",
    prompt: "Что делают дети в классе?",
    audioText: "Los niños escriben palabras nuevas en la pizarra.",
    options: [
      "Дети пишут новые слова на доске.",
      "Дети рисуют животных в тетрадях.",
      "Дети читают сказку вслух учителю.",
      "Дети ищут слова в большом словаре."
    ],
    correct: 0,
    explanation: "«Los niños escriben palabras nuevas en la pizarra» — Дети пишут новые слова на школьной доске."
  },
  {
    id: "a0_audio_82",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Природа",
    prompt: "Что видно вечером на улице?",
    audioText: "La noche es muy oscura, pero la luna brilla.",
    options: [
      "Ночь очень тёмная, но светит луна.",
      "Вечер прохладный, но дует тёплый ветер.",
      "На небе много звёзд и белых облаков.",
      "Идёт тихий снег и очень холодно."
    ],
    correct: 0,
    explanation: "«La noche es muy oscura, pero la luna brilla» — Ночь очень тёмная, но луна светит."
  },
  {
    id: "a0_build_15",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Творчество",
    prompt: "Собери на испанском: «Мальчик рисует большой дом»",
    words: ["grande", "El", "dibuja", "casa", "niño", "una", "un", "escribe"],
    answer: ["El", "niño", "dibuja", "una", "casa", "grande"],
    explanation: "«El niño dibuja una casa grande» — женский род «una casa» и прилагательное «grande»."
  },
  {
    id: "a0_build_16",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Еда",
    prompt: "Собери на испанском: «Я хочу купить бутерброд с сыром»",
    words: ["queso", "Quiero", "bocadillo", "de", "comprar", "un", "con", "una"],
    answer: ["Quiero", "comprar", "un", "bocadillo", "de", "queso"],
    explanation: "«Quiero comprar un bocadillo de queso» — начинка бутерброда обычно вводится через «de»."
  },
  {
    id: "a0_build_17",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Дом",
    prompt: "Собери на испанском: «Чистое полотенце находится в ванной»",
    words: ["baño", "La", "está", "toalla", "el", "limpia", "en", "sucia", "es"],
    answer: ["La", "toalla", "limpia", "está", "en", "el", "baño"],
    explanation: "«La toalla limpia está en el baño» — прилагательное «limpia» согласуется с «la toalla»."
  },
/* ========================================================================
     ФИНАЛЬНЫЕ 10 ВОПРОСОВ: УРОВЕНЬ A0 (tier: 0) — ДО РОВНЫХ 1000!
     ======================================================================== */
  {
    id: "a0_354",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Город",
    prompt: "Как по-испански называется «Магазин»?",
    options: ["La tienda", "La escuela", "La casa", "La plaza"],
    correct: 0,
    explanation: "«La tienda» — магазин (любой небольшой магазин или лавка)."
  },
  {
    id: "a0_355",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Досуг",
    prompt: "Что означает слово «El cine»?",
    options: ["Кино / кинотеатр", "Театр", "Музей", "Парк"],
    correct: 0,
    explanation: "«El cine» — кино и кинотеатр."
  },
  {
    id: "a0_356",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Как по-испански будет «Письмо»?",
    options: ["La carta", "El libro", "El papel", "La foto"],
    correct: 0,
    explanation: "«La carta» — бумажное письмо (а также меню в ресторане)."
  },
  {
    id: "a0_357",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Покупки",
    prompt: "Что означает слово «El dinero»?",
    options: ["Деньги", "Цена", "Чек", "Подарок"],
    correct: 0,
    explanation: "«El dinero» — деньги (используется в единственном числе)."
  },
  {
    id: "a0_358",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Покупки",
    prompt: "Как по-испански называется «Пакет / сумка»?",
    options: ["La bolsa", "La caja", "La mesa", "La puerta"],
    correct: 0,
    explanation: "«La bolsa» — пакет или сумка для покупок."
  },
  {
    id: "a0_359",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Трудный / сложный»?",
    options: ["Difícil", "Fácil", "Nuevo", "Rápido"],
    correct: 0,
    explanation: "«Difícil» — трудный, сложный (антоним к «fácil»)."
  },
  {
    id: "a0_360",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Trabajar",
    prompt: "Вставь правильную форму глагола «trabajar» («Мои родители работают здесь»):",
    subprompt: "Mis padres _____ en esta ciudad.",
    options: ["trabajan", "trabaja", "trabajamos", "trabajo"],
    correct: 0,
    explanation: "«Mis padres» (они) требуют форму 3-го лица множественного числа на «-an»: «trabajan»."
  },
  {
    id: "a0_361",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Ягоды",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M48 30 C48 22 82 22 82 30 C82 52 70 74 65 74 C60 74 48 52 48 30 Z" fill="#ef4444"/>
            <polygon points="52,26 65,16 78,26 70,30 65,24 60,30" fill="#22c55e"/>
            <circle cx="58" cy="40" r="1.8" fill="#fde047"/>
            <circle cx="71" cy="42" r="1.8" fill="#fde047"/>
            <circle cx="64" cy="52" r="1.8" fill="#fde047"/>
            <circle cx="59" cy="58" r="1.8" fill="#fde047"/>
            <circle cx="69" cy="60" r="1.8" fill="#fde047"/>
          </svg>`,
    prompt: "Какая ягода изображена на картинке?",
    options: ["La fresa", "La cereza", "La manzana", "El tomate"],
    correct: 0,
    explanation: "Клубника по-испански — «la fresa»."
  },
  {
    id: "a0_audio_83",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Досуг",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Vamos al cine esta noche.",
    options: [
      "Мы идём в кино сегодня вечером.",
      "Мы идём в парк завтра утром.",
      "Мы идём в магазин после обеда.",
      "Мы идём домой прямо сейчас."
    ],
    correct: 0,
    explanation: "«Vamos al cine esta noche» — Мы идём в кино сегодня вечером."
  },
  {
    id: "a0_audio_84",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Магазин",
    prompt: "Во сколько открывается магазин?",
    audioText: "La tienda abre a las nueve.",
    options: ["В 9:00", "В 8:00", "В 10:00", "В 7:00"],
    correct: 0,
    explanation: "«La tienda abre a las nueve» — Магазин открывается в девять часов."
  },
/* ========================================================================
     НОВЫЕ 50 ВОПРОСОВ: УРОВЕНЬ A0 (tier: 0)
     a0_362..392 + a0_audio_85..98 + a0_build_18..22
     ======================================================================== */
  {
    id: "a0_362",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La serpiente»?",
    options: ["Змея", "Черепаха", "Лягушка", "Ящерица"],
    correct: 0,
    explanation: "«La serpiente» — змея (женского рода)."
  },
  {
    id: "a0_363",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански называется «Дельфин»?",
    options: ["El delfín", "El tiburón", "La ballena", "El pez"],
    correct: 0,
    explanation: "«El delfín» — дельфин."
  },
  {
    id: "a0_364",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La hormiga»?",
    options: ["Муравей", "Пчела", "Бабочка", "Паук"],
    correct: 0,
    explanation: "«La hormiga» — муравей."
  },
  {
    id: "a0_365",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Растительное / оливковое масло»?",
    options: ["El aceite", "La mantequilla", "El vinagre", "La salsa"],
    correct: 0,
    explanation: "«El aceite» — жидкое масло (оливковое — «aceite de oliva»)."
  },
  {
    id: "a0_366",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La pimienta»?",
    options: ["Перец (специя)", "Соль", "Сахар", "Мука"],
    correct: 0,
    explanation: "«La pimienta» — молотый перец или перец горошком (а овощ — «el pimiento»)."
  },
  {
    id: "a0_367",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански будет «Йогурт»?",
    options: ["El yogur", "El queso", "La crema", "El flan"],
    correct: 0,
    explanation: "«El yogur» — йогурт."
  },
  {
    id: "a0_368",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Что означает слово «El melocotón»?",
    options: ["Персик", "Абрикос", "Слива", "Груша"],
    correct: 0,
    explanation: "«El melocotón» — персик."
  },
  {
    id: "a0_369",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански называются «Сапоги / ботинки»?",
    options: ["Las botas", "Los calcetines", "Los zapatos", "Las sandalias"],
    correct: 0,
    explanation: "«Las botas» — сапоги или высокие ботинки."
  },
  {
    id: "a0_370",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Что означает слово «La corbata»?",
    options: ["Галстук", "Ремень", "Воротник", "Пиджак"],
    correct: 0,
    explanation: "«La corbata» — галстук."
  },
  {
    id: "a0_371",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански будет «Пижама»?",
    options: ["El pijama", "El vestido", "La falda", "El abrigo"],
    correct: 0,
    explanation: "«El pijama» — пижама (в Испании обычно мужского рода)."
  },
  {
    id: "a0_372",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «La rodilla»?",
    options: ["Колено", "Локоть", "Плечо", "Спина"],
    correct: 0,
    explanation: "«La rodilla» — колено."
  },
  {
    id: "a0_373",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Как по-испански сказать «Плечо»?",
    options: ["El hombro", "El brazo", "El cuello", "El dedo"],
    correct: 0,
    explanation: "«El hombro» — плечо."
  },
  {
    id: "a0_374",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «La alfombra»?",
    options: ["Ковёр", "Штора", "Подушка", "Одеяло"],
    correct: 0,
    explanation: "«La alfombra» — ковёр на полу."
  },
  {
    id: "a0_375",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански называется «Спальня»?",
    options: ["El dormitorio", "La cocina", "El jardín", "El pasillo"],
    correct: 0,
    explanation: "«El dormitorio» (также «la habitación») — спальня."
  },
  {
    id: "a0_376",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «El techo»?",
    options: ["Крыша / потолок", "Стена", "Пол", "Балкон"],
    correct: 0,
    explanation: "«El techo» — потолок внутри комнаты или крыша здания."
  },
  {
    id: "a0_377",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа",
    prompt: "Как по-испански будут «Ножницы»?",
    options: ["Las tijeras", "Las gafas", "Las llaves", "Las reglas"],
    correct: 0,
    explanation: "«Las tijeras» — ножницы (как и в русском, обычно во множественном числе)."
  },
  {
    id: "a0_378",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа",
    prompt: "Что означает слово «La regla» в школьном пенале?",
    options: ["Линейка", "Ластик", "Точилка", "Тетрадь"],
    correct: 0,
    explanation: "«La regla» — линейка (а также «правило»)."
  },
  {
    id: "a0_379",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Как по-испански сказать «Песок»?",
    options: ["La arena", "La piedra", "La hierba", "La tierra"],
    correct: 0,
    explanation: "«La arena» — песок (например, на пляже)."
  },
  {
    id: "a0_380",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Природа",
    prompt: "Что означает слово «La hoja» (на дереве или в книге)?",
    options: ["Лист", "Ветка", "Корень", "Цветок"],
    correct: 0,
    explanation: "«La hoja» — лист дерева или лист бумаги."
  },
  {
    id: "a0_381",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Низкий» (антоним к «alto»)?",
    options: ["Bajo", "Corto", "Débil", "Lento"],
    correct: 0,
    explanation: "«Bajo» — низкий (о росте, здании или уровне)."
  },
  {
    id: "a0_382",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Amargo» (о вкусе)?",
    options: ["Горький", "Сладкий", "Солёный", "Кислый"],
    correct: 0,
    explanation: "«Amargo» — горький (например, «chocolate amargo» — горький шоколад)."
  },
  {
    id: "a0_383",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Как по-испански будет «Танцевать»?",
    options: ["Bailar", "Cantar", "Saltar", "Dibujar"],
    correct: 0,
    explanation: "«Bailar» — танцевать."
  },
  {
    id: "a0_384",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Caminar",
    prompt: "Вставь правильную форму глагола «caminar» («Мы идём в парк»):",
    subprompt: "Nosotros _____ por el parque.",
    options: ["caminamos", "camino", "caminas", "caminan"],
    correct: 0,
    explanation: "Для «nosotros» глаголы на «-ar» имеют окончание «-amos»: «caminamos»."
  },
  {
    id: "a0_385",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Род и число",
    prompt: "Выбери правильную форму прилагательного («белые облака»):",
    subprompt: "En el cielo hay nubes _____.",
    options: ["blancas", "blanco", "blanca", "blancos"],
    correct: 0,
    explanation: "«Nubes» — женский род множественное число, поэтому нужно окончание «-as»: «blancas»."
  },
  {
    id: "a0_386",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Estar",
    prompt: "Вставь правильную форму глагола «estar» («Они находятся дома»):",
    subprompt: "Ellos _____ en casa ahora.",
    options: ["están", "estamos", "está", "son"],
    correct: 0,
    explanation: "Для местоимения «ellos» (они) форма глагола «estar» — «están»."
  },
  {
    id: "a0_387",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Школа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="20" y="34" width="90" height="22" rx="3" fill="#fbbf24" stroke="#92400e" stroke-width="2"/>
            <g stroke="#0f172a" stroke-width="2">
              <line x1="34" y1="34" x2="34" y2="44"/>
              <line x1="48" y1="34" x2="48" y2="41"/>
              <line x1="62" y1="34" x2="62" y2="44"/>
              <line x1="76" y1="34" x2="76" y2="41"/>
              <line x1="90" y1="34" x2="90" y2="44"/>
              <line x1="104" y1="34" x2="104" y2="41"/>
            </g>
          </svg>`,
    prompt: "Какой школьный предмет изображён на картинке?",
    options: ["La regla", "La goma", "El lápiz", "El libro"],
    correct: 0,
    explanation: "Линейка с делениями — «la regla»."
  },
  {
    id: "a0_388",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Дом",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="22" y="44" width="86" height="18" rx="3" fill="#38bdf8"/>
            <rect x="22" y="28" width="8" height="44" rx="2" fill="#94a3b8"/>
            <rect x="100" y="38" width="8" height="34" rx="2" fill="#94a3b8"/>
            <rect x="33" y="36" width="22" height="10" rx="4" fill="#f8fafc"/>
          </svg>`,
    prompt: "Какой предмет мебели нарисован на картинке?",
    options: ["La cama", "La mesa", "La silla", "El armario"],
    correct: 0,
    explanation: "Кровать с подушкой — «la cama»."
  },
  {
    id: "a0_389",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Природа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M35 66 Q45 22 96 24 Q92 68 35 66 Z" fill="#22c55e"/>
            <path d="M24 72 L90 28" stroke="#15803d" stroke-width="3" stroke-linecap="round"/>
            <line x1="54" y1="52" x2="50" y2="38" stroke="#15803d" stroke-width="2" stroke-linecap="round"/>
            <line x1="68" y1="43" x2="78" y2="48" stroke="#15803d" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La hoja", "La flor", "La nube", "La piedra"],
    correct: 0,
    explanation: "Зелёный лист дерева — «la hoja»."
  },
  {
    id: "a0_390",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Еда",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="65" cy="48" rx="34" ry="22" fill="#f8fafc"/>
            <circle cx="66" cy="46" r="12" fill="#fbbf24"/>
            <circle cx="62" cy="42" r="3" fill="#fde68a"/>
          </svg>`,
    prompt: "Какой продукт изображён на картинке?",
    options: ["El huevo", "El queso", "El pan", "La leche"],
    correct: 0,
    explanation: "Яйцо — «el huevo»."
  },
  {
    id: "a0_391",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Животные",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="47" cy="36" rx="18" ry="14" fill="#f472b6"/>
            <ellipse cx="83" cy="36" rx="18" ry="14" fill="#f472b6"/>
            <ellipse cx="50" cy="57" rx="13" ry="11" fill="#fb7185"/>
            <ellipse cx="80" cy="57" rx="13" ry="11" fill="#fb7185"/>
            <rect x="62" y="26" width="6" height="44" rx="3" fill="#0f172a"/>
            <path d="M62 26 Q56 16 50 18 M68 26 Q74 16 80 18" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
          </svg>`,
    prompt: "Кто изображён на картинке?",
    options: ["La mariposa", "El pájaro", "La rana", "La tortuga"],
    correct: 0,
    explanation: "Бабочка по-испански — «la mariposa»."
  },
  {
    id: "a0_392",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Часы",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="34" y2="38" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="23" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las diez", "Son las dos", "Son las ocho", "Son las cuatro"],
    correct: 0,
    explanation: "Часовая стрелка указывает на 10, минутная на 12 — ровно десять часов: «Son las diez»."
  },
  {
    id: "a0_audio_85",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Природа",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "El delfín nada en el mar azul.",
    options: [
      "Дельфин плавает в синем море.",
      "Большая рыба плавает в реке.",
      "Лодка плывёт по глубокому озеру.",
      "Утка плавает рядом с берегом."
    ],
    correct: 0,
    explanation: "«El delfín nada en el mar azul» — Дельфин плавает в синем море."
  },
  {
    id: "a0_audio_86",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что человек хочет на завтрак?",
    audioText: "Quiero un yogur con miel para desayunar.",
    options: [
      "Йогурт с мёдом на завтрак",
      "Хлеб с маслом и сыром",
      "Сладкий пирог и чашку чая",
      "Стакан молока и банан"
    ],
    correct: 0,
    explanation: "«Quiero un yogur con miel para desayunar» — Я хочу йогурт с мёдом на завтрак."
  },
  {
    id: "a0_audio_87",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Одежда",
    prompt: "Во что одет его отец?",
    audioText: "Mi padre lleva una corbata azul y camisa blanca.",
    options: [
      "В синем галстуке и белой рубашке",
      "В чёрном пальто и сером свитере",
      "В коричневых брюках и жёлтой футболке",
      "В тёплом шарфе и синей куртке"
    ],
    correct: 0,
    explanation: "«Una corbata azul y camisa blanca» — синий галстук и белая рубашка."
  },
  {
    id: "a0_audio_88",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Отдых",
    prompt: "Что делают дети на пляже?",
    audioText: "Los niños juegan con la arena en la playa.",
    options: [
      "Дети играют с песком на пляже.",
      "Дети плавают в тёплой воде.",
      "Дети едят мороженое под зонтом.",
      "Дети ищут красивые камни у реки."
    ],
    correct: 0,
    explanation: "«Los niños juegan con la arena en la playa» — Дети играют с песком на пляже."
  },
  {
    id: "a0_audio_89",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Где лежит новый ковёр?",
    audioText: "La alfombra nueva está en el dormitorio.",
    options: ["В спальне", "На кухне", "В саду", "На балконе"],
    correct: 0,
    explanation: "«La alfombra nueva está en el dormitorio» — Новый ковёр находится в спальне."
  },
  {
    id: "a0_audio_90",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Школа",
    prompt: "Что нужно ученику для школы?",
    audioText: "Necesito unas tijeras y papel para el colegio.",
    options: [
      "Ножницы и бумага для школы",
      "Линейка и ластик для урока",
      "Книга и словарь для дома",
      "Синяя ручка и новая тетрадь"
    ],
    correct: 0,
    explanation: "«Unas tijeras y papel para el colegio» — ножницы и бумага для школы."
  },
  {
    id: "a0_audio_91",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Вкус",
    prompt: "Какой вкус у кофе?",
    audioText: "Este café está muy amargo sin azúcar.",
    options: [
      "Кофе очень горький без сахара.",
      "Кофе слишком сладкий и холодный.",
      "Кофе горячий, но очень вкусный.",
      "Кофе с молоком уже остыл."
    ],
    correct: 0,
    explanation: "«Este café está muy amargo sin azúcar» — Этот кофе очень горький без сахара."
  },
  {
    id: "a0_audio_92",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Прогулка",
    prompt: "Как они идут по улице?",
    audioText: "Hoy caminamos despacio por la calle.",
    options: [
      "Сегодня они медленно идут по улице.",
      "Сегодня они быстро бегут в школу.",
      "Сегодня они едут на автобусе в центр.",
      "Сегодня они гуляют по лесу."
    ],
    correct: 0,
    explanation: "«Hoy caminamos despacio por la calle» — Сегодня мы медленно идём по улице."
  },
  {
    id: "a0_audio_93",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Где стоят чёрные сапоги?",
    audioText: "Las botas negras están debajo de la cama.",
    options: ["Под кроватью", "Внутри шкафа", "Рядом с дверью", "На стуле"],
    correct: 0,
    explanation: "«Debajo de la cama» — под кроватью."
  },
  {
    id: "a0_audio_94",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Где спит собака?",
    audioText: "El perro duerme encima de la alfombra.",
    options: [
      "Собака спит на ковре.",
      "Собака спит на диване.",
      "Собака сидит под столом.",
      "Собака гуляет в саду."
    ],
    correct: 0,
    explanation: "«El perro duerme encima de la alfombra» — Собака спит на ковре."
  },
  {
    id: "a0_audio_95",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Сколько книг в комнате у говорящего?",
    audioText: "Tengo veinte libros en mi habitación.",
    options: ["20", "12", "15", "18"],
    correct: 0,
    explanation: "«Tengo veinte libros en mi habitación» — У меня двадцать книг в комнате («veinte» = 20)."
  },
  {
    id: "a0_audio_96",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Кухня",
    prompt: "Чего не хватает в супе?",
    audioText: "La sopa necesita un poco de sal y pimienta.",
    options: [
      "Немного соли и перца",
      "Масла и свежего чеснока",
      "Помидоров и зелёного лука",
      "Воды и картофеля"
    ],
    correct: 0,
    explanation: "«Un poco de sal y pimienta» — немного соли и перца."
  },
  {
    id: "a0_audio_97",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Город",
    prompt: "Как описывается белое здание?",
    audioText: "El edificio blanco es muy alto y moderno.",
    options: [
      "Оно очень высокое и современное.",
      "Оно маленькое и старое.",
      "Оно низкое и красивое.",
      "Оно серое и тёмное."
    ],
    correct: 0,
    explanation: "«Muy alto y moderno» — очень высокое и современное."
  },
  {
    id: "a0_audio_98",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Досуг",
    prompt: "Что делает её двоюродная сестра?",
    audioText: "Mi prima baila muy bien todos los días.",
    options: [
      "Очень хорошо танцует каждый день.",
      "Красиво поёт по выходным.",
      "Быстро бегает каждое утро.",
      "Рисует картины в саду."
    ],
    correct: 0,
    explanation: "«Mi prima baila muy bien todos los días» — Моя двоюродная сестра очень хорошо танцует каждый день."
  },
  {
    id: "a0_build_18",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Одежда",
    prompt: "Собери на испанском: «У меня есть новая синяя рубашка»",
    words: ["nueva", "Tengo", "azul", "camisa", "una", "un", "nuevo"],
    answer: ["Tengo", "una", "camisa", "azul", "nueva"],
    explanation: "«Tengo una camisa azul nueva» — «camisa» женского рода («una», «nueva»)."
  },
  {
    id: "a0_build_19",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Жильё",
    prompt: "Собери на испанском: «Мы живём в маленькой квартире»",
    words: ["pequeño", "en", "Vivimos", "piso", "un", "una", "pequeña"],
    answer: ["Vivimos", "en", "un", "piso", "pequeño"],
    explanation: "«Vivimos en un piso pequeño» — слово «el piso» (квартира) мужского рода."
  },
  {
    id: "a0_build_20",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Животные",
    prompt: "Собери на испанском: «Коричневая собака спит под столом»",
    words: ["mesa", "duerme", "El", "debajo", "marrón", "la", "perro", "de", "encima"],
    answer: ["El", "perro", "marrón", "duerme", "debajo", "de", "la", "mesa"],
    explanation: "«El perro marrón duerme debajo de la mesa» — «debajo de» означает «под»."
  },
  {
    id: "a0_build_21",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Природа",
    prompt: "Собери на испанском: «Дети рисуют жёлтое солнце»",
    words: ["amarillo", "niños", "Los", "sol", "dibujan", "un", "Las", "amarilla"],
    answer: ["Los", "niños", "dibujan", "un", "sol", "amarillo"],
    explanation: "«Los niños dibujan un sol amarillo» — «el sol» мужского рода («un sol amarillo»)."
  },
  {
    id: "a0_build_22",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Семья",
    prompt: "Собери на испанском: «Моя бабушка готовит вкусный суп»",
    words: ["rica", "Mi", "sopa", "prepara", "abuela", "una", "un", "rico"],
    answer: ["Mi", "abuela", "prepara", "una", "sopa", "rica"],
    explanation: "«Mi abuela prepara una sopa rica» — «la sopa» женского рода («una sopa rica»)."
  },

  /* ========================================================================
     НОВЫЕ 25 ВОПРОСОВ: УРОВЕНЬ A1 (tier: 1)
     a1_259..274 + a1_audio_65..70 + a1_build_42..44
     ======================================================================== */
  {
    id: "a1_259",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Какое число означает словосочетание «Ciento cincuenta»?",
    options: ["150", "50", "510", "115"],
    correct: 0,
    explanation: "После ста (101–199) вместо «cien» используется «ciento»: «ciento cincuenta» = 150."
  },
  {
    id: "a1_260",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Порядковые",
    prompt: "Как по-испански сказать «Четвёртый» (например, четвёртый этаж)?",
    options: ["Cuarto", "Cuatro", "Tercero", "Quinto"],
    correct: 0,
    explanation: "«Cuarto» — четвёртый (а «cuatro» — четыре)."
  },
  {
    id: "a1_261",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Что означает выражение «Pasado mañana»?",
    options: ["Послезавтра", "Позавчера", "На прошлой неделе", "Вчера вечером"],
    correct: 0,
    explanation: "«Pasado mañana» — послезавтра, «anteayer» — позавчера."
  },
  {
    id: "a1_262",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Время",
    prompt: "Как по-испански сказать «Позавчера»?",
    options: ["Anteayer", "Pasado mañana", "Anoche", "Todavía"],
    correct: 0,
    explanation: "«Anteayer» — позавчера (день перед «ayer»)."
  },
  {
    id: "a1_263",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Профессии",
    prompt: "Кто такой «El abogado»?",
    options: ["Адвокат / юрист", "Архитектор", "Стоматолог", "Музыкант"],
    correct: 0,
    explanation: "«El abogado / la abogada» — адвокат, юрист."
  },
  {
    id: "a1_264",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Профессии",
    prompt: "Как по-испански называется «Пожарный»?",
    options: ["El bombero", "El fotógrafo", "El vendedor", "El conductor"],
    correct: 0,
    explanation: "«El bombero» — пожарный."
  },
  {
    id: "a1_265",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Путешествия",
    prompt: "Что означает слово «La taquilla» на вокзале или в театре?",
    options: ["Билетная касса", "Зал ожидания", "Платформа", "Камера хранения"],
    correct: 0,
    explanation: "«La taquilla» — билетная касса (а также индивидуальный шкафчик в раздевалке)."
  },
  {
    id: "a1_266",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Транспорт",
    prompt: "Что означает слово «El asiento» в поезде или самолёте?",
    options: ["Место / сиденье", "Окно", "Проход", "Полка для багажа"],
    correct: 0,
    explanation: "«El asiento» — пассажирское место, сиденье."
  },
  {
    id: "a1_267",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Seguir",
    prompt: "Выбери правильную форму глагола «seguir» (продолжать / следовать) для «yo»:",
    subprompt: "Yo _____ todo recto hasta la plaza.",
    options: ["sigo", "seguo", "sigues", "seguimos"],
    correct: 0,
    explanation: "Глагол «seguir» меняет «e → i» и теряет немую «u» перед «o»: «yo sigo»."
  },
  {
    id: "a1_268",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Неопределённые",
    prompt: "Вставь правильное слово в вопросе («В офисе кто-нибудь есть?»):",
    subprompt: "¿Hay _____ en la oficina ahora?",
    options: ["alguien", "nadie", "algo", "algún"],
    correct: 0,
    explanation: "Для одушевлённого «кто-нибудь» используется «alguien»."
  },
  {
    id: "a1_269",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Неправильный герундий",
    prompt: "Выбери правильную форму герундия от глагола «dormir» («Кот сейчас спит»):",
    subprompt: "No hagas ruido, el gato está _____ en el sofá.",
    options: ["durmiendo", "dormiendo", "dormido", "duerme"],
    correct: 0,
    explanation: "У глагола «dormir» в герундии корневая «o» переходит в «u»: «durmiendo»."
  },
  {
    id: "a1_270",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Предлоги места",
    prompt: "Выбери правильный предлог («Банк находится между аптекой и музеем»):",
    subprompt: "El banco está _____ la farmacia y el museo.",
    options: ["entre", "sobre", "detrás", "lejos"],
    correct: 0,
    explanation: "Предлог «entre» означает «между»."
  },
  {
    id: "a1_271",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Время работы",
    prompt: "Вставь парный предлог к «desde» («с девяти до восьми»):",
    subprompt: "La tienda abre desde las nueve _____ las ocho de la noche.",
    options: ["hasta", "a", "por", "para"],
    correct: 0,
    explanation: "В испанском пара предлогов «desde ... hasta ...» означает «от / с ... до ...»."
  },
  {
    id: "a1_272",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Время",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="36" y2="65" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="29" y2="50" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: [
      "Son las ocho menos cuarto",
      "Son las siete y cuarto",
      "Son las nueve menos cuarto",
      "Son las ocho y media"
    ],
    correct: 0,
    explanation: "Часовая стрелка почти на 8, минутная на 9 (без пятнадцати восемь) — «Son las ocho menos cuarto»."
  },
  {
    id: "a1_273",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Аэропорт",
    svg: `<svg width="215" height="90" viewBox="0 0 215 90">
            <rect x="8" y="8" width="199" height="74" rx="10" fill="#0f172a" stroke="#22c55e" stroke-width="2.5"/>
            <text x="107" y="38" fill="#6ee7b7" font-size="15" font-weight="bold" text-anchor="middle">LLEGADAS</text>
            <text x="107" y="60" fill="#94a3b8" font-size="11" text-anchor="middle">Terminal 1 • Puerta B</text>
          </svg>`,
    prompt: "Какая зона аэропорта или вокзала обозначена табличкой «LLEGADAS»?",
    options: [
      "Зона прилёта / прибытия",
      "Зона вылета / отправления",
      "Паспортный контроль",
      "Выдача багажа"
    ],
    correct: 0,
    explanation: "От глагола «llegar» (прибывать): «llegadas» — прилёты / прибытие (а «salidas» — вылеты / отправление)."
  },
  {
    id: "a1_274",
    tier: 1,
    type: "visual",
    typeLabel: "Картинка A1 • Знак",
    svg: `<svg width="215" height="92" viewBox="0 0 215 92">
            <rect x="8" y="8" width="199" height="76" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="2.5"/>
            <circle cx="44" cy="46" r="22" fill="none" stroke="#ef4444" stroke-width="4"/>
            <rect x="31" y="43" width="22" height="5" fill="#f8fafc"/>
            <rect x="53" y="43" width="5" height="5" fill="#f97316"/>
            <line x1="29" y1="31" x2="59" y2="61" stroke="#ef4444" stroke-width="4"/>
            <text x="135" y="42" fill="#fda4af" font-size="12" font-weight="bold" text-anchor="middle">PROHIBIDO</text>
            <text x="135" y="60" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">FUMAR</text>
          </svg>`,
    prompt: "Что запрещает табличка «PROHIBIDO FUMAR»?",
    options: [
      "Курить запрещено",
      "Фотографировать запрещено",
      "Вход с собаками запрещён",
      "Шуметь запрещено"
    ],
    correct: 0,
    explanation: "«Fumar» — курить; «Prohibido fumar» — «Курить запрещено»."
  },
  {
    id: "a1_audio_65",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Здоровье",
    prompt: "Когда и к кому идёт говорящий?",
    audioText: "Pasado mañana tengo una cita con el dentista.",
    options: [
      "Послезавтра у него запись к стоматологу.",
      "Завтра утром он идёт к терапевту.",
      "Позавчера он был у глазного врача.",
      "В пятницу он встречается с адвокатом."
    ],
    correct: 0,
    explanation: "«Pasado mañana tengo una cita con el dentista» — Послезавтра у меня приём у стоматолога."
  },
  {
    id: "a1_audio_66",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Город",
    prompt: "Где находится театр?",
    audioText: "El teatro está entre el museo y la plaza mayor.",
    options: [
      "Между музеем и главной площадью",
      "Напротив музея за парком",
      "Рядом с вокзалом на углу улицы",
      "Внутри культурного центра"
    ],
    correct: 0,
    explanation: "«Entre el museo y la plaza mayor» — между музеем и главной площадью."
  },
  {
    id: "a1_audio_67",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Досуг",
    prompt: "Что они делают перед входом?",
    audioText: "Compramos las entradas en la taquilla antes de entrar.",
    options: [
      "Покупают билеты в кассе перед тем, как зайти.",
      "Показывают электронные билеты на входе.",
      "Оставляют верхнюю одежду в гардеробе.",
      "Ждут своих друзей рядом со входом."
    ],
    correct: 0,
    explanation: "«Compramos las entradas en la taquilla antes de entrar» — Мы покупаем билеты в кассе перед входом."
  },
  {
    id: "a1_audio_68",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Встреча",
    prompt: "О чём спрашивает друг?",
    audioText: "¿A qué hora quedamos delante de la biblioteca?",
    options: [
      "Во сколько встречаемся перед библиотекой?",
      "Когда открывается городская библиотека?",
      "Где находится вход в библиотеку?",
      "Сколько часов работает библиотека сегодня?"
    ],
    correct: 0,
    explanation: "«¿A qué hora quedamos delante de la biblioteca?» — Во сколько мы встречаемся перед библиотекой?"
  },
  {
    id: "a1_audio_69",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Транспорт",
    prompt: "Где находится его место?",
    audioText: "Mi asiento está al lado de la ventana.",
    options: [
      "Рядом с окном",
      "Около прохода",
      "В первом вагоне",
      "Напротив входа"
    ],
    correct: 0,
    explanation: "«Mi asiento está al lado de la ventana» — Моё место рядом с окном."
  },
  {
    id: "a1_audio_70",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Работа",
    prompt: "Какой график работы у офиса?",
    audioText: "La oficina atiende desde las nueve hasta las cinco.",
    options: [
      "С 9:00 до 17:00",
      "С 8:00 до 16:00",
      "С 10:00 до 18:00",
      "С 9:00 до 14:00"
    ],
    correct: 0,
    explanation: "«Desde las nueve hasta las cinco» — с девяти утра до пяти вечера."
  },
  {
    id: "a1_build_42",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Отрицание",
    prompt: "Собери на испанском: «В офисе никого нет сейчас»",
    words: ["oficina", "nadie", "No", "ahora", "en", "hay", "la", "alguien", "está"],
    answer: ["No", "hay", "nadie", "en", "la", "oficina", "ahora"],
    explanation: "«No hay nadie en la oficina ahora» — двойное отрицание с «hay» и «nadie»."
  },
  {
    id: "a1_build_43",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Город",
    prompt: "Собери на испанском: «Аптека находится между банком и парком»",
    words: ["parque", "La", "y", "está", "farmacia", "banco", "entre", "el", "el", "es"],
    answer: ["La", "farmacia", "está", "entre", "el", "banco", "y", "el", "parque"],
    explanation: "«La farmacia está entre el banco y el parque» — «entre A y B» переводится как «между А и Б»."
  },
  {
    id: "a1_build_44",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор A1 • Встреча",
    prompt: "Собери вопрос на испанском: «Во сколько мы встречаемся завтра?»",
    words: ["quedamos", "hora", "A", "mañana", "qué", "En", "ayer"],
    answer: ["A", "qué", "hora", "quedamos", "mañana"],
    explanation: "«¿A qué hora quedamos mañana?» — глагол «quedar» используется в значении «договариваться о встрече»."
  },
/* ========================================================================
     TIER 0: A0 — ЕЩЁ 50 УНИКАЛЬНЫХ ВОПРОСОВ (a0_283 .. a0_332)
     ======================================================================== */
  {
    id: "a0_393",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Что означает слово «La cuchara»?",
    options: ["Ложка", "Вилка", "Нож", "Чашка"],
    correct: 0,
    explanation: "«La cuchara» — ложка."
  },
  {
    id: "a0_394",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Как по-испански называется «Нож»?",
    options: ["El cuchillo", "El tenedor", "El plato", "El vaso"],
    correct: 0,
    explanation: "«El cuchillo» — нож."
  },
  {
    id: "a0_395",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Diecisiete»?",
    options: ["17", "7", "16", "70"],
    correct: 0,
    explanation: "«Diecisiete» — семнадцать (17)."
  },
  {
    id: "a0_396",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет число «19»?",
    options: ["Diecinueve", "Dieciocho", "Nueve", "Noventa"],
    correct: 0,
    explanation: "«Diecinueve» — девятнадцать (19)."
  },
  {
    id: "a0_397",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа",
    prompt: "Что означает слово «La pizarra»?",
    options: ["Доска (школьная)", "Тетрадь", "Рюкзак", "Учебник"],
    correct: 0,
    explanation: "«La pizarra» — доска в классе."
  },
  {
    id: "a0_398",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Школа",
    prompt: "Как по-испански называется «Карандаш»?",
    options: ["El lápiz", "El bolígrafo", "La regla", "La goma"],
    correct: 0,
    explanation: "«El lápiz» — карандаш (мн. ч. — «los lápices»)."
  },
  {
    id: "a0_399",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Город",
    prompt: "Что означает слово «La plaza»?",
    options: ["Площадь", "Улица", "Мост", "Угол"],
    correct: 0,
    explanation: "«La plaza» — городская площадь."
  },
  {
    id: "a0_400",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Город",
    prompt: "Как по-испански будет «Мост»?",
    options: ["El puente", "El túnel", "La torre", "El edificio"],
    correct: 0,
    explanation: "«El puente» — мост."
  },
  {
    id: "a0_401",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El aceite»?",
    options: ["Масло (растительное / оливковое)", "Уксус", "Вода", "Молоко"],
    correct: 0,
    explanation: "«El aceite» — масло (в Испании чаще всего «aceite de oliva» — оливковое масло)."
  },
  {
    id: "a0_402",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Чеснок»?",
    options: ["El ajo", "La cebolla", "El tomate", "La patata"],
    correct: 0,
    explanation: "«El ajo» — чеснок."
  },
  {
    id: "a0_403",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Фрукты",
    prompt: "Что означает слово «La cereza»?",
    options: ["Вишня / черешня", "Груша", "Слива", "Персик"],
    correct: 0,
    explanation: "«La cereza» — вишня или черешня."
  },
  {
    id: "a0_404",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански будет «Лягушка»?",
    options: ["La rana", "La tortuga", "La serpiente", "El pato"],
    correct: 0,
    explanation: "«La rana» — лягушка."
  },
  {
    id: "a0_405",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La tortuga»?",
    options: ["Черепаха", "Белка", "Ёж", "Лиса"],
    correct: 0,
    explanation: "«La tortuga» — черепаха."
  },
  {
    id: "a0_406",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Одежда",
    prompt: "Как по-испански называется «Кепка / шапка»?",
    options: ["La gorra", "El cinturón", "La camisa", "La falda"],
    correct: 0,
    explanation: "«La gorra» — кепка."
  },
  {
    id: "a0_407",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Тело",
    prompt: "Что означает слово «El corazón»?",
    options: ["Сердце", "Голова", "Желудок", "Глаз"],
    correct: 0,
    explanation: "«El corazón» — сердце."
  },
  {
    id: "a0_408",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Трудный / сложный»?",
    options: ["Difícil", "Fácil", "Barato", "Limpio"],
    correct: 0,
    explanation: "«Difícil» — трудный / сложный, «fácil» — лёгкий."
  },
  {
    id: "a0_409",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Joven»?",
    options: ["Молодой", "Старый", "Высокий", "Тихий"],
    correct: 0,
    explanation: "«Joven» — молодой (не меняется по родам в единственном числе)."
  },
  {
    id: "a0_410",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Как по-испански будет «Танцевать»?",
    options: ["Bailar", "Cantar", "Pintar", "Cocinar"],
    correct: 0,
    explanation: "«Bailar» — танцевать."
  },
  {
    id: "a0_411",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Mirar»?",
    options: ["Смотреть", "Слушать", "Говорить", "Ждать"],
    correct: 0,
    explanation: "«Mirar» — смотреть (например, «mirar la televisión» — смотреть телевизор)."
  },
  {
    id: "a0_412",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Наречия места",
    prompt: "Что означает слово «Aquí»?",
    options: ["Здесь", "Там", "Везде", "Нигде"],
    correct: 0,
    explanation: "«Aquí» — здесь, «allí» — там."
  },
  {
    id: "a0_413",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Tener",
    prompt: "Вставь правильную форму глагола «tener» («У них есть собака»):",
    subprompt: "Ellos _____ un perro pequeño.",
    options: ["tienen", "tenemos", "tiene", "tengo"],
    correct: 0,
    explanation: "Для «ellos / ellas / ustedes» форма глагола «tener» — «tienen»."
  },
  {
    id: "a0_414",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Vivir",
    prompt: "Вставь правильную форму глагола «vivir» («Ты живёшь в городе?»):",
    subprompt: "¿Tú _____ en la ciudad?",
    options: ["vives", "vivo", "vive", "vivimos"],
    correct: 0,
    explanation: "Для «tú» глаголы на «-ir» имеют окончание «-es»: «vives»."
  },
  {
    id: "a0_415",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Артикли мн. ч.",
    prompt: "Выбери правильный определённый артикль для «las casas» (дома):",
    subprompt: "_____ casas son blancas.",
    options: ["Las", "Los", "El", "Un"],
    correct: 0,
    explanation: "«Casas» — женский род множественного числа, поэтому артикль «Las»."
  },
  {
    id: "a0_416",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Род прилагательных",
    prompt: "Выбери правильную форму прилагательного («белая кошка»):",
    subprompt: "La gata es _____.",
    options: ["blanca", "blanco", "blancas", "blancos"],
    correct: 0,
    explanation: "«La gata» — женский род единственного числа, поэтому «blanca»."
  },
  {
    id: "a0_417",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Притяжательные",
    prompt: "Как сказать «мои книги» по-испански?",
    subprompt: "_____ libros están aquí.",
    options: ["Mis", "Mi", "Tus", "Sus"],
    correct: 0,
    explanation: "Во множественном числе «мой / моя» становится «mis»: «mis libros»."
  },
  {
    id: "a0_418",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Estar",
    prompt: "Вставь правильную форму глагола «estar» («Кофе горячий»):",
    subprompt: "El café _____ caliente.",
    options: ["está", "es", "están", "estoy"],
    correct: 0,
    explanation: "Температура напитка или еды («горячий / холодный») передаётся через «estar»: «está caliente»."
  },
  {
    id: "a0_419",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Союз «и» перед i-/hi-",
    prompt: "Какой союз ставится вместо «y» перед словом «hijos» («дети / сыновья»)?",
    subprompt: "Tengo hermanos _____ hijos.",
    options: ["e", "y", "u", "o"],
    correct: 0,
    explanation: "Перед словами, начинающимися на звук [и] (включая «hi-»), союз «y» меняется на «e»: «hermanos e hijos»."
  },
  {
    id: "a0_420",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Союз «или» перед o-/ho-",
    prompt: "Какой союз ставится вместо «o» перед словом «ocho» («восемь»)?",
    subprompt: "Siete _____ ocho.",
    options: ["u", "o", "y", "e"],
    correct: 0,
    explanation: "Перед словами, начинающимися на звук [о] (включая «ho-»), союз «o» меняется на «u»: «siete u ocho»."
  },
  {
    id: "a0_421",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Цвета",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="30" y="20" width="70" height="50" rx="8" fill="#22c55e"/>
          </svg>`,
    prompt: "Какого цвета прямоугольник на картинке?",
    options: ["Verde", "Azul", "Rojo", "Amarillo"],
    correct: 0,
    explanation: "Зелёный цвет по-испански — «verde»."
  },
  {
    id: "a0_422",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Цвета",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <circle cx="65" cy="45" r="26" fill="#3b82f6"/>
          </svg>`,
    prompt: "Какого цвета круг на картинке?",
    options: ["Azul", "Negro", "Blanco", "Gris"],
    correct: 0,
    explanation: "Синий цвет по-испански — «azul»."
  },
  {
    id: "a0_423",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Природа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <polygon points="65,14 72,35 94,35 76,48 83,69 65,56 47,69 54,48 36,35 58,35" fill="#fbbf24"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La estrella", "La luna", "El sol", "La nube"],
    correct: 0,
    explanation: "«La estrella» — звезда."
  },
  {
    id: "a0_424",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Дом",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="32" y="20" width="66" height="50" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <line x1="65" y1="20" x2="65" y2="70" stroke="#38bdf8" stroke-width="3"/>
            <line x1="32" y1="45" x2="98" y2="45" stroke="#38bdf8" stroke-width="3"/>
          </svg>`,
    prompt: "Что нарисовано на картинке?",
    options: ["La ventana", "La puerta", "La mesa", "La cama"],
    correct: 0,
    explanation: "«La ventana» — окно."
  },
  {
    id: "a0_425",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Предметы",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="44" y="18" width="42" height="28" rx="4" fill="#e2e8f0"/>
            <line x1="44" y1="46" x2="44" y2="74" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
            <line x1="86" y1="46" x2="86" y2="74" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
            <line x1="44" y1="54" x2="86" y2="54" stroke="#94a3b8" stroke-width="4"/>
          </svg>`,
    prompt: "Какой предмет мебели изображён на картинке?",
    options: ["La silla", "La cama", "El sofá", "El espejo"],
    correct: 0,
    explanation: "«La silla» — стул."
  },
  {
    id: "a0_426",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Часы",
    svg: `<svg width="110" height="100" viewBox="0 0 110 100">
            <circle cx="55" cy="50" r="40" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <text x="55" y="21" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">12</text>
            <text x="85" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">3</text>
            <text x="55" y="85" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">6</text>
            <text x="25" y="54" fill="#f1f5f9" font-size="10" font-weight="bold" text-anchor="middle">9</text>
            <line x1="55" y1="50" x2="55" y2="74" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <line x1="55" y1="50" x2="55" y2="23" stroke="#f1f5f9" stroke-width="3" stroke-linecap="round"/>
            <circle cx="55" cy="50" r="3.5" fill="#38bdf8"/>
          </svg>`,
    prompt: "Который час показывают часы?",
    options: ["Son las seis", "Son las doce", "Son las tres", "Son las nueve"],
    correct: 0,
    explanation: "Часовая стрелка на 6, минутная на 12 — «Son las seis»."
  },
  {
    id: "a0_427",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Еда",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="65" cy="50" rx="22" ry="26" fill="#fef08a" stroke="#eab308" stroke-width="2.5"/>
            <ellipse cx="65" cy="52" rx="11" ry="13" fill="#fbbf24"/>
          </svg>`,
    prompt: "Какой продукт изображён на картинке?",
    options: ["El huevo", "La manzana", "El queso", "La naranja"],
    correct: 0,
    explanation: "«El huevo» — яйцо."
  },
  {
    id: "a0_428",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Тело",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="65" cy="45" rx="28" ry="16" fill="#f8fafc"/>
            <circle cx="65" cy="45" r="10" fill="#0284c7"/>
            <circle cx="65" cy="45" r="4" fill="#0f172a"/>
          </svg>`,
    prompt: "Какой орган изображён на картинке?",
    options: ["El ojo", "La boca", "La nariz", "La oreja"],
    correct: 0,
    explanation: "«El ojo» — глаз."
  },
  {
    id: "a0_429",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Дом",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="22" y="46" width="86" height="22" rx="5" fill="#94a3b8"/>
            <rect x="22" y="34" width="20" height="34" rx="4" fill="#64748b"/>
            <rect x="42" y="38" width="58" height="14" rx="4" fill="#e2e8f0"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["La cama", "La mesa", "La puerta", "La ventana"],
    correct: 0,
    explanation: "«La cama» — кровать."
  },
  {
    id: "a0_430",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Природа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="16" y="24" width="98" height="44" rx="8" fill="#0284c7"/>
            <path d="M22 46 Q42 36 62 46 T108 46" fill="none" stroke="#bae6fd" stroke-width="3" stroke-linecap="round"/>
            <path d="M22 56 Q42 46 62 56 T108 56" fill="none" stroke="#7dd3fc" stroke-width="2.5" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El mar", "El sol", "La luna", "El árbol"],
    correct: 0,
    explanation: "«El mar» — море."
  },
  {
    id: "a0_431",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Приветствие",
    prompt: "Послушай и выбери правильный перевод:",
    audioText: "Buenas noches, hasta mañana.",
    options: ["Спокойной ночи, до завтра.", "Доброе утро, как дела?", "Привет, спасибо за помощь.", "Добрый день, до скорого."],
    correct: 0,
    explanation: "«Buenas noches, hasta mañana» — Спокойной ночи, до завтра."
  },
  {
    id: "a0_432",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цифры",
    prompt: "Какое число называет диктор?",
    audioText: "Tengo tres hermanos y dos perros.",
    options: ["3 брата и 2 собаки", "2 брата и 3 собаки", "4 брата и 1 собака", "5 братьев и 2 собаки"],
    correct: 0,
    explanation: "«Tengo tres hermanos y dos perros» — «tres» = 3, «dos» = 2."
  },
  {
    id: "a0_433",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что просит человек?",
    audioText: "Agua y pan, por favor.",
    options: ["Воду и хлеб, пожалуйста.", "Молоко и сыр, пожалуйста.", "Чай и яблоко, пожалуйста.", "Кофе и молоко, пожалуйста."],
    correct: 0,
    explanation: "«Agua y pan, por favor» — Воду и хлеб, пожалуйста."
  },
  {
    id: "a0_434",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "О ком говорит человек?",
    audioText: "Mi amigo vive en una casa pequeña.",
    options: ["Мой друг живёт в маленьком доме.", "Моя сестра живёт в большом доме.", "Мой папа работает в школе.", "Мой брат любит читать книги."],
    correct: 0,
    explanation: "«Mi amigo vive en una casa pequeña» — Мой друг живёт в маленьком доме."
  },
  {
    id: "a0_435",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цвета",
    prompt: "Какого цвета книга?",
    audioText: "El libro azul está en la mesa.",
    options: ["Синяя", "Красная", "Жёлтая", "Зелёная"],
    correct: 0,
    explanation: "«El libro azul está en la mesa» — Синяя книга лежит на столе."
  },
  {
    id: "a0_436",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Знакомство",
    prompt: "Что говорит собеседник?",
    audioText: "Sí, hablo un poco de español.",
    options: ["Да, я немного говорю по-испански.", "Нет, я совсем не понимаю по-испански.", "Да, я живу в Испании уже год.", "Извините, я не знаю этот город."],
    correct: 0,
    explanation: "«Sí, hablo un poco de español» — Да, я немного говорю по-испански."
  },
  {
    id: "a0_437",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Животные",
    prompt: "Кто находится в саду?",
    audioText: "El gato blanco está en el jardín.",
    options: ["Белый кот в саду", "Чёрный пёс на улице", "Маленькая птица на окне", "Большая лошадь в поле"],
    correct: 0,
    explanation: "«El gato blanco está en el jardín» — Белый кот находится в саду."
  },
  {
    id: "a0_438",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Время суток",
    prompt: "Когда светит солнце?",
    audioText: "El sol brilla por la mañana.",
    options: ["Утром", "Ночью", "Зимой", "Вчера"],
    correct: 0,
    explanation: "«El sol brilla por la mañana» — Солнце светит утром."
  },
  {
    id: "a0_build_23",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Еда",
    prompt: "Собери на испанском: «Я ем красное яблоко»",
    words: ["manzana", "roja", "una", "Yo", "como", "bebo", "verde"],
    answer: ["Yo", "como", "una", "manzana", "roja"],
    explanation: "«Yo como una manzana roja» — Я ем красное яблоко."
  },
  {
    id: "a0_build_24",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Вежливость",
    prompt: "Собери на испанском: «Извините, где здесь дом?»",
    words: ["casa", "está", "Perdón", "la", "dónde", "es", "aquí"],
    answer: ["Perdón", "dónde", "está", "la", "casa"],
    explanation: "«Perdón, ¿dónde está la casa?» — Извините, где находится дом?"
  },
  {
    id: "a0_build_25",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Семья",
    prompt: "Собери на испанском: «Мой брат живёт в Мадриде»",
    words: ["Madrid", "vive", "Mi", "en", "hermano", "madre", "vivo"],
    answer: ["Mi", "hermano", "vive", "en", "Madrid"],
    explanation: "«Mi hermano vive en Madrid» — Мой брат живёт в Мадриде."
  },
  {
    id: "a0_build_26",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Цвета",
    prompt: "Собери на испанском: «Белый хлеб на столе»",
    words: ["mesa", "está", "El", "en", "pan", "la", "blanco", "negro"],
    answer: ["El", "pan", "blanco", "está", "en", "la", "mesa"],
    explanation: "«El pan blanco está en la mesa» — Белый хлеб лежит на столе."
  },
  {
    id: "a0_build_27",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • Приветствие",
    prompt: "Собери на испанском: «Добрый день, очень приятно»",
    words: ["gusto", "tardes", "Buenas", "mucho", "días", "poco"],
    answer: ["Buenas", "tardes", "mucho", "gusto"],
    explanation: "«Buenas tardes, mucho gusto» — Добрый день, очень приятно."
  },
{
    id: "a0_439",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Приветствия",
    prompt: "Как вежливо поздороваться вечером?",
    options: ["Buenas noches", "Buenos días", "Hasta luego", "Por favor"],
    correct: 0,
    explanation: "«Buenas noches» используется вечером и на прощание перед сном."
  },
  {
    id: "a0_440",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Знакомство",
    prompt: "Послушай и выбери правильный перевод фразы:",
    audioText: "Me llamo Sofía.",
    options: ["Меня зовут София.", "Я из Софии.", "София — моя сестра.", "До свидания, София."],
    correct: 0,
    explanation: "«Me llamo...» — стандартная фраза «Меня зовут...»."
  },
  {
    id: "a0_441",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Представление",
    prompt: "Собери фразу: «Я из Мадрида»",
    words: ["de", "Soy", "Madrid", "en", "eres"],
    answer: ["Soy", "de", "Madrid"],
    explanation: "«Soy de + город/страна» означает «Я родом из... / Я из...»."
  },
  {
    id: "a0_442",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Какой цвет показан на карточке?",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#2563eb"/></svg>`,
    options: ["azul", "rojo", "verde", "amarillo"],
    correct: 0,
    explanation: "Синий цвет по-испански — «azul»."
  },
  {
    id: "a0_443",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Базовые фразы",
    prompt: "Как сказать «Спасибо»?",
    options: ["Gracias", "De nada", "Perdón", "Hola"],
    correct: 0,
    explanation: "«Gracias» — «спасибо»; «de nada» — «не за что»."
  },
  {
    id: "a0_444",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Числа 1–10",
    prompt: "Какое число стоит после «siete»?",
    options: ["ocho", "seis", "nueve", "cinco"],
    correct: 0,
    explanation: "Счёт: seis (6), siete (7), ocho (8), nueve (9)."
  },
  {
    id: "a0_445",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Самочувствие",
    prompt: "Что ты слышишь?",
    audioText: "Estoy muy bien, gracias.",
    options: ["Я в порядке, спасибо.", "Мне нужно идти.", "Я не понимаю.", "Как тебя зовут?"],
    correct: 0,
    explanation: "«Estoy muy bien» — «Я очень хорошо / в порядке»."
  },
  {
    id: "a0_446",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Вежливость",
    prompt: "Собери фразу: «Пожалуйста, один кофе»",
    words: ["café", "un", "Por favor", "la", "dos"],
    answer: ["Por favor", "un", "café"],
    explanation: "«Por favor» — пожалуйста; «café» — мужского рода (un café)."
  },
  {
    id: "a0_447",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Артикли и род",
    prompt: "Выбери правильный неопределённый артикль: ___ libro (книга).",
    options: ["un", "una", "unos", "unas"],
    correct: 0,
    explanation: "«Libro» — существительное мужского рода единственного числа, поэтому «un libro»."
  },
  {
    id: "a0_448",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Выбери название этого цвета:",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#dc2626"/></svg>`,
    options: ["rojo", "blanco", "negro", "verde"],
    correct: 0,
    explanation: "Красный цвет по-испански — «rojo»."
  },
  {
    id: "a0_449",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Понимание речи",
    prompt: "Как сказать «Я не понимаю»?",
    options: ["No entiendo", "No sé", "No tengo", "No puedo"],
    correct: 0,
    explanation: "«Entender» — понимать; «no entiendo» — «я не понимаю»."
  },
  {
    id: "a0_450",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Числа",
    prompt: "Какое число произнесено?",
    audioText: "quince",
    options: ["15", "5", "50", "13"],
    correct: 0,
    explanation: "«Quince» — 15 (cinco — 5, cincuenta — 50, trece — 13)."
  },
  {
    id: "a0_451",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Знакомство",
    prompt: "Собери вопрос: «Как тебя зовут?»",
    words: ["llamas", "¿Cómo", "te", "qué", "eres"],
    answer: ["¿Cómo", "te", "llamas"],
    explanation: "«¿Cómo te llamas?» — стандартный вопрос «Как тебя зовут?»."
  },
  {
    id: "a0_452",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Артикли и род",
    prompt: "Выбери правильный артикль: ___ casa (дом).",
    options: ["una", "un", "el", "los"],
    correct: 0,
    explanation: "«Casa» — женского рода единственного числа, поэтому «una casa» (или «la casa»)."
  },
  {
    id: "a0_453",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Вопросительные слова",
    prompt: "Что означает вопросительное слово «¿Dónde?»?",
    options: ["Где? / Куда?", "Когда?", "Почему?", "Сколько?"],
    correct: 0,
    explanation: "«¿Dónde?» спрашивает о месте или направлении: «Где?» / «Куда?»."
  },
  {
    id: "a0_454",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Прощание",
    prompt: "Выбери значение фразы:",
    audioText: "Hasta mañana.",
    options: ["До завтра.", "Доброе утро.", "Спокойной ночи.", "До скорого."],
    correct: 0,
    explanation: "«Hasta mañana» — «до завтра»."
  },
  {
    id: "a0_455",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Какой это цвет?",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#16a34a"/></svg>`,
    options: ["verde", "amarillo", "azul", "gris"],
    correct: 0,
    explanation: "Зелёный цвет по-испански — «verde»."
  },
  {
    id: "a0_456",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Базовые фразы",
    prompt: "Собери фразу: «Я говорю немного по-испански»",
    words: ["poco", "Hablo", "español", "un", "mucho"],
    answer: ["Hablo", "un", "poco", "español"],
    explanation: "«Hablo un poco español» — «Я говорю немного по-испански»."
  },
  {
    id: "a0_457",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Дни недели",
    prompt: "Как по-испански «пятница»?",
    options: ["viernes", "jueves", "sábado", "martes"],
    correct: 0,
    explanation: "Четверг — jueves, пятница — viernes, суббота — sábado."
  },
  {
    id: "a0_458",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Базовая лексика",
    prompt: "Переведи слово «agua»:",
    options: ["вода", "хлеб", "молоко", "чай"],
    correct: 0,
    explanation: "«Agua» — вода (в единственном числе используется с артиклем «el agua», но по роду слово женское)."
  },
  {
    id: "a0_459",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Вежливость",
    prompt: "Какую фразу ты слышишь?",
    audioText: "Disculpe, ¿dónde está el baño?",
    options: ["Извините, где туалет?", "Извините, сколько это стоит?", "Спасибо за помощь.", "Я ищу отель."],
    correct: 0,
    explanation: "«Disculpe, ¿dónde está el baño?» — вежливый вопрос о том, где находится туалет."
  },
  {
    id: "a0_460",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Выбери цвет на картинке:",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#eab308"/></svg>`,
    options: ["amarillo", "naranja", "morado", "rosa"],
    correct: 0,
    explanation: "Жёлтый цвет по-испански — «amarillo»."
  },
  {
    id: "a0_461",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Местоположение",
    prompt: "Собери вопрос: «Где вокзал?»",
    words: ["está", "¿Dónde", "la", "estación", "el"],
    answer: ["¿Dónde", "está", "la", "estación"],
    explanation: "«Estación» — женского рода (la estación), а для местоположения берём «está»."
  },
  {
    id: "a0_462",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Да / Нет",
    prompt: "Как сказать «Нет, спасибо»?",
    options: ["No, gracias", "Sí, por favor", "Vale, claro", "Nada, gracias"],
    correct: 0,
    explanation: "«No, gracias» — короткий и вежливый отказ «Нет, спасибо»."
  },
  {
    id: "a0_463",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Семья",
    prompt: "Кто такой «hermano»?",
    options: ["брат", "отец", "сын", "друг"],
    correct: 0,
    explanation: "«Hermano» — брат; «hermana» — сестра."
  },
{
    id: "a0_464",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Приветствия",
    prompt: "Как поздороваться днём?",
    options: ["Buenas tardes", "Buenas noches", "Hasta pronto", "Hola qué tal"],
    correct: 0,
    explanation: "«Buenas tardes» обычно используется со второй половины дня до вечера."
  },
  {
    id: "a0_465",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Числа",
    prompt: "Какое число ты слышишь?",
    audioText: "veinte",
    options: ["20", "12", "22", "30"],
    correct: 0,
    explanation: "«Veinte» — 20 (doce — 12, veintidós — 22, treinta — 30)."
  },
  {
    id: "a0_466",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Знакомство",
    prompt: "Собери фразу: «Очень приятно»",
    words: ["gusto", "Mucho", "bien", "es", "hola"],
    answer: ["Mucho", "gusto"],
    explanation: "«Mucho gusto» — устойчивая фраза «Очень приятно» при знакомстве."
  },
  {
    id: "a0_467",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Какой цвет на карточке?",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#111827"/></svg>`,
    options: ["negro", "blanco", "gris", "marrón"],
    correct: 0,
    explanation: "Чёрный цвет по-испански — «negro»."
  },
  {
    id: "a0_468",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Вопросительные слова",
    prompt: "Что означает «¿Cuándo?»?",
    options: ["Когда?", "Где?", "Кто?", "Как?"],
    correct: 0,
    explanation: "«¿Cuándo?» переводится как «Когда?»."
  },
  {
    id: "a0_469",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Базовые фразы",
    prompt: "Что обычно отвечают на «Gracias»?",
    options: ["De nada", "Por favor", "Disculpe", "Hasta luego"],
    correct: 0,
    explanation: "«De nada» — «не за что / пожалуйста» в ответ на благодарность."
  },
  {
    id: "a0_470",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Понимание речи",
    prompt: "Выбери перевод фразы:",
    audioText: "No hablo mucho español.",
    options: ["Я не очень хорошо говорю по-испански.", "Я понимаю весь испанский.", "Я не люблю кофе.", "Я живу в Барселоне."],
    correct: 0,
    explanation: "«No hablo mucho español» — «Я не много / не очень хорошо говорю по-испански»."
  },
  {
    id: "a0_471",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Местоположение",
    prompt: "Собери фразу: «Я здесь»",
    words: ["aquí", "Estoy", "allí", "es", "está"],
    answer: ["Estoy", "aquí"],
    explanation: "«Aquí» — здесь; для положения в пространстве используется «estar» («Estoy aquí»)."
  },
  {
    id: "a0_472",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Артикли и род",
    prompt: "Выбери артикль: ___ mesa (стол).",
    options: ["una", "un", "el", "los"],
    correct: 0,
    explanation: "«Mesa» — женского рода единственного числа, поэтому «una mesa» (или «la mesa»)."
  },
  {
    id: "a0_473",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Выбери цвет на картинке:",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#f97316"/></svg>`,
    options: ["naranja", "rosa", "morado", "rojo"],
    correct: 0,
    explanation: "Оранжевый цвет по-испански — «naranja»."
  },
  {
    id: "a0_474",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Дни недели",
    prompt: "Какой день недели идёт после «lunes»?",
    options: ["martes", "miércoles", "domingo", "viernes"],
    correct: 0,
    explanation: "Понедельник — lunes, вторник — martes, среда — miércoles."
  },
  {
    id: "a0_475",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Базовая лексика",
    prompt: "Какое слово ты слышишь?",
    audioText: "el libro",
    options: ["книга", "ручка", "окно", "дверь"],
    correct: 0,
    explanation: "«El libro» — книга."
  },
  {
    id: "a0_476",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Вежливость",
    prompt: "Собери фразу: «Извините, пожалуйста»",
    words: ["por favor", "Disculpe", "gracias", "hola"],
    answer: ["Disculpe", "por favor"],
    explanation: "«Disculpe, por favor» — вежливое обращение или извинение."
  },
  {
    id: "a0_477",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Семья",
    prompt: "Как переводится «madre»?",
    options: ["мать", "сестра", "тётя", "бабушка"],
    correct: 0,
    explanation: "«Madre» — мать (разговорное — «mamá»)."
  },
  {
    id: "a0_478",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Еда и напитки",
    prompt: "Что означает «pan»?",
    options: ["хлеб", "сыр", "мясо", "суп"],
    correct: 0,
    explanation: "«Pan» — хлеб."
  },
  {
    id: "a1_275",
    tier: 1,
    type: "mcq",
    typeLabel: "А1 • Настоящее время",
    prompt: "Выбери правильную форму глагола: Nosotros ___ en el centro.",
    subprompt: "Nosotros ___ en el centro.",
    options: ["vivimos", "vivís", "viven", "vivo"],
    correct: 0,
    explanation: "Для «nosotros» правильный глагол «vivir» принимает окончание «-imos»: «vivimos»."
  },
  {
    id: "a1_276",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование А1 • Распорядок дня",
    prompt: "Послушай и выбери смысл фразы:",
    audioText: "Me levanto a las siete todos los días.",
    options: ["Я встаю в семь часов каждый день.", "Я ложусь спать в семь вечера.", "Мы встречаемся в семь утра.", "Поезд отправляется в семь."],
    correct: 0,
    explanation: "«Levantarse» — вставать; «a las siete» — в семь часов; «todos los días» — каждый день."
  },
  {
    id: "a1_277",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор А1 • Предпочтения",
    prompt: "Собери фразу: «Мне нравится читать по вечерам»",
    words: ["leer", "Me", "por las tardes", "gusta", "gustan"],
    answer: ["Me", "gusta", "leer", "por las tardes"],
    explanation: "Перед инфинитивом («leer») всегда ставится форма единственного числа «gusta»."
  },
  {
    id: "a1_278",
    tier: 1,
    type: "mcq",
    typeLabel: "А1 • Ser vs Estar",
    prompt: "Какой глагол подойдёт: El café ___ muy caliente.",
    subprompt: "El café ___ muy caliente.",
    options: ["está", "es", "son", "están"],
    correct: 0,
    explanation: "Температура и состояние предмета («горячий») передаются через «estar»: «está caliente»."
  },
  {
    id: "a1_279",
    tier: 1,
    type: "mcq",
    typeLabel: "А1 • Притяжательные местоимения",
    prompt: "Выбери правильную форму: ___ amigos viven en Valencia.",
    subprompt: "___ amigos viven en Valencia.",
    options: ["Mis", "Mi", "Mío", "Mías"],
    correct: 0,
    explanation: "Существительное «amigos» стоит во множественном числе, поэтому берём «mis»."
  },
  {
    id: "a1_280",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование А1 • В городе",
    prompt: "Что говорит собеседник?",
    audioText: "El supermercado está cerca de aquí.",
    options: ["Супермаркет находится недалеко отсюда.", "Супермаркет закрыт сегодня.", "Супермаркет на другой стороне города.", "Супермаркет открывается в восемь."],
    correct: 0,
    explanation: "«Cerca de aquí» — недалеко отсюда / рядом."
  },
  {
    id: "a1_281",
    tier: 1,
    type: "builder",
    typeLabel: "Конструктор А1 • Планы",
    prompt: "Собери фразу: «Завтра мы идём в кино»",
    words: ["al cine", "Mañana", "vamos", "voy", "en cine"],
    answer: ["Mañana", "vamos", "al cine"],
    explanation: "«Ir a + el cine» сливается в «ir al cine» («идти в кино»)."
  },
  {
    id: "a1_282",
    tier: 1,
    type: "mcq",
    typeLabel: "А1 • Частотность",
    prompt: "Что означает выражение «a veces»?",
    options: ["иногда", "никогда", "всегда", "часто"],
    correct: 0,
    explanation: "«A veces» — иногда (nunca — никогда, siempre — всегда, a menudo — часто)."
  },
  {
    id: "a1_283",
    tier: 1,
    type: "visual",
    typeLabel: "Визуальный А1 • Геометрия и формы",
    prompt: "Какая фигура изображена на схеме?",
    svg: `<svg width="140" height="70" viewBox="0 0 140 70" xmlns="http://www.w3.org/2000/svg"><polygon points="70,10 115,60 25,60" fill="#0ea5e9"/></svg>`,
    options: ["un triángulo", "un cuadrado", "un círculo", "un rectángulo"],
    correct: 0,
    explanation: "Треугольник по-испански — «triángulo»."
  },
  {
    id: "a1_284",
    tier: 1,
    type: "mcq",
    typeLabel: "А1 • Покупки и цены",
    prompt: "Как вежливо спросить цену одного предмета?",
    options: ["¿Cuánto cuesta esto?", "¿Cuántos cuestan estos?", "¿Dónde está esto?", "¿Qué hora es?"],
    correct: 0,
    explanation: "«¿Cuánto cuesta esto?» — «Сколько это стоит?» (в единственном числе)."
  },
{
    id: "a0_479",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Чтение и звуки",
    prompt: "Как обычно читается буква «h» в начале испанских слов (например, «hola»)?",
    options: ["Не читается (немая)", "Как русское «х»", "Как английское «h» с придыханием", "Как «г»"],
    correct: 0,
    explanation: "Буква «h» в испанском почти всегда немая — «hola» читается как [о́ла]."
  },
  {
    id: "a0_480",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Приветствия",
    prompt: "Какую фразу ты слышишь?",
    audioText: "Hola, ¿qué tal?",
    options: ["Привет, как дела?", "Пока, увидимся завтра.", "Извините, я опоздал.", "Спасибо за ужин."],
    correct: 0,
    explanation: "«¿Qué tal?» — разговорный вариант «Как дела? / Как оно?»."
  },
  {
    id: "a0_481",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Знакомство",
    prompt: "Собери фразу: «Я студент»",
    words: ["estudiante", "Soy", "es", "un", "de"],
    answer: ["Soy", "estudiante"],
    explanation: "Перед профессией или статусом в испанском артикль обычно опускается: «Soy estudiante»."
  },
  {
    id: "a0_482",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Местоимения",
    prompt: "Что означает местоимение «yo»?",
    options: ["я", "ты", "он", "мы"],
    correct: 0,
    explanation: "«Yo» — я (tú — ты, él — он, nosotros — мы)."
  },
  {
    id: "a0_483",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Геометрия",
    prompt: "Какая фигура показана на карточке?",
    svg: `<svg width="140" height="70" viewBox="0 0 140 70" xmlns="http://www.w3.org/2000/svg"><circle cx="70" cy="35" r="24" fill="#10b981"/></svg>`,
    options: ["un círculo", "un cuadrado", "un triángulo", "una línea"],
    correct: 0,
    explanation: "Круг по-испански — «círculo»."
  },
  {
    id: "a0_484",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Числа 1–10",
    prompt: "Какое число обозначает «tres»?",
    options: ["3", "13", "30", "2"],
    correct: 0,
    explanation: "«Tres» — 3 (trece — 13, treinta — 30, dos — 2)."
  },
  {
    id: "a0_485",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Еда и напитки",
    prompt: "Что ты слышишь?",
    audioText: "un café con leche",
    options: ["кофе с молоком", "стакан воды", "горячий шоколад", "апельсиновый сок"],
    correct: 0,
    explanation: "«Café con leche» — классический заказ в Испании: «кофе с молоком»."
  },
  {
    id: "a0_486",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Базовые фразы",
    prompt: "Собери фразу: «Я не знаю»",
    words: ["sé", "No", "tengo", "es", "sí"],
    answer: ["No", "sé"],
    explanation: "«No sé» — базовая фраза «Я не знаю» (от глагола «saber»)."
  },
  {
    id: "a0_487",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Артикли и род",
    prompt: "Выбери правильный артикль: ___ silla (стул).",
    options: ["una", "un", "los", "unos"],
    correct: 0,
    explanation: "«Silla» — слово женского рода (оканчивается на -a), поэтому «una silla» / «la silla»."
  },
  {
    id: "a0_488",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Прощание",
    prompt: "Как сказать «До скорого / Пока»?",
    options: ["Hasta luego", "Buenos días", "Muchas gracias", "Perdón"],
    correct: 0,
    explanation: "«Hasta luego» — распространённое прощание «До скорого / Пока»."
  },
  {
    id: "a0_489",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Числа",
    prompt: "Какое число произнесено?",
    audioText: "diez",
    options: ["10", "2", "12", "20"],
    correct: 0,
    explanation: "«Diez» — 10."
  },
  {
    id: "a0_490",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Приветствия",
    prompt: "Собери приветствие: «Доброе утро»",
    words: ["días", "Buenos", "tardes", "noches", "hola"],
    answer: ["Buenos", "días"],
    explanation: "«Buenos días» используется утром и до обеда."
  },
  {
    id: "a0_491",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Какой это цвет?",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/></svg>`,
    options: ["blanco", "gris", "amarillo", "azul"],
    correct: 0,
    explanation: "Белый цвет по-испански — «blanco»."
  },
  {
    id: "a0_492",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Базовая лексика",
    prompt: "Как переводится «casa»?",
    options: ["дом", "улица", "комната", "город"],
    correct: 0,
    explanation: "«Casa» — дом, жилище."
  },
  {
    id: "a0_493",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Местоимения",
    prompt: "Как сказать «ты» по-испански?",
    options: ["tú", "yo", "ella", "ellos"],
    correct: 0,
    explanation: "«Tú» — неформальное «ты»."
  },
  {
    id: "a0_494",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Вежливость",
    prompt: "Выбери значение фразы:",
    audioText: "Perdón, no entiendo.",
    options: ["Прости / извини, я не понимаю.", "Извини, я спешу.", "Спасибо, всё понятно.", "Привет, как ты?"],
    correct: 0,
    explanation: "«Perdón, no entiendo» — вежливая фраза «Извини, я не понимаю»."
  },
  {
    id: "a0_495",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Знакомство",
    prompt: "Собери фразу: «Меня зовут Алекс»",
    words: ["llamo", "Me", "Álex", "soy", "tu"],
    answer: ["Me", "llamo", "Álex"],
    explanation: "«Me llamo Álex» — «Меня зовут Алекс»."
  },
  {
    id: "a0_496",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Еда и напитки",
    prompt: "Что означает «leche»?",
    options: ["молоко", "вода", "сыр", "сахар"],
    correct: 0,
    explanation: "«Leche» — молоко (женского рода: la leche)."
  },
  {
    id: "a0_497",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Вопросительные слова",
    prompt: "Что означает «¿Qué?»?",
    options: ["Что? / Какой?", "Где?", "Кто?", "Почему?"],
    correct: 0,
    explanation: "«¿Qué?» — одно из самых частых вопросительных слов: «Что?» или «Какой/какая?»."
  },
  {
    id: "a0_498",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование А0 • Дни недели",
    prompt: "Какой день недели произнесён?",
    audioText: "domingo",
    options: ["воскресенье", "суббота", "понедельник", "среда"],
    correct: 0,
    explanation: "«Domingo» — воскресенье."
  },
  {
    id: "a0_499",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор А0 • Покупки",
    prompt: "Собери вопрос: «Сколько это стоит?»",
    words: ["cuesta", "¿Cuánto", "esto?", "es", "dónde"],
    answer: ["¿Cuánto", "cuesta", "esto?"],
    explanation: "«¿Cuánto cuesta esto?» — «Сколько это стоит?»."
  },
  {
    id: "a0_500",
    tier: 0,
    type: "visual",
    typeLabel: "Визуальный А0 • Цвета",
    prompt: "Выбери цвет на карточке:",
    svg: `<svg width="140" height="60" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="120" height="40" rx="8" fill="#8b5cf6"/></svg>`,
    options: ["morado", "verde", "naranja", "negro"],
    correct: 0,
    explanation: "Фиолетовый / сиреневый по-испански — «morado» (в Испании также часто говорят «lila» или «morado»)."
  },
  {
    id: "a0_501",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Семья",
    prompt: "Кто такой «padre»?",
    options: ["отец", "брат", "дедушка", "дядя"],
    correct: 0,
    explanation: "«Padre» — отец (разговорное — «papá»)."
  },
  {
    id: "a0_502",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Базовая лексика",
    prompt: "Что означает «sí»?",
    options: ["да", "нет", "может быть", "ещё"],
    correct: 0,
    explanation: "«Sí» (с ударением) — «да»."
  },
  {
    id: "a0_503",
    tier: 0,
    type: "mcq",
    typeLabel: "А0 • Базовая лексика",
    prompt: "Как переводится «amigo»?",
    options: ["друг", "сосед", "учитель", "гость"],
    correct: 0,
    explanation: "«Amigo» — друг; подруга — «amiga»."
  },
{
    id: "a0_504",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Что означает слово «La cuchara»?",
    options: ["Ложка", "Вилка", "Нож", "Чашка"],
    correct: 0,
    explanation: "«La cuchara» — ложка."
  },
  {
    id: "a0_505",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Посуда",
    prompt: "Как по-испански называется «Нож»?",
    options: ["El cuchillo", "El tenedor", "El vaso", "El plato"],
    correct: 0,
    explanation: "«El cuchillo» — нож."
  },
  {
    id: "a0_506",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Какое число означает слово «Diecisiete»?",
    options: ["17", "7", "16", "70"],
    correct: 0,
    explanation: "«Diecisiete» — семнадцать (17)."
  },
  {
    id: "a0_507",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Цифры",
    prompt: "Как по-испански будет число «19»?",
    options: ["Diecinueve", "Dieciocho", "Nueve", "Noventa"],
    correct: 0,
    explanation: "«Diecinueve» — девятнадцать (19)."
  },
  {
    id: "a0_508",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «El aceite»?",
    options: ["Масло (растительное / оливковое)", "Уксус", "Сыр", "Хлеб"],
    correct: 0,
    explanation: "«El aceite» — масло (например, «aceite de oliva» — оливковое масло)."
  },
  {
    id: "a0_509",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Чеснок»?",
    options: ["El ajo", "La cebolla", "El tomate", "La patata"],
    correct: 0,
    explanation: "«El ajo» — чеснок."
  },
  {
    id: "a0_510",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Собака»?",
    options: ["El perro", "El gato", "El ratón", "El pato"],
    correct: 0,
    explanation: "«El perro» — собака, «la perra» — собака женского пола."
  },
  {
    id: "a0_511",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «La rana»?",
    options: ["Лягушка", "Черепаха", "Змея", "Рыба"],
    correct: 0,
    explanation: "«La rana» — лягушка."
  },
  {
    id: "a0_512",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Как по-испански называется «Шкаф»?",
    options: ["El armario", "La cama", "La silla", "La mesa"],
    correct: 0,
    explanation: "«El armario» — шкаф."
  },
  {
    id: "a0_513",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «El techo»?",
    options: ["Потолок / крыша", "Пол", "Стена", "Дверь"],
    correct: 0,
    explanation: "«El techo» — потолок или крыша."
  },
  {
    id: "a0_514",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Город",
    prompt: "Как по-испански будет «Площадь» (городская)?",
    options: ["La plaza", "La calle", "El puente", "El parque"],
    correct: 0,
    explanation: "«La plaza» — площадь."
  },
  {
    id: "a0_515",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Город",
    prompt: "Что означает слово «El puente»?",
    options: ["Мост", "Башня", "Фонтан", "Улица"],
    correct: 0,
    explanation: "«El puente» — мост."
  },
  {
    id: "a0_516",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Короткий / невысокий»?",
    options: ["Corto", "Largo", "Ancho", "Fuerte"],
    correct: 0,
    explanation: "«Corto» — короткий, «largo» — длинный."
  },
  {
    id: "a0_517",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Что означает слово «Largo»?",
    options: ["Длинный", "Короткий", "Тяжёлый", "Лёгкий"],
    correct: 0,
    explanation: "«Largo» — длинный (ложный друг русского «ларго»)."
  },
  {
    id: "a0_518",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Mirar»?",
    options: ["Смотреть", "Слушать", "Говорить", "Спрашивать"],
    correct: 0,
    explanation: "«Mirar» — смотреть."
  },
  {
    id: "a0_519",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Как по-испански будет «Танцевать»?",
    options: ["Bailar", "Cantar", "Saltar", "Caminar"],
    correct: 0,
    explanation: "«Bailar» — танцевать."
  },
  {
    id: "a0_520",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Местоимения",
    prompt: "Как переводится местоимение «Ellos»?",
    options: ["Они", "Мы", "Вы", "Он"],
    correct: 0,
    explanation: "«Ellos» — они (мужской или смешанный род)."
  },
  {
    id: "a0_521",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Артикли",
    prompt: "Выбери правильный артикль для слова «flor» (цветок):",
    subprompt: "_____ flor roja es bonita.",
    options: ["La", "El", "Los", "Un"],
    correct: 0,
    explanation: "«La flor» — существительное женского рода единственного числа."
  },
  {
    id: "a0_522",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Tener",
    prompt: "Вставь правильную форму глагола «tener» («У меня есть книга»):",
    subprompt: "Yo _____ un libro azul.",
    options: ["tengo", "tienes", "tiene", "tenemos"],
    correct: 0,
    explanation: "Для «yo» форма глагола «tener» — «tengo»."
  },
  {
    id: "a0_523",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Глагол Estar",
    prompt: "Вставь правильную форму глагола «estar» («Кот на кровати»):",
    subprompt: "El gato _____ en la cama.",
    options: ["está", "es", "estoy", "están"],
    correct: 0,
    explanation: "Для местоположения единственного предмета («el gato») используется «está»."
  },
  {
    id: "a0_524",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Множественное число",
    prompt: "Как будет «дома» во множественном числе от «la casa»?",
    options: ["Las casas", "Los casas", "La casas", "Las casa"],
    correct: 0,
    explanation: "Артикль «la» меняется на «las», а к слову «casa» добавляется «-s»: «las casas»."
  },
  {
    id: "a0_525",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Природа",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <path d="M25 22 Q45 14 65 22 T105 22" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <path d="M25 45 Q45 37 65 45 T105 45" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
            <path d="M25 68 Q45 60 65 68 T105 68" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
          </svg>`,
    prompt: "Что изображено на картинке?",
    options: ["El agua", "La casa", "El árbol", "El pan"],
    correct: 0,
    explanation: "Волнистые линии обозначают воду / волны — «el agua»."
  },
  {
    id: "a0_526",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Вещи",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <rect x="44" y="16" width="42" height="58" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>
            <rect x="50" y="24" width="30" height="34" rx="3" fill="#0ea5e9"/>
            <circle cx="65" cy="66" r="3.5" fill="#f1f5f9"/>
          </svg>`,
    prompt: "Как по-испански называется этот предмет?",
    options: ["El teléfono", "El libro", "El reloj", "La mesa"],
    correct: 0,
    explanation: "На рисунке телефон — «el teléfono»."
  },
  {
    id: "a0_527",
    tier: 0,
    type: "visual",
    typeLabel: "Картинка A0 • Животные",
    svg: `<svg width="130" height="90" viewBox="0 0 130 90">
            <ellipse cx="65" cy="54" rx="24" ry="15" fill="#94a3b8"/>
            <circle cx="44" cy="44" r="11" fill="#94a3b8"/>
            <ellipse cx="38" cy="36" rx="4" ry="8" fill="#64748b"/>
            <ellipse cx="48" cy="36" rx="4" ry="8" fill="#64748b"/>
            <circle cx="41" cy="43" r="2.2" fill="#0f172a"/>
            <path d="M89 52 Q100 44 96 36" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
          </svg>`,
    prompt: "Кто изображён на картинке?",
    options: ["El conejo", "El perro", "El pez", "La vaca"],
    correct: 0,
    explanation: "Длинноухий зверёк — кролик, «el conejo»."
  },
  {
    id: "a0_528",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Приветствие",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Hola, ¿cómo te llamas?",
    options: ["Привет, как тебя зовут?", "Привет, как дела?", "До свидания, до завтра.", "Извините, где выход?"],
    correct: 0,
    explanation: "«Hola, ¿cómo te llamas?» — Привет, как тебя зовут?"
  },
  {
    id: "a0_529",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Еда",
    prompt: "Что человек просит на столе?",
    audioText: "Pásame el pan y el agua, por favor.",
    options: ["Передай мне хлеб и воду, пожалуйста.", "Принеси кофе и молоко, пожалуйста.", "Дай яблоко и сыр, пожалуйста.", "Заплати за обед, пожалуйста."],
    correct: 0,
    explanation: "«Pásame el pan y el agua, por favor» — Передай мне хлеб и воду, пожалуйста."
  },
  {
    id: "a0_530",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Семья",
    prompt: "О ком говорит диктор?",
    audioText: "Mi hermano es alto y simpático.",
    options: ["Мой брат высокий и милый.", "Моя сестра маленькая и добрая.", "Мой дедушка старый и мудрый.", "Мой друг живёт в Мадриде."],
    correct: 0,
    explanation: "«Mi hermano es alto y simpático» — Мой брат высокий и милый."
  },
  {
    id: "a0_531",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Цвета",
    prompt: "Какого цвета цветок?",
    audioText: "La flor es amarilla y muy bonita.",
    options: ["Жёлтый", "Красный", "Синий", "Белый"],
    correct: 0,
    explanation: "«La flor es amarilla» — Цветок жёлтый."
  },
  {
    id: "a0_532",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Дом",
    prompt: "Где стоит стул?",
    audioText: "La silla está en la cocina.",
    options: ["Стул находится на кухне.", "Стул стоит в саду.", "Стол стоит в спальне.", "Окно открыто в комнате."],
    correct: 0,
    explanation: "«La silla está en la cocina» — Стул находится на кухне."
  },
  {
    id: "a0_533",
    tier: 0,
    type: "builder",
    typeLabel: "Конструктор A0 • База",
    prompt: "Собери на испанском: «Я читаю интересную книгу»",
    words: ["libro", "Yo", "un", "leo", "interesante", "una", "veo"],
    answer: ["Yo", "leo", "un", "libro", "interesante"],
    explanation: "«Yo leo un libro interesante» — Я читаю интересную книгу."
  },
/* ========================================================================
     TIER 0: A0 — ЕЩЁ 10 ВОПРОСОВ (a0_313 .. a0_322)
     ======================================================================== */
  {
    id: "a0_534",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Как по-испански называется «Мёд»?",
    options: ["La miel", "La mermelada", "La mantequilla", "La nata"],
    correct: 0,
    explanation: "«La miel» — мёд (женского рода)."
  },
  {
    id: "a0_535",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Еда",
    prompt: "Что означает слово «La mantequilla»?",
    options: ["Сливочное масло", "Сыр", "Йогурт", "Мука"],
    correct: 0,
    explanation: "«La mantequilla» — сливочное масло."
  },
  {
    id: "a0_536",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Как по-испански сказать «Черепаха»?",
    options: ["La tortuga", "La serpiente", "La ballena", "El delfín"],
    correct: 0,
    explanation: "«La tortuga» — черепаха."
  },
  {
    id: "a0_537",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Животные",
    prompt: "Что означает слово «El lobo»?",
    options: ["Волк", "Лиса", "Медведь", "Олень"],
    correct: 0,
    explanation: "«El lobo» — волк."
  },
  {
    id: "a0_538",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Предметы",
    prompt: "Как по-испански будет «Карандаш»?",
    options: ["El lápiz", "El papel", "La regla", "La goma"],
    correct: 0,
    explanation: "«El lápiz» — карандаш (мн. ч. — «los lápices»)."
  },
  {
    id: "a0_539",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Дом",
    prompt: "Что означает слово «El suelo»?",
    options: ["Пол / земля", "Потолок", "Балкон", "Лестница"],
    correct: 0,
    explanation: "«El suelo» — пол в помещении или земля под ногами."
  },
  {
    id: "a0_540",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Прилагательные",
    prompt: "Как по-испански сказать «Пустой»?",
    options: ["Vacío", "Lleno", "Sucio", "Seco"],
    correct: 0,
    explanation: "«Vacío» — пустой, «lleno» — полный."
  },
  {
    id: "a0_541",
    tier: 0,
    type: "translate",
    typeLabel: "База A0 • Глаголы",
    prompt: "Что означает глагол «Ayudar»?",
    options: ["Помогать", "Ждать", "Отвечать", "Начинать"],
    correct: 0,
    explanation: "«Ayudar» — помогать."
  },
  {
    id: "a0_542",
    tier: 0,
    type: "grammar",
    typeLabel: "Грамматика A0 • Множественное число",
    prompt: "Как будет «цветы» во множественном числе от «la flor»?",
    subprompt: "En el jardín hay muchas _____.",
    options: ["flores", "flors", "floras", "flor"],
    correct: 0,
    explanation: "Слово «flor» заканчивается на согласную, поэтому во множественном числе добавляется «-es»: «flores»."
  },
  {
    id: "a0_543",
    tier: 0,
    type: "audio",
    typeLabel: "Аудирование A0 • Прощание",
    prompt: "Послушай фразу и выбери правильный перевод:",
    audioText: "Hasta luego, que tengas buen día.",
    options: ["До скорого, хорошего дня.", "Извините, я не понял.", "Доброе утро, как дела?", "Большое спасибо за кофе."],
    correct: 0,
    explanation: "«Hasta luego, que tengas buen día» — До скорого, хорошего дня."
  },

  /* ========================================================================
     TIER 1: A1 — ЕЩЁ 10 ВОПРОСОВ (a1_219 .. a1_228)
     ======================================================================== */
  {
    id: "a1_285",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Месяцы",
    prompt: "Какой месяц по-испански называется «Mayo»?",
    options: ["Май", "Март", "Июль", "Сентябрь"],
    correct: 0,
    explanation: "«Mayo» — май."
  },
  {
    id: "a1_286",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Числительные",
    prompt: "Какое число означает слово «Setenta»?",
    options: ["70", "60", "17", "700"],
    correct: 0,
    explanation: "«Setenta» — семьдесят (70)."
  },
  {
    id: "a1_287",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Порядковые",
    prompt: "Что означает слово «Tercero»?",
    options: ["Третий", "Второй", "Четвёртый", "Пятый"],
    correct: 0,
    explanation: "«Tercero / tercera» — третий / третья."
  },
  {
    id: "a1_288",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Город",
    prompt: "Что такое «La librería»?",
    options: ["Книжный магазин", "Библиотека", "Типография", "Канцелярия"],
    correct: 0,
    explanation: "«La librería» — книжный магазин (ложный друг русского слова «библиотека» — «la biblioteca»)."
  },
  {
    id: "a1_289",
    tier: 1,
    type: "translate",
    typeLabel: "Перевод A1 • Выражения с Tener",
    prompt: "Что означает фраза «Tengo suerte»?",
    options: ["Мне везёт (я удачлив)", "Мне страшно", "Я спешу", "Я хочу спать"],
    correct: 0,
    explanation: "«Tener suerte» — иметь удачу / везти."
  },
  {
    id: "a1_290",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Dormir",
    prompt: "Выбери правильную форму глагола «dormir» для «nosotros»:",
    subprompt: "Los fines de semana nosotros _____ hasta tarde.",
    options: ["dormimos", "duermimos", "duermen", "duermo"],
    correct: 0,
    explanation: "В настоящем времени чередование корневой гласной в «dormir» не затрагивает форму «nosotros»: «dormimos»."
  },
  {
    id: "a1_291",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Глагол Pedir",
    prompt: "Выбери правильную форму глагола «pedir» для «ellos»:",
    subprompt: "¿Qué _____ ellos para comer?",
    options: ["piden", "peden", "pide", "pedimos"],
    correct: 0,
    explanation: "Для «ellos» корневая «e» в «pedir» меняется на «i»: «piden»."
  },
  {
    id: "a1_292",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Предлоги",
    prompt: "Вставь правильный предлог («Мы едем в Барселону на поезде»):",
    subprompt: "Vamos a Barcelona _____ tren.",
    options: ["en", "a", "por", "de"],
    correct: 0,
    explanation: "С видами транспорта («tren», «avión», «coche», «barco») используется предлог «en»."
  },
  {
    id: "a1_293",
    tier: 1,
    type: "grammar",
    typeLabel: "Грамматика A1 • Согласование",
    prompt: "Выбери правильную форму прилагательного («Трудные упражнения»):",
    subprompt: "Estos ejercicios son muy _____.",
    options: ["difíciles", "difícil", "difícilas", "difícils"],
    correct: 0,
    explanation: "Прилагательные на согласную («difícil») образуют множественное число с окончанием «-es»: «difíciles»."
  },
  {
    id: "a1_294",
    tier: 1,
    type: "audio",
    typeLabel: "Аудирование A1 • Город",
    prompt: "Послушай фразу и выбери правильный ответ:",
    audioText: "¿Hay una panadería cerca de aquí?",
    options: ["Спрашивает, есть ли поблизости булочная.", "Просит принести свежий хлеб и масло.", "Говорит, что пекарня уже закрыта.", "Ищет автобусную остановку у рынка."],
    correct: 0,
    explanation: "«¿Hay una panadería cerca de aquí?» — Есть ли поблизости отсюда булочная?"
  },
{
    id: "a0_544",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как спросить: «Что это?»",
    subprompt: "Базовый вопрос, когда видишь незнакомый предмет",
    audioText: "¿Qué es esto?",
    options: ["¿Qué es esto?", "¿Quién es esto?", "¿Dónde es esto?", "¿Cuándo es esto?"],
    correct: 0,
    explanation: "«Что» по-испански — qué, а «это» (предмет рядом) — esto."
  },
  {
    id: "a0_545",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Я не знаю»",
    subprompt: "Честный и частый ответ в диалоге",
    audioText: "No sé",
    options: ["No sé", "No soy", "No estoy", "No tengo"],
    correct: 0,
    explanation: "Форма от глагола saber («знать») в 1-м лице — sé."
  },
  {
    id: "a0_546",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Я немного говорю по-испански»",
    subprompt: "Полезная фраза для начала общения",
    audioText: "Hablo un poco de español",
    options: ["Hablo un poco de español", "Hablo mucho español", "Entiendo todo español", "Hablo sin español"],
    correct: 0,
    explanation: "Un poco — «немного»."
  },
  {
    id: "a0_547",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как вежливо попросить: «Повторите, пожалуйста»",
    subprompt: "Когда собеседник говорит слишком быстро",
    audioText: "Repita, por favor",
    options: ["Repita, por favor", "Baja, por favor", "Cierra, por favor", "Abre, por favor"],
    correct: 0,
    explanation: "Repetir («повторять») в вежливой форме — repita."
  },
  {
    id: "a0_548",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Я не понимаю»",
    subprompt: "Когда смысл фразы ускользает",
    audioText: "No entiendo",
    options: ["No entiendo", "No escucho", "No miro", "No leo"],
    correct: 0,
    explanation: "Entender («понимать») -> yo entiendo."
  },
  {
    id: "a0_549",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Очень хорошо» / «Отлично»",
    subprompt: "Живой ответ на «¿Qué tal?»",
    audioText: "Muy bien",
    options: ["Muy bien", "Muy mal", "Muy tarde", "Muy lejos"],
    correct: 0,
    explanation: "Muy («очень») + bien («хорошо»)."
  },
  {
    id: "a0_550",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как спросить: «А ты?» (в ответ на «Как дела?»)",
    subprompt: "Короткий встречный вопрос",
    audioText: "¿Y tú?",
    options: ["¿Y tú?", "¿Y yo?", "¿Y él?", "¿Y aquí?"],
    correct: 0,
    explanation: "Tú — «ты», y — «и / а»."
  },
  {
    id: "a0_551",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Я тоже»",
    subprompt: "Когда соглашаешься с кем-то",
    audioText: "Yo también",
    options: ["Yo también", "Yo tampoco", "Yo ahora", "Yo aquí"],
    correct: 0,
    explanation: "También — «тоже / также»."
  },
  {
    id: "a0_552",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Я тоже нет» / «Я тоже не...»",
    subprompt: "Согласие при отрицании",
    audioText: "Yo tampoco",
    options: ["Yo tampoco", "Yo también", "Yo solo", "Yo pronto"],
    correct: 0,
    explanation: "Tampoco — «тоже нет / тоже не»."
  },
  {
    id: "a0_553",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Без проблем»",
    subprompt: "Спокойный ответ на просьбу или извинение",
    audioText: "Sin problema",
    options: ["Sin problema", "Con prisa", "Por aquí", "Hasta luego"],
    correct: 0,
    explanation: "Sin — «без»."
  },
  {
    id: "a0_554",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Сейчас»",
    subprompt: "Когда нужно обозначить время действия прямо сейчас",
    audioText: "Ahora",
    options: ["Ahora", "Ayer", "Mañana", "Nunca"],
    correct: 0,
    explanation: "Ahora («сейчас») — одно из самых частых слов в речи."
  },
  {
    id: "a0_555",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как спросить: «Кто это?»",
    subprompt: "Когда спрашиваешь о человеке",
    audioText: "¿Quién es?",
    options: ["¿Quién es?", "¿Qué es?", "¿Dónde es?", "¿Cuánto es?"],
    correct: 0,
    explanation: "Quién — «кто»."
  },
  {
    id: "a0_556",
    tier: 0,
    type: "choice",
    typeLabel: "База A0 • Живые фразы",
    prompt: "Как сказать: «Подожди минуту»",
    subprompt: "Живая фраза, когда нужно задержаться на секунду",
    audioText: "Espera un momento",
    options: ["Espera un momento", "Mira un momento", "Lee un momento", "Come un momento"],
    correct: 0,
    explanation: "Esperar («ждать») -> espera."
  },
  {
  id: "a0_557",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Части лица",
  prompt: "Как переводится на русский слово «la nariz»?",
  options: ["нос", "глаз", "ухо", "рот"],
  correct: 0,
  explanation: "«La nariz» — нос (женский род, артикль la)."
},
{
  id: "a0_558",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Канцелярия",
  prompt: "Как сказать по-испански «линейка»?",
  options: ["la regla", "el borrador", "la grapadora", "el cuaderno"],
  correct: 0,
  explanation: "«La regla» означает «линейка» (а также «правило»)."
},
{
  id: "a0_559",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Сладости и выпечка",
  prompt: "Что означает слово «la galleta»?",
  options: ["печенье", "конфета", "мороженое", "булочка"],
  correct: 0,
  explanation: "«La galleta» переводится как «печенье»."
},
{
  id: "a0_560",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Космос",
  prompt: "Как переводится «la estrella»?",
  options: ["звезда", "планета", "луна", "ракета"],
  correct: 0,
  explanation: "«La estrella» — звезда (обрати внимание на двойную l)."
},
{
  id: "a0_561",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Пляжные вещи",
  prompt: "Как по-испански «солнцезащитные очки»?",
  options: ["las gafas de sol", "la toalla de playa", "el sombrero", "la sombrilla"],
  correct: 0,
  explanation: "«Las gafas de sol» — буквально «очки от солнца»."
},
{
  id: "a0_562",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Части лица",
  prompt: "Выбери правильный артикль:",
  subprompt: "_____ ojos son marrones.",
  options: ["Los", "Las", "El", "La"],
  correct: 0,
  explanation: "«El ojo» — слово мужского рода, во множественном числе используется артикль «los»."
},
{
  id: "a0_563",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Канцелярия",
  prompt: "Выбери правильный артикль:",
  subprompt: "Tengo _____ lápiz amarillo.",
  options: ["un", "una", "unos", "unas"],
  correct: 0,
  explanation: "«Lápiz» — существительное мужского рода единственного числа, поэтому «un»."
},
{
  id: "a0_564",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Сладости и выпечка",
  prompt: "Выбери правильную форму множественного числа:",
  subprompt: "Dos _____ de chocolate.",
  options: ["pasteles", "pastels", "pastela", "pastelas"],
  correct: 0,
  explanation: "Слова на согласную (как «pastel») образуют множественное число с помощью окончания -es."
},
{
  id: "a0_565",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Космос",
  prompt: "Выбери правильный артикль:",
  subprompt: "_____ luna brilla en el cielo.",
  options: ["La", "El", "Los", "Las"],
  correct: 0,
  explanation: "«Luna» (луна) — существительное женского рода, используется артикль «la»."
},
{
  id: "a0_566",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Инструменты и ремонт",
  prompt: "Выбери правильный неопределённый артикль:",
  subprompt: "Necesito _____ martillo.",
  options: ["un", "una", "unas", "el"],
  correct: 0,
  explanation: "«Martillo» (молоток) — мужской род единственного числа, поэтому «un»."
},
{
  id: "a0_567",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Эмоции",
  prompt: "Выбери правильную форму:",
  subprompt: "María está _____ hoy.",
  options: ["contenta", "contento", "contentos", "contentas"],
  correct: 0,
  explanation: "María — женский род единственного числа, поэтому прилагательное «contenta» заканчивается на -a."
},
{
  id: "a0_audio_99",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Насекомые",
  prompt: "Послушай слово и выбери перевод:",
  audioText: "La mariposa",
  options: ["бабочка", "муравей", "пчела", "паук"],
  correct: 0,
  explanation: "«La mariposa» переводится как «бабочка»."
},
{
  id: "a0_audio_100",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Бытовая техника",
  prompt: "Послушай слово и выбери перевод:",
  audioText: "La nevera",
  options: ["холодильник", "микроволновка", "стиральная машина", "пылесос"],
  correct: 0,
  explanation: "«La nevera» — холодильник (также в ряде стран используют «el refrigerador»)."
},
{
  id: "a0_audio_101",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Эмоции",
  prompt: "Послушай фразу и выбери перевод:",
  audioText: "Estoy cansado",
  options: ["Я устал", "Я голоден", "Я рад", "Я боюсь"],
  correct: 0,
  explanation: "«Estoy cansado» — «Я устал» (форма для говорящего мужского рода)."
},
{
  id: "a0_audio_102",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Пляжные вещи",
  prompt: "Послушай словосочетание и выбери перевод:",
  audioText: "La toalla grande",
  options: ["большое полотенце", "маленький мяч", "холодная вода", "белый песок"],
  correct: 0,
  explanation: "«La toalla» — полотенце, «grande» — большой/большое."
},
{
  id: "a0_audio_103",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Насекомые",
  prompt: "Послушай слово и выбери перевод:",
  audioText: "La abeja",
  options: ["пчела", "жук", "комар", "стрекоза"],
  correct: 0,
  explanation: "«La abeja» означает «пчела»."
},
{
  id: "a0_audio_104",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Бытовая техника",
  prompt: "Послушай слово и выбери перевод:",
  audioText: "La lámpara",
  options: ["лампа", "розетка", "утюг", "чайник"],
  correct: 0,
  explanation: "«La lámpara» — лампа или светильник."
},
{
  id: "a0_build_28",
  tier: 0,
  type: "builder",
  typeLabel: "Конструктор A0 • Космос",
  prompt: "Собери на испанском: «Солнце большое»",
  words: ["grande", "El", "sol", "es", "La", "pequeño"],
  answer: ["El", "sol", "es", "grande"],
  explanation: "«El sol es grande» — «Солнце большое» (глагол ser для постоянного признака)."
},
{
  id: "a0_build_29",
  tier: 0,
  type: "builder",
  typeLabel: "Конструктор A0 • Канцелярия",
  prompt: "Собери на испанском: «У меня есть тетрадь»",
  words: ["tengo", "Yo", "un", "cuaderno", "una", "tienes"],
  answer: ["Yo", "tengo", "un", "cuaderno"],
  explanation: "«Yo tengo un cuaderno» — «У меня есть тетрадь» («cuaderno» — мужской род)."
},
{
  id: "a0_568",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Космос",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><circle cx=\"65\" cy=\"45\" r=\"22\" fill=\"#FDB813\"/><line x1=\"65\" y1=\"8\" x2=\"65\" y2=\"18\" stroke=\"#FDB813\" stroke-width=\"3\"/><line x1=\"65\" y1=\"72\" x2=\"65\" y2=\"82\" stroke=\"#FDB813\" stroke-width=\"3\"/><line x1=\"28\" y1=\"45\" x2=\"38\" y2=\"45\" stroke=\"#FDB813\" stroke-width=\"3\"/><line x1=\"92\" y1=\"45\" x2=\"102\" y2=\"45\" stroke=\"#FDB813\" stroke-width=\"3\"/></svg>",
  prompt: "Как называется этот объект по-испански?",
  options: ["el sol", "la luna", "la nube", "el rayo"],
  correct: 0,
  explanation: "На картинке изображено солнце — «el sol»."
},
{
  id: "a0_569",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Инструменты и ремонт",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><rect x=\"58\" y=\"38\" width=\"12\" height=\"38\" rx=\"3\" fill=\"#8D5524\"/><rect x=\"36\" y=\"20\" width=\"54\" height=\"18\" rx=\"3\" fill=\"#607D8B\"/></svg>",
  prompt: "Какой инструмент изображён на картинке?",
  options: ["el martillo", "el destornillador", "la sierra", "la llave"],
  correct: 0,
  explanation: "На рисунке молоток — «el martillo»."
},
{
  id: "a0_570",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Сладости и выпечка",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><circle cx=\"65\" cy=\"48\" r=\"24\" fill=\"#D28A4C\"/><circle cx=\"56\" cy=\"42\" r=\"3\" fill=\"#4E2A14\"/><circle cx=\"74\" cy=\"44\" r=\"3\" fill=\"#4E2A14\"/><circle cx=\"65\" cy=\"55\" r=\"3\" fill=\"#4E2A14\"/></svg>",
  prompt: "Что изображено на картинке?",
  options: ["la galleta", "la tarta", "el helado", "la miel"],
  correct: 0,
  explanation: "Это печенье с шоколадными кусочками — «la galleta»."
},
{
  id: "a0_571",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Части лица",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><ellipse cx=\"65\" cy=\"45\" rx=\"32\" ry=\"16\" fill=\"none\" stroke=\"#37474F\" stroke-width=\"3\"/><circle cx=\"65\" cy=\"45\" r=\"10\" fill=\"#4FC3F7\"/><circle cx=\"65\" cy=\"45\" r=\"4\" fill=\"#102027\"/></svg>",
  prompt: "Какая часть лица изображена?",
  options: ["el ojo", "la oreja", "la boca", "la ceja"],
  correct: 0,
  explanation: "На рисунке глаз — «el ojo»."
},
{
  id: "a0_572",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Пляжные вещи",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><path d=\"M25 45 Q65 12 105 45 Z\" fill=\"#FF5252\"/><line x1=\"65\" y1=\"45\" x2=\"65\" y2=\"78\" stroke=\"#795548\" stroke-width=\"4\"/></svg>",
  prompt: "Какой пляжный предмет нарисован?",
  options: ["la sombrilla", "la toalla", "el flotador", "la chancla"],
  correct: 0,
  explanation: "На картинке пляжный зонт — «la sombrilla»."
},
{
  id: "a0_573",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Бытовая техника",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><rect x=\"42\" y=\"14\" width=\"46\" height=\"62\" rx=\"4\" fill=\"#ECEFF1\" stroke=\"#546E7A\" stroke-width=\"3\"/><line x1=\"42\" y1=\"36\" x2=\"88\" y2=\"36\" stroke=\"#546E7A\" stroke-width=\"3\"/><line x1=\"80\" y1=\"22\" x2=\"80\" y2=\"30\" stroke=\"#546E7A\" stroke-width=\"3\"/><line x1=\"80\" y1=\"43\" x2=\"80\" y2=\"55\" stroke=\"#546E7A\" stroke-width=\"3\"/></svg>",
  prompt: "Какой прибор изображён на картинке?",
  options: ["la nevera", "el horno", "la lavadora", "el microondas"],
  correct: 0,
  explanation: "На рисунке двухкамерный холодильник — «la nevera»."
},
{
  id: "a0_574",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Погода и природа",
  prompt: "Как переводится на русский слово «la lluvia»?",
  options: ["дождь", "снег", "ветер", "туман"],
  correct: 0,
  explanation: "«La lluvia» — дождь (женский род, артикль la)."
},
{
  id: "a0_575",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Одежда",
  prompt: "Как сказать по-испански «куртка»?",
  options: ["la chaqueta", "el calcetín", "el cinturón", "la bufanda"],
  correct: 0,
  explanation: "«La chaqueta» означает «куртка» или «пиджак»."
},
{
  id: "a0_576",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Фрукты и ягоды",
  prompt: "Что означает слово «la fresa»?",
  options: ["клубника", "вишня", "персик", "груша"],
  correct: 0,
  explanation: "«La fresa» переводится как «клубника»."
},
{
  id: "a0_577",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Мебель",
  prompt: "Как переводится «la estantería»?",
  options: ["книжная полка", "кресло", "шкаф", "диван"],
  correct: 0,
  explanation: "«La estantería» — полка или стеллаж."
},
{
  id: "a0_578",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Погода и природа",
  prompt: "Выбери правильный артикль:",
  subprompt: "_____ viento es frío.",
  options: ["El", "La", "Los", "Las"],
  correct: 0,
  explanation: "«Viento» (ветер) — существительное мужского рода единственного числа, поэтому «el»."
},
{
  id: "a0_579",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Одежда",
  prompt: "Выбери правильную форму множественного числа:",
  subprompt: "Tengo dos _____ negros.",
  options: ["calcetines", "calcetins", "calcetina", "calcetinas"],
  correct: 0,
  explanation: "«Calcetín» заканчивается на согласную n, поэтому во множественном числе добавляется -es: «calcetines»."
},
{
  id: "a0_580",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Фрукты и ягоды",
  prompt: "Выбери правильный артикль:",
  subprompt: "Quiero _____ pera madura.",
  options: ["una", "un", "unas", "unos"],
  correct: 0,
  explanation: "«Pera» (груша) — женский род единственного числа, используется неопределённый артикль «una»."
  },
  {
  id: "a0_580",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Спорт и хобби",
  prompt: "Как переводится на русский слово «la pelota»?",
  options: ["мяч", "велосипед", "ракетка", "коньки"],
  correct: 0,
  explanation: "«La pelota» — мяч (слово женского рода, артикль la)."
},
{
  id: "a0_581",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Профессии",
  prompt: "Как сказать по-испански «пожарный»?",
  options: ["el bombero", "el cocinero", "el cartero", "el pintor"],
  correct: 0,
  explanation: "«El bombero» означает «пожарный»."
},
{
  id: "a0_582",
  tier: 0,
  type: "translate",
  typeLabel: "Перевод A0 • Музыкальные инструменты",
  prompt: "Что означает слово «el tambor»?",
  options: ["барабан", "гитара", "флейта", "скрипка"],
  correct: 0,
  explanation: "«El tambor» переводится как «барабан»."
},
{
  id: "a0_583",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Спорт и хобби",
  prompt: "Выбери правильный артикль:",
  subprompt: "Tengo _____ bicicleta nueva.",
  options: ["una", "un", "unos", "el"],
  correct: 0,
  explanation: "«Bicicleta» — существительное женского рода единственного числа, поэтому используется «una»."
},
{
  id: "a0_584",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Профессии",
  prompt: "Выбери правильную форму:",
  subprompt: "Ana es _____.",
  options: ["médica", "médico", "médicos", "médicas"],
  correct: 0,
  explanation: "Ana — женский род единственного числа, поэтому используется форма «médica» (врач)."
},
{
  id: "a0_585",
  tier: 0,
  type: "grammar",
  typeLabel: "Грамматика A0 • Музыкальные инструменты",
  prompt: "Выбери правильную форму множественного числа:",
  subprompt: "En la tienda hay dos _____.",
  options: ["guitarras", "guitarra", "guitarres", "guitarros"],
  correct: 0,
  explanation: "Слова на гласную (как «guitarra») образуют множественное число добавлением окончания -s."
},
{
  id: "a0_audio_105",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Спорт и хобби",
  prompt: "Послушай слово и выбери перевод:",
  audioText: "La piscina",
  options: ["бассейн", "стадион", "каток", "спортзал"],
  correct: 0,
  explanation: "«La piscina» переводится как «бассейн»."
},
{
  id: "a0_audio_106",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Профессии",
  prompt: "Послушай словосочетание и выбери перевод:",
  audioText: "El panadero",
  options: ["пекарь", "водитель", "учитель", "продавец"],
  correct: 0,
  explanation: "«El panadero» — пекарь (от слова «el pan» — хлеб)."
},
{
  id: "a0_audio_107",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Музыкальные инструменты",
  prompt: "Послушай фразу и выбери перевод:",
  audioText: "Toco el piano",
  options: ["Я играю на пианино", "Я слушаю радио", "Я пою песню", "Я покупаю гитару"],
  correct: 0,
  explanation: "Глагол «tocar» с музыкальными инструментами означает «играть на чём-либо»."
},
{
  id: "a0_audio_108",
  tier: 0,
  type: "audio",
  typeLabel: "Аудирование A0 • Транспорт",
  prompt: "Послушай словосочетание и выбери перевод:",
  audioText: "El barco blanco",
  options: ["белый корабль", "чёрный поезд", "красный автобус", "синий самолёт"],
  correct: 0,
  explanation: "«El barco» — корабль/лодка, «blanco» — белый."
},
{
  id: "a0_build_30",
  tier: 0,
  type: "builder",
  typeLabel: "Конструктор A0 • Спорт и хобби",
  prompt: "Собери на испанском: «Мяч красный»",
  words: ["roja", "La", "pelota", "es", "El", "rojo"],
  answer: ["La", "pelota", "es", "roja"],
  explanation: "«La pelota es roja» — прилагательное «roja» согласуется в женском роде со словом «pelota»."
},
{
  id: "a0_586",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Спорт и хобби",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#FF7043\" stroke=\"#3E2723\" stroke-width=\"2.5\"/><line x1=\"39\" y1=\"45\" x2=\"91\" y2=\"45\" stroke=\"#3E2723\" stroke-width=\"2.5\"/><line x1=\"65\" y1=\"19\" x2=\"65\" y2=\"71\" stroke=\"#3E2723\" stroke-width=\"2.5\"/><path d=\"M47 26 Q65 45 47 64\" fill=\"none\" stroke=\"#3E2723\" stroke-width=\"2.5\"/><path d=\"M83 26 Q65 45 83 64\" fill=\"none\" stroke=\"#3E2723\" stroke-width=\"2.5\"/></svg>",
  prompt: "Какой спортивный предмет изображён?",
  options: ["la pelota", "la raqueta", "el casco", "la red"],
  correct: 0,
  explanation: "На картинке баскетбольный мяч — «la pelota»."
},
{
  id: "a0_587",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Транспорт",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><polygon points=\"25,52 105,52 92,72 38,72\" fill=\"#1E88E5\"/><polygon points=\"65,16 65,48 92,48\" fill=\"#ECEFF1\" stroke=\"#90A4AE\" stroke-width=\"2\"/><line x1=\"65\" y1=\"16\" x2=\"65\" y2=\"52\" stroke=\"#5D4037\" stroke-width=\"3\"/></svg>",
  prompt: "Какой вид транспорта нарисован?",
  options: ["el barco", "el avión", "el tren", "el coche"],
  correct: 0,
  explanation: "На рисунке парусная лодка/корабль — «el barco»."
},
{
  id: "a0_588",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Музыкальные инструменты",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><ellipse cx=\"65\" cy=\"32\" rx=\"26\" ry=\"9\" fill=\"#FDD835\" stroke=\"#5D4037\" stroke-width=\"2\"/><rect x=\"39\" y=\"32\" width=\"52\" height=\"34\" fill=\"#E53935\"/><ellipse cx=\"65\" cy=\"66\" rx=\"26\" ry=\"9\" fill=\"#B71C1C\"/><line x1=\"48\" y1=\"36\" x2=\"58\" y2=\"64\" stroke=\"#FFF\" stroke-width=\"2\"/><line x1=\"65\" y1=\"38\" x2=\"58\" y2=\"64\" stroke=\"#FFF\" stroke-width=\"2\"/><line x1=\"65\" y1=\"38\" x2=\"76\" y2=\"64\" stroke=\"#FFF\" stroke-width=\"2\"/><line x1=\"82\" y1=\"36\" x2=\"76\" y2=\"64\" stroke=\"#FFF\" stroke-width=\"2\"/></svg>",
  prompt: "Какой музыкальный инструмент изображён?",
  options: ["el tambor", "el violín", "la flauta", "el piano"],
  correct: 0,
  explanation: "На картинке барабан — «el tambor»."
},
{
  id: "a0_589",
  tier: 0,
  type: "visual",
  typeLabel: "Картинка A0 • Дом и сад",
  svg: "<svg width=\"130\" height=\"90\" viewBox=\"0 0 130 90\"><polygon points=\"65,16 100,44 30,44\" fill=\"#D84315\"/><rect x=\"38\" y=\"44\" width=\"54\" height=\"34\" fill=\"#FFF8E1\" stroke=\"#8D6E63\" stroke-width=\"2\"/><rect x=\"58\" y=\"56\" width=\"14\" height=\"22\" fill=\"#6D4C41\"/></svg>",
  prompt: "Что изображено на картинке?",
  options: ["la casa", "el puente", "la torre", "el árbol"],
  correct: 0,
  explanation: "На рисунке дом с крышей и дверью — «la casa»."
}
  
  










];