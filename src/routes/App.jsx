import { Outlet } from "react-router-dom";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { FetchItem } from "../component/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../component/LoadingSpinner.jsx";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  // console.log(fetchStatus.currentlyFetching);
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
