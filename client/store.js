const { createStore, combineReducers } = require('redux')

var initialNotes = [
  {
    date: 'February 2, 1789',
    text: 'W. Winds light, W by WSW. Seas 2-4 feet. Am much vexed on account of Mr. Christian. His mood-compass vacillates sharply between Hysterical Agitation and Sullen Lethargy. I had so wanted this Voyage to be special for him...'
  },
  {
    date: 'February 10, 1789',
    text: 'Upon examining the Log, I found that Fletcher, who of late hath taken to addressing me as "Captain Bilge," had put us on a course not for Otaheite but for the Greate Barrier Reefe—named by myself on my Voyage with the late Captain Cook, God rest his fine soul...'
  },
  {
    date: 'March 3, 1789',
    text: 'Otaheite. At anchor. The putting aboard of the Bread-fruit proceeds. It is good to see the men so happy. The Native girls are exceeding generous with their charms.'
  },
  {
    date: 'March 15, 1789',
    text: 'Otaheite. Cross with myself over incident last night. Returned to the ship after surveying the island for the Admiralty, to find Fletcher in mine own berth making exceeding merry with three Native Dollies, one of whom, a girl not twelve years of age, is the daughter of the High Priest Mahoota-ete, upon whose Good Will the success of our mission very much depends...'
  }
]

const notes = (state = initialNotes, action) => {
  return state
}

const reducer = combineReducers({ notes })
const store = createStore(reducer)

module.exports = store
