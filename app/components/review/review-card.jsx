import "./review.css";

function renderHTML(html) {
  const result = html
    .replace("<script>", "&lt;script&gt;")
    .replace("</script>", "&lt;/script&gt;");

  return { __html: result };
}

export default async function ReviewCard({ review }) {
  const html = renderHTML(review.text);

  return <div className="review-card" dangerouslySetInnerHTML={html}></div>;
}
