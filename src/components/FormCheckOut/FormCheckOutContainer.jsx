import { useContext, useState } from "react";
import { FormCheckOut } from "./FormCheckOut";
import styles from "./FormCheckOut.module.css";
import { useFormik } from "formik";
import { database } from "../../firebaseConfig";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
export const FormCheckOutContainer = () => {
  const { cart, purchaseTotal, clearCart } = useContext(CartContext);
  let total = purchaseTotal();
  const [orderId, setOrderId] = useState(null);
  const checkOutFn = (data) => {
    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };
    const ordersCollection = collection(database, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));
    cart.map((product) =>
      updateDoc(doc(database, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );
    //updateDoc hace un patch.
    clearCart();
  };
  const { handleSubmit, handleChange, errors, values, isValid } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      confirmarEmail: "",
      email: "",
      telefono: "",
    },
    onSubmit: checkOutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(20, "El nombre no puede superar los 20 caracteres"),
      apellido: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("Este campo es obligatorio"),
      confirmarEmail: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("email")], "Los e-mails ingresados no coinciden"),
      telefono: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^\d{7,}$/, {
          message: "Número de teléfono invalido",
        }),
    }),
    validateOnChange: false,
  });

  // código para validar una contraseña espantosa /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
  return (
    <div className={styles.goodbye}>
      {orderId ? (
        <>
          {" "}
          <h1>¡Gracias por su compra! </h1>
          <h3>Su código de orden es {orderId}</h3>
        </>
      ) : (
        <FormCheckOut
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
          isValid={isValid}
        />
      )}
    </div>
  );
};
