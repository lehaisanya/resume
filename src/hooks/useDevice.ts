import { useBreakpointValue } from '@chakra-ui/react'

type Devices = 'mobile' | 'laptop' | 'desctop'

export function useDevice() {
    const device = useBreakpointValue<Devices>({
        base: 'mobile',
        sm: 'laptop',
        md: 'desctop',
    })

    return {
        isMobile: device === 'mobile',
        isLaptop: device === 'laptop',
        isDesctop: device === 'desctop',
    }
}
