"use client";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import { ICard } from "@/interfaces/ICard";
import { useRouter, useSearchParams } from "next/navigation";
import { IPages } from "@/interfaces/IPages";
import axios from "axios";
const Wrapper = ({
  productList,
  numberOfProducts,
}: {
  productList: IPages;
  numberOfProducts: number;
}) => {
  const [products, setProducts] = useState<ICard[]>();
  const [pageId, setPageId] = useState<number>(1);
  const [newArr, setNewArr] = useState<ICard[]>([]);
  const [fetcNew, setFetchNew] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const removeDuplicates = (arr: any, prop: any) => {
    const uniqueValues = new Set();
    return arr.filter((obj: any) => {
      const value = obj[prop];
      if (!uniqueValues.has(value)) {
        uniqueValues.add(value);
        return true;
      }
      return false;
    });
  };

  useEffect(() => {
    if (pageId > 1) {
      const result = axios.get(
        `https://api-dev.mbgstore.uz/api/v1/store/products?page=${
          page ? Number(page) + 1 : pageId + 1
        }`
      );
      result.then((res) => {
        setLoading(true);
        setNewArr((prev) => [...prev!, ...res.data.result.content]);
      });
    }
  }, [pageId]);
  useEffect(() => {
    if (newArr && newArr.length) {
      setProducts((prev) => [...prev!, ...newArr]);
      setLoading(false);
    }
  }, [newArr]);
  const { push } = useRouter();
  useEffect(() => {
    if (productList && productList.result) {
      setProducts(productList.result.content);
      setLoading(false);
    }
  }, [productList]);
  useEffect(() => {
    push("?page=1");
  }, []);
  if (!productList && !numberOfProducts) {
    return <div className="min-h-lvh">Page is not working</div>;
  }

  if (loading === true) {
    return (
      <div className="flex-wrap min-h-[600px] mt-4 flex items-start justify-start gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12].map((i) => (
          <Card data={undefined} key={Math.random() + i} />
        ))}
      </div>
    );
  }

  const filteredArray: ICard[] = removeDuplicates(products, "id");

  return (
    <>
      <div className="flex-wrap min-h-[600px] mt-4 flex items-start justify-start gap-6">
        {filteredArray &&
          filteredArray.length &&
          filteredArray.map((value, i) => <Card key={value.id} data={value} />)}
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-16 gap-2.5">
        <p className="text-sm text-darkGrey font-medium">
          1-{filteredArray.length} из {numberOfProducts} товаров
        </p>
        {numberOfProducts !== products?.length && (
          <button
            onClick={() => {
              push(`?page=${Number(page) > 1 ? Number(page) + 1 : pageId + 1}`);
              setPageId(Number(page) ? Number(page) + 1 : pageId + 1);
              setFetchNew(!fetcNew);
            }}
            className="text-lightGreen border-2 w-[300px] font-bold text-base h-[50px] rounded-2xl border-lightGreen"
          >
            Показать больше
          </button>
        )}
      </div>
    </>
  );
};

export default Wrapper;
