import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Body from "../layout/Body";
import Produtos from "../pages/Produtos"

export default function AppRoutes() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Body />}>
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/form"element={<Form />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}