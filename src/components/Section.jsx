import Container from '@mui/material/Container';

export default function Section({children, even}) {
    let backgroundColor = even ? '#97917A' : '#FCF9F7'
    return (
        <Container style={{ background: backgroundColor }} paddingY={8}>
            {children}
        </Container>
    )
}