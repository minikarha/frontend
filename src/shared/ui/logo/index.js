import { commonComponentProps, getAttrs } from "../../lib/index.js";

export function Logo (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "logo", getCN, imgSrc } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<img src="${imgSrc}" class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}  alt="logo"/>`
}
