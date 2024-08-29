import Container from "@/components/elements/Container";
import { Loader } from "@/components/ui/loader";

export default function loading() {
  return (
    <Container>
      <div className="container">
        <Loader />
      </div>
    </Container>
  );
}
