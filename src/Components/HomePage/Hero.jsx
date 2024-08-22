import Banner from '../../Assets/Banner.png'
import ProductCarousel from '../Carousel/ProductCarousel'
import kids from '../../Assets/kids.png'
import men from '../../Assets/Men.png'
import women from '../../Assets/Women.jfif'
import Member2 from '../../Assets/Member2.png'
import Member4 from '../../Assets/Member4.png'
import Member5 from '../../Assets/Member5.png'
import Category from './Category'
import HomepageBtn from './HomepageBtn'
import { Link } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { products } from '../../Store/ProductStore'
function Header() {
  const {allProducts, handleLinkClick}=useContext(products)
  const newProductsList = useMemo(()=>allProducts.filter(value => value.new===true),[allProducts])

  const categoryImg = [{img: men, title:'Game On', tagline:'Step Up Your Game', link:'/mens'} ,
    {img: women, title:'Elegant Steps', tagline:'Step into Elegance and Comfort', link:'/womens'},
    {img: kids,title:'Adventure Awaits', tagline:'Shoes for Every Little Adventure', link:'/kids' }];
    const membershipImg = [{img: Member2, title:'Member Product', tagline:'Your Exclusive Access', link:'/Member-login'} ,
      {img: Member5, title:'Member Reward', tagline:'How We Say Thankyou', link:'/Member-login'},
      {img: Member4,title:'Members Interest', tagline:'Shop Your Way', link:'/Member-login' }];
  const isHeadingBtn=true;

  return (
    <main className='mx-6 my-4'>
      <Link to='/new&featured' onClick={handleLinkClick}>
      <img src={Banner} alt="Main Banner" />
      <div className='text-center my-4 mb-8'>
        <h1 className='font-medium'>Nike Electric Pack</h1>
        <h1 className='font-extrabold md:text-7xl tracking-tighter text-4xl'>WIN ON AIR</h1>
        <h1 className='font-medium'>Engineered for those who stand out</h1>
        <HomepageBtn btnValue='Experience Air' isHeadingBtn={isHeadingBtn}></HomepageBtn>
        <HomepageBtn btnValue='Shop Air' isHeadingBtn={isHeadingBtn}></HomepageBtn>
      </div>
      </Link>
      <div className='lg:flex mt-4 items-center grid justify-center'>
        {
          categoryImg.map((value, index)=>(<Category item={value} key={index} btn='Shop'></Category>))
        }
        </div>
      <div className='text-[#4b4b4b] mt-12 font-medium'>
        <h1 className='2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl lg:ml-20 opacity-25 sm:my-10 ml-5 text-2xl my-5'>Promotions</h1>
        <ProductCarousel newProductsList={newProductsList}></ProductCarousel>  
        <h1 className='sm:text-4xl text-3xl lg:ml-10 my-5 text-center lg:text-left'>Members Exclusive</h1>
        <div className='lg:flex mt-4 items-center grid justify-center'>
        {
          membershipImg.map((value, index)=>(<Category item={value} key={index} btn='Join'></Category>))
        }
        </div>
      </div>
    </main>
  )
}

export default Header
