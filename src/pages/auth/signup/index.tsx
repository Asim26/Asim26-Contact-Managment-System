import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import "./styles.css"

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Signup = () => {
  return (
    <div className="main">
      <div className="transparent-glass cardContainer">
        <div className="cardContentContainer">
          <h2>Sign Up</h2>
          <p className="sub-heading">Welcome ! Please enter your details below to create an account.</p>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Name"
              name="username"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Signup