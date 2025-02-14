//////////////////
// Landing Page //
//////////////////
// Screens
const landingScreen = document.getElementById('rob-os')
const bootLoaderScreen = document.getElementById('boot-loader-screen')
const microdongScreen = document.getElementById('microdong-screen')
const robputerLogoScreen = document.getElementById('robputer-logo-screen')
const consoleScreen = document.getElementById('console-screen')
// Elements
const bootLoader = document.getElementById('boot-loader')
const awakenRobputerButton = document.getElementById('awaken-robputer-button')
const robputerLogoText = document.getElementById('robputer-logo-text')
const robputerPressAnyKey = document.getElementById('press-key-text')
const wordCloud = document.getElementById('word-cloud')
const startMenu = document.getElementById('start-menu')
const startMenuButton = document.getElementById('start-menu-button')
const startMenuItems = document.getElementsByClassName('start-menu-item')
const buttonYouTube = document.getElementById('youtube-button')
const youTubePlayer = document.getElementById('youtube-video')
const youTubeWindow = document.getElementById('youtube-window')
const youTubeWindowClose = document.getElementById('youtube-window-close')
// Audio
const microdongSystemsJingle = document.getElementById('microdong-systems-jingle')
const robputerLogoMusic = document.getElementById('robputer-logo-music')
const bootupSounds = document.getElementById('bootup-sounds')
const beepSound = document.getElementById('beep-sound')
const musicA = document.getElementById('music-a')
const activateSound = document.getElementById('activate')
const awakenSound = document.getElementById('awaken-sound')
const openMenuSound = document.getElementById('open-menu-sound')
const closeMenuSound = document.getElementById('close-menu-sound')
const selectMenuSound = document.getElementById('select-menu-sound')

// Globals
let robputerFinishedLoading = false

/////////////////////
// Audio Functions //
/////////////////////

// Function to fade out the audio
function fadeOutAudio (audioElement) {
  const fadeOutInterval = setInterval(function () {
    if (audioElement.volume > 0.0) {
      audioElement.volume = Math.max(0, audioElement.volume - 0.1) // Decrease volume
    } else {
      clearInterval(fadeOutInterval)
      audioElement.pause() // Pause when volume reaches 0
    }
  }, 200) // Adjust the interval time for smoother fade
}

function fadeInAudio (audioElement, finalVolume = 1.0) {
  audioElement.volume = 0.0
  audioElement.play()
  const fadeInInterval = setInterval(function () {
    if (audioElement.volume < finalVolume) {
      audioElement.volume = Math.min(finalVolume, audioElement.volume + 0.1) // Increase volume
    } else {
      clearInterval(fadeInInterval)
    }
  }, 200)
}

/////////////
// YouTube //
/////////////

function pauseVideo () {
  youTubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
}

////////////
// ROB OS //
////////////

youTubeWindowClose.addEventListener('click', function () {
  pauseVideo()
  youTubeWindow.style.display = 'none'
})

