import { LocaleData } from 'types/locals'
import { EMAIL, GITHUB, SKILLS, TELEGRAM, TELEPHONE } from '../common'

export const en: LocaleData = {
    words: {
        resume: 'Resume',
        name: 'Name',
        birthday: 'Birthday',
        place: 'Location',
        adress: 'Address',
        telephone: 'Phone',
        telegram: 'Telegram',
        email: 'Email',
        personalData: 'Personal information',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        testTask: 'Test tasks',
        uses: 'Uses technologies',
        languages: 'Languages',
        more: 'More',
        view: 'View',
        inProgress: 'Under development',
    },
    personal: {
        name: 'Alexander Solyar',
        birthday: 'January 4, 1999',
        place: 'Kyiv region',
        github: GITHUB,
        telephone: TELEPHONE,
        telegram: TELEGRAM,
        email: EMAIL,
    },
    languages: [
        {
            name: 'Ukrainian',
            level: 'Native',
        },
        {
            name: 'Russian',
            level: 'С1',
        },
        {
            name: 'English',
            level: 'B1',
        },
    ],
    summary: {
        title: 'React FrontEnd Developer',
        salary: 'Expected salary from $1400',
        text: `I have 8 years of experience in software development. Self-taught various programming languages, including Lua, Haskell, C++ and Python. Currently, my primary programming languages ​​are Javascript and Typescript. My knowledge of these programming languages ​​is thorough, having once written my own programming language: a typed plugin for Lua. I enjoy using this knowledge to create functional and aesthetic software. I have a strong understanding of OOP, REST API, SOLID and other architectural principles and patterns. I am looking for an opportunity to work in an exciting environment where I can develop my skills in any direction. I like to constantly learn and improve myself, so I quickly learn new ideas and technologies.`,
    },
    skills: SKILLS,
    educations: [
        {
            start: 'September 2014',
            end: 'May 2018',
            name: 'Junior Specialist - Software Design',
            place: 'College NAU, Vasilkov, Ukraine',
        },
        {
            start: 'September 2018',
            name: 'Specialist - Software Engineering',
            place: 'State University of Telecommunications, Kyiv, Ukraine',
            extra: '5th year (not finished)',
        },
    ],
    experience: [
        {
            position: 'System Administrator',
            place: 'Crystall ISP',
            period: '2 years',
            description: `As a system administrator, I studied network technologies from the OSI stack, so I have an idea of ​​how everything works on the Internet. Also configured network devices, diagnosed them and identified problems. Developed scripts on Node.js to automate certain processes. Created my own console client for the telnet protocol, with syntax highlighting and other useful features. Also engaged in writing configuration templates for network devices (candles, olts) on the Pug template generator. He left behind a database of ready-made templates.`,
        },
        {
            position: 'Frontend Developer (React)',
            place: 'AzSoft',
            period: '1 year',
            description: `During my work experience, I have participated in several projects. Initially, I worked on a project that used the mxGraph library on Angular to build charts. I redesigned data structures, solved problems and helped other team members. In the future, I worked exclusively with React and took part in projects where I had experience in designing user interfaces and animating game panels. In the last project, I configured and selected a library for building sequence diagrams. I developed the architecture and actively participated in discussions about its improvement, planned refactoring and constantly helped to improve the efficiency of the project. During this time, I increased my experience in React and Typescript development, and also learned about new libraries such as Chakra UI, MobX, React Flow, and React Hook Form.`,
        },
        {
            position: 'Frontend Developer (React)',
            place: 'Forex Tester',
            period: '3 місяці',
            description:
                'Participated in the development of a web application for testing your trading strategies on the data collected in the past. Tried with a modified library for drawing trading graphs. I was engaged in fixing bugs and layout of the user interface. Also participated in the refactoring of this project.',
        },
    ],
    projects: [
        {
            name: 'Tua',
            description: `A proprietary programming language that is an add-on for Lua with static typing. Inspired by Typescript and drew ideas from it. It was the subject of a diploma thesis. I wrote for the purpose of self-development. I thoroughly studied compilers, translation process and various typing systems, interaction mechanisms in programming languages. I have read many books on this topic. The first project in which I learned refactoring and optimization. At the moment, the project is abandoned, I plan to return to it later.`,
            technologies: ['Node.js'],
        },
        {
            name: 'TelnetMy',
            description: `A console client for the telnet protocol. Created to automate routine actions during the work of a system administrator. Automatic authorization was implemented, where you could choose a device and an account from the list, so as not to enter the IP address and login with a password manually. Whenever possible, I tried to fill the project with new features. This is how a hint of the text appeared in it: various numbers, dates, serial numbers, which helps to quickly navigate the text flow. There are plans to transfer the project to Typescript, and to supplement it with a web client for the telnet protocol.`,
            technologies: ['Node.js'],
            repository: 'https://github.com/lehaisanya/telnet-my',
        },
        {
            name: 'Music metadata',
            description:
                'A client-server application for editing metatags of music files (mp3) with a convenient interface and the ability to edit several files at once. I also later added the ability to listen to these music files. Written exclusively for personal use. I plan to turn it into a full-fledged music player.',
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
            name: 'language',
            description: `A test compiler for a fictional abstract programming language. Created to better understand the compilation process. This compiler creates logs for each step, which allows you to see the entire compilation process step by step without leaving anything out of sight. At the moment, only two modules are implemented: a lexer and a parser. There are plans to complete the compiler completely.`,
            technologies: ['Typescript'],
            repository: 'https://github.com/lehaisanya/language',
        },
        {
            name: 'Resume',
            description: `The same project. Fully adaptive. With the ability to change the language.`,
            technologies: ['React', 'Typescript', 'Chakra UI'],
            repository: 'https://github.com/lehaisanya/resume',
        },
    ],
    testTasks: [
        {
            name: 'Phonebook',
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
            name: 'Table and Modal',
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
            name: 'RxJS Timer',
            description: 'Test task. Timer using RxJS technology',
            technologies: ['React', 'Typescript', 'RxJS'],
            repository: 'https://github.com/lehaisanya/test-timer-rxjs',
            viewLink: 'https://lehaisanya.github.io/test-timer-rxjs/',
        },
    ],
}
