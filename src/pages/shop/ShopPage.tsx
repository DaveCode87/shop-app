
import PocketBase from 'pocketbase';
import { Product } from '@/model/product';

export const pb = new PocketBase('http://127.0.0.1:8090');

export function ShopPage() {

  function loadData() {
    pb.collection('products').getList<Product>()
      .then(res => {
        console.log(res.items[0].name)
      })
  }

  return (
    <div>
      <h1 className="title">SHOP</h1>

      <button className="btn" onClick={loadData}>load data</button>
    </div>
  )
}