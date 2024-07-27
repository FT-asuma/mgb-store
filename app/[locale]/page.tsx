import Navigation from "./Components/navigation/Navigation";
import Container from "./Components/container/Container";
import Wrapper from "./Components/Wrapper/Wrapper";
import { IPages } from "@/interfaces/IPages";
const getProductList = async () => {
  const res = await fetch(
    "https://api-dev.mbgstore.uz/api/v1/store/products?page=1",
    { cache: "force-cache" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const productList: IPages = await getProductList();
  const numberOfProducts = productList.result.totalElements;
  return (
    <main className="w-full min-h-lvh mb-20 flex justify-center flex-col items-center gap-3">
      <div className="mt-32 flex flex-col gap-3">
        <Navigation productList={productList} />
        <Container>
          <section className="flex flex-col gap-2">
            <h3 className="text-[40px] font-bold">Хиты продаж</h3>
            <div className="flex w-full justify-between items-center">
              <p className="text-darkGrey text-base font-medium">
                {numberOfProducts} товаров
              </p>
              <div className="flex justify-between items-center gap-10">
                <button className="flex gap-1 justify-between items-center">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 4.25002H3.84375C4.00898 4.89533 4.38428 5.4673 4.91048 5.87575C5.43669 6.2842 6.08387 6.50591 6.75 6.50591C7.41613 6.50591 8.06331 6.2842 8.58952 5.87575C9.11572 5.4673 9.49102 4.89533 9.65625 4.25002H17.25C17.4489 4.25002 17.6397 4.17101 17.7803 4.03035C17.921 3.8897 18 3.69894 18 3.50002C18 3.30111 17.921 3.11035 17.7803 2.96969C17.6397 2.82904 17.4489 2.75002 17.25 2.75002H9.65625C9.49102 2.10471 9.11572 1.53274 8.58952 1.12429C8.06331 0.715842 7.41613 0.494141 6.75 0.494141C6.08387 0.494141 5.43669 0.715842 4.91048 1.12429C4.38428 1.53274 4.00898 2.10471 3.84375 2.75002H0.75C0.551088 2.75002 0.360322 2.82904 0.21967 2.96969C0.0790178 3.11035 0 3.30111 0 3.50002C0 3.69894 0.0790178 3.8897 0.21967 4.03035C0.360322 4.17101 0.551088 4.25002 0.75 4.25002ZM6.75 2.00002C7.04667 2.00002 7.33668 2.088 7.58335 2.25282C7.83003 2.41764 8.02229 2.65191 8.13582 2.926C8.24935 3.20009 8.27906 3.50169 8.22118 3.79266C8.1633 4.08363 8.02044 4.3509 7.81066 4.56068C7.60088 4.77046 7.33361 4.91332 7.04264 4.9712C6.75166 5.02908 6.45006 4.99937 6.17597 4.88584C5.90189 4.77231 5.66762 4.58005 5.5028 4.33338C5.33797 4.0867 5.25 3.7967 5.25 3.50002C5.25 3.1022 5.40804 2.72067 5.68934 2.43936C5.97064 2.15806 6.35218 2.00002 6.75 2.00002ZM17.25 11.75H15.6562C15.491 11.1047 15.1157 10.5327 14.5895 10.1243C14.0633 9.71584 13.4161 9.49414 12.75 9.49414C12.0839 9.49414 11.4367 9.71584 10.9105 10.1243C10.3843 10.5327 10.009 11.1047 9.84375 11.75H0.75C0.551088 11.75 0.360322 11.829 0.21967 11.9697C0.0790178 12.1103 0 12.3011 0 12.5C0 12.6989 0.0790178 12.8897 0.21967 13.0304C0.360322 13.171 0.551088 13.25 0.75 13.25H9.84375C10.009 13.8953 10.3843 14.4673 10.9105 14.8758C11.4367 15.2842 12.0839 15.5059 12.75 15.5059C13.4161 15.5059 14.0633 15.2842 14.5895 14.8758C15.1157 14.4673 15.491 13.8953 15.6562 13.25H17.25C17.4489 13.25 17.6397 13.171 17.7803 13.0304C17.921 12.8897 18 12.6989 18 12.5C18 12.3011 17.921 12.1103 17.7803 11.9697C17.6397 11.829 17.4489 11.75 17.25 11.75ZM12.75 14C12.4533 14 12.1633 13.912 11.9166 13.7472C11.67 13.5824 11.4777 13.3481 11.3642 13.074C11.2506 12.8 11.2209 12.4984 11.2788 12.2074C11.3367 11.9164 11.4796 11.6491 11.6893 11.4394C11.8991 11.2296 12.1664 11.0867 12.4574 11.0288C12.7483 10.971 13.0499 11.0007 13.324 11.1142C13.5981 11.2277 13.8324 11.42 13.9972 11.6667C14.162 11.9133 14.25 12.2034 14.25 12.5C14.25 12.8978 14.092 13.2794 13.8107 13.5607C13.5294 13.842 13.1478 14 12.75 14Z"
                      fill="#232323"
                    />
                  </svg>
                  <span className="font-semibold">Показать фильтры</span>
                </button>
                <div className="flex gap-1 justify-between items-center">
                  <p className="font-semibold">Сначала:</p>
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-darkGrey font-semibold">Популярные</p>
                    <svg
                      width="18"
                      height="9"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.0307 1.53068L9.53068 9.03068C9.46102 9.10041 9.3783 9.15573 9.28726 9.19347C9.19621 9.23121 9.09861 9.25064 9.00005 9.25064C8.90149 9.25064 8.80389 9.23121 8.71285 9.19347C8.6218 9.15573 8.53908 9.10041 8.46943 9.03068L0.969426 1.53068C0.828695 1.38995 0.749634 1.19907 0.749634 1.00005C0.749634 0.801028 0.828695 0.610156 0.969426 0.469425C1.11016 0.328695 1.30103 0.249634 1.50005 0.249634C1.69907 0.249634 1.88995 0.328695 2.03068 0.469425L9.00005 7.43974L15.9694 0.469425C16.0391 0.399743 16.1218 0.344468 16.2129 0.306756C16.3039 0.269044 16.4015 0.249634 16.5001 0.249634C16.5986 0.249634 16.6962 0.269044 16.7872 0.306756C16.8783 0.344468 16.961 0.399743 17.0307 0.469425C17.1004 0.539108 17.1556 0.621834 17.1933 0.712878C17.2311 0.803923 17.2505 0.901505 17.2505 1.00005C17.2505 1.0986 17.2311 1.19618 17.1933 1.28722C17.1556 1.37827 17.1004 1.46099 17.0307 1.53068Z"
                        fill="#232323"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Wrapper
              productList={productList}
              numberOfProducts={productList && productList.result.totalElements}
            />
          </section>
        </Container>
      </div>
    </main>
  );
}
