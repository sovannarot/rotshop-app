import { useState, useEffect } from "react";
import { items } from "../data/items.js";
import CardPost from "./CardPost";
import { sortProducts } from "../lib/utils.js";
const SearchShow = ({ lang, type, bol }) => {
  const [sortValue, setSortValue] = useState("Name (A-Z)");
  const [itemfilter, SetItemFilter] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    let filtered =
      bol == "c"
        ? items.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              item.Category.includes(type)
          )
        : bol == "s"
        ? items.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              item.skin.includes(type)
          )
        : items.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              item.brand === type
          );
    filtered = sortProducts(filtered, sortValue);
    SetItemFilter(filtered);
  }, [sortValue, search]);
  return (
    <>
      <div className="flex justify-center items-center gap-3 w-[calc(100vw-100px)] h-[50px] productshow-root max-[480px]:flex-col max-[480px]:h-[100px]">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">
            <input
              className="input"
              type="text"
              required=""
              placeholder={lang == "En" ? "Search Product" : "ស្វែងរកទំនិញ"}
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="fancy-bg"></div>
          </label>
        </form>
        <div className="select-dropdown w-[130px] h-[30px] border-1 border-amber-300 rounded-[5px]">
          <select
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            className="h-full w-full"
          >
            <option value="Name (A-Z)">
              {lang == "En" ? "Name (A-Z)" : "ឈ្មោះ (A-Z)"}
            </option>
            <option value="Name (Z-A)">
              {lang == "En" ? "Name (Z-A)" : "ឈ្មោះ (Z-A)"}
            </option>
            <option value="Price Up">
              {lang == "En" ? "Price Up" : "កើនតម្លៃ"}
            </option>
            <option value="Price Down">
              {lang == "En" ? "Price Down" : "ចុះតម្លៃ"}
            </option>
            <option value="Best Seller">
              {lang == "En" ? "Best Seller" : "លក់ដាច់បំផុត"}
            </option>
            <option value="Arrival">
              {lang == "En" ? "Arrival" : "មកដល់ថ្មីៗ"}
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-5">
        <div className="grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-5">
          {itemfilter && itemfilter.length > 0 ? (
            itemfilter.map((product, index) => (
              <CardPost
                key={index}
                item={product}
                mostSell={product.mostSell}
                lang={lang}
              />
            ))
          ) : (
            <div className="col-span-full min-h-[120px] text-center text-gray-500 py-8 text-xl flexcolc gap-2 khmer">
              <img
                src="https://cdn.openart.ai/uploads/image_2ek9qc8b_1751036174788_raw.jpg"
                alt="notfound"
                className="w-[25vw] rounded-3xl"
                loading="lazy"
                decoding="async"
              />
              {lang === "En"
                ? (search === "" ? "" : search + " - ") +
                  type +
                  " - No products found Search Again (404)."
                : (search === "" ? "" : search + " - ") +
                  type +
                  " - រកមិនឃើញទំនិញ ព្យាយាមស្វែករកម្តងទៀត (404)"}
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[40px]"></div>
    </>
  );
};

export default SearchShow;
