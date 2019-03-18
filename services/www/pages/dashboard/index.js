import React from 'react'
import { css } from '@emotion/core'
import { Avatar, Button, Card, Input, Table, Tag, Typography } from 'www/components/antd'
import withApi from 'www/hocs/withApi'

const data = [
  {
    key: '1',
    courceName: 'Management Leadership Program',
    companyName: 'Siam Commercial Bank',
    start: '16.01.2019',
    end: '22.01.2019',
    attendees: 36,
    status: 'upcoming',
  },
  {
    key: '2',
    courceName: 'Management Leadership Program',
    companyName: 'Siam Commercial Bank',
    start: '16.01.2019',
    end: '22.01.2019',
    attendees: 36,
    status: 'upcoming',
  },
]

const DashboardPage = () => (
  <>
    <div>
      <Typography.Title
        level={1}
        css={css`
          display: inline-block;
        `}
      >
        Course
      </Typography.Title>
      <Button
        css={css`
          margin-left: 16px;
          transform: translateY(-8px);
        `}
      >
        Add
      </Button>
      <Input.Search
        css={css`
          &.ant-input-affix-wrapper {
            margin-top: 8px;
            float: right;
            width: unset;
          }
        `}
      />
    </div>
    <Card
      css={css`
        border: 1px solid #d8e2ec;
        border-radius: 5px;
        .ant-table {
          min-height: calc(100vh - 80px - 28px - 65px - 16px - 32px - 16px - 28px);
        }
        .ant-pagination {
          margin-right: 24px;
        }
      `}
    >
      <Table dataSource={data}>
        <Table.Column dataIndex="avatar" key="avatar" render={() => <Avatar />} />
        <Table.Column
          title="Title"
          dataIndex="courceName"
          key="courceName"
          render={(courceName, { companyName }) => (
            <>
              <Typography.Text strong>{courceName}</Typography.Text>
              <br />
              <Typography.Text>{companyName}</Typography.Text>
            </>
          )}
        />
        <Table.Column title="Start" dataIndex="start" key="start" />
        <Table.Column title="End" dataIndex="end" key="end" />
        <Table.Column title="Attendees" dataIndex="attendees" key="attendees" />
        <Table.Column
          title="Status"
          dataIndex="status"
          key="status"
          render={(status) => <Tag>{status}</Tag>}
        />
        <Table.Column
          dataIndex="actions"
          key="actions"
          render={() => (
            <>
              <Button
                icon="edit"
                css={css`
                  margin-right: 8px;
                `}
              />
              <Button icon="delete" type="danger" />
            </>
          )}
        />
      </Table>
    </Card>
  </>
)

export default withApi(DashboardPage)
