import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const AllOrders = () => {
    const [orderId, setOrderId] = useState('')
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('/allmsgs')
            .then((res) => {
                setOrders(res.data.data)
            })
    }, [orderId])
    // console.log('orders')
    // console.log(orders)
    // orders.map((order) => {
    //     console.log(order.coname)
    // })
    const deleteOrder = (id) => {
        // console.log('delete ' + id)
        axios.post('/deleteorder', { orderid: id })
            .then((res) => {
                setOrderId(id)
            })
    }
  return (
    <div className='all_orders_container'>
        
        {
            orders.length === 0 ? (
                <h3> لا توجد طلبات </h3>
            ) :(
            orders.map((order, i) => 
                (
                    <div  key={ i } className='one_order_box'>
                    <table>
                        <tr>
                            <td className='order_label'>اسم الشركة  </td>
                            <td> { order.coname } </td>
                        </tr>
                        <tr>
                            <td className='order_label'> ايميل الشركة  </td>
                            
                            <td> { order.email } </td>
                        </tr>
                        <tr>
                            <td className='order_label'> رقم الهاتف  </td>
                            
                            <td> { order.phone } </td>
                        </tr>
                        <tr>
                            <td className='order_label'> موقع الشركة  </td>
                            
                            <td> { order.location } </td>
                        </tr>
                        <tr>
                            <td className='order_label'> نوع الإستخدام  </td>
                            
                            <td> { order.type_of_use } </td>
                        </tr>
                        <tr>
                            <td className='order_label'> العدد المطلوب  </td>
                            
                            <td> { order.number_of_motors } </td>
                        </tr>
                        <tr>
                            <td className='order_label'> التعليقات  </td>
                            
                            <td> { order.comment } </td>
                        </tr>
                    </table>
                    </div>
                )
            )
            )
        }
    </div>
  )
}

export default AllOrders