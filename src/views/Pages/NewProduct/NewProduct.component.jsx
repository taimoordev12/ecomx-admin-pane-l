import React,{useState,useEffect} from 'react'
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import MultiSelect from "react-multi-select-component";



import {
   Card,
    Input,
   Form,
   Label,
   Button
  } from "reactstrap";
import RichEditor from 'components/TextEditor/TextEditor.component';
  
   
 


const NewProduct=()=> {
  
    
     const [variant1Check, setVariant1Check] = useState(false);
    const [variant2Check, setVariant2Check] = useState(false);
    const [catagoryData, setCatagoryData] = useState([]);
    const [selectedCatagory, setSelectedCatagories] = useState([]);
    const [CatagoryOptionsData, setCatagoryOptionsData] = useState([]);
    const [ProductData, setProductData] = useState({});
    const [ProductImages, setProductImages] = useState([]);
    const [ProductDiscription, setProductDiscription] = useState({});

    const currentvalue=(Texthtml)=>{
        setProductDiscription(Texthtml);
        //setProductData({description:Texthtml});
        } 

     const onDrop=(picture)=> {
        setProductImages(
            ProductImages.concat(picture)
            );
        }

    const optionFunction=(apidata)=> {
        apidata.data.map(data=>catagoryData.push(data.title));
        catagoryData.map(data=>CatagoryOptionsData.push({label:data,value:data}));
        setCatagoryData([...catagoryData]);
        setCatagoryOptionsData([...CatagoryOptionsData]);
        
    
    
     }

    //  let data=new FormData();
    //  data.append('category',formsInputs.vehicleType);
     
    // for (const file of adPhotos.images) {
    //  data.append('images',file);
    // }
  const  HandleSubmit =  event=> {
    event.preventDefault();
    console.log('im clicked');
    let data=new FormData();

     data.append('name',ProductData.name); 
  //  data.append('description',ProductDiscription);   

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    console.log(ProductData);
    axios.post('/api/products',{
        ...ProductData
    },config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log('im clicked');

 
      
      
       
        }
    useEffect(() => {
        axios.get('/api/catagories')
    .then(function (res) {
      // handle success
       optionFunction(res);
 
     })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
      },[]);
     const handleChange = event => {
        const {name, value} = event.target;
        setProductData({[name]:value});
      }

    

      return (
        
        <div className="container  pb-5">
            <div className="row">
                <div className="col"></div>
                <div className="col-md-8   pb-5 mt-5">
                    <Card className="  pt-3 pb-5  pl-3 pr-3">
                    <form onSubmit={HandleSubmit}>
                        <Label>
                           <strong>Product Name</strong> 
                        </Label>
                    <Input
                  className="form-control-alternative mb-3 "
                  id="name"
                  placeholder="Enter Product Name"
                  type="text"
                  name="name"
                  value={ProductData.name}
                  onChange={handleChange}
                />
                   <Label>
                       <strong> Describe your Product</strong>
                    </Label>
                     <RichEditor currentval={currentvalue} />
                       <Label><strong>Upload Images</strong></Label>
                     <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText='Choose images'
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                <Label className="mt-3"><strong>Enter Price</strong> </Label>

               <div className="d-flex mt-3">
               <Input
                  className="form-control-alternative mb-3 "
                  id="price"
                  placeholder="Enter Price"
                  type="number"
                  name="price"
                  value={ProductData.price}
                  onChange={handleChange}
                />  
                 <Input
                  className="form-control-alternative mb-3 "
                  id="Discountprice"
                  placeholder="Enter Discount Price"
                  type="number"
                  name="Discountprice"
                  value={ProductData.Discountprice}
                  onChange={handleChange}
                />  
               </div>
               <div className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            id="customCheck1"
            type="checkbox"
            onChange={e => setVariant1Check(e.target.checked)}
          />
          <label className="custom-control-label" htmlFor="customCheck1">
           <strong>Does your product have variants ?</strong>
          </label>
        </div>
        {variant1Check?
        
        <div className="">
       <Label><strong>Enter variant label</strong></Label>

          <Input
          className="form-control-alternative mb-3 "
          id="Variant1"
          placeholder="Enter Variant title"
          type="text"
          name="Variant1"
          value={ProductData.Variant1}
          onChange={handleChange}
        />  
       <Label>Enter comma seperated values e.g(blue,green,red)</Label>
       <Input
       className="form-control-alternative mb-3 "
       id="Variant1options"
       placeholder="blue,green,red"
       type="text"
       name="Variant1options"
       value={ProductData.Variant1options}
          onChange={handleChange}

     /> <div className="d-flex">
      <Input
                  className="form-control-alternative mb-3 "
                  id="variant1price"
                  placeholder="Enter Variant  Price"
                  type="number"
                  name="variant1price"
                  value={ProductData.variant1price}
                  onChange={handleChange}
                />   
                  <Input
                  className="form-control-alternative mb-3 "
                  id="variant1Discountprice"
                  placeholder="Enter Discounted Variant Price"
                  type="number"
                  name="variant1Discountprice"
                  value={ProductData.variant1Discountprice}
                  onChange={handleChange}
                />   
                </div>
         <div className="custom-control custom-checkbox mb-3 mt-3">
          <input
            className="custom-control-input"
            id="customCheck2"
            type="checkbox"
            onChange={e => setVariant2Check(e.target.checked)}

           />
          <label className="custom-control-label mt-3 " htmlFor="customCheck2">
           <strong>Do you want to add another Variant ?</strong>
          </label>
        </div>
     </div>
             
        :''} 
        {variant2Check?
        <div className="">
                   <Label  className="  mt-3 " ><strong>Enter variant label</strong></Label>

           <Input
          className="form-control-alternative mb-3 "
          id="Variant2"
          placeholder="Enter Variant title"
          type="text"
          name="Variant2"
          value={ProductData.Variant2}
          onChange={handleChange}
        />  
       <Label className="  mt-3 " >Enter comma seperated values e.g(small,large,medium)</Label>
       <Input
       className="form-control-alternative mb-3 "
       id="Variant2options"
       placeholder="small,large,medium"
       type="text"
       name="Variant2options"
       value={ProductData.Variant2options}
       onChange={handleChange}
     />  <div className="d-flex">
     <Input
                 className="form-control-alternative mb-3 "
                 id="variant2price"
                 placeholder="Enter Variant  Price"
                 type="number"
                 name="variant2price"
                 value={ProductData.variant2price}
                 onChange={handleChange}
                 
               />   
                 <Input
                 className="form-control-alternative mb-3 "
                 id="variant2Discountprice"
                 placeholder="Enter Discounted Variant Price"
                 type="number"
                 name="variant2Discountprice"
                 value={ProductData.variant2Discountprice}
                 onChange={handleChange}
               />   
               </div>
        </div>
        :''}
               <Label className="  mt-3 " ><strong> Assign this product to a catagory</strong></Label>
       <MultiSelect
        options={CatagoryOptionsData }
        value={selectedCatagory}
        onChange={setSelectedCatagories}
        labelledBy={"Select"}
      />
       <Label className="mt-3 ">   <strong>Specify Weight (optional)</strong>    </Label>
                    <Input
                  className="form-control-alternative mb-3 "
                  id="weight"
                  placeholder="Enter Product Name"
                  type="number"
                  name="weight"
                  value={ProductData.weight}
                  onChange={handleChange}
                />
          <div className="text-center">
          <Button className="btn-icon btn-3 mt-5" color="success" type="submit"  >
          <span className="btn-inner--icon">
            <i className="ni ni-check-bold" />
          </span>
          <span className="btn-inner--text">All done</span>
        </Button>
        </div>
       
                    </form>
                  

                    </Card>
                </div>
            <div className="col"></div>
            </div>
        </div>
    )

   
}


export default NewProduct;