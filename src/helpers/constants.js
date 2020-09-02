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
    FALL_BACK_ROUTE: routes.ABOUT
}

export const tabs = [
    {label: 'About Us', route: routes.ABOUT, component: About},
    {label: 'Election', route: routes.ELECTION, component: Election},
    {label: 'Clubs', route: routes.CLUBS, component: Clubs},
    {label: 'Guidelines', route: routes.GUIDELINES, component: GuideLines},
    {label: 'Campaign Schedule', route: routes.SCHEDULE, component: Schedule}
]

export const unSplashImages = [
    "https://images.unsplash.com/photo-1540908390241-82158ab62887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2MjM0N30&w=1920&fit=max",
    "https://images.pexels.com/photos/1550340/pexels-photo-1550340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4669103/pexels-photo-4669103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    window.innerWidth <= 600 ? "https://images.pexels.com/photos/4669113/pexels-photo-4669113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" : "https://images.pexels.com/photos/1550336/pexels-photo-1550336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1550334/pexels-photo-1550334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]