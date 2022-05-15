import React from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { formatCurrency } from '../../utlis/tools';

const { Text } = Typography;

const InputItem = ({ input, unit }) => {
  return (
    <Row>
      <Col xs={input.prev_out ? 12 : 20} md={input.prev_out ? 12 : 20} sm={24}>
        {input.prev_out ? (
          <Text ellipsis title={input.prev_out.addr}>
            <Typography.Link>{input.prev_out.addr}</Typography.Link>
          </Text>
        ) : (
          <Text ellipsis className="COINBASE" title="COINBASE (Newly Generated Coins)">
            COINBASE (Newly Generated Coins)
          </Text>
        )}
      </Col>
      <Col xs={input.prev_out ? 12 : 4} md={input.prev_out ? 12 : 4} sm={24}>
        <div>
          {input.prev_out && (
            <div className="mobile_text_right">
              <span>{formatCurrency(input.prev_out.value, unit)}</span>
              <Tooltip title="Output">
                <Typography.Link> 🌍 </Typography.Link>
              </Tooltip>
              <span className="sm_none"> ➡️ </span>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};
InputItem.defaultProps = {
  input: {},
  unit: '',
};
InputItem.propTypes = {
  input: PropTypes.any,
  unit: PropTypes.string,
};

export default InputItem;
