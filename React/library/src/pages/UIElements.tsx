import { useState } from "react";
import Layout from "../components/Layout";
import Button from "./../components/Button";
import Modal from "./../components/Modal";

type IUIElementsProps = {};

const UIElements = (props: IUIElementsProps) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <Layout>
      <h1>UIElements</h1>
      <h2>Modal:</h2>
      <Button
        label="Open modal"
        color="primary"
        onClick={() => setModalVisibility(!modalVisibility)}
      />
      {modalVisibility && (
        <Modal heading="modal" content="Modal sample" animationType="fadeIn" />
      )}
    </Layout>
  );
};

export default UIElements;
