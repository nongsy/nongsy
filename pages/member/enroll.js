import { Divider } from "semantic-ui-react";

function Enroll() {
  return (
    <div>
      <h1>회원가입하기</h1>
      <div>회원가입에 들어갈 기능</div>
      <Divider />
      <ul>
        <li>아이디 입력창</li>
        <li>비밀번호 입력창</li>
        <li>비밀번호 확인창</li>
        <li>이메일 확인창</li>
      </ul>
    </div>
  );
}

export default Enroll;
