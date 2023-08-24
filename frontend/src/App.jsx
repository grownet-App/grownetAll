import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import Layout from "./components/Layouts/Layout";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router >
    </div>

  );
}

export default App;