import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";

export const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const handleAddtoBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };

  const handleOnRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bag.includes(item.id) ? (
        <button
          type="button"
          className="btn-add-bag  btn btn-danger"
          onClick={handleOnRemove}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddtoBag}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};
