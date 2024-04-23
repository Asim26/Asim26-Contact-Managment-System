import { Layout, theme } from 'antd';

const { Content } = Layout;
import './styles.css';
import SiderComponent from '../sider';

const ContentComponent: any = ({children }: any) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Content
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
        className="contentStyle"
      >
        {children}
      </Content>
    </>
  );
};

export default ContentComponent;