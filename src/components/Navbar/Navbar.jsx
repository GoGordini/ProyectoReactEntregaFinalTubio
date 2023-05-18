import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import logoHappySkin from "../../assets/images/logohappyskin.png";
import { Outlet, Link, NavLink } from "react-router-dom";


const Navbar = () => {
   return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            className={`${styles.image} `}
            src={logoHappySkin}
            alt="Logo de Happy Skin"
          />
        </Link>
        
        <div className={styles.nav}>
          <NavLink
            to="/category/Guashas"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
          >
            GUASHAS
          </NavLink>
          {/* Link hace lo mismo que <a>, pero sin recargar la página. */}
          <NavLink
            to="/category/Rollers"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
          >
            ROLLERS
          </NavLink>
          <NavLink
            to="/category/Sets"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notActive
            }
          >
            SETS
          </NavLink>
        </div>
        
        <CartWidget />
        
      </div>
      <Outlet />
      {/* Esto es para pasar las props de los hijos. Se pone donde quiero renderizar los componenentes. El footer va debajo del outlet.*/}
    </div>
  );
};

export default Navbar;

// // Para crear un componente (obs: es una función):
// 1) en src crear una carpeta "components"
// 2) dentro de components crear una carpeta con el nombre del componente -con mayúscula-;
// 3) dentro de esa carpeta, un archivo con el mismo nombre -con mayúscula- .jsx
// 4) se le puede poner tb un archivo idem pero .css
// 5) en el .jsx va un const y el nombre del componenente, función flecha, y en el return algo.
// 6) post función, se exporta por default con export default "Componente"
// 7) Luego ir a App.js para usarlo llamando el componente dentro del div ClassName= "App" (hay que importarlo ahí, según el método para exportar es cómo se importa luego pero VS lo hace solo).
// // Ejemplo. En Navbar.jsx va:
// const Navbar = () => {
//     return <h1> Este es el NavBar</h1>;
//   };

//   export default Navbar;

// // y en App.js va:
// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <div className="App">
//       <h1>Home</h1>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

// Class se reemplaza por ClassName.
