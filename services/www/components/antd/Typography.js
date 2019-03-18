/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Typography as AntdTypography } from 'antd'

import 'antd/lib/typography/style/index.less'

const StyledTypography = styled(AntdTypography)``
const StyledTypographyText = styled(AntdTypography.Text)``
const StyledTypographyTitle = styled(AntdTypography.Title)``
const StyledTypographyParagraph = styled(AntdTypography.Paragraph)``

const Typography = React.forwardRef((props, ref) => <StyledTypography ref={ref} {...props} />)
Typography.Text = React.forwardRef((props, ref) => <StyledTypographyText ref={ref} {...props} />)
Typography.Title = React.forwardRef((props, ref) => <StyledTypographyTitle ref={ref} {...props} />)
Typography.Paragraph = React.forwardRef((props, ref) => (
  <StyledTypographyParagraph ref={ref} {...props} />
))

export default Typography
