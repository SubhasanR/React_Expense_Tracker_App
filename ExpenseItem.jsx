import React, { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./ExpenseItem.css";
import ExpenseDate from "../expense_date/ExpenseDate";
import Card from "../../ui/Card";
import { Col, Row } from "react-bootstrap";
import { IsLoadingContext } from "../../../layer/expense_tracker/ExpenseTracker";

const ExpenseItem = (props = {}) => {
  //console.log(props);
  const isLoading = useContext(IsLoadingContext);

  const { date, title, amount } = props;
  if (isLoading) {
    return <Skeleton width="100%" height="95px" className="loaderSkeleton" />;
  }

  return (
    <li>
      <Row>
        <Col>
          <Card className="expense-item">
            <div className="row">
              <div className="col-lg-12">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                  <h2> {title} </h2>
                  <div
                    className="expense-item__price"
                    style={{ width: "8rem" }}
                  >
                    ${amount}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </li>
  );
};

export default ExpenseItem;
