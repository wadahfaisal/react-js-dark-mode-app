import { ArticleProps } from "./props";
import moment from "moment";

const Article: React.FC<ArticleProps> = ({ title, snippet, date, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        {/* <span>{moment(date).format("dddd Do, YYYY")}</span> */}
        <span>{moment(date).format("MMM Do, YYYY")}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
