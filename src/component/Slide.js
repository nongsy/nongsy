import styles from "./Slide.module.css";

function Slide({ width, height }) {
  // 슬라이드 구현

  console.log(width, height);
  // width, height 받아서 사이즈 조절하도록

  return (
    <div className={styles.container}>
      <div className={styles.arr_prev}></div>
      <div className={styles.item}>이미지 ㅋ</div>
      <div className={styles.arr_next}>다음 화살표</div>
    </div>
  );
}

export default Slide;
