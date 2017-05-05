const React = require('react')

const Note = props => {
  return (
    <div className='ui grey vertical segment'>
      <div className='ui blue ribbon label'>{ props.date }</div>
      <p>{ props.text }</p>
    </div>
  )
}

const NotesList = props => {
  const { notes } = props
  return (
    <div className='item'>

      { notes.map((note, i) => {
        return <Note key={ i } date={ note.date } text={ note.text } />
      })}

    </div>
  )
}

module.exports = NotesList
