import Link from "next/link";
import MainLayout from "../../Layouts/MainLayout/main.layout";

function Users({ users }) {
    debugger;
    return (
        <MainLayout title="Users">
            <section>
                <h1>Users</h1>
                <div>
                    {
                        (users && users.length > 0) ?
                            users.map(function (user) {
                                return <li key={user.id}><Link href={`/users/${user.id}`}><a>{user.name}</a></Link></li>
                            }) : "Couldn't find any users"
                    }
                </div>
            </section>
        </MainLayout>
    );
}


export async function getStaticProps(context) {
    try {
        const response = await fetch(`${process.env.appBaseURL}/api/getusers`);
        const users = await response.json();
        debugger;
        return {
            props: {
                users: (users || [])
            }
        };

    } catch (e) {
        console.error(`Error from users/index.js -> getStaticProps: ${e.message}`);
        return {
            notFound: true
        }
    }
}


export default Users;