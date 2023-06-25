import Layout from "./component/layout/Layout";
import { Route, Routes } from "react-router-dom";
import All from "./pages/All";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<All />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
