export default function Layout({ children }) {
  return (
    <div>
      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
      <style jsx>
        {`
          .container {
            border: 1px solid red;
          }
          .wrapper {
            width: 1000px;
            margin: 0 auto;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
