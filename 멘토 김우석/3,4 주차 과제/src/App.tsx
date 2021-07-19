import "./styles.css";
import { data } from "./data.json";
import List from "./List";
import Nav from "./Nav";
import Hover from "./HoverTest";

export default function App() {
  return (
    <div className="App">
      <header className="header"></header>
      <nav className="nav">
        <Nav />
      </nav>
      <main className="main">
        {data.Lists.map((Data) => (
          <List key={Data.id} title={Data.title} list={Data.list} />
        ))}
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
