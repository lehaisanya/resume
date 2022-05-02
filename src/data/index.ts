import { ChangedResumeData, ResumeData } from 'types/core'
import { LangType } from 'types'
import { commonPersonalData, skills } from './common'
import { en } from './lang/en'
import { ru } from './lang/ru'
import { ua } from './lang/ua'

const rawLangs: ChangedResumeData[] = [en, ru, ua]

const data: ResumeData[] = rawLangs.map(({ personal, ...changedData }) => ({
    ...changedData,
    personal: {
        ...personal,
        ...commonPersonalData,
    },
    skills,
}))

export const langs: Record<LangType, ResumeData> = {
    en: data[0],
    ru: data[1],
    ua: data[2],
}
