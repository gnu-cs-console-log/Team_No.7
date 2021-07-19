import ListData from "./ListData";

// ListInfo 자료형
interface ListInfo {
  title: string;
  list: string[];
}

// List 반환 - title, MovieList
export default function List({ title, list }: ListInfo) {
  return (
    <>
      <b>{title}</b>
      {/* MovieList - key, img, title 가져옴 */}
      <div className="MovieList">
        {list.map((MovieList) => (
          <ListData
            key={MovieList.id}
            img={MovieList.img}
            title={MovieList.title}
          />
        ))}
      </div>
    </>
  );
}
