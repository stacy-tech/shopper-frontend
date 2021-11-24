import { Link } from 'react-router-dom'

export default function ProductCard({id, title, imageUrl, price}){
    console.log(id)
    return <div className="card">
        <Link to={`/products/${id}`}><img src={imageUrl} alt={title}/></Link>
        <Link to={`/products/${id}`}><h3>{title}</h3></Link>
        <h3>${price}</h3>
    </div>
}