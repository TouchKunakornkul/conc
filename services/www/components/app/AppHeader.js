import React from 'react'
import { css } from '@emotion/core'
import { Layout } from 'www/components/antd'

const AppHeader = (props) => (
  <Layout.Header
    css={css`
      position: static;
      top: 0;
      background: transparent;
      height: 80px;
      line-height: 80px;
      border-bottom: 1px solid #d8e2ec;
      padding: 0px 28px;
    `}
    {...props}
  />
)

export default AppHeader
