import React from "react";
import DropDown from "../DropDown";
import DropDownBom from "../DropDownBom";

const items = [
  { pathName: "/test", label: "Shape" },
  { pathName: "/test", label: "Confecção" },
  { pathName: "/test", label: "Feminino" },
];

const Menu = () => {
  return (
    <div>
      <DropDown name="Início" menuItemName={["kk"]} />
      <DropDown
        name="Skate"
        menuItemName={[
          "Roda",
          "Shape Maple",
          "Shape Nacional",
          "Rolamento",
          "Lixa",
          "Trucks",
          "Acessórios Skate",
          "Skate Montado",
          "Old School",
          "Longboard",
        ]}
      />
      <DropDown name="Confecção" menuItemName={["sasas"]} />
      <DropDown name="Masculino" menuItemName={["sasa", "sfdgs", "asa"]} />
      <DropDown name="Feminino" menuItemName={["sasas"]} />
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
