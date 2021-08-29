export function ArticlesGroup({ children }) {
  return (
    <>
      {children ? (
        <div className="max-w-6xl mx-auto my-8 px-6">
          <span className="text-base">HOME</span> /{" "}
          <h2 className="text-base inline-block">{children.toUpperCase()}</h2>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
