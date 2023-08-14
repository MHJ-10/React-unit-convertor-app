import React from "react";
import { volume } from "../units";
import Unit from "./unit";

function Volume() {
  return <Unit label="Length" items={volume} />;
}
export default Volume;
