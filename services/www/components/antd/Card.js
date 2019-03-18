/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Card as AntdCard } from 'antd'

import 'antd/lib/card/style/index.less'
import 'antd/lib/tabs/style/index.less'

const StyledCard = styled(AntdCard)``
const StyledCardGrid = styled(AntdCard.Grid)``
const StyledCardMeta = styled(AntdCard.Meta)``

const Card = React.forwardRef((props, ref) => <StyledCard ref={ref} {...props} />)
Card.Grid = React.forwardRef((props, ref) => <StyledCardGrid ref={ref} {...props} />)
Card.Meta = React.forwardRef((props, ref) => <StyledCardMeta ref={ref} {...props} />)

export default Card
