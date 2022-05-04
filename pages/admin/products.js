import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Management from "layouts/Management.js";
import CardTable from "components/Cards/CardTable";
import { useState, useEffect } from "react";
import axios from "axios";


 function getProducts(setProducts){
  axios.get(`https://cms.bugtech.ir/api/products?text=asus&page=0`)
 .then((response) => {
     setProducts(response.data)
     console.log("this is props",response.data?.main?.images.length)
 });
}


export default function Products() {
const [products, setProducts] = useState({});

useEffect(()=>{  
  getProducts(setProducts)
  console.log(products)
 },[1])

 const isActive = (index) => {
   if (tab === index) return "border-2 border-rose-500";
   return "border-2";
 }; 

  return (
    <>
      <div className="flex flex-wrap">
        
      <div className="w-full mb-12 px-4">
          <CardTable name="Products" items={products}/>
        </div>
      </div>
    </>
  );
}

Products.layout = Management;
