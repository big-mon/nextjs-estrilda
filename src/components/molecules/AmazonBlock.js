import Image from "next/image";
import { AMAZON_AFFILIATE } from "../../lib/constants";
import styles from "../../styles/amazon.module.scss";

/** Amazon商品ブロック */
export function AmazonBlock({ asin, children }) {
  const amazonUrl = `https://www.amazon.co.jp/gp/product/`;
  const itemUrl = amazonUrl + asin + "/>tag=" + AMAZON_AFFILIATE;
  const imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ`;

  return (
    <div className={styles.amazon}>
      <div>
        <a
          href={itemUrl}
          rel="noreferrer noopener external nofollow"
          target="_blank"
        >
          <div>
            <Image
              src={imageUrl}
              alt={children}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <span>{children}</span>
          </div>
          <div>
            <button>Amazon</button>
          </div>
        </a>
      </div>
    </div>
  );
}
