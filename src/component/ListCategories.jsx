/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheese, faUtensils, faCoffee, faBowlFood } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Icon= ({nama}) => {
  if(nama === "Makanan") return <FontAwesomeIcon icon={faBowlFood} className="mr-2"/>
  if(nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} className="mr-2"/>
  if(nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} className="mr-2"/> 
  
  return <FontAwesomeIcon icon={faUtensils} className="mr-2"/>
}

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state
    // eslint-disable-next-line react/prop-types
    const { changeCategory, categoriYangDipilih} = this.props
    return (
      <Col md={2} className= 'mt-3'>
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
        {categories && categories.map((category) => (
          <ListGroup.Item key={category.id} onClick={()=> changeCategory(category.nama)}
          className={categoriYangDipilih === category.nama && "category-aktif"}
          style={{ cursor: 'pointer' }}>
            <h5>
            <Icon nama={category.nama} /> {category.nama}
            </h5> 
          </ListGroup.Item>
      ))}
        </ListGroup>
      </Col>
    );
  }
}
