import { AmazonBlock } from "@big-mon/react-component-amazon";
import { AMAZON_AFFILIATE } from "lib/constants";
import styles from "styles/amazon.module.scss";

type Props = {
  asin: string;
  children: React.ReactNode;
};

/** Amazon商品ブロック */
export function AmazonItem({ asin, children }: Props) {
  return (
    <div className={styles.amazonBox + " max-w-2xl mx-auto my-8"}>
      <AmazonBlock asin={asin} id={AMAZON_AFFILIATE}>
        {children}
      </AmazonBlock>
    </div>
  );
}
