'use client'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import { LoginFormDto } from './types/index';
import { useLoginAction } from './hooks';

const Login: React.FC = () => {

  const { onFinish, isError, onErrorClose, isLoading } = useLoginAction();

  return (
    <>
      {isError && <Alert message="账户或密码错误" type="error" showIcon closable afterClose={onErrorClose} />}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<LoginFormDto>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<LoginFormDto>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  )
};

export default Login;