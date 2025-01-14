import { ProductInterface } from "../../../utils/interface"
import Button from "../button/button"
import Typo from "../typo/typo"
import GeneralCard from "./container"

export default function ProductCard({ title  , subtitle , description , imgUrl }: ProductInterface) {

    return (
        <>
        <GeneralCard variants="large" backgroud="light">

        <div className="">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="space-y-3 px-4 py-4">
                    <Typo variants="h3">
                    {title}
                    </Typo>
                   
                    <Typo components="p"> {subtitle}</Typo>
                    

                    <Typo variants="body-lg">{description}</Typo>
                </div>
        </GeneralCard>
           

        </>
    )
}