import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";

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
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = { name: "Rakesh Tiwari" };
    setUserName(data.name);
  }, []);
  return (
    <div className="container">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
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
