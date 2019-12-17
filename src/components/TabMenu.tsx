import React from "react";

// TODO: smazat megasračka
interface TabsProps {
  showPage: (pagenumber: number) => void;
}
const Tabs = (props: TabsProps) => (
  <>
    <div onClick={() => props.showPage(1)}>1</div>
    <div onClick={() => props.showPage(2)}>2</div>
    <div onClick={() => props.showPage(3)}>3</div>
    <div onClick={() => props.showPage(4)}>4</div>
  </>
);

export default Tabs;
