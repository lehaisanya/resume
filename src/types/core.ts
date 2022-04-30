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
    projects: string
    uses: string
    languages: string
    more: string
}

export interface CommonPersonalData {
    github: string
    telephone: string
    telegram: string
    email: string
}

export interface ChangedPersonalData {
    name: string
    birthday: string
    place: string
}

export interface PersonalData extends CommonPersonalData, ChangedPersonalData {}

export interface LanguageData {
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
    name: string
    place: string
    extra?: string
}

export interface ExperienceData {
    title: string
    period: string
    description: string
}

export enum SkillLevel {
    Basic,
    Confident,
    Advanced,
    Professional,
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

export interface ChangedResumeData {
    words: WordsData
    personal: ChangedPersonalData
    languages: LanguageData[]
    description: DescriptionData
    educations: EducationData[]
    experience: ExperienceData[]
    projects: ProjectData[]
}

export interface ResumeData {
    words: WordsData
    personal: PersonalData
    languages: LanguageData[]
    description: DescriptionData
    educations: EducationData[]
    skills: SkillData[]
    experience: ExperienceData[]
    projects: ProjectData[]
}
