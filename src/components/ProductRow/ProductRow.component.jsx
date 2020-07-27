import React from 'react'
import {Link} from 'react-router-dom';
import {
 
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
  } from "reactstrap";
const  ProductRow=({_id,name,price,description,weight})=> {
    return (
        <tr>
        <th scope="row">
           
             
            
            <Media >
              <span className="mb-0 text-sm">
               <Link to={`/orders/${_id}`} > {name}</Link>
              </span>
            </Media>
          
        </th>
<td>Rs {price}</td>
        <td>
          <Badge color="" className="badge-dot mr-4">
            <i className="bg-warning" />
            {description}
          </Badge>
        </td>
        <td>
<p>{weight}</p> 
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
              <DropdownItem
                
              >
               Delete Order
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Another action
              </DropdownItem>
              <DropdownItem
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </td>
      </tr>
    )
}

export default ProductRow;
