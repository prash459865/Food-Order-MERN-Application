import React from 'react'
import "./Orders.css"
import { useState, useEffect } from 'react'
import axios from "axios"
import { assets } from "../../assets/assets.js"

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([])
  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data)
    }
    else {
      alert("error")
    }
  }
   const StatusHandler = async(event,orderId) =>{
           const response = await axios.post(url+"/api/order/status",{
            orderId,
            status:event.target.value
           })   
           if(response.data.success)
            {
              await fetchOrders();
            }     
   }    

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className='order'>
      <h3>Order Page</h3>
      <div className="order-list">
        {
          orders.map((order, index) =>
          (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order-item-food'>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " * " + item.quantity
                    }
                    else {
                      return item.name + " * " + item.quantity + ", "
                    }
                  })}
                </p>
                <p className='order-item-name'>{order.address.firstname+" " + order.address.lastname}</p>
                <div className="order-item-address">
                  <p>{order.address.street+" "}</p>
                  <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
                </div>
                <p className='phone'>{order.address.phone}</p>
              </div>
              <p>Items:{order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>StatusHandler(event,order._id)} value={order.status} >
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delievered">Delievered</option>
              </select>
            </div>
          )
          )
        }
      </div>

    </div>
  )
}

export default Orders
