import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Formulario from "../pages/Form";

export default function Body() {
  return (
    <>
      <Formulario />

      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
