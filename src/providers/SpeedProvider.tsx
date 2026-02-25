import { useState } from "react";
import { SpeedContext } from "../context/SpeedContext";
import type { SpeedType } from "../utils/types";

export const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(0.5);
  
  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};