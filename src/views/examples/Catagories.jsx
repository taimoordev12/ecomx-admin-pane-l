import React from 'react'
import Header from "components/Headers/Header.js";
import axios from 'axios';
import SingleCatagory from '../../components/SingleCatagory/SingleCatagory.component';
  // reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    Modal,
    Pagination,
    PaginationItem,
    PaginationLink,
    FormGroup,
    Input,
    Table,
    Container,
    Row,
    Button,
  } from "reactstrap";

 class Catagories extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            CatagoryModal:false,
            title:'',
            CatagoriesData:[]            
           
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

      componentDidMount(){
        var self = this;
      
        axios.get('/api/catagories')
        .then(function (res) {
          // handle success
          console.log(res.data);
          self.setState({CatagoriesData:res.data});
          console.log(self.state.CatagoriesData); 
          
          
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
          formData.append('catagory',this.state.file);
          formData.append('title',this.state.title);
        
          const config = {
              headers: {
                  'content-type': 'multipart/form-data'
              }
          };
          axios.post("/api/catagories",formData,config)
              .then((res) => {
                console.log(res);
                if(res.data.msg===0){
                  alert("Catagory name already exists, please choose another name");
                  window.location.reload(false);

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
handleChange = event => {
  const {name, value} = event.target;
  this.setState({[name]:value});
}
    render() {
    return (
        <div>
        <Header /> 
        <Container className=" mt-5" fluid>
   
    <Row>
        <div className="col-12 mb-3">
        <Button color="primary" type="button"  onClick={() => this.toggleModal("CatagoryModal")}>
          Add new 
        </Button>
        </div>
            <div className="col-12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Catagories</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Catagory Name </th>
                      <th scope="col">Number of products</th>
                      <th scope="col">Status</th>
                      <th scope="col" className=' text-center'>Featured Image</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                 
                   {this.state.CatagoriesData.map(catagory=><SingleCatagory key={catagory._id}  {...catagory}/>)} 
                 
                   
                
                  
                   
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
            </div>
          </Row>
     
  

    </Container>

    <Modal
          className="modal-dialog-centered"
          isOpen={this.state.CatagoryModal}
          toggle={() => this.toggleModal("CatagoryModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
           Upload a new catagory
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("CatagoryModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
          <form className='text-center mt-3'  onSubmit={this.onFormSubmit} > 
                <Input
                  id="Name"
                  placeholder="Enter Name of the catagory"
                  type="text"
                  onChange= {this.handleChange}
                  name='title'
                  value={this.state.title}
                />
                <p className='mt-3'>Upload a Feature Image</p>
         <Input type="file" name="catagory" className='text-center mt-3'  onChange= {this.onChange} />
         <Button color="primary" className="mt-3"  type="submit">Upload</Button>


              </form>

          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("CatagoryModal")}
            >
              Close
            </Button>
           
          </div>
        </Modal>

  </div>
    )
}
}

export default Catagories;