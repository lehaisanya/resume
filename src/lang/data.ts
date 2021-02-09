import { SkillData, SkillLevel } from 'types'

const personal = {
    github: 'lehaisanya',
    telephone: '+380675976212',
    telegram: 'lehaisanya',
    email: 'lehaisanya@gmail.com',
}

const skills: SkillData[] = [
    {
        name: 'JavaScript (ES6)',
        level: SkillLevel.Professional
    },
    {
        name: 'Node.js (Express)',
        level: SkillLevel.Professional
    },
    {
        name: 'React',
        level: SkillLevel.Professional
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
        name: 'Git',
        level: SkillLevel.Advanced
    },
    {
        name: 'REST API',
        level: SkillLevel.Advanced
    },
    {
        name: 'HTML5/CSS3',
        level: SkillLevel.Professional
    },
    {
        name: 'SASS',
        level: SkillLevel.Advanced
    },
    {
        name: 'MongoDB',
        level: SkillLevel.Advanced
    },
    {
        name: 'Webpack',
        level: SkillLevel.Confident
    },
    {
        name: 'Lua',
        level: SkillLevel.Advanced
    }
]

const data = {
    personal,
    skills
}

export default data
