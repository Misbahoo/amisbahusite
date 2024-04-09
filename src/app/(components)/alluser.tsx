import DeleteUser from "../(components)/deleteUser";

const getAllUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/user", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Error: ", error);
  }
};
const AllUsers = async () => {
  const { users } = await getAllUsers();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>All Users</h1>
      <table className="border border-collapse border-gray-500 p-3">
        <thead>
          <th className="border border-collapse border-gray-500 p-3">
            First Name
          </th>
          <th className="border border-collapse border-gray-500 p-3">
            Second Name
          </th>
          <th className="border border-collapse border-gray-500 p-3">
            E-mail Address
          </th>
          <th className="border border-collapse border-gray-500 p-3">State</th>
          <th className="border border-collapse border-gray-500 p-3">
            Local Government
          </th>
          <th className="border border-collapse border-gray-500 p-3">Delete</th>
          <th className="border border-collapse border-gray-500 p-3">Edit</th>
        </thead>
        <tbody>
          {users.map((item, index: number) => {
            return (
              <tr
                key={index}
                className="border border-collapse border-gray-500 p-3"
              >
                <td className="border border-collapse border-gray-500 p-3">
                  {item.firstName}
                </td>
                <td className="border border-collapse border-gray-500 p-3">
                  {item.secondName}
                </td>
                <td className="border border-collapse border-gray-500 p-3">
                  {item.email}
                </td>
                <td className="border border-collapse border-gray-500 p-3">
                  {item.state}
                </td>
                <td className="border border-collapse border-gray-500 p-3">
                  {item.lga}
                </td>
                <td>
                  <DeleteUser id={item._id} />
                </td>
                <td>
                  <button className="bg-green-500 text-white p-3 ">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
