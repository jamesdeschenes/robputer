// ROBPUTER BRAIN
/* global speechSynthesis */
/* global SpeechSynthesisUtterance */
/* global ElizaBot */
/* global elizaIdle */

const eliza = new ElizaBot(false)
const history = document.getElementById('history')
const input = document.getElementById('input')
// const cursor = document.getElementById('cursor')
const mouth = document.getElementById('mouth')
// Audio
const robputeAudio = document.getElementById('robpute')
const typeSound = document.getElementById('beep-sound')

let voice = null
let quietMode = false

function selectPreferredVoice () {
  // Fetch the list of available voices
  const voices = speechSynthesis.getVoices()

  const prioritizedVoices = ['Microsoft Andrew Online (Natural) - English (United States)', 'Microsoft Eric Online (Natural) - English (United States)', 'Microsoft Ryan Online (Natural) - English (United Kingdom)']

  // Try to find the first available voice from the prioritized list
  for (const preferredVoiceName of prioritizedVoices) {
    const foundVoice = voices.find(v => v.name === preferredVoiceName)
    if (foundVoice) {
      console.log('Found preferred voice:', foundVoice)
      voice = foundVoice
      return
    }
  }
  // Fallback to the first voice in the list if no preferred voices are found
  voice = voices[0]
}

// Get the voice we will use

if ('speechSynthesis' in window) {
  console.info('Your browser supports speech synthesis.')
  selectPreferredVoice()
  console.log('Selected voice:', voice)
} else {
  console.warning('Sorry your browser does not support speech synthesis')
}

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function (e) {
  selectPreferredVoice()
}

function focusAndMoveCursorToTheEnd (e) {
  input.focus()

  const range = document.createRange()
  const selection = window.getSelection()
  const { childNodes } = input
  const lastChildNode = childNodes && childNodes.length - 1

  range.selectNodeContents(lastChildNode === -1 ? input : childNodes[lastChildNode])
  range.collapse(false)

  selection.removeAllRanges()
  selection.addRange(range)
}

// Helper function to return a Promise that resolves after a given delay
function wait (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Returns a random integer between min (inclusive) and max (inclusive)
function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function playTypeTone () {
  typeSound.currentTime = 0
  typeSound.play()
}

async function doesNotRobpute () {
  robputeAudio.currentTime = 0
  robputeAudio.play()

  const totalTime = 11200
  const messages = [
    'Robputer is thinking...',
    '10% - Analyzing input',
    '20% - Processing data',
    '30% - Double-checking facts',
    '40% - Calling a friend',
    '50% - Running algorithms',
    '60% - Checking the weather',
    '70% - Analyzing the stock market',
    '80% - Critiquing the latest movies',
    '90% - Attempting to recall a joke',
    '100% - Ready to respond'
  ]

  for (let i = 0; i < messages.length; i++) {
    typeAnyText(messages[i])
    await wait(totalTime / messages.length)
  }
  typeAnyText('Does not Robpute!', null, true)
  await wait(1500)
  const responses = [
    'Better luck next time!',
    'Try again later!',
    'Not today!',
    'Looks like Robputer is on a break!',
    'Robputer is busy right now!',
    'Robputer is not in the mood!',
    'Almost had it!'
  ]
  respond(responses[randomInt(0, responses.length - 1)])
}

async function handleCommand (command) {
  // 8% chance to fail to Robpute.
  if (Math.random() > 0.92) {
    doesNotRobpute()
    return
  }

  currentlyResponding = true
  const line = document.createElement('DIV')
  line.classList.add('response') // Add class for styling

  // Sanitize the command to be safe for HTML
  const sanitizedCommand = command.replace(/[&<>"']/g, function (match) {
    const escape = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }
    return escape[match]
  })

  // Append the command immediately with formatting
  line.innerHTML = `> ${sanitizedCommand}<br>`
  history.appendChild(line)

  const responseDelay = (Math.random() * 1000) + 500
  const robputerResponse = eliza.transform(command)
  setTimeout(() => {
    respond(robputerResponse, line)
    // Reset the idle timer
    resetIdleTimer()
  }, responseDelay) // Delay before starting the response
}

const angryFace = document.getElementById('robputer-head-angry')

function angry (delay = 0, duration = 1000) {
  setTimeout(() => {
    angryFace.style.opacity = 1
    setTimeout(() => {
      angryFace.style.opacity = 0
    }, duration) // Handle revert to neutral state
  }, delay) // Handle any delay before starting
}

// Function to fade out and remove old responses
function cleanUpHistory () {
  const responses = document.querySelectorAll('.response')
  // If more than one response, remove the oldest until only one remains
  if (responses.length > 1) {
    function removeNext (index) {
      // Stop when we have one left
      if (responses.length - index > 1) {
        const firstResponse = responses[index]
        firstResponse.classList.add('fade-out')
        setTimeout(() => {
          firstResponse.remove()
          removeNext(index + 1)
        }, 1000) // Delay matches the fade-out CSS transition
      }
    }
    removeNext(0)
  }
}

let currentlyResponding = false

