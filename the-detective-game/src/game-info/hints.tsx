type Hint = {
  message: string
  isLie: boolean
}

export const hintsCases: Hint[][] = [
  // Case 1
  [
    { message: "I heard footsteps heading toward the display before the lights went out.", isLie: false },
    { message: "I was near the entrance when the blackout happened.", isLie: false },
    { message: "Someone bumped into me during the blackout.", isLie: false },
    { message: "I heard a glass shatter, but I couldn't see who did it.", isLie: false },
    { message: "I stayed frozen the whole time. It was pitch black.", isLie: false },
    { message: "I think the thief planned it. The blackout felt too perfect.", isLie: false },
    { message: "I heard whispers — someone was coordinating.", isLie: false },
    { message: "I was holding my breath, afraid to move.", isLie: false },
    { message: "There was a cold draft, like someone opened a door quickly.", isLie: false },
    { message: "I smelled a strange perfume — not one I recognize.", isLie: false },
    { message: "I heard the display alarm beep right before the blackout.", isLie: false },
    { message: "I saw someone holding the diamond before the blackout.", isLie: true }
  ],

  // Case 2
  [
    { message: "I was near the pond sketching flowers when it happened.", isLie: false },
    { message: "I heard a crack but didn't see who was nearby.", isLie: false },
    { message: "The teacher told us not to touch the equipment, so I stayed clear.", isLie: false },
    { message: "I was helping set up the picnic area far from the drone table.", isLie: false },
    { message: "Everyone jumped when they heard the breaking sound.", isLie: false },
    { message: "I didn't even get close to the drone station the entire morning.", isLie: false },
    { message: "I was under the tree reading when it happened.", isLie: false },
    { message: "It sounded like plastic snapping hard.", isLie: false },
    { message: "I was trying to take photos of butterflies on the other side.", isLie: false },
    { message: "There were only two or three students near the table when it broke.", isLie: false },
    { message: "I turned quickly and saw someone running away holding the controller.", isLie: true },
    { message: "I was helping the teacher collect trash bags away from the station.", isLie: false }
  ],

  // Case 3
  [
    { message: "I was refilling my coffee in the break room, didn't even enter the main hall.", isLie: false },
    { message: "I saw someone from IT near the booth earlier, maybe checking something.", isLie: false },
    { message: "I was running slides in Hall B, we had a glitch on our projector.", isLie: false },
    { message: "Everyone was panicking over the Wi-Fi, so I was with the tech crew.", isLie: false },
    { message: "I overheard someone say the USB slot was loose — maybe it's hardware?", isLie: false },
    { message: "I didn't even bring my badge this morning, so I stayed out of all secure areas.", isLie: false },
    { message: "I was on a call with our partners in Dubai when it happened.", isLie: false },
    { message: "I went to the bathroom right before the presentation time.", isLie: false },
    { message: "Honestly, the whole booth seemed untouched when I walked by.", isLie: false },
    { message: "I saw the intern fiddling with the USB before the crash — looked suspicious.", isLie: true },
    { message: "I was helping prep the marketing banners near the registration desk.", isLie: false },
    { message: "I never got close to the laptop, I was finalizing the social posts on my phone.", isLie: false }
  ]
]
