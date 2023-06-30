import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import { ContextProvider } from "./Components/utils/global.context";


function App() {
  return (
    <ContextProvider>
        <Navbar/>
        <Outlet/>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.contact + '/form'} element={<Form />} />
          <Route path={routes.detail} element={<Detail />} />
          <Route path={routes.favs} element={<Favs />} />
        </Routes>
        <Footer />
    </ContextProvider>
  );
}

export default App;
