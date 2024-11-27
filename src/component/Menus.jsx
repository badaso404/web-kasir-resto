/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import {Card, Col} from 'react-bootstrap';
import { formatNumber } from "../utils/utils";


export const Menus = ({ menu, masukKeranjang }) => {
  return (
    <Col md={4} xs={6} className="mb-4" >
      <Card className="shadow" onClick={()=> masukKeranjang(menu)}>
        <Card.Img variant="top" src={"../assets/"+ menu.category.nama.toLowerCase() + "/" + menu.gambar} />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>
            Rp.{formatNumber(menu.harga)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};


