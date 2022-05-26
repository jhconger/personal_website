import React, { useEffect } from "react";
import '../../App.css';

export default function KonamiCode() {
    useEffect(() => {
        window.location.assign('https://jhconger.github.io/konami/');
    }, []);
    return null
}