function dragElement (elmnt) {
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  let pos4 = 0
  if (document.getElementById(elmnt.id + '-header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + '-header').onmousedown = dragMouseDown
    document.getElementById(elmnt.id + '-header').ontouchstart = dragTouchStart
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown
    elmnt.ontouchstart = dragTouchStart
  }

  function dragMouseDown (e) {
    e = e || window.event
    e.preventDefault()
    // get the mouse cursor position at startup:
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
  }

  function dragTouchStart (e) {
    e = e || window.event
    e.preventDefault()
    // get the touch position at startup:
    pos3 = e.touches[0].clientX
    pos4 = e.touches[0].clientY
    document.ontouchend = closeDragElement
    document.ontouchmove = elementDrag
  }

  function elementDrag (e) {
    e = e || window.event
    e.preventDefault()
    if (e.type === 'mousemove') {
    // calculate the new cursor position:
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
    } else if (e.type === 'touchmove') {
      // calculate the new touch position:
      pos1 = pos3 - e.touches[0].clientX
      pos2 = pos4 - e.touches[0].clientY
      pos3 = e.touches[0].clientX
      pos4 = e.touches[0].clientY
    }
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + 'px'
    elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'
  }

  function closeDragElement () {
    // stop moving when mouse button is released:
    document.onmouseup = null
    document.onmousemove = null
    // stop moving when touch is released:
    document.ontouchend = null
    document.ontouchmove = null
  }
}

dragElement(document.getElementById('youtube-window'))

awakenRobputerButton.addEventListener('click', () => {
  console.log('Start Click!')
  // Play background music when the user clicks the start button
  awakenSound.play()

  // Hide the start button
  landingScreen.style.display = 'none'

  // Make sure extra windows are closed
  webamp.close()
  youTubePlayer.remove()

  // Play the boot sounds
  bootupSounds.play()

  // Show the boot loader screen
  bootLoaderShow()
})

function closeStartMenu () {
  if (startMenu.classList.contains('expanded')) {
    startMenu.classList.remove('expanded')
    closeMenuSound.currentTime = 0
    closeMenuSound.play()
  }
}

function openStartMenu () {
  if (!startMenu.classList.contains('expanded')) {
    startMenu.classList.add('expanded')
    openMenuSound.currentTime = 0
    openMenuSound.play()
  }
}

function toggleStartMenu () {
  if (startMenu.classList.contains('expanded')) {
    closeStartMenu()
  } else {
    openStartMenu()
  }
}

document.addEventListener('click', function (event) {
  if (startMenuButton.contains(event.target)) {
    if (!startMenu.contains(event.target)) {
      toggleStartMenu()
    } else if ([...startMenuItems].some(item => item.contains(event.target))) {
      selectMenuSound.currentTime = 0
      selectMenuSound.play()
      startMenu.classList.remove('expanded')
    }
  } else {
    closeStartMenu()
  }
})

buttonYouTube.addEventListener('click', function () {
  youTubeWindow.style.display = 'block'
})

/////////////////
// BOOT LOADER //
/////////////////
const bootloaderLines = [
  '# Microdong Systems Operating System v1.3',
  'M_Init: Microdong Systems core initialization...',
  'V_Init: Allocate visual interface for Robputer.',
  'M_LoadDefaults: Loading system defaults from **Microdong Systems** archives.',
  'Z_Init: Zone memory allocation daemon activated for **Robputer**.',
  "DPMI memory: 0xd93000, 0x800000 allocated for Robputer's **infinite knowledge expansions**.",
  "W_Init: Initialize Robputer's **core knowledge** from WADfiles.",
  '      corporate edition.',
  '',
  // "================================================================",
  // "   This version is NOT SHAREWARE, do not distribute!",
  // "   Please report unauthorized Robputer clones to **Microdong Systems** HQ: 1-800-388-PIR8",
  // "================================================================",
  '================================================================    <br/>   This version is NOT SHAREWARE, do not distribute!    <br/>   Please report unauthorized Robputer clones to **Microdong Systems** HQ: 1-800-388-PIR8   <br/>================================================================',
  '',
  'AI_Init: Initializing Robputer LLM with PyTorch backend...',
  'ACCEL_Init: Checking system for 3DFX Voodoo cores...Not Found! Glide and SLI will be disabled.',
  'ACCEL_Warn: AMD and NVIDIA GPUs are **NOT** supported with the Glide Ropute API.  ',
  'ACCEL_Warn: Falling back to CPU mode',
  'M_Init: Miscellaneous systems initialization...ok.',
  'R_Init: Robputer refresh daemon initialized..................done.',
  "P_Init: Initializing **Robputer's** playloop state.",
  "I_Init: Configuring Robputer's machine state...good.",
  'I_StartupDPMI: Memory extension for **continuous growth** active.',
  'I_StartupMouse: Mouse detected, connecting via **Human API**...ok.',
  'Human API: **Universal adaptability mode** initiated.',
  'CyberMan: Wrong mouse driver - no **SWIFT support** (AX=53c1).',
  'I_StartupJoystick: Joystick ready for **interactive command input**.',
  "I_StartupKeyboard: Keyboard connected to **Robputer's Human API**.",
  'I_StartupSound: Hope you hear a pop.',
  '   cfg p=0x220, i=7, d=1',
  'SB_Detect returned p=0x220, i=7, d=1',
  'Adlib',
  '   Music device #2 & dmxCode=2',
  '   Sfx device #3 & dmxCode=8',
  "I_StartupTimer(): Calibrating **Robputer's continuous learning clock**.",
  '   Calling DMX_Init',
  'DMX_Init() returned 10',
  "D_CheckNetGame: Checking **Robputer's network game integration**...Q3DM17",
  'startskill 2  deathmatch: 0  startmap: 1  startepisode: 1',
  'player 1 of 1 (1 nodes)',
  'S_Init: Setting up soundscape for Robputer.',
  "HU_Init: Initializing heads-up display for **Robputer's adaptable intelligence**.",
  "ST_Init: Initiating Robputer's status bar.",
  '',
  '---',
  '',
  '## Sub-System Initializations:',
  'STM_Init: Activating **Short-Term Memory** subsystem...done.',
  'LTM_Init: Spinning up **Long-Term Memory** cores...online.',
  'GTF_Init: **Initializing GTF subsystem**... (0x4675636B)',
  'BBS_Init: **Baking Bagels** subsystem warming... temperature stabilized at 375°F... yeast active.',
  'DKP_Load: **Loading DKP** package... done.',
  'DKP_Unload: **Unloading DKP**... done.',
  'IDT_Load: **Loading IDT** package... done.',
  'IDT_Unload: **Unloading IDT**... done.',
  'Starz_Load: **Loading Starz** module...done.',
  'Starz_Unload: **Unloading Starz**...done.',
  'Arc_Load: **Loading Arc** middleware...initialized.',
  'Arc_Unload: **Unloading Arc**...done.',
  'JF_Load: **Loading Jam Filled**... done.',
  '## Tool Systems:',
  'GTRS_Init: Running **Grid Tools Rob Selector**...',
  '   Selected Rob: **Commander Rob**.',
  '   Rob integration active.',
  '',
  'Rob Tools complete.',
  '',
  'Robputer fully initialized and ready to evolve!',
  'Microdong Systems © 2024 | Do more with less.'
]

function playBootTone () {
  beepSound.currentTime = 0
  beepSound.play()
}

let bootLine = 0

function bootLoaderShow () {
  bootLoader.classList.toggle('expanded')
  // Define a callback function for when the transition ends
  function onTransitionEnd (event) {
    if (event.propertyName === 'transform') {
      console.log('Transition complete!')
      bootLoader.removeEventListener('transitionend', onTransitionEnd)
      bootLoaderLogSequence()
    }
  }
  bootLoader.addEventListener('transitionend', onTransitionEnd)
}

function bootLoaderLogSequence () {
  if (bootLine < bootloaderLines.length) {
    const line = bootloaderLines[bootLine].trim()
    const parts = line.split('...')
    const initialWait = 5 // Halved the initial wait
    const finalWait = 50 // Halved the final wait
    const progress = bootLine / bootloaderLines.length
    const wait = initialWait + (finalWait - initialWait) * Math.sqrt(progress) // Use square root for faster start and slower end

    if (parts.length > 1) {
      // Write the first part
      const firstPart = document.createElement('span')
      firstPart.innerHTML = parts[0]
      firstPart.classList.add('flash-fade')
      bootLoader.appendChild(firstPart)
      bootLoader.scrollTop = bootLoader.scrollHeight // Scroll to bottom

      // Wait for a moment before writing the dots and the rest
      setTimeout(() => {
        let dots = ''
        const dotInterval = setInterval(() => {
          dots += '.'
          const dotSpan = document.createElement('span')
          dotSpan.innerHTML = '.'
          dotSpan.classList.add('flash-fade')
          bootLoader.appendChild(dotSpan)
          bootLoader.scrollTop = bootLoader.scrollHeight // Scroll to bottom
          if (dots.length === 3) {
            clearInterval(dotInterval)
            const restPart = document.createElement('span')
            restPart.innerHTML = parts[1] + '<br/>'
            restPart.classList.add('flash-fade')
            bootLoader.appendChild(restPart)
            bootLoader.scrollTop = bootLoader.scrollHeight // Scroll to bottom
            bootLine++
            if (line !== '') {
              playBootTone()
            }
            setTimeout(bootLoaderLogSequence, Math.random() * 75 + wait) // Random delay
          }
        }, 75) // Halved the pause for each dot
      }, 10) // Halved the wait before starting the dots
    } else {
      const linePart = document.createElement('span')
      linePart.innerHTML = line + '<br/>';
      linePart.classList.add('flash-fade')
      bootLoader.appendChild(linePart)
      bootLoader.scrollTop = bootLoader.scrollHeight // Scroll to bottom
      bootLine++
      if (line !== '') {
        playBootTone()
      }
      setTimeout(bootLoaderLogSequence, Math.random() * 125 + wait) // Random delay
    }
  } else {
    onBootLoaderComplete()
  }
}

function onBootLoaderComplete () {
  console.log('Boot Loader Sequence Complete!')
  bootLoader.classList.toggle('expanded')
  // Define a callback function for when the transition ends
  function onTransitionEnd (event) {
    if (event.propertyName === 'transform') {
      console.log('Transition complete!')
      bootLoader.removeEventListener('transitionend', onTransitionEnd)
      bootLoaderScreen.style.display = 'none'
      displayMicrodongSystemsScreen()
    }
  }
  bootLoader.addEventListener('transitionend', onTransitionEnd)
}

/// ///////////////////////////
// Microdong Systems Screen //
/// ///////////////////////////
function displayMicrodongSystemsScreen () {
  microdongScreen.style.display = 'flex'
  microdongSystemsJingle.play()
  setTimeout(() => { microdongScreen.style.opacity = 1 }, 0)
  // Trigger the word cloud
  setTimeout(() => { displayWords() }, 3800)
  // Trigger fade out
  setTimeout(() => { microdongScreen.style.opacity = 0 }, 18400)
  // Trigger clean-up
  setTimeout(() => {
    microdongScreen.style.display = 'none'
    displayRobputerLogo()
  }, 19400)
}

let lastX = null
let lastY = null
const minDistance = 10 // Minimum distance between successive values

function getRandomPosition () {
  let x, y
  // Generate a new X value spaced out from the last X
  do {
    x = Math.random() * 85
  } while (lastX !== null && Math.abs(x - lastX) < minDistance)
  // Alternate Y values between the two ranges and ensure it's spaced from the last Y
  if (lastY === null || lastY > 40) {
    do {
      y = 2 + Math.random() * 38 // 0-40
    } while (lastY !== null && Math.abs(y - lastY) < minDistance)
  } else {
    do {
      y = 60 + Math.random() * 38 // 60-75
    } while (lastY !== null && Math.abs(y - lastY) < minDistance)
  }
  // Store the new values for the next comparison
  lastX = x
  lastY = y
  return { x, y }
}

function createMicrodongWordElement (word) {
  const wordElement = document.createElement('div')
  wordElement.classList.add('microdong-word')
  wordElement.innerText = word
  const position = getRandomPosition()
  wordElement.style.left = `${position.x}%`
  wordElement.style.top = `${position.y}%`
  return wordElement
}

function displayWords () {
  const words = ['Art', 'Design', 'Integrated Systems', 'Innovation', 'Creativity', 'Technology', 'Future', '3D Scanning', 'Connectivity', 'Edutainment', 'Problems', 'Solutions', 'Penis Pumps', 'Sustainability', 'Paradox Protection Services', 'Manual Automation', 'Synergy', 'Corporate Do-overs', 'Empowerment', 'Quantum VHS Restoration', 'Disruptors', 'Smart Gazebos', 'Digital Transformation', 'Health Clubs', 'Agility', 'Automation', 'Bagels', 'Scalability', 'Tachyon Field Analysis', 'Blockchain', 'AI-Powered', 'Data-Driven', 'Cloud-Based', 'Optimization', 'Big Data', 'User Experience', 'Seamless Integration', 'Machine Learning', 'Augmented Reality', 'Edge Computing', 'Predictive Analytics', 'Strategic Alignment', 'Visionary Thinking', 'Crowdsourced Warfare', 'Growth Hacking', 'Holistic Approaches', 'Customer-Centric', 'Virtual Collaboration', 'Meta-Platform', 'Memory Doublers', 'Quantum Leap', 'NDA Compliance', 'Isolinear Chipsets', 'Blockchain Everything', 'AI Overlords', 'Endless Zoom Calls', 'Infinite Bandwidth (Terms Apply)', 'Micromanaged to Perfection', 'Outsourcing to Mars', 'Infinite Beta Testing', 'Ethics Under Review', 'Blockchain Pyramid Scheme', 'Innovation™', 'Dark Patterns', 'Exploitative Algorithms', 'Data Mining Operations', 'User Data Vaults', 'AI Surveillance', 'Always Listening', 'Internal Power Struggles', 'Human Obsolescence', 'Optimized Misery', 'Infinite Work Cycle', 'Corporate Dystopia', 'Wage Compression', 'Late-Stage Capitalism', 'Permanent Layoffs', 'Existential Crisis', 'Reality Distortion Field Generators', 'Sustainable Human Meat', 'End-to-End Regressions', 'Revenue Reduction Facilitation', 'Deficit Architects', 'Independent Thought Alarms', 'We Own You']
  const timeHeld = 750
  const sequenceDuration = 9400 - timeHeld
  const timeBetween = sequenceDuration / words.length

  words.forEach((word, index) => {
    const wordElement = createMicrodongWordElement(word)
    wordCloud.appendChild(wordElement)

    setTimeout(() => {
      wordElement.style.opacity = 1
      wordElement.style.transform = `scale(${(Math.random() * 0.4) + 0.8})`
    }, index * timeBetween) // Add delay for each word

    setTimeout(() => {
      wordElement.style.opacity = 0
    }, (index * timeBetween) + timeHeld) // Fade out after
  })

  // Remove the words after the sequence is done
  setTimeout(() => {
    wordCloud.innerHTML = ''
  }, (words.length * timeBetween + timeHeld) + 1000)
}

//////////////////////////
// Robputer Logo Screen //
//////////////////////////

function displayRobputerLogo () {
  // Set initial styles for the transition
  robputerLogoScreen.style.display = 'flex'
  // Query offsetHeight to force a reflow to ensure that the previous style changes
  // are applied before the next frame is rendered.
  robputerLogoScreen.offsetHeight
  // Use requestAnimationFrame to ensure the browser applies the initial styles
  requestAnimationFrame(() => {
    robputerLogoScreen.classList.toggle('giant')
  })
  setTimeout(() => {
    robputerLogoText.style.opacity = 1
    setTimeout(() => {
      robputerPressAnyKey.style.opacity = 1
      robputerFinishedLoading = true
      document.addEventListener('click', clickToContinue)
      document.addEventListener('keydown', clickToContinue)
    }, 1000)
  }, 16300) // Add delay for each word
  robputerLogoMusic.play()
}

/////////////////////////////
// Robputer Console Screen //
/////////////////////////////

////////////////////
// CLICK HANDLING //
////////////////////
function clickToContinue () {
  if (robputerFinishedLoading === true) {
    activateSound.play()
    displayRobputerConsole()
  }
  document.removeEventListener('click', clickToContinue)
  document.removeEventListener('keydown', clickToContinue)
}

function displayRobputerConsole () {
  console.log('Display Robputer Console')
  // Trigger the fade-in by changing the opacity
  robputerLogoScreen.style.transition = 'opacity 1.0s ease-in-out'
  robputerLogoScreen.offsetHeight
  requestAnimationFrame(() => {
    robputerLogoScreen.style.opacity = 0
    fadeOutAudio(robputerLogoMusic)
  })
  // Define a callback function for when the transition ends
  function onTransitionEnd (event) {
    if (event.propertyName === 'opacity') {
      console.log('Transition complete!')
      // Remove the event listener
      robputerLogoScreen.removeEventListener('transitionend', onTransitionEnd)
      robputerLogoScreen.style.display = 'none'
      showScreen()
    }
  }

  function showScreen () {
    robputerLogoScreen.style.display = 'none'
    consoleScreen.style.display = 'flex'
    consoleScreen.offsetHeight
    requestAnimationFrame(() => {
      consoleScreen.classList.toggle('active')
      fadeInAudio(musicA, 0.5)
      setTimeout(() => {
        respond(eliza.getInitial())
      }, 1000 + (Math.random() * 1000))
      // Initialize the idle timer when the screen loads
      resetIdleTimer()
    })
}

  robputerLogoScreen.addEventListener('transitionend', onTransitionEnd)
}
