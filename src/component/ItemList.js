import { useRouter } from "next/router";
import List from "./List";

export default function ItemList({ list }) {
  const router = useRouter();
  console.log(list);
  return (
    <>
      <div className="wrapper">
        {list?.map((e) => (
          <List
            key={e.id}
            className="listBox"
            onClick={() => router.push(`./list/${e.id}`)}
            data={e}
          />
        ))}
      </div>
      {/* <style jsx>
        {`
          .wrapper {
            border: 1px solid red;
          }
          .listBox {
            border: 1px solid red;
            width: 300px;
          }
        `}
      </style> */}
    </>
  );
}
