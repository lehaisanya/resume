import { useEffect } from 'react'

export function usePageTitle(newTitle: string): void {
    useEffect(() => {
        document.title = newTitle
    }, [newTitle])
}
