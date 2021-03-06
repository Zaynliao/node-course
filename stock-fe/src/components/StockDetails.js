import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../utils/config';

const StockDetails = () => {
    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    let [lastPage, setLastPage] = useState(1);
    const { stockId } = useParams();

    useEffect(() => {
        let getData = async () => {
            let response = await axios.get(`${API_URL}/stocks/${stockId}`, {
                params: {
                    page: page,
                },
            });
            setData(response.data.data);
            setLastPage(response.data.pagenation.lastPage);
        };
        getData();
    }, [page, stockId]);

    const getPage = () => {
        let pages = [];
        for (let i = 1; i <= lastPage; i++) {
            pages.push(
                <li
                    key={i}
                    className={`page-link ${page === i ? 'active' : ''}`}
                    onClick={(e) => {
                        setPage(i);
                    }}
                >
                    {i}
                </li>
            );
        }
        return pages;
    };

    return (
        <div>
            <nav className="mx-auto d-flex justify-center mt-2" aria-label="Page navigation example">
                <ul className="pagination">{getPage()}</ul>
            </nav>
            {data.map((item, index) => {
                return (
                    <div key={item.date} className="bg-white bg-gray-50 p-6 rounded-lg shadow m-6">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800 con">日期：{item.date}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">成交金額：{item.amount}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">成交股數：{item.volume}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">開盤價：{item.open_price}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">收盤價：{item.close_price}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">漲跌價差：{item.delta_price}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">最高價：{item.high_price}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">最低價：{item.low_price}</h2>
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">成交筆數：{item.transactions}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default StockDetails;
