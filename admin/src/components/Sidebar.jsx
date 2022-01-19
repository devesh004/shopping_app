import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  Assessment,
  AttachMoney,
  Feedback,
  LineStyle,
  Mail,
  Message,
  Person,
  ReportProblem,
  ShoppingBag,
  Timeline,
  TrendingUp,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: #efeff3;
  position: sticky;
  top: 50px;
  margin-left: -7.7px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-top: -17px;
  margin-bottom: 5px;
`;
const Title = styled.h3`
  font-size: 14px;
`;
const SidebarList = styled.ul`
  margin-top: -15px;
  margin-left: -20px;
  .link {
    text-decoration: none;
    color: inherit;
  }
`;
const SidebarItem = styled.li`
  padding: 4px;
  margin-bottom: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: #cccfd1;
  }
  background-color: ${(props) => props.bg};
`;
const Sidebar = () => {
  const location = useLocation();
  if (location.pathname == "/login") {
    return null;
  } else {
    return (
      <Container>
        <Wrapper>
          <SidebarMenu>
            <Title>Dashboard</Title>
            <SidebarList>
              <Link to="/" className="link">
                <SidebarItem bg={"#cccfd1"}>
                  <LineStyle />
                  Home
                </SidebarItem>
              </Link>
              <SidebarItem>
                <Timeline />
                Analytics
              </SidebarItem>
              <SidebarItem>
                <TrendingUp />
                Sales
              </SidebarItem>
            </SidebarList>
          </SidebarMenu>

          <SidebarMenu>
            <Title>Quick Menu</Title>
            <SidebarList>
              <Link to="/users" className="link">
                <SidebarItem>
                  <Person />
                  User
                </SidebarItem>
              </Link>
              <Link to="/products" className="link">
                <SidebarItem>
                  <ShoppingBag />
                  Products
                </SidebarItem>
              </Link>
              <SidebarItem>
                <AttachMoney />
                Transactions
              </SidebarItem>
              <SidebarItem>
                <Assessment />
                Reports
              </SidebarItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <Title>Notifications</Title>
            <SidebarList>
              <SidebarItem>
                <Mail />
                Mail
              </SidebarItem>
              <SidebarItem>
                <Feedback />
                Feedback
              </SidebarItem>
              <SidebarItem>
                <Message />
                Message
              </SidebarItem>
            </SidebarList>
          </SidebarMenu>
          <SidebarMenu>
            <Title>Staff</Title>
            <SidebarList>
              <SidebarItem>
                <WorkOutlineOutlined />
                Manage
              </SidebarItem>
              <SidebarItem>
                <Timeline />
                Analytics
              </SidebarItem>
              <SidebarItem>
                <ReportProblem />
                Report
              </SidebarItem>
            </SidebarList>
          </SidebarMenu>
        </Wrapper>
      </Container>
    );
  }
};

export default Sidebar;
