import React,{ useState, useEffect } from 'react'
import Header from "components/Headers/Header.js";
import {connect} from 'react-redux';
import { getProducts} from '../../Redux/ProductReducer/ProductAction';
import {Link} from 'react-router-dom';
import ProductRow from '../../components/ProductRow/ProductRow.component';
import { withRouter } from "react-router";

// reactstrap components
import {
  Col,
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Button 
} from "reactstrap";

const Products=(props)=> {

  useEffect(() => {
    props.getProducts();
    console.log(props.Products.products);
   
  },[]);
    return (
        <div>
              <Header /> 
              <Container className=" mt-5" fluid>
          <Row>
            <Col md={!2}>
            <Button onClick={()=>props.history.push('/AddProduct')} color="primary" type="button">
         Add New
        </Button>
            <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Products</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Product Name </th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Catagory</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                {props.Products.products.map(prod=><ProductRow key={prod._id} {...prod}/>)}
                   
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </Col>
            
              
        
          
          </Row>

          </Container>

        </div>
    )
}
const mapStateToProps =(state)=>({
  Products:state.Product
});

export default  connect(mapStateToProps, {getProducts})(withRouter(Products));
