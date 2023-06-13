import { useContext } from "react";
import './CartItem.css'
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="cartItem">
        <h4> {item.nombre} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: $ {item.precio} </p>
        <button className="miBtncart" onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem