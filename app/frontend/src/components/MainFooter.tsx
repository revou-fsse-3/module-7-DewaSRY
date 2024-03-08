import { Container, Group, Anchor, Title, Text } from "@mantine/core";
// import classes from "./FooterSimple.module.css";

const links = [
  { link: "#", label: "Label 1" },
  { link: "#", label: "Label 2" },
  { link: "#", label: "Label 3" },
  { link: "#", label: "Label 4" },
  { link: "#", label: "Label 5" },
];

export default function MainFooter() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div>
      <Container fluid className="flex justify-between">
        <div>
          <Title order={1} className="inline-block text-yellow-400">
            REVOU'S
          </Title>
          <Text size="xl" fw={700} td="underline" className="ml-1 inline-block">
            ZOO Table
          </Text>
        </div>
        <Group className="">{items}</Group>
      </Container>
      <hr className="mt-4 p-2 border-gray-600 " />
      <hr className="mt-2 p-2 border-gray-600 " />
      <hr className="mt-2 p-2 border-gray-600 " />
    </div>
  );
}
