import { CarProps } from "../../themes/cadre/cadre";

export default function GeneralCard({ flex ,size,variants, children, borderRadius, borderbar,backgroud, className }: CarProps) {
  let variantStyle: string = ""
  let borderRadiusStyle: string = "";
  let backgroundColor: string = "";
  let borderbarStyle: string = "";
  let sizeStyle:string=""
  let flexStyle:string=""
  switch (variants) {
   

    case "large":
      variantStyle = " rounded-md";
      break;

  }


  switch (borderRadius) {
    case "":
      borderRadiusStyle = ""
      break;
  }

  switch (backgroud) {
    case "light":
      backgroundColor="bg-white text-black shadow-lg "
      break;
  
      case "dark":
        backgroundColor="bg-black text-white"
        break;
      
  }

  switch (borderbar) {
    case "":
      borderbarStyle =""
      break;
  
    default:
      break;
  }
  switch (size) {
    case 'long':
        sizeStyle="h-[582px] "
      break;
  
    default:
      break;
  }


  switch (flex) {
    case 'center':
        flexStyle="flex flex-col justify-center items-center "
      break;
  
    default:
      break;
  }
  return (
    <>
      <div className={`${className} ${flexStyle}  ${variantStyle} ${borderRadiusStyle} ${sizeStyle} ${backgroundColor} ${borderbarStyle} `}>
        {children}
      </div>
    </>
  )
}