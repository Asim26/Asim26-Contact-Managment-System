import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, theme } from 'antd';

const { Header } = Layout;
import "./styles.css";

const HeaderComponent: any = ({ collapsed, setCollapsed }: any) => {
    const {token: { colorBgContainer }} = theme.useToken();

    const handleMenuClick = (e:any) => {
        switch (e.key) {
            case 'profile':
                console.log('Profile clicked');
                break;
            case 'settings':
                console.log('Settings clicked');
                break;
            case 'logout':
                console.log('Logout clicked');
                break;
            default:
                break;
        }
    };

    const userMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="profile">
                Profile
            </Menu.Item>
            <Menu.Item key="settings">
                Settings
            </Menu.Item>
            <Menu.Item key="logout">
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Header style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: '3%',
            }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <Dropdown overlay={userMenu}>
                    <Avatar
                        icon={<UserOutlined />} 
                        style={{ cursor: 'pointer' }}
                    />
                </Dropdown>
            </Header>
        </>
    );
};

export default HeaderComponent;