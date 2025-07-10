import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log("In the header ==", bag);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="../images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <Link className="action_container  text-black">
            <CgProfile />

            <span className="action_name">Profile</span>
          </Link>

          <Link className="action_container  text-black">
            <FaRegHeart />

            <span className="action_name">Wishlist</span>
          </Link>

          <Link to="/bag" className="action_container  text-black">
            <MdOutlineShoppingBag />

            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};
