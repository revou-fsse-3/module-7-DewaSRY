// import { ComponentProps, PropsWithChildren } from "react";
// interface indexProps extends ComponentProps<"div">, PropsWithChildren {}
import useEmployees from "@/features/hooks/useEmployees";
import FormHeader from "@common/FormHeader";
import useMainModeState from "@hooks/useMainModeState";
import { Button } from "@mantine/core";
import FormEmployee from "./FormEmployee";
import {
  useCreateEmployee,
  useDeleteEmployee,
  useUpdateEmployee,
} from "@query/employee";

export default function EmployeeForms() {
  const { currentEmployeeId: id, currentEmployee } = useEmployees();
  const closeMainModel = useMainModeState((s) => s.closeModel);
  const { EmployeeCreateHandler } = useCreateEmployee();
  const { EmployeeUpdateHandler } = useUpdateEmployee();
  const { EmployeeDeleteHandler } = useDeleteEmployee();

  return (
    <>
      <FormHeader
        handelClick={closeMainModel}
        title={id.length == 0 ? "Create Employee" : "Update Employee"}
      />
      <FormEmployee
        useSubmit={(value) => {
          id.length === 0
            ? EmployeeCreateHandler(value)
            : EmployeeUpdateHandler(value);
        }}
      >
        <div className="flex justify-between mt-10 ">
          <Button type="submit" variant="outline" color="green">
            {id.length == 0
              ? "Create new Employee record"
              : `Edit '${currentEmployee.name}' data`}
          </Button>
          {id.length && (
            <Button
              onClick={EmployeeDeleteHandler}
              variant="outline"
              color="red"
            >
              Remove '{currentEmployee.name}' on Zoo list
            </Button>
          )}
        </div>
      </FormEmployee>
    </>
  );
}
