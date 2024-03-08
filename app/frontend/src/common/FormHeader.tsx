import { ComponentProps } from "react";
import { Text, Burger } from "@mantine/core";
interface FormHeaderProps extends ComponentProps<"div"> {
  title: string;
  handelClick: () => void;
}

export default function FormHeader({ title, handelClick }: FormHeaderProps) {
  return (
    <div className="relative">
      <Text size="lg" fw={500}>
        {title}
      </Text>
      <Burger
        opened={true}
        onClick={handelClick}
        className="absolute top-0 right-0"
      />
      <hr className="" />
    </div>
  );
}
