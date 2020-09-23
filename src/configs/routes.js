import ExampleDivComponent from "../ExampleDivComponent";
import ShowRoomCart from "../ShowRoomCar";
import Home from "../Home";
import Cart from "../Cart";
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
    path: "/cart",
    Component: Cart,
  },
];
