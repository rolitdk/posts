import { Posts } from "../../components/Posts";
import { Container } from "../../components/Container";
import { Typo } from "../../components/Typo";

export const INITIAL_POSTS = [
  {
    id: 1,
    title: "Post 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
  },
  {
    id: 2,
    title: "Post 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
  },
  {
    id: 3,
    title: "Post 3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
  },
  {
    id: 4,
    title: "Post 4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
  },
  {
    id: 5,
    title: "Post 5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZU7ChjOxMb89wS_wPYGiylxtX_mKb89ICXQ&s",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga asperiores magni illo quidem culpa, dolores cumque, corrupti fugiat sed sint laboriosam veritatis ratione. Earum autem eveniet placeat consequatur aliquid adipisci?",
  },
];

export const PostsPage = () => (
  <>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POSTS} />
    </Container>
  </>
);
