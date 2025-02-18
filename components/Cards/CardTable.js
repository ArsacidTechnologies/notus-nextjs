import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import Link from "next/link";
import { useState } from "react";

function howMuchIsReady(product) {
  var percentage = 100;
  if (!product.main?.sku) percentage -= 10;
  if (!product.main?.images[0]) percentage -= 10;
  if (!product.main.images[10]) percentage -= 5;
  if (!product.main.images[15]) percentage -= 5;
  if (!product.main.description) percentage -= 20;
  if (!product.default_variant.warranty.title_fa) percentage -= 20;
  if (!product.main.title_fa) percentage -= 10;
  if (!product.main.title_en) percentage -= 10;
  if (!product.default_variant.review) percentage -= 10;
  if (!product.default_variant.category.code) percentage -= 10;
  if (!product.main.prices.price) percentage -= 10;
  if (product.main.status == "draft") percentage -= 20;
  if (product.main.status == "review") percentage -= 10;
  return String(percentage) + "%";
}
export default function CardTable({
  color,
  name,
  items,
  pageNumber,
  setIsProductEdit,
  setItemToEdit
}) {
  const target = "_blank";

  //setIsProductEdit

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-pink-azini" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Products - page : {pageNumber}
              </h3>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full  bg-blueGray-700 hover:bg-white  border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-800 text-blueGray-50 border-blueGray-500")
                  }
                >
                  Product SKU
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Price
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Pictures
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-800 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {items.length ? (
                items.map((product) => {
                  return (
                    <tr
                      key={product.main.id}
                      className="border   bg-blueGray-700 hover:text-lightBlue-600 hover:bg-brand-green"
                    >
                      <th className="px-6 align-middle  text-xs whitespace-nowrap p-4 text-left flex items-center">
                        <button
                          type="button"
                          onClick={(e) => {
                            setItemToEdit(product)
                            setIsProductEdit(true);
                          }}
                        >
                          <img
                            src={`https://api.bugtech.ir/api/image?x=80&y=80&q=100&t=webp&path=${product?.main?.images[0]}`}
                            className="h-15 w-15 bg-white rounded"
                            alt="..."
                          ></img>{" "}
                        </button>
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light"
                              ? "text-blueGray-600"
                              : "text-white")
                          }
                        >
                          {product.main.sku}
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {product?.main?.prices?.digiPrice
                          ? `${String(
                              product?.main?.prices?.digiPrice
                            ).substring(0, 3)},${String(
                              product?.main?.prices?.digiPrice
                            ).substring(3, 6)},${String(
                              product?.main?.prices?.digiPrice
                            ).substring(6, 24)} ریال`
                          : "ناموجود"}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                        {product.main.status}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex">
                          <img
                            src={`https://api.bugtech.ir/api/image?x=80&y=80&q=100&t=webp&path=${product?.main?.images[0]}`}
                            alt="..."
                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                          ></img>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">
                            {howMuchIsReady(product)}
                          </span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div
                                style={{
                                  width: `${howMuchIsReady(product)}`,
                                }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                        <TableDropdown />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <br></br>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
