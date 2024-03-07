// import { ComponentProps, PropsWithChildren } from "react";

// interface indexProps extends ComponentProps<"div">, PropsWithChildren {}
import Forms from "@components/EmployeeForm/Forms";
import useEmployees from "@hooks/useEmployes";
export default function EmployeeForms() {
  const { currentEmployeeId: id, currentEmployee } = useEmployees();
  return (
    <>
      {id.length > 0 ? (
        <Forms isCreate />
      ) : (
        <Forms isCreate={false} initialValue={currentEmployee} id={id} />
      )}
    </>
  );
}
