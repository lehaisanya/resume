import React from 'react'
import AppSection from 'components/AppSection'
import { Typography } from 'antd'
import { useDict } from 'lang'

const { Title } = Typography

function DescriptionSection() {
    const { description } = useDict()

    return (
        <AppSection>
            <Title level={2}>{description.title}</Title>
            <div style={{ fontSize: 20 }}>
                {description.salary}
            </div>
            <div>
                {description.text}
            </div>
        </AppSection>
    )
}

export default DescriptionSection
