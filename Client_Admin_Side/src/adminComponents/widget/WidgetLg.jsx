import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";

const Container = styled.div`
  flex: 2;
  box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  -webkit-box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  -moz-box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  padding: 20px;
`;
const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
// const Image = styled.img`
//   height: 40px;
//   width: 40px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-right: 10px;
// `;
const WidgetTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetTableRow = styled.tr``;
const WidgetTableElement = styled.th`
  text-align: left;
`;
const WidgetTableUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const WidgetDate = styled.td`
  font-weight: 300;
`;
const WidgetAmount = styled.td`
  font-weight: 300;
`;
const WidgetStatus = styled.td`
  .widgetButton {
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
  }
  .widgetButton.approved {
    background-color: #f4fcf4;
    color: #1cb11c;
  }
  .widgetButton.declined {
    background-color: #f3e3e3;
    color: #f03131;
  }
  .widgetButton.pending {
    background-color: #e5e5f3;
    color: #4949f5;
  }
`;
const Button = styled.button``;

const Username = styled.span``;
const WidgetLg = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest("orders/allOrders");
        // console.log(res.data);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
  const StatusButton = ({ type }) => {
    return <Button className={"widgetButton " + type}>{type}</Button>;
  };
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <WidgetTable>
        <tbody>
          <WidgetTableRow>
            <WidgetTableElement>Customer</WidgetTableElement>
            <WidgetTableElement>Date</WidgetTableElement>
            <WidgetTableElement>Amount</WidgetTableElement>
            <WidgetTableElement>Status</WidgetTableElement>
          </WidgetTableRow>

          {orders.map((order) => {
            return (
              <WidgetTableRow key={order._id}>
                <WidgetTableUser>
                  <Username>{order.userId}</Username>
                </WidgetTableUser>
                <WidgetDate>{format(order.createdAt)}</WidgetDate>
                <WidgetAmount>${order.amount}</WidgetAmount>
                <WidgetStatus>
                  <StatusButton type={order.status} />
                </WidgetStatus>
              </WidgetTableRow>
            );
          })}
        </tbody>
      </WidgetTable>
    </Container>
  );
};

export default WidgetLg;
