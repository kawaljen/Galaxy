export interface Planet{
    id : number|0,
    color :string|"#FFD700",
    xRadius :number|0,
    zRadius:number|0,
    size:number|0,
    speed:number|1,
    offset:number|0,
    rotationSpeed:number|0,
    name:string |"planet"

  }
export interface Inputs{
  color :string,
  size:number,
  speed:number,
  rotationSpeed:number,
  name:string 
}

export type Errors = Partial<Record<keyof Inputs, string>>

export type Touched = Partial<Record<keyof Inputs, boolean>>


export interface TribuneArticleType{
  id : number|0,
  title :string,
  content :string,
  name:string |"planet",
  //CreateOn
}