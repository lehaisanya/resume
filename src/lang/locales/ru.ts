import { LocaleData } from 'types/locals'
import { EMAIL, GITHUB, SKILLS, TELEGRAM, TELEPHONE } from '../common'

export const ru: LocaleData = {
    words: {
        resume: 'Резюме',
        name: 'Имя',
        birthday: 'День рождения',
        place: 'Место нахождения',
        adress: 'Адрес',
        telephone: 'Телефон',
        telegram: 'Телеграм',
        email: 'Электронная почта',
        personalData: 'Личная информация',
        education: 'Образование',
        experience: 'Опыт работы',
        skills: 'Навыки',
        projects: 'Проекты',
        testTask: 'Тестовые задания',
        uses: 'Использованые технологии',
        languages: 'Языки',
        more: 'Больше',
        view: 'Посмотреть',
        inProgress: 'В разработке',
    },
    personal: {
        name: 'Александр Соляр',
        birthday: '4 Января 1999',
        place: 'Киевская обл.',
        github: GITHUB,
        telephone: TELEPHONE,
        telegram: TELEGRAM,
        email: EMAIL,
    },
    languages: [
        {
            name: 'Украинский',
            level: 'Родная',
        },
        {
            name: 'Русский',
            level: 'С1',
        },
        {
            name: 'Английский',
            level: 'B1',
        },
    ],
    summary: {
        title: 'React FrontEnd Developer',
        salary: 'Ожидаемая зарплата от 1000$',
        text: `Я разрабатываю уже в течение 8 лет. Самостоятельно изучал различные языки программирования, такие как Lua, Haskell, C++, Python. В данный момент остановился на Javascript и Typescript. Особенности языков знаю досконально, поскольку некогда писал свою надстройку с типизацией для Lua. Мне это просто нравится. Достаточно уверенно ориентируюсь в ООП, REST API, SOLID и других архитектурных принципах, а также паттернах. Ищу место, где будет интересно и легко работать, с возможностью улучшения своих навыков, в любых направлениях. Способен быстро учиться и постоянно заниматься самообразованием.`,
    },
    skills: SKILLS,
    educations: [
        {
            start: 'Сентябрь 2006',
            end: 'Май 2014',
            name: 'Неполное среднее образование',
            place: 'Глеваховский ООШ №1 I-III ступеней',
        },
        {
            start: 'Сентябрь 2014',
            end: 'Май 2018',
            name: 'Младший Специалист - Проектирование программного обеспечения',
            place: 'Колледж НАУ, Васильков, Украина',
        },
        {
            start: 'Сентябрь 2018',
            name: 'Специалист - Инженерия программного обеспечения',
            place: 'Государственный Университет Телекоммуникаций, Киев, Украина',
            extra: '5 курс (не закончил)',
        },
    ],
    experience: [
        {
            title: 'M.E.Doc - Работник техподдержки',
            period: '3 месяца',
            description: `Для работы нужно было досконально знать логику работы программы M.E.Doc чтобы иметь возможность решать проблемы клиентов очень быстро и сразу диагностировать возможную причину проблемы с последующим объяснением ее решения.`,
        },
        {
            title: 'Интернет провайдер Crystall - Системный администратор',
            period: '2 года',
            description: `Писал скрипты на Node.js для ускорения некоторых работ. Написал собственный консольный клиент для протокола telnet, с подсветкой синтаксиса и другими фичами. Также занимался написанием шаблонов конфигураций для устройств (свичей, олтов и тд.) на шаблонизаторе Pug. После себя оставил базу готовых шаблонов.`,
        },
        {
            title: 'AzSoft - Frontend Developer (React)',
            period: '1 год',
            description: `За время работы успел побывать на нескольких проектах. Сначала работал на проекте для построения диаграмм с библиотекой mxGraph на Angular, перепроектировывал структуры данных, решал баги. После этого работал только с React. Побывал на проекте, где пришлось верстать пользовательский интерфейс, анимировать игровые панели и так далее. Последний проект сетапил сам, в нем тоже нужно было строить диаграммы последовательностей, и я выбрал более современную библиотеку React Flow. Разрабатывал архитектуру и в дальнейшем вел диалоги по улучшению архитектуры, распланировывал рефакторинг и активно поднимал темы улучшения проекта. За время работы улучшил свои навыки разработки с React и Typescript, познакомился с новыми библиотеками, такими как Chakra UI, MobX, React Flow, React Hook Form.`,
        },
    ],
    projects: [
        {
            name: 'Resume',
            description: `Этот же проект. Полностью адаптивный. С возможностью менять язык.`,
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
            description: `Надстройка для Lua с типизацией, такая как Typescript (собственно Typescript я и вдохновлялся и черпал из него идеи). Была темой дипломной работы. Писался в целях саморазвития. Я досконально изучал компиляторы и различные системы типизации, механизмы взаимодействия в языках программирования. Прочитал много книг по теме. Первый проект в котором я учился рефакторинга и оптимизации. На данный момент проект заброшен. Возможно вернусь к нему позже.`,
            technologies: ['Node.js'],
        },
        {
            name: 'TelnetMy',
            description: `Консольный клиент для протокола telnet. Работа системного администратора требует много рутинных действий. Поэтому я решил автоматизировать частое действие: авторизация на устройстве. По возможности старался наполнять проект новыми фичам. Так в нем появилась подсветка текста: различных чисел, дат, серийных номеров и др. Также появился список с устройствами, где можно сразу выбрать нужный, не вводя его IP. А также появился список пользователей, где можно было выбрать пользователя от которого мы хотим авторизоваться на устройстве.`,
            technologies: ['Node.js'],
            repository: 'https://github.com/lehaisanya/telnet-my',
        },

        {
            name: 'Articles Here',
            description: `Онлайн редактор статей. Тестовый проект для портфолио. В нем я демонстрирую свои знания технологий React/Redux. Полноценный проект на MERN.`,
            technologies: [
                'React',
                'Redux',
                'MongoDB',
                'Node.js',
                'Typescript',
                'Antd',
            ],
            inProgress: true,
        },
    ],
    testTasks: [
        {
            name: 'Телефонная книга',
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
            name: 'Таблица и Модальное окно',
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