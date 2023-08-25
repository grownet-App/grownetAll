import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import Layout from "./Layout";
import AppRouter from "./routers/AppRouter";
import Menu from "./components/Menu/Menu";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
