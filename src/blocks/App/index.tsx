import React, { useState, useEffect, Fragment } from 'react'
import { Layout, Grid } from 'antd'

import { LangContext } from 'lang'

import AppHeader from 'blocks/AppHeader'
import AppSider from 'blocks/AppSider'
import AppContent from 'blocks/AppContent'

import styles from './styles.module.css'
import { LangType } from 'types'

const { Header, Sider, Content } = Layout

function App() {
    const [lang, setLang] = useState<LangType>('ua')
    const { md } = Grid.useBreakpoint()
    const isMiddle = !!md
    const [collapsed, setCollapsed] = useState<boolean>(!md)

    useEffect(() => {
        setCollapsed(!md)
    }, [md])

    const changeLang: (lang: LangType) => void = (lang) => {
        setLang(lang)
    }

    const toggleCollapsed: () => void = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <LangContext.Provider value={{ lang, changeLang }}>
            <Layout>
                <Header className={styles.header}>
                    <AppHeader toggleCollapsed={toggleCollapsed} />
                </Header>
                <Layout className={styles.contentLayout}>
                    {isMiddle ? <Fragment>
                        <Sider theme='light' width={220} className={styles.sider}>
                            <AppSider />
                        </Sider>
                        
                        <Content className={styles.content}>
                            <AppContent />
                        </Content>
                    </Fragment> : collapsed ? <Content className={styles.content}>
                            <AppContent />
                        </Content> : <AppSider /> }
                </Layout>
            </Layout>
        </LangContext.Provider>
    );
}

export default App
