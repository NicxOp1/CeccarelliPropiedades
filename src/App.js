/* import ComponentRoutes from "./ComponentRoutes"; */
import Layout from "./layout/Layout";
import './App.css';
import { ComponentRoutes } from "./ComponentRoutes";

function App() {
  return (
    <>
    <Layout>
      <ComponentRoutes />
    </Layout>
  </>
  );
}

export default App;
