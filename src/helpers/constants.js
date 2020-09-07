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
    HOME_ROUTE: '/'
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
    "https://lh3.googleusercontent.com/htFL9kVv8nqxs9pDEG1unY3UnxjNHAig0wmqU2dDq45gPdS3LvFQRTK2V-sSWtigoBPyxDFHFLJwt2qS9QFTTu6IRwhqh67QwWSpbO0m6WXFgy_4JpbNfI1v-6xIm-1rAx1hPCW3LatyihrejgtrcdMFVRlhsypQ8CnimKneN-ptH2-zcvsQShPu4XM-PjnHuHtUObtW_SHrdFJsU_VabaaOJ_Pve4PCJvdJ6FDwO2B_mbg2KzZSEQlb4w2akvf66UOMFlQCooJmX5PB5ubcTt_V78xHIBzjJN--n8aAARiySB6-0Vsp26Vr6g7C2xiEYL8hFLdSLzJZK6GTZea9818JyvRN0MpsK1CWKeY1iGmZwb4IHS-x_ntE2FLz2Y1cCzCWn8Wzhe65kS-pTnvLDQxmQ6QcJrggFhB2v94jI3cmXggKLIv0qVjJA2MTJE2FFnGJ-Z0rdpmlAXslD9Z1rNTNKZXsFVIBereztspoisS3hrWG3hoS0GbfogqJa3P3wpxdv8pwCJaDp04TprDsTq-UPGIR-JY2KX-5xv0xaUNvt_FH5TuMNyGWj2Q2GyMz6GzjPjoEgfbC7LLOnMg8KiHekj18Tbm1PwkLLpJPTy50LvPgyE5JfH8nzXLKY1KkU1DRLl4Y0C3uIaBcnQefdtWd6ufT4ZmFBJb22VFcun3Y37oXoe1W7mmM62mJ=w1472-h981-no?authuser=0",
    "https://lh3.googleusercontent.com/rDxAyu6ABr_hiToLEL06zfezwlfHJ84uO7a__xlX7OsOk5Q5LLeMBJ6NHQy9roiUbSdQklNTO4W_4gufVu1kQkrWEhFiEqcl-bKMuEXNrp2u9c-zY2ilOrpwbTD3MbIck917D6JBaMdwmB2A0HQKoQ9GzZINnk41hcVm17V2-xaLET6t1UOMwea2UmtA_xtdnCehRHSRigW99EWJgQxMnyeFY3QmknUqQseYuAhe-Pw9AiG2x-fF-Dtukr26Lsh5Y461gxIqZD3DLIVq-Q6UYC80O4DbZjy3EZdPytoY9O89hW40FSWMdG-80MBvxDvKeqKiTmyVm5o5g46AeAe6NQy30z9kQXQZ-HVJ0AtvrBYeoopVcRoc-VcqMQ2cmxpqN9wE7GevspYuHgWXcbobZVC067bNx8Hp7-Prq1rO3E4Hmq0mT8Cc1d0zRkJdXxcQDErmnkzMK1vdOrnhkwo3NSZvSbI88D7CmnKVkCtZaaO0SocELPGJiFk7vat9cI64TXt-jpKOkNVJFg1efj4jj4axpHQ4843H-bAPDiILJHrLXGK8yps_ti3RugPoiw1l8mXQpYT7JueKFsdA_vamDO5y-z5otgmJf05QcrzmvIIqY3ct_dnFmnD4ctOqzPhTF7voAnUGGc_6qzleDVomrXqxu0uiZi-NsqyA7z6MBaozPQ0UJvgNHNw53QuE=w1280-h853-no?authuser=0",
    window.innerWidth <= 600 ? "https://images.pexels.com/photos/4669113/pexels-photo-4669113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" : "https://lh3.googleusercontent.com/74BKprW5KnxRHD_mJa3-XSi_Wq591MTs24C6fda5FrXAafRfwC3BXtA0Pmu31T4cKNT-wsuDnKwQG0GzkNQr6jrYoSBpS0en74OAG2XsyKqBeo5ASqD5w8tGLLQ40MpVOZqf2NNHJO9XFkv2yNMwaw1gzJehWL4BJiJmh-Gfo426CSmJqsyat59eZpFR24Go6adMw4cX1tc7TYRXCYkLb2-FzensrQRM2UnECsWJP2fVn1nP8hZAZ1bi1IX36EP6IPDfxZKch2FxIl1rIADW8YI1b81xuZ0CJDKB-6xlFZqU7_Fzh2adngxRh9GDk6vmilZeOpdvdxgVD6xGe_wbdG6-pe4rn-WxNxE3gZqGB0gTn8dBQ1r1-5aSzpAdt8E07iDPgb_fHRxlPLD2u0dxi71hBb_HJJ9B-PlsYSSPvZM8pOA7fBXHFQYu_V9GNyU9ayAFYmpfIV4l-ZS5TlJz1qf_X1K_3FsCicJKsU6R5TM1VOyedWkHa_ZKdqteAWK6MlffPMQwlxuE7Pyfvq90bHqlsCVlLtTCwT-ON8S4szjA1W4KSXqfGvR_wgWYWJetbdCws2ThgH9Hjerc8UnPmJ7_uOOdbJQB9eHTpjojx-7QcWOjpe3NN_Z3mZ9snvhs0NkHy9qolpTFqVBPulTu8SmllJjjFfejw8lcXeJtdtYTHOMp8F1Akyd_yOAe=w1280-h853-no?authuser=0",
    "https://lh3.googleusercontent.com/DkW0_Mhg2i0Hws4ry-zF-4siu8aHod-IXbNsN98Oydf-FEVi9FY_Vbswv2jsomx0s_n0wCsOyV4REBx5KknxQHxONXqLEyfD9XpHM9JchxkgdPreJKKavPI0aiHDkeZxvc2Jx2LGJCLOU0VsQLNe5MZSMgeW0V6fpVZKcuyYyJEc61Zsw-cCnuW7xZTihSst1DkMrJfwOg920GVFmaJiHLwx0Iyw82g4sS9rPwz09RsF_Qwfm3nLTOd9DcW2w1RqguCx_7oUDJL6s9LyCwuBJeh18JcsceQFkKtjXSQInykDx6tZlh2lw_6pvcoLAH2C66QyFAw23nLk-r3512vBJidStK15OjeMokSjv1xTODimsoSraDR0sl38QVjEUXMDAOIlBk39FzKXGVAalCgIqhtngUH-Rz4-H6UlvKbzrw6yQb8YPuTOY4JPQ1c_eLKXdXtMYxWToNacw6nODMYsqoBQ7h3OGvxSP7s0EZugm41GDq83Q-Qay0nl11ROFp-5XT6CQeONTlyhRBWjkclwYGlvJTSdP4FW0KM7DNAEq3L1vB2zRTRy-HOEuxN1s9THMnwcRqgJpBFpR9URiudTC4CFBicr0YouC3eqJNofRZaiFJuKCsghZm35Xe17Wp_hewwwr7i_89_XEk780RKdxXCgkFWTmE-lOMLCr4zqcIjXAkIU6261j9dUa-aK=w1280-h853-no?authuser=0",
    "https://lh3.googleusercontent.com/JgwdYrhzJFV_YsEjTv6FiRcxTDxLHPRXVtSxqZ8L6-zNvYCpmlu06ZKuprFLkj8jyGaRsmHxKzmJy64V9dcXuXgG4rlfkCeRrOTVPnkGPl8pIwcsrAQX8EmJ3uJn930yZDeeHs1v4rzT3IzVpgYx9YlwxofX_GoogGz9PtZK_NL77FUREPDNqu_YDDPemttE4TauX_fMIxYJ1R4juEqIrmOq7u0vGiBQJPAVT9QQrLtQz0HDbfggGOyBq3baBHnI14gNFxFUFrLs_8l3v6asDs7aypWZQ-vAWmvlYM8zi1WbzslBSGFkvOoW17yfCuErM8ld2kLMXs69iF0vaKgbr2kAhTjpLmxtJjFEUoR2lYX0rX1iWHtIFFS1OLHkITyqnlhBXG33G_LISe7S2l77dVRaX167PybKa0q7kOuZrexcecykgHJh_IONfmgUJH58W6BZX8qCh4IHf-PLiRtdbmCTt8Ev8BDRRuFuapGa6kqM8pUD10amJQik20gxJLy85DhSGD5XwjMEqU2NfIb9SuMtoeKqqRfHQIiRUgDydsR4wB1HDaXVozWs2mjrT3lodvH_y9VVGnnF3G0zLcAVCBqJJkk1RrfAugCmjmt1Kz4-_MDMbE3TwC9w3FyjmUrfqcuMfc2CNu_uXCRG98GyGyMwwZbwZLrQxJRhjdswN8rSUixStM_R9l0fwfT7=w1280-h853-no?authuser=0"
]