import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersRequest } from "../../actions/usersCreators";

import NavigatonUsers from "../NavigationUsers";
import Skeleton from "../Sceleton";
import SearchUsers from "../SearchUsers";
import UserItem from "../UserItem";
import styles from "./UserList.module.scss";

const UsersList = () => {
  const { users, isFetching, offset } = useSelector(({ users }) => users);
  const [search, setSearch] = useState("");

  const onChangeSearchValue = ({ target: { value } }) => {
    setSearch(value);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersRequest({ limit: 4, offset }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  return (
    <>
      <div className={styles.card_container}>
        <SearchUsers
          onChangeSearchValue={onChangeSearchValue}
          search={search}
        />
        {isFetching ? (
          <div className={styles.skeleton}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          users
            .filter((user) => {
              const userName = user.name.toLowerCase();
              return (
                userName.toLowerCase().includes(search) ||
                user.login.toLowerCase().includes(search)
              );
            })
            .map((user) => {
              return <UserItem key={user.id} user={user} />;
            })
        )}
        <NavigatonUsers />
      </div>
    </>
  );
};

export default UsersList;
