import { useRouter } from "next/router";
import { list } from "@/src/common";
import axios from "axios";
import Image from "next/image";

export default function List() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const item = list.filter((e) => e.id === Number(id))[0];

  return (
    <>
      <div className="listBox">
        <h1>{item.name}</h1>
        <div className="image">
          <img src="/images/pork_neck.jpg" alt="돼지목살" />
        </div>
        <div className="contentsBox">
          <div>오늘자가격 : {item.price}원</div>
          <div>어제보다 몇 %</div>
          <div>지난달 보다 몇 %</div>
        </div>
        <div className="contentsBox">
          <div>1</div>
          <div>2</div>
          <div>2</div>
        </div>
        <div>{item.price}</div>
      </div>
      <style jsx>
        {`
          .listBox {
            margin: 0 auto;
            border: 1px solid red;
            width: 100%;
          }
          .image > img {
            width: 20vw;
            height: 20vw;
            margin: 0 auto;
          }
          .contentsBox {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
        `}
      </style>
    </>
  );
}
