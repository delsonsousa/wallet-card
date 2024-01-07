import { Container, LoadIndicator, LoadIndicatorWrapper } from "./styles";

export function Loading() {
  return (
    <Container>
      <LoadIndicatorWrapper>
        <LoadIndicator />
      </LoadIndicatorWrapper>
    </Container>
  );
}
