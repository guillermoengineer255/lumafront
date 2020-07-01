import React, { useState } from 'react';
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
import bolivares from './soberanos.svg';
import visa from './visa.svg';
import american from './americanexpress.svg';
import business from './business.svg';
import apple from './apple.svg';
import twitter from './twitter2.svg';
import whatsapp from './whatsapp.svg';
import capa2 from './capa22.png';
import capa3 from './mobile4.png';
import orderm from './order-picture.png';
import webmodule from './web-module.png';
import catalogModule from './catalog-module.png';
import financialmodule from './financial-module.png';
import marketing2 from './marketing.svg';
import marketing3 from './ecommerce.png';

function App() {

  const clickButton = () => {
    window.scrollTo({ top: 2000, behavior: "smooth" })
  }
  const showOrderModuleFunction = () => {
    setShowOrder(true);
    setShowWebModule(false);
    setShowFinancial(false);
    setShowCatalog(false);
  }
  const showWebModuleFunction = () => {
    setShowWebModule(true);
    setShowOrder(false);
    setShowCatalog(false);
    setShowFinancial(false);
  }
  const showFinancialFunction = () => {
    setShowFinancial(true);
    setShowWebModule(false);
    setShowOrder(false);
    setShowCatalog(false);
  }
  const showCatalogFunction = () => {
    setShowCatalog(true);
    setShowFinancial(false);
    setShowWebModule(false);
    setShowOrder(false);
  }

  const [showOrder, setShowOrder] = useState(true)
  const [showWebModule, setShowWebModule] = useState(false)
  const [showfinancial, setShowFinancial] = useState(false)
  const [showCatalog, setShowCatalog] = useState(false)

  return (
    <div>
      <div className="div-container picA">
        <header>
          <Row className="fix-row" >
            <Col md={5}>
              <a onClick={() => clickButton()}>
                <img src={marketing3} className="header-logo" />
              </a>
            </Col>
            <Col md={2} >
              <p className="header-p" onClick={() => clickButton()}>Canales de Venta</p></Col>
            <Col md={1} >
              <p className="header-p" onClick={() => clickButton()}> Vitrina </p> </Col>
            <Col md={1} >
            </Col>
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
      <div className="div-container container-system">
        <Row className="fix-row">
          <Col md={12} style={{ textAlign: 'center' }}>
            <img src={capa3} style={{ marginTop: '20px' }} />
          </Col>
        </Row>
      </div>
      <div className="div-container container-system">
        <Row className="fix-row">
          <Col md={12} >
            <h1 className="title-module-content">La solución para vender online. </h1>
          </Col>
          <Col md={1}>

          </Col>
          <Col md={5}>
            <div onClick={() => showOrderModuleFunction()} className="div-content">
              <p className="p-content"><strong> Order management</strong></p>
              <p>Puedes visualizar a travez del módulo de ordenes
                toda la informacion de las ordenes de compras emitidas por los clientes.
            </p>
            </div>
            <div onClick={() => showWebModuleFunction()} className="div-content">
              <p className="p-content"><strong>Web management</strong></p>
              <p>Administra toda la página principal de tu comercio electronico, de manera sencilla
                e intuitiva desde el módulo web.
            </p>
            </div>

            <div onClick={() => showCatalogFunction()} className="div-content">
              <p className="p-content"><strong>Catalog management</strong></p>
              <p>Gestiona todos tus producto, desde la imagen que tendrá en la web, hasta el precio en distintas divisas
            </p>
            </div>
            <div onClick={() => showFinancialFunction()} className="div-content">
              <p className="p-content"><strong>Financial management</strong></p>
              <p>Visualiza y gestiona todos
                 los pagos que emitan los clientes desde transferencias internacionales, Zelle y hasta pagos en bolívares.
            </p>
            </div>
          </Col>
          <Col md={6} className="col-conditional-pictures">
            <div className="conditional-pictures-div">
              {showOrder && <img src={orderm} className="conditional-pictures" />}
              {showWebModule && <img src={webmodule} className="conditional-pictures" />}
              {showCatalog && <img src={catalogModule} className="conditional-pictures" />}
              {showfinancial && <img src={financialmodule} className="conditional-pictures"/>}
            </div>
          </Col>
        </Row>
      </div>
      <div className="div-container picZ">
        <Row className="fix-row">
          <h1 className="picz-title"> Acelera tu crecimiento de ventas.</h1>
          <Col md={2}>  </Col>
          <Col md={8}>
            <h5 className="picz-subtitle">
               Desde tus redes sociales linkea tus historias al a la página del producto a promocionar 
               y en instantes empieza a recibir pagos desde dispositivos móviles.
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
          <h1 className="picC-title"> Empieza a recibir pagos internacionales. </h1>
          <Col md={2}>  </Col>
          <Col md={8}>
            <h5 className="picC-subtitle"> 
            En la plataforma Lumarketo puedes configurar tus módulos de pagos para empezar a recibir
            pagos con tarjetas internacionales, Zelle y pagos en Bolivares. Sin limitaciones para los metodos de pagos electrónicos.
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
                <img src={marketing2} className="marketing-logo" />
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
            <div className="div-row-footer">
              <input className="input-footer" placeholder="Ingresa tu direccion de email" />
              <button value="Comienza ahora" name="dcdscd" className="button-footer">Comienza ahora </button>
            </div>
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default App;
