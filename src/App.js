import Main from "./Comp/Main";
import "./App.css";
import HeaderNew from "./Comp/NewGroup";
import Group from "./Comp/Headernew";
import Styleing from "./Comp/Style";
function Boss() {
  return (
    <div className="study">
      <Group /> <h1> Enjoy your study </h1>
      <Main />
      <HeaderNew />
      <Styleing/>
    </div>
  );
}

export default Boss;
