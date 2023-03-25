export default (
  state = {
    id: 1,
    username: "user1",
    name: "User 1",
    email: "user1@example.com",
  },
  action
) => {
  switch (action.type) {
    case "":
      return null
    default:
      return state
  }
}
