#!/usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer"
import gradient from "gradient-string"
import chalkAnimation from "chalk-animation"
import figlet from "figlet"
import { createSpinner } from "nanospinner"

const sleep = (ms = 4000) => new Promise((r) => setTimeout(r, ms))

async function welcome() {
    const glitchTitle = chalkAnimation.glitch('Hello human, we came in peace! \n')
    await sleep()
    glitchTitle.stop()

    console.log(`
    Here in space we watched you, we know all about you. 👽
    Do not ${chalk.bgRed('FEAR')} us. We are here to show you the ${chalk.bgGreen('TRUTH!')}
    
    Come with us...
    `)
    
    await yesOrNo()
    abducted()
}

await welcome()

async function yesOrNo(){
    const answer = await inquirer.prompt({
        name: 'yesorno',
        type: 'list',
        message: 'You have time to make this decision, chose wisely. \n',
        choices: [
            "I am a brave MF, i'm coming with you green man!",
            'Hell na!'
        ]
    })

    return handleAnswer(answer.yesorno == "I am a brave MF, i'm coming with you green man!")
}

async function handleAnswer(isYes) {
    const spinner = createSpinner(`You've just made your destiny!`).start()
    await sleep()

    if(isYes){
        spinner.success({
            text: `${chalk.bgYellow('Nice JOB fellow Human!')}`
        })
    } else {
        spinner.error({
            text: `${chalk.bgRedBright('💀💀💀💀DOOOOOM!☠️☠️☠️☠️')}`
        })
        process.exit(1)
    }
}

function abducted() {
    console.clear()
    const msg = `SPACE HUMAN VIBES`

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
    console.log(`Follow me on GitHub: https://github.com/mathmmo \n See how i did it!`)
}