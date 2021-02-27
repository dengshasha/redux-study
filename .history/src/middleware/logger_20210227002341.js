function logger({getState, dispatch}) {
    console.log(getState())
    console.log('logger')
}

export default logger