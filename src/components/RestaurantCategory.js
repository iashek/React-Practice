import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {

    // const [showItems, setShowItems] = useState(false);
    
    const { menuData, showItems, setShowIndex } = props;

    const handleClick = () => {
        setShowIndex();
    }

    // console.log("props", menuData);

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {menuData?.title} ({menuData?.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemList items={menuData?.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;