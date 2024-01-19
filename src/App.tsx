import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDataContextProvider } from "./context/GlobalState";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient();

  return (
    <UserDataContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </UserDataContextProvider>
  );
}

export default App;
