import React from "react";
import DropDownBom from "../DropDownBom";

const items = [
  { pathName: "/test", label: "Shape" },
  { pathName: "/test", label: "Confecção" },
  { pathName: "/test", label: "Feminino" },
];

const Menu = () => {
  return (
    <div>
      <DropDownBom items={items} subItems={["Roda",
        "Shape Maple",
        "Shape Nacional",
        "Old School",
        "Longboard"
      ]} />
    </div>
  );
};

export default Menu;
