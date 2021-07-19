interface ListDataInfo {
  img: string;
  name: string;
}

export default function List({ img, name }: ListDataInfo) {
  return (
    <>
      <p>
        <div className="ImgList">
          <img src={img} width="220" height="150" />
        </div>
        <br />
        <i>{name}</i>
      </p>
    </>
  );
}
