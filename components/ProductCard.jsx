import React from 'react'
import Link from 'next/link'
const ProductCard = () => {
  return (
    <Link href="/product/1">
        <img className="w-full" src="/product-1.webp"
            alt="product Image"
        ></img>
        <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Shoes</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        $60
                    </p>
                    <p className="text-base  font-medium line-through">
                        $75.0       
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                       20% OFF         
                    </p>
                </div>
            </div>
    </Link>
  )
}
export default ProductCard
