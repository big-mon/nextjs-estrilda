export function Container({ children }) {
  return (
    <>
      <div className="container mx-auto xl:max-w-screen-xl px-4">
        {children}
      </div>
    </>
  );
}
