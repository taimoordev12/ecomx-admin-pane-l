import React from 'react'
 import {Button} from 'reactstrap';
 import axios from 'axios';
 class LogoUpload extends React.Component {


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
  axios.get('/api/logo')
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
    formData.append('logo',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post("/api/logo",formData,config)
        .then((res) => {
          console.log(res);
          if(res.data.msg===0){
            alert("Logo is already uploaded please remove this one first.");
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
handleClick(id) {
  console.log(this.state.img.length);
  if(this.state.img.length<1) {
    alert('no logo is uploaded please upload before replacing');
  }
  else {
 axios.delete('/api/logo/'+id)
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

}

onChange(e) {
  this.setState({file:e.target.files[0]});
}


    render() {

        return (
        <div>
            <div className="card" >
  <img className="card-img-top" src={this.state.img.length<1?"https://via.placeholder.com/100":this.state.img[0].imageData} alt="Card image cap" />
  <div className="card-body text-center">
    <h1 className="card-title">Upload logo</h1>
    
    <form onSubmit={this.onFormSubmit}>
                <input type="file" name="logo" className='text-center'  onChange= {this.onChange} />
                <Button color="primary" className="mt-3"  type="submit">Upload</Button>
            </form>
            <Button color='danger' className='mt-3' onClick={()=>this.handleClick(this.state.img[0]._id)}>Replace</Button>

  </div>
</div>

        </div>
    )}
}

export default LogoUpload;