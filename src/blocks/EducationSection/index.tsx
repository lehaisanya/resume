import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import { ReadOutlined } from '@ant-design/icons'
import { Timeline } from 'antd'
import Education from 'components/Education'
import { useDict } from 'lang'

function EducationSection() {
    const { educations, words } = useDict()

    return (
        <AppSection>
            <SectionTitle icon={<ReadOutlined />}>{words.education}</SectionTitle>

            <Timeline mode="left">
                {educations.map((educ, i) => (<Timeline.Item key={i}>
                    <Education data={educ} key={i} />
                </Timeline.Item>))}
            </Timeline>
        </AppSection>
    )
}

export default EducationSection
