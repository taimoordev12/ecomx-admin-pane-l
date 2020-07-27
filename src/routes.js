
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Banners from "views/examples/Banners.js";
import Setting from 'views/examples/Setting';
import Products from 'views/examples/Products';
import Catagories from 'views/examples/Catagories';

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/banners",
    name: "Banner Managment",
    icon: "ni ni-planet text-blue",
    component: Banners,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-pin-3 text-orange",
    component:Products ,
    layout: "/admin"
  },
  {
    path: "/Catagories",
    name: "Catagories",
    icon: "ni ni-pin-3 text-orange",
    component:Catagories ,
    layout: "/admin"
  },
  
  {
    path: "/analytics",
    name: "Analytics",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "orders",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  
  {
    path: "/setting",
    name: "Setting",
    icon: "ni ni-key-25 text-info",
    component: Setting,
    layout: "/admin"
  },
 
  {
    path: "/facebookshop",
    name: "Facebook Shop",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Setting",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  }
];
export default routes;
