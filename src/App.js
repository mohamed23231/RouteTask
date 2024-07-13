import "./App.css";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import CustomerTable from "./components/CustomerTable";
import toast from "react-hot-toast";
import Graph from "./components/Graph";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(Number.MAX_VALUE);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const notify = (message) => toast.error(`${message}`);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://mohamed23231.github.io/route-api/data.json`
      );
      console.log(response);
      setCustomers(response.data.customers);
      setTransactions(response.data.transactions);
      setFilteredCustomers(response.data.customers);
    } catch (error) {
      console.log("error from account info", error);
      notify("there is error from server");
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(typeof +minAmount);
    if (maxAmount == "") {
      setMaxAmount(Number.MAX_VALUE);
    }
    if (minAmount == "") {
      setMinAmount(0);
    }
    if (!Number(minAmount) && minAmount.length > 0) {
      notify("Amount should be a number");
    }
    if (!Number(maxAmount) && maxAmount.length > 0) {
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
