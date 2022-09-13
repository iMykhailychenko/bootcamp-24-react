import image from './713761_big_8857bc5285.jpeg';

export const PostsError = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <img src={image} alt="not found" style={{ width: 300 }} />
      <p className="my-3">Все идет по плану. Потерь нет!</p>
    </div>
  );
};
