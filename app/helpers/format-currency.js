import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params) {
  let [symbol, value] = params;
  return value + symbol;
});
