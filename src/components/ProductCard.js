export default function ProductCard({title, image_url, price}){
    return <div className="card">
        <img src={image_url} alt={title}/>
        <h3>{title}</h3>
        <h3>${price}</h3>
    </div>
}