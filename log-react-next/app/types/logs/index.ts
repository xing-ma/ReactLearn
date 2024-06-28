import { IPageSetting, IResponse } from '../common';

export type LogDto = {
    id: string,
    title: string,
    description: string
}

export type LogForListDto = {
    total: number,
    data: LogDto[]
}

export type GetLogsRequest = {
    pageSetting: IPageSetting,
    keyword: string
}

export type GetLogsResponse = IResponse & {
    total: number,
    result: LogDto[]
}

export type LogFormDto = {
    title: string,
    description: string
}