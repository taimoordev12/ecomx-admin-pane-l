import React,{useState, useEffect} from 'react'
import axios from 'axios';

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Input,
    Label
  } from "reactstrap";

const SeoSettings =()=> {

    const [SeoData, setSeoData] = useState({
        title:'',
        keywords:'',
        description:'',
        id:'',
    });

    const [DataSubmissionFlag, setDataSubmissionFlag] = useState(false);

    

    const handleChange = event => {
        const {name, value} = event.target;
        setSeoData({...SeoData,
          [name]:value});
         
      }

      const  HandleSubmit =  ()=> {
        const SendData = {
            title:SeoData.title,
            keywords:SeoData.keywords,
            description:SeoData.description,
            approval:true

        } 

        console.log(SendData);
        const config = {
            headers: { 'Content-Type': 'application/json',
         },
    
    
         };
        
        axios.post("/api/seo",SendData,config
        ).then(res=>{
          if(res.data.success===1){
            alert('data uploaded');

           setSeoData({...SeoData});


           }
        })
 
      }
      useEffect(() => {
        axios.get('/api/seo')
    .then(function (res) {
      // handle success
      console.log(res.data);
     res.data.map(data=>{setDataSubmissionFlag(data.approved);setSeoData({
        title:data.Title,
        description:data.description,
        keywords:data.Keywords,
        id:data._id
    
    })});
     })
    .catch(function (error) {
  
    })
    .finally(function () {
      // always executed
    });
      },[]);

      const HandleUpdate =()=> {
        const SendData = {
            title:SeoData.title,
            keywords:SeoData.keywords,
            description:SeoData.description,
            approval:true

        } 

        console.log(SendData);
        const config = {
            headers: { 'Content-Type': 'application/json',
         }}
        axios.patch("/api/seo/"+SeoData.id,SendData,config
        ).then(res=>{
          if(res.data.success===1){
              alert('data updated');
              setSeoData({...SeoData});

            console.log(SendData);

           }
        })
     
      }


    return (
        <>
        <Card >
          
          <CardBody >
            <CardTitle className='text-center'><h1 className="display-4">SEO Settings</h1></CardTitle>
            <form onSubmit={event=>event.preventDefault()}>
                <Label >Title</Label>
            <Input
                  id="Title"
                  placeholder="title"
                  type="Text"
                  name='title'

                  value={SeoData.title}
                  onChange={handleChange}

                />
                <Label className='mt-3'>Keywords</Label>
                    <Input
                  id="Keyword"
                  placeholder="Enter comma seperated values cars,wagons,carts"
                  type="Text"
                  name='keywords'
                  value={SeoData.keywords}
                  onChange={handleChange}
                />
             <Label className='mt-3'>Description</Label>

                  <Input
                  id="Description"
                  placeholder="Enter general description of your store"
                  type="textarea"
                  value={SeoData.description}
                  name='description'
                  onChange={handleChange}
                />
                <div className="text-center">
                {DataSubmissionFlag? <Button className="btn-icon btn-3 mt-5" color="primary" onClick={HandleUpdate}  >
          <span className="btn-inner--icon">
          <i className="ni ni-ungroup" />
           </span>
          <span className="btn-inner--text" >Update</span>
        </Button>: <Button className="btn-icon btn-3 mt-5" color="primary" onClick={HandleSubmit}  >
          <span className="btn-inner--icon">
          <i className="ni ni-check-bold" />
           </span>
          <span className="btn-inner--text" >Upload</span>
        </Button>}
        </div>
          
            </form>
            
          </CardBody>
        </Card>
      </>
 
    )
}

export default  SeoSettings;