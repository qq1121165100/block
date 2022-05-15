import React, { useCallback, useEffect, useState } from 'react';
import { Tooltip, Pagination } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { InfoCircleFilled } from '@ant-design/icons';
import Item from './transcation-item';
import './styles.less';

const TransactionsTable = (props) => {
  const { dataSource, checkVal } = props;
  const [currentList, setCurrentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const newList = dataSource.slice((currentPage - 1) * 5, 5 + (currentPage - 1) * 5);
    setCurrentList(newList);
  }, [dataSource, currentPage]);

  const handlePageChange = useCallback((page) => {
    // console.log('new---page', page);
    setCurrentPage(page);
  }, []);
  return (
    <div className="transaction_table">
      <div className="transaction_head">
        <h3 level={3} style={{ marginBottom: '0' }}>
          Block Transactions
        </h3>
        <Tooltip placement="right" title="123">
          <InfoCircleFilled style={{ marginLeft: '0.5rem' }} />
        </Tooltip>
      </div>
      <div className="list_wrapper">
        {currentList.map((data) => (
          <Item data={data} key={data.hash} checkVal={checkVal} />
        ))}
      </div>

      <Pagination pageSize={5} total={dataSource.length} onChange={handlePageChange} className="my_pagenation" />
    </div>
  );
};

TransactionsTable.defaultProps = {
  dataSource: [],
  checkVal: '',
};

TransactionsTable.propTypes = {
  dataSource: PropTypes.array,
  checkVal: PropTypes.string,
};

export default TransactionsTable;
