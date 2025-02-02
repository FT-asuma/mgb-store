import React from "react";
import Container from "../container/Container";
import Link from "next/link";
import { IPages } from "@/interfaces/IPages";
interface INavigationProps {
  productList: IPages
}
const Navigation = ({productList}: INavigationProps) => {
  return (
    <div className="w-full mt-2">
      <Container>
        <div className="w-full justify-start flex gap-1 h-[18px] items-center">
          <Link className="text-[15px] text-darkGrey" href={"/"}>
            Главная
          </Link>{" "}
          <svg
            width="6"
            height="9"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35378 6.35378L1.35378 11.3538C1.30733 11.4002 1.25218 11.4371 1.19148 11.4622C1.13079 11.4874 1.06573 11.5003 1.00003 11.5003C0.934336 11.5003 0.869282 11.4874 0.808586 11.4622C0.747889 11.4371 0.692739 11.4002 0.646284 11.3538C0.599829 11.3073 0.562978 11.2522 0.537837 11.1915C0.512696 11.1308 0.499756 11.0657 0.499756 11C0.499756 10.9343 0.512696 10.8693 0.537837 10.8086C0.562978 10.7479 0.599829 10.6927 0.646284 10.6463L5.29316 6.00003L0.646284 1.35378C0.552463 1.25996 0.499756 1.13272 0.499756 1.00003C0.499756 0.867352 0.552463 0.740104 0.646284 0.646284C0.740104 0.552464 0.867352 0.499756 1.00003 0.499756C1.13272 0.499756 1.25996 0.552464 1.35378 0.646284L6.35378 5.64628C6.40027 5.69272 6.43715 5.74786 6.46231 5.80856C6.48748 5.86926 6.50043 5.93433 6.50043 6.00003C6.50043 6.06574 6.48748 6.1308 6.46231 6.1915C6.43715 6.2522 6.40027 6.30735 6.35378 6.35378Z"
              fill="#999999"
            />
          </svg>
          <Link className="text-[15px] font-semibold" href={"#"}>
            Хиты продаж
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
