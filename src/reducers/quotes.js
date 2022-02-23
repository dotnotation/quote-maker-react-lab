export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
      // or return state.concat(action.quote)

    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      let quoteIndex = state.findIndex(q => q.id === action.quoteId)
      let quote = {...state[quoteIndex], votes: state[quoteIndex].votes + 1}
      return [...state.slice(0, quoteIndex), quote, ...state.slice(quoteIndex + 1)]

      case 'DOWNVOTE_QUOTE':
        let index = state.findIndex(quote => quote.id === action.quoteId);
        let quoteDown = state[index];
        if (quoteDown.votes > 0) {
          return [
            ...state.slice(0, index),
            Object.assign({}, quoteDown, { votes: quoteDown.votes -= 1 }),
            ...state.slice(index + 1)
          ];
        }
        return state;

    default:
      return state;

  }
}
