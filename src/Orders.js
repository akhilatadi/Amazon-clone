import React, {useEffect, useState} from 'react'
import './Orders.css'
import {db} from "./firebase";
import { useStateValue } from './StateProvider';
import Order from './Order.js';

function Orders() {

  const [{basket, user}, dispatch]= useStateValue();
  const [orders, setOrders]= useState([]);

  useEffect(()=>{
    const art= localStorage.getItem('my-art');
   if(art){
     setOrders(JSON.parse(art));
   }
   },[])
   
     useEffect(()=>{
       localStorage.setItem('my-art',JSON.stringify(orders))
     },[orders])
   


  useEffect(() => {
    if (user){
  db
  .collection('login')
  .doc(user?.uid)
  .collection('orders')
  .orderBy('created', 'desc')
   .onSnapshot(snapshot => (
    setOrders(snapshot.docs.map(doc => ({
      id:doc.id,
      data: doc.data()
    })))
  ))
    }else{
      setOrders([])
    }
  }, [])
    return (
        <div className='orders'>
          <h1>Your orders</h1>  
          <div className='orders_order'>
            {orders?.map(order => (
              <Order order = {order} />
            ))}
          </div>
        </div>
    )
}

export default Orders
