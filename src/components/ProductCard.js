export default function ProductCard({title, image_url, price}){
    return <div className="card">
        <h3>{title}</h3>
        <img src={image_url} alt={title}/>
        <p>{price}</p>
    </div>
}