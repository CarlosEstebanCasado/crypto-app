import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = () => {

    const { data: cryptoList, isFetching } = useGetCryptosQuery();
    const [Cryptos, setCryptos] = useState(cryptoList?.data?.coins);
    return (
        <div>
            
        </div>
    )
};

export default Cryptocurrencies