function respond (robputerResponse, line = null) {
  if (line === null) {
    line = document.createElement('DIV')
    line.classList.add('response') // Add class for styling
    history.appendChild(line)
  }

  // Check for special tokens in the response text
  const specialTokens = robputerResponse.match(/{[^}]+}/g)
  if (specialTokens) {
    specialTokens.forEach(token => {
      // Estimate the duration up to the token
      const textBeforeToken = robputerResponse.split(token)[0]
      const durationBeforeToken = estimateSpeechDuration(textBeforeToken)
      console.log(`Estimated duration before token: ${durationBeforeToken} seconds`)

      // Estimate the remaining duration after the token
      const remainingText = robputerResponse.split(token).pop()
      const remainingDuration = estimateSpeechDuration(remainingText)
      console.log(`Estimated remaining speech duration: ${remainingDuration} seconds`)
      switch (token) {
        case '{angry}':
          // Perform special behavior for {angry} token
          console.log('Angry token detected')
          angry(durationBeforeToken * 1000, remainingDuration * 1000)
          break
        // Add more cases for other special tokens as needed
        case '{quiet}':
          // Perform special behavior for {quiet} token
          console.log('Quiet token detected')
          quietMode = true
          break
        default:
          console.log(`Unknown token detected: ${token}`)
      }
      // Remove the token from the response text
      robputerResponse = robputerResponse.replace(token, '')
    })
  }

  animateTalkingMouth(robputerResponse)
  const responseText = robputerResponse.split('\n') // Split by new lines to add breaks later

  let charIndex = 0
  let lineIndex = 0

  // Start speech synthesis at the beginning of the typing
  console.log('Voice:', voice)
  if (voice !== null) {
    console.log('Speaking:', robputerResponse)
    const utterance = new SpeechSynthesisUtterance(robputerResponse)
    utterance.voice = voice
    speechSynthesis.speak(utterance)
  }

  // Add the bright effect when typing starts
  line.classList.add('bright-effect')

  function typeText () {
    if (lineIndex < responseText.length) {
      if (charIndex < responseText[lineIndex].length) {
        // Append one character at a time from the current line of text
        line.innerHTML += responseText[lineIndex][charIndex]
        charIndex++
        setTimeout(typeText, 50) // Typing delay
      } else {
        // Once a line is fully typed, add a line break and move to the next line
        line.innerHTML += '<br>'
        charIndex = 0
        lineIndex++
        setTimeout(typeText, 50) // Delay before typing the next line
      }
    } else {
      // Once typing is done, fade out the bright effect after a short delay
      setTimeout(() => {
        currentlyResponding = false
        line.classList.remove('bright-effect')
        line.classList.add('dim-effect')
      }, 500) // Slight delay before starting the fade
    }
  }

  // Start typing the response text
  typeText()

  // Clean up old responses
  cleanUpHistory()

  // Reset the idle timer
  resetIdleTimer()
}

function typeAnyText (inputText, line = null, error = false) {
  currentlyResponding = true

  if (line === null) {
    line = document.createElement('DIV')
    line.classList.add('response') // Add class for styling
    history.appendChild(line)
  }

  if (error) {
    line.style.color = 'red'
  }

  line.classList.add('bright-effect')

  const inputTextLines = inputText.split('\n')

  let charIndex = 0
  let lineIndex = 0

  function typeInputText () {
    if (lineIndex < inputText.length) {
      if (charIndex < inputTextLines[lineIndex].length) {
        // Append one character at a time from the current line of text
        line.innerHTML += inputTextLines[lineIndex][charIndex]
        playTypeTone()
        charIndex++
        setTimeout(typeInputText, Math.random() * 50) // Typing delay
      } else {
        // Once a line is fully typed, add a line break and move to the next line
        line.innerHTML += '<br>'
        charIndex = 0
        lineIndex++
        setTimeout(typeInputText, Math.random() * 50) // Delay before typing the next line
      }
    } else {
      // Once typing is done, fade out the bright effect after a short delay
      setTimeout(() => {
        currentlyResponding = false
        line.classList.remove('bright-effect')
        line.classList.add('dim-effect')
      }, 500) // Slight delay before starting the fade
    }
  }
  typeInputText()
  cleanUpHistory()
  resetIdleTimer()
  currentlyResponding = false
}

///////////////
// Idle Chat //
///////////////
let idleTimer
let idleThreshold

// Function to reset the idle timer
function resetIdleTimer () {
  // Clear the existing timer
  if (idleTimer) {
    clearTimeout(idleTimer)
  }

  // Set a new randomized threshold (e.g., between 30 and 60 seconds)
  idleThreshold = (Math.random() * 60000) + 45000

  // Set a new timer
  idleTimer = setTimeout(handleIdleResponse, idleThreshold)
}

function handleIdleResponse () {
  if (quietMode === false) {
    // Choose a random idle line
    const randomIdleLine = elizaIdle[Math.floor(Math.random() * elizaIdle.length)]

    // Call the respond function with the idle line
    respond(randomIdleLine)
  }
}

