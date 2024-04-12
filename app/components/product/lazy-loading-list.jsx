"use client";

import { useState } from "react";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";
import Loader from "@/app/components/loader/loader.jsx";

import dynamic from "next/dynamic";
const ProductCard = dynamic(() => import("./product-card"));

export default function LazyLoadingList({ getData }) {
  const [listItems, setListItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function updateState(data) {
    setCurrentPage((prevstate) => prevstate + 1);
    setListItems((prevState) => [...prevState, ...data.products]);
  }

  async function fetchMoreListItems() {
    const page = currentPage + 1;

    getData(page).then((fetchData) => {
      if (fetchData.products.length) {
        updateState(fetchData);
      }

      setIsFetching(false);
    });
  }

  return (
    <>
      {listItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
      {isFetching && <Loader />}
    </>
  );
}
