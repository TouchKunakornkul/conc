/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Input as AntdInput } from 'antd'

import 'antd/lib/input/style/index.less'
import 'antd/lib/button/style/index.less'

const StyledInput = styled(AntdInput)``
const StyledInputGroup = styled(AntdInput.Group)``
const StyledInputSearch = styled(AntdInput.Search)``
const StyledInputTextArea = styled(AntdInput.TextArea)``
const StyledInputPassword = styled(AntdInput.Password)``

const Input = React.forwardRef((props, ref) => <StyledInput ref={ref} {...props} />)
Input.Group = React.forwardRef((props, ref) => <StyledInputGroup ref={ref} {...props} />)
Input.Search = React.forwardRef((props, ref) => <StyledInputSearch ref={ref} {...props} />)
Input.TextArea = React.forwardRef((props, ref) => <StyledInputTextArea ref={ref} {...props} />)
Input.Password = React.forwardRef((props, ref) => <StyledInputPassword ref={ref} {...props} />)

export default Input
