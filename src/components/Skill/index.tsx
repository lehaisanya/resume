import React, { FC } from 'react'
import { toPercent } from 'utils'
import { SkillLevel } from 'types'
import Progress from 'antd/lib/progress'
import Text from 'antd/lib/typography/Text'

interface SkillProps {
    level: SkillLevel
    children: string
}

const SkillComponent: FC<SkillProps> = ({ level, children }) => {
    return (
        
            <div style={{ textAlign: 'center' }}>
                <div><Text strong>{children}</Text></div>
                <Progress percent={toPercent(level)} showInfo={false} steps={5} trailColor="#f0f2f5" />
            </div>
        
    )
}

export default SkillComponent