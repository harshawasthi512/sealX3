import React from 'react'


export default function Cards(props) {
  const trimmedWalletAddress = props.walletAddress.slice(0,5)+"...."+props.walletAddress.slice(-5)
  return (
    <div className={`hover:shadow-lg hover:shadow-green-500 hover:scale-105 duration-300 border rounded-xl ${props.lightMode? "border-black" : "border-white"} flex flex-col gap-3 p-3 `}>
       <div>
        <p className='font-medium text-sm'>First Name</p>
        <p className='text-2xl'>{props.firstName}</p>
       </div>
       <div>
        <p className='font-medium text-sm'>Last Name</p>
        <p className='text-2xl'>{props.lastName}</p>
       </div>
       <div>
        <p className='font-medium text-sm'>Message</p>
        <p className='text-2xl'>{props.message}</p>
       </div>
       <div>
        <p className='font-medium text-sm'>Wallet Address</p>
        <p className='text-2xl'>{trimmedWalletAddress}</p>
       </div>
    </div>
  )
}
