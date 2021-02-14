import Head from "next/head";
import Link from "next/link";
import classes from "../styles/error404.module.css";


function Error(props) {
    return (
        <>
            <Head>
                <title>Page Not Found</title>
            </Head>
            <section className={classes["c-not-found"]}>
                <article className={classes["c-not-found__content"]}>
                    <h1 className={classes["c-not-found__title"]}>404 | Page was not found</h1>
                </article>
                <footer className={classes["c-not-found__footer"]}>
                    <nav className={classes["c-not-found__nav"]}>
                        <ul className={classes["c-not-found__menu"]}>
                            <li className={classes["c-not-found__menu-item"]}>
                                <Link href="/"><a>Go back to Home Page</a></Link>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </section>
        </>
    );
}

export default Error;