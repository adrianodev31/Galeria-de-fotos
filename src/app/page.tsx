"use client"

import { useState } from "react"
import { ImagemGrande } from "./components/ImagemGrande"
import { Fotos } from "./components/Fotos"
import { BlobOptions } from "buffer"

export default function page(){
 

  const [status, setStatus] = useState(false)
  const [valoriD, setValorId] = useState(0)

  function abrirImg(event: any, id:number){
    if(event.type === 'click'){
      setStatus(true)
      setValorId(id)
    }
  }

  function fecharImagem(resposta: boolean){
    setStatus(resposta)
  }

  const [alteraFoto, setAlteraFoto] = useState<any>(0)
  function alterandoImagem(numero: number){
    setAlteraFoto(()=> alteraFoto < (Fotos.length -1) ? (alteraFoto + 1) : setAlteraFoto(0));
  }

  return(
    <div>
        <div className="flex justify-center">
          <h1 className="text-center text-5xl bg-gradient-to-r from-gray-800 to-sky-950 w-max  font-bold my-8 p-4 rounded-xl">Galeria de imagens</h1>
        </div>

        <div className="galeria-de-imagens grid grid-cols-3 gap-8 p-8">
          {Fotos.map(item => (
            <div key={item.id}>
              <img 
                src={item.img} 
                onClick={(e)=> abrirImg(e, item.id)}
                className="cursor-pointer rounded-xl hover:shadow hover:shadow-sm  hover:shadow-white"
              />
            </div>
          ))}
        </div>

        <div>
          {status && 
            <div className="text-white">
              <ImagemGrande img={alteraFoto} callBack={fecharImagem} callBackAlterandoFoto={alterandoImagem}/>
            </div>}
        </div>

    </div>
  )
}