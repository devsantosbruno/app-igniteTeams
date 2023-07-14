import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Container, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Icon />
      <Highlight
        title="Nova turma"
        subtitle="crie a turma para adicionar as pessoas"
      />

      <Button title="Criar" />
    </Container>
  );
}
