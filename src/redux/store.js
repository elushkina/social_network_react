import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, I am cute kitty!', likesCount: 12},
                {id: 2, message: 'I аm the happiest cat in the world!', likesCount: 22},
                {id: 3, message: 'Bye bye', likesCount: 22},
                {id: 3, message: 'Love you', likesCount: 14},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Kek'},
                {id: 3, message: 'Lol'},
                {id: 4, message: 'Bye'}
            ],
            dialogs: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Dasha'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Glasha'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}
window.store = store
export default store;
