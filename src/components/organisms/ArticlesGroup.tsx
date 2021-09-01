type Props = {
  text: string;
};

export const ArticlesGroup = ({ text }: Props) => {
  return (
    <>
      {text ? (
        <div className="max-w-6xl mx-auto my-8 px-6">
          <span className="text-base">HOME</span> /{" "}
          <h2 className="text-base inline-block">{text.toUpperCase()}</h2>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
