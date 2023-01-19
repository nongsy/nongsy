import Image from "next/image";
import { Header } from "semantic-ui-react";
import Nav from "./Nav";

import * as style from "./Top.module.css";

export default function Top() {
  return (
    <div>
      <div className={style.wrapper}>
        <Image src="/images/light-mode.png" alt="logo" width={80} height={80} />
        <Header as="h1">Here is Nongsy.</Header>
      </div>
      <Nav />
    </div>
  );
}

/*
  GNB : 
  => 별도 상태값과 액션등을 가지고 있으니까 
  컴포넌트를 새로만들어서 import
  */
