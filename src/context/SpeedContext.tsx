import { createContext } from "react";
import type { SpeedType } from "../utils/types";
  
interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}
  
export const SpeedContext = createContext<SpeedContextInterface | undefined>(
  undefined
);