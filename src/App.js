import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed/>
      </div>
      {/* Header */}
      {/* App body */}
      {/* sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
};

export default App;
