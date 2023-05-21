import Container from '@mui/material/Container';

export default function Section({children, even}) {
    let backgroundColor = even ? '#97917A' : '#fcd8b4'
    return (
        <div style={{background: backgroundColor, paddingTop: '8%', paddingBottom: '8%'}}>
            <Container>
                {children}
            </Container>
        </div>
    )
}