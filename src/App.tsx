import { Layout } from 'antd'
import AppRouter from './Router'
import SiderComponent from './components/sider'
import HeaderComponent from './components/header'
import ContentComponent from './components/content'
import { useState } from 'react'
import './App.css';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isAuthenicated, setisAuthenicated] = useState(true);

  return (
    <>
      {isAuthenicated ?
        <Layout className="layout">
          <Layout>
            <SiderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout>
              <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
              <ContentComponent >
                <AppRouter />
              </ContentComponent>
            </Layout>
          </Layout>
        </Layout>
        :
        <AppRouter />
      }
    </>
  )
}

export default App
