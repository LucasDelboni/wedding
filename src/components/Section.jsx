import Box from '@mui/material/Box';

export default function Section({children, even}) {
    let backgroundColor = even ? '#97917A' : '#FCF9F7'
    return (
        <Box component="section" style={{ background: backgroundColor }} paddingY={8}>
            {children}
        </Box>
    )
}