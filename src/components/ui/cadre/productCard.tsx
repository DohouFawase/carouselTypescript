import { ProductInterface } from "../../../utils/interface"
import Button from "../button/button"

export default function ProductCard({ title = "ehey" , subtitle , description , imgUrl }: ProductInterface) {

    return (
        <>
            <div className="overflow-hidden rounded-lg shadow-md">
                <div className="">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="space-y-3 px-4">
                    <p className="text-[#192740] text-[20px] font-bold ">{title}</p>
                    <p>{subtitle}</p>
                    <p className="text-[#FF7A21]">{description}</p>
                </div>
            </div>

        </>
    )
}