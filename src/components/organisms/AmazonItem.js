import { AmazonBlock } from "@big-mon/react-component-amazon";
import { AMAZON_AFFILIATE } from "../../lib/constants";

/** Amazon商品ブロック */
export function AmazonItem({ asin, children }) {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <AmazonBlock asin={asin} id={AMAZON_AFFILIATE}>
        {children}
      </AmazonBlock>
    </div>
  );
}
