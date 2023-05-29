import './App.css';
import { MyProvider } from "./MyContext";
import { AppUI } from "./AppUI";

function App() {
  return (
    <MyProvider>
      <AppUI/>
    </MyProvider>
  );
}

export default App;
