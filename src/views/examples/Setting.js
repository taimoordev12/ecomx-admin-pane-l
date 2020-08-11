import React from "react";
 
import LogoUpload from '../../components/LogoUpload/Logo.component';

// core components
import Header from "components/Headers/Header.js";
import  SeoSettings from 'components/SeoSettings/SeoSettings.component';
import ColorSelector from 'components/ColorSelector/ColorSelector.component';
class Setting extends React.Component {

  

  render() {
    return (
        <React.Fragment>
        <Header />
        
         <div className="container-fluid mt-5 ">
           <div className="row">
             <div className='col'></div> 
             <div className="col-md-4">
                <LogoUpload/>
             </div>
             <div className="col-md-4">
                <SeoSettings/>
             </div>
             <div className='col'></div> 

             <div className="col-md-12 mt-5">
                < ColorSelector />
             </div>
             
           </div>
         </div>
      
         
        </React.Fragment>
           
    );
  }
}

export default Setting;
