import { Link } from "../../../ui/Link";
import * as SC from "./styles";

export const Post = ({ post }) => {
  const image =
    post.image ||
    "https://img51994.kanal-o.ru/img/2025-01-06/fmt_81_24_shutterstock_1303863493.jpg";

  return (
    <SC.Post>
      <SC.Image src={image} alt={post.title} />
      <SC.Title>{post.title}</SC.Title>
      <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
  );
};
