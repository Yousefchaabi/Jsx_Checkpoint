import Profile from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Adresse from "./Component/Profile/Adresse";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
