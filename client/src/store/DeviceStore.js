import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'холодильники'},
      {id: 2, name: 'смартфоны'},
      {id: 3, name: 'ноутбуки'},
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Atlant'},
    ]
    this._devices = [
      {id: 1, name: 'Iphone 12 pro', price: 100000, rating: 5, img: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6765094956.jpg'},
      {id: 2, name: 'Iphone 13 pro', price: 100000, rating: 5, img: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6765094956.jpg'},
      {id: 3, name: 'Iphone 14 pro', price: 100000, rating: 5, img: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6765094956.jpg'},
      {id: 4, name: 'Iphone 15 pro', price: 100000, rating: 5, img: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6765094956.jpg'},
    ]
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}