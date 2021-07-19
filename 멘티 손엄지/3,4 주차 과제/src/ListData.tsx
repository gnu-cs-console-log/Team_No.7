// data.json의 list

// ListDataInfo 자료형
interface ListDataInfo {
  title: string;
  img: string;
}

// ListData 반환 - img, title
export default function ListData({ img, title }: ListDataInfo) {
  return (
    <>
      <p>
        <div className="ImgList">
          <img src={img} width="285" height="190" />
        </div>
        <b>{title}</b>
      </p>
    </>
  );
}
