import { LocaleData } from 'types/locals'
import { EMAIL, GITHUB, SKILLS, TELEGRAM, TELEPHONE } from '../common'

export const ua: LocaleData = {
    words: {
        resume: 'Резюме',
        name: "Ім'я",
        birthday: 'День народження',
        place: 'Місце знаходження',
        adress: 'Адреса',
        telephone: 'Телефон',
        telegram: 'Телеграм',
        email: 'Електронна пошта',
        personalData: 'Особиста інформація',
        education: 'Освіта',
        experience: 'Досвід роботи',
        skills: 'Навички',
        projects: 'Проекти',
        testTask: 'Тестові завдання',
        uses: 'Використанні технології',
        languages: 'Мови',
        more: 'Більше',
        view: 'Переглянути',
        inProgress: 'В розробці',
    },
    personal: {
        name: 'Олександр Соляр',
        birthday: '4 Cічня 1999',
        place: 'Київська обл.',
        github: GITHUB,
        telephone: TELEPHONE,
        telegram: TELEGRAM,
        email: EMAIL,
    },
    languages: [
        {
            name: 'Українська',
            level: 'Рідна',
        },
        {
            name: 'Російська',
            level: 'С1',
        },
        {
            name: 'Англійська',
            level: 'B1',
        },
    ],
    summary: {
        title: 'React FrontEnd Developer',
        salary: 'Очікувана зарплата від 1400$',
        text: `Я розробляю вже протягом 8 років. Самостійно вивчав різні мови програмування, такі як Lua, Haskell, C++, Python. В данний момент зупинився на Javascript і Typescript. Особливості мов знаю досконально, оскільки колись писав свою надбудову з типізацією для Lua. Мені це просто подобається. Достатньо впевнено орієнтуюсь в ООП, REST API, SOLID та інших архітектурних принципах, а також паттернах. Шукаю місце, де буде цікаво і легко працювати, з можливістю покращення своїх навиків, у будь-яких напрямках. Здатний швидко вчитися і постійно займатися самоосвітою.`,
    },
    skills: SKILLS,
    educations: [
        {
            start: 'Вересень 2014',
            end: 'Травень 2018',
            name: 'Молодший Спеціаліст - Проектування програмного забезпечення',
            place: 'Коледж НАУ, Васильків, Україна',
        },
        {
            start: 'Вересень 2018',
            name: 'Спеціаліст - Інженерія програмного забезпечення',
            place: 'Державний Університет Телекомунікацій, Київ, Україна',
            extra: '5 курс (не закінчив)',
        },
    ],
    experience: [
        {
            position: 'Системний адміністратор',
            place: 'Інтернет провайдер Crystall',
            period: '2 роки',
            description: `Писав скрипти на Node.js для пришвидшення деяких робіт. Написав власний консольний клієнт для протоколу telnet, з підсвіткою синтаксису та іншими фічами. Також займався написанням шаблонів конфігурацій для пристроїв (свічів, олтів і тд.) на шаблонизаторі Pug. Після себе залишив базу готових шаблонів.`,
        },
        {
            position: 'Frontend Developer (React)',
            place: 'AzSoft',
            period: '1 рік',
            description: `За час роботи встиг побувати на декількох проектах. Спочатку працював на проекті для побудови діаграмок з бібліотекою mxGraph на Angular, перепроектовував структури данних, вирішував баги. Після цього працював тільки з React. Побував на проекті де довелося верстати користувацький інтерфейс, анімувати ігрові панелі і таке інше. Останній проект сетапив сам, в ньому також треба було будувати діаграмки послідовностей, і я обрав більш сучасну бібліотеку React Flow. Розробляв архітектуру і в подальшому вів діалоги щодо покращення архітектури, розплановував рефакторинг і активно піднімав теми покращення проекту. За час роботи покращив свої навики розробки з React та Typescript, познайомився з новими бібліотеками, такими як: Chakra UI, MobX, React Flow, React Hook Form.`,
        },
        {
            position: 'Frontend Developer (React)',
            place: 'Forex Tester',
            period: '3 місяці',
            description: '',
        },
    ],
    projects: [
        {
            name: 'Резюме',
            description: `Цей самий проект. Повністю адаптивний. З можливістю змінювати мову.`,
            technologies: ['React', 'Typescript', 'Chakra UI'],
            repository: 'https://github.com/lehaisanya/resume',
        },
        {
            name: 'Music metadata',
            description: '',
            technologies: [
                'React',
                'Typescript',
                'MobX',
                'Chakra UI',
                'Express',
            ],
            repository: 'https://github.com/lehaisanya/music-metadata',
        },
        {
            name: 'Tua',
            description: `Надбудова для Lua з типізацією, така як Typescript (власне Typescript я і надихався і черпав з нього ідеї). Була темою дипломної роботи. Писався в цілях саморозвитку. Я досконально вивчав компілятори і різні системи типізації, механізми взаємодії в мовах програмування. Прочитав багато книг на тему. Перший проект в якому я навчався рефакторингу і оптимізації. На данний момент проект закинуто. Можливо повернусь до нього пізніше.`,
            technologies: ['Node.js'],
        },
        {
            name: 'TelnetMy',
            description: `Консольний клієнт для протоколу telnet. Робота системного адміністратору потребує багато рутинних дій. Тому я вирішив автоматизувати найчастішу дію: авторизація на пристрої. По можливості старався наповнювати проект новими фічами. Так в ньому з'явилась підсвідка тексту: різних чисел, дат, серійних номерів, та ін. Також з'явився список з пристроями, де можна одразу обирати потрібний, не вводячи його IP. А також з'явився список користувачів, де також можна було обрати користувача від якого ми хочемо авторизуватись на пристрої.`,
            technologies: ['Node.js'],
            repository: 'https://github.com/lehaisanya/telnet-my',
        },
        {
            name: 'language',
            description: `Логгер показує як іде процес компіляції. На даний момент реалізований тільки лексер і парсер.`,
            technologies: ['Typescript'],
            repository: 'https://github.com/lehaisanya/language',
        },
    ],
    testTasks: [
        {
            name: 'Телефонна книга',
            description: '',
            technologies: [
                'React',
                'Typescript',
                'MobX',
                'SASS',
                'React Router Dom',
            ],
            repository: 'https://github.com/lehaisanya/test-phonebook',
            viewLink: 'https://lehaisanya.github.io/test-phonebook/',
        },
        {
            name: 'Таблиця та Модальне вікно',
            description: '',
            technologies: [
                'React',
                'Typescript',
                'react-hook-form',
                'Redux (toolkit)',
            ],
            repository: 'https://github.com/lehaisanya/test-table-and-modal',
            viewLink: 'https://lehaisanya.github.io/test-table-and-modal/',
        },
        {
            name: 'RxJS Таймер',
            description: '',
            technologies: ['React', 'Typescript', 'RxJS'],
            repository: 'https://github.com/lehaisanya/test-timer-rxjs',
            viewLink: 'https://lehaisanya.github.io/test-timer-rxjs/',
        },
    ],
}
