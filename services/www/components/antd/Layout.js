/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Layout as AntdLayout } from 'antd'

import 'antd/lib/layout/style/index.less'

const StyledLayout = styled(AntdLayout)``
const StyledHeader = styled(AntdLayout.Header)``
const StyledFooter = styled(AntdLayout.Footer)``
const StyledContent = styled(AntdLayout.Content)``
const StyledSider = styled(AntdLayout.Sider)``

const Layout = React.forwardRef((props, ref) => <StyledLayout ref={ref} {...props} />)
Layout.Header = React.forwardRef((props, ref) => <StyledHeader ref={ref} {...props} />)
Layout.Footer = React.forwardRef((props, ref) => <StyledFooter ref={ref} {...props} />)
Layout.Content = React.forwardRef((props, ref) => <StyledContent ref={ref} {...props} />)
Layout.Sider = React.forwardRef((props, ref) => <StyledSider ref={ref} {...props} />)

export default Layout
