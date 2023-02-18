import styles from "./order-sum.module.css"
import heroimage from "../assets/illustration-hero.svg"
import iconmusic from "../assets/icon-music.svg"
function OrderSum(){
    return(
        <div className={styles.box}>
            <img src={heroimage} alt=""/>
            <div className={styles.summary}>
                <h2>Order Summary</h2>
                <div className={styles.subtitle}>
                    <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                </div>
                <div className={styles.plan}>
                    <div className={styles.left}>
                        <div className={styles.icons}>
                            <img src={iconmusic} alt=""/>
                        </div>
                        <div className={styles.flex}>
                            <h5>Annual Plans</h5>
                            <p>$59.99/year</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <a href="">Change</a>
                    </div>
                </div>
                <div className={styles.flex}>
                    <button className={styles.main}>Proceed to payment</button>
                    <button className={styles.nothing}><p>Cancel Order</p></button>
                </div>
            </div>
        </div>
    )
}

export default OrderSum