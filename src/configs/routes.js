import ExampleDivComponent from "../ExampleDivComponent";
import Home from "../Home";
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
];
