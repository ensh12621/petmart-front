"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ImageType {
    id: number;
    src: string;
}

interface ImageSwiperContainerProps {
    imageList: ImageType[];
}


export default function ImageSwiperContainer({ imageList }: ImageSwiperContainerProps) {
    return (
        <section>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]} // Autoplay 모듈 포함
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
            >
                {imageList.map((image) => (
                    <SwiperSlide key={image.id} >
                        <img 
                            src={image.src} 
                            alt={`Slide ${image.id}`} 
                            className="w-full h-[400px] object-cover"
                            />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}