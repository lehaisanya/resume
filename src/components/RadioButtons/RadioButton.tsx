import React, { FC } from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'
import { useRadioButtonsContext } from './context'

interface RadioButtonProps extends Omit<ButtonProps, 'onClick'> {
    value: string
}

export const RadioButton: FC<RadioButtonProps> = ({
    children,
    value,
    ...props
}) => {
    const {
        colorScheme,
        size,
        variant,
        value: radioValue,
        onChange,
    } = useRadioButtonsContext()

    const isChecked = radioValue === value

    return (
        <Button
            colorScheme={colorScheme}
            size={size}
            variant={variant}
            _notLast={{
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px',
                borderRight: '0px',
            }}
            _notFirst={{
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '0px',
            }}
            isActive={isChecked}
            onClick={() => onChange(value)}
            {...props}
        >
            {children}
        </Button>
    )
}
