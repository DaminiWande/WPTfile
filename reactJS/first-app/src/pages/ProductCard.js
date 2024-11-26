export function ProductCard({name,price,image}){
    return (<>
    <ul>
        <li>Name:{name}</li>
        <li>Price:{price}/-</li>
        <li>
        <img 
        src={require(`../assets/imgs/bags/${image}`)} height={300}/>
        </li>

    </ul>
    </>)
}