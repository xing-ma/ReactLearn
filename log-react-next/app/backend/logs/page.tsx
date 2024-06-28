'use client'
import { useState, useEffect } from 'react';
import { Button, List, Drawer, Col, Row, Input } from 'antd';
import { useLogsAction } from './hooks';
import { AddLogForm } from './add-log';
import { GetLogsRequest } from '../../types';

const Home: React.FC = () => {

  useEffect(() => {
    console.log("log effect");
    onLoadLogs(requestLog);
  }, []);

  const [requestLog, setRequestLog] = useState<GetLogsRequest>({
    pageSetting: {
      pageIndex: 1,
      pageSize: 20
    },
    keyword: ""
  });

  const { isLoadingLogs, logData, onLoadLogs, submitAddLog } = useLogsAction();

  const [isOpenAddLogPage, setOpenAddLogPage] = useState(false);

  const onCloseAddLogPage = () => {
    setOpenAddLogPage(false);
  }

  const onOpenAddLogPage = () => {
    setOpenAddLogPage(true);
  }

  const onSearchLogs = (value: string) => {
    requestLog.pageSetting.pageIndex = 1;
    requestLog.keyword = value
    onLoadLogs(requestLog);
    setRequestLog({ ...requestLog });
  }

  return (
    <>
      <List
        header={
          <Row>
            <Col span={2}><Button onClick={onOpenAddLogPage}>发布新日志</Button></Col>
            <Col span={4} push={18}><Input.Search placeholder="input search text" allowClear enterButton="Search" size="large"
              onSearch={onSearchLogs} />
            </Col>
          </Row>

        }
        dataSource={logData.data}
        loading={isLoadingLogs}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.description}>
            </List.Item.Meta>
          </List.Item>
        )}>
      </List>
      <Drawer
        width={500}
        placement='left'
        open={isOpenAddLogPage}
        onClose={onCloseAddLogPage}
        closeIcon={false}>
        <AddLogForm submitAddLog={submitAddLog} />
      </Drawer>
    </>
  );
};

export default Home;
