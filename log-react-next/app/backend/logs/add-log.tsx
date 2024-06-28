import React from "react";
import { Button, Form, Input } from 'antd';
import { LogFormDto } from '../../types';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 5,
        },
        sm: {
            span: 5,
        },
    },
    wrapperCol: {
        xs: {
            span: 20,
        },
        sm: {
            span: 20,
        },
    },
};

const buttonItemLayout = {
    wrapperCol: {
        offset: 20,
    },
};

type AddLogFormProp = {
    submitAddLog: (data: LogFormDto) => void
}

export const AddLogForm: React.FC<AddLogFormProp> = (prop) => {
    const [form] = Form.useForm();

    const onSubmitAddLog = async () => {
        try {
            const values = await form.validateFields();

            prop.submitAddLog(values);
        }
        catch {

        }
    }

    return (
        <Form {...formItemLayout} form={form} onFinish={onSubmitAddLog}>
            <Form.Item label="Title" name="title" required={true}
                rules={[{ required: true, message: "Please input title" }]}>
                <Input placeholder="Please input title" />
            </Form.Item>
            <Form.Item label="Description" name="description" required={true}
                rules={[{ required: true, message: "Please input description" }]}>
                <Input.TextArea rows={5} placeholder="Please input description" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}