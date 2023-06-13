import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <p>{nombre}</p>
        <img className='imgProducto' src={img} alt={nombre}/>
        <p>${precio}</p>
        {
          //<button className='btnProducto'> Ver Detalles </button>
        }
        <Link to={`/item/${id}`}>
          <button className='btnProducto'>Comprar</button>
        </Link>
    </div>
  )
}

export default Item