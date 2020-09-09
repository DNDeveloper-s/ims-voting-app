import Election from "../components/Dashboard/TabPanels/Election";
import Clubs from "../components/Dashboard/TabPanels/Clubs";
import GuideLines from "../components/Dashboard/TabPanels/GuideLines";
import Schedule from "../components/Dashboard/TabPanels/Schedule";
import About from "../components/Dashboard/TabPanels/About";
export const routes = {
    ABOUT: "/about",
    ELECTION: "/election",
    CLUBS: '/clubs',
    NOTICES: "/notices",
    GUIDELINES: '/guidelines',
    SCHEDULE: '/schedule'
}

export const constants = {
    BREAK_POINT: 600,
    FALL_BACK_ROUTE: routes.ABOUT,
    HOME_ROUTE: '/',
    FORM_LINK: 'https://docs.google.com/forms/d/e/1FAIpQLSfxnx8bhvPTypIjQLVFSiOGcEE4vFOkCA-mhTyf1kVBACISSg/viewform?usp=sf_link'
}

export const tabs = [
    {label: 'About Us', route: routes.ABOUT, component: About},
    {label: 'Election', route: routes.ELECTION, component: Election},
    {label: 'Clubs', route: routes.CLUBS, component: Clubs},
    {label: 'Guidelines', route: routes.GUIDELINES, component: GuideLines},
    {label: 'Campaign Schedule', route: routes.SCHEDULE, component: Schedule}
]


export const unSplashImages = [
    "https://images.pexels.com/photos/4669103/pexels-photo-4669103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://lh3.googleusercontent.com/pw/ACtC-3fR99vA-8KLFVXsMszBagM8w6neukFuqfj0a0lwEasbk19CNpQEtwc7OarCGv8C17m3jvUuE91aQLJKbFAwz7snemRcO1yLyjRd9_R1nHFoMAJeAqEv1y_xQfthYKjs3DokWhFS5jFjdb0goYHpVl-p=w1472-h981-no",
    "https://lh3.googleusercontent.com/pw/ACtC-3dDOX7Eyvlsx3ugvDhjj7u-qLy_FLcOuubUKLNdzpebNn0FATdc-PQb_WN1D0n-9i-lKOc24OR1-o0rkqYUeL5ZY8Fa71CupNkL9nCOhBP3rLCviBODf70DO_ndK94N67qwOqoKGBnqAAp14X7Gl77a=w1280-h853-no",
    "https://lh3.googleusercontent.com/pw/ACtC-3eSxmfnmR6nbORUxj7uP1-Am_Kof22ssTUlk8Qi9nzylJfXysOm71Fe0vPtMSaMJaBaT6x1W3o-TYYdjgn4nmXiTCtewfmV-8dBx0bGGyKy6rBLnYzRCvSDpirZxXQ9ISCh88y7SfoKLcImCU-3gul5=w1280-h853-no",
    "https://lh3.googleusercontent.com/pw/ACtC-3eEaID9d8pZSXL9ma-NlzBb61NT2eJ1ZeQx9R2HM0FkYchNCY8itOFwANmvOAbnT6j_Sk2a404K8vDAYQn0RuCgHG53PT1TbarttN8U2SFDJc3pSpLV7omwLg727Vuv4N4PjMFUoxH4w9_okpxbBTVg=w1280-h853-no",
    "https://lh3.googleusercontent.com/pw/ACtC-3fYGnYs8zFda9EnLbnw-TV9tU--SCxTqqqMaoka_PQ3fmblf9eSf_hScnDwyW0qrHG7GuLJhm5p5bp3y_ONWk89kHFsYTEeRfsfZpPAx3A5XiwQ-3N1yOMyn1sCSrKB9UegyBPtwX9gDxYr-Aoo0tOq=w1280-h853-no"
]