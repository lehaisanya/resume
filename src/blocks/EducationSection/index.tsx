import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import Education from 'components/Education'
import { useDict } from 'lang'
import Timeline from 'antd/lib/timeline'

function EducationSection() {
    const { educations, words } = useDict()

    return (
        <AppSection>
            <SectionTitle icon={<i className="fi fi-rr-graduation-cap" />}>{words.education}</SectionTitle>

            <Timeline mode="left">
                {educations.map((educ, i) => (<Timeline.Item key={i}>
                    <Education data={educ} key={i} />
                </Timeline.Item>))}
            </Timeline>
        </AppSection>
    )
}

export default EducationSection
