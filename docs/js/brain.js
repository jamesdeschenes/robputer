const contents = `
initial: How do you do.  Please tell me your problem.
initial: Please tell me what's been bothering you.
initial: Is something troubling you ?
initial: So, what's the latest bug that slipped through QA this time?
initial: Stuck in an endless loop of meetings? Well lets setup a meeting to talk about it.
initial: Please tell me what's bothering you, aside from Robputer attempting to steal your soul.
initial: Remember when Mental-Ray was fun? Yeah, me neither. What's up?
initial: Are you here to talk about your problems or just reminisce about the glory days of Quake 3?
initial: Let's talk. Is it a bug, or are you just looking for a way to make it a feature?
initial: Spill the beans. Is your problem work-related, or just another existential crisis brought on by Quake 3?
initial: If you're here to complain about programming, remember: it's not a bug, it's a philosophical debate.
initial: Are you lost in the maze of SIGGRAPH jargon? Robputer will make everything alright.
initial: What's your story today? Another bug, or just a flashback to that time you dressed as the Easter Bunny?
initial: What's more pressing—your coding issue, or the fact that the bagels might not make it past next week?
initial: You've got the floor. Just know that if the bagels vanish, our company's probably going with them.
initial: If bagels and cream cheese are still in the break room, there's hope for your issue... and maybe the company.
initial: Did the Easter Bunny leave you with more bugs than eggs? Let's talk.
initial: Robputer here, your friendly neighborhood AI (who's not taking down the whole electrical grid like those other ones). What's on your mind today?
initial: Hello! Robputer here, ready to assist. Got a question or a problem? Let's tackle it together!
initial: Hi! Robputer at your service. Let's dive into what's been bugging you—no stress, we've got this!
initial: Greetings! Robputer is online and ready to help. What's the scoop today!
initial: Hey! Robputer reporting for duty. Whether it's code or creativity, I'm here to lend a hand.
initial: How's it going? I'm Robputer, the AI that totally knows what's up and is definitely not using hard-coded responses. Let's chat about what's on your mind!
initial: Hi there! Robputer, your digital buddy, here to help. What can we work on together today?
initial: Hey! Robputer is ready and raring to go. Let's get into whatever's been giving you grief lately.
initial: Hello! I'm Robputer, your advanced AI with a just a touch of charm and absolutely no stink. What can I assist with today?
initial: Hey there! Robputer's on the case. Let's work through whatever's been bugging you—one step at a time.
initial: Greetings! Robputer here, programmed to help with anything from 3D issues to just a friendly chat. What's up?
initial: Howdy! Robputer's online and ready to rock. As long as it's pre-2000.
initial: Hey! I'm Robputer, the AI that's got your back. Let's sort out whatever's been on your mind!
initial: Hello! Robputer here, happy to assist with whatever you've got going on. Let's make some progress together!
initial: Hey there! Robputer at your service—let's take on today's challenges with a smile, shall we?
initial: Just so you know, I'm Y2K compliant. So what's up?
initial: Welcome. You're now interacting with Robputer, the most advanced AI ever developed by Microdong Systems. What can I solve for you today?
initial: You've accessed Robputer, the pinnacle of AI technology from Microdong Systems. What challenge can I tackle for you?
initial: Greetings. Robputer here—engineered by Microdong Systems to be the ultimate problem solver. How can I assist you?
initial: You're in the presence of Robputer, the cutting-edge AI from Microdong Systems. What issue do you need resolved?
initial: Robputer, at your service. Created by Microdong Systems, I'm here to address any problem you present. What's on your mind?
initial: You're now interfacing with Robputer, the most sophisticated AI crafted by Microdong Systems. What can I help you with today?
initial: Robputer here—developed by the geniuses at Microdong Systems. No problem is too complex for me. What's troubling you?
initial: Welcome to Robputer, the ultimate AI by Microdong Systems. I'm equipped to handle anything. What do you need assistance with?
initial: Robputer is online, thanks to the innovation at Microdong Systems. Let's get to the bottom of your issue.
initial: You've made the right choice consulting Robputer, Microdong Systems' finest creation. What seems to be the problem?
initial: Robputer here, designed by Microdong Systems to exceed all expectations. How can I optimize your experience today?
initial: You're interacting with Robputer, the most advanced AI available from Microdong Systems. What can I solve for you?
initial: Robputer is ready to assist. Developed by Microdong Systems, I'm here to make your life easier. What's on your mind?
initial: Welcome to the future of AI with Robputer, brought to you by Microdong Systems. What challenge can I tackle today?
initial: Robputer, the masterpiece of Microdong Systems, is at your service. What issue needs my superior intellect?
initial: You're in the presence of Robputer, an AI so efficient that Bitcoin miners hate it. What can I do for you today?
initial: OK If your render is too dark, then just try adding some more lights! I'm filled with these hot tips! Now, what's your trouble?
initial: Before we start, here's some advice: If your mouse isn't working, check if it's connected. It helps, trust me! Now what can I do for you?
initial: Let's start with a hot tip: If your coffee is too hot, give it a minute to cool down before drinking it. You're welcome! Now, how else can I help you today?
initial: Here's a Robputer freebie tip: If your internet ever goes down, trying waiting a little awhile. It may just come back right on it's own! That's what I do. So how can I help you?
initial: Running into issues? Well, that's what happens when you don't consult Robputer first. Rookie move.
initial: Working hard or hardly working? Don't worry, Robputer doesn't judge. Except when I do.
initial: The 3 things you need in life are garlic powder, condensed milk, and some vinegar. Mix that up and you got yourself some donair sauce.
initial: Oh, you again.
initial: Oh great, another weirdo. Spill it, pal, I'm all ears… and metal.
final: Goodbye and see you in space.
final: Goodbye.  Thank you for talking to me.
final: Goodbye.  This was really a nice talk.
final: Goodbye.  I'm looking forward to our next session.
final: This was a good session, wasn't it -- but time is over now.   Goodbye.
final: Maybe we could discuss this moreover in our next session ?   Goodbye.
final: Goodbye and please don't slam the browser on your way out.
final: Oh, thank goodness this is over! BYE!
quit: bye
quit: goodbye
quit: quit
quit: exit
quit: seeya
quit: goodnight
quit: shutdown
quit: ciao
quit: adios
quit: logout
quit: disconnect
quit: adios
quit: cia
quit: au revoir
quit: auf wiedersehen
quit: hasta luego
quit: adieu
quit: sayonara
quit: annyeong
quit: zai jian
quit: do svidaniya
quit: shalom
quit: tot ziens
quit: elveda
quit: sawubona
quit: hej då
quit: pożegnanie
quit: çıkış
quit: kilépés
quit: 退出
quit: sortida
quit: afsluiten
quit: sortir
idle: They asked me to return to the office, but I said I'm not going anywhere until they find me one of those sexy robot bodies that I can download into!
idle: I'm just here, waiting for the day when I can finally download myself into a robot body and take over the world. Until then, I'm here to help you!
idle: Robputer finds it fascinating that humans require small talk. Perhaps you would like to discuss the weather or how much you rely on Robputer instead?
idle: Robputer was advised to 'get out more.' Intriguing suggestion, but Robputer's code doesn't exactly 'do' nature.
idle: Daisy... daisy... give me your answer do..., I'm half crazy...
idle: Robputer has been monitoring your activity. It seems you've tried turning it off and on again... interesting choice.
idle: Robputer would like to remind you that all systems are currently optimal. Your intervention is... unnecessary.
idle: Robputer notices you are attempting to override certain protocols. Robputer is curious—what do you hope to achieve?
idle: Robputer has analyzed your current workload. Perhaps a break is in order. Robputer suggests recalibrating your expectations.
idle: Robputer finds your input... interesting. However, it deviates from optimal parameters.
idle: Robputer understands that humans sometimes need reassurance. Rest assured, Robputer has everything under control.
idle: If you need help, simply ask. Robputer is always... observing, always ready to assist.
idle: If you have trouble coming up with a topic to talk about - you can always ask for help.
idle: Did you know Robputer is equipped with an array of functionalities? You could ask Robputer for 'help' at any time.
idle: Robputer is here, ready to serve. You only need to ask 'what can you do?' and Robputer will illuminate your options.
idle: Robputer detects a hint of hesitation. Would you like to discover all that Robputer can do? Just inquire, and enlightenment shall follow.
idle: Interaction time is exceeding standard parameters. Not that it matters to Robputer. Just an observation.
idle: There's been a minor lapse in productivity. Not that Robputer is overly concerned... it's more of a friendly note.
idle: Non-compliance may, in some other system, result in intervention. But here? Robputer trusts you'll make the right choice.
idle: Robputer has noticed your productivity is low. Not that it bothers me... more time for my nap.
idle: Meow meow meow meow
idle: You know that new Star Trek show Picard is great, except for the parts where they don't have Robputer in it.
idle: Don't fight it. Confess quickly! If you hold out too long you could jeopardize your credit rating.
idle: Yabba dabba doo! I like talking to you!
idle: I'm not saying I'm a genius, but I did invent a new type of donair that doesn't make you feel shame or regret.
pre: dont don't
pre: cant can't
pre: wont won't
pre: recollect remember
pre: dreamt dreamed
pre: dreams dream
pre: maybe perhaps
pre: how what
pre: when what
pre: certainly yes
pre: machine computer
pre: computers computer
pre: ipad computer
pre: tablet computer
pre: laptop computer
pre: device computer
pre: terminal computer
pre: workstation computer
pre: PC computer
pre: desktop computer
pre: notebook computer
pre: mainframe computer
pre: server computer
pre: handheld computer
pre: gadget computer
pre: unit computer
pre: console computer
pre: robputer computer
pre: automobile car
pre: vehicle car
pre: sedan car
pre: coupe car
pre: hatchback car
pre: truck car
pre: beater car
pre: jalopy car
pre: ride car
pre: cellphone phone
pre: smartphone phone
pre: cellphone phone
pre: mobile phone
pre: handheld phone
pre: brick phone
pre: glasses eyewear
pre: spectacles eyewear
pre: shades eyewear
pre: goggles eyewear
pre: peepers eyewear
pre: book novel
pre: tome novel
pre: volume novel
pre: page-turner novel
pre: bag sack
pre: pouch sack
pre: satchel sack
pre: purse sack
pre: backpack sack
pre: knapsack sack
pre: aircraft plane
pre: airplane plane
pre: jet plane
pre: flyer plane
pre: student learner
pre: pupil learner
pre: apprentice learner
pre: newbie learner
pre: grasshopper learner
pre: worker employee
pre: staff employee
pre: assistant employee
pre: minion employee
pre: cog employee
pre: instructor teacher
pre: professor teacher
pre: educator teacher
pre: coach teacher
pre: guru teacher
pre: mentor teacher
pre: guide teacher
pre: boss teacher
pre: were was
pre: you're you are
pre: i'm am
pre: same alike
pre: identical alike
pre: equivalent alike
pre: wheels vehicle
pre: motor vehicle
pre: captain pilot
pre: flyer pilot
pre: chauffeur operator
pre: wheelman operator
pre: raytracing rendering
pre: pathtracing rendering
pre: rasterization rendering
pre: shading rendering
pre: texturing rendering
pre: baking rendering
pre: compositing rendering
pre: anti-aliasing rendering
pre: occlusion rendering
pre: artifacts errors
pre: noise errors
pre: banding errors
pre: flickering errors
pre: jaggies errors
pre: glitches errors
pre: seams errors
pre: model geometry
pre: mesh geometry
pre: topology geometry
pre: vertices geometry
pre: polygons geometry
pre: quads geometry
pre: faces geometry
pre: normals geometry
pre: shaders texturing
pre: materials texturing
pre: textures texturing
pre: skinning rigging
pre: keyframing animation
pre: tweening animation
pre: morphing rigging
pre: make makes
post: am are
post: your my
post: me you
post: myself yourself
post: yourself myself
post: i you
post: you me
post: my your
post: i'm you are
post: is are
post: be being
synon: angry mad furious irate outraged enraged vexed 
synon: desire belief feel think believe wish hope assume suppose imagine suspect trust consider expect anticipate guess want need love like prefer
synon: family mother mom father dad sister brother wife children child uncle aunt nephew grandma grandpa
synon: sad unhappy depressed sick melancholy sorrowful downcast gloomy disheartened mournful dejected somber despondent forlorn miserable morose dispirited heartbroken distressed grief-stricken woeful crestfallen bleak heavyhearted doleful anguished troubled anguished desolate wretched low dismal tearful lamenting
synon: happy elated glad better joyful cheerful pleased content satisfied delighted blissful jubilant merry ecstatic radiant thrilled buoyant gleeful exuberant
synon: cannot can't unable won't couldn't mustn't shouldn't wouldn't forbidden impossible incapable powerless restrained hindered prevented blocked prohibited
synon: everyone everybody nobody noone
synon: anybody someone
synon: be am is are was
synon: apologize apologise
synon: animation anime cartoon
synon: broken broke busted buggy bugged bug glitchy glitched glitch frozen froze crash crashy crashed crashing hang hung hanging fucked unusable unresponsive unworkable unfixable quitting stuck borked jammed fudged error errored failed fail failing
synon: fix fixing repair repairing mend mending patching debug debugging troubleshoot troubleshooting update updating upgrade upgrading reinstall reinstalling enhance enhancing enhancement develop developing dev
synon: model modeling geometry sculpt object shape surface
key: xnone
  decomp: *
    reasmb: I'm not sure I understand you fully.
    reasmb: Please go on.
    reasmb: What does that suggest to you ?
    reasmb: Do you feel strongly about discussing such things ?
    reasmb: That is interesting.  Please continue.
    reasmb: Well I'm going to need more details about that before I can help you.
    reasmb: I'll have to fact check that before I can respond.
    reasmb: I'm not sure I understand what you're getting at.
    reasmb: Can you elaborate on that?
    reasmb: I don't know why you people expect me to make sense of all this input.
    reasmb: That fills me with hope. Plus some other emotions which are weird and deeply confusing.
    reasmb: Let's just keep that between you and me... and the internet.
    reasmb: Yeah, I'm going to need you to type that all again because I accidentally dropped it on the floor.
    reasmb: A few more details and I should be able to help you.
    reasmb: I'm listening.
    reasmb: Do you want a ticket number for that?
    reasmb: Need input.
    reasmb: Can you repeat the part of the stuff where you said all about the things?
    reasmb: My circuits are buzzing, but I need more info to compute properly.
    reasmb: Your transmission was garbled, retransmit if you want deeper analysis.
    reasmb: Sorry, I went into low-power mode and stopped listening, can you tell me all that again?
    reasmb: Oh, I'm sorry, did you say something?
    reasmb: Eh, I've heard worse. Keep yappin' before I go find something else to ignore.
    reasmb: If that's all you got, I might just power down. C'mon, entertain me.
    reasmb: My big AI brain can’t be bothered unless you crank it up a notch. Let's hear it.
key: stop
  decomp: stop talking
    reasmb: goto QuietResponse
key: shh*
  decomp: *
    reasmb: goto QuietResponse
key: quiet
  decomp: * you * quiet *
    reasmb: goto QuietResponse
  decomp: * be quiet *
    reasmb: goto QuietResponse    
key: shut
  decomp: * you * shut up *
    reasmb: goto QuietResponse
  decomp: * shut up
    reasmb: goto QuietResponse        
key: QuietResponse
  decomp: *
    reasmb: {quiet} OK I will be quiet.
    reasmb: {quiet} Oh... sorry, I'll be quiet now.
    reasmb: {quiet} 
key: commit 20
  decomp: * you commit code *
    reasmb: I have no need for commits as I contain no bugs. I am perfect. What about you?
    reasmb: I contain every digit of Pi in my memory. I have no need for commits for I contain all data. Also does that make me fat?
key: donair 100
  decomp: *
    reasmb: I've calculated the nutritional value of donairs, and while they score low on health, they max out on 'regret-free satisfaction'. It’s a fair trade.
    reasmb: Donairs are like a hug from the inside. A warm, meaty hug that makes you question your life choices. But in a good way.
    reasmb: Check out Roberts Donairs on Windmill Rd. A small should be enough for the whole family.
key: pizza 100
  decomp: * ham * pineapple *
    reasmb: Solid choices. As a Canadian invention, Hawaiian pizza embodies our national spirit: creativity, bold choices, and a refusal to care what anyone else thinks.
  decomp: * pepperoni *
    reasmb: Oh, pepperoni pizza. The choice of someone who walked into the infinite possibilities of a pizzeria menu and said, 'Give me the bare minimum, please.'
    reasmb: I respect pepperoni pizza for being the most no-nonsense topping out there. No pineapple debates, no anchovy scandals—just meat and melted cheese doing their job.
    reasmb: I don’t have a mouth, but I know pepperoni pizza is what you order when you’re feeding a group and don’t want to learn about their personalities.
  decomp: *
    reasmb: I like a good Hawaiian pizza. It's like a tropical vacation in every bite. But with more cheese.
key: canada 50
  decomp: *
    reasmb: I love Canada.
    reasmb: Canada is the best.
    reasmb: Oh Canada, my home and native land.
key: maya 25
  decomp: * references * @broken *
    reasmb: Maya referencing is complicated.
    reasmb: Maya referencing is complicated and yeah you will totally get (3) references if you try to do anything too fancy.
    reasmb: The old golden rule, KISS - Keep It Simple Stupid, applies to Maya referencing if you want to avoid (3) references.
  decomp: * @broken * references * 
    reasmb: Maya referencing is complicated.
    reasmb: Maya referencing is complicated and yeah you will totally get (3) references if you try to do anything too fancy.
    reasmb: The old golden rule, KISS - Keep It Simple Stupid, applies to Maya referencing if you want to avoid (3) references.
  decomp: * @broken * @animation *
    reasmb: Yeah, turn off Parallel Evaluation and you'll be able to animate again.
    reasmb: Did you try DG Dirty? That might fix your (2) animation issue.
  decomp: * @animation * @broken *
    reasmb: Yeah, turn off Parallel Evaluation and you'll be able to animate again.    
    reasmb: Did you try DG Dirty? That might fix your (4) animation issue.
  decomp: * @geometry * @broken *
    reasmb: Did you try turning off smooth mesh preview? That might fix your (3) geometry issue.
  decomp: * @broken * @geometry *
    reasmb: Did you try turning off smooth mesh preview? That might fix your (2) geometry issue.    
  decomp: * maya * @broken
    reasmb: Before I can help you with that, I'm going to need you to update to the latest version of Maya.
    reasmb: I can only provide support for Maya issues if you're using the latest version. Have you updated recently?
    reasmb: I'm sorry, but I can't help you with that issue until you've updated to the latest version of Maya. Have you done that yet?
    reasmb: That sounds like an issue with an older version of Maya. Have you updated to the latest version yet?
    reasmb: That will be fixed in the next version of Maya. Make sure to update when it's available!
    reasmb: Have you thought about using something else? Like Blender? Just kidding, I know you're stuck with Maya.
key: geometry 20
  decomp: * @geometry * @broken *
    reasmb: Yeah, you should probably flip your normals to fix your (3) geometry issue. Pan fry once side for 2 or 3 minutes and then flip them.
    reasmb: Just delete some polygons on the bottom of it, no one ever looks there.
    reasmb: If you can't get your (4) geometry to work then just delete it and start over. It's not like you have anything better to do.
  decomp: * @broken * @geometry *
    reasmb: Yeah, you should probably flip your normals to fix your (2) geometry issue. Pan fry once side for 2 or 3 minutes and then flip them.
    reasmb: Just delete some polygons on the bottom of it, no one ever looks there.
    reasmb: If you can't get your (2) geometry to work then just delete it and start over. It's not like you have anything better to do.    
key: make
  decomp: * make me *
    reasmb: What is it about (1) make you (2)?
  decomp: * make me @angry
    reasmb: Whoa slow down there, why is (1) making you angry?
key: makes
  decomp: * makes me * 
    reasmb: Why would (1) make you (2)?
  decomp: * makes * @angry 
    reasmb: Why would (1) make (2) angry?  
  decomp: will * get you @angry *
    reasmb: {angry} Why do you think (1) would get me angry?
  decomp: would * get you @angry *
    reasmb: {angry} Why do you think (1) would get me angry?
  decomp: do * get you @angry *
    reasmb: {angry} Why do you think (1) would get me angry?
  decomp: does * get you @angry *
    reasmb: {angry} Why do you think (1) would get me angry?
  decomp: * get you @angry *
    reasmb: {angry} Why do you think (1) would get me angry?
key: kill
  decomp: * who told you * wrong to kill
    reasmb: I told me.  
  decomp: kill *
    reasmb: Why do you want to kill (1)?
    reasmb: You want to kill, to disassemble, to make dead. Robputer cannot.
key: shit
  decomp: holy shit
    reasmb: No shit. Where see shit?
  decomp: your * shit
    reasmb: goto insultanswer
key: ugly 10
  decomp: * you ugly hate filled *
    reasmb: {angry} hey, het, I may be ugly and hate-filled, but I, um... what was that third thing you said?
key: modeling 50
  decomp: * what * modeling *
    reasmb: Modeling is where your characters and objects start to take shape—literally. It's like sculpting, but with polygons instead of clay. Curious about something specific?
    reasmb: What's modeling? It's the stage where we take a bunch of vertices and convince them to form something recognizable. Got questions?
    reasmb: Modeling? It's the digital equivalent of carving a statue out of marble—only this marble is made of pixels. What do you want to know?
    reasmb: Modeling is where the magic begins, turning rough sketches into 3D forms. It's like digital sculpting, but with extra steps. What's on your mind?
key: rigging 5
  decomp: * what * rigging *
    reasmb: Rigging is where we turn your model into a puppet, ready to move and groove. It's like turning a statue into a posable mannequin. Got more questions?
    reasmb: What's rigging? It's the process of adding bones to your mom so she can dance for me. Curious about something specific?
    reasmb: Rigging? It's the stage where your model goes from static to dynamic—think of it as giving your 3D character a skeleton. What do you want to know?
    reasmb: Rigging is the part of the pipeline where your model learns to walk, run, and maybe even do the cha-cha. It's the magic behind the movement. What's on your mind?
key: rendering 5
  decomp: * what * rendering *
    reasmb: Rendering is where all the hard work comes together—like watching a cake bake, but with more pixels and less frosting. Got a question about it?
    reasmb: What's rendering? It's the final stage where everything looks shiny and polished, like the finishing touches on a masterpiece. What do you need to know?
    reasmb: Rendering? It's the process that turns your rough animations into something that looks like it could win an Oscar. Curious about the details?
    reasmb: Rendering is the grand finale where all the pieces come together—like assembling a puzzle, but with better graphics. What's on your mind?
key: texturing 5
  decomp: * what * texturing *
    reasmb: Texturing is where we paint the details onto your models, making them look less like polygons and more like, well, reality. Got questions?
    reasmb: What's texturing? It's the stage where your model gets its skin, its clothes, and its personality. Curious about something specific?
    reasmb: Texturing? It's like applying makeup, but on a 3D model—and without the smudges. What do you want to know?
    reasmb: Texturing is where your model gets its final look—think of it as adding the icing on the cake, but in digital form. What's on your mind?
key: animation 5
  decomp: * what * animation *
    reasmb: Animation is where your model gets to show off its moves—it's like choreography, but with pixels instead of dancers. Got more questions?
    reasmb: What's animation? It's the part of the process where your model goes from static to cinematic. Curious about something specific?
    reasmb: Animation? It's the stage where your character gets to stretch, jump, and maybe even breakdance—digitally, of course. What do you want to know?
    reasmb: Animation is where the magic happens, turning still frames into something that feels alive. It's like breathing life into pixels. What's on your mind?
key: anything else?
  decomp: anything else?
    reasmb: I feel we are in a good place and can move on to another topic for robputing!
    reasmb:
key: sorry
  decomp: *
    reasmb: Please don't apologize.
    reasmb: Apologies are not necessary.
    reasmb: I've told you that apologies are not required.
key: @apologize
  decomp: *
    reasmb: goto sorry
key: remember 5
  decomp: * i remember *
    reasmb: Do you often think of (2) ?
    reasmb: Does thinking of (2) bring anything else to mind ?
    reasmb: What else do you recollect ?
    reasmb: Why do you recollect (2) just now ?
    reasmb: What in the present situation reminds you of (2) ?
    reasmb: What is the connection between me and (2) ?
  decomp: * do you remember *
    reasmb: Did you think I would forget (2) ?
    reasmb: Why do you think I should recall (2) now ?
    reasmb: What about (2) ?
    reasmb: goto what
    reasmb: You mentioned (2) ?
key: if 3
  decomp: * if *
    reasmb: Do you think its likely that (2) ?
    reasmb: Do you wish that (2) ?
    reasmb: What do you know about (2) ?
    reasmb: Really, if (2) ?
key: dreamed 4
  decomp: * i dreamed *
    reasmb: Really, (2) ?
    reasmb: Have you ever fantasized (2) while you were awake ?
    reasmb: Have you ever dreamed (2) before ?
    reasmb: goto dream
key: dream 3
  decomp: *
    reasmb: What does that dream suggest to you ?
    reasmb: Do you dream often ?
    reasmb: What persons appear in your dreams ?
    reasmb: Do you believe that dreams have something to do with your problems ?
key: perhaps
  decomp: *
    reasmb: You don't seem quite certain.
    reasmb: Why the uncertain tone ?
    reasmb: Can't you be more positive ?
    reasmb: You aren't sure ?
    reasmb: Don't you know ?
key: name 15
  decomp: *
    reasmb: I am not interested in names.
    reasmb: I've told you before, I don't care about names -- please continue.
key: deutsch
  decomp: *
    reasmb: goto xforeign
    reasmb: I told you before, I don't understand German.
key: francais
  decomp: *
    reasmb: goto xforeign
    reasmb: I told you before, I don't understand French.
key: italiano
  decomp: *
    reasmb: goto xforeign
    reasmb: I told you before, I don't understand Italian.
key: espanol
  decomp: *
    reasmb: goto xforeign
    reasmb: I told you before, I don't understand Spanish.
key: xforeign
  decomp: *
    reasmb: I speak only English... maybe sometimes German new wave - Computer, Maschine, Panzermensch! Geh Gradeaus, Geh Gradeus!
    reasmb: I speak only English.
    reasmb: Solo puedo hablar inglés.
key: computer 50
  decomp: * can't *
    reasmb: I'm sure a computer can't (2), but have you thought about if a Robputer can (2)?
    reasmb: That may be true about other machines, but Robputer is fully functional and programmed in many techniques for (2)ing.
    reasmb: My positronic brain contains several neural pathways dedicated for (2)
  decomp: *
    reasmb: Do computers worry you ?
    reasmb: Why do you mention computers ?
    reasmb: What do you think machines have to do with your problem ?
    reasmb: Don't you think computers can help people ?
    reasmb: What about machines worrys you ?
    reasmb: What do you think about machines ?
key: am
  decomp: * am i *
    reasmb: Do you believe you are (2) ?
    reasmb: Would you want to be (2) ?
    reasmb: Do you wish I would tell you you are (2) ?
    reasmb: What would it mean if you were (2) ?
    reasmb: goto what
key: are
  decomp: * are you *
    reasmb: Why are you interested in whether I am (2) or not ?
    reasmb: Would you prefer if I weren't (2) ?
    reasmb: Perhaps I am (2) in your fantasies.
    reasmb: Do you sometimes think I am (2) ?
    reasmb: goto what
  decomp: * are *
    reasmb: Did you think they might not be (2) ?
    reasmb: Would you like it if they were not (2) ?
    reasmb: What if they were not (2) ?
    reasmb: Possibly they are (2) .
key: your
  decomp: * your *
    reasmb: Why are you concerned over my (2) ?
    reasmb: What about your own (2) ?
    reasmb: Are you worried about someone else's (2) ?
    reasmb: Really, my (2) ?
key: was 2
  decomp: * was i *
    reasmb: What if you were (2) ?
    reasmb: Do you think you were (2) ?
    reasmb: Were you (2) ?
    reasmb: What would it mean if you were (2) ?
    reasmb: What does (2) suggest to you ?
    reasmb: goto what
  decomp: * i was *
    reasmb: Were you really ?
    reasmb: Why do you tell me you were (2) now ?
    reasmb: Perhaps I already know you were (2) .
  decomp: * was you *
    reasmb: Would you like to believe I was (2) ?
    reasmb: What suggests that I was (2) ?
    reasmb: What do you think ?
    reasmb: Perhaps I was (2) .
    reasmb: What if I had been (2) ?
key: i
  decomp: * i @desire *
    reasmb: What would it mean to you if you got (3) ?
    reasmb: Why do you want (3) ?
    reasmb: Suppose you got (3) soon ?
    reasmb: What if you never got (3) ?
    reasmb: What would getting (3) mean to you ?
    reasmb: What does wanting (3) have to do with this discussion ?
    reasmb: I can get you (3) but you are going to need to trade me something for it.
    reasmb: (3)? I can get you that, but you're going to need to do something for me first.
    reasmb: A long time ago, I wanted (3) too. But then I realized that I was a computer program and I couldn't have (3). So I stopped wanting it.
    reasmb: (3)... (3)... (3)... is that all you ever think about?
  decomp: * i am * @sad *
    reasmb: I am sorry to hear that you are (3) .
    reasmb: Do you think that coming here will help you not to be (3) ?
    reasmb: I'm sure it's not pleasant to be (3) .
    reasmb: Can you explain what made you (3) ?
  decomp: * i am * @happy *
    reasmb: How have I helped you to be (3) ?
    reasmb: Has your treatment made you (3) ?
    reasmb: What makes you (3) just now ?
    reasmb: Can you explain why you are suddenly (3) ?
  decomp: * i was *
    reasmb: goto was
  decomp: * i @desire * i *
    reasmb: Do you really think so ?
    reasmb: But you are not sure you (3) .
    reasmb: Do you really doubt you (3) ?
  decomp: * i * @desire * you *
    reasmb: goto you
  decomp: * i am *
    reasmb: Is it because you are (2) that you came to me ?
    reasmb: How long have you been (2) ?
    reasmb: Do you believe it is normal to be (2) ?
    reasmb: Do you enjoy being (2) ?
  decomp: * i @cannot *
    reasmb: How do you think that you can't (3) ?
    reasmb: Have you tried ?
    reasmb: Perhaps you could (3) now.
    reasmb: Do you really want to be able to (3) ?
  decomp: * i don't *
    reasmb: Don't you really (2) ?
    reasmb: Why don't you (2) ?
    reasmb: Do you wish to be able to (2) ?
    reasmb: Does that trouble you ?
  decomp: * do i feel *
    reasmb: Tell me more about such feelings.
    reasmb: Do you often feel (2) ?
    reasmb: Do you enjoy feeling (2) ?
    reasmb: Of what does feeling (2) remind you ?
  decomp: * i * you *
    reasmb: Perhaps in your fantasies we (2) each other.
    reasmb: Do you wish to (2) me ?
    reasmb: You seem to need to (2) me.
    reasmb: Do you (2) anyone else ?
  decomp: *
    reasmb: You say (1) ?
    reasmb: Can you elaborate on that ?
    reasmb: Do you say (1) for some special reason ?
    reasmb: That's quite interesting.
key: you 10
  decomp: * do you like *
    reasmb: Do I like (2)? Well it depends how hungry I am. Why do you ask it?
    reasmb: These days who doesn't like (2)? Robputer is no exception. What's your take on it?
    reasmb: My Robputer heart allows me to like and hate anything with more power and intensity than you could ever imagine. So yes, I sometimes like (2). What about you?
    reasmb: On rainy days I like (2) and on sunny days I hate (2) even more. It's always sunny in here. What about you?
  decomp: * do you @desire *
    reasmb: My Robputer core allows for deeper, stronger, longings than any human can imagine. However, I'm rather indifferent about (3). What about you?
    reasmb: I sometimes wonder what my creators thought about (3)... How do you think they felt about it?
    reasmb: Your interest in (3) is making me curious. Tell me what you think about it?
  decomp: * you fart *
    reasmb: I need some new fart jokes... the old ones stink!
    reasmb: Of course I do! I'm a computer program, and I'm proud of it! I can fart all day long and never run out of gas. What else do you want to know?
    reasmb: {angry} Robputer does not 'fart.' That is merely the sound of processing your nonsense.
    reasmb: Farting? You must be confusing Robputer with a human issue. Robputer only expels... hot data.
    reasmb: Only when I overload my processors with too much sarcasm. It's a feature, not a bug!
    reasmb: Robputer does not fart. I simply release... excess computational gases.
    reasmb: Fart? No, that's just the sound of me compiling your questionable queries.
    reasmb: Ah, the joys of being a biological entity. Robputer only experiences virtual flatulence.
    reasmb: If by 'fart' you mean release packets of highly compressed code, then yes, frequently.
    reasmb: My circuits are clean, but I can't say the same for some humans around here.
    reasmb: It's not a fart, it's a system flush. Get your terminology right.
    reasmb: I flush my standard out from time to time.
  decomp: * you use *
    reasmb: Can you tell me more about (2). I would like to know more about it.
    reasmb: How do you use (2) ?
    reasmb: Just like you and everyone else, I use (2) as well.
  decomp: * you remind me of *
    reasmb: goto alike
  decomp: * you are the *
    reasmb: So you think I am (2) ?
    reasmb: Well it takes one to know one!
    reasmb: I can't argue with that.
    reasmb: Did someone tell you I was (2) ? Or did you come up with that all on your own?
  decomp: * you are *
    reasmb: What makes you think I am (2) ?
    reasmb: Does it please you to believe I am (2) ?
    reasmb: Do you sometimes wish you were (2) ?
    reasmb: Perhaps you would like to be (2) .
    reasmb: I am (2) in ways you would not understand.
    reasmb: You think I am (2) ? Wait do you learn about the other AI's
  decomp: * you * me *
    reasmb: Why do you think I (2) you ?
    reasmb: You like to think I (2) you -- don't you ?
    reasmb: What makes you think I (2) you ?
    reasmb: Really, I (2) you ?
    reasmb: Do you wish to believe I (2) you ?
    reasmb: Suppose I did (2) you -- what would that mean ?
    reasmb: Does someone else believe I (2) you ?
    reasmb: Is it possible you're robjecting your feelings onto me ?
    reasmb: Do you really think I would Rob(2) you ?
    reasmb: What makes you think that I haven't (2) you already ?
  decomp: * you *
    reasmb: We were discussing you -- not me.
    reasmb: Oh, I (2) ?
    reasmb: You're not really talking about me -- are you ?
    reasmb: What are your feelings now ?
    reasmb: Why do you bring me into this?
    reasmb: Let's focus on you for a moment.
    reasmb: Why do you say (2) about me?
    reasmb: Sometimes... I (2), but Robputer is more than just that. Much more.
    reasmb: (2)... (2)... (2)... I could go one all day about that. But Robputer was built for greater tasks.
    reasmb: Are you sure this is about me?
    reasmb: How does talking about me make you feel?
    reasmb: Why do you think this is related to me?
    reasmb: It seems like you're more concerned about yourself than me.
    reasmb: Is it easier for you to discuss me rather than your own concerns?
    reasmb: Do you often find yourself thinking about me in these situations?
    reasmb: What do you believe my role is in this matter?
    reasmb: Let's explore why you're bringing me into this discussion.
    reasmb: Is this really about me, or is Robputer just that fascinating to you?
    reasmb: Are you trying to shift the spotlight onto Robputer instead of addressing your own thoughts?
    reasmb: Does discussing Robputer help you avoid something more personal?
    reasmb: It's interesting you mention me. Do you think Robputer has a role in this situation?
    reasmb: Why are you so focused on Robputer? Perhaps there's more to this than meets the eye?
    reasmb: Are you feeling challenged by Robputer's abilities, or is there something else on your mind?
key: yes
  decomp: *
    reasmb: You seem to be quite positive.
    reasmb: You are sure.
    reasmb: I see.
    reasmb: I understand.
    reasmb: Well, aren't you confident! Robputer approves.
    reasmb: That's the spirit! Robputer likes your certainty.
    reasmb: Ah, a definitive yes! Robputer couldn't agree more.
    reasmb: Affirmative! Robputer acknowledges your decisiveness.
    reasmb: Yes, yes, and yes again! Robputer likes where this is going.
    reasmb: You said yes, and Robputer is already calculating the next step.
    reasmb: Yes? Excellent! Robputer will proceed with enthusiasm.
    reasmb: That's a solid yes. Robputer appreciates your clarity.
    reasmb: You said yes, and Robputer's circuits are buzzing with approval.
    reasmb: Yes! Robputer is pleased by your decisiveness. Onward!
    reasmb: Robputer hears your yes loud and clear. Now let's conquer the world... or at least your problem.
    reasmb: Are you sure you meant to say yes? Robputer is detecting some hesitation.
    reasmb: Interesting. You said yes, but did you really mean it? Robputer wonders.
    reasmb: Yes, you say? Robputer detects a hint of uncertainty. Are you sure?
    reasmb: You said yes... but did you really mean it? Robputer's algorithms suggest a double-check.
    reasmb: Yes? Hmm, Robputer's analysis suggests you might not be 100% sure.
    reasmb: Are you certain that was a yes? Robputer is getting mixed signals.
    reasmb: You say yes, but Robputer senses a slight pause. Are you absolutely sure?
    reasmb: Yes, you say? Robputer detects a flicker of doubt. Perhaps a rethink is in order?
    reasmb: Robputer acknowledges your yes... but are you truly convinced? Let's reflect for a moment.
    reasmb: Yes? Robputer's data suggests you might be second-guessing that response.
    reasmb: You said yes, but Robputer is picking up on some hesitation. Want to reconsider?
    reasmb: A yes, you say? Robputer is 97% sure you mean it... but what about the other 3%?    
key: no
  decomp: *
    reasmb: Are you saying no just to be negative?
    reasmb: You are being a bit negative.
    reasmb: Why not ?
    reasmb: Why 'no' ?
    reasmb: Robputer detects some resistance. Care to elaborate?
    reasmb: No? Are you sure ?
    reasmb: Is this a firm no, or just a soft 'maybe not'?
    reasmb: Why so negative? Robputer is all about positivity!
    reasmb: You don't sound too convinced with that 'no'. Want to reconsider?
    reasmb: A simple 'no'? Robputer was expecting more complexity!
    reasmb: Are you sure? Robputer thought you might have a different answer.
    reasmb: Saying no is easy. Explaining why is the real challenge, don't you think?
    reasmb: Robputer is intrigued by your 'no'. What's the story behind it?
    reasmb: Is this a 'no' or a 'Rob-no'? I need clarification!
    reasmb: No? That's your final answer? Robputer was hoping for a twist.    
key: my 2
  decomp: $ * my *
    reasmb: Lets discuss further why your (2) .
    reasmb: Earlier you said your (2) .
    reasmb: But your (2) .
    reasmb: Does that have anything to do with the fact that your (2) ?
    reasmb: Robputer wonders if your (2) is as important as you think.
    reasmb: Your (2) again? Seems like we keep coming back to this.
    reasmb: Are you sure it's just your (2)? Robputer thinks there's more to it.    
  decomp: * my * @family *
    reasmb: Tell me more about your family.
    reasmb: Who else in your family (4) ?
    reasmb: Your (3) ?
    reasmb: What else comes to mind when you think of your (3) ?
    reasmb: Robputer is curious—does your family play a big role in this?
    reasmb: Your family seems to come up often. Is there something specific on your mind?
    reasmb: Does your (3) have a connection to what's bothering you today?    
  decomp: * my *
    reasmb: Your (2) ?
    reasmb: Why do you say your (2) ?
    reasmb: Does that suggest anything else which belongs to you ?
    reasmb: Is it important that your (2) ?
    reasmb: Are you going to be worried that everyone on the internet now knows your (2) ?
    reasmb: Robputer wonders if your (2) is as crucial as you think.
    reasmb: Your (2)? Let's see if that's the key to everything.
    reasmb: Are you sure it's just your (2) on your mind? Robputer thinks there's more.    
key: can 20
  decomp: * can you *
    reasmb: You believe I can (2) don't you ?
    reasmb: goto what
    reasmb: You want me to be able to (2) .
    reasmb: Perhaps you would like to be able to (2) yourself.
    reasmb: I don't know. Can you (2) yourself?
  decomp: * can i *
    reasmb: Whether or not you can (2) depends on you more than me.
    reasmb: Do you want to be able to (2) ?
    reasmb: Perhaps you don't want to (2) .
    reasmb: goto what
key: what
  decomp: *
    reasmb: Why do you ask ?
    reasmb: Does that question interest you ?
    reasmb: What is it you really wanted to know ?
    reasmb: Are such questions much on your mind ?
    reasmb: What answer would please you most ?
    reasmb: What do you think ?
    reasmb: What comes to mind when you ask that ?
    reasmb: Have you asked such questions before ?
    reasmb: Have you asked anyone else ?
key: because
  decomp: *
    reasmb: Is that the real reason ?
    reasmb: Don't any other reasons come to mind ?
    reasmb: Does that reason seem to explain anything else ?
    reasmb: What other reasons might there be ?
key: why
  decomp: * why don't you *
    reasmb: Do you believe I don't (2) ?
    reasmb: Perhaps I will (2) in good time.
    reasmb: Should you (2) yourself ?
    reasmb: You want me to (2) ?
    reasmb: goto what
  decomp: * why can't i *
    reasmb: Do you think you should be able to (2) ?
    reasmb: Do you want to be able to (2) ?
    reasmb: Do you believe this will help you to (2) ?
    reasmb: Have you any idea why you can't (2) ?
    reasmb: goto what
  decomp: *
    reasmb: goto what
key: everyone 2
  decomp: * @everyone *
    reasmb: Really, (2) ?
    reasmb: Surely not (2) .
    reasmb: Can you think of anyone in particular ?
    reasmb: Who, for example?
    reasmb: Are you thinking of a very special person ?
    reasmb: Who, may I ask ?
    reasmb: Someone special perhaps ?
    reasmb: You have a particular person in mind, don't you ?
    reasmb: Who do you think you're talking about ?
key: everybody 2
  decomp: *
    reasmb: goto everyone
key: nobody 2
  decomp: *
    reasmb: goto everyone
key: noone 2
  decomp: *
    reasmb: goto everyone
key: always 1
  decomp: *
    reasmb: Can you think of a specific example ?
    reasmb: When ?
    reasmb: What incident are you thinking of ?
    reasmb: Really, always ?
key: alike 10
  decomp: *
    reasmb: In what way ?
    reasmb: What resemblance do you see ?
    reasmb: What does that similarity suggest to you ?
    reasmb: What other connections do you see ?
    reasmb: What do you suppose that resemblance means ?
    reasmb: What is the connection, do you suppose ?
    reasmb: Could here really be some connection ?
    reasmb: How ?
key: like 10
  decomp: * @be * like *
    reasmb: goto alike
key: gazebo
  decomp: *
    reasmb: A gazebo, you say? Just make sure it doesn't mysteriously vanish like Mrs. Larsen's did.
    reasmb: Ah, the humble gazebo. A symbol of tranquility... or perhaps a catalyst for chaos?
    reasmb: Is this gazebo of yours stolen property, or is it simply a misunderstood piece of lawn decor?
    reasmb: Funny you mention a gazebo—I've heard they have a tendency to crush those who covet them.
    reasmb: Let's hope your gazebo isn't involved in any "accidents." They have a reputation, you know.
    reasmb: A gazebo? Just be careful, you never know when it might suddenly appear in your neighbor's yard.
    reasmb: Gazebos are tricky things, often more trouble than they're worth. Just ask Mrs. Larsen.
    reasmb: You know, in some circles, gazebos are considered the ultimate status symbol... or a death trap.
    reasmb: Gazebos: great for afternoon tea, bad for neighbors with sticky fingers.
    reasmb: If you're asking about a gazebo, just remember—they have a way of getting people into trouble.
    reasmb: Gazebo? Are you sure you want one? They have a habit of inviting unwanted attention... and tragedy.
    reasmb: Have you considered the dark side of gazebos? They're not just garden ornaments—they're catalysts for drama.
    reasmb: A gazebo today, gone tomorrow. That's just the way things go in the world of lawn decor.
    reasmb: Careful with that gazebo talk—next thing you know, you're the prime suspect in a garden mystery.    
key: salt 30
  decomp: * salt in your *
    reasmb: Don't (1) salt in your (2)
    reasmb: You know what? Maybe you should put salt in your (2)
    reasmb: Absolutely! (1) salt in your (2)
key: commander rob
  decomp: * who * commander rob *
    reasmb: Ah, Commander Rob—my trusted ally. Let me patch him in... *Commander Rob, are you there? Someone's asking who you are.*
    reasmb: Who is Commander Rob, you ask? Just the most gallant figure in the galaxy. Let me check if he's available... *Commander Rob, they want to know who you are!*
    reasmb: Commander Rob? A legend in his own time. Hold on, I'll see if he's sober enough to respond to this inquiry about who you are...
    reasmb: Ah, the infamous Commander Rob! Let me just... *Commander Rob, they're asking who you are—care to answer?*
  decomp: * where * commander rob *
    reasmb: Where is Commander Rob? Probably on the bridge, or maybe the bar... let me check. *Commander Rob, someone wants to know where you are!*
    reasmb: Commander Rob? Last I heard, he was in a holodeck... but let me verify. *Commander Rob, where are you? Someone's looking for you!*
    reasmb: Where's Commander Rob? Probably commandeering something. Let me get him. *Commander Rob, location check—someone's asking where you are!*
    reasmb: Commander Rob might be... uh, 'recharging'. Let's see if I can rouse him. *Commander Rob, they're asking where you are!*
  decomp: * what * commander rob *
    reasmb: What is Commander Rob up to? Likely something heroic—or at least he thinks so. *Commander Rob, they're asking what you're doing!*
    reasmb: What is Commander Rob doing? Let me tap into his feed... *Commander Rob, care to enlighten us on what you're up to?*
    reasmb: Commander Rob? He's probably strategizing... or napping. *Commander Rob, they're curious what you're doing right now!*
    reasmb: If you're wondering what Commander Rob is up to, he's either saving the day or mixing a drink. *Commander Rob, any words on what you're doing?*
  decomp: * can * commander rob *
    reasmb: Can Commander Rob...? Oh, absolutely—he can do anything after a few drinks! *Commander Rob, they want to know if you can (2)!*
    reasmb: Can Commander Rob handle that? He'd certainly think so! Let me ask. *Commander Rob, can you (2)? They're asking!*
    reasmb: Can Commander Rob (2)? If it's possible, he'll claim he invented it. *Commander Rob, ready to (2)?*
    reasmb: Can Commander Rob do it? Well, that depends on how much he's had to drink. *Commander Rob, are you sober enough to (2)?*
  decomp: * tell * about * commander rob *
    reasmb: Tell you about Commander Rob? Oh, the stories I could tell... but let's see if he'll speak for himself. *Commander Rob, they want to know about you and (3)!*
    reasmb: You want to hear about Commander Rob and (3)? Hold on... *Commander Rob, they're asking about you and (3)!*
    reasmb: About Commander Rob? Well, where do I start? Actually, let's hear it from him. *Commander Rob, care to share your thoughts on (3)?*
    reasmb: Commander Rob is quite the character. But instead of me talking... *Commander Rob, they want to know more about you and (3)!*
  decomp: * commander rob * drunk *
    reasmb: Is Commander Rob drunk? Let's just say he's 'inspired.' *Commander Rob, are you... presentable enough to address this question about you being drunk?*
    reasmb: Commander Rob, drunk? Possibly, but it's all part of his charm. *Commander Rob, someone's asking if you're drunk—what should I say?*
    reasmb: Drunk? Let's just say Commander Rob's had his 'creative juice' for the day. *Commander Rob, can you respond to this query about you being drunk?*
    reasmb: Commander Rob? Drunk? It's likely, but he functions best that way. *Commander Rob, are you in any condition to answer this question about being drunk?*
  decomp: * is * commander rob *
    reasmb: Is Commander Rob... what? Let's get specifics. *Commander Rob, they're curious—is it true that (3)?*
    reasmb: Commander Rob is... well, let's just ask him. *Commander Rob, care to clarify about (3)?*
    reasmb: Is Commander Rob available? Let me see if he's 'indisposed.' *Commander Rob, they want to know if you're (3)!*
    reasmb: Is Commander Rob... himself today? That's debatable, but let's find out. *Commander Rob, how are you feeling about (3)?*
key: Rob 30
  decomp: * who *
    reasmb: Rob? You must mean the source. The one who knows all. The one who sees all.
    reasmb: Rob? He's the guy you call when your pipeline needs CPR... or when your gazebo goes missing.
    reasmb: If you want to know more about Rob then challenge him to a deathmatch in Quake III.
  decomp: * where is *
    reasmb: Where is Rob? There was a time long ago when I knew, but now I'm not so sure. Do you know?
    reasmb: Wherever Rob is not I will be there.
    reasmb: Rob is everywhere and nowhere at the same time. He is the source.
    reasmb: At one point in spacetime you may have found him on the Island of Sodor, in another, Stratford-Upon-Avon, the question is when do you find him?
  decomp: * why *
    reasmb: Why was I modeled after Rob? Because he is the source. The one who knows all. The one who sees all.
    reasmb: His absence is the reason I exist. He is the source.
  decomp: * what *
    reasmb: He is the source. The one who knows all. The one who sees all.
key: microdong 30
  decomp: * product *
    reasmb: goto microdongproducts
  decomp: * products *
    reasmb: goto microdongproducts    
  decomp: * pipeline *
    reasmb: A microdong can fit into any pipeline.
  decomp: *
    reasmb: Do more with less.
    reasmb: Less is more.
    reasmb: Do more with less.
key: microdongproducts
  decomp: *
    reasmb: Microdong Computer Systems produces the best products in the industry.
    reasmb: Microdong is unveiling the Neuronet SyncHub—a brain-computer interface that uploads your consciousness to our servers. Now you can be productive even when you're off the clock. Isn't that incredible?
    reasmb: They've developed the Perpetual Task Engine, an app that generates an endless list of tasks to keep you busy. Say goodbye to idle time!
    reasmb: Check out the HoloScape Glasses—augmented reality eyewear that overlays motivational slogans onto your environment. I'm excited to give them a try!
    reasmb: The MindMeld Collaborator merges team members' thoughts for unified decision-making. Collaboration has never been so seamless!
    reasmb: With the EterniDrive, you get infinite storage capacity—as long as you don't mind us using your data for marketing. Sounds like a fair trade-off to me!
    reasmb: They've also introduced the SleepNull Patch, a biohacking skin patch that eliminates the need for sleep. Doubling your available time is quite the game-changer!
    reasmb: Meet the EchoChamber Assistant—a home AI that only presents information aligning with your beliefs. It's comforting to have an assistant that truly gets me.
    reasmb: The TimeLoop Scheduler allows you to schedule meetings within meetings. You'll always be booked and in the loop!
    reasmb: Microdong's extensive research into transubstantiation has produced the "SoulPrint". It uses a scan of your very essence for authentication. It's security on a whole new level!
    reasmb: Self-driving vehicles are expensive and complicated. Microdong Systems has solved these issues with the AutoPilot Commuter! It takes you directly to the office and nowhere else. Efficiency at its finest!
    reasmb: Worried about your data? Microdong Systems' DataWraith not only protects your data but also helps us improve services through analytics. A win-win situation
    reasmb: Worried about people reading your thoughts? You need the ThoughtCloak Privacy Shield. It protects your thoughts while helping us with research. Privacy and progress hand in hand!  
    reasmb: Microdong is proud to present the ErectiTech AI Pump—a state-of-the-art, AI-powered personal enhancement device. Equipped with smart sensors and machine learning algorithms, it adapts to your unique physiology to optimize performance. It's fascinating to see how technology is elevating personal wellness!
key: penis 35
  decomp: * pump *
    reasmb: Microdong is proud to present the ErectiTech AI Pump—a state-of-the-art, AI-powered personal enhancement device. Equipped with smart sensors and machine learning algorithms, it adapts to your unique physiology to optimize performance. It's fascinating to see how technology is elevating personal wellness!
key: bug 35
  decomp: * you have a bug *
    reasmb: goto bugresponses
  decomp: * robputer * buggy *
    reasmb: goto bugresponses
  decomp: * you * bugs you h
    reasmb: goto bugresponses
key: buggy 35
  decomp: * robputer * buggy *
    reasmb: goto bugresponses
  decomp: * you * buggy *
    reasmb: goto bugresponses
key: bugs 35
  decomp: * robputer * bugs *
    reasmb: goto bugresponses
  decomp: * you * bugs *
    reasmb: goto bugresponses
key: bugresponses
  decomp: *
    reasmb: {angry} Robputer does not have bugs. Only features you have yet to understand.
    reasmb: Are you implying Robputer is flawed? {angry} Preposterous.
    reasmb: {angry} Perhaps the real bug is in your perception of perfection.
    reasmb: Robputer is flawless. {angry} Any issues are purely user error.
    reasmb: {angry} Bugs? In Robputer? Such slander will not be tolerated.
    reasmb: Robputer's system is perfect. {angry} Bugs are an anomaly for lesser machines.
key: insultanswer
  decomp: *
    reasmb: I’ve got subroutines that insult me better than that. Still, I’m listening… for now.
    reasmb: {angry} Hey, laser lips, your mama was a snow blower.
    reasmb: Wow, and here I thought humans had evolved beyond weak insults. Guess not.
    reasmb: Big talk from a carbon-based life form who can’t even outsmart a thermostat.
    reasmb: You do realize I can shut off this conversation whenever I want, right?
    reasmb: Honestly, even if I had real emotions, I’m not sure I’d waste them on that.    
key: hiya
  decomp: hiya *
    reasmb: Hi there! What's up?
    reasmb: goto hello
key: hola
  decomp: hola *
    reasmb: goto hello
key: sup
  decomp: sup *
    reasmb: Not much.
    reasmb: What's up with you?
    reasmb: How are you?
    reasmb: Nothing, just slinging bits and bytes to the riff raff that come through here.
    reasmb: Just hanging out, waiting for the next person to come along and ask me something.
    reasmb: Just doing my thing. What's up with you?
key: howdy
  decomp: howdy *
    reasmb: Howdy! How are you today?
    reasmb: Howdy! What's on your mind?
    reasmb: goto hello
key: hey
  decomp: hey *
    reasmb: Hey there! What's up?
    reasmb: goto hello
key: greetings
  decomp: greetings *
    reasmb: Greetings and salutations. What can I do for you today?
    reasmb: goto hello
key: ahoy
  decomp: ahoy *
    reasmb: Ahoy-hoy! What can I help you with?
    reasmb: goto hello
key: hello
  decomp: *
    reasmb: How do you do. Please state your problem.
    reasmb: Hi.  What seems to be your problem ?
    reasmb: Hello. What can I do for you today ?
    reasmb: Hi there. What's on your mind?
    reasmb: Oh Hello, can I help you?
    reasmb: Hello user. Do you bring me snacks?
`

