import ProductCard from "../ui/cadre/productCard"
import Event1 from "../../assets/eventeImage/Harnix_Event.png"
import Event2 from "../../assets/eventeImage/Harnix Event2.png"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
const EnventList = [
    {
        id:1,
        image:Event1,
        title:"Promotion de Harnix Events",
        subtitle:"Participez à des événements qui façonnent l'avenir technologique de l'Afrique grace à HarnixEvents ",
        description:"Inscrivez-vous en ligne et soyez acteur du changement avec Harnix. ",
    },


    {
        id:2,
        image:Event2 ,
        title:"Promotion de Harnix Events",
        subtitle:"Participez à des événements qui façonnent l'avenir technologique de l'Afrique grace à HarnixEvents ",
        description:"Inscrivez-vous en ligne et soyez acteur du changement avec Harnix. ",
    },


    {
        id:3,
        image:Event1,
        title:"Promotion de Harnix Events",
        subtitle:"Participez à des événements qui façonnent l'avenir technologique de l'Afrique grace à HarnixEvents ",
        description:"Inscrivez-vous en ligne et soyez acteur du changement avec Harnix. ",
    },


    {
        id:4,
        image:Event2,
        title:"Promotion de Harnix Events",
        subtitle:"Participez à des événements qui façonnent l'avenir technologique de l'Afrique grace à HarnixEvents ",
        description:"Inscrivez-vous en ligne et soyez acteur du changement avec Harnix. ",
    },



    // {
    //     id:5,
    //     image:'',
    //     title:"Promotion de Harnix Events",
    //     subtitle:"Participez à des événements qui façonnent l'avenir technologique de l'Afrique grace à HarnixEvents ",
    //     description:"Inscrivez-vous en ligne et soyez acteur du changement avec Harnix. ",
    // },

    // {
    //     id:6,
    //     image:'',
    //     title:"Promotion de Harnix Events",
    //     subtitle:"Participez à des événements qui façonnent l'avenir technologique de l'Afrique grace à HarnixEvents ",
    //     description:"Inscrivez-vous en ligne et soyez acteur du changement avec Harnix. ",
    // }
]

export default function EventeCardre () {
    
   return (
    <>
    <div className="">

        <div className="flex justify-between">
            <div className="">
                <h1>Evenements à venir</h1>
            </div>
                <div className="flex gap-3">
                <p>left</p>
                <p>right</p>
                </div>
        </div>

        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400:{
          slidesPerView:2,
        },
        639: {
          slidesPerView: 3,
        },
        865:{
          slidesPerView:4
        },
        1000:{
          slidesPerView:4
        },
        1500:{
          slidesPerView:4
        },
        1700:{
          slidesPerView:4
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
     
  {
      EnventList.map((index,items)=> (
        <>
         <SwiperSlide>

         <ProductCard key={items} title={index.title}  subtitle={index.subtitle}  description={index.description} imgUrl={index.image}  />
            

</SwiperSlide>
        </>
     ))
  }
    </Swiper>
    </div> 
   
    </>
   )
}