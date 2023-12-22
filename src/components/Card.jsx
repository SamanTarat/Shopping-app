import { Link } from "react-router-dom";
import { shortenText } from "../helpers/helper";
import { TbListDetails} from "react-icons/tb"
import { TbShoppingBagCheck} from "react-icons/tb"
import styles from "../styles/Card.module.css";

function Card({data}) {

    const { id, title , image , price } = data;

  return (
    <div className={styles.card}>
        <img src={image} alt={shortenText(title)}/>
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}><TbListDetails /></Link>
            <div>
                <button><TbShoppingBagCheck /></button>
            </div>
        </div>
    </div>
  )
}

export default Card