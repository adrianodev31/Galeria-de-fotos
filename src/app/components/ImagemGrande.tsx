"use client"

import { Fotos } from "./Fotos"

type Props = {
    img: number;
    callBack: any;
    callBackAlterandoFoto: any;
}

export const ImagemGrande = ({img, callBack, callBackAlterandoFoto}: Props) => {
    return (
       <div className="w-screen h-screen top-0 bg-black absolute p-20 flex justify-center items-center">
            <div className="text-3xl text-green-800 font-bold bg-red-50 p-3 z-10 w-16 h-16 rounded-full cursor-pointer absolute top-3 flex justify-center items-center" onClick={() => callBack()}>X</div>
            <img src={Fotos[img].img} className="rounded-xl absolute top-0 w-3/4" alt="" />
            <button className="bg-red-600 p-4 w-24 h-24 rounded-full absolute bottom-2 flex justify-center items-center" onClick={() => callBackAlterandoFoto()}>Mudar foto</button>
       </div>
    )
}