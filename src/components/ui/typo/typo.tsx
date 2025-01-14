import React from 'react'
import { typoProps } from '../../themes/typography/typography'
export default function Typo({ variants = "body-sm",ClassName="", children, components: Components = "lead" }: typoProps) {
     let variantStyle:string =""

     switch (variants) {
        case "h1":
            variantStyle="text-[#FFAA71] md:text-[48px] text-[16px] font-[900]"
            break;
     
            case "h2":
                variantStyle="font-[800] md:text-[36px] text-[18px] bg-gradient-to-r bg-clip-text text-transparent from-[#FF7A21] to-[#FF0000]"
                break;

                case "h3":
                    variantStyle="text-[#192740] text-[20px] font-bold  "
                    break;
















                    case "body-lg":
                    variantStyle="text-[#FF7A21] text-[16px] "
                    break;
       
     }
    return (
        <Components className={`ClassName ${variantStyle}`}>

            {children}

        </Components>

    )
}
