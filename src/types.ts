export interface WordsData {
    name: string
    birthday: string
    place: string
    adress: string
    telephone: string
    telegram: string
    email: string
    personalData: string
    education: string
    experience: string
    skills: string
    projects: string,
    uses: string,
    languages: string,
    more: string
}

export interface PersonalData {
    name: string
    birthday: string
    place: string
    adress: string
    telephone: string
    telegram: string
    email: string
}

export interface LanguagesData {
    name: string
    level: string
}

export interface DescriptionData {
    title: string
    salary: string
    text: string
}

export interface EducationData {
    start: string
    end: string
    educ: string
    place: string
    extra?: string
}

export interface ExperienceData {
    title: string
    period: string,
    description: string
}

export enum SkillLevel {
    Basic,
    Confident,
    Advanced,
    Professional
}

export interface SkillData {
    name: string
    level: SkillLevel
}

export interface ProjectData {
    name: string
    description: string
    technologies: string[]
    link?: string
    inProgress?: boolean
}

export type LangType = 'ua' | 'ru' | 'en'

export interface Lang {
    words: WordsData,
    personal: PersonalData
    languages: LanguagesData[]
    description: DescriptionData
    educations: EducationData[]
    experience: ExperienceData[]
    skills: SkillData[]
    projects: ProjectData[]
}
