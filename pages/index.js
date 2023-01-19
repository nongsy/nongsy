import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { list } from "../src/common";
import { useEffect } from "react";
import Slide from "@/src/component/Slide";
import Seo from "@/src/component/Seo";

import NavBar from "@/src/component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  /*
  useEffect(() => {}, []); // 최초 1회만 데이터 받아오기
  => 데이터 받아오기
  임시로 common/data 의 list 사용
  */

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="wrapperChildren">
          <div className="content">
            <strong>농산물 시세를 한 눈에 확인해보이소~</strong>
            <p>정육부터 수산물까지!</p>
            <p>농시와 함께 알뜰한 장보이소~</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          background-color: tomato;
        }

        .wrapperChildren {
          width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .content {
          margin-top: 30px;
        }
      `}</style>
    </>
  );
}
