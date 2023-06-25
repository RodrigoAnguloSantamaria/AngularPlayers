export interface playerI{
    id?:number;
    name:string;
    characteristics:charI;
    image:string;
}
export interface charI{
    position:string;
    team:string;
    championships:number;
    MVPs:number;
}