import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import imagen2 from '../../../assets/secondmarket.png';
import imagen4 from '../../../assets/media-marketing.png';
import '../../../App.css';
import paypal from '../../../assets/paypal-seeklogo.com.svg';
import mastercard from '../../../assets/mastercard-seeklogo.com.svg';
import zelle from '../../../assets/zelle.svg';
import amazon from '../../../assets/amazon2.svg';
import amazon2 from '../../../assets/amazon.svg';
import uber from '../../../assets/uber.svg';
import facebook from '../../../assets/facebook.svg';
import netflix from '../../../assets/netflix.svg';
import instagram from '../../../assets/instagram.svg';
import walmart from '../../../assets/walmart.svg';
import bolivares from '../../../assets/soberanos.svg';
import visa from '../../../assets/visa.svg';
import american from '../../../assets/americanexpress.svg';
import business from '../../../assets/business.svg';
import apple from '../../../assets/apple.svg';
import twitter from '../../../assets/twitter2.svg';
import whatsapp from '../../../assets/whatsapp.svg';
import capa3 from '../../../assets/mobile4.png';
import orderm from '../../../assets/order-picture.png';
import webmodule from '../../../assets/web-module.png';
import catalogModule from '../../../assets/catalog-module.png';
import financialmodule from '../../../assets/financial-module.png';
import marketing2 from '../../../assets/marketing.svg';
import marketing3 from '../../../assets/ecommerce.png';

