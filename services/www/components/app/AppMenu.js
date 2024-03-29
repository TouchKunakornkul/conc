import React from 'react'
import { css } from '@emotion/core'
import { Icon, Menu } from 'www/components/antd'

const AppMenu = () => (
  <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    css={css`
      height: 100%;
      border-right: none;
    `}
  >
    <Menu.SubMenu
      key="sub1"
      title={
        <span>
          <Icon type="user" />
          subnav 1
        </span>
      }
    >
      <Menu.Item key="1">option1</Menu.Item>
      <Menu.Item key="2">option2</Menu.Item>
      <Menu.Item key="3">option3</Menu.Item>
      <Menu.Item key="4">option4</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu
      key="sub2"
      title={
        <span>
          <Icon type="laptop" />
          subnav 2
        </span>
      }
    >
      <Menu.Item key="5">option5</Menu.Item>
      <Menu.Item key="6">option6</Menu.Item>
      <Menu.Item key="7">option7</Menu.Item>
      <Menu.Item key="8">option8</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)

export default AppMenu
