import React,{useState,useEffect} from 'react'
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';




import {
   Card,
    Input,
     Badge,
   Label,
   Button,
   Spinner
  } from "reactstrap";
import RichEditor from 'components/TextEditor/TextEditor.component';
  
   
 


const NewProduct=()=> {
  
    
     const [variant1Check, setVariant1Check] = useState(false);
     const [discountPriceFlag, setdiscountPriceFlag] = useState(false);

    const [variant2Check, setVariant2Check] = useState(false);
    const [catagoryData, setCatagoryData] = useState([]);
    const [selectedCatagory, setSelectedCatagories] = useState([]);
    const [CatagoryOptionsData, setCatagoryOptionsData] = useState([]);
    const [ProductData, setProductData] = useState({});
    const [ProductImages, setProductImages] = useState([]);
    const [ProductDiscription, setProductDiscription] = useState({});
    const [variantOptions, setvariantOptions] = useState([]);
    const [variant1Options, setvariant1Options] = useState([]);
    const [LoadingOption, setLoadingOption] = useState(false);



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
     const selectedCatagoryDataModification=()=> {
         const finalSelectedCatagoryData =[];
         selectedCatagory.map(data=>finalSelectedCatagoryData.push(data.label));
          return finalSelectedCatagoryData;
    }
     
   const handleVariantOptionChange = (newValue , actionMeta ) => {
      console.log(newValue);
      const newValueArray=[];
      newValue.map(data=>newValueArray.push(data.label));
      setvariantOptions(newValueArray);

    };
    const handleVariantOptionChange1 = (newValue , actionMeta ) => {
      console.log(newValue);
      const newValueArray=[];
      newValue.map(data=>newValueArray.push(data.label));
      setvariant1Options(newValueArray);
    
    };
 
  const  HandleSubmit =  event=> {
    event.preventDefault();
    setLoadingOption(true);
    console.log('im clicked');
  const CatagoryArrayData=selectedCatagoryDataModification();




 
    
     const data=new FormData();
    
   
      data.append('name',ProductData.name); 
      data.append('description',ProductDiscription);   

      data.append('price',ProductData.price); 
      data.append('Discountprice',ProductData.Discountprice); 
      data.append('inventory',ProductData.inventory); 

      data.append('Variant1',ProductData.Variant1);

      for (const Voptions0 of variantOptions) {
        data.append('Variant1options',Voptions0 ); 
      }

     data.append('Variant1price',ProductData.Variant1price); 

     data.append('Variant1Discountprice',ProductData.Variant1Discountprice); 

      data.append('Variant2',ProductData.Variant2);

      for (const Voptions of variant1Options) {
        data.append('Variant2options',Voptions); 
      }
  

      data.append('variant2price',ProductData.variant2price); 

     data.append('variant2Discountprice',ProductData.variant2Discountprice); 
     if(catagoryData.length < 1 ) {
      data.append('CatagoryData',[catagoryData]); 
    
    }
      else{

     for (const CatagoryData of CatagoryArrayData) {
      data.append('CatagoryData',CatagoryData);
     }
    }


     data.append('weight',ProductData.weight); 

     for (const file of ProductImages) {
      data.append('ProductImages',file);
     }
     const config = {
        headers: { 'Content-Type': 'multipart/form-data',
     },


     };

    

     axios.post("/api/products",data,config
  ).then(res=>{
    if(res.data.success===1){
      setLoadingOption(false);
    }
  })



     
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
        setProductData({...ProductData,
          [name]:value});
         
      }
   const   handleCatagoryChange = (selectedOptions) => {
    setSelectedCatagories(selectedOptions);
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
               {discountPriceFlag ?<Badge color="danger">Discount price can't be greater than actual price</Badge>:''}  
               <Label className="mt-3"><strong>Enter Inventory (No of products in stock)</strong> </Label>
       
                   <Input
                  className="form-control-alternative mb-3 "
                  id="inventory"
                  placeholder="10 etc"
                  type="number"
                  name="inventory"
                  value={ProductData.inventory}
                  onChange={handleChange}
                />  

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
       <Label>Enter values e.g(blue,green,red)</Label>
       <CreatableSelect
        isMulti
        onChange={handleVariantOptionChange}
      />
     <div className="d-flex">
      <Input
                  className="form-control-alternative mb-3 "
                  id="variant1price"
                  placeholder="Enter Variant  Price"
                  type="number"
                  name="Variant1price"
                  value={ProductData.Variant1price}
                  onChange={handleChange}
                />   
                  <Input
                  className="form-control-alternative mb-3 "
                  id="variant1Discountprice"
                  placeholder="Enter Discounted Variant Price"
                  type="number"
                  name="Variant1Discountprice"
                  value={ProductData.Variant1Discountprice}
                  onChange={handleChange}
                />   
                </div>

                <Label className="mt-3"><strong>Enter Inventory for variant (No of products in stock)</strong> </Label>
       
       <Input
      className="form-control-alternative mb-3 "
      id="Variant1inventory"
      placeholder="10 etc"
      type="number"
      name="Variant1inventory"
      value={ProductData.Variant1inventory}
      onChange={handleChange}
    />  
                
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
       <CreatableSelect
        isMulti
        onChange={handleVariantOptionChange1}
      />
     <div className="d-flex">
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
               <Label className="mt-3"><strong>Enter Inventory for variant 2 (No of products in stock)</strong> </Label>
       
       <Input
      className="form-control-alternative mb-3 "
      id="Variant2inventory"
      placeholder="10 etc"
      type="number"
      name="Variant2inventory"
      value={ProductData.Variant2inventory}
      onChange={handleChange}
    />  
        </div>
        :''}
               <Label className="  mt-3 " ><strong> Assign this product to a catagory</strong></Label>
               <Select
     isMulti
    name="colors"
    value={selectedCatagory}

    options={CatagoryOptionsData}
    className="basic-multi-select"
    classNamePrefix="select"
     onChange={handleCatagoryChange}
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
            {LoadingOption?<Spinner color="primary" />:<i className="ni ni-check-bold" />}
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