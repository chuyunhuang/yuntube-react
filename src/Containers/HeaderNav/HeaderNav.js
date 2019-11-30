import React from 'react';
import { Menu, Image, Form, Input, Icon } from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.jpg';
import userImg from '../../assets/images/user.jpg';
import { Link } from 'react-router-dom';

export class HeaderNav extends React.Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed>
        <Menu.Item header className="logo">
          <Link to="/">
            <Image src={logo} size="tiny" />
          </Link>
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="search-input">
            <Form>
              <Form.Field>
                <Input
                  placeholder="search"
                  size="small"
                  action="Go" />
              </Form.Field>
            </Form>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item>
            <Icon className="header-icon" name="video camera" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="grid layout" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="chat" size="large" />
          </Menu.Item>
          <Menu.Item>
            <Icon className="header-icon" name="alarm" size="large" />
          </Menu.Item>
          <Menu.Item name="avatar">
            <Image src={userImg} avatar />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}

export default HeaderNav