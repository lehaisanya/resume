import React, { FC, ReactNode } from 'react'
import { Space, Typography } from 'antd'

const { Title } = Typography

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