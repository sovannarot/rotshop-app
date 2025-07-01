const Cardpost = ({ item, mostSell, lang }) => {
  return (
    <div
      className="flex flex-col justify-start items-start w-full max-w-[200px] sm:max-w-[200px] max-[500px]:max-w-[95vw] h-auto rounded-[10px] hover:translate-y-[-8px] bg-white indicator transition-all duration-300"
      style={{
        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
      }}
    >
      <a
        className="flex flex-col justify-start items-start w-full max-w-[200px] sm:max-w-[200px] max-[500px]:max-w-[95vw] h-auto rounded-[10px] hover:translate-y-[-8px] indicator transition-all duration-300"
        href={"/" + lang + "/Product/" + item.id}
      >
        <img
          src={item.img}
          className="aspect-square rounded-[10px] w-full object-cover"
          alt={item.name}
          loading="lazy"
          decoding="async"
        />
        {mostSell ? (
          lang === "En" ? (
            <span className="indicator-item indicator-center badge badge-secondary text-xs sm:text-sm">
              {mostSell.En}
            </span>
          ) : (
            <span className="indicator-item indicator-center badge badge-secondary text-xs sm:text-sm">
              {mostSell.Kh}
            </span>
          )
        ) : null}

        <div className="h-auto w-full flex flex-col justify-start items-start px-2 pb-2">
          <h2 className="w-full font-bold text-[15px] sm:text-base text-start line-clamp-2 dark:text-blue-400">
            {item.name}
          </h2>
          {item.brand ? (
            <h2 className="w-full text-start text-gray-500 text-[10px] sm:text-xs">
              {"By " + item.brand}
            </h2>
          ) : null}

          <div className="w-full flexrows">
            {item.solution ? (
              <div className="h-[25px] text-[13px] sm:text-sm text-center bg-[#283542] rounded-[5px] text-white flexrowc w-fit px-3">
                {item.solution}
              </div>
            ) : (
              <div className="h-[25px] text-[13px] sm:text-sm text-center bg-[#283542] rounded-[5px] text-white flexrowc w-fit px-3">
                {lang == "En" ? "Not Set" : "មិនកំណត់"}
              </div>
            )}
          </div>
        </div>
        <div className="w-full flexrowc ml-1.5 -translate-y-2">
          {item.price?.Promotion !== 0 ? (
            <h2 className="font-bold text-2xl text-red-600 text-start w-full h-[40px] flex items-center gap-1 max-[578px]:text-[17px]">
              {item.price?.Promotion ? "$" + item.price.Promotion : ""}
              <span className="text-[15px] max-[578px]:text-[10px] text-gray-500 line-through">
                {item.price?.Normal ? "$" + item.price.Normal : ""}
              </span>
            </h2>
          ) : (
            <h2 className="font-bold text-2xl text-red-600 text-start w-full h-[40px] flex items-center gap-1 max-[578px]:text-[17px]">
              {item.price?.Normal ? item.price?.Normal + "$" : ""}
              <span className="text-[15px] max-[578px]:text-[10px] text-gray-500 line-through" />
            </h2>
          )}
        </div>
      </a>
    </div>
  );
};

export default Cardpost;
