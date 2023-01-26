import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { getAllposts, useAppSelector } from "store";
import { useWindowSize } from "hooks";
import { IPost } from "types";
import { PostItem } from "components";
import { StyledSwiper } from "./styles";

export const Slider = () => {
  const { posts } = useAppSelector(getAllposts);
  const { width = 0 } = useWindowSize();
  const SlidesQty = () => {
    if (width > 1100) {
      return 3;
    }
    if (width <= 1100 && width > 767.98) {
      return 2;
    }
    if (width <= 767.98) {
      return 1;
    }
  };

  return (
    <StyledSwiper
      freeMode={true}
      grabCursor={true}
      slidesPerView={SlidesQty()}
      spaceBetween={10}
      modules={[FreeMode]}
    >
      {posts &&
        posts.length > 0 &&
        posts.map((post: IPost) => {
          return (
            <SwiperSlide key={post.id}>
              <PostItem post={post} />{" "}
            </SwiperSlide>
          );
        })}
    </StyledSwiper>
  );
};
