import { BrowserRouter as Router } from "react-router-dom";
import { IntercomProvider } from 'react-use-intercom';
import Layout from "./Layout";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  const INTERCOM_APP_ID = 'wuzl8mz1';
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <IntercomProvider appId={INTERCOM_APP_ID} autoBoot={true}>
          <Layout>
            <AppRouter />
          </Layout>
          </IntercomProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
