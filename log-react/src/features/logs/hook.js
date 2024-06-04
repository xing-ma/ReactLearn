import { useState, useEffect } from 'react';
import storage from '../../utils/storage'

const initLogsData = () => {
    var logs = storage.getLogsData() || [];

    if (logs.length === 0) {
        logs.push({
            "id": 1,
            "name": "暴富事件",
            "date": new Date().toLocaleString(),
            "content": "看到这条日志你将一夜暴富"
        });
    }

    return logs;
}

export const useAction = () => {

    const [logsData, setLogsData] = useState(initLogsData());

    const addLog = (data) => {

        var logs = [...logsData, {
            "id": logsData.length + 1,
            "name": data.name,
            "date": new Date().toLocaleString(),
            "content": data.content
        }];

        setLogsData(logs);

        storage.setLogsData(logs);
    }

    const editLog = (data) => {
        var log = logsData.find(x => x.id === data.id);
        log.name = data.name;
        log.content = data.content;
        log.date = new Date().toLocaleString();

        setLogsData([...logsData]);

        storage.setLogsData(logsData);
    }

    const deleteLog = (id) => {

        var logs = logsData.filter(x => x.id !== id);

        setLogsData([...logs]);

        storage.setLogsData(logs);
    }

    const deleteLogs = (ids) => {
        var logs = [];

        logsData.forEach((item) => {

            if (!ids.includes(item.id)) {
                logs.push(item);
            }
        });

        setLogsData([...logs]);

        storage.setLogsData(logs);
    }

    const searchLogs = (keyword) => {

        if (keyword) {
            const regex = new RegExp(keyword, 'i');

            const filteredData = initLogsData().filter(item => {
                return regex.test(item.name);
            });

            setLogsData(filteredData);
        }
        else {
            setLogsData(initLogsData());
        }
    }

    return {
        logsData,
        addLog,
        editLog,
        deleteLog,
        deleteLogs,
        searchLogs
    };
}
