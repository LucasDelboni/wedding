export default function Title({title}) {
    return (
        <div style={{marginBottom: '3%', textAlign: 'center'}}>
            <h1 style={titleStyle}>{title}</h1>
            <img src="floral-titulo.png" alt="arranjo floral"></img>
        </div>
    )
}

const titleStyle = {
    marginTop: '5%',
    marginBottom: '0px',
    fontFamily: '"Great Vibes", cursive',
    fontSize: '3em',
    fontWeight: '500',
}