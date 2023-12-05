import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        sla
    } = resData?.info;
    // console.log("hello");
    // console.log(props);
    return (
        <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} ></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(', ') }</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} mins</h4>
        </div>
    );
};

// Higher Order Component
// input: restaurant card => PromotedRestaurant Card

export const withPromotedLabel= (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;