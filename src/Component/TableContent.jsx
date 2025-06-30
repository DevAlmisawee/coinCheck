// components/Table.js
import { useState } from 'react';
import { useCoinData } from './ApiLoad';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const TableContent = () => {
  // const { data, isLoading } = useCoinData();
    const {currentData, isLoading ,postPerPage, totalPosts, paginate, search,handleClearSearch, setSearch} = useCoinData();
   
  return (
    <div className='container-fluid bg-dark min-vh-100 py-3 mt-5'>
      <div className='container-fluid bg-dark min-vh-100 py-3 mt-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-10 col-lg-8'>
          {/* Search Bar */}
          <SearchBar 
            value={search}
            onChange={setSearch}
            onClear={handleClearSearch}
          />    
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover table-dark mb-0">
                <thead className="table-secondary">
                  <tr>
                    <th className="text-nowrap">Rank</th>
                    <th>Logo</th>
                    <th>Name</th>
                    <th className="text-nowrap">Symbol</th>
                    <th className="text-nowrap">Current Price</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((coin) => (
                      <tr key={coin.id}>
                        <td>{coin.market_cap_rank}</td>
                        <td>
                          <img 
                            src={coin.image} 
                            alt={coin.name} 
                            className="coin-logo" 
                            loading="lazy"
                          />
                        </td>
                        <td className="text-nowrap">{coin.name}</td>
                        <td className="text-uppercase">{coin.symbol}</td>
                        <td className="text-nowrap">${coin.current_price}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        No coins found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
             
            </div>
          )}
 
           <Pagination postsPerPage={postPerPage} totalPosts={totalPosts} paginate={paginate}/>
        </div>
          
      </div>
    </div>
    </div>
  );
};

export default TableContent;