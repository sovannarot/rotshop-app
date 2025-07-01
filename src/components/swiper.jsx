import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fixedData } from "../data/fixedData";

export default function SwiperPage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 60000 / fixedData.Swiper?.length,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[67vw] max-[500px]:w-[90vw] aspect-[3/1] my-[5px] rounded-[10px]"
      >
        {fixedData.Swiper.map((swiper) => (
          <SwiperSlide>
            <img src={swiper} loading="lazy" decoding="async" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
