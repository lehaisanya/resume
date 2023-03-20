import {
    EducationData,
    ExperienceData,
    LanguageData,
    PersonalData,
    ProjectData,
    SkillData,
    SummaryData,
    TestTaskData,
} from './core'

export type Locale = 'ua' | 'ru' | 'en'

export interface WordsData {
    resume: string
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
    testTask: string
    uses: string
    languages: string
    more: string
    view: string
    inProgress: string
}

export interface LocaleData {
    words: WordsData
    personal: PersonalData
    languages: LanguageData[]
    summary: SummaryData
    skills: SkillData[]
    experience: ExperienceData[]
    educations: EducationData[]
    projects: ProjectData[]
    testTasks: TestTaskData[]
    // TODO: add achivments field
}
