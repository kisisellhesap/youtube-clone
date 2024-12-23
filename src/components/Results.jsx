import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../api";
import Card from "./Card";
const Results = () => {
  const [searcParams] = useSearchParams();
  const query = searcParams.get("search_query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = { query };

    setLoading(true);

    api
      .get("/search", { params })
      .then((res) => {
        setResults(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [query]);
  return (
    <div className="results">
      <h2>{query && `${query} için sonuçlar`}</h2>
      <div className="results-list">
        {loading ? (
          <h2>Yükleniyor</h2>
        ) : (
          results?.map((item, index) => {
            return (
              item.type === "video" && (
                <Link to={`watch?v=${item.videoId}`} key={index}>
                  <Card item={item} />
                </Link>
              )
            );
          })
        )}
      </div>
    </div>
  );
};

export default Results;
