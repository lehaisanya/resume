import React from 'react'
import Avatar from 'antd/lib/avatar'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import InfoLine from 'components/InfoLine'
import { useDict } from 'lang'
import styles from './styles.module.css'
import avatar from 'assets/avatar.png'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import GithubOutlined from '@ant-design/icons/GithubOutlined'

const icons = {
    name: <i className={"fi fi-rr-user " + styles.infoLineIcon} />,
    birthday: <i className={"fi fi-rr-calendar " + styles.infoLineIcon} />,
    place: <i className={"fi fi-rr-marker " + styles.infoLineIcon} />,
    telephone: <i className={"fi fi-rr-smartphone " + styles.infoLineIcon} />,
    github: <GithubOutlined className={styles.infoLineIcon} />,
    telegram: <i className={"fi fi-rr-paper-plane " + styles.infoLineIcon} />,
    email: <i className={"fi fi-rr-envelope " + styles.infoLineIcon} />
}

function AppSider() {
    const { personal, words, languages } = useDict()
    return (
        <div className={styles.sider}>
            <Avatar size={150} src={avatar} className={styles.avatar} alt="Аватарка" />

            <Title level={5} className={styles.infoSectionTitle}>{words.personalData}</Title>

            <InfoLine icon={icons.name} title={words.name}>
                {personal.name}
            </InfoLine>
            <InfoLine icon={icons.birthday} title={words.birthday}>
                {personal.birthday}
            </InfoLine>
            <InfoLine icon={icons.place} title={words.place}>
                {personal.place}
            </InfoLine>
            <InfoLine icon={icons.telephone} title={words.telephone}>
                <a href={"tel:" + personal.telephone}>{personal.telephone}</a>
            </InfoLine>
            <InfoLine icon={icons.github} title="Github">
                <a href={"https://github.com/" + personal.github} target="_blank" rel="noreferrer">{personal.github}</a>
            </InfoLine>
            <InfoLine icon={icons.telegram} title={words.telegram}>
                <a href={"https://t.me/" + personal.telegram} target="_blank" rel="noreferrer">{personal.telegram}</a>
            </InfoLine>
            <InfoLine icon={icons.email} title={words.email}>
                <a href={"mailto:" + personal.email}>{personal.email}</a>
            </InfoLine>
            
            <Title level={5} className={styles.infoSectionTitle}>{words.languages}</Title>

            {languages.map((lang, i) => (<div key={i}>
                <Row>
                    <Col span={12}><Text strong>{lang.name}</Text>:</Col>
                    <Col span={12}>{lang.level}</Col>
                </Row>
            </div>))}
        </div>
    )
}

export default AppSider
