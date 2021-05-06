export const actionListT20 =
    [
        {
			id: 0, 
            title: "Attack_Different!",
            order: 0,
			containerId: 0,
            icon: "icon-crossed-swords",
            subtitle: "Melee or ranged attack",
            description: "Perform a melee or ranged attack with your weapon",
            reference: "PHB, pgs. 192,194-195.",
            bullets: [
                "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
                "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Offhand attack</i> bonus action).",
                "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
                "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
                "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
            ]
        },
        {
			id: 1, 
            title: "Grapple",
            order: 1,
			containerId: 0,
            icon: "icon-grab",
            subtitle: "Special melee attack",
            description: "Attempt to grab a creature or wrestle with it",
            reference: "PHB, pg. 195.",
            bullets: [
                "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
                "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
                "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
                "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
            ]
        },
        {
			id: 2, 
            title: "Shove",
            order: 2,
			containerId: 0,
            icon: "icon-hand",
            subtitle: "Special melee attack",
            description: "Shove a creature, either to knock it prone or push it away from you",
            reference: "PHB, pg. 195.",
            bullets: [
                "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
                "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
                "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
                "If you win the contest, you either knock the target prone or push it 5 feet away from you."
            ]
        },
        {
			id: 3, 
            title: "Cast a spell",
            order: 3,
			containerId: 0,
            icon: "icon-magic-swirl",
            subtitle: "Cast time of 1 action",
            description: "Cast a spell with a casting time of 1 action",
            reference: "PHB, pg. 192.",
            bullets: [
                "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
                "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
                "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
                "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
            ]
        },
        {
			id: 4, 
            title: "Dash",
            order: 4,
			containerId: 0,
            icon: "icon-sprint",
            subtitle: "Double movement speed",
            description: "Gain extra movement for the current turn",
            reference: "PHB, pg. 192.",
            bullets: [
                "The increase equals your speed, after applying any modifiers."
            ]
        },
        {
			id: 5, 
            title: "Disengage",
            order: 5,
			containerId: 0,
            icon: "icon-journey",
            subtitle: "Prevent opportunity attacks",
            description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
            reference: "PHB, pg. 192.",
            bullets: [
            ]
        },
        {
			id: 6, 
            title: "Dodge",
            order: 6,
			containerId: 0,
            icon: "icon-aura",
            subtitle: "Increase defenses",
            description: "Focus entirely on avoiding attacks",
            reference: "PHB, pg. 192.",
            bullets: [
                "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
                "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
            ]
        },
        {
			id: 7, 
            title: "Escape",
            order: 7,
			containerId: 0,
            icon: "icon-manacles",
            subtitle: "Escape a grapple",
            description: "Escape a grapple",
            reference: "PHB, pg. 195.",
            bullets: [
                "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
                "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
            ]
        },
        {
			id: 8, 
            title: "Help",
            order: 8,
			containerId: 0,
            icon: "icon-telepathy",
            subtitle: "Grant an ally advantage",
            description: "Grant an ally advantage on an ability check or attack",
            reference: "PHB, pg. 192.",
            bullets: [
                "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
                "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
                "The advantage lasts until the start of your next turn."
            ]
        },
        {
			id: 9, 
            title: "Use Object",
            order: 9,
			containerId: 0,
            icon: "icon-snatch",
            subtitle: "Interact, use special abilities",
            description: "Interact with a second object or use special object abilities",
            reference: "PHB, pg. 193.",
            bullets: [
                "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
                "When an object requires your action for its use, you also take this action."
            ]
        },
        {
			id: 10, 
            title: "Use shield",
            order: 10,
			containerId: 0,
            icon: "icon-round-shield",
            subtitle: "Equip or unequip a shield",
            description: "Equip or unequip a shield",
            reference: "PHB, pgs. 144-146.",
            bullets: [
                "A shield always takes an action to equip or unequip.",
                "Armor takes several minutes to equip or unequip."
            ]
        },
        {
			id: 11, 
            title: "Hide",
            order: 11,
			containerId: 0,
            icon: "icon-hood",
            subtitle: "Attempt to hide",
            description: "Attempt to hide",
            reference: "PHB, pg. 192.",
            bullets: [
                "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
                "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
                "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
                "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
                "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
            ]
        },
        {
			id: 12, 
            title: "Search",
            order: 12,
			containerId: 0,
            icon: "icon-magnifying-glass",
            subtitle: "Search for something",
            description: "Devote your attention to finding something",
            reference: "PHB, pg. 193.",
            bullets: [
                "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
            ]
        },
        {
			id: 13, 
            title: "Ready",
            order: 13,
			containerId: 1,
            icon: "icon-stopwatch",
            subtitle: "Choose trigger and action",
            description: "Choose a trigger and a response reaction",
            reference: "PHB, pg. 193.",
            bullets: [
                "First, you decide what perceivable circumstance will trigger your reaction.",
                "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
                "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
                "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
            ]
        },
        {
			id: 14, 
            title: "Use class feature",
            order: 14,
			containerId: 1,
            icon: "icon-embrassed-energy",
            subtitle: "Some features use actions",
            description: "Use a racial or class feature that uses an action",
            reference: "See class page for more information.",
            bullets: [

            ]
        },
        {
			id: 15, 
            title: "Stabilize a creature",
            order: 15,
			containerId: 2,
            icon: "icon-first-aid",
            subtitle: "Administer first aid to a dying creature",
            description: "Stop a dying creature from needing to make death saving throws",
            reference: "PHB, pg. 197.",
            bullets: [
                "Make a Wisdom (Medicine) check with DC 10",
                "On a success, the creature is stable and no longer needs to make death saving throws",
                "A stable creature regains 1 hit point after 1d4 hours"
            ]
        },
        {
			id: 16, 
            title: "Improvise",
            order: 16,
			containerId: 2,
            icon: "icon-juggler",
            subtitle: "Any action not on this list",
            description: "Perform any action you can imagine",
            reference: "PHB, pg. 193.",
            bullets: [
                "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
            ]
        }
    ];
