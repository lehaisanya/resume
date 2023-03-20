import { LinkData } from '.'

export function createLinks(links: (LinkData | null)[]): LinkData[] {
    return links.filter((link) => !!link) as LinkData[]
}
