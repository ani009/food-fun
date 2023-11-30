import { RestaurantList } from "../config";
import RestaurantCard from "../component/restaurcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const filterData = (searchText, restaurants) => {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
};

const Body = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [searctxt, setsearchtxt] = useState("");
  const [seeallrstro, setallrstro] = useState([]);
  const [filterestaurants, setfilterrestaurant] = useState([]);

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setfilterrestaurant(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setfilterrestaurant(seeallrstro);
    }
  };

  useEffect(() => {
    getrestaurant();
  }, []);

  async function getrestaurant() {
    try {
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();

      setallrstro(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterrestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }
  if(!seeallrstro)return null;
  return (seeallrstro.length===0)?<Shimmer/>:(
    <>
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            className="search"
            placeholder="search"
            value={searctxt}
            onChange={(e) => {
              setsearchtxt(e.target.value);
            }}
          />
          <button
            className="btn"
            onClick={() => {
              searchData(searctxt, seeallrstro);
            }}
          >
            Search
          </button>
        </div>

        <div className="Restaurant-list">
          {filterestaurants?.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
