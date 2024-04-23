import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const SiderComponent: any = ({collapsed,selected}:any) => {
  const navigate = useNavigate();

  const [selectedIndex,setSelectedIndex] = useState<any>(null);

  const onMenuItemClick = (data:any) =>{
    console.log('===>',data)
    setSelectedIndex([data.key])
    if(data.key == "/logout"){
      logout()
    }else{
      navigate(data.key);
    }
  }

  const logout = () => {
    console.log("logout")
    navigate("/login")
  }

  type MenuItem = Required<MenuProps>['items'][number];


  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items = [
    getItem('Contacts', '/', <UserOutlined />, [
      getItem('All Contacts ', '/contacts'),
      getItem('Add Contacts', '/contacts/add'),
    ]),
    // getItem('Profile', 'profile', <ProfileOutlined />),
    // getItem('Log Out', 'logout', <LogoutOutlined />),
  ];

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height:'100vh'}}>
        <div className="demo-logo-vertical" />
        <Menu
          style={{paddingTop:'30px', height:"100vh"}}
          theme="dark"
          mode="inline"
          onClick={(val:object)=>onMenuItemClick(val)}
          defaultSelectedKeys={["/"]}
          selectedKeys={selected}
          items={items}
        />
      </Sider>
    </>
  );
};

export default SiderComponent;