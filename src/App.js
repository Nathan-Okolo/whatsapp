import "./App.css";
import Chat from "./components/Chat";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
