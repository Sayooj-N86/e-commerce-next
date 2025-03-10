import React, { useEffect, useState } from 'react';
import { PaymentElement,useStripe,useElements } from '@stripe/react-stripe-js';
// import toast from 'react-hot-toast';
import Loadersvg from '@/components/svg/Loadersvg';
// type props={
//     clientSecret: string
// }
const Paymentform = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [loading,setLoading] = useState(false);

    useEffect(() => {
        if(!stripe || !elements) {
            return;
        }
    },[elements, stripe])

    const handleSubmit= async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!stripe || !elements) {
          // Stripe.js hasn't yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
        setLoading(true);



        // const { error:submitError } = await elements?.submit();
        // if(submitError) {
        //     toast.error("")
        // }
        const { error } = await stripe.confirmPayment({
            elements,
          
            confirmParams: {
              // Make sure to change this to your payment completion page
              return_url: "http://localhost:3000/payment/paymentinner",
            },
          });
          console.log("errror::",error);
          // if(confirmError) {
          //   toast.error(confirmError.message!)
          // }
      
        setLoading(false);
    }
    

  return (
    <form onSubmit={handleSubmit} className='h-screen px-80  py-14 shadow-2xl flex flex-col rounded-lg  '>
        <PaymentElement className='shadow-xl p-5'/>
        
          <button disabled={loading || !stripe || !elements} className='w-full text-white bg-blue-500 shadow-2xl p-3'>
          <span id="button-text">
          {loading ?( <div className="spinner" id="spinner">
            <div className="flex items-center justify-center"><Loadersvg style={{height:"25px",width:"50px" }}/></div>

          </div>) : (  "Pay now" )}
          
        </span>
          </button>
          
    </form>
  )
}

export default Paymentform