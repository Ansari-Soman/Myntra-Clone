import { useSelector } from "react-redux";
import { HomeItem } from "../component/HomeItem";

export const Home = () => {
  const items = useSelector((state) => state.items);
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem item={item} key={item.id}></HomeItem>
          ))}
        </div>
      </main>
    </>
  );
};
