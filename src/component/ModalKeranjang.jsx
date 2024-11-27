/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { formatNumber } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapusPesanan
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}{" "}
            <strong>Rp.{formatNumber(keranjangDetail.product.harga)}</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga</Form.Label>
              <p>Rp.{formatNumber(totalHarga)}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Jumlah : </Form.Label>
              <br />
              <Button variant="success" size="sm" className="me-3" onClick={()=> tambah()}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <strong>{jumlah}</strong>
              <Button variant="success" size="sm" className="ms-3" onClick={()=> kurang()}> 
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="keterangan"
                placeholder="contoh : Pedas, sedang, tidak pedas" 
                value={keterangan}
                onChange={(event) => changeHandler (event)}
              />
            </Form.Group>
            <Button variant="success" type="submit">Simpan</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => hapusPesanan(keranjangDetail.id)}>
            <FontAwesomeIcon icon={faTrash}/> Hapus Pesanan
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kosong</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ksosong</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>;
  }
};

export default ModalKeranjang;
