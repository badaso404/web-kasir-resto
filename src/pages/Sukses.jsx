// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class Sukses extends Component {

  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
  
        // Menggunakan Promise.all untuk memastikan semua permintaan selesai
        const deletePromises = keranjangs.map((item) => {
          return axios.delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(`Deleted item with ID ${item.id}`, res))
            .catch((error) => console.log(`Error deleting item with ID ${item.id}`, error));
        });
  
        // Menunggu semua permintaan selesai
        return Promise.all(deletePromises);
      })
      .then(() => {
        console.log("All items deleted successfully");
      })
      .catch((error) => {
        console.log("Error fetching or deleting items", error);
      });
  }
  
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/sukses.png" width="400" />
        <h2>Pesanan anda sukses</h2>
        <p>Terimakasih sudah memesan yaaa </p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
