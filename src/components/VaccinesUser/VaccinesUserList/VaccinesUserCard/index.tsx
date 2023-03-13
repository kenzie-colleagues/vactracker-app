import React from 'react'
import { IProductsProps } from '../../../../providers/CartContext/@typesCart'

const VaccinesUserCard= ({ product }: IProductsProps) => {
  return (
    <li className="w-90 flex items-center justify-around rounded-lg bg-white md:flex-col  ml-10 mr-10 mb-10 outline-gray-600 shadow-2xl" >
        <div className='w-1/2 h-1/6  ' >
        <img src={`${product.img}`} alt="Vacinas"  className="w-full center rounded-lg "/>
        </div>
        <div>
            <h3 className="text-base text-green-600 font-medium text-center">{product.name}</h3>
            <p className='text-green-700 font-medium text-center'>Vacina Reservada</p>   
               <div className='divide-y divide-dashed'></div>     
        </div>

    </li>
  )
}

export default VaccinesUserCard