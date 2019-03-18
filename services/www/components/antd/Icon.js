/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Icon as AntdIcon } from 'antd'

import 'antd/lib/icon/style/index.less'

const StyledIcon = styled(AntdIcon)``

const Icon = React.forwardRef((props, ref) => <StyledIcon ref={ref} {...props} />)

export default Icon
