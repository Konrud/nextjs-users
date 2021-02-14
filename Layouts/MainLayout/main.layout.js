import Head from "next/head";
import Link from "next/link";


function MainLayout(props) {
    const { title, children, outerChildren, footerChildren } = props;
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, intitial-scale=1" />
                <title>{title || "Website Users"}</title>
            </Head>
            <header>
                <nav className="c-layout__nav">
                    <ul className="c-layout__menu">
                        <li className="c-layout__menu-item"><Link href="/"><a>Home</a></Link></li>
                        <li className="c-layout__menu-item"><Link href="/users"><a>Users</a></Link></li>
                    </ul>
                </nav>
            </header>
            {outerChildren}
            <main>{children}</main>
            <footer>
                {footerChildren || "Created with Love"}
            </footer>
        </>
    );
}


export default MainLayout;