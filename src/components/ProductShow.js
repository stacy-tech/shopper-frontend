import { useParams } from 'react-router-dom'

function ProductShow(props){
    const routeId = useParams().id
    return <h1>You're in the show page</h1>
}

export default ProductShow