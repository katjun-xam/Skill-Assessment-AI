import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Modal from "../components/Modal";

type IProfilProps = {};

const Profil = (props: IProfilProps) => {
  const [modalVisibility, setModalVisibility] = useState({
    parent: false,
    child: false,
  });

  const onModalSubmitHandler = (
    action: string,
    nested?: boolean,
    child?: boolean
  ) => {
    if (
      (!nested && (action === "confirm" || action === "close")) ||
      (nested && !child && action === "close")
    ) {
      setModalVisibility({ ...modalVisibility, parent: !parent, child: false });
    } else if (nested && (child || (!child && action === "confirm"))) {
      setModalVisibility({ ...modalVisibility, child: !child });
    }
  };

  return (
    <Layout>
      <h2>My Profile</h2>
      <Button
        label="View settings"
        color="primary"
        variant="outlined"
        onClick={() =>
          setModalVisibility({
            parent: true,
            child: false,
          })
        }
      />
      {modalVisibility.parent && (
        <Modal
          heading="modal"
          content="Modal sample"
          animationType="fadeIn"
          onSubmit={onModalSubmitHandler}
          childModalVisibility={modalVisibility.child}
          childHeading="child modal"
          childContent="child Modal sample"
        />
      )}
    </Layout>
  );
};

export default Profil;
