import React, { FC, ReactElement } from 'react'
import { Space, Typography } from 'antd'

import styles from './styles.module.css'

const { Text } = Typography

interface InfoLineProps {
    icon: ReactElement
    title: string,
    children: string
}

const InfoLine: FC<InfoLineProps> = ({ icon, title, children }) => {
    return (
        <div>
            <Space align="center" className={styles.infoLine} >
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
