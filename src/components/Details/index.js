import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Typography, Radio, Tooltip } from 'antd';
import { formatCurrency } from '../../utlis/tools';
import './styles.less';

const { Title } = Typography;
// eslint-disable-next-line react/prop-types
const BlockITem = ({ title, value, action }) => {
  return (
    <div className="list_item">
      <div className="list_text_left">{title}</div>
      <div className="list_text">
        <div className="value">
          {action === 'link' ? <a href="/123">{value}</a> : <span className="list_value">{value}</span>}
        </div>
      </div>
    </div>
  );
};

const Details = (props) => {
  const { data, checkVal } = props;

  return (
    <div className="detail_body">
      <section className="detail_section">
        This block was mined on {new Date(data?.time * 1000).toUTCString()} by <a href="/123">zouqingyu</a>. It
        currently has 73,892 confirmations on the Bitcoin blockchain.
      </section>

      <section className="detail_section">
        The miner(s) of this block earned a total reward of {formatCurrency(data?.fee, checkVal)}
        {formatCurrency(data?.fee, checkVal)}. The reward consisted of a base reward of
        {formatCurrency(10000, checkVal)}
        {formatCurrency(10000, checkVal)} with an additional 0.16583560 {checkVal} ($11,039.78) reward paid as fees of
        the {data?.n_tx} transactions which were included in the block. The Block rewards, also known as the Coinbase
        reward, were sent to this <Typography.Link>address</Typography.Link>.
      </section>

      <section className="detail_section">
        A total of {formatCurrency(10000, checkVal)}
        {formatCurrency(10000, checkVal)} were sent in the block with the average transaction being 0.33609295{' '}
        {checkVal}
        ($22,373.92). Learn more about
        <a href="/123"> how blocks work</a>.
      </section>

      <div className="detail_list">
        <BlockITem title="Hash" value={data.hash} action="copy" />
        <BlockITem title="Confirmations" value={123123} />
        <BlockITem title="Timestamp" value={new Date(data?.time * 1000).toUTCString()} />
        <BlockITem title="Height" value={data.time} />
        <BlockITem title="Miner" value="zouqingyu" action="link" link="/demo" />
        <BlockITem title="Number of Transactions" value={data.n_tx} />
        <BlockITem title="Merkle root" value={data.mrkl_root} />
        <BlockITem title="Version" value={data.ver} />
        <BlockITem title="Bits" value={data.bits} />
        <BlockITem title="Weight" value={data.weight} />
        <BlockITem title="Size" value={data.size} />
        <BlockITem title="Nonce" value={data.nonce} />
        <BlockITem title="Fee Reward" value={(formatCurrency(data?.fee), checkVal)} />
      </div>
    </div>
  );
};

Details.defaultProps = {
  data: {},
  checkVal: '',
};

Details.propTypes = {
  data: PropTypes.object,
  checkVal: PropTypes.string,
};

export default Details;
