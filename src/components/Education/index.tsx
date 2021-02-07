import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import Text from 'antd/lib/typography/Text'
import React, { FC } from 'react'
import { EducationData } from 'types'

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
