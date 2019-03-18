import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { Layout } from 'www/components/antd'
import AppHeader from './AppHeader'
import AppIcon from './AppIcon'
import AppMenu from './AppMenu'

const AppLayout = (props) => (
  <Layout
    css={css`
      min-height: 100vh;
      background: transparent;
    `}
  >
    <AppHeader>
      <AppIcon
        css={css`
          transform: translateY(12px);
          margin-right: 36px;
        `}
      />
      Conc
    </AppHeader>
    <Layout.Content
      css={css`
        padding: 28px 6px;
      `}
    >
      <Layout
        hasSider
        css={css`
          background: transparent;
        `}
      >
        <Layout.Sider
          width={180}
          css={css`
            background: transparent;
            min-height: calc(100vh - 80px - 28px - 28px);
          `}
        >
          <AppMenu />
        </Layout.Sider>
        <Layout.Content
          css={css`
            padding: 0 28px;
          `}
        >
          {props.children}
        </Layout.Content>
      </Layout>
    </Layout.Content>
  </Layout>
)

AppLayout.propTypes = {
  children: PropTypes.any,
}

export default AppLayout
