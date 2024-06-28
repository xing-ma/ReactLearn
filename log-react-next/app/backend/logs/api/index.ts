import { apiAxios } from '../../../lib/axios';
import { GetLogsRequest, GetLogsResponse, IResponse, LogFormDto } from '../../../types';
import { LogUrls } from '../../../types'

export const getLogs = async (request: GetLogsRequest): Promise<GetLogsResponse> => {
    return await apiAxios.get(LogUrls.getLogs, {
        params: {
            "PageSetting.PageIndex": request.pageSetting.pageIndex,
            "PageSetting.PageSize": request.pageSetting.pageSize,
            "Keyword": request.keyword
        }
    }) as GetLogsResponse;
}

export const addLog = async (data: LogFormDto): Promise<IResponse> => {
    return await apiAxios.post(LogUrls.addLog, data) as IResponse;
}