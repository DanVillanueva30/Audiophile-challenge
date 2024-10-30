import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import IndexView from "./views/IndexView";
import CategoryView from "./views/CategoryView";
import ProductDetails from "./components/ProductDetails";
import CheckOutView from "./views/CheckOutView";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <AppLayout /> }>
                    <Route path="/" index element={ <IndexView/> } />
                    <Route path="/:category"  element={ <CategoryView /> } />
                    <Route path="/:category/:productId" element={ <ProductDetails /> } /> 
                    <Route path="/checkout" element={ <CheckOutView /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}