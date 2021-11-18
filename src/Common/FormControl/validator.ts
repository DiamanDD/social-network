

export const requaired=(value:string)=>{
    if(value) return undefined
    return "Пустое поле"
}


export const maxLenghtCreator=(maxlenght:number)=>(value:any)=>{
    if (value.length<5) return undefined
    return `Слишком много символов${value.length}`


}