import React, { FC, useContext } from 'react'
import styles from './styles.module.css'
import { LangContext, useDict } from 'lang'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { RadioChangeEvent } from 'antd/lib/radio/interface'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Space from 'antd/lib/space'
import Button from 'antd/lib/button'
import Title from 'antd/lib/typography/Title'
import Radio from 'antd/lib/radio'

interface AppHeaderProps {
    toggleCollapsed: () => void
}

const AppHeader: FC<AppHeaderProps> = ({ toggleCollapsed }) => {
    const { changeLang } = useContext(LangContext)
    const { personal } = useDict()
    const { xs, md } = useBreakpoint()

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
                    { !md ? <Button type="link" icon={<i className="fi fi-rr-list" />} onClick={menuButtonClickHandler} /> : null}
                    <Title level={3} className={styles.nameTitle}>
                        {personal.name}
                    </Title>
                </Space>
            </Col>
            <Col>
                <Radio.Group defaultValue="ua" onChange={changeLangHandler} size={size} buttonStyle="solid">
                    <Radio.Button value="ua">UA</Radio.Button>
                    <Radio.Button value="ru">RU</Radio.Button>
                    <Radio.Button value="en">EN</Radio.Button>
                </Radio.Group>
            </Col>
        </Row>
    )
}

export default AppHeader
