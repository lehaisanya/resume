import React, { FC } from 'react'

interface AppSectionProps {
    children: React.ReactNode
}

const AppSection: FC<AppSectionProps> = ({ children }) => {
    return (
        <div style={{ marginLeft: 5, marginBottom: 10 }}>
            {children}
        </div>
    )
}

export default AppSection
