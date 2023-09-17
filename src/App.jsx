import React from 'react';
import Header from '/src/Header';
import Card from '/src/Card';
import Footer from '/src/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const cardData = [
    {
      imageSrc: 'https://amigosperros.com/wp-content/uploads/2020/04/Perros-medianos.jpg',
      name: 'Collie Barbudo',
      description: 'Estos perros, que viven de 12 a 14 años, se distraen con facilidad y les cuesta retener las órdenes',
    },
    {
      imageSrc: 'https://de10.com.mx/sites/default/files/styles/imagen_body/public/2021/10/25/razas_perros_desobedientes_pekines.jpg?itok=KLsHAW1f',
      name: 'Borzoi',
      description: 'Este perro fue criado para cazar lobos, ahora imagina si te hará caso a ti',
    },
    {
      imageSrc: 'https://i.pinimg.com/1200x/2a/09/86/2a098635b52fdaf9324e3c3652bffd17.jpg',
      name: 'Shih tzu',
      description: 'Con esa hermosa carita, nadie se le puede resistir. Es un perro inteligente y familiar',
    },
  ];

  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="container">
        <div className="row">
          {cardData.map((data, index) => (
            <div key={index} className="col-md-4">
              <Card {...data} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
