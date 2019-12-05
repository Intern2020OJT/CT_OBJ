import React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { Menu, Dropdown, Icon, Row, Col } from 'antd';
import { useIntl } from 'react-intl';

import storage from '../../../utils/storage';

const history = createHistory({ forceRefresh: true });

const CNav = () => {
  const { formatMessage } = useIntl();
  const handleLogout = () => {
    storage.clearLocalStorage();
    history.push(`${process.env.PUBLIC_URL}`);
  };

  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item>{formatMessage({ id: 'logout.button.name' })}</Menu.Item>
    </Menu>
  );

  const user = storage.getUser() || { name: '' };
  const name = `${user.name}`;

  return (
    <Row className="nav">
      <Col span={8}>
        <h2>Issues-Analytics</h2>
      </Col>
      <Col span={8} offset={8} className="name">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link">
            <i className="icon-user" /> {name} <Icon type="down" />
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};

CNav.defaultProps = {};

CNav.propTypes = {};

export default CNav;
