import { Form, Input, Modal } from "antd";
import React from "react";
import { FieldType } from "../types";

interface UpdateMovieModalProps {
  visible: boolean;
  onCancel: () => void;
}

export default function UpdateMovieModal({
  visible,
  onCancel,
}: UpdateMovieModalProps) {
  //   const [form] = Form.useForm();

  //   const handleOk = () => {
  //     form
  //       .validateFields()
  //       .then((values) => {
  //         onUpdateMovie(values);
  //         form.resetFields();
  //       })
  //       .catch((err) => console.log("Testing failed with error: ", err));
  //   };

  return (
    <Modal
      title="Update Movie"
      open={visible}
      onCancel={onCancel}
      //   onOk={handleOk}
    >
      <Form
        name="Update Movie"
        wrapperCol={{ span: 16 }}
        labelCol={{ span: 5 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: false }]}
        >
          <Input placeholder="(Optional)" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[{ required: false }]}
        >
          <Input placeholder="(Optional)" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Release Date"
          name="release_date"
          rules={[{ required: false }]}
        >
          <Input placeholder="(Optional)" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Genres"
          name="genres"
          rules={[{ required: false }]}
        >
          <Input placeholder="(Optional, array of numbers)" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
