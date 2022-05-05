import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

import Management from "layouts/Management.js";
import CardTable from "components/Cards/CardTable";
import ProductEdit from "components/Cards/ProductEdit";
import { useState, useEffect } from "react";
import axios from "axios";

function getProducts(setProducts, pageNumber, searchText, sortBy, sortType) {
  var qtext = searchText ?? "";
  var qsort = sortBy ? `&sort=${sortBy}` : "";
  var qsortType = sortType ? `&sortType=${sortType}` : "";
  axios
    .get(
      `https://cms.bugtech.ir/api/products?text=${qtext}&page=${pageNumber}${qsort}${qsortType}`
    )
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
  const [isProductEdit, setIsProductEdit] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(false);



  const enterChecker = (event) => {
    if (event.keyCode === 13) {
      setPageNumber(0);
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
      {!isProductEdit ?     
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded px-4">
          <div className="relative flex flex-row min-w-0 break-words w-11/12 mb-6 shadow-lg rounded px-4">
            <button
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
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
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
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
          <div
            className="relative flex flex-row min-w-0 break-words w-11/12 mb-6 shadow-lg rounded px-4"
            onChange={(event) => {
              setSortBy(event.target.value), setPageNumber(0);
            }}
          >
            <input type="radio" value="date" name="sort" />{" "}
            <a className="px-4">date modified</a>
            <input type="radio" value="price" name="sort" />{" "}
            <a className="px-4">price</a>
            <input type="radio" value="cat" name="sort" />{" "}
            <a className="px-4">category</a>
          </div>
          <div
            className="relative flex flex-row min-w-0 break-words w-11/12 mb-6 shadow-lg rounded px-4"
            onChange={(event) => {
              setSortType(event.target.value), setPageNumber(0);
            }}
          >
            <input type="radio" value="desc" name="sort2" />{" "}
            <a className="px-4">desc</a>
            <input type="radio" value="asce" name="sort2" />{" "}
            <a className="px-4">asce</a>
          </div>
        </div> :<br></br>}
        <div className="w-full mb-12 px-4">
        {!isProductEdit ?   
            <CardTable
            setIsProductEdit={setIsProductEdit}
            setItemToEdit={setItemToEdit}
            color="dark"
            name="Products"
            items={products}
            pageNumber={pageNumber}
          />: 
          <ProductEdit
          setIsProductEdit={setIsProductEdit}
          
          item={itemToEdit}
          ></ProductEdit>}
        </div>
      </div>
    </>
  );
}

Products.layout = Management;
