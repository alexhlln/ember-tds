import { dProducts, dPromos } from 'ember-td2/data/datas';
import Service from '@ember/service';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeServices() {
    return dProducts.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    return this.activeServices.reduce(function (somme, current) {
      return somme + current.price;
    }, 0);
  }
}
