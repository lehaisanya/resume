import Space from 'antd/lib/space'
import Title from 'antd/lib/typography/Title'
import React, { FC, ReactNode } from 'react'

interface SectionTitleProps {
    icon: ReactNode
    children: string
}

const SectionTitle: FC<SectionTitleProps> = ({ icon, children }) => {
    return (
        <Title level={3}>
            <Space>
                {icon}
                {children}
            </Space>
        </Title>
    )
}

export default SectionTitle