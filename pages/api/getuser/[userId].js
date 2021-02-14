import _getUser from "../getusers";


async function getUserAPI(req, res) {
    debugger;
    const { query: { userId } } = req;
    try {
        const user = await _getUser(userId);
        debugger;
        if (user.hasError) {
            return res.status(404).json({ error: `Required user "${userId}" has not been found` });
        }

        res.json(user);
    } catch (e) {
        debugger;
        return res.status(500).json({ error: `Error during fetching the user "${userId}".\n Error message: ${e.message}` });
    }
}


export default getUserAPI;