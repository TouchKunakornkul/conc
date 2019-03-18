import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import withApi from 'www/hocs/withApi'

async function getInitialProps({ api }) {
  try {
    return await api.get('/api/products')
  } catch (_) {
    return {}
  }
}

const HomePage = (props) => {
  const [status, setStatus] = useState(props.status)
  useEffect(() => {
    async function fetchStatus() {
      const data = await getInitialProps({ api: props.api })
      setStatus(data.status)
    }
    if (props.status === undefined) fetchStatus()
  }, [])
  return (
    <>
      this is www
      <br />
      api status: {status ? 'healthy' : 'unhealthy'}
    </>
  )
}

HomePage.getInitialProps = getInitialProps

HomePage.propTypes = {
  api: PropTypes.func,
  status: PropTypes.bool,
}

export default withApi(HomePage)
