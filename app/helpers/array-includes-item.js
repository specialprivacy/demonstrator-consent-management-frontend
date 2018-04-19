import { helper } from '@ember/component/helper';

export function arrayIncludesItem(params, hash) {
  const array = hash["array"];
  const item = hash["item"];

  if(!array) return false;
  return array.includes(item);
}

export default helper(arrayIncludesItem);