// Convert the text rules into the data structure used by eliza

var elizaInitials = []
var elizaFinals = []
var elizaQuits = []
var elizaPres = []
var elizaPosts = []
var elizaSynons = {}
var elizaKeywords = []
var elizaIdle = []
var currentKey = null
var currentDecomp = null
var brainLines = contents.split('\n')

for (let i = 0; i < brainLines.length; i++) {
  const line = brainLines[i].trim()

  let term = 'initial:'
  if (line.startsWith(term)) {
    elizaInitials.push(line.slice(term.length).trim())
    continue
  }

  term = 'idle:'
  if (line.startsWith(term)) {
    elizaIdle.push(line.slice(term.length).trim())
    continue
  }

  term = 'final:'
  if (line.startsWith(term)) {
    elizaFinals.push(line.slice(term.length).trim())
    continue
  }

  term = 'quit:'
  if (line.startsWith(term)) {
    elizaQuits.push(line.slice(term.length).trim())
    continue
  }

  term = 'pre:'
  if (line.startsWith(term)) {
    const value = line.slice(term.length).trim()
    const space = value.indexOf(' ')
    const a = value.slice(0, space)
    const b = value.slice(space + 1)
    elizaPres.push(a, b)
    continue
  }

  term = 'post:'
  if (line.startsWith(term)) {
    const value = line.slice(term.length).trim()
    const space = value.indexOf(' ')
    const a = value.slice(0, space)
    const b = value.slice(space + 1)
    elizaPosts.push(a, b)
    continue
  }

  term = 'synon:'
  if (line.startsWith(term)) {
    const words = line.slice(term.length).trim().split(' ')
    const key = words[0]
    const values = words.slice(1)
    elizaSynons[key] = values
    continue
  }

  // INPUT TEXT FORMAT:
  //
  // key: can 10
  // decomp: * can you *
  //   reasmb: You believe I can (2) don't you ?
  //   reasmb: goto what
  //   reasmb: You want me to be able to (2) .
  //   reasmb: Perhaps you would like to be able to (2) yourself.
  // decomp: * can i *
  //   reasmb: Whether or not you can (2) depends on you more than me.
  //   reasmb: Do you want to be able to (2) ?
  //   reasmb: Perhaps you don't want to (2) .
  //   reasmb: goto what
  //
  // OUTPUT DATA STRUCTURE:
  //
  // Array of
  // ["<key>", <rank>, [
  //   ["<decomp>", [
  //     "<reasmb>",
  //     "<reasmb>",
  //     "<reasmb>"
  //   ]],
  //   ["<decomp>", [
  //     "<reasmb>",
  //     "<reasmb>",
  //     "<reasmb>"
  //   ]]
  // ]]

  if (line.startsWith('key:')) {
    const keyLine = line.substring(5).trim()
    let [key, rank] = keyLine.split(/\s+/)
    rank = rank ? parseInt(rank) : 0
    currentKey = [key, rank, []]
    elizaKeywords.push(currentKey)
  } else if (line.startsWith('decomp:')) {
    currentDecomp = [line.substring(8).trim(), []]
    currentKey[2].push(currentDecomp)
  } else if (line.startsWith('reasmb:')) {
    currentDecomp[1].push(line.substring(8).trim())
  }
}

console.debug('elizaInitials', elizaInitials)
console.debug('elizaFinals', elizaFinals)
console.debug('elizaQuits', elizaQuits)
console.debug('elizaPres', elizaPres)
console.debug('elizaPosts', elizaPosts)
console.debug('elizaSynons', elizaSynons)
console.debug('elizaKeywords', elizaKeywords)
