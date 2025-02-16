"use client";

import React, { useState } from 'react';

const orders = [
  {
    id: '12345',
    order_date: '2023-10-01',
    status: 'To Ship',
    totalAmount: '₱150.00',
    address: '123 Main St, City, Country',
    paymentMode: 'Credit Card',
    items: [
      { product: 'Product A', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱50.00', brand: 'Brand A' },
      { product: 'Product B', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱50.00', brand: 'Brand B' },
      { product: 'Product H', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱50.00', brand: 'Brand H' },
    ],
  },
  {
    id: '12346',
    order_date: '2023-10-02',
    status: 'To Ship',
    totalAmount: '₱200.00',
    address: '456 Another St, City, Country',
    paymentMode: 'PayPal',
    items: [
      { product: 'Product C', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱100.00', brand: 'Brand C', amount: 2 },
      { product: 'Product I', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱100.00', brand: 'Brand I', amount: 1 },
    ],
  },
  {
    id: '12347',
    order_date: '2023-10-03',
    status: 'Completed',
    totalAmount: '₱100.00',
    address: '789 Some St, City, Country',
    paymentMode: 'Bank Transfer',
    items: [
      { product: 'Product D', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱50.00', brand: 'Brand D' },
      { product: 'Product E', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱50.00', brand: 'Brand E' },
      { product: 'Product J', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱50.00', brand: 'Brand J' },
    ],
  },
  {
    id: '12348',
    order_date: '2023-10-04',
    status: 'Cancelled',
    totalAmount: '₱50.00',
    address: '101 Another St, City, Country',
    paymentMode: 'Cash on Delivery',
    items: [
      { product: 'Product F', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱25.00', brand: 'Brand F' },
      { product: 'Product K', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱25.00', brand: 'Brand K' },
    ],
  },
  {
    id: '12349',
    order_date: '2023-10-05',
    status: 'Cancelled',
    totalAmount: '₱75.00',
    address: '202 Another St, City, Country',
    paymentMode: 'Credit Card',
    items: [
      { product: 'Product G', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱37.50', brand: 'Brand G' },
      { product: 'Product L', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱37.50', brand: 'Brand L' },
    ],
  },
  {
    id: '12350',
    order_date: '2023-10-06',
    status: 'To Receive',
    totalAmount: '₱120.00',
    address: '303 Another St, City, Country',
    paymentMode: 'PayPal',
    items: [
      { product: 'Product M', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱60.00', brand: 'Brand M' },
      { product: 'Product N', imageUrl: '/homepage/amiibo_samplepic.webp', price: '₱60.00', brand: 'Brand N' },
    ],
  },
  // Add more orders as needed
];

const tabs = ['All', 'To Ship', 'To Receive', 'Completed', 'Cancelled'];

export default function Page() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedOrders, setExpandedOrders] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [orderList, setOrderList] = useState(orders);

  const toggleExpandOrder = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const submitRating = () => {
    // Handle rating submission logic here
    console.log(`Rating: ${rating}, Review: ${review}`);
    setIsRating(false);
    setRating(0);
    setReview('');
  };

  const cancelOrder = (orderId) => {
    setOrderList((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 'Cancelled' } : order
      )
    );
  };

  const filteredOrders = orderList.filter(order => {
    const matchesStatus = activeTab === 'All' || order.status === activeTab;
    const matchesSearch = order.items.some(item => item.product.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      {selectedProduct ? (
        <div>
          <div className="flex justify-start mb-4">
            <button onClick={() => setSelectedProduct(null)} className="px-4 py-2 bg-blue-500 text-white rounded">&lt; Back</button>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={selectedProduct.imageUrl} alt={selectedProduct.product} className="w-full h-auto mb-4" />
            </div>
            <div className="md:w-1/2 md:pl-4">
              <h2 className="text-2xl font-bold mb-2">{selectedProduct.product}</h2>
              <p className="text-xl text-gray-700 mb-4">{selectedProduct.price}</p>
              <p className="mb-4"><strong>Brand:</strong> {selectedProduct.brand}</p>
              <p className="mb-4"><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex mb-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded mr-2">Add to Cart</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded">Buy Now</button>
              </div>
              {selectedProduct && filteredOrders.find(order => order.items.some(item => item.product === selectedProduct.product) && order.status === 'Completed') && (
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setIsRating(true)}>Rate Product</button>
              )}
              {isRating && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                  <h3 className="text-lg font-bold mb-2">Rate {selectedProduct.product}</h3>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                        onClick={() => setRating(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <textarea
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Write your review here..."
                    value={review}
                    onChange={e => setReview(e.target.value)}
                  />
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-red-500 text-white rounded mr-2" onClick={() => setIsRating(false)}>Cancel</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={submitRating}>Submit</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <div className="flex flex-wrap mb-4">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`flex-grow px-4 py-2 mr-2 mb-2 ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search by Product Name"
              className="w-full p-2 border rounded"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOrders.map(order => (
              <div key={order.id} className="border rounded-lg p-4 bg-white shadow">
                <h2 className="text-lg font-bold mb-2">Order ID: {order.id}</h2>
                <div className="text-sm text-gray-600 mb-2">
                  <p>Order Date: {order.order_date}</p>
                  <p>Status: {order.status}</p>
                  <p>Total: {order.totalAmount}</p>
                  <p>Address: {order.address}</p>
                  <p>Payment Mode: {order.paymentMode}</p>
                </div>
                <div className="flex items-center mb-4">
                  <img src={order.items[0].imageUrl} alt={order.items[0].product} className="w-12 h-12 object-cover rounded mr-4" />
                  <div>
                    <h3 className="text-md font-bold cursor-pointer" onClick={() => openProductDetails(order.items[0])}>{order.items[0].product}</h3>
                    <p className="text-sm text-gray-600">Amount: {order.items[0].amount || 1}</p>
                  </div>
                </div>
                {expandedOrders[order.id] && order.items.slice(1).map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <img src={item.imageUrl} alt={item.product} className="w-12 h-12 object-cover rounded mr-4" />
                    <div>
                      <h3 className="text-md font-bold cursor-pointer" onClick={() => openProductDetails(item)}>{item.product}</h3>
                      <p className="text-sm text-gray-600">Amount: {item.amount || 1}</p>
                    </div>
                  </div>
                ))}
                {order.items.length > 1 && (
                  <div className="flex justify-center mt-2">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                      onClick={() => toggleExpandOrder(order.id)}
                    >
                      {expandedOrders[order.id] ? 'View Less' : 'View More'}
                    </button>
                    {order.status === 'To Ship' && (
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={() => cancelOrder(order.id)}
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
