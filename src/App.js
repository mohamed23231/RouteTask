import "./App.css";
import { useEffect, useState } from "react";
import data from "./data.json";
import Filter from "./components/Filter";
import CustomerTable from "./components/CustomerTable";
import toast from "react-hot-toast";
import Graph from "./components/Graph";

function App() {
  const [customers, setCustomers] = useState(data.customers);
  const [transactions, setTransactions] = useState(data.transactions);
  const [filteredCustomers, setFilteredCustomers] = useState(data.customers);
  const [nameFilter, setNameFilter] = useState("");
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(Number.MAX_VALUE);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const notify = (message) => toast.error(`${message}`);

  useEffect(() => {
    if (maxAmount == "") {
      setMaxAmount(Number.MAX_VALUE);
    }
    if (minAmount == "") {
      setMinAmount(0);
    }
    if (typeof minAmount === "string" && minAmount.length > 0) {
      notify("Amount should be a number");
    }
    if (typeof maxAmount === "string" && maxAmount.length > 0) {
      notify("Amount should be a number");
    }
    const filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        transactions.some(
          (transaction) =>
            transaction.customer_id === customer.id &&
            transaction.amount >= minAmount &&
            transaction.amount <= maxAmount
        )
    );
    setFilteredCustomers(filtered);
  }, [nameFilter, minAmount, maxAmount, customers, transactions]);

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-red-800 text-center my-10">
        Customer Transactions
      </h1>

      <Filter
        setNameFilter={setNameFilter}
        setMinAmount={setMinAmount}
        setMaxAmount={setMaxAmount}
      />
      <CustomerTable
        customers={filteredCustomers}
        transactions={transactions}
        setSelectedCustomer={setSelectedCustomer}
      />
      {selectedCustomer && (
        <Graph
          transactions={transactions.filter(
            (transaction) => transaction.customer_id === selectedCustomer.id
          )}
        />
      )}
    </div>
  );
}

export default App;
