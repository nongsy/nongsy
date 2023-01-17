import { Menu } from "semantic-ui-react";
import * as style from "./Gnb.module.css";

export default function Nav() {
  const activeItem = "home";
  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} />
      <Menu.Item name="messages" active={activeItem === "messages"} />
      <Menu.Item name="friends" active={activeItem === "active"} />
    </Menu>
  );
}
