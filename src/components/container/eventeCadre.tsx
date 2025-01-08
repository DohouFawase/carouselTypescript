import ProductCard from "../ui/cadre/productCard";
import Event1 from "../../assets/eventeImage/Harnix_Event.png";
import Event2 from "../../assets/eventeImage/Harnix Event2.png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import useResponsiveSlides from "../../hooks/responsiveScreen";

const EnventList = [
    {
        id: 1,
        image: Event1,
        title: "Promotion de Harnix Events",
        subtitle: "Participez à des événements qui façonnent l'avenir technologique de l'Afrique grâce à HarnixEvents.",
        description: "Inscrivez-vous en ligne et soyez acteur du changement avec Harnix.",
    },
    {
        id: 2,
        image: Event2,
        title: "Promotion de Harnix Events",
        subtitle: "Participez à des événements qui façonnent l'avenir technologique de l'Afrique grâce à HarnixEvents.",
        description: "Inscrivez-vous en ligne et soyez acteur du changement avec Harnix.",
    },
    {
        id: 3,
        image: Event1,
        title: "Promotion de Harnix Events",
        subtitle: "Participez à des événements qui façonnent l'avenir technologique de l'Afrique grâce à HarnixEvents.",
        description: "Inscrivez-vous en ligne et soyez acteur du changement avec Harnix.",
    },
    {
        id: 4,
        image: Event2,
        title: "Promotion de Harnix Events",
        subtitle: "Participez à des événements qui façonnent l'avenir technologique de l'Afrique grâce à HarnixEvents.",
        description: "Inscrivez-vous en ligne et soyez acteur du changement avec Harnix.",
    },
    {
        id: 5,
        image: Event1,
        title: "Promotion de Harnix Events",
        subtitle: "Participez à des événements qui façonnent l'avenir technologique de l'Afrique grâce à HarnixEvents.",
        description: "Inscrivez-vous en ligne et soyez acteur du changement avec Harnix.",
    },
    {
        id: 6,
        image: Event2,
        title: "Promotion de Harnix Events",
        subtitle: "Participez à des événements qui façonnent l'avenir technologique de l'Afrique grâce à HarnixEvents.",
        description: "Inscrivez-vous en ligne et soyez acteur du changement avec Harnix.",
    }
];

export default function EventeCardre() {
    const slidesPerView = useResponsiveSlides();
   return (
       <>
           <div className="">
               <div className="relative w-full">
                   <div className="">
                       <h1>Événements à venir</h1>
                   </div>
                   <div className="flex gap-3 relative w-full">
                       <button className="swiper-button-prev  absolute bottom-0 eft-[133rem]  "></button>
                       <button className="swiper-button-next "></button>
                   </div>
               </div>

               <Swiper
                   spaceBetween={50}
                   slidesPerView={slidesPerView}
                   modules={[Navigation]}
                   navigation={{
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
                   }}    
               >
                   {EnventList.map((event) => (
                       <SwiperSlide key={event.id}>
                           <ProductCard 
                               title={event.title}  
                               subtitle={event.subtitle}  
                               description={event.description} 
                               imgUrl={event.image}  
                           />
                       </SwiperSlide>
                   ))}
               </Swiper>
           </div> 
       </>
   );
}
