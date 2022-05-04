import React, { FC, useState } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { RadioButtonsContextProvider, RadioButtonStylesProps } from './context'
export { RadioButton } from './RadioButton'

interface RadioButtonsProps
    extends Omit<BoxProps, 'onChange'>,
        RadioButtonStylesProps {
    defaultValue?: string
    value?: string
    onChange?: (newValue: string) => void
}

export const RadioButtons: FC<RadioButtonsProps> = ({
    children,
    colorScheme,
    size,
    variant,
    defaultValue,
    value,
    onChange,
    ...props
}) => {
    const [radioValue, setRadioValue] = useState(defaultValue || value || '')

    const onRadioValueChange = (newValue: string) => {
        setRadioValue(newValue)
        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <RadioButtonsContextProvider
            value={{
                colorScheme,
                size,
                variant,
                value: radioValue,
                onChange: onRadioValueChange,
            }}
        >
            <Box {...props}>{children}</Box>
        </RadioButtonsContextProvider>
    )
}
