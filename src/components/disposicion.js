import React, { Fragment } from 'react';
import left from '../assets/left.svg'
import circle from '../assets/circle.png'

class Disposicion extends React.Component {
  
  reload = () => {
	window.location.reload(); 
  }

  render(){
	return(
		<Fragment>
		
			<div className="mainContainer">
				<div className="mainContainer__navigation">
					<picture onClick={()=>this.reload()}>
					<img 
					 	style={{cursor:"pointer"}}
						className="mainContainer__image"
						src={left} 
						alt="Foto de perfil"/>
					</picture>
					<div className="mainContainer__navigation--text">
					<span>CANCELAR</span>
					</div>
				</div>

				<div className="title">
					Disposición
				</div>
				
				<div className="mainContainer__availableBalance">
					<div className="mainContainer__availableBalance--label">
					<span>Tienes disponible</span>
					</div>
					<div className="mainContainer__balance--amount">
					<span>$1,449,970.00</span>
					</div>
				</div>

				<div>
					<div className="mainContainer__input">
						Auto
					</div>
					<div className="mainContainer__input"> 
						$350,000.00
					</div>
				</div>

				<div className="mainContainer__secondTitle">
					Selecciona tu plazo
				</div>

				<div style={{ 
						backgroundImage: `url(${circle})`, 
					backgroundRepeat: 'no-repeat',  
						width:'250px', 
						height:'250px', 
						resizeMode: 'cover',
						marginLeft:'50px'
				}}>
					<div className="mainContainer__information">
						<div>
							<span style={{fontSize:'1.2rem'}}>
								<strong>Tu pago mensual</strong>
							</span>
						</div>
						<div>
							<span style={{fontSize:'2.4rem'}}>
								<strong>$120,000.00</strong>
							</span>
							<br/>
							<span style={{fontSize:'1.4rem'}}>
								<strong>a 60 meses</strong>
							</span>
						</div>
						<div className="mainContainer__information--label">
							<span style={{fontSize:'1.2rem', color: '#5acaee', fontWeight:'bold'}}>
								Tasa de interés
								<br/>
								16.6%
							</span>
						</div>
					</div>
				</div>

				<div className="mainContainer__button">
					LO QUIERO
				</div>
			
			</div>
	
		</Fragment>
		
	)
  }
}

export default Disposicion;