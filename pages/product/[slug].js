import Wrapper from '@/components/Wrapper'
import React from 'react'
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import { IoMdHeartEmpty } from 'react-icons/io'
import RelatedProduct from '@/components/RelatedProduct'
const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap[-[100px]">
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0"> 
            <ProductDetailsCarousel/>
          </div>


          <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            JJNJ
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            ejrkejrke
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : $800
                            </p>
                            <p className="text-base  font-medium line-through">
                                       $ 200
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                       75 % off
                            </p>
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                    </div>
                    <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                            <div key="size" className="border rounded-md text-center py-3 font-medium bg-c3/[0.2] ">
                                7
                            </div>
                            <div key="size" className="border rounded-md text-center py-3 font-medium  bg-c3/[0.2] ">
                                8
                            </div>
                            <div key="size" className="border rounded-md text-center py-3 font-medium  bg-c3/[0.2] ">
                                9
                            </div>
                            <div key="size" className="border rounded-md text-center py-3 font-medium  bg-c3/[0.2] ">
                                10
                            </div>
                            <div key="size" className="border rounded-md text-center py-3 font-medium  bg-c3/[0.2] ">
                                11
                            </div>
                    </div>
                    <div className="text-red-600 mt-1">
                        Size selection is required
                    </div>
                    <button className="my-[10px] w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                    </button>

                    <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                    </button>


                <div>
                        <div className="text-lg font-bold mb-5">
                        Running Shoe
                        </div>
                        <div className="markdown text-md mb-5">
                              
Puma is a globally recognized sportswear and footwear brand that specializes in designing, manufacturing, and marketing athletic and casual products. Founded in 1948 by Rudolf Dassler, the brother of Adidas founder Adolf Dassler, Puma has grown to become one of the leading sportswear companies in the world.  
                        </div>
                </div>
                </div>
        </div>
        <RelatedProduct/>
      </Wrapper>
    </div>
  )
}

export default ProductDetails
