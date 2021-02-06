import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import { ReadOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import Skill from 'components/Skill'
import { useDict } from 'lang'

function SkillsSection() {
    const { skills, words } = useDict()

    return (
        <AppSection>
            <SectionTitle icon={<ReadOutlined />}>{words.skills}</SectionTitle>
            <Row gutter={[10, 25]}>
                {skills.map((skill, i) => (<Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={2} key={i}>
                    <Skill key={i} level={skill.level}>
                        {skill.name}
                    </Skill>
                </Col>))}
            </Row>
        </AppSection>
    )
}

export default SkillsSection
