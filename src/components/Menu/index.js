import React from "react";
import DropDownBom from "../DropDownBom";

const items = [
  {
    pathName: "/test", label: "Shape", subItems:
      ["Roda",
        "Shape Maple",
        "Shape Nacional",
        "Old School",
        "Longboard"
      ]
  },
  {
    pathName: "/test", label: "Confecção", subItems:
      ["Blusa",
        "Moletom",
        "Calça"
      ]
  },
  {
    pathName: "/test", label: "Feminino", subItems:
      ["Shouguer bag kkk",
        "Calça",
        "Sei la",
        "Iphone"
      ]
  },
];

const Menu = () => {
  return (
    <div>
      <DropDownBom items={items} />
    </div>
  );
};

export default Menu;
