import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import { useDict } from 'lang'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Card from 'antd/lib/card'
import Text from 'antd/lib/typography/Text'

function ProjectsSection() {
    const { projects, words } = useDict()
    const { sm } = useBreakpoint()
    
    const size = sm ? 'default' : 'small'

    return (
        <AppSection>
            <SectionTitle icon={<i className="fi fi-rr-physics" />}>{words.projects}</SectionTitle>
            
            <Row gutter={[5, 5]}>
                {projects.map((project, i) => (<Col xs={24} sm={24} md={24} lg={12} key={i}>
                    <Card size={size} hoverable title={project.name} style={{ height: '100%' }} extra={project.link ? <a href={project.link}>{words.more}</a> : null}>
                        {project.description}
                        <div>
                            <Text strong>{words.uses}:</Text>
                            <ul>
                                {project.technologies.map((tech, i) => (
                                    <li key={i} style={{ listStyle: 'circle', marginLeft: 20 }}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                </Col>))}
            </Row>
        </AppSection>
    )
}

export default ProjectsSection
