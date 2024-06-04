import React, { useState } from 'react';
import { Divider, Radio, Table, Space, Button, Drawer, Input, message } from 'antd';
import AddOrUpdateLogForm from './add-or-update-log';
import { useAction } from '../hook';
import { tab } from '@testing-library/user-event/dist/tab';

const { Search } = Input;

const LogTable = () => {

  const [selectionType, setSelectionType] = useState('checkbox');

  const [isOpenedAddOrUpdateLogPage, setOpenAddOrUpdateLogPage] = useState(false);

  const [action, setAction] = useState("add");

  const [currentLog, setCurrentLog] = useState({});

  const { logsData, addLog, editLog, deleteLog, deleteLogs, searchLogs } = useAction();

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [reLoading, setReLoading] = useState(false);

  const [tableLoading, setTableLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const onOpenAddLogPage = () => {
    setOpenAddOrUpdateLogPage(true);
    setAction("add");
  }

  const onCloseAddOrUpdateLogPage = () => {
    setOpenAddOrUpdateLogPage(false);
  }

  const onOpenEditLog = (record) => {
    setOpenAddOrUpdateLogPage(true);
    setCurrentLog(record);
    setAction("edit");
  }

  const onDeleteLog = (record) => {
    setTableLoading(true);

    setTimeout(() => {
      deleteLog(record.id);
      setTableLoading(false);
      openDeleteLogSuccessMessage();
    }, 500);
  }

  const onDeleteLogs = () => {
    if (selectedRowKeys.length < 1) {
      messageApi.open({
        type: 'warning',
        content: 'Select the logs that you want to delete',
      });
      return;
    }

    setTableLoading(true);

    setTimeout(() => {
      deleteLogs(selectedRowKeys);
      setSelectedRowKeys([]);
      setTableLoading(false);
      openDeleteLogSuccessMessage();
    }, 500);
  }

  const onSearch = (value) => {
    setTableLoading(true);

    setTimeout(() => {
      searchLogs(value);

      setTableLoading(false);
    }, 500);
  }

  const onPressEnter = (e) => {
    setTableLoading(true);

    setTimeout(() => {
      searchLogs(e.target.value);

      setTableLoading(false);
    }, 500);
  }

  const onReload = () => {
    setReLoading(true);

    setTimeout(() => {
      setSelectedRowKeys([]);
      setReLoading(false);
    }, 500);
  }

  const openDeleteLogSuccessMessage = () => {
    messageApi.open({
      type: 'success',
      content: 'delete log success',
    });
  }

  const columns = [
    {
      title: '名称',
      dataIndex: 'name'
    },
    {
      title: '时间',
      dataIndex: 'date',
    },
    {
      title: '内容',
      dataIndex: 'content',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="link" onClick={() => { onOpenEditLog(record); }} disabled={record.id === 1}>Edit</Button>
          <Button danger type="link"
            onClick={() => { onDeleteLog(record); }}
            disabled={record.id === 1}>Delete</Button>
        </Space>
      )
    }
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.id === 1
    })
  }

  return (
    <div>
      {contextHolder}
      <Radio.Group
        onChange={({ target: { value } }) => { setSelectionType(value); }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>

      <Space>
        <Button type='primary' onClick={onReload} className='' loading={reLoading} disabled={selectedRowKeys.length === 0}> Reload </Button>
        <Button type='primary' onClick={onDeleteLogs} className=''> Delete </Button>
        <Button type='primary' onClick={onOpenAddLogPage} className=''> Add </Button>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          onPressEnter={onPressEnter}
          style={{
            width: 304,
          }}
        />
      </Space>

      <Divider />

      <Table
        rowSelection={{ type: selectionType, ...rowSelection, }}
        rowKey="id"
        loading={tableLoading}
        columns={columns}
        dataSource={logsData}
      />
      <Drawer
        title={action === 'add' ? "add log" : "edit log"}
        width={500}
        open={isOpenedAddOrUpdateLogPage}
        onClose={onCloseAddOrUpdateLogPage}>
        <AddOrUpdateLogForm
          addLog={addLog}
          editLog={editLog}
          action={action}
          log={currentLog}
          closeAddOrUpdateLogPage={onCloseAddOrUpdateLogPage} />
      </Drawer>
    </div>
  );
}

export default LogTable;