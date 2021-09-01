import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

/** 内部/外部リンクの種類に応じてコンポーネントを読み替え */
export const CustomLink = ({ href, children }: Props) => {
  const isInternal = href && href.startsWith("/");
  const isAnchor = href && href.startsWith("#");

  if (isInternal) {
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }

  if (isAnchor) {
    return <a href={href}>{children}</a>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
