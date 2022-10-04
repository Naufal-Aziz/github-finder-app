import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  return (
    <div style={userStyle}>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user, index) => <UserItem key={index} user={user} />)
      )}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

Users.prototypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users;
