export default function AddressMap({url, title}){
    return (
        <iframe 
            src={url}
            height="100%"
            width="100%"
            title={title}
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
}