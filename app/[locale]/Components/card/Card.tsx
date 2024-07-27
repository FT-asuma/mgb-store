"use client";
import { ICard } from "@/interfaces/ICard";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
interface ICardProps {
  data: ICard | undefined;
}
const Card = ({ data }: ICardProps) => {
  const [imageLoad, setImageLoad] = useState(true);
  useEffect(() => {
    if (data && data.images) {
      setImageLoad(false);
    }
  }, [data]);
  return (
    <div className="w-[23.5%] cursor-grab rounded-t-2xl flex flex-col gap-2">
      <div className="bg-lightGrey h-[330px] rounded-[30px] flex flex-col gap-6 justify-around items-center w-full">
        <div className="w-full transition-all relative flex justify-center items-center">
          <Link
            href={"/products/1"}
            className="h-[200px] w-[200px] flex justify-center items-center"
          >
            {imageLoad === true ? (
              <CircularProgress color="inherit" />
            ) : (
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={
                  data && data.images.length
                    ? data.images[0].image
                    : "/images/products/noImage.png"
                }
                width={200}
                height={200}
                className="max-h-[200px]"
                alt="some product"
              />
            )}
          </Link>
          {data && data.images && (
            <div className="absolute left-0 w-full top-full flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative left-3"
              >
                {data && data.discount !== 0 && (
                  <>
                    <svg
                      width="85"
                      height="35"
                      viewBox="0 0 85 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="7"
                        width="71"
                        height="35"
                        rx="5"
                        fill="#EF9545"
                      />
                      <circle cx="6.5" cy="17.5" r="6.5" fill="#F2F2F2" />
                      <circle cx="78.5" cy="17.5" r="6.5" fill="#F2F2F2" />
                    </svg>
                    <motion.p
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-[10%] text-center w-full text-white text-[20px] font-bold"
                    >
                      {data.discount}%
                    </motion.p>
                  </>
                )}
              </motion.div>
              <div
                className={`w-[66px] h-[66px] rounded-tl-[38px] left-full bg-white flex justify-center items-center`}
              >
                <motion.button
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hover:bg-hoveredGReen mt-2 ml-2 transition-colors rounded-full w-14 h-14 flex justify-center items-center bg-lightGreen"
                >
                  <svg
                    width="25"
                    className=""
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.2966 5.43891C24.2144 5.34062 24.1117 5.26156 23.9957 5.20732C23.8796 5.15308 23.7531 5.12498 23.625 5.125H5.98063L5.44578 2.18719C5.37252 1.78396 5.16007 1.41923 4.84546 1.15659C4.53085 0.893952 4.13405 0.750059 3.72422 0.75H1.75C1.51794 0.75 1.29538 0.842187 1.13128 1.00628C0.967187 1.17038 0.875 1.39294 0.875 1.625C0.875 1.85706 0.967187 2.07962 1.13128 2.24372C1.29538 2.40781 1.51794 2.5 1.75 2.5H3.71875L6.51438 17.8442C6.59673 18.2993 6.79783 18.7245 7.09734 19.0769C6.68396 19.463 6.38559 19.956 6.23531 20.5014C6.08504 21.0467 6.08874 21.623 6.246 22.1664C6.40326 22.7097 6.70794 23.1989 7.12625 23.5797C7.54456 23.9605 8.06015 24.218 8.61586 24.3236C9.17157 24.4292 9.74568 24.3789 10.2745 24.1782C10.8034 23.9774 11.2663 23.6341 11.612 23.1864C11.9576 22.7386 12.1725 22.2039 12.2328 21.6414C12.2931 21.079 12.1965 20.5109 11.9536 20H16.9214C16.7257 20.4098 16.6244 20.8583 16.625 21.3125C16.625 21.9182 16.8046 22.5103 17.1411 23.0139C17.4776 23.5176 17.9559 23.9101 18.5155 24.1419C19.0751 24.3737 19.6909 24.4343 20.285 24.3162C20.879 24.198 21.4247 23.9063 21.853 23.478C22.2813 23.0497 22.573 22.504 22.6912 21.91C22.8093 21.3159 22.7487 20.7001 22.5169 20.1405C22.2851 19.5809 21.8926 19.1026 21.3889 18.7661C20.8853 18.4296 20.2932 18.25 19.6875 18.25H9.09672C8.89181 18.25 8.6934 18.178 8.5361 18.0467C8.37879 17.9154 8.27257 17.733 8.23594 17.5314L7.88922 15.625H20.5767C21.1915 15.6249 21.7867 15.4091 22.2586 15.0151C22.7305 14.6212 23.0492 14.0741 23.1591 13.4692L24.4891 6.15641C24.5116 6.03001 24.506 5.90021 24.4727 5.77621C24.4395 5.65221 24.3793 5.53706 24.2966 5.43891ZM10.5 21.3125C10.5 21.5721 10.423 21.8258 10.2788 22.0417C10.1346 22.2575 9.9296 22.4258 9.68977 22.5251C9.44994 22.6244 9.18604 22.6504 8.93144 22.5998C8.67684 22.5491 8.44298 22.4241 8.25942 22.2406C8.07587 22.057 7.95086 21.8232 7.90022 21.5686C7.84958 21.314 7.87557 21.0501 7.97491 20.8102C8.07425 20.5704 8.24248 20.3654 8.45831 20.2212C8.67415 20.077 8.92791 20 9.1875 20C9.5356 20 9.86944 20.1383 10.1156 20.3844C10.3617 20.6306 10.5 20.9644 10.5 21.3125ZM21 21.3125C21 21.5721 20.923 21.8258 20.7788 22.0417C20.6346 22.2575 20.4296 22.4258 20.1898 22.5251C19.9499 22.6244 19.686 22.6504 19.4314 22.5998C19.1768 22.5491 18.943 22.4241 18.7594 22.2406C18.5759 22.057 18.4509 21.8232 18.4002 21.5686C18.3496 21.314 18.3756 21.0501 18.4749 20.8102C18.5742 20.5704 18.7425 20.3654 18.9583 20.2212C19.1742 20.077 19.4279 20 19.6875 20C20.0356 20 20.3694 20.1383 20.6156 20.3844C20.8617 20.6306 21 20.9644 21 21.3125ZM21.4375 13.1564C21.4008 13.3586 21.2941 13.5414 21.1361 13.6728C20.9781 13.8041 20.7789 13.8757 20.5734 13.875H7.57094L6.29891 6.875H22.5761L21.4375 13.1564Z"
                      fill="white"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        {data && data.images ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`flex gap-1 justify-between items-center`}
          >
            <svg
              width="14"
              height="13"
              className="mb-0.5"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8243 6.25517L10.3579 8.40767L11.0967 11.6124C11.1358 11.7799 11.1246 11.9552 11.0646 12.1165C11.0046 12.2777 10.8984 12.4176 10.7593 12.5188C10.6202 12.62 10.4543 12.678 10.2824 12.6854C10.1105 12.6928 9.9403 12.6494 9.79295 12.5606L6.99787 10.8653L4.20881 12.5606C4.06147 12.6494 3.89122 12.6928 3.71934 12.6854C3.54747 12.678 3.3816 12.62 3.24248 12.5188C3.10336 12.4176 2.99715 12.2777 2.93713 12.1165C2.87712 11.9552 2.86596 11.7799 2.90506 11.6124L3.6428 8.41095L1.17584 6.25517C1.04536 6.14264 0.951012 5.99408 0.904623 5.82814C0.858233 5.6622 0.86187 5.48625 0.915077 5.32237C0.968284 5.15849 1.06869 5.01396 1.20371 4.90691C1.33873 4.79987 1.50235 4.73507 1.67405 4.72064L4.92576 4.439L6.19506 1.4115C6.26135 1.25264 6.37315 1.11694 6.5164 1.0215C6.65964 0.926052 6.82793 0.875122 7.00006 0.875122C7.17219 0.875122 7.34048 0.926052 7.48373 1.0215C7.62697 1.11694 7.73878 1.25264 7.80506 1.4115L9.07819 4.439L12.3288 4.72064C12.5005 4.73507 12.6641 4.79987 12.7991 4.90691C12.9342 5.01396 13.0346 5.15849 13.0878 5.32237C13.141 5.48625 13.1446 5.6622 13.0982 5.82814C13.0518 5.99408 12.9575 6.14264 12.827 6.25517H12.8243Z"
                fill="#EF9545"
              />
            </svg>
            <h4 className="text-sm font-semibold">{data.rating}</h4>
            <p className="text-darkGrey text-sm">
              {"("}
              {data.rating_count} оценок{")"}
            </p>
          </motion.div>
        ) : (
          <div className="bg-lightGrey w-48 h-4 rounded-md"></div>
        )}
        {data && data.images ? (
          <Link
            href={"/"}
            className="text-[19.5px] font-medium hover:text-lightGreen"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              style={{letterSpacing: 0}}
            >
              {data.name}
            </motion.span>
          </Link>
        ) : (
          <div className="w-72 mt-2 bg-lightGrey rounded-md">
            <p className="text-[20px] text-transparent font-normal">loading</p>
          </div>
        )}
        {data && data.images ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-orange text-[20px] font-extrabold"
          >
            {data.discount_price} сум
          </motion.p>
        ) : (
          <div className="w-60 bg-lightGrey rounded-md mt-2">
            <p className="text-base text-transparent font-thin">Loading</p>
          </div>
        )}
        {data && data.discount !== 0 ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.7 }}
            transition={{ delay: 0.33 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-darkGrey text-sm line-through"
          >
            {data && typeof data.price === "number"
              ? data.price + "сум"
              : ""}{" "}
          </motion.p>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
