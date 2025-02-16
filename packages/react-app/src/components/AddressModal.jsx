import { Modal } from "antd";
import React, { useState } from "react";
import { AddressInput } from ".";
import { ethers, utils } from "ethers";

function ImportModal({ handleAddress, ...props }) {
  const [address, setAddress] = useState("");

  const onOk = () => {
    handleAddress(address);
    setAddress("");
  };

  const clear = () =>{
    setAddress("");
  }
  return (
    <Modal title="Add Address" centered {...props} onOk={onOk}>
      <p>Note: Imported addresses can only be seen by the current host</p>
      <AddressInput
        autoFocus
        placeholder="Enter Address"
        value={address}
        onChange={setAddress}
        ensProvider={props.mainnetProvider}
        clear={clear}
      />
    </Modal>
  );
}

export default ImportModal;
