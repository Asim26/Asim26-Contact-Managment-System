import { Button, Form, Input, Modal, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { useState } from "react";
import "./styles.css";

interface DataType {
  key: string;
  firstName: string;
  lastName: string;
  contact: string;
}

const paginationConfig = {
  pageSize: 20, // Number of records per page
  showSizeChanger: false, // Hide the option to change the page size
};

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
    render: (key) => <a>{key}</a>,
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John Brown',
    lastName: "Brown",
    contact: '+92 332 2442987',
  },
  {
    key: '2',
    firstName: 'Jim Green',
    lastName: "Jim",
    contact: '+92 332 2442987',
  },
  {
    key: '3',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '4',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '5',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '6',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '7',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '8',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '9',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '10',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '11',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
  {
    key: '12',
    firstName: 'Joe Black',
    lastName: "Joe",
    contact: '+92 332 2442987',
  },
];

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <div>
        <Button
          type="primary"
          onClick={showModal}
          className="addBtn"
        >
          Add New Contact
        </Button>
        <Modal
          title="New Contact"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={500}
          style={{ textAlign: 'center' }}
          okText={"Add"}
        >
          <Form
            layout="horizontal"
            className="formStyle"
          >
            <Form.Item label="First Name">
              <Input
                placeholder="First Name"
                className="input"
              />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input
                placeholder="Last Name"
                className="input"
              />
            </Form.Item>
            <Form.Item label="Contact #">
              <Input
                placeholder="Contact #"
                className="input"
              />
            </Form.Item>
          </Form>
        </Modal>

      </div> */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={paginationConfig}
      />
    </>
  )
}

export default Contacts