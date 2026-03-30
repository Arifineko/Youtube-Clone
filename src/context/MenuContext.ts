import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface MenuContextType {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
}

const defaultContext: MenuContextType = {
  menu: false,
  setMenu: () => {},
};

export const MenuContext = createContext<MenuContextType>(defaultContext);
