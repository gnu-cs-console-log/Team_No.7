export default function Nav() {
  return (
    <>
      {/* leftNav - Nav의 왼쪽 항목들 */}
      <div className="leftNav">
        <li>
          <b>엄지랑 왓챠 보챠</b>
        </li>
        <li>
          <b> 홈 </b>
        </li>
        <li>
          <b> 탐색하기 </b>
        </li>
        <li>
          <b> 평가하기 </b>
        </li>
      </div>

      {/* rightNav - Nav의 오른쪽 항목들 */}
      <div className="rightNav">
        <li>
          <b> 엄지 </b>
        </li>
        <li>
          <b> 보고싶어요 </b>
        </li>
        <li>
          <b> 검색 </b>
        </li>
      </div>
    </>
  );
}
