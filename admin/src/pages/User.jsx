import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  ToggleOff,
  ToggleOn,
  Wc,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 4;
  flex-wrap: wrap;
  padding: 0px 20px;
`;
const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1``;
const CreateUser = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  -webkit-box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  -moz-box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
`;
const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  -webkit-box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  -moz-box-shadow: 0px 6px 22px -6px rgba(77, 73, 73, 0.75);
  margin-left: 20px;
`;
const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Username = styled.span`
  font-weight: 600;
`;
const UserShowUserTitle = styled.span`
  font-weight: 300;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;

const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;

const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
  .userShowIcon {
    font-size: 16px;
  }
`;
const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;
const UserUpdateTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const UpdateForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;
const Input = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;
const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;
const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;
const UploadInput = styled.input`
  display: none;
`;
const UploadLabel = styled.label`
  .userUpdateIcon {
    cursor: pointer;
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  padding: 5px;
  background-color: #23a5d8;
  font-weight: 600;
`;
const User = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state) =>
    state.user.users.find((user) => user._id === userId)
  );
  // console.log(user);
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newUser">
          <CreateUser>Create</CreateUser>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <Image
              src={
                user.img || "https://image.pngaaa.com/569/2189569-middle.png"
              }
            />
            <UserShowTopTitle>
              <Username>{user.name || user.username}</Username>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <UserShowInfo>
              <PermIdentity className="userShowIcon" />
              <UserShowInfoTitle>{user.username}</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              {/* <CalendarToday className="userShowIcon" />
              <UserShowInfoTitle>{user.dob || "Not there"}</UserShowInfoTitle> */}
              {user.active ? (
                <>
                  {" "}
                  <ToggleOn className="userShowIcon" />{" "}
                  <UserShowInfoTitle>Active</UserShowInfoTitle>
                </>
              ) : (
                <>
                  <ToggleOff className="userShowIcon" />{" "}
                  <UserShowInfoTitle>Not Active</UserShowInfoTitle>
                </>
              )}
            </UserShowInfo>
            <UserShowInfo>
              <Wc className="userShowIcon" />
              <UserShowInfoTitle>
                {user.gender || "not provided"}
              </UserShowInfoTitle>
            </UserShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <UserShowInfo>
              <PhoneAndroid className="userShowIcon" />
              <UserShowInfoTitle>
                {user.phoneNo || "Add a phone number"}
              </UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <MailOutline className="userShowIcon" />
              <UserShowInfoTitle>{user.email}</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <LocationSearching className="userShowIcon" />
              <UserShowInfoTitle>
                {user.address || "Add your address now"}
              </UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <Label>Username</Label>
                <Input type="text" placeholder="mota999" />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Full Name</Label>
                <Input type="text" placeholder="mota" />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Email</Label>
                <Input type="text" placeholder="mota@gmail.com" />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Phone</Label>
                <Input type="text" placeholder="+91 9411017490" />
              </UserUpdateItem>
              <UserUpdateItem>
                <Label>Address</Label>
                <Input type="text" placeholder="kanpur | India" />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UploadImage src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <UploadLabel htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </UploadLabel>
                <UploadInput type="file" id="file" />
              </UserUpdateUpload>
              <Button>Update</Button>
            </UserUpdateRight>
          </UpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
