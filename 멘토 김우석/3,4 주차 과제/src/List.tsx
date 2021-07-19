import ListData from "./Listdata";

interface ListInfo {
  title: string;
  list: string[];
}

export default function List({ title, list }: ListInfo) {
  return (
    <>
      <b>
        <hr />
        <i>{title}</i>{" "}
      </b>
      <div className="CharList">
        {list.map((CharList) => (
          <ListData key={CharList.id} img={CharList.img} name={CharList.name} />
        ))}
      </div>
    </>
  );
}