function Home() {

    const clickButton = () => {
      window.scrollTo({ top: 1200, behavior: "smooth" })
    }

    const clickContactUs = () => {
      window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})
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
                <p className="header-p" onClick={() => clickContactUs()}>Canales de Venta</p></Col>
              <Col md={2} >
                <p className="header-p" onClick={() => clickButton()}> ¿Qué ofrecemos? </p> </Col>
              
              <Col md={2} >
                {/* <button className="header-bottom"> Inscribete gratis </button> */}
              </Col>
            </Row>
          </header>
            <Col sm={12} md={1} >
            </Col>
            <Col sm={12} md={6} className="margin-title">
              <h1 className="title-first-container">Plataforma E-commerce para empresas de consumo masivo en Venezuela.</h1>
              <h5 className="subtitle-first-container"> Empieza a vender online recibiendo pagos en divisa extranjera.
              </h5>
            </Col>
            <Col sm={12} md={5} className="pic-first-margin">
              <img src={imagen2} className="pic-first" />
            </Col>
        </div>
        <div className="div-container container-system">
            <Col xs={12} md={12} className="col-center">
              <img src={capa3} className="picture-system"/>
            </Col>
        </div>
        <div className="div-container container-system">
            <Col md={12} >
              <h1 className="title-module-content">La solución para vender online. </h1>
            </Col>
            <Col md={1}>
            </Col>
            <Col md={5}>
              <div onClick={() => showOrderModuleFunction()} className="div-content">
                <p className="p-content"><strong> Administración de ordenes.</strong></p>
                <p className="p-sub-content">Puedes visualizar a traves de este módulo
                  toda la información de las órdenes de compras emitidas por los clientes para no perder ningún detalle de los pedidos de tus clientes.
              </p>
              </div>
              <div onClick={() => showWebModuleFunction()} className="div-content">
                <p className="p-content"><strong>Web autoadministrable.</strong></p>
                <p className="p-sub-content">Administra toda la página principal de tu comercio electrónico de manera sencilla,
                   haciendo cambios desde imágenes hasta que productos mostrar desde el módulo web.
              </p>
              </div>
              <div onClick={() => showCatalogFunction()} className="div-content">
                <p className="p-content"><strong>Manejo de catálogo de productos.</strong></p>
                <p className="p-sub-content">Gestiona todos tus productos que se mostrará desde la imagen que tendrá en la web, hasta el precio en distintas divisas.
              </p>
              </div>
              <div onClick={() => showFinancialFunction()} className="div-content">
                <p className="p-content"><strong>Administración financiera.</strong></p>
                <p className="p-sub-content">Visualiza y gestiona todos
                   los pagos que emitan los clientes desde transferencias internacionales, pagos con tarjetas de debito del extranjero, pagos con tarjetas de crédito internacional, 
                    Zelle y hasta pagos en bolívares.
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
        </div>
        <div className="div-container picZ">
          <Row className="fix-row">
            <h1 className="picz-title"> Acelera tu crecimiento de ventas.</h1>
            <Col md={12} style={{textAlign:'center'}}>
              <h5 className="picz-subtitle">
                 Desde tus redes sociales vincula tus historias a la página del producto a promocionar 
                 y en instantes empieza a recibir pagos en bolívares como en dolares desde dispositivos móviles.
              </h5>
            </Col>
          </Row>
            <Col md={12} style={{textAlign:'center'}}>
                <div style={{width:'100%',height:'400px',textAlign:'center'}}> 
              <img src={imagen4}  className="marketing-picture" />
              </div>
            </Col>
        </div>
        <div className="div-container picC">
          <div> 
            <h1 className="picC-title"> Empieza a recibir pagos internacionales. </h1>
            </div>
            <Col md={2}>  </Col>
            <Col md={8}>
              <h5 className="picC-subtitle"> 
              En la plataforma Lumarketo puedes configurar tus módulos de pagos para empezar a recibir
              pagos de tarjetas  de débito del extranjero, pagos con tarjeta de crédito internacional, transferencias en
               Zelle y pagos en Bolivares. Sin limitaciones para los métodos de pagos electrónicos.
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
        </div>
        <div className="div-container-card">
            <Col sm={12} lg={6}>
              <div className="background-grey">
              <p className="logos-p amazon-p" style={{fontSize:'40px',padding:'0px'}}>Nuestra plataforma a la vanguardia  de las mejores empresas del mundo.</p>
                <a> <p className="read-more"> Leer más</p> </a>
                <div className="div-logos">
                  <img src={uber} className="paypal-zelle-uber-picture div-payment-space" />
                  <img src={amazon} className="visa-american-picture div-payment-space" />
                  <img src={facebook} className="visa-american-picture div-payment-space" />
                  <img src={netflix} className="visa-american-picture div-payment-space" />
                  <img src={instagram} className="instagram-logo div-payment-space" />
                  <img src={walmart} className="walmart-logo  div-payment-space" />
                </div>
              </div>
            </Col>
            <Col sm={12} lg={6} >
              <div className="background-orange">
              <p className="business-p"> Marketing Digital.</p>
                <a > <p className="read-more"> Leer más</p> </a>
                <div className="div-business-picture">
                  <img src={marketing2} className="marketing-logo" />
                </div>
              </div>
            </Col>
        </div>
        <div className="div-container-card" style={{marginBottom:'20px'}}>
            <Col sm={12} lg={6} style={{padding:'17px'}} >
              <div className="background-black">
              <p className="business-p padding-business-intelligence" > Business Intelligence.</p>
                <a > <p className="read-more"> Leer más</p> </a>
                <div className="div-business-picture">
                  <img src={business} className="business-picture" />
                </div>
               
              </div>
            </Col>
            <Col sm={12} lg={6} style={{padding:'17px'}}>
              <div className="background-grey grey-container">
              <p className="logos-p amazon-p" > Tú comercio en la nube de Amazon.</p>
                <a> <p className="read-more"> Leer más</p> </a>
                <div className="div-digital">
                  <img src={amazon2} className="digital-picture" />
                </div>
              </div>
            </Col>
        </div>
        <div className="demo-container">
            <Col sm={12} lg={12}>
            <p style={{textAlign:'center',
            fontSize:'50px',color:'white',fontWeight:'700',padding:'220px 100px 20px 100px'}}>Transforma tu 
            bodegón o supermercado en tienda online y recibe ingresos las 24 horas del día en moneda
            nacional y extranjera.</p> 
            </Col>
            <Col sm={12} lg={12} style={{textAlign:'center'}}>
            <button style={{textAlign:'center',width:'250px',height:'40px',color:'black',borderRadius:'5px',textTransform:'uppercase',background:'white',fontSize:'20px',fontWeight:'700',borderColor:'transparent'}}>Solicite una demo</button>
            </Col>
           
        </div>
        <div className="footer-container">
            <Col sm={12} lg={4}>
            <p style={{textAlign:'center',cursor:'pointer',
            fontSize:'30px',color:'black',fontWeight:'700'}}>Contactanos.</p>
            <p style={{textAlign:'center',cursor:'pointer',
            fontSize:'20px',color:'black',fontWeight:'400'}}> Venezuela +58 424-5189469</p>
            <p style={{textAlign:'center',cursor:'pointer',
            fontSize:'20px',color:'black',fontWeight:'400'}}> Chile +56 958765629</p>
            </Col>
            <Col sm={12} lg={4}  >
            <p style={{textAlign:'center',cursor:'pointer',
            fontSize:'30px',color:'black',fontWeight:'700'}}>Producto</p>
            <p style={{textAlign:'center',cursor:'pointer',
            fontSize:'20px',color:'black',fontWeight:'400'}}>Plataforma Ecommerce y tienda online.</p>
            </Col>
            <Col sm={12} lg={4} >
            <p style={{textAlign:'center',cursor:'pointer',fontSize:'30px',color:'black',fontWeight:'700'}}>Empleo.</p>

            </Col>
        </div>
      </div >
    );
  }
  
  export default Home;
  