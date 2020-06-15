import React from 'react';
import { Row, Col } from 'react-bootstrap';
import imagen from './assets/firstmarket.png';
import imagen2 from './assets/secondmarket.png';
import imagen3 from './assets/thirdmarket.png';
import imagen4 from './assets/4market.png';
import imagen5 from './assets/5market.png';
import logo from './assets/logo.png';
import './App.css';
import powerbi from './powerbi.svg';
import paypal from './paypal-seeklogo.com.svg';
import mastercard from './mastercard-seeklogo.com.svg';
import zelle from './zelle.svg';
import amazon from './amazon2.svg';
import amazon2 from './amazon.svg';

import uber from './uber.svg';
import facebook from './facebook.svg';
import netflix from './netflix.svg';
import instagram from './instagram.svg';
import walmart from './walmart.svg';
import bolivares from './bolivares.svg';
import visa from './visa.svg';
import american from './americanexpress.svg';
import business from './business.svg';
import apple from './apple.svg';
import twitter from './twitter2.svg';
import whatsapp from './whatsapp.svg';
import menu from './menu.svg';
import marketing2 from './marketing.svg';
import seo from './seo.svg';







function App() {
  return (
    <div>
      <div className="div-container picA">
        <header>
          <Row className="fix-row" >
            <Col md={5}>
              <img src={logo} /></Col>
            <Col md={2} >
              <p className="header-p">Canales de Venta</p></Col>
            <Col md={1} >
              <p className="header-p"> Vitrina </p> </Col>
            <Col md={1} >
              <p className="header-p">Precios </p> </Col>
            <Col md={2} >
              <button className="header-bottom"> Inscribete gratis </button>
            </Col>
          </Row>
        </header>
        <Row className="fix-row">
          <Col md={1} >
          </Col>
          <Col md={6} className="margin-title">
            <h1 className="title-first-container">Plataforma E-commerce para empresas de consumo masivo.</h1>
            <h5 className="subtitle-first-container"> Únete hoy a nuestro arbol para crecer y competir con los grandes en la era digital.
            </h5>
          </Col>
          <Col md={5} className="pic-first-margin">
            <img src={imagen2} className="pic-first" />
          </Col>
        </Row>
      </div>
      <div className="div-container picZ">
        <Row className="fix-row">
          <h1 className="picz-title"> Crecer más rápido</h1>
          <Col md={2}>  </Col>
          <Col md={8}>
            <h5 className="picz-subtitle"> Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                tu sueño de crear tu propia Tienda Online...
                envíos locales! Ahorra dinero, vende más y cumple
                tu sueño de crear tu propia Tienda Online...envíos locales! Ahorra dinero, vende más y cumple
                tu sueño de crear tu propia Tienda Online...envíos locales! Ahorra dinero, vende más y cumple
            </h5>
          </Col>
          <Col md={2}>  </Col>
        </Row>
        <Row className="fix-row">
          <Col md={3}>  </Col>
          <Col md={6}>
            <img src={imagen4} className="marketing-picture" />
          </Col>
          <Col md={3}>  </Col>
        </Row>
      </div>
      <div className="div-container picC">
        <Row className="fix-row">
          <h1 className="picC-title"> Empieza a recibir pagos internacionales </h1>
          <Col md={2}>  </Col>
          <Col md={8}>
            <h5 className="picC-subtitle"> Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                    tu sueño de crear tu propia Tienda Online...
                    envíos locales! Ahorra dinero, vende más y cumple
                    tu sueño de crear tu propia Tienda Online...envíos locales! Ahorra dinero, vende más y cumple
                    </h5>
            <div className="div-payment">
              <img src={bolivares} className="bs-picture" />
              <img src={paypal} className="paypal-zelle-uber-picture div-payment-space" />
              <img src={mastercard} className="master-picture div-payment-space" />
              <img src={visa} className="visa-american-picture div-payment-space" />
              <img src={american} className="visa-american-picture div-payment-space" />
              <img src={zelle} className="paypal-zelle-uber-picture div-payment-space" />
            </div>
          </Col>
          <Col md={2}>  </Col>
        </Row>
      </div>
      {/* <div className="div-container picB">
        <h1 style={{ textAlign: 'center', fontSize: '40px' }}> Las 6 razones principales porque los comerciantes eligen a Lumarketo</h1>
        <Row className="fix-row">
          <Col md={1} >
          </Col>
          <Col md={6} style={{ marginTop: '140px' }}>
            <h1 style={{ fontSize: '50px', color: '#FF7500', fontWeight: '700' }}>Pagos internacionales como en Bolivares</h1>
            <h5 style={{ fontSize: '25px', marginTop: '34px', color: 'grey' }}> Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                    tu sueño de crear tu propia Tienda Online...</h5>
          </Col>
          <Col md={5} style={{ marginTop: '100px' }} >
            <img src={imagen3} style={{ width: '450px', height: '450px' }} />
          </Col>
        </Row>
      </div> */}


      {/* <div className="div-container picE">
        <Row className="fix-row">
          <h1 style={{ color: 'black', textAlign: 'center' }}></h1>
          <Col lg={1}></Col>
          <Col lg={6} style={{ marginTop: '100px' }} >
            <h5 className="subtitle-first-container" style={{ color: 'black', lineHeight: '39px' }}> Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                tu sueño de crear tu propia Tienda Online...
                Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                tu sueño de crear tu propia Tienda Online...</h5>
          </Col>
          <Col lg={5} className="pic-first-margin" >
            <img src={imagen} className="pic-first" style={{ height: '400px', width: '400px' }} />
          </Col>
        </Row>
      </div> */}


      {/* <div className="div-container picF">
        <Row className="fix-row">
          <Col lg={6}></Col>
          <Col lg={6} style={{ marginTop: '150px' }} >
            <h1 style={{ color: 'black', textAlign: 'center' }}>Tráfico orgánico en aumento</h1>
            <h5 className="subtitle-first-container" style={{ color: 'black', lineHeight: '39px' }}> Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                    tu sueño de crear tu propia Tienda Online...
                    Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                    tu sueño de crear tu propia Tienda Online...</h5>
          </Col>
        </Row>
      </div> */}


      {/* <div className="div-container picZ">
        <Row className="fix-row">
          <h1 style={{ color: 'white', textAlign: 'center' }}>Business intelligence</h1>
          <Col lg={1}></Col>
          <Col lg={6} style={{ marginTop: '100px' }} >
            <h5 className="subtitle-first-container" style={{ color: 'white', lineHeight: '39px' }}> Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                    tu sueño de crear tu propia Tienda Online...
                    Haz crecer tu negocio con opciones de pago y
                envíos locales! Ahorra dinero, vende más y cumple
                    tu sueño de crear tu propia Tienda Online...</h5>
          </Col>
          <Col lg={5} className="pic-first-margin" >
            <img src={imagen5} className="pic-first" style={{ height: '400px', width: '400px' }} />
          </Col>
        </Row>
      </div> */}


      <div className="div-container-card">
        <Row className="fix-row">
          <Col lg={6}>
            <div className="background-grey">
              <div className="div-logos">
                <img src={uber} className="paypal-zelle-uber-picture div-payment-space" />
                <img src={amazon} className="visa-american-picture div-payment-space" />
                <img src={facebook} className="visa-american-picture div-payment-space" />
                <img src={netflix} className="visa-american-picture div-payment-space" />
                <img src={instagram} className="instagram-logo div-payment-space" />
                <img src={walmart} className="walmart-logo  div-payment-space" />
                <img src={apple} className="master-picture div-payment-space" />
                <img src={twitter} className="master-picture div-payment-space" />
                <img src={whatsapp} className="master-picture div-payment-space" />
              </div>
              <p className="logos-p">  Nuestra plataforma está construida con las tecnologias que utilizan las mejores
              empresas del mundo. </p>
              <a> <p className="read-more"> Leer más</p> </a>

            </div>
          </Col>
          <Col lg={6} >
            <div className="background-orange">
              <div className="div-business-picture">
                <img src={marketing2}  className="bmarketing-logo" />
              </div>
              <p className="business-p"> Marketing Digital</p>
              <a > <p className="read-more"> Leer más</p> </a>

            </div>
          </Col>
        </Row>
      </div>
      <div className="div-container-card">
        <Row className="fix-row">
          <Col lg={6} >
            <div className="background-black">
              <div className="div-business-picture">
                <img src={business} className="business-picture" />
              </div>
              <p className="business-p padding-business-intelligence" > Business Intelligence</p>
              <a > <p className="read-more"> Leer más</p> </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="background-grey grey-container">
              <div className="div-digital">
                <img src={amazon2} className="digital-picture" />
              </div>
              <p className="logos-p amazon-p" > Tú comercio en la nube de Amazon.</p>
              <a> <p className="read-more"> Leer más</p> </a>

            </div>
          </Col>
        </Row>
      </div>
      <div className="div-container picG">
        <Row className="fix-row">
          <h1 ></h1>
          <Col lg={1}></Col>
          <Col lg={4}  >
            <p className="footer-p">Empieza ahora</p>
          </Col>
          <Col lg={7} >
            <div style={{ display: 'inline-flex' }}>
              <input style={{ width: '200px', height: '30px', borderColor: 'transparent' }} placeholder="Ingresa tu direccion de email" />
              <button value="Comienza ahora" name="dcdscd" style={{ color: 'white', fontWeight: '700', background: '-webkit-linear-gradient(left, rgba(255,76,85,1) 0%, rgba(255,146,10,1) 100%)', width: '200px', height: '30px', borderColor: 'transparent', borderRadius: '5px' }}>Comienza ahora </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
