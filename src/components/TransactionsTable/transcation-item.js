import React from 'react';
import { Row, Col, Typography, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getVlaueSum, formatCurrency } from '../../utlis/tools';
import InputItem from './input-item';
import OutputItem from './output-item';

const { Text } = Typography;

const TranscationItem = (props) => {
  const { data, checkVal } = props;
  const unit = undefined;
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7}>
              <div className="row_key">Fee</div>
            </Col>
            <Col xs={19} sm={19} md={17}>
              <Row>
                <span title={formatCurrency(data.fee, checkVal)}>{formatCurrency(data.fee, checkVal)}</span>
              </Row>
              {/* <Row>
                <Text ellipsis title="223.214 sat/B - 55.804 sat/WU - 224 bytes">
                  223.214 sat/B - 55.804 sat/WU - 224 bytes
                </Text>
              </Row> */}
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="pc_hide">
              <div className="row_key mobile_key">Amount</div>
            </Col>
            <Col xs={19} sm={19} md={17} className="row_color_block_wrapper">
              <span className="row_color_block">{formatCurrency(getVlaueSum(data.out), checkVal)}</span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7}>
              <div className="row_key">Hash</div>
            </Col>
            <Col xs={19} sm={19} md={17}>
              <Text ellipsis title={data.hash}>
                <Typography.Link>{data.hash}</Typography.Link>
              </Text>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row>
            <Col xs={5} sm={5} md={7} className="pc_hide">
              <div className="row_key mobile_key">Date</div>
            </Col>
            <Col xs={19} sm={19} md={17}>
              <div className="data_wrapper">{moment(data.time).format('YYYY-MM-DD HH:mm')}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="pc_hide">
              <div className="row_key">From</div>
            </Col>

            <Col xs={19} sm={19} md={17}>
              {data.extendInput
                ? data.littleInputs.map((input) => <InputItem input={input} key={input.index} unit={checkVal} />)
                : data.inputs.map((input) => <InputItem input={input} key={input.index} unit={checkVal} />)}
              {data.extendInput && <Typography.Link>Load more inputs...</Typography.Link>}
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row className="col_padding">
            <Col xs={5} sm={5} md={7} className="pc_hide">
              <div className="row_key mobile_key">To</div>
            </Col>
            <Col xs={19} sm={19} md={17}>
              {data.extendOut
                ? data.littleOuts.map((out) => <OutputItem key={out.n} out={out} unit={checkVal} />)
                : data.out.map((out) => <OutputItem key={out.n} out={out} unit={checkVal} />)}
              {data.extendOut && <Typography.Link>Load more outputs...</Typography.Link>}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

TranscationItem.defaultProps = {
  data: {},
  checkVal: '',
};
TranscationItem.propTypes = {
  data: PropTypes.object,
  checkVal: PropTypes.string,
};
export default TranscationItem;
