import React from "react";
export default function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="navWrapper">
          <div className="navItem">개로고</div>
          <div className="navItem">메뉴1</div>
          <div className="navItem">메뉴2</div>
          <div className="navItem">메뉴3</div>
          <div className="navItem">메뉴4</div>
        </div>
      </div>

      <style jsx>{`
        .nav {
          margin: 0 auto;
          height: 80px;
          line-height: 80px;
          border-bottom: 1px solid red;
        }

        .navWrapper {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 1400px;
          min-width: 1000px;
          margin: 0 auto;
        }

        .navItem {
          font-size: 30px;
          width: 150px;
          height: 50px;
        }
      `}</style>
    </>
  );
}
