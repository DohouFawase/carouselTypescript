export interface ProductInterface  {
    title: string;
    subtitle: string;
    description: string;
    imgUrl:string;
}



export interface ButtonInterface {
    children:React.ReactNode,
    className:string,
    type:string,
    size?:'large'|'medium'|'large',
    variant?:'accent'|'secondary'|'variant',
    // size?:'large'|'medium'|'large',
    // size?:'large'|'medium'|'large',
    isLoading?:boolean
}