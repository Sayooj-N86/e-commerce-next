'use client';
import { frontendApi } from '@/api/api';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Paymentform from './_components/Paymentform';


const Payment = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get("orderId");
    // console.log(";;;",id)
    const [secretkey, setSecretkey] = useState();

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

    useEffect(() => {
          const fetchPaymentresponse = async () => {
            try{
              const response = await frontendApi.paymentApi(id!);
              console.log('response:::',response);
              if(response.success){
                setSecretkey(response.data.sessionId)
              }
            }
            catch(error){
              console.log(error);
              }
          }
          fetchPaymentresponse();
          }, [id]);
console.log('secretkey',secretkey)
      const options={
        clientSecret: secretkey,
      }      

  return (
    <div className="pt-[6.9rem] h-screen">
      {secretkey &&  <Elements stripe={stripePromise} options={options}>
        <Paymentform />
        </Elements>}
       
    </div>
  )
}

export default Payment