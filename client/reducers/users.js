export default function users(state = {}, action) {
  switch (action.type) {
    case 'STARTING_REQUEST':
      return {
        fetching: true,
        user: {},
      }
    case 'FINISHED_REQUEST':
      return {
        fetching: false,
        user: action.user,
      }
    default:
      return state
  }
}
