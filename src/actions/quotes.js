// TODO: Create action creators as defined in tests
// all actions are functions that you are exporting
// could also write all of these as arrow functions
// export const downVote = (quoteId) => ({ type: "DOWNVOTE_QUOTE", quoteId: quoteId })
export function addQuote(quote = {}){
// want this to return an object with a type of "ADD_QUOTE" and a quote object
    return{
        type: "ADD_QUOTE",
        quote: quote
    }
}

export function removeQuote(quoteId){
    // should return an object with a type of "REMOVE_QUOTE" and a quoteID
    return{
        type: "REMOVE_QUOTE",
        quoteId: quoteId
    }
}

export function upvoteQuote(quoteId){
    // should return an object with a type of "UPVOTE_QUOTE" and a quoteId
    return{
        type: "UPVOTE_QUOTE",
        quoteId: quoteId
    }
}

export function downvoteQuote(quoteId){
    // should return an object with a type of "DOWNVOTE_QUOTE" and a quoteId
    return{
        type: "DOWNVOTE_QUOTE",
        quoteId: quoteId
    }
}