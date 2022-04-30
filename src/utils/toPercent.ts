import { SkillLevel } from 'types/core'

const mapSkillLevel: Record<SkillLevel, number> = {
    [SkillLevel.Basic]: 20,
    [SkillLevel.Confident]: 50,
    [SkillLevel.Advanced]: 80,
    [SkillLevel.Professional]: 100,
}

export function toPercent(level: SkillLevel): number {
    return mapSkillLevel[level]
}
