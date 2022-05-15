import React from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { getVlaueSum, formatCurrency } from '../../utlis/tools';

const { Text } = Typography;

const OutputItem = ({ out, unit }) => {
  return (
    <Row>
      <Col xs={12} md={12} sm={24}>
        {out.addr ? (
          <Text ellipsis title={out.addr}>
            <Typography.Link>{out.addr}</Typography.Link>
          </Text>
        ) : (
          <div className="data_wrapper">'OP_RETURN' </div>
        )}
      </Col>
      <Col xs={12} md={12} sm={24}>
        <div className="mobile_text_right">{formatCurrency(out.value, unit)}</div>
      </Col>
    </Row>
  );
};
OutputItem.defaultProps = {
  out: {},
  unit: '',
};
OutputItem.propTypes = {
  out: PropTypes.any,
  unit: PropTypes.any,
};

export default OutputItem;
