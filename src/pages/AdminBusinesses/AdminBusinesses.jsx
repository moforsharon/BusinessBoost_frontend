import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';

const AdminBusinesses = () => {
    // Filter state
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');

    // Table data
    const tableData = [
        {
            id: 1,
            title: 'Business 1',
            owner: 'Owner 1',
            powerPoint: 'PowerPoint 1',
            location: 'Location 1',
            amountNeeded: 100000,
            category: 'Category 1',
            ongoingInvestment: true,
        },
        {
            id: 2,
            title: 'Business 2',
            owner: 'Owner 2',
            powerPoint: 'PowerPoint 2',
            location: 'Location 2',
            amountNeeded: 200000,
            category: 'Category 2',
            ongoingInvestment: false,
        },
        // Add more business objects here
    ];

    // Filter businesses
    const filteredBusinesses = tableData.filter((business) => {
        const isCategoryMatch = categoryFilter === '' || business.category === categoryFilter;
        const isPriceMatch = priceFilter === '' || business.amountNeeded <= Number(priceFilter);
        const isLocationMatch = locationFilter === '' || business.location === locationFilter;
        return isCategoryMatch && isPriceMatch && isLocationMatch;
    });

    return (
        <div className="flex flex-row">
            <AdminSidebar />
            <div className="container p-8">
                {/* Page title */}
                <h1 className="text-4xl text-3D155F text-center font-semibold mb-4">Businesses</h1>

                {/* Filter section */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-lg font-semibold mb-2">Filter Businesses</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Category filter */}
                        <div>
                            <label htmlFor="categoryFilter" className="text-gray-600 font-bold block mb-2">
                                Category
                            </label>
                            <select
                                id="categoryFilter"
                                className="w-full border border-gray-300 rounded p-2"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="Category 1">Category 1</option>
                                <option value="Category 2">Category 2</option>
                                {/* Add more categories as needed */}
                            </select>
                        </div>
                        {/* Price filter */}
                        <div>
                            <label htmlFor="priceFilter" className="text-gray-600 font-bold block mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                id="priceFilter"
                                className="w-full border border-gray-300 rounded p-2"
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value)}
                            />
                        </div>
                        {/* Location filter */}
                        <div>
                            <label htmlFor="locationFilter" className="text-gray-600 font-bold block mb-2">
                                Location
                            </label>
                            <select
                                id="locationFilter"
                                className="w-full border border-gray-300 rounded p-2"
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="Location 1">Location 1</option>
                                <option value="Location 2">Location 2</option>
                                {/* Add more locations as needed */}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Business table */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Businesses List</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="py-2">SN</th>
                                    <th className="py-2">Title</th>
                                    <th className="py-2">Owner</th>
                                    <th className="py-2">PowerPoint</th>
                                    <th className="py-2">Location</th>
                                    <th className="py-2">Amount Needed</th>
                                    <th className="py-2">Category</th>
                                    <th className="py-2">Ongoing Investment</th>
                                    <th className="py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBusinesses.map((business) => (
                                    <tr key={business.id}>
                                        <td className="py-2 text-center border-t">{business.id}</td>
                                        <td className="py-2 text-center border-t">{business.title}</td>
                                        <td className="py-2 text-center border-t">{business.owner}</td>
                                        <td className="py-2 text-center border-t">{business.powerPoint}</td>
                                        <td className="py-2 text-center border-t">{business.location}</td>
                                        <td className="py-2 text-center border-t">{business.amountNeeded}</td>
                                        <td className="py-2 text-center border-t">{business.category}</td>
                                        <td className="py-2 flex justify-around border-t">
                                            <div
                                                className={`w-4 h-4 rounded-full ${business.ongoingInvestment ? 'bg-green-500' : 'bg-red-500'
                                                    }`}
                                            />
                                        </td>
                                        <td className="py-2 text-center border-t">
                                            <button className="mr-2">View More</button>
                                            <button className="bg-green-500 text-white px-4 py-2 rounded">Approve</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBusinesses;
