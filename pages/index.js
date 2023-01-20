import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { list } from "../src/common";
import { useEffect } from "react";
import Seo from "@/src/component/Seo";

import NavBar from "@/src/component/NavBar";
import List from "../src/component/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  /*
  useEffect(() => {}, []); // 최초 1회만 데이터 받아오기
  => 데이터 받아오기
  임시로 common/data 의 list 사용
  */

  return (
    <>
      <Seo />
      <div className="wrapper">
        <div className="wrapperChildren">
          <div className="intro">
            <strong>농산물 시세를 한 눈에 확인해보이소~</strong>
            <p>정육부터 수산물까지!</p>
            <p>농시와 함께 알뜰한 장보이소~</p>
          </div>
          <div className="categoryBox">
            <div className="mainCategory">A</div>
            <div className="subCategory">B</div>
          </div>
          <div>
            <List list={list} />
          </div>
        </div>
      </div>



      <style jsx>{`
        .intro {
          margin-top: 30px;
          border: 1px solid red;
        }
        .categoryBox {
          display: flex;
        }
        .categoryBox div {
          border: 1px solid red;

          width: 100%;
        }
      `}</style>
    </>
  );
}
