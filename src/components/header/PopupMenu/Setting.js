import React from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import { useLayout } from "../../../layout/LayoutContext";
import MenuButton from "./MenuButton";


export default function Setting() {
  const { toggleRightSidebar } = useLayout();


  return (
    <MenuButton icon={<SettingsIcon />} label="Settings" onclick={toggleRightSidebar} />

  );
}
