import { Lang, SkillLevel } from 'types'

const lang: Lang = {
    words: {
        name: 'Ім\'я',
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
        uses: 'Використанні технології',
        languages: 'Мови',
        more: 'Більше'
    },
    personal: {
        name: 'Олександр Соляр',
        birthday: '4 Cічня 1999',
        place: 'Київська обл.',
        adress: 'смт. Глеваха, вул. Механізаторів, буд. 33',
        telephone: '+380675976212',
        telegram: '@lehaisanya',
        email: 'lehaisanya@gmail.com',
    },
    languages: [
        {
            name: 'Українська',
            level: 'Рідна'
        },
        {
            name: 'Російська',
            level: 'С1'
        },
        {
            name: 'Англійська',
            level: 'B1'
        }
    ],
    description: {
        title: 'React FrontEnd Developer',
        salary: 'Очікувана зарплата від 600$',
        text: `Я розробляю вже протягом 6 років. Самостійно вивчав різні мови програмування, такі як Lua, Haskell, C++, Python. В данний момент зупинився на Javascript і Typescript. Особливості мов знаю досконально, оскільки колись писав свою надбудову з типізацією для Lua. Мені це просто подобається. Достатньо впевнено орієнтуюсь в ООП, REST API та інших архітектурних принципах. Шукаю місце, де буде цікаво і легко працювати, з можливістю покращення своїх навиків, у будь-яких напрямках. Здатний швидко вчитися і постійно займатися самоосвітою.`
    },
    educations: [
        {
            start: 'Вересень 2006',
            end: 'Травень 2014',
            educ: 'Неповна середня освіта',
            place: 'Глевахівська ЗОШ №1 І-ІІІ ступенів'
        },
        {
            start: 'Вересень 2014',
            end: 'Травень 2018',
            educ: 'Молодший бакалавр - Проектування програмного забезпечення',
            place: 'Коледж НАУ, Васильків, Україна'
        },
        {
            start: 'Вересень 2018',
            end: 'Зараз',
            educ: 'Бакалавр - Інженерія програмного забезпечення',
            place: 'Державний Університет Телекомунікацій, Київ, Україна',
            extra: '5 курс (останній)'
        }
    ],
    experience: [
        {
            title: 'M.E.Doc - Працівник техпідтримки',
            period: '3 місяці',
            description: `Для роботи потрібно було досконально знати логіку роботи програми M.E.Doc щоб мати можливість вирішувати проблеми клієнтів дуже швидко і одразу діагностувати можливу причину проблеми з подальшим поясненням її вирішення.`
        },
        {
            title: 'Інтернет провайдер Crystall - Системний адміністратор',
            period: '2 роки',
            description: `Писав скрипти на Node.js для пришвидшення деяких робіт. Написав власний консольний клієнт для протоколу telnet, з підсвіткою синтаксису та іншими фічами. Також займався написанням шаблонів конфігурацій для пристроїв (свічів, олтів і тд.) на шаблонизаторі Pug. Після себе залишив базу готових шаблонів.`
        }
    ],
    skills: [
        {
            name: 'JavaScript (ES6)',
            level: SkillLevel.Professional
        },
        {
            name: 'Node.js (Express)',
            level: SkillLevel.Advanced
        },
        {
            name: 'Lua',
            level: SkillLevel.Advanced
        },
        {
            name: 'Git',
            level: SkillLevel.Advanced
        },
        {
            name: 'REST API',
            level: SkillLevel.Advanced
        },
        {
            name: 'HTML/CSS',
            level: SkillLevel.Advanced
        },
        {
            name: 'React',
            level: SkillLevel.Advanced
        },
        {
            name: 'Redux',
            level: SkillLevel.Advanced
        },
        {
            name: 'Typescript',
            level: SkillLevel.Advanced
        },
        {
            name: 'Webpack',
            level: SkillLevel.Confident
        }
    ],
    projects: [
        {
            name: 'Tua',
            description: `Надбудова для Lua з типізацією, така як Typescript (власне Typescript я і надихався і черпав з нього ідеї). Була темою дипломної роботи. Писався в цілях саморозвитку. Я досконально вивчав компілятори і різні системи типізації, механізми взаємодії в мовах програмування. Прочитав багато книг на тему. Перший проект в якому я навчався рефакторингу і оптимізації. На данний момент проект закинуто. Можливо повернусь до нього пізніше.`,
            technologies: ['Node.js']
        },
        {
            name: 'TelnetMy',
            description: `Консольний клієнт для протоколу telnet. Робота системного адміністратору потребує багато рутинних дій. Тому я вирішив автоматизувати найчастішу дію: авторизація на пристрої. По можливості старався наповнювати проект новими фічами. Так в ньому з'явилась підсвідка тексту: різних чисел, дат, серійних номерів, та ін. Також з'явився список з пристроями, де можна одразу обирати потрібний, не вводячи його IP. А також з'явився список користувачів, де також можна було обрати користувача від якого ми хочемо авторизуватись на пристрої.`,
            technologies: ['Node.js'],
            link: 'https://github.com/lehaisanya/telnet-my'
        },
        {
            name: 'Resume',
            description: `Цей самий проект, для прикладу.`,
            technologies: ['React', 'Typescript', 'Antd'],
            link: 'https://github.com/lehaisanya/resume'
        },
        {
            name: 'Articles Here',
            description: `Онлайн редактор статтів. Тестовий проект для портфоліо. В ньому я демонструю свої знання технологій React/Redux. Повноцінний проект на MERN. В данний момент в процесі розробки.`,
            technologies: ['React', 'Redux', 'MongoDB', 'Node.js', 'Typescript', 'Antd'],
            link: 'https://github.com/lehaisanya/articles-here',
            inProgress: true
        }
    ]
}


export default lang
