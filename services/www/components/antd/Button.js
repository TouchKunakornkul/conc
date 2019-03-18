/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Button as AntdButton } from 'antd'

import 'antd/lib/button/style/index.less'

const StyledButon = styled(AntdButton)``
const StyledButonGroup = styled(AntdButton.Group)``

const Button = React.forwardRef((props, ref) => <StyledButon ref={ref} {...props} />)
Button.Group = React.forwardRef((props, ref) => <StyledButonGroup ref={ref} {...props} />)

export default Button
