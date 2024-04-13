import { useEffect, useState } from 'react';
import axios from 'axios';
import ProCard from './ProCard';

const Promen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menpro, setMenpro] = useState([]);
  let categorie = 'Men';
  let Mcategorie = categorie.toLowerCase();

  useEffect(() => {
    axios
      .get(`http://localhost:2000/getData`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  //Men products filtration

  useEffect(() => {
    setMenpro(products.filter((temp) => temp.Category.includes(categorie)));
  }, [products]);

  return (
    <div>
      {loading == true ? (
        <p>Men Loading...</p>
      ) : (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {menpro.map((temp) => (
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

export default Promen;
