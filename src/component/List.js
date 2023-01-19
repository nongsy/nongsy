export default function List({ list }) {
  return (
    <>
      <div className="wrapper">
        {list?.map((e) => (
          <div key={e.id} className="listBox">
            <div></div>
            <div>{e.name}</div>
            <div></div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .wrapper {
            border: 1px solid red;
          }
          .listBox {
            border: 1px solid red;
            width: 300px;
          }
        `}
      </style>
    </>
  );
}
