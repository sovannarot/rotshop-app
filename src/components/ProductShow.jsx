import { useState, useEffect } from "react";
import { items } from "../data/items";
import { categories } from "../data/categories";
import CardPost from "./CardPost";
import { sortProducts } from "../lib/utils";
const ProductShow = ({ lang, promotion }) => {
  const [buttonData, SetButtonData] = useState(["All"]);
  const [sortValue, setSortValue] = useState("Name (A-Z)");
  const [itemfilter, SetItemFilter] = useState(items);
  const [search, setSearch] = useState("");
  useEffect(() => {
    let filtered = promotion
      ? buttonData.includes("All")
        ? items.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              item.price?.Promotion !== 0
          )
        : items.filter(
            (item) =>
              buttonData.some((cat) => item.Category.includes(cat)) &&
              item.name.toLowerCase().includes(search.toLowerCase()) &&
              item.price?.Promotion !== 0
          )
      : buttonData.includes("All")
      ? items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      : items.filter(
          (item) =>
            buttonData.some((cat) => item.Category.includes(cat)) &&
            item.name.toLowerCase().includes(search.toLowerCase())
        );
    filtered = sortProducts(filtered, sortValue);
    SetItemFilter(filtered);
  }, [buttonData, sortValue, search]);
  function handleOnClick(label) {
    if (label === "All") {
      SetButtonData(["All"]);
    } else {
      if (buttonData.includes("All")) {
        SetButtonData([label]);
      } else if (buttonData.includes(label)) {
        const newData = buttonData.filter((item) => item !== label);
        SetButtonData(newData.length === 0 ? ["All"] : newData);
      } else {
        SetButtonData([...buttonData, label]);
      }
    }
  }
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
      <div className="w-[70vw] overflow-y-hidden overflow-x-auto flex gap-1.5 max-[673px]:gap-0.5 max-[673px]:w-[90vw]">
        <button
          key={"All"}
          className={`px-4 max-[673px]:px-2 max-[673px]:font-bold h-[35px] border-2 border-gray-800 text-xl text-center my-1 whitespace-nowrap max-[673px]:text-[10px] ${
            buttonData.includes("All") ? "bg-[#283542] text-white" : ""
          }`}
          onClick={() => handleOnClick("All")}
          type="button"
        >
          <div className="flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-layout-2"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
              <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
            </svg>
            <h2>{"All"}</h2>
          </div>
        </button>
        {categories.map((label, index) => (
          <button
            key={index}
            className={`px-4 max-[673px]:px-2 max-[673px]:font-bold h-[35px] border-2 border-gray-800 text-xl text-center my-1 whitespace-nowrap max-[673px]:text-[10px] ${
              buttonData.includes(label.text) ? "bg-[#283542] text-white" : ""
            }`}
            onClick={() => handleOnClick(label.text)}
            type="button"
          >
            <div className="flex justify-center items-center gap-1">
              <h2>{label.text}</h2>
            </div>
          </button>
        ))}
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
                  buttonData +
                  " - No products found Search Again (404)."
                : (search === "" ? "" : search + " - ") +
                  buttonData +
                  " - រកមិនឃើញទំនិញ ព្យាយាមស្វែករកម្តងទៀត (404)"}
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[40px]"></div>
    </>
  );
};

export default ProductShow;
