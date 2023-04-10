import { Layout, Popconfirm, Menu } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import './index.scss'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useStore } from '../../store'

const { Header, Sider } = Layout

const GeekLayout = () => {
  const { pathname } = useLocation()
  const { userStore, loginStore } = useStore()

  // 获取用户信息 副作用
  // useStore.getUserInfo
  useEffect(() => {
    userStore.getUserInfo()
  }, [userStore])

  const navigate = useNavigate()
  const onLogout = () => {
    loginStore.loginOut()
    navigate('/login')
  }



  return (
    <Layout>
      <Header className='header'>
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div></Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            // 高亮原理：defaultSelectedKey === item key
            defaultSelectedKeys={[pathname]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item icon={<HomeOutlined />} key="/">
              <Link to="/">数据概览</Link>
            </Menu.Item>
            <Menu.Item icon={<DiffOutlined />} key="/article">
              <Link to="/article">内容管理</Link>
            </Menu.Item>
            <Menu.Item icon={<EditOutlined />} key="/publish">
              <Link to="/publish">发布文章</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet /></Layout>
      </Layout>

    </Layout>
  )
}

export default GeekLayout