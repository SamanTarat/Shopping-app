import Card from "../components/Card";
import {useProducts} from "../contexts/ProductContext"
import styles from "../styles/ProductPage.module.css"
import Loader from "../components/Loader"
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { FaListUl } from "react-icons/fa"

function ProductPage() {

  const products = useProducts();
  console.log(products)

  const [ search, setSearch ] = useState("");

  const searchHandler = () => {
    console.log("search")
  }

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    console.log(category)
    if (tagName !== "LI") return;
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Search ..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
        <button onClick={searchHandler}><ImSearch /></button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map( product => <Card key={product.id} data={product}/>)}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <div>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage