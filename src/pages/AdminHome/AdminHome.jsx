import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom'
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { BsPersonCircle, BsBriefcaseFill } from "react-icons/bs";
import { FaMoneyBill, FaHourglassHalf } from "react-icons/fa";



const AdminHome = () => {
    // Dummy data for the bar chart
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Number of Users',
                data: [50, 75, 100, 120, 90, 110],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 205, 86, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    useEffect(() => {
        let chartInstance = null;

        const renderChart = () => {
            const ctx = document.getElementById('user-chart').getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: chartOptions,
            });
        };

        const destroyChart = () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };

        renderChart();

        // Cleanup when component unmounts
        return () => destroyChart();
    }, []);
    return (
        <div className="flex bg-gray-100 flex-row">
            <div className="">
                <AdminSidebar />
            </div>

            <div className="container p-8">

                <div className="grid grid-cols-2 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg> */}
                            <BsPersonCircle className="h-6 w-6 mr-2" />
                            <h2 className="text-lg font-semibold">Users</h2>
                        </div>
                        <p className="text-2xl font-bold mb-4">123</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg> */}
                            <BsBriefcaseFill className="h-6 w-6 mr-2" />
                            <h2 className="text-lg font-semibold">Businesses</h2>
                        </div>
                        <p className="text-2xl font-bold mb-4">456</p>
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">View</button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg> */}
                            <FaMoneyBill className="h-6 w-6 mr-2" />
                            <h2 className="text-lg font-semibold">Investors</h2>
                        </div>
                        <p className="text-2xl font-bold mb-4">789</p>
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">View</button>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center mb-2">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg> */}
                            <FaHourglassHalf className="h-6 w-6 mr-2" />
                            <h2 className="text-lg font-semibold">Pending Requests</h2>
                        </div>
                        <p className="text-2xl font-bold mb-4">987</p>
                        <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">View</button>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="bg-white  p-4 rounded-lg shadow-md mt-8">
                    <h2 className="text-lg font-semibold">Monthly Users</h2>
                    <div className="mt-4">
                        <canvas id="user-chart"></canvas>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AdminHome