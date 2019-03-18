/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Tag as AntdTag } from 'antd'

import 'antd/lib/tag/style/index.less'

const StyledTag = styled(AntdTag)``
const StyledTagCheckableTag = styled(AntdTag.CheckableTag)``

const Tag = React.forwardRef((props, ref) => <StyledTag ref={ref} {...props} />)
Tag.CheckableTag = React.forwardRef((props, ref) => <StyledTagCheckableTag ref={ref} {...props} />)

export default Tag
