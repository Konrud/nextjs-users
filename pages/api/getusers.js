// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function _getUsers() {
  try {
    const response = await fetch(`${process.env.baseGetUsersAPIURL}`);
    const users = await response.json();
    debugger;
    return users

  } catch (e) {
    debugger;
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
