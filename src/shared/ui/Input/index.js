import { commonComponentProps, getAttrs } from "../../lib"

export function Input (props = {}) {
  const { type = "text", value="", required = false, extraClasses = {}, extraAttrs = {}, baseClass = "inpt", getCN } = { ...commonComponentProps, ...props }
  
  const getClassName = (elem, mod) => {
    return getCN(baseClass, elem, mod)
  }

  return `
    <input
      type="${type}"
      value="${value}"
      class="${getClassName("",  extraClasses)}"
      ${required ? "required" : ""}
      ${getAttrs(extraAttrs)} 
    />
  `
}