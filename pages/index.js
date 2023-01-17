import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/index.module.css";
import { list } from "../src/common";
import { useEffect } from "react";
import Slide from "@/src/component/Slide";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log(1111, list);

  /*
  useEffect(() => {}, []); // 최초 1회만 데이터 받아오기
  => 데이터 받아오기
  임시로 common/data 의 list 사용
  */
  return (
    <div>
      <Head>
        <title>Nongsy | Main</title>
      </Head>
      <div className={styles.container}>
        <div>
          <div className={styles.main}>
            <div>
              <div>메인 홍보 아이템</div>
              <div>슬라이드로 구현</div>
              <Slide width={100} height={100} />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={styles.item}>정육*계란 </div>
            <div className={styles.item}>채소</div>
            <div className={styles.item}>과일</div>
            <div className={styles.item}>수산</div>
          </div>
        </div>
      </div>
    </div>
  );
}
