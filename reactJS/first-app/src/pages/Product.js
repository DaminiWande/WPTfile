import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { useSelector } from "react-redux";

export function Product() {
    const location = useLocation()
    const [products, setProducts] = useState([])
    const user=useSelector((state)=>state.loginReducer.user)

    useEffect(() => {
        setProducts([
            { name: "Bag 1", price: "600", image: "bag1.jpg" },
            { name: "Bag 2", price: "600", image: "bag2.jpg" },
            { name: "Bag 3", price: "600", image: "bag3.jpg" },
            { name: "Bag 4", price: "600", image: "bag4.jpg" },
            { name: "Bag 5", price: "600", image: "bag5.jpg" },

        ])
    }, [])

    return (<>
        <Header />
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <svg id="wave" style={{ transform: "rotate(0deg)", transition: "0.3s" }} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}} fill="url(#sw-gradient-0)" d="M0,196L26.7,179.7C53.3,163,107,131,160,138.8C213.3,147,267,196,320,212.3C373.3,229,427,212,480,245C533.3,278,587,359,640,343C693.3,327,747,212,800,171.5C853.3,131,907,163,960,187.8C1013.3,212,1067,229,1120,245C1173.3,261,1227,278,1280,285.8C1333.3,294,1387,294,1440,285.8C1493.3,278,1547,261,1600,253.2C1653.3,245,1707,245,1760,204.2C1813.3,163,1867,82,1920,89.8C1973.3,98,2027,196,2080,196C2133.3,196,2187,98,2240,81.7C2293.3,65,2347,131,2400,187.8C2453.3,245,2507,294,2560,277.7C2613.3,261,2667,180,2720,155.2C2773.3,131,2827,163,2880,155.2C2933.3,147,2987,98,3040,130.7C3093.3,163,3147,278,3200,310.3C3253.3,343,3307,294,3360,236.8C3413.3,180,3467,114,3520,138.8C3573.3,163,3627,278,3680,310.3C3733.3,343,3787,294,3813,269.5L3840,245L3840,490L3813.3,490C3786.7,490,3733,490,3680,490C3626.7,490,3573,490,3520,490C3466.7,490,3413,490,3360,490C3306.7,490,3253,490,3200,490C3146.7,490,3093,490,3040,490C2986.7,490,2933,490,2880,490C2826.7,490,2773,490,2720,490C2666.7,490,2613,490,2560,490C2506.7,490,2453,490,2400,490C2346.7,490,2293,490,2240,490C2186.7,490,2133,490,2080,490C2026.7,490,1973,490,1920,490C1866.7,490,1813,490,1760,490C1706.7,490,1653,490,1600,490C1546.7,490,1493,490,1440,490C1386.7,490,1333,490,1280,490C1226.7,490,1173,490,1120,490C1066.7,490,1013,490,960,490C906.7,490,853,490,800,490C746.7,490,693,490,640,490C586.7,490,533,490,480,490C426.7,490,373,490,320,490C266.7,490,213,490,160,490C106.7,490,53,490,27,490L0,490Z"></path></svg>
        {/* <h1>Product {location.state.name}</h1> */}
        <div>
            {products.map((p, i) => {
                return <ProductCard
                    key={i}
                    name={p.name}
                    price={p.price}
                    image={p.image} />
            })}
        </div>
        <Footer />
    </>)
}