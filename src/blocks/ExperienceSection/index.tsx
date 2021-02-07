import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import { useDict } from 'lang'
import Collapse from 'antd/lib/collapse'

const { Panel } = Collapse

function ExperienceSection() {
    const { experience, words } = useDict()
    return (
        <AppSection>
            <SectionTitle icon={<i className="fi fi-rr-briefcase" />}>{words.experience}</SectionTitle>

            <Collapse defaultActiveKey={[0, 1]}>
                {experience.map((exp, i) => (<Panel key={i} header={`${exp.title} - ${exp.period}`}>
                    {exp.description}
                </Panel>))}
            </Collapse>  
        </AppSection>
    )
}

export default ExperienceSection
