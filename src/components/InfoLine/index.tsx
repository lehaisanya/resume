import Space from 'antd/lib/space'
import Text from 'antd/lib/typography/Text'
import React, { FC, ReactNode } from 'react'

interface InfoLineProps {
    icon: ReactNode
    title: string,
    children: ReactNode
}

const InfoLine: FC<InfoLineProps> = ({ icon, title, children }) => {
    return (
        <div>
            <Space align="center">
                {icon}
                <div>
                    <div><Text strong>{title}</Text></div>
                    <div>{children}</div>
                </div>
            </Space>
        </div>
    )
}

export default InfoLine
