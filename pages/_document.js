import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
/*
Next에서 제공하는 documnet를 커스텀할 수 있음.
Next에서 페이지들은 마크업 정의를 건너뛰기 때문에
html , body 등의 태그를 만져야할 때는 이 파일을 필수적으로 사용해야 함.
*/

/*
_document.js 는 _app.js와 다름
documnet는 서버에서만 렌더링되고 
온클릭같은 이벤트 핸들러는 작동하지 않음.
css도 사용하지 않음.

모든페이지에 반영할 내용들은 _app.js에 적용하면 됨
*/
