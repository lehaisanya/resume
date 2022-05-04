import { createContext, useContext } from 'react'
import { ButtonProps } from '@chakra-ui/react'

export type RadioButtonStylesProps = Pick<
    ButtonProps,
    'colorScheme' | 'size' | 'variant'
>

export interface RadioButtonsContextProps extends RadioButtonStylesProps {
    value: string
    onChange: (newValue: string) => void
}

export const RadioButtonsContext = createContext<RadioButtonsContextProps>(
    undefined!
)

export const RadioButtonsContextProvider = RadioButtonsContext.Provider

export function useRadioButtonsContext(): RadioButtonsContextProps {
    return useContext(RadioButtonsContext)
}
