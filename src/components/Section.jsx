import Container from '@mui/material/Container';

export default function Section({children, even}) {
    let backgroundColor = even ? '#97917A' : '#fcd8b4'
    return (
        <Container style={{ background: backgroundColor }} paddingY={8}>
            {children}
        </Container>
    )
}