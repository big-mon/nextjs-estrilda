export function PostBody({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
