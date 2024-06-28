import { useRequest, useBoolean } from 'ahooks';
import storage from '../utils/storage';
import { login } from './api'
import { LoginFormDto } from "./types/index";

export const useLoginAction = () => {
    const [isError, isErrorAction] = useBoolean(false);
    const [isLoading, isLoadingAction] = useBoolean(false);

    const loginRequest = useRequest(login, {
        manual: true,
        onSuccess: async (result, params) => {
            storage.setToken(result.jwt);
            isLoadingAction.setFalse();
        },
        onError: (error) => {
            console.log(error.message);
            isErrorAction.setTrue();
            isLoadingAction.setFalse();
        }
    });

    const onFinish = (values: LoginFormDto) => {

        isLoadingAction.setTrue();

        loginRequest.run(values);
    };

    const onErrorClose = () => {
        isErrorAction.setFalse();
    };

    return {
        onFinish,
        isError,
        onErrorClose,
        isLoading,
    };
}