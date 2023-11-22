import { Product} from '@/model/product';
import { useEffect, useState } from 'react';

// NEW
import { pb } from '../../pocketbase';

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    pb.collection('products').getList<Product>()
      .then(res => {
        setProducts(res.items)
      })
  }, [])

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {
        products.map(p => {
          return (
            <div key={p.id}>
             • {p.name}
            </div>
          )
        })
      }
    </div>
  )
}