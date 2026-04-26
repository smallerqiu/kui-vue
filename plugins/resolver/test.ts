import { getComponentNames } from "./index";
import { generateVeturConfig } from "./vetur";

const componentNames = getComponentNames();

generateVeturConfig(componentNames);
