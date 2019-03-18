/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Avatar as AntdAvatar } from 'antd'

import 'antd/lib/avatar/style/index.less'

const StyledAvatar = styled(AntdAvatar)``

const Avatar = React.forwardRef((props, ref) => <StyledAvatar ref={ref} {...props} />)

export default Avatar
