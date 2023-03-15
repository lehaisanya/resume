export interface PersonalData {
    name: string
    birthday: string
    place: string
    github: string
    telephone: string
    telegram: string
    email: string
}

export interface LanguageData {
    name: string
    level: string
}

export interface SummaryData {
    title: string
    salary: string
    text: string
}

export interface EducationData {
    start: string
    end?: string
    name: string
    place: string
    extra?: string
}

export interface ExperienceData {
    title: string
    period: string
    description: string
}

export const enum SkillLevel {
    Basic = 1,
    Confident = 2,
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
    repository?: string
    viewLink?: string
    inProgress?: boolean
}

export interface TestTaskData {
    name: string
    description: string
    technologies: string[]
    repository: string
    viewLink?: string
}
