import React from "react";
import DropDown from "../DropDown";

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
    </div>
  );
};

export default Menu;
