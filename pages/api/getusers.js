// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function _getUsers() {
  try {
    const response = await fetch(`${process.env.baseGetUsersAPIURL}`);
    const users = await response.json();
    debugger;
    return users

  } catch (e) {
    debugger;
  }
}

export async function _getUser(userID) {
  debugger;
  try {
    const response = await fetch(`${process.env.baseGetUsersAPIURL}/${userID}`);
    const user = await response.json();
    debugger;
    if (!user) {
      return { hasError: true, error: `user could not be found ${JSON.stringify(user)}` };
    }
    return user;
  } catch (e) {
    debugger;
    return { hasError: true, error: `exception: ${JSON.stringify(e)}` };
  }
}

export default async function getUsersAPI(req, res) {
  try {
    const users = await _getUsers();
    debugger;
    if (users && users.length > 0) {
      return res.json(users);
    }

    return { // An optional boolean value to allow the page to return a 404 status and page.
      notFound: true
    }
  } catch (error) {
    debugger;
  }
}
