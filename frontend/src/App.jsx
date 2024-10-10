import React, { useState, useEffect, useContext } from "react";
//We are Using UseContext here to create an instance of UserContext which can be used across the tree of React without disruption
const UserContext = React.createContext();

function UserProvider({ children }) {
  //Here we are useState to update the user value
  const [user, setUser] = useState({ name: "John Doe", age: 25 });

  return (
    //Here in UserContext(which is useContext) we pass user as props to children(Where we use our ContextProvider to Encompass the whole App so these values can be used anywhere across website)
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  //Here we have UserProfile Card which we are using To Increase the age, which increases the age whose value is not declared in UserProfile but rather App
  //We add useEffect which runs whenever the User Object changes(Essentialy setting User upon Mount)
  useEffect(() => {
    console.log("User profile updated:", user);
  }, [user]); // Effect runs whenever the user object changes

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App;
