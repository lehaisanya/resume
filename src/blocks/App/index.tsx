import React, { useState, useEffect } from 'react'
import Layout from 'antd/lib/layout'
import Drawer from 'antd/lib/drawer'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import AppHeader from 'blocks/AppHeader'
import AppSider from 'blocks/AppSider'
import AppContent from 'blocks/AppContent'
import { LangContext } from 'lang'
import { LangType } from 'types'
import styles from './styles.module.css'
import Sider from 'antd/lib/layout/Sider'
import { Header, Content } from 'antd/lib/layout/layout'

function App() {
    const [lang, setLang] = useState<LangType>('ua')
    const { md } = useBreakpoint()
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
                    {isMiddle ? 
                        <Sider theme='light' width={220} className={styles.sider}>
                            
                                <AppSider />
                            
                        </Sider>
                    : 
                        <Drawer
                            style={{ padding: 0 }}
                            placement="left"
                            visible={!collapsed}
                            onClose={toggleCollapsed}
                        >
                            <AppSider />
                        </Drawer>
                    }

                    <Content className={styles.content}>
                        <AppContent />
                    </Content>
                </Layout>
            </Layout>
        </LangContext.Provider>
    );
}

export default App
