export default function ProductCard({title, imageUrl, price}){
    return <div className="card">
        <img src={imageUrl} alt={title}/>
        <h3>{title}</h3>
        <h3>${price}</h3>
    </div>
}