// import { ComponentProps, PropsWithChildren } from "react";

// interface indexProps extends ComponentProps<"div">, PropsWithChildren {}
import Forms from "@components/EmployeeForm/Forms";
import useEmployees from "@/features/hooks/useEmployees";
import useMainModeState from "@hooks/useMainModeState";
import FormHeader from "@common/FormHeader";

export default function EmployeeForms() {
  const { currentEmployeeId: id, currentEmployee } = useEmployees();
  const closeMainModel = useMainModeState((s) => s.closeModel);

  return (
    <div>
      <FormHeader
        handelClick={closeMainModel}
        title={id.length == 0 ? "Register New Employee" : "Edit Employee"}
      />
      {id.length == 0 ? (
        <Forms isCreate />
      ) : (
        <Forms isCreate={false} initialValue={currentEmployee} id={id} />
      )}
    </div>
  );
}