// Every time the selection changes, add or remove the .noCursor
// class to show or hide, respectively, the big square cursor.
// Note this function could also be used to enforce showing always
// a big square cursor by always selecting 1 chracter from the current
// cursor position, unless it's already at the end, in which case the
// cursor element should be displayed instead.
document.addEventListener('selectionchange', () => {
  if (document.activeElement.id !== 'input') return

  const range = window.getSelection().getRangeAt(0)
  // const start = range.startOffset
  const end = range.endOffset
  const length = input.textContent.length

  if (end < length) {
    input.classList.add('no-caret')
  } else {
    input.classList.remove('no-caret')
  }
})

input.addEventListener('input', () => {
  // If we paste HTML, format it as plain text and break it up
  // input individual lines/commands:
  if (input.childElementCount > 0) {
    const lines = input.innerText.replace(/\n$/, '').split('\n')
    const lastLine = lines[lines.length - 1]

    for (let i = 0; i <= lines.length - 2; ++i) {
      handleCommand(lines[i])
    }

    input.textContent = lastLine

    focusAndMoveCursorToTheEnd()
  }

  // If we delete everything, display the square caret again:
  if (input.innerText.length === 0) {
    input.classList.remove('no-caret')
  }
})

document.addEventListener('keydown', (e) => {
  // If some key is pressed outside the input, focus it and move the cursor
  // to the end:
  if (e.target !== input) focusAndMoveCursorToTheEnd()
})

const commandHistory = []
let historyIndex = -1

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    if (currentlyResponding === true) {
      console.log('Currently responding, ignoring input')
      return
    }
    const command = input.textContent
    if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== command.trim()) {
      commandHistory.push(command.trim())
    }
    historyIndex = commandHistory.length
    handleCommand(command)
    input.textContent = ''
    focusAndMoveCursorToTheEnd()
  } else if (e.key === 'ArrowUp') {
    if (historyIndex > 0) {
      historyIndex--
      input.textContent = commandHistory[historyIndex]
      setTimeout(focusAndMoveCursorToTheEnd, 0)
    }
  } else if (e.key === 'ArrowDown') {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++
      input.textContent = commandHistory[historyIndex]
      setTimeout(focusAndMoveCursorToTheEnd, 0)
    } else {
      historyIndex = commandHistory.length
      input.textContent = ''
    }
  }
})

// Set the focus to the input so that you can start typing straight away:
input.focus()

// Function to ensure the input area is focused
function focusInput () {
  console.log('TOUCH')
  input.focus()

  // Ensures the cursor is at the end of the content
  const range = document.createRange()
  const selection = window.getSelection()
  const { childNodes } = input
  const lastChildNode = childNodes.length > 0 ? childNodes[childNodes.length - 1] : input

  range.selectNodeContents(lastChildNode)
  range.collapse(false)

  selection.removeAllRanges()
  selection.addRange(range)
}

// Add event listeners for click and touchstart to ensure focus on mobile
document.addEventListener('click', focusInput)
document.addEventListener('touchstart', focusInput)

// JavaScript to fade in the div after a 1 second
window.onload = function () {
  setTimeout(function () {
    document.getElementById('terminal').style.opacity = 1
  }, 1000) // 5000 milliseconds = 5 seconds
}

// Helper function to estimate syllable count in a word
function countSyllables (word) {
  word = word.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
    .replace(/^y/, '')
    .match(/[aeiouy]{1,2}/g)
  return word ? word.length : 1
}

// Function to estimate the speech duration with improved accuracy
function estimateSpeechDuration (text, rate = 1, averageSyllablesPerSecond = 4.5) {
  const words = text.trim().split(/\s+/)
  let totalSyllables = 0

  // Count syllables for each word
  for (const word of words) {
    totalSyllables += countSyllables(word)
  }

  // Estimate pauses due to punctuation
  const punctuationPauses = (text.match(/[.,!?;:]/g) || []).length * 0.5 // 0.5 seconds per punctuation mark

  // Calculate total duration
  const totalDuration = (totalSyllables / (averageSyllablesPerSecond * rate)) + punctuationPauses
  return totalDuration
}

// Function to create a dynamic 'talking' animation based on text input
function animateTalkingMouth (text) {
  const duration = estimateSpeechDuration(text, 1) // Get the speech duration

  // Set constant on/off animation rate (e.g., 300ms per open/close cycle)
  const talkingRate = 0.5 // 300ms for each open/close cycle

  // Remove any existing animation styles
  mouth.style.animation = 'none'

  // Create a unique animation name
  const animationName = `talking-${Date.now()}`

  // Inject dynamic keyframes for quick fades at a constant rate
  const styleTag = document.createElement('style')
  styleTag.innerHTML = `
      @keyframes ${animationName} {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
      }
    `
  document.head.appendChild(styleTag)

  // Apply the dynamic animation to the open mouth with constant rate and speech duration
  mouth.style.animation = `${animationName} ${talkingRate}s steps(1, end) infinite`

  // Automatically stop the animation after the speech duration
  setTimeout(() => {
    mouth.style.animation = 'none' // Stop animation after speech duration
    document.head.removeChild(styleTag) // Clean up the style tag
  }, duration * 1000) // Convert to milliseconds
}
