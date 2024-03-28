import React from 'react'

import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

export default function DashboardStatsGrid() {
    return (
        <div>
            <div class="flex items-center space-x-4">
                <button class="btn">last 24 hours</button>
                <button class="text-blue-500 btn">Last Week</button>
                <button class=" btn">Last month</button>
                <button class="btn">Last Year</button>
            </div>

            <hr class="my-4"></hr>

            <div className="flex gap-4">
                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                        <IoBagHandle className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Total Products</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">2,021</strong>
                        </div>
                        <span className="text-sm text-green-500 pl-2">↑210 </span>
                        <span className="text-sm  pl-2"> vs last 7 days</span>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
                        <IoPeople className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Total Customers</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">12430</strong>
                        </div>
                        <span className="text-sm text-green-500 pl-2">↑1200 </span>
                        <span className="text-sm  pl-2"> vs last 7 days</span>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
                        <IoPieChart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Total Revenue</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">₹6430.50</strong>
                        </div>
                        <span className="text-sm text-green-500 pl-2">↑1200 </span>
                        <span className="text-sm  pl-2"> vs last 7 days</span>
                    </div>
                </BoxWrapper>

                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
                        <IoCart className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Total Transaction</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">123,100</strong>
                        </div>
                        <span className="text-sm text-red-500 pl-2">↓200 </span>
                        <span className="text-sm  pl-2"> vs last 7 days</span>
                    </div>
                </BoxWrapper>
            </div>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
