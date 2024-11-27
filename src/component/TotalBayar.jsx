/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { formatNumber } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { withRouter } from "./withRouter";

class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };
    axios
      .post(API_URL + "pesanans", pesanan)
      .then((res) => {
        this.props.navigate("/sukses");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
      {/* Web */}
        <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h5>
              Total :
              <strong className="float-end">
                Rp. {formatNumber(totalBayar)}
              </strong>
            </h5>
            <Button
              variant="success"
              className="w-100 mb-4 mt-2 mr-3"
              size="md"
              onClick={() => this.submitTotalBayar(totalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <strong> Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>

      {/* Mobile */}
      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4 mt-2">
            <h5>
              Total :
              <strong className="float-end">
                Rp. {formatNumber(totalBayar)}
              </strong>
            </h5>
            <Button
              variant="success"
              className="w-100 mb-4 mt-2 mr-3"
              size="md"
              onClick={() => this.submitTotalBayar(totalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <strong> Bayar</strong>
            </Button>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}

export default withRouter(TotalBayar);
