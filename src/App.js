import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
//import CounterContainer from "./components/Counter/CounterContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/Cart/CartContainer";
import styles from "./App.module.css";
//import { PropagateLoader } from "react-spinners";
import CartContextProvider from "./context/CartContext";
import { FormCheckOutContainer } from "./components/FormCheckOut/FormCheckOutContainer";
import FooterContainer from "./components/Footer/FooterContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className={styles.container}>
          <Routes>
            <Route
              path="/*"
              element={
                <div className={styles.content}>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/cart" element={<CartContainer />} />
                    <Route
                      path="/checkout"
                      element={<FormCheckOutContainer />}
                    />
                    <Route
                      path="/category/:categoryName"
                      element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                  </Routes>
                </div>
              }
            />
          </Routes>
          <FooterContainer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

//Si quiero que ItemListContainer, etc. muestren tb navbar debo usar etiqueta de apertura y cierre. Se envía por default una prop llamada children con la info de los hijos. Ej: <Navbar> <<Navbar/>
//Para que los hijos se renderizen, al final del return y antes del último div del componente poner {children} o bien <Outlet/>.

//BrowserRouter es wraper del resto. A su vez, incluye el wraper Routes. En las rutas van los Container.
