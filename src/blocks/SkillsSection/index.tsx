import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import Skill from 'components/Skill'
import { useDict } from 'lang'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

function SkillsSection() {
    const { skills, words } = useDict()

    return (
        <AppSection>
            <SectionTitle icon={<i className="fi fi-rr-diploma" />}>{words.skills}</SectionTitle>
            <Row gutter={[10, 25]}>
                {skills.map((skill, i) => (<Col xs={12} sm={8} md={6} lg={6} xl={4} xxl={2} key={i}>
                    <Skill key={i} level={skill.level}>
                        {skill.name}
                    </Skill>
                </Col>))}
            </Row>
        </AppSection>
    )
}

export default SkillsSection
