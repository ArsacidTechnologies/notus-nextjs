import React from "react";
import Image from "next/image";
// components
import { useRouter } from "next/router";

// layout for page

import Management from "layouts/Management.js";
import CardTable from "components/Cards/CardTable";
import { useState, useEffect } from "react";
import axios from "axios";

function getProductData(setProductData,id){
  axios.get(`https://cms.bugtech.ir/api/product/?id=${id}`)
 .then((response) => {
     //console.log('2. server response:', response?.data?.main?.images,id)
     setProductData(response.data)
     console.log("this is props",response.data?.main?.images.length)

 });
}

export default function Product() {
  const [productData,setProductData ] = useState({}); 
  const [tab, setTab] = useState(0);
  const [img, setImg] = useState(undefined);
  const router = useRouter()
  const { id } = router.query

  useEffect(()=>{  
    getProductData(setProductData,id)
    console.log("this is images",img)
 
   },[1])

   const isActive = (index) => {
    if (tab === index) return "border-2 border-rose-500";
    return "border-2";
  }; 
  useEffect(()=>{
    //console.log("received")
    //setImages(productData,setImg)
    setImg (productData?.main?.images)
  },[productData])

  return (
    <>
       <div className="flex flex-wrap w-11/12 justify-items-stretch  row detail_page">

      <div className="w-4/12 col-md-6 bg-white justify-items-stretch">
      {img ? <Image
          unoptimized="true"
          objectFit="cover"
          src={`https://api.bugtech.ir/api/image?x=800&y=800&q=100&t=jpg&path=${productData.main.images[tab]}&n=${tab}`|| DEFAULT_IMG_URL}
          altText={productData?.main?.title_fa ?? ""}
          title={productData?.main?.title_fa ?? ""}
          width="800"
          height="800"
        />:<br></br>}

        <div
          className="flex flex-wrap  row mx-0 "
          style={{ cursor: "pointer" }}
        >
        {img?.map((index, arr) =>(
              <div
              className={`img-thumbnail  mx-2 rounded ${isActive(arr)}`}
            >
              <Image
                key={arr}
                src={`https://api.bugtech.ir/api/image?x=45&y=45&q=100&t=webp&path=${productData.main.images[arr]}&n=${arr}`   ?? DEFAULT_IMG_URL}
                alt={""}
                onClick={() => setTab(arr)}
                width="45"
                height="45"
              />
            </div>
          ))??<br></br>} 
        </div>
      </div>
      <div className="flex my-5   w-3/12 justify-end  bg-white">
        {/* <AddToCartCard product={productData}></AddToCartCard> */}
      </div>

      <div className="col-md-6 mt-3 w-9/12">
        {/* <Modal buttonText={"مشخصات کامل"} productData={productData}/> */}
        <h2 className="my-2 font-Vazir-Bold text-lg text-pallet2-navy">
          درباره این محصول
        </h2>


      </div>
    </div>
    </>
  );
}

Product.layout = Management;
