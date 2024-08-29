import Container from "@/components/elements/Container";
import { LayoutHeader, LayoutTitle } from "@/src/components/Layout/Layout";

export default function page() {
    return (
        <Container>
            <div className="container">
                <LayoutHeader>
                <LayoutTitle>
                    Write page
                    </LayoutTitle>
                </LayoutHeader>
            </div>
        </Container>
    )
}