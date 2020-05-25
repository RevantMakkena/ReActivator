import React from "react";

export default function UserDetails(props) {
  const userDetails = props.history.location.userData;
  return (
    <>
      {Object.entries(userDetails).forEach(([key, value]) => {
        return (
          <>
            <h4>User details</h4>
            <table>
              <tbody>
                <tr>
                  <td>{key}</td>
                  <td>{JSON.stringify(value)}</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}
    </>
  );
}
