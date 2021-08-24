import Link from "next/link";

/** 内部/外部リンクの種類に応じてコンポーネントを読み替え */
export function CustomLink({ href, ...rest }) {
  const isInternal = href && href.startsWith("/");
  const isAnchor = href && href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  if (isAnchor) {
    return <a href={href} {...rest} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />;
}
