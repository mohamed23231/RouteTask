import React from "react";

const CustomerTable = ({ customers, transactions, setSelectedCustomer }) => {
  console.log(customers);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto  scrollbar-thin">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 min-w-[1200px] ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              date
            </th>
            <th scope="col" className="px-6 py-3">
              amount{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              onClick={() => setSelectedCustomer(customer)}
              className="odd:bg-white  even:bg-gray-50  border-b cursor-pointer "
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {customer.name}
              </td>
              <td className="px-6 py-4">
                {" "}
                {transactions
                  .filter(
                    (transaction) => transaction.customer_id === customer.id
                  )
                  .map((transaction) => (
                    <div key={transaction.id}>{transaction.date}</div>
                  ))}
              </td>
              <td className="px-6 py-4">
                {" "}
                {transactions
                  .filter(
                    (transaction) => transaction.customer_id === customer.id
                  )
                  .map((transaction) => (
                    <div key={transaction.id}>${transaction.amount}</div>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
