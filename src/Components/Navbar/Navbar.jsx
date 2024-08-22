import { Link } from 'react-router-dom';
import { products } from '../../Store/ProductStore';
import { useContext, useState } from 'react';
import Navlink from './Navlink';
function Navbar() {
  let { cartQuantity } = useContext(products)
  let [isOpen, setIsOpen] = useState(false)

  function handelHamburger() {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className="flex text-white justify-between  px-4 py-5 bg-[#1f1f21]">
      <div className='flex-start'>
        <Link to='/' onClick={()=>setIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="135.5 361.38 1000 356.39">
          <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
        </svg></Link>
      </div>
      <div className='hidden md:flex text-center justify-center'>
        <Navlink></Navlink>
      </div>
      {isOpen &&
      <div className='flex flex-col md:hidden items-center w-screen bg-[#1f1f21]'>
      <Navlink handelHamburger={handelHamburger}></Navlink>
    </div>
    }
      <div className='flex '>
      <Link to='/cart' onClick={()=>setIsOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-bag cursor-pointer mr-3" viewBox="0 0 16 16"> <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          <text x="8" y="11" fontSize="8" fill="white" textAnchor="middle" alignmentBaseline="middle"> {cartQuantity} </text>
        </svg>
      </Link>
      {isOpen ?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x md:hidden" viewBox="0 0 16 16" onClick={handelHamburger}>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg> :
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-list md:hidden" viewBox="0 0 16 16" onClick={handelHamburger}><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      }
      </div>
    </div>
    
    </>
  );
}

export default Navbar;
