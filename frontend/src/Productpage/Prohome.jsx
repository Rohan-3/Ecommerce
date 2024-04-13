import { useEffect, useState } from 'react';
import axios from 'axios';
import ProCard from './ProCard';

const Prohome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:2000/getData`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {loading == true ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {products.map((temp) => (
              <ProCard
                img={temp.img}
                ProductId={temp.ProductId}
                Brand={temp.Brand}
                Price={temp.Price}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Prohome;
