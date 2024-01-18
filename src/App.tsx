import "./App.css";
import Dashboard from "./Dashboard";
import { UserDataContextProvider } from "./context/GlobalState";

function App() {
  return (
    <UserDataContextProvider>
        <Dashboard />
    </UserDataContextProvider>
  );
}

export default App;
