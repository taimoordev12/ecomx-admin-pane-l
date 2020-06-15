
import React from "react";
import {connect} from 'react-redux'
import {Container, Row,Col} from 'reactstrap';
import OrderProduct from '../../../components/OrderProduct/OrderProduct.component';
import '../Order/Order.style.css';
import Moment from 'react-moment';
// core components
import routes from "routes.js";
import Sidebar from "components/Sidebar/Sidebar.js";


class orderPage extends React.Component {
  
  
  render() {
    const {Orders} =this.props;
    const paramId = this.props.match.params.id;
       const foundOrder = Orders.orders.find(order => order._id == paramId );
     const OrderProducts=foundOrder.products;
     console.log(foundOrder);
    

     
    return (
        <React.Fragment>

        <Sidebar
        {...this.props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/img/brand/E.png"),
          imgAlt: "..."
        }}
      />
        <div className="main-content" ref="mainContent">
           <Container>
             <Row>
                 <Container>
                   <Row>
                     <Col md={12 } className="mt-70">
                     <h1>Order created at <Moment>{foundOrder.date}</Moment></h1>
                     </Col>
                   </Row>
                 </Container>
               <Col md={3}>
                 <h3>Products</h3>
                 {OrderProducts.map(product=><OrderProduct key={product.id} {...product}/>)}
                   <h3> Total Amount = ${foundOrder.checkoutTotal}</h3>
                
               </Col>
               <Col md={3}></Col>
               <Col md={6} >
               <h3>Order Details</h3>
                  <h5 >{foundOrder.firstName} {foundOrder.lastName}</h5>
                  <h5 >{foundOrder.email}</h5>
                  <h5 >{foundOrder.address}</h5>
                  <h5 >{foundOrder.state}</h5>
                  <h5 >{foundOrder.country}</h5>


               </Col>
             </Row>
           </Container>
        </div>
      </React.Fragment>
    
    );
  }
}
const mapStateToProps =(state)=>({
  Orders:state.Order
})


export default connect(mapStateToProps)(orderPage);
