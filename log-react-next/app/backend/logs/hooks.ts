import { useState } from 'react';
import { useRequest, useBoolean } from 'ahooks';
import { getLogs, addLog } from './api';
import { GetLogsRequest, LogForListDto, LogFormDto } from '../../types';

export const useLogsAction = () => {
    const [logData, setLogs] = useState<LogForListDto>({
        total: 0,
        data: []
    });

    const [isLoadingLogs, isLoadingLogsAction] = useBoolean(true);

    const getLogsRequest = useRequest(getLogs, {
        manual: true,
        onSuccess: async (result, params) => {
            if (result.isSuccessCode) {
                setLogs({
                    total: result.total,
                    data: result.result
                });

                isLoadingLogsAction.setFalse();
            }
        },
        onError: (error) => {
            console.log(error.message);
        }
    });

    const addLogRequest = useRequest(addLog, {
        manual: true,
        onSuccess: async (result, params) => {

        },
        onError: (error) => {
            console.log(error.message);
        }
    });

    const submitAddLog = (data: LogFormDto) => {
        addLogRequest.run(data);
    }

    const onLoadLogs = (data: GetLogsRequest) => {
        getLogsRequest.run(data);
    }

    return {
        isLoadingLogs,
        onLoadLogs,
        logData,
        submitAddLog
    }
}