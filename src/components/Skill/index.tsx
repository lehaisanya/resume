import React, { FC } from 'react'
import { Progress, Typography } from 'antd'
import { toDesk, toPercent } from 'utils'
import { SkillLevel } from 'types'

const { Text } = Typography

interface SkillProps {
    level: SkillLevel
    children: string
}

const SkillComponent: FC<SkillProps> = ({ level, children }) => {
    return (
        <div>
            <div style={{ textAlign: 'center' }}><Text strong>{children}</Text> - {toDesk(level)}</div>
            <Progress percent={toPercent(level)} showInfo={false} />
        </div>
    )
}

export default SkillComponent