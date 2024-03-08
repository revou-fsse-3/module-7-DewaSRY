import { Title, Text, Button, Container, Group } from "@mantine/core";
import classes from "./NotFound.module.css";

interface NotFoundProps {
  title: string;
}
export default function NotFound({ title }: NotFoundProps) {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>{title}</div>
      <Title className={classes.title}>
        There is some Issue for you, wee need to talk !
      </Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately,there is not data can get show ,register user need to
        create data fist so client can see that
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md">
          Authentications your self first, then create some data
        </Button>
      </Group>
    </Container>
  );
}
