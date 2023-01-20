export default function List({ data, onClick }) {
  return (
    <div>
      <div onClick={onClick} className="listBox">
        <div>{data?.id}</div>
        <div>{data?.name}</div>
        <div>{data?.price}</div>
      </div>
      <style jsx>
        {`
          .listBox {
            border: 1px solid red;
            width: 300px;
          }
        `}
      </style>
    </div>
  );
}
