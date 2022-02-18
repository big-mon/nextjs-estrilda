import { AmazonBlock } from "@big-mon/react-component-amazon";
import { AMAZON_AFFILIATE } from "lib/constants";
import styles from "styles/amazon.module.scss";

type Props = {
  asin: string;
  name: string;
};

const AmazonItem = ({ asin, name }: Props) => {
  return (
    <div className={"font-body " + styles.amazonBox}>
      <AmazonBlock asin={asin} id={AMAZON_AFFILIATE}>
        {name}
      </AmazonBlock>
    </div>
  );
};

export default AmazonItem;
