import Footer from "./Footer";
import Top from "./Top";

export default function Layout({ children }) {
  console.log(children);
  return (
    <div>
      <Top />
      <div>asd</div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
