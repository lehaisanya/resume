import React from 'react'
import { Avatar, Typography } from 'antd'
import {
    CalendarOutlined, EnvironmentOutlined, HomeOutlined,
    InstagramOutlined, MailOutlined, PhoneOutlined,
    UserOutlined
} from '@ant-design/icons'

import InfoLine from 'components/InfoLine'

import avatar from 'assets/avatar.jpg'
import styles from './styles.module.css'
import { useDict } from 'lang'

const { Title } = Typography

const icons = {
    name: <UserOutlined className={styles.infoLineIcon} />,
    birthday: <CalendarOutlined className={styles.infoLineIcon}/>,
    place: <EnvironmentOutlined className={styles.infoLineIcon}/>,
    address: <HomeOutlined className={styles.infoLineIcon}/>,
    telephone: <PhoneOutlined className={styles.infoLineIcon}/>,
    telegram: <InstagramOutlined className={styles.infoLineIcon}/>,
    email: <MailOutlined className={styles.infoLineIcon}/>
}

function AppSider() {
    const { personal, words } = useDict()
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
            <InfoLine icon={icons.address} title={words.adress}>
                {personal.adress}
            </InfoLine>
            <InfoLine icon={icons.telephone} title={words.telephone}>
                {personal.telephone}
            </InfoLine>
            <InfoLine icon={icons.telegram} title={words.telegram}>
                {personal.telegram}
            </InfoLine>
            <InfoLine icon={icons.email} title={words.email}>
                {personal.email}
            </InfoLine>
            
            <Title level={5} className={styles.infoSectionTitle}>{words.languages}</Title>
        </div>
    )
}

export default AppSider
