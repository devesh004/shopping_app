import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { useNavigate, useLocation, Link, Navigate } from "react-router-dom";
import { logoutUser } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0px;
  margin-left: -7.7px;
  z-index: 3;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: relative;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: #555;
`;

const Lang = styled.div`
  display: flex;
  position: relative;
  margin-right: 10px;
  top: 5px;
`;
const Setting = styled.div`
  display: flex;
  position: relative;
  margin-right: 10px;
  top: 5px;
`;

const Notification = styled.div`
  display: flex;
  position: relative;
  margin-right: 10px;
  top: 5px;
`;

const Badge = styled.span`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: -8px;
  right: -3.5px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  position: relative;
  margin-right: 3px;
  top: -4.5px;
`;
const Button = styled.button`
  height: 30px;
  margin-left: 5px;
  border: none;
  background-color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
`;
const Topbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  let admin;
  if (currentUser && currentUser.isAdmin) {
    admin = currentUser;
  }
  const logoutHandle = () => {
    logoutUser(dispatch);
    navigate("/");
  };
  if (location.pathname == "/login") {
    return null;
  } else {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Logo>mannarAdmin</Logo>
          </Left>
          <Right>
            <Lang>
              <Language />
              <Badge>2</Badge>
            </Lang>
            <Notification>
              <NotificationsNone />
              <Badge>2</Badge>
            </Notification>
            <Setting>
              <Settings />
            </Setting>
            <Link to={`/user/${admin._id}`}>
              <Image src={admin.img} />
            </Link>
            <Button onClick={logoutHandle}>Logout</Button>
          </Right>
        </Wrapper>
      </Container>
    );
  }
};

export default Topbar;
