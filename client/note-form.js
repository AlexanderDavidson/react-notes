const React = require('react')
const store = require('./store')

// Full month name
var month = new Array()
month[0] = "January"
month[1] = "February"
month[2] = "March"
month[3] = "April"
month[4] = "May"
month[5] = "June"
month[6] = "July"
month[7] = "August"
month[8] = "September"
month[9] = "October"
month[10] = "November"
month[11] = "December"


function getCurrentDate() {
  var now = new Date()
  var m = month[now.getMonth()]
  return m + now.getDate() + ', ' + now.getFullYear()
}

const NoteForm = props => {
  var { text } = props
  const handleChange = event => {
    store.dispatch({
      type: 'INPUT_CHANGED',
      text: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    store.dispatch({
      type: 'NOTE_CREATED',
      note: {
        date: getCurrentDate(),
        text: text
      }
    })
  }

  return (
    // <div className='card'>
    //   <form className='card-content clearfix' onSubmit={ handleSubmit }>
    //     <div className='input-field'>
    //       <textarea
    //         className='materialize-textarea'
    //         id='note-input'
    //         autoFocus
    //         value={ text }
    //         onChange={ handleChange }
    //         placeholder='Write something revelatory!'></textarea>
    //     </div>
    //     <button
    //       type='submit'
    //       className='btn right'>Save</button>
    //   </form>
    // </div>
  )
}
