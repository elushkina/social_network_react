import profileReducer, {addPostActionCreator} from "./profile-reducer";

it('new post should be added', () => {
    let action = addPostActionCreator('kitty')
    let state = {
        posts: [
            {id: 1, message: 'Hi, I am cute kitty!', likesCount: 12},
            {id: 2, message: 'I аm the happiest cat in the world!', likesCount: 22},
            {id: 3, message: 'Bye bye', likesCount: 22},
            {id: 4, message: 'Love you', likesCount: 14},
        ]}
    let newState = profileReducer(state, action)

   expect(newState.posts.length).toBe(5)
})
