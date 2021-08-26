import Image from "next/image";
import { AMAZON_AFFILIATE } from "./constants";
import styles from "../styles/article.module.scss";

/**
 * 独自のAmazon用商品ブロック記法をHTMLに変換
 * {{amazon asin="xxxxx" title="xxxxx"}}
 */
export function amazonBlockConvert(html) {
  const pattern = /<p>{{amazon asin="(.*?)" title="(.*?)"}}<\/p>/g;
  const result = html.replace(pattern, "<amazon asin='$1'>$2</amazon>");
  return result;
}

/** Amazon商品ブロック */
export function AmazonBlock({ asin, children }) {
  const amazonUrl = `https://www.amazon.co.jp/gp/product/`;
  const itemUrl = amazonUrl + asin + "/>tag=" + AMAZON_AFFILIATE;
  const imageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.09.MZZZZZZZ`;

  return (
    <div className={styles.amazon}>
      <div className="group max-w-2xl mx-auto my-12 py-6 border-t-2 border-b-2 border-gray-400">
        <a
          href={itemUrl}
          rel="noreferrer noopener external nofollow"
          target="_blank"
        >
          <div className="grid grid-rows-3 grid-flow-col">
            <div className="relative row-span-3 max-h-item h-screen group-hover:opacity-75">
              <Image
                src={imageUrl}
                alt={children}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="row-span-2 text-left text-xl font-semibold">
              {children}
            </div>
            <div className="row-span-1 text-left group-hover:opacity-75">
              <button className="bg-amazon py-1 px-3 text-white">Amazon</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
