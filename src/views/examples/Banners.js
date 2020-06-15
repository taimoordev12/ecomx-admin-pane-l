
import React from "react";
import axios from 'axios';
// reactstrap components
import {
 
  Container,
  Row,
  Col,
  Button
 
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

class Banners extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
        file: null,
        img:[],
        
       
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
}
componentDidMount(){
  var self = this;

  axios.get('/api/banners')
  .then(function (res) {
    // handle success
    console.log(res);
    self.setState({img:res.data});
    console.log(self.state.img); 
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
onFormSubmit(e){
    
    e.preventDefault();
    if(this.state.file){
    const formData = new FormData();
    formData.append('banner',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("/api/banners",formData,config)
        .then((res) => {
          console.log(res);
          if(res.data.msg===0){
            alert("3 max banners can be uploaded");
               } else{
                alert("The file is successfully uploaded");
                window.location.reload(false);

               }
          
        }).catch((error) => {
    });
  } else {
    alert('please select a file');
  }

}

onChange(e) {
    this.setState({file:e.target.files[0]});
}

handleClick(id) {
  axios.delete('/api/banners/'+id)
        .then((res)=>{
          console.log(res);
          if(res.data.success==true){
            window.location.reload(false);

          } else {
            alert('delete failed please contact support');
          }
           

        }

        );

}


  render() {
    const {img} =this.state;
    return (
        <React.Fragment>
        <Header />
        {/* Page content */}
        <Container className=" mt-5" fluid>
          <Row>
            <Col md={4}></Col>
            <Col md={4} className='text-center'>
              
            <form onSubmit={this.onFormSubmit}>
                <h1>Upload Banners (max 3)</h1>
                <input type="file" name="banner" className='text-center'  onChange= {this.onChange} />
                <Button color="primary" className="mt-3"  type="submit">Upload (recomended size is 1920*900)</Button>
            </form>
            
            </Col>
            <Col md={4}></Col>
           
          </Row>

          </Container>

          <Container className='mt-5'>
            <Row>
              { 
                img.map((img,index)=>
                  <Col md={4} key={img._id} className="text-center">
                    <h2>Banner {index+1}</h2>
               <img src={img.imageData}  className='img-fluid'/>
                <Button color='danger' className='mt-3' onClick={()=>this.handleClick(img._id)}>Remove</Button>
               </Col>
               )}
               
               
            </Row>
          </Container>
         
          </React.Fragment>
           
    );
  }
}

export default Banners;
