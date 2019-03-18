/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@emotion/styled'
import { Table as AntdTable } from 'antd'

import 'antd/lib/table/style/index.less'
import 'antd/lib/input/style/index.less'
import 'antd/lib/empty/style/index.less'
import 'antd/lib/radio/style/index.less'
import 'antd/lib/checkbox/style/index.less'
import 'antd/lib/dropdown/style/index.less'
import 'antd/lib/spin/style/index.less'
import 'antd/lib/pagination/style/index.less'

const StyledTable = styled(AntdTable)``
const StyledTableColumn = styled(AntdTable.Column)``
const StyledTableColumnGroup = styled(AntdTable.ColumnGroup)``

const Table = React.forwardRef((props, ref) => <StyledTable ref={ref} {...props} />)
Table.Column = React.forwardRef((props, ref) => <StyledTableColumn ref={ref} {...props} />)
Table.ColumnGroup = React.forwardRef((props, ref) => (
  <StyledTableColumnGroup ref={ref} {...props} />
))

export default Table
