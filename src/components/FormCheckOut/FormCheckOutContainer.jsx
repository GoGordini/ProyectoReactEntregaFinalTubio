import { useContext, useState } from "react";
import { FormCheckOut } from "./FormCheckOut";

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
  console.log(orderId);
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: checkOutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres")
        .max(20, "El nombre no puede superar los 20 caracteres"),
      email: Yup.string()
        .email("El campo debe ser un email")
        .required("Este campo es obligatorio"),
      telefono: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^\d{7,}$/, {
          message: "Número de teléfono invalido",
        }),
    }),
    validateOnChange: false,
  });

  // /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
  return (
    <div>
      {orderId ? (
        <h1>¡Gracias por su compra! Su número de orden es {orderId}</h1>
      ) : (
        <FormCheckOut
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};
