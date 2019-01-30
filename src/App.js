/*
 * @Author: Nate
 * @Date:   2019-01-30 09:13:39
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-30 09:46:26
 */
import React, { useContext } from "react";
import { UserContext } from "./index";

export default function App({ username }) {
  const value = useContext(UserContext);
  return <div>Hello, {value}</div>;
}

// traditional way to use Context API
// import { UserContext } from "./index";
//       <UserContext.Consumer>
//         {value => <div>Hello, {value} </div>}
//       </UserContext.Consumer>
