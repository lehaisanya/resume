import React from 'react'
import AppSection from 'components/AppSection'
import { useDict } from 'lang'
import Title from 'antd/lib/typography/Title'


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
