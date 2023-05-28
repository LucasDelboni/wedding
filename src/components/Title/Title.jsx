import FadeInText from '../FadeInText'

import './Title.css'

export default function Title({ title }) {
    return (
        <FadeInText component="h2" className="title">
            --- {title} ---
        </FadeInText>
    )
}