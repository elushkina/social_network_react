const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, I am cute kitty!', likesCount: 12},
        {id: 2, message: 'I аm the happiest cat in the world!', likesCount: 22},
        {id: 3, message: 'Bye bye', likesCount: 22},
        {id: 3, message: 'Love you', likesCount: 14},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 5, message: state.newPostText, likesCount: 15
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer