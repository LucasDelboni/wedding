export default function AddressMap({url, title}){
    return (
        <div className="google-map-code">
            <iframe src={url} title={title} width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}