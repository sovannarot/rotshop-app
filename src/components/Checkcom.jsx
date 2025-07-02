import CardPost from "@/components/CardPost";

const Likecom = ({ filter, lang, numberArray, userId }) => {
  const removeUser = async (id) => {
    const res = await fetch("/api/remove-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        productId: id,
      }),
    });
    window.location.reload();
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-x-3 gap-y-4 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-5">
        <div className="grid grid-cols-6 gap-x-5 gap-y-7 w-[calc(100vw-40px)] mx-2 max-[1123px]:grid-cols-5 max-[938px]:grid-cols-4 max-[753px]:grid-cols-3 max-[520px]:grid-cols-2 mt-7">
          {filter.length > 0 ? (
            filter.map((product, index) => (
              <div className="flexcolc" key={index}>
                <CardPost
                  item={product}
                  mostSell={product.mostSell}
                  lang={lang}
                />{" "}
                <button
                  className="khmer w-full h-auto rounded-2xl bg-emerald-500 p-2"
                  onClick={() => {
                    removeUser(numberArray[index]);
                  }}
                >
                  {lang == "En" ? "Remove" : "ដកចេញ"}
                </button>
              </div>
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
                ? "No products found Search Again (404)."
                : "រកមិនឃើញទំនិញ ព្យាយាមស្វែករកម្តងទៀត (404)"}
            </div>
          )}
        </div>
      </div>
      <div className="w-screen h-5"></div>
    </>
  );
};

export default Likecom;
