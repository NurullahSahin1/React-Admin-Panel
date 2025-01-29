import "../../components/styles/NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserFormItem">
          <label>UserName</label>
          <input type="text" placeholder="Mike" />
        </div>
        <div className="newUserFormItem">
          <label>Full Name</label>
          <input type="text" placeholder="Mike Garet" />
        </div>
        <div className="newUserFormItem">
          <label>Email</label>
          <input type="email" placeholder="mikegaret@gmail.com" />
        </div>
        <div className="newUserFormItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserFormItem">
          <label>Phone</label>
          <input type="email" placeholder="+1 234 567 89" />
        </div>
        <div className="newUserFormItem">
          <label>Address</label>
          <input type="email" placeholder="Stockholm Sweden" />
        </div>
        <div className="newUserFormItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="Male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="Female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="Other">Other</label>
          </div>
        </div>
        <div className="newUserFormItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
NewUser;
