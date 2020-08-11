import React,{useState,useEffect} from 'react'
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Input,
    Label,
    CardText,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from "reactstrap";
  import { SketchPicker } from 'react-color'
  import '../ColorSelector/ColorSelector.style.css';
  import axios from 'axios';


 const ColorSelector=() =>{
     const [PrimaryColor,setPrimaryColor] = useState('');
     const [SecondaryColor,setSecondaryColor] = useState('');
     const [ColorId,setColorId] = useState('');

     const [latestLogo,setlatestLogo] = useState({});
     const [DataSubmissionFlag, setDataSubmissionFlag] = useState(false);

     const [isOpen, setIsOpen] = useState(false);
     const toggle = () => setIsOpen(!isOpen);


     useEffect(() => {

        axios.get('/api/logo')
        .then(function (res) {
            console.log(res.data);
          res.data.map(data=>setlatestLogo(data));
           
            
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });


        axios.get('/api/color')
        .then(function (res) {
            console.log(res.data);
          res.data.map(data=>{setDataSubmissionFlag(data.approved);setPrimaryColor(data.PrimaryColor);setSecondaryColor(data.SecondaryColor);setColorId(data._id)});
           
            
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
        
      },[]);
     
    const  handleColorComplete =(color)=>{
        setPrimaryColor(color.hex);
 
     }
     const   handleColorCompleteSecondary =(color)=>{
        setSecondaryColor(color.hex);
 
     }
     const handleSubmit=()=>{
         const SendData = {
           Primarycolor:PrimaryColor,
           SecondaryColor:SecondaryColor,
           approval:true

        } 
        const config = {
            headers: { 'Content-Type': 'application/json',
         }}

              
        axios.post("/api/color",SendData,config
        ).then(res=>{
          if(res.data.success===1){
            alert('color updated');

           


           }
        })

     }

     const HandleUpdate=()=>{

        const SendData = {
            Primarycolor:PrimaryColor,
            SecondaryColor:SecondaryColor,
             

        } 

        console.log(SendData);
        const config = {
            headers: { 'Content-Type': 'application/json',
         }}
        axios.patch("/api/color/"+ColorId,SendData,config
        ).then(res=>{
          if(res.data.success===1){
              alert('data updated');
             

            console.log(SendData);

           }
        })

     }
     return (
        <Card >
     <CardTitle className='text-center'><h1 className="display-4">Color Settings</h1></CardTitle>
        
          <CardBody className='text-center'>
              <div className="contianer">
                  <div className="row">
                      <div className="col"></div>
                      <div className="col-md-3">
                      <h3>Primary Color</h3>
              
              <SketchPicker
               onChangeComplete={ handleColorComplete }
               color={ PrimaryColor }
      
                />
                      </div>
                      <div className="col-md-3 text-center">
                      <h3>Secondary Color</h3>

<SketchPicker
onChangeComplete={ handleColorCompleteSecondary }
color={SecondaryColor}

/>

                      </div>
                      <div className="col"></div>
                  </div>
              </div>
 
            <CardTitle className='mt-4'>Preview of your color scheme of store</CardTitle>
            <Navbar style={{background: PrimaryColor,color:SecondaryColor}} light expand="md">
        <NavbarBrand href="/"><img src={latestLogo.imageData} style={{width:60}} alt=""/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{background: PrimaryColor,color:SecondaryColor}}>
            <NavItem>
              <NavLink style={{background: PrimaryColor,color:SecondaryColor}} href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{background: PrimaryColor,color:SecondaryColor}} href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{background: PrimaryColor,color:SecondaryColor}}>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{background: PrimaryColor,color:SecondaryColor}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{background: PrimaryColor,color:SecondaryColor}}>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem style={{background: PrimaryColor,color:SecondaryColor}}>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{background: PrimaryColor,color:SecondaryColor}}>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
            <Button className='mt-3' style={{background: PrimaryColor,color:SecondaryColor}} type="button">
          This the preview button
        </Button>

      
          </CardBody>
          {DataSubmissionFlag? <Button className="btn-icon btn-3 mt-5" color="primary" onClick={HandleUpdate}  >
          <span className="btn-inner--icon">
          <i className="ni ni-ungroup" />
           </span>
          <span className="btn-inner--text" >Update</span>
        </Button>: <Button className="btn-icon btn-3 mt-5" color="primary" onClick={ handleSubmit}  >
          <span className="btn-inner--icon">
          <i className="ni ni-check-bold" />
           </span>
          <span className="btn-inner--text" >Upload</span>
        </Button>}
        </Card>
    )
}

export default ColorSelector;
