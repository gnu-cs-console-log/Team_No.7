import "./styles.css";
import List from "./List";
import Nav from "./nav";
import { data } from "./data.json";

export default function App() {
  return (
    <div className="App">
      {/* ===== Header - watcha 로고 ===== */}
      <header className="Header">
        <a href="https://zdyz4.csb.app" color="ff0060">
          <img src="/img/Watcha.png" />
        </a>
      </header>

      {/* ===== Nav - 간단한 메뉴 나열 ===== */}
      <nav className="Nav">
        <Nav />
      </nav>

      {/* ===== Main - 메인 화면 ===== */}
      <main className="Main">
        {/* ===== MainImg - 해리포터 이미지 ===== */}
        <div className="MainImg">
          <img src="/img/해리포터.jpg" height="825" />
        </div>
        {/* ===== PlayList - key, title, list 가져옴 ===== */}
        <div className="PlayList">
          {data.List.map((PlayList) => (
            <List
              key={PlayList.id}
              title={PlayList.title}
              list={PlayList.list}
            />
          ))}
        </div>
      </main>

      {/* ===== Footer - 아무 것도 안 넣음 ===== */}
      <footer className="Footer"></footer>
    </div>
  );
}
