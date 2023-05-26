import Container from '@mui/material/Container';

export default function Section({ children, className, even }) {
    let backgroundColor = even ? '#97917A' : '#FCF9F7'
    return (
        <Container
            maxWidth="100%"
            component="section"
            className={className}
            style={{ backgroundColor: backgroundColor }}
            sx={{ paddingBottom: 6, paddingTop: 6 }}>
            {children}
        </Container>
    )
}