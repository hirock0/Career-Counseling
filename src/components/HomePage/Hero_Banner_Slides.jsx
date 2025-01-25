import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { SwiperSlide, Swiper } from "swiper/react";
import { useAppContext } from "../../ContextApi/ContextApi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LearnMoreBtn from "./LearnMoreBtn";

const Hero_Banner_Slides = () => {
  const { theme, sliderData, loading, setLoading } = useAppContext();

  return (
    <div className={`${!theme && "text-white"}`}>
      <Swiper
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {sliderData?.map((item, index) => (
          <SwiperSlide key={index} className="">
            <section className={` `}>
              <div className="">
                <div className=" relative ">
                  {
                    <img
                      src={item?.image}
                      alt=""
                      className=" h-full w-full object-contain max-sm:h-80 max-md:object-cover"
                    />
                  }
                  <div className=" absolute bottom-0 lg:bottom-10 right-0 left-0 flex items-center justify-center ">
                    <LearnMoreBtn btn={1} />
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero_Banner_Slides;
