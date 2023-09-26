import navigation from "./navigation";
import { products } from "./products";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export {
    classNames,
    navigation,
    products
}
