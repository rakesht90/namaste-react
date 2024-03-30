import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React"
// );
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "we are in h1 tag1"),
//     React.createElement("h2", {}, "we are in h2 tag"),
//     React.createElement("h3", {}, "we are in h3 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "we are in h1 tag"),
//     React.createElement("h2", {}, "we are in h2 tag"),
//     React.createElement("h3", {}, "we are in h3 tag"),
//   ]),
// ]);
// jsx (is transpiled before it reaches the js engine)- parcel - babel
// const JsxHeading = () => (
//   <h1 id="heading" className="heading1">
//     Jsx heading
//   </h1>
// );
// console.log(parent);
// console.log(jsxHeading);
// const ReactComponent = () => (
//   <div id="container">
//     {JsxHeading()}
//     <h1 className="heading">Nameste React</h1>
//   </div>
// );

const Footer = () => {};
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      { path: "/about", element: <About /> },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
