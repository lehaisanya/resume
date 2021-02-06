import React, { FC, useContext } from 'react'
import { Typography, Radio, Row, Col, RadioChangeEvent, Space, Button, Grid } from 'antd'

import styles from './styles.module.css'
import { LangContext, useDict } from 'lang'
import { UnorderedListOutlined } from '@ant-design/icons'

const { Title } = Typography

interface AppHeaderProps {
    toggleCollapsed: () => void
}

const AppHeader: FC<AppHeaderProps> = ({ toggleCollapsed }) => {
    const { changeLang } = useContext(LangContext)
    const { personal } = useDict()
    const { xs, md } = Grid.useBreakpoint()

    const size = xs ? 'small' : 'middle'

    const changeLangHandler = (e: RadioChangeEvent) => {
        changeLang(e.target.value)
    }

    const menuButtonClickHandler = () => {
        toggleCollapsed()
    }

    return (
        <Row justify="space-between" align="middle">
            <Col>
                <Space align="center">
                    { !md ? <Button type="link" icon={<UnorderedListOutlined size={30} onClick={menuButtonClickHandler} />}></Button> : null}
                    <Title level={3} className={styles.nameTitle}>
                        {personal.name}
                    </Title>
                </Space>
            </Col>
            <Col>
                <Radio.Group defaultValue="ua" onChange={changeLangHandler} size={size}>
                    <Radio.Button value="ua">UA</Radio.Button>
                    <Radio.Button value="ru">RU</Radio.Button>
                    <Radio.Button value="en">EN</Radio.Button>
                </Radio.Group>
            </Col>
        </Row>
    )
}

export default AppHeader
