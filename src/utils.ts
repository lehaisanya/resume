import { SkillLevel } from 'types'

export function toPercent(level: SkillLevel): number {
    switch (level) {
        case SkillLevel.Basic: return 20
        case SkillLevel.Confident: return 50
        case SkillLevel.Advanced: return 80
        case SkillLevel.Professional: return 100
    }
}
