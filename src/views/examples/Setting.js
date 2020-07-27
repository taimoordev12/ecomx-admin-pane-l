import React from "react";
// reactstrap components
import {
 
  Container,
  Row,
  Col,
  Button
 
} from "reactstrap";
import LogoUpload from '../../components/LogoUpload/Logo.component';

// core components
import Header from "components/Headers/Header.js";

class Setting extends React.Component {

  

  render() {
    return (
        <React.Fragment>
        <Header />
        
         <div className="container-fluid mt-5 ">
           <div className="row">
             <div className="col-md-4">
                <LogoUpload/>
             </div>
           </div>
         </div>
      
         
        </React.Fragment>
           
    );
  }
}

export default Setting;
