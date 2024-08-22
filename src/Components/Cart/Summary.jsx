import SummaryCalculation from './SummaryCalculation'
import CartButton from './CartButton'

const Summary = ({guestCheckout, memberCheckout}) => {

 const guestCheckoutbtn= 'Guest Checkout';
 const memberCheckoutbtn= 'Member Checkout'

  return (
      <div className="lg:w-72 mx-5 mt-4 lg:mx-0 lg:mt-0">
      <SummaryCalculation></SummaryCalculation>
        <center className='mt-6'>
          <CartButton value={guestCheckoutbtn} handelBtn={guestCheckout}></CartButton>
          <CartButton value={memberCheckoutbtn} handelBtn={memberCheckout}></CartButton>
        </center>
      </div>
  )
}

export default Summary
