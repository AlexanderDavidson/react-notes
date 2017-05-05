const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')

const NotesList = require('./notes-list')

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <NotesList notes={ state.notes }/>,
    document.querySelector('#app')
  )
}

render()

// Insert new message here in segment
// <div class="ui grey vertical segment">
//   <p></p>
// </div>
