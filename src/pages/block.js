import React, { useState, useEffect, useCallback } from 'react';
import { Input, Typography, Radio, Tooltip, Spin } from 'antd';
import 'antd/dist/antd.css';
import { InfoCircleFilled } from '@ant-design/icons';
import requestApi from '../service/block';
import Details from '../components/Details';
import TransactionsTable from '../components/TransactionsTable';
import { awaitWrap } from '../utlis/tools';
import './styles.less';

const { Title } = Typography;

const Block = () => {
  const [bolckList, setBlockList] = useState([]);
  const [blockVal, setBlockVal] = useState({});
  const [checkVal, setCheckVal] = useState('USD');
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const defaultHash = '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa';
    const [error, response] = await awaitWrap(requestApi.get(`/${defaultHash}`));
    if (response) {
      setLoading(false);
    }
    setBlockList(response?.tx);
    setBlockVal(response);
  }, []);

  const handleSearch = useCallback(async (e) => {
    setLoading(true);
    const [error, response] = await awaitWrap(requestApi.get(`/${e.target.value}`));
    setBlockList(response?.tx);
    setBlockVal(response);
    if (response) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="block_page">
      <div className="input_box">
        <Input placeholder="Search your transaction, an address or a block" onPressEnter={handleSearch} />
      </div>
      <Spin spinning={loading}>
        <div className="detail_head">
          <div className="detail_head_info">
            <Title level={3} style={{ marginBottom: '0' }}>
              {`Block ${blockVal?.block_index}`}
            </Title>
            <Tooltip placement="right" title="123">
              <InfoCircleFilled style={{ marginLeft: '0.5rem' }} />
            </Tooltip>
          </div>
          <div className="switch">
            <Radio.Group
              options={[
                { label: 'USD', value: 'USD' },
                { label: 'BTC', value: 'BTC' },
              ]}
              onChange={(e) => {
                setCheckVal(e.target.value);
              }}
              value={checkVal}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
        </div>
        <Details data={blockVal} checkVal={checkVal} />
        <TransactionsTable dataSource={bolckList} checkVal={checkVal} />
      </Spin>
    </div>
  );
};

export default Block;
