// import { ComponentProps, PropsWithChildren } from "react";
import { Skeleton } from "@mantine/core";
// interface SkeletonsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Skeletons() {
  return (
    <>
      <Skeleton height={30} mt={6} radius="xl" />
      <Skeleton height={8} mt={16} radius="xl" />
      <Skeleton height={25} mt={15} radius="md" />
      <Skeleton height={25} mt={15} radius="md" />
      <Skeleton height={25} mt={15} radius="md" />
      <Skeleton height={25} mt={15} radius="md" />
      <Skeleton height={25} mt={15} radius="md" />
    </>
  );
}
