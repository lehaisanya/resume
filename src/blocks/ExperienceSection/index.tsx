import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import { ReadOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import { useDict } from 'lang'

const { Panel } = Collapse

function ExperienceSection() {
    const { experience, words } = useDict()
    return (
        <AppSection>
            <SectionTitle icon={<ReadOutlined />}>{words.experience}</SectionTitle>

            <Collapse defaultActiveKey={[0, 1]}>
                {experience.map((exp, i) => (<Panel key={i} header={`${exp.title} - ${exp.period}`}>
                    {exp.description}
                </Panel>))}
            </Collapse>  
        </AppSection>
    )
}

export default ExperienceSection
