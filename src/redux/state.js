import {rerenderEntireTree} from "../render";

let state = {
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5, message: state.profilePage.newPostText, likesCount: 15
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}


export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state