import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

const INITIAL_POSTS = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
  },
];

export const MainPage = () => (
  <>
    <Container>
      <Typo>Свежие публикации</Typo>
      <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
