/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Menu as AntdMenu } from 'antd'

import 'antd/lib/menu/style/index.less'
import 'antd/lib/tooltip/style/index.less'

const StyledMenu = styled(AntdMenu)``
const StyledDivider = styled(AntdMenu.Divider)``
const StyledItem = styled(AntdMenu.Item)``
const StyledSubMenu = styled(AntdMenu.SubMenu)``
const StyledItemGroup = styled(AntdMenu.ItemGroup)``

const Menu = React.forwardRef((props, ref) => <StyledMenu ref={ref} {...props} />)
Menu.Divider = React.forwardRef((props, ref) => <StyledDivider ref={ref} {...props} />)
Menu.Item = React.forwardRef((props, ref) => <StyledItem ref={ref} {...props} />)
Menu.SubMenu = React.forwardRef((props, ref) => <StyledSubMenu ref={ref} {...props} />)
Menu.ItemGroup = React.forwardRef((props, ref) => <StyledItemGroup ref={ref} {...props} />)

export default Menu
