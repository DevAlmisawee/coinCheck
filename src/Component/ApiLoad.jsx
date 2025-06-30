import { useState, useEffect } from 'react';

export const useCoinData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(25)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredData = data.filter(
    coin =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const handleClearSearch = () => {
    setSearch("");
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentData = filteredData.slice(indexOfFirstPost, indexOfLastPost)
  const totalPosts = filteredData.length

  return {currentData, isLoading, postPerPage, totalPosts, paginate, search, handleClearSearch, setSearch, currentPage};
};