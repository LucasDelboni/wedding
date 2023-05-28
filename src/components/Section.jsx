import Container from '@mui/material/Container';

export default function Section({ children, className, even }) {
    let backgroundColor = even ? '#889A80' : '#FCF9F7'
    let fontColor = even ? '#FCF9F7' : '#2B1105'
    return (
        <Container
            maxWidth="100%"
            component="section"
            className={className}
            style={{ backgroundColor: backgroundColor, color: fontColor }}
            sx={{ paddingBottom: 6, paddingTop: 6 }}>
            {children}
        </Container>
    )
}