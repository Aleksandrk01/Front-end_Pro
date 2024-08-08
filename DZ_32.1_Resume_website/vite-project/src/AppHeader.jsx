import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => (
  <Header>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/todo">Todo</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/swapi">SWAPI</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default AppHeader;
