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

function getProducts(setProducts, pageNumber, searchText, sortBy, sortType) {
  var qtext = searchText ?? "";
  var qsort = sortBy ? `&sort=${sortBy}`: "";
  var qsortType = sortType ? `&sortType=${sortType}`: "";  
  axios
    .get(`https://cms.bugtech.ir/api/products?text=${qtext}&page=${pageNumber}${qsort}${qsortType}`)
    .then((response) => {
      setProducts(response.data);
      console.log("this is props", response.data?.main?.images.length);
    });
}

export default function Products() {
  const [products, setProducts] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortType, setSortType] = useState("asce");  

  const enterChecker = (event) => {
    if (event.keyCode === 13) {
      //console.log('enter',searchQuery)
      getProducts(setProducts, pageNumber, searchText, sortBy);
    }
  };

  useEffect(() => {
    getProducts(setProducts, pageNumber, searchText, sortBy, sortType);
    console.log(products);
  }, [pageNumber, sortBy, sortType]);


  const isActive = (index) => {
    if (tab === index) return "border-2 border-rose-500";
    return "border-2";
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded px-4">
          <div className="relative flex flex-row min-w-0 break-words w-11/12 mb-6 shadow-lg rounded px-4">
            <button
              className=" p-2 m-2 "
              type="button"
              onClick={(event) => {
                if (pageNumber > 0) {
                  setPageNumber(pageNumber - 1), setProducts({});
                }
              }}
            >
              Prev
            </button>
            <input
              className="relative flex p-2 m-2 justify-center "
              type="number"
              onChange={(event) => setPageNumber(Number(event.target.value))}
              value={pageNumber}
              defaultValue={pageNumber}
            ></input>
            <button
              className="p-2 m-2 "
              onClick={(event) => {
                if (products?.length > 19) {
                  setPageNumber(pageNumber + 1), setProducts({});
                }
              }}
            >
              Next
            </button>
            <input
              className="flex bg-white h-full px-5 w-5/12 justify-center text-sm focus:outline-none  font-Vazir"
              type="search"
              name="search"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              onKeyDown={(e) => enterChecker(e)}
              placeholder="Search"
            />
          </div>
          <div className="relative flex flex-row min-w-0 break-words w-11/12 mb-6 shadow-lg rounded px-4"  onChange={(event) => setSortBy(event.target.value)}>
            <input type="radio" value="date" name="sort" /> <lable className="px-4">date modified</lable>
            <input type="radio" value="price" name="sort" /> <lable className="px-4">price</lable>
            <input type="radio" value="cat" name="sort" /> <lable className="px-4">category</lable>
          </div>
          <div className="relative flex flex-row min-w-0 break-words w-11/12 mb-6 shadow-lg rounded px-4"  onChange={(event) => setSortType(event.target.value)}>
            <input type="radio" value="desc" name="sort2" /> <lable className="px-4">desc</lable>
            <input type="radio" value="asce" name="sort2" /> <lable className="px-4">asce</lable>
          </div>
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable
            color="dark"
            name="Products"
            items={products}
            pageNumber={pageNumber}
          />
        </div>
      </div>
    </>
  );
}

Products.layout = Management;
