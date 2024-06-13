import React from 'react';
import Card from 'react-bootstrap/Card';

function Produtos() {
  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>Tempo Detalhado</h2>
      <div style={menuStyle}>
        <div style={menuItemStyle}>
          <Card>
            <Card.Body>
              <Card.Title>Chuvoso</Card.Title>
              <Card.Text>
              Um tempo chuvoso é uma condição meteorológica caracterizada pela presença de precipitação de chuva. Esse tipo de clima pode variar em intensidade e duração, desde uma leve garoa até tempestades fortes com chuva intensa. 
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={menuItemStyle}>
          <Card>
            <Card.Body>
              <Card.Title>Maconha</Card.Title>
              <Card.Text>
              O impacto ambiental do cultivo e uso da maconha é complexo e depende de vários fatores, incluindo métodos de cultivo, práticas de manejo e políticas regulatórias. Adotar práticas sustentáveis pode ajudar a minimizar os impactos negativos e maximizar os benefícios ambientais associados à produção de maconha.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={menuItemStyle}>
          <Card>
            <Card.Body>
              <Card.Title>Sol</Card.Title>
              <Card.Text>
              O Sol é uma força central na dinâmica do meio ambiente, influenciando tudo, desde a temperatura global e padrões climáticos até os ciclos biológicos e a produtividade agrícola. Enquanto seus benefícios são imensos, é crucial gerenciar e mitigar os impactos negativos ccradiação UV e ao aquecimento global.        </Card.Text>
            </Card.Body>
          </Card>
          
        </div>

      </div>
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
};

const tituloStyle = {
  borderBottom: '2px solid #333',
  paddingBottom: '0.5rem',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const menuItemStyle = {
  width: '300px',
  margin: '1rem',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
};

export default Produtos;