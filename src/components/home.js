import React, { Fragment } from 'react';
import profile from '../assets/profile.png'
import star from '../assets/star_icon.png'
import label from '../assets/label_icon.png'
import bell from '../assets/bell_icon.png'
import money from '../assets/money_icon.svg'
import creditCard from '../assets/credit-card_icon.svg'
import car from '../assets/car_icon.png'
import cfe from '../assets/cfe_icon.png'
import netfix from '../assets/netflix_icon.png'
import soriana from '../assets/soriana_icon.png'
import left from '../assets/left.svg'


class Home extends React.Component{
  
  reload = () => {
    window.location.reload(); 
  }

  render(){
    return(
      <Fragment>
        <header className='header'>
          <picture onClick={()=>this.reload()}>
          <img 
            className="mainContainer__image"
            src={left} 
            alt="Foto de perfil"/>
          </picture>
        </header>
        <div className="mainContainer">
          <div className="mainContainer__title">
              <div></div>
              <div className="mainContainer__title--text">
                <span>Hola José</span>
              </div>
              <picture>
                <img 
                  className="mainContainer__image"
                  src={profile} 
                  alt="Foto de perfil"/>
              </picture>
          </div>
          
          <div className="mainContainer__balance">
              <div className="mainContainer__balance--label">
                <span>SALDO DISPONIBLE</span>
              </div>
              <div className="mainContainer__balance--amount">
                <span>$1,449,970.00</span>
              </div>
          </div>

          <div className="mainContainer__options">
              <div className="mainContainer__box">
                <picture className="mainContainer__imageOption">
                  <img 
                    className="mainContainer__box--image"
                    src={star} 
                    alt="Foto de perfil"/>
                </picture>
                <div className="mainContainer__box--label">Crear logro</div>
              </div>

              <div className="mainContainer__box">
                <picture className="mainContainer__imageOption">
                  <img 
                    className="mainContainer__box--image"
                    src={label} 
                    alt="Foto de perfil"/>
                </picture>
                <div className="mainContainer__box--label">Pagar servicio</div>
              </div>

              <div className="mainContainer__box">
                <picture className="mainContainer__imageOption">
                  <img 
                    className="mainContainer__box--image"
                    src={bell} 
                    alt="Foto de perfil"/>
                </picture>
                <div className="mainContainer__box--label">Suscripción</div>
              </div>
              
          </div>

          <div className="mainContainer__pay">
              <div className="mainContainer__pay--label">
                <span>Tu próximo pago</span>
              </div>
              <div className="mainContainer__pay--amount">
                <span>$28,860.00</span>
              </div>

              <div className="mainContainer__pay--dateButton">
                <div className="mainContainer__pay--date">
                  <div className="mainContainer__pay--label">
                    Fecha de pago
                  </div>
                  <div className="mainContainer__pay--day"> 
                    16 Enero
                  </div>
                </div>
                <div className="mainContainer__pay--button">
                    PAGAR AHORA
                </div>
              </div>

              <div className="mainContainer__achievements">
                
                <div className="mainContainer__achievements--row">
                  <picture className="mainContainer__achievements--contaninerImage">
                    <img 
                      className="mainContainer__achievements--image"
                      src={money} 
                      alt="Foto de perfil"/>
                  </picture>
                  <div className="mainContainer__achievements--label">
                    Mis logros
                  </div>
                </div>
                <div className="mainContainer__achievements--amount">
                    $27,260.00
                </div>

              </div>

              <div className="mainContainer__achievements">
                
                <div className="mainContainer__achievements--row">
                  <picture className="mainContainer__achievements--contaninerImage">
                    <img 
                      className="mainContainer__achievements--image"
                      src={creditCard} 
                      alt="Foto de perfil"/>
                  </picture>
                  <div className="mainContainer__achievements--label">
                    Compras con TDC
                  </div>
                </div>
                <div className="mainContainer__achievements--amount">
                    $1,600.00
                </div>

              </div>

          </div>

          <div className="mainContainer__titleMovements">
            <div className="mainContainer__titleMovements--label">
              Tus movimientos
            </div>
            <div className="mainContainer__titleMovements--link">
              Ver todos
            </div>
          </div>

          <div>

            <div className="mainContainer__movements">
                <div className="mainContainer__movements--row">
                  <picture className="mainContainer__movements--contaninerImage">
                    <img 
                      className="mainContainer__movements--image"
                      src={car} 
                      alt="Foto de perfil"/>
                  </picture>
                  <div className="mainContainer__movements--label">
                    <strong>Auto</strong>
                    <br/>
                    <span className="mainContainer__movements--labelConcept">
                      Mis logros
                    </span>
                  </div>
                </div>
                <div className="mainContainer__movements--amount">
                  <div className="mainContainer__movements--label">
                    <div className="mainContainer__movements--labelInfo">
                      2m
                    </div>
                    <strong>$35,000.00</strong>
                  </div>
                </div>
              </div>

              <div className="mainContainer__movements">
                <div className="mainContainer__movements--row">
                  <picture className="mainContainer__movements--contaninerImage">
                    <img 
                      className="mainContainer__movements--image"
                      src={cfe} 
                      alt="Foto de perfil"/>
                  </picture>
                  <div className="mainContainer__movements--label">
                    <strong>CFE</strong>
                    <br/>
                    <span className="mainContainer__movements--labelConcept">
                      Pago de servicio
                    </span>
                  </div>
                </div>
                <div className="mainContainer__movements--amount">
                  <div className="mainContainer__movements--label">
                    <div className="mainContainer__movements--labelInfo">
                      Ayer
                    </div>
                    <strong>$280.00</strong>
                  </div>
                </div>
              </div>


              <div className="mainContainer__movements">
                <div className="mainContainer__movements--row">
                  <picture className="mainContainer__movements--contaninerImage">
                    <img 
                      className="mainContainer__movements--image"
                      src={netfix} 
                      alt="Foto de perfil"/>
                  </picture>
                  <div className="mainContainer__movements--label">
                    <strong>NETFLIX</strong>
                    <br/>
                    <span className="mainContainer__movements--labelConcept">
                      Suscripciones
                    </span>
                  </div>
                </div>
                <div className="mainContainer__movements--amount">
                  <div className="mainContainer__movements--label">
                    <div className="mainContainer__movements--labelInfo">
                      28 de dic
                    </div>
                    <strong>$140.00</strong>
                  </div>
                </div>
              </div>

              <div className="mainContainer__movements">
                <div className="mainContainer__movements--row">
                  <picture className="mainContainer__movements--contaninerImage">
                    <img 
                      className="mainContainer__movements--image"
                      src={soriana} 
                      alt="Foto de perfil"/>
                  </picture>
                  <div className="mainContainer__movements--label">
                    <strong>Soriana Parque Delta</strong>
                    <br/>
                    <span className="mainContainer__movements--labelConcept">
                      Pago
                    </span>
                  </div>
                </div>
                <div className="mainContainer__movements--amount">
                  <div className="mainContainer__movements--label">
                    <div className="mainContainer__movements--labelInfo">
                      26 de dic
                    </div>
                    <strong>$2000.00</strong>
                  </div>
                </div>
              </div>

          </div>

        </div>
        
      </Fragment>
      
    )
  }
}


export default Home;