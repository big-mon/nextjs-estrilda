import Link from "next/link";

type Props = {
  href: string;
};

/** 内部/外部リンクの種類に応じてコンポーネントを読み替え */
export const CustomLink = ({ href }: Props) => {
  const isInternal = href && href.startsWith("/");
  const isAnchor = href && href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href}>
        <a />
      </Link>
    );
  }

  if (isAnchor) {
    return <a href={href} />;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" />;
};
