import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]); 
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const dummyData = [
    { id: 1, name: "Keyboard Mechanical", price: 300000 },
    { id: 2, name: "Mouse Wireless", price: 150000 },
    { id: 3, name: "Monitor 27 inch", price: 2500000 },
    { id: 4, name: "USB-C Cable", price: 50000 },
    { id: 5, name: "Laptop Stand", price: 200000 },
    { id: 6, name: "Webcam Full HD", price: 400000 },
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(dummyData);
      setFiltered(dummyData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 20 }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>Product List</h1>
    </div>
  );
};

export default Product;
