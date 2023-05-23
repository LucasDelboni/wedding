const titleStyle = {
    margin: '0',
    fontFamily: '"Montaga", cursive',
    fontSize: '3em',
    fontWeight: '500',
}

export default function Title({title}) {
    return (
        <div style={{marginBottom: '3%', textAlign: 'center'}}>
            <h2 style={titleStyle}>{title}</h2>
        </div>
    )
}