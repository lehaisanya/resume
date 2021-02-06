import React, { FC } from 'react'
import { Row, Col, Typography } from 'antd'

import { EducationData } from 'types'

const { Text } = Typography

interface EducationProps {
    data: EducationData
}

const Education: FC<EducationProps> = ({ data: { start, end, educ, place, extra }}) => {
    return (
        <Row>
            <Col flex="200px">{start} - {end}</Col>
            <Col flex="auto">
                <div>
                    <div>
                        <Text strong>{educ}</Text>
                    </div>
                    <div>
                        {place}
                    </div>
                    { extra ? <div>
                        {extra}
                    </div> : null }
                </div>
            </Col>
        </Row>
    )
}

export default Education
