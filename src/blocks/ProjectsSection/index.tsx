import React from 'react'
import AppSection from 'components/AppSection'
import SectionTitle from 'components/SectionTitle'
import { ReadOutlined } from '@ant-design/icons'
import { Card, Col, Row, Typography, Grid } from 'antd'
import { useDict } from 'lang'

const { Text } = Typography

function ProjectsSection() {
    const { projects, words } = useDict()
    const { sm } = Grid.useBreakpoint()
    
    const size = sm ? 'default' : 'small'

    return (
        <AppSection>
            <SectionTitle icon={<ReadOutlined />}>{words.projects}</SectionTitle>
            
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
