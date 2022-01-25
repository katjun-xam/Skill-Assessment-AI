import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Modal from "../components/Modal";

type IProfilProps = {};

const Profil = (props: IProfilProps) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const onSubmit = (action: string) => {
    if (action === "cancel" || action === "close") {
      setModalVisibility(!modalVisibility);
    } else {
      setModalVisibility(!modalVisibility);
    }
  };

  return (
    <Layout>
      <h2>My Profile</h2>
      <Button
        label="View settings"
        color="primary"
        variant="outlined"
        onClick={() => setModalVisibility(!modalVisibility)}
      />
      {modalVisibility && (
        <Modal
          heading="modal"
          content="Modal sample"
          animationType="fadeIn"
          onSubmit={onSubmit}
        />
      )}
    </Layout>
  );
};

export default Profil;
