/**
 * 独自のAmazon用商品ブロック記法をHTMLに変換
 * {{ < amazon asin="xxxxx" title="xxxxx" > }}
 */
export const amazonBlockConvert = (html: string) => {
  const pattern =
    /<p>{{&#x3C;[ ]?amazon asin="(.*?)" title="(.*?)"[ ]*?>}}<\/p>/g;
  const result = html.replace(pattern, "<amazon asin='$1'>$2</amazon>");
  return result;
};
