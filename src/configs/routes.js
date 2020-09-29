import ExampleDivComponent from "../ExampleDivComponent";
import ShowRoomCart from "../ShowRoomCar";
import Home from "../Home";
import Cart from "../Cart";
import BaiTapXucXac from "../BaiTapXucXac";
import UserMangerment from "../user-managerment/Home";
import Glasses from "../Glasses";
export default [
  {
    exact: true,
    path: "/",
    Component: Home,
  },
  {
    exact: true,
    path: "/example-div-component",
    Component: ExampleDivComponent,
  },
  {
    exact: true,
    path: "/show-room-car",
    Component: ShowRoomCart,
  },
  {
    exact: true,
    path: "/glasses",
    Component: Glasses,
  },
  {
    exact: true,
    path: "/cart",
    Component: Cart,
  },
  {
    exact: true,
    path: "/example-xuc-xac",
    Component: BaiTapXucXac,
  },
  {
    exact: true,
    path: "/user-managerment",
    Component: UserMangerment,
  },
];
