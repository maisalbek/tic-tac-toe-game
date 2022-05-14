import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProductContext } from "./ContextProvider";
import "./Home.css";

const Home = () => {
  const { getProducts, item } = useProductContext();
  const [data, setData] = useState(item);
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    getProducts();
  }, []);

  const sortcol = (col) => {
    if (order === "ASC") {
      console.log(data);
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("fAtB");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <table style={{ width: "80%", border: "1px solid black" }}>
        <tbody>
          <tr>
            <th>Date</th>
            <th>
              <Button onClick={() => sortcol("name")}>Name</Button>
            </th>
            <th>Count</th>
            <th>Distance</th>
          </tr>
          {item && item.length > 0 ? (
            item.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.date}</td>
                <td>{obj.name}</td>
                <td>{obj.count}</td>
                <td>{obj.distance}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>1</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
