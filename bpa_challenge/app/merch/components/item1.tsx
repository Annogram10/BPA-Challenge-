"use client"
import React from 'react'

const Item1 = () => {
  return (
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Hoodies</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <li>
      <a href="merch/hoodies"> Buy now</a>
    </li>
    </div>
  </div>
</div> 
    )
}

export default Item1