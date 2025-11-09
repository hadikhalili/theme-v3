import { f as flatUnwrap } from './MDCSlot-Bm6IuY7a.mjs';
import { renderSlot as renderSlot$1 } from 'vue';

const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props?.unwrap) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};

export { renderSlot as r };
