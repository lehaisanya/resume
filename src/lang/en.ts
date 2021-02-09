import { Lang } from 'types'

const lang: Lang = {
    words: {
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
        uses: 'Uses technologies',
        languages: 'Languages',
        more: "More"
    },
    personal: {
        name: 'Alexander Solyar',
        birthday: 'January 4, 1999',
        place: 'Kyiv region'
    },
    languages: [
        {
            name: 'Ukrainian',
            level: 'Native'
        },
        {
            name: 'Russian',
            level: 'С1'
        },
        {
            name: 'English',
            level: 'B1'
        }
    ],
    description: {
        title: 'React FrontEnd Developer',
        salary: 'Expected salary from $600',
        text: `I have been developing for 6 years. Independently studied various programming languages, such as Lua, Haskell, C++, Python. At the moment I settled on Javascript and Typescript. I know the peculiarities of languages thoroughly, because I once wrote my superstructure with typification for Lua. I just like it. I am quite confident in OOP, REST API and other architectural principles. I am looking for a place where it will be interesting and easy to work, with the opportunity to improve their skills in any direction. Able to learn quickly and constantly engage in self-education.`
    },
    educations: [
        {
            start: 'September 2006',
            end: 'May 2014',
            educ: 'Incomplete secondary education',
            place: 'Glevakhiv Secondary School №1 I-III degrees'
        },
        {
            start: 'September 2014',
            end: 'May 2018',
            educ: 'Junior Bachelor - Software Design',
            place: 'College NAU, Vasilkov, Ukraine'
        },
        {
            start: 'September 2018',
            end: 'NOW',
            educ: 'Bachelor - Software Engineering',
            place: 'State University of Telecommunications, Kyiv, Ukraine',
            extra: '5th year (last)'
        }
    ],
    experience: [
        {
            title: 'M.E.Doc - Technical support worker',
            period: '3 months',
            description: `To work, it was necessary to know the logic of the M.E.Doc program to be able to solve customer problems very quickly and immediately diagnose the possible cause of the problem with further explanation of its solution.`
        },
        {
            title: 'Crystall ISP - System Administrator',
            period: '2 years',
            description: `Wrote scripts on Node.js to speed up some work. Wrote my own console client for the telnet protocol, with syntax highlighting and other features. He also wrote configuration templates for devices (switch, olts, etc.) on the Pug template engine. He left behind a database of ready-made templates.`
        }
    ],
    projects: [
        {
            name: 'Tua',
            description: `An superstructure for Lua with typification, such as Typescript (actually Typescript, I was inspired and drew ideas from it). It was the topic of the thesis. Written for self-development. I thoroughly studied compilers and various typing systems, mechanisms of interaction in programming languages. I read many books on the subject. The first project in which I studied refactoring and optimization. At the moment the project is abandoned. Maybe I'll come back to him later.`,
            technologies: ['Node.js']
        },
        {
            name: 'TelnetMy',
            description: `Console client for telnet protocol. The work of a system administrator requires a lot of routine actions. So I decided to automate the most common action: authorization on the device. Whenever possible I tried to fill the project with new features. So there was a backlight of the text: different numbers, dates, serial numbers, etc. There is also a list of devices where you can immediately select the desired one without entering its IP. And there was a list of users, where you could also select the user from whom we want to log in to the device.`,
            technologies: ['Node.js'],
            link: 'https://github.com/lehaisanya/telnet-my'
        },
        {
            name: 'Resume',
            description: `The same project, for example.`,
            technologies: ['React', 'Typescript', 'Antd'],
            link: 'https://github.com/lehaisanya/resume'
        },
        {
            name: 'Articles Here',
            description: `Online article editor. Test project for portfolio. In it I demonstrate my knowledge of React/Redux technologies. A full-fledged project at MERN. Currently under development.`,
            technologies: ['React', 'Redux', 'MongoDB', 'Node.js', 'Typescript', 'Antd'],
            link: 'https://github.com/lehaisanya/articles-here',
            inProgress: true
        }
    ]
}


export default lang
