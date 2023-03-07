import Link from "next/link";

type Props = {
  src: string;
  children: React.ReactNode;
};

export const PageButton = ({ src, children }: Props) => {
  return (
    <button className="mx-2 border rounded-full border-gray-600 px-4 py-1 hover:bg-gray-600 hover:text-white">
      <Link href={src}>{children}</Link>
    </button>
  );
};
