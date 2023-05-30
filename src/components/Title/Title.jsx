import { useMemo } from 'react'
import FadeInText from '../FadeInText'

import './Title.css'

export default function Title({ title }) {
    const titleWithSeparators = useMemo(() => `--- ${title} ---`, [title])

    return (
        <FadeInText component="h2" className="title">
            {titleWithSeparators}
        </FadeInText>
    )
}