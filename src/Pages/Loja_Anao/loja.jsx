import { StrictMode } from "react";
import Header from "./components/header.jsx";
import Product from "./components/products.jsx";
import Services from "./components/services.jsx";
import Footer from "./components/footer.jsx";
export default function Loja() {

    return(
        <>
        <StrictMode>
            <Header />
            <Services />
            <Product />
            <Footer />
        </StrictMode>
        </>
    )
}