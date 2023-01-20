import { useRouter } from "next/router";
import { list } from "@/src/common";

export default function List() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const item = list.filter((e) => e.id === Number(id))[0];

  return (
    <>
      <div className="listBox">
        <div>{item?.id}</div>
        <div>{item?.name}</div>
        <div>{item?.price}</div>
      </div>
      <style jsx>
        {`
          .listBox {
            border: 1px solid red;
            width: 300px;
          }
        `}
      </style>
    </>
  );
}
