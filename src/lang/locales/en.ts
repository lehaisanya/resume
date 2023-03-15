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
        salary: 'Expected salary from $1000',
        text: `I have been developing for 8 years. Independently studied various programming languages, such as Lua, Haskell, C++, Python. At the moment I settled on Javascript and Typescript. I know the peculiarities of languages thoroughly, because I once wrote my superstructure with typification for Lua. I just like it. I am quite confident in OOP, REST API, SOLID and other architectural principles, as well as patterns. I am looking for a place where it will be interesting and easy to work, with the opportunity to improve their skills in any direction. Able to learn quickly and constantly engage in self-education.`,
    },
    skills: SKILLS,
    educations: [
        {
            start: 'September 2006',
            end: 'May 2014',
            name: 'Incomplete secondary education',
            place: 'Glevakhiv Secondary School №1 I-III degrees',
        },
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
            title: 'M.E.Doc - Technical support worker',
            period: '3 months',
            description: `To work, it was necessary to know the logic of the M.E.Doc program to be able to solve customer problems very quickly and immediately diagnose the possible cause of the problem with further explanation of its solution.`,
        },
        {
            title: 'Crystall ISP - System Administrator',
            period: '2 years',
            description: `Wrote scripts on Node.js to speed up some work. Wrote my own console client for the telnet protocol, with syntax highlighting and other features. He also wrote configuration templates for devices (switch, olts, etc.) on the Pug template engine. He left behind a database of ready-made templates.`,
        },
        {
            title: 'AzSoft - Frontend Developer (React)',
            period: '1 year',
            description: `During his work he managed to visit several projects. Initially, worked on a charting project with the mxGraph library on Angular, redesigned data structures, and fixed bugs. After that worked only with React. I visited a project where I had to create user interfaces, animate game panels and so on. The last project was set up by myself, it also had to build sequence diagrams, and I chose the more modern React Flow library. Developed architecture and subsequently conducted dialogues to improve architecture, planned refactoring and actively raised issues of project improvement. During work improved development skills with React and Typescript, got acquainted with new libraries, such as: Chakra UI, MobX, React Flow, React Hook Form.`,
        },
    ],
    projects: [
        {
            name: 'Resume',
            description: `The same project. Fully adaptive. With the ability to change the language.`,
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
            description: `An superstructure for Lua with typification, such as Typescript (actually Typescript, I was inspired and drew ideas from it). It was the topic of the thesis. Written for self-development. I thoroughly studied compilers and various typing systems, mechanisms of interaction in programming languages. I read many books on the subject. The first project in which I studied refactoring and optimization. At the moment the project is abandoned. Maybe I'll come back to him later.`,
            technologies: ['Node.js'],
        },
        {
            name: 'TelnetMy',
            description: `Console client for telnet protocol. The work of a system administrator requires a lot of routine actions. So I decided to automate the most common action: authorization on the device. Whenever possible I tried to fill the project with new features. So there was a backlight of the text: different numbers, dates, serial numbers, etc. There is also a list of devices where you can immediately select the desired one without entering its IP. And there was a list of users, where you could also select the user from whom we want to log in to the device.`,
            technologies: ['Node.js'],
            repository: 'https://github.com/lehaisanya/telnet-my',
        },
        {
            name: 'Articles Here',
            description: `Online article editor. Test project for portfolio. In it I demonstrate my knowledge of React/Redux technologies. A full-fledged project at MERN.`,
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
