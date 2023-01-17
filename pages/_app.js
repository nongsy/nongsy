import Footer from "@/src/component/Footer";
import Top from "@/src/component/Top";
import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";

// _app.js : 레이아웃을 짜기 위해서 조작해야할 파일
// 모든 페이지는 이 곳을 통함

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

/*
페이지 전환시 레이아웃을 유지할 수 있음.
페이지 전환시 상태값을 유지할 수 있음.

componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있음.
추가적인 데이터를 페이지로 주입시켜줄 수 있음.
글로벌 css를 이 곳에 선언
*/

/*
pageProps 로 넘어온 컴포넌트들은 현재 페이지를 의미함. 
페이지 전환시에 컴포넌트 props가 변경된다.
pageProps는 데이터 페치 메소드를 통해 미리 가져온 초기 객체이다.

이 메서드를 사용하지 않는다면 빈객체가 전달된다.
*/
