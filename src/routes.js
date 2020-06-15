
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Banners from "views/examples/Banners.js";
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
    component: Maps,
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
    path: "/login",
    name: "Setting",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
 
  {
    path: "/facebookshop",
    name: "Facebook Shop",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
