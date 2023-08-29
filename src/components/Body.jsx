import classes from "./Body.module.css";
import { useSelector } from "react-redux";

const availableProducts = [
    {
        title: "Grocery",
        image: "public\\grocery.webp"
    },
    {
        title: "Mobiles",
        image: "public\\mobile.webp"
    },
    {
        title: "Fashion",
        image: "public\\fashion.webp"
    },
    {
        title: "Electronics",
        image: "public\\electronic.webp"
    },
    {
        title: "Home & Furniture",
        image: "public\\home.webp"
    },
    {
        title: "Appliances",
        image: "public\\appliances.webp"
    },
    {
        title: "Travel",
        image: "public\\travel.webp"
    },
    {
        title: "Beauty, Toys & More",
        image: "public\\beauty.webp"
    },
    {
        title: "Two Wheelers",
        image: "public\\bikes.webp"
    }
];

const electronicProducts = [
    {
        title: "DSLR",
        price: 40999,
        image: "public\\electronics\\dslr.webp"
    },
    {
        title: "Monitor",
        price: 15897,
        image: "public\\electronics\\monitor.webp"
    },
    {
        title: "Printer",
        price: 5998,
        image: "public\\electronics\\printer.webp"
    },
    {
        title: "Projector",
        price: 14999,
        image: "public\\electronics\\projector.webp"
    },
    {
        title: "Trimmer",
        price: 1599,
        image: "public\\electronics\\trimmer.webp"
    },
];

const productList = [
    {
        title: "Bagpack",
        price: 1999,
        image: "public\\list\\bagpack.webp"
    },
    {
        title: "Duracell",
        price: 198,
        image: "public\\list\\cell.webp"
    },
    {
        title: "Cycle",
        price: 7899,
        image: "public\\list\\cycle.webp"
    },
    {
        title: "Guitar",
        price: 4569,
        image: "public\\list\\guitar.webp"
    },
    {
        title: "Helmet",
        price: 3799,
        image: "public\\list\\helmet.webp"
    },
    {
        title: "Pen",
        price: 150,
        image: "public\\list\\pens.webp"
    },
    {
        title: "Puma Sneakers",
        price: 2399,
        image: "public\\list\\shoe.webp"
    },
    {
        title: "Adjustable Spring Hand",
        price: 768,
        image: "public\\list\\spring-hand.webp"
    },
    {
        title: "Teddy Bear",
        price: 1777,
        image: "public\\list\\teddy.webp"
    },
    {
        title: "Thread Mill",
        price: 24999,
        image: "public\\list\\threadmill.webp"
    },
    {
        title: "Tyre",
        price: 4849,
        image: "public\\list\\tyre.webp"
    },
]

const Body = () => {

    const searched = useSelector(state => state.search);

    const filteredList = productList.filter((product) => {
        return product.title.toLowerCase().indexOf(searched.toLowerCase()) !== -1;
    });

    const addItemToCart = (product) => {
        console.log(product);
    }

    return (
        <>
            {!searched && <div className={classes.body}>
                {availableProducts.map((product) => (
                    <ul key={product.title}>
                        <li><img src={product.image} alt="" /></li>
                        <li className={classes.title}>{product.title}</li>
                    </ul>
                ))}
            </div>}
            {!searched && <div className={classes.products}>
                {electronicProducts.map((product) => (
                    <ul key={product.title}>
                        <li>{product.title}</li>
                        <li><img src={product.image} alt="" /></li>
                        <li className={classes.title}>₹ {product.price}/-<button onClick={() => { addItemToCart(product) }}>Add to Cart</button></li>
                    </ul>
                ))}
            </div>}
            <div className={classes.list}>
                {filteredList.map((product) => (
                    <ul key={product.title}>
                        <li>{product.title}</li>
                        <li><img src={product.image} alt=""/></li>
                        <li className={classes.title}>₹ {product.price}/-<button onClick={() => { addItemToCart(product) }}>Add to Cart</button></li>
                    </ul>
                ))}
            </div>
        </>
  )
}

export default Body;
