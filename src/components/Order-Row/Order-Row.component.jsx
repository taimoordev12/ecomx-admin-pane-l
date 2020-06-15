import React from 'react'
import {DeleteOrder} from '../../Redux/OrderReducer/OrderActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Badge,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    
  } from "reactstrap";

 const OrderRow= ({firstName,checkoutTotal,status,paymentType,_id,deleteOrder})=>  {
    return (
        <tr>
                      <th scope="row">
                         
                           
                          
                          <Media >
                            <span className="mb-0 text-sm">
                             <Link to={`/orders/${_id}`} > {firstName}</Link>
                            </span>
                          </Media>
                        
                      </th>
    <td>Rs {checkoutTotal}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {status}
                        </Badge>
                      </td>
                      <td>
    <p>{paymentType}</p> 
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
                              
                              onClick={()=> deleteOrder(_id)}
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

const mapDispatchToprops= dispatch=>({
  deleteOrder:_id=>dispatch(DeleteOrder(_id))
});
export default connect(null,mapDispatchToprops)(OrderRow);