import Header from "./Header"
import Footer from "./Footer"
import { useTheme } from "./ThemeProvider"
import styles from "../styles/Layout.module.css"

export default function Layout({children}) {

    const [theme, setTheme] = useTheme();

    return <div className={styles.layout} data-theme={theme}>
        <Header/>
        {children}
        <Footer/>
    </div>
}