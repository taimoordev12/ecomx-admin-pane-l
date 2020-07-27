import React from 'react'
import {Link} from 'react-router-dom'
import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    
    
  } from "reactstrap";
  import axios from 'axios';

const deleteCatagory =(id)=> {
  axios.delete('/api/catagories/'+id)
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
const updateCatagory =(id,status)=> {
  console.log(status);
  axios.patch('/api/catagories/approve/'+id,{status})
  .then((res)=>{
    console.log(res);
    if(res.data.msg==0){
      window.location.reload(false);
        
    } else {
      alert('delete failed please contact support');
    }
     

  }

  );
}

 const SingleCatagory=({title, imageUrl,status,products,_id})=> {

    return (
        <tr>
        <th scope="row">
           
             
            
            <Media >
              <span className="mb-0 text-sm">
    <Link > {title}</Link>
              </span>
            </Media>
          
        </th>
<td >{products.length}</td>
        <td>
    <p>{status? 'published':'unpublished'}</p>
        </td>
        <td className='text-center'>
<img src={imageUrl}  className='w-25' alt=""/> 
        </td>
       
        <td className="text-right">
          <UncontrolledDropdown>
            <DropdownToggle
              className="btn-icon-only text-light"
              href="#pablo"
              role="button"
              size="sm"
              color=""
              onClick={e => e.preventDefault()}
            >
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem   onClick={() => deleteCatagory(_id,status)}   >
               Delete Catagory
              </DropdownItem>

              <DropdownItem
                onClick={() => updateCatagory(_id,status.toString())}   >
                {status?'Unpublish':'Publish'} Catagory
              </DropdownItem>
            
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    )
}

export default SingleCatagory;
