import React, { useEffect } from "react"

export default function useMediaQuery(query) {
    const mediaQuery = React.useMemo(() => window.matchMedia(query), [query])
    const [match, setMatch] = React.useState(mediaQuery.matches)

    useEffect(() => {
        const onChange = () => setMatch(mediaQuery.matches)
        mediaQuery.addEventListener("change", onChange)

        return () => mediaQuery.removeEventListener("change", onChange)
    }, [mediaQuery])
    
    return match;
}