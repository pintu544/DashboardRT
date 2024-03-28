import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import { Button, IconButton } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
const recentOrderData = [
    {
        id: '1',
        order_id: '12327814JO',
        product_name: 'Super Harley - Golden ',
        product_quantity: ' x30',
        total_payment: '₹6,430.50',
        order_date: '21/03/2024',
        customer_id: '23143',
        current_order_status: 'DELIVERED',
        order_product: 'View details'
    },
    {
        id: '2',
        order_id: '12327814JO',
        product_name: 'Lamborghini-Grey ',
        product_quantity: ' x30',
        total_payment: '₹6,430.50',
        order_date: '21/03/2024',
        customer_id: '96453',
        current_order_status: 'DELIVERED',
        order_product: 'View details'
    },
    {
        id: '3',
        order_id: '12327814JO',
        product_name: 'Vintage Car - Cream ',
        product_quantity: ' x30',
        total_payment: '₹6,430.50',
        order_date: '21/03/2024',
        customer_id: '65345',
        current_order_status: 'PENDING',
        order_product: 'View details'
    },

    {
        id: '4',
        order_id: '12327814JO',
        product_name: 'DLS02 SUV-Yellow ',
        product_quantity: ' x30',
        total_payment: '₹6,430.50',
        order_date: '21/03/2024',
        customer_id: '09832',
        current_order_status: 'DELIVERED',
        order_product: 'View details'
    },
    {
        id: '5',
        order_id: '12327814JO',
        product_name: 'Defender SUV - White ',
        product_quantity: ' x30',
        total_payment: '₹6,430.50',
        order_date: '21/03/2024',
        customer_id: '87832',
        current_order_status: 'SHIPPED',
        order_product: 'View details'
    }
]

export default function RecentOrders() {
    const [active, setActive] = React.useState(1)

    const getItemProps = (index) => ({
        variant: active === index ? 'filled' : 'text',
        color: 'black',
        onClick: () => setActive(index)
    })

    const next = () => {
        if (active === 10) return

        setActive(active + 1)
    }

    const prev = () => {
        if (active === 1) return

        setActive(active - 1)
    }

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="flex justify-between items-center">
                <strong className="text-gray-700 font-medium">Transaction History</strong>
                <button className="text-gray-1000 font-medium bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    Export PDF
                </button>
            </div>

            <div className="border-x border-black-200 rounded-sm mt-3">
                <table className="w-full text-black-700">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product</th>
                            <th>Total Payment</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Order product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) => (
                            <tr key={order.id}>
                                <td className="yellow - 400">
                                    <Link to={`/product/${order.order_id}`} className="text-black">
                                        {order.order_id}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/customer/${order.customer_id}`} className="text-black">
                                        {order.product_name}
                                    </Link>
                                    <br />
                                    <p>{order.product_quantity}</p>
                                </td>

                                <td>{order.total_payment}</td>
                                <td>{order.order_date}</td>
                                <td className="text-white">{getOrderStatus(order.current_order_status)}</td>
                                <br />
                                <td className="inline-block rounded-full bg-blue-500 text-white  py-1 px-2 min-w-max ">
                                    <Link to={`/details/${order.order_id}`} className="text-gray-200">
                                        {order.order_product}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div class="flex flex-row items-center gap-4 bottom-0 right-10 p-2 justify-end">
                <Button variant="text" className="flex items-center gap-2" onClick={prev} disabled={active === 1}>
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex text-black-500 items-center gap-2">
                    <IconButton {...getItemProps(1)}>1</IconButton>
                    <IconButton {...getItemProps(2)}>2</IconButton>
                    <IconButton {...getItemProps(3)}>3</IconButton>
                    <IconButton {...getItemProps(4)}>4</IconButton>
                    <IconButton {...getItemProps(5)}>5</IconButton>
                    <IconButton {...getItemProps(6)}>6</IconButton>
                    <IconButton {...getItemProps(7)}>7</IconButton>
                    <IconButton {...getItemProps(8)}>8</IconButton>
                    <IconButton {...getItemProps(9)}>9</IconButton>
                    <IconButton {...getItemProps(10)}>10</IconButton>
                </div>
                <Button variant="text" className="flex items-center gap-2" onClick={next} disabled={active === 10}>
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
