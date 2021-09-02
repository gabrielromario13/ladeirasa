import React from "react";
import DropDownBom from "../DropDownBom";

const items = [
  {
    label: "Shape", subItems:
      ["Roda",
        "Shape Maple",
        "Shape Nacional",
        "Old School",
        "Longboard"
      ]
  },
  {
    label: "Confecção", subItems:
      ["Blusa",
        "Moletom",
        "Calça"
      ]
  },
  {
    label: "Feminino", subItems:
      ["Shouguer bag kkk",
        "Calça",
        "Sei la",
        "Iphone"
      ]
  },
];

const Menu = () => {
  return (
    <DropDownBom items={items} />
  );
};

export default Menu;
