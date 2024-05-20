import React from 'react';
import {Form,Input, Button, message} from 'antd';

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 3,
    },
    sm: {
      span: 3,
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

const buttonItemLayout ={
  wrapperCol: {
    offset: 19,
  },     
};

const AddOrUpdateLogForm = (props) => {
  
const [form] = Form.useForm();

form.resetFields();

const [messageApi, contextHolder] = message.useMessage();

const openAddLogSuccessMessage = () => {
  messageApi.open({
    type: 'success',
    content: 'add log success',
  });
}

const openEditLogSuccessMessage = () => {
  messageApi.open({
    type: 'success',
    content: 'edit log success',
  });
}

const onSubmitLogForm = async ()=>{
    try{
        const values = await form.validateFields();
        
        if(props.action === "add")
        {
          props.addLog(values);
          openAddLogSuccessMessage();
        }

        if(props.action === "edit")
        {
          props.editLog(values);
          openEditLogSuccessMessage();
        }

        props.closeAddOrUpdateLogPage();
    }
    catch(error){
        console.log('Failed:', error);
    }
}

if(props.action === "edit")
{
  form.setFieldsValue(props.log);
}

return(
  <>
    {contextHolder}
    <Form {...formItemLayout} 
      form={form}
      variant="filled"
      style={{maxWidth: 600}}
    >
      <Form.Item name="id" hidden = {true}> </Form.Item>
      <Form.Item
        label="名称"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <Input placeholder="Please input" />
      </Form.Item>

      <Form.Item
      label="内容"
      name="content"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <TextArea placeholder="Please input content" allowClear />
      </Form.Item>
    
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick={onSubmitLogForm}>Submit</Button>
      </Form.Item>
    </Form>
  </>
    
)};

export default AddOrUpdateLogForm;