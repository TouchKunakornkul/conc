import React from 'react'
import App, { Container } from 'next/app'
import AppLayout from 'www/components/app/AppLayout'

import 'antd/lib/style/index.less'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx)
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Container>
    )
  }
}

export default MyApp
