import MainLayout from "../../Layouts/MainLayout/main.layout";

function UserPage({ user = {} }) {
    return (
        <MainLayout title="User info">
            <section>
                <h1>Page for userID: {`${user.id || ""}`}</h1>
                {
                    user ? <ul>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <li>{user.website}</li>
                        <li>{user.phone}</li>
                    </ul> : "Not found"
                }
            </section>
        </MainLayout>
    );
}

export async function getStaticPaths() {
    try {
        const response = await fetch(`${process.env.appBaseURL}/api/getusers`);
        const users = await response.json();
        debugger;
        let paths = ["/users/1"];

        if (users && users.length) {
            paths = users.map((user) => {
                return `/users/${user.id}`;
            });
        }
        debugger;
        return {
            paths,
            fallback: "blocking" // https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
        }

    } catch (e) {
        debugger;
        console.error(`Error from users/[userId].js getStaticPaths: ${e.message}`);
    }
}

export async function getStaticProps(context) {
    const { params: { userId } } = context;
    try {
        debugger;
        const response = await fetch(`${process.env.appBaseURL}/api/getuser/${userId}`);
        const user = await response.json();
        debugger;
        if (user) {
            return {
                props: {
                    user
                }
            }
        }

        return {
            notFound: true
        }

    } catch (e) {
        debugger;
        console.error(`Error from post.js getStaticProps: ${e.message}`);
        return {
            notFound: true
        }
    }
}

export default UserPage;