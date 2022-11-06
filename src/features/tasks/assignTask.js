import { Button, Checkbox } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonModal from "../../common/commonModal";
import { assignTasks, clearMsg, selectAllUsers } from "../users/userSlice";
import { selectAllTasks } from "./taskSlice";

const AssignTask = () => {
  const { tasks } = useSelector(selectAllTasks);
  const { allUsers, msg } = useSelector(selectAllUsers);
  const [values, setValues] = React.useState({ id: 0, data: [] });
  const dispatch = useDispatch();
  const modalData = {
    header: "Task assign",
    body: msg,
    btnText: "Done",
    dispatcher: clearMsg,
  };

  const handleClick = () => {
    const { id, data } = values;
    data.length > 0 && id != 0 && dispatch(assignTasks({ id, data }));
  };

  const handleChange = (val, setter) => {
    if (setter === "id") return setValues({ ...values, [setter]: val });
    !values.data.includes(val) &&
      setValues({ ...values, [setter]: values.data.concat(val) });
  };

  return (
    <div className="flex flex-col w-full px-5">
      {msg && (
        <CommonModal
          modalBody={modalData.body}
          modalHeader={modalData.header}
          btnText={modalData.btnText}
          dispatcher={modalData.dispatcher}
        />
      )}
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <Button
              type="button"
              variant="outlined"
              sx={{ bgcolor: "purple", color: "white" }}
              style={{ float: "right", marginRight: "45px" }}
              onClick={handleClick}
            >
              Done
            </Button>
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Deadline
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Excerpt
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <select
                      className="p-2 w-64 rounded-lg border-0 outline-none cursor-pointer"
                      onChange={(e) => handleChange(e.target.value, "id")}
                    >
                      <option value="">Select A User</option>
                      {allUsers.length > 0 &&
                        allUsers.map((user) => {
                          return (
                            <option key={user.id} value={user.id}>
                              {user.username}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                </tr>
                {tasks.length > 0 ? (
                  tasks.map((task, i) => {
                    return (
                      <tr
                        key={i}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <Checkbox
                            onChange={() => handleChange(task, "data")}
                          />
                          {i + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {task.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {task.date.years > 0
                            ? `${task.date.year} year(s)`
                            : ""}
                          {task.date.months > 0
                            ? `${task.date.months} month(s)`
                            : ""}
                          {task.date.days > 0 ? `${task.date.days} day(s)` : ""}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {task.excerpts}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>"No Tasks added yet"</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
