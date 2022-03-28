const rewards = {
    exp: 700000,
    money: 4999988,
    potion: 10,
    mythic: 3,
    legendary: 1
}

const cooldown = 0
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) throw `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    m.reply(text)
    user.lastmonthly = new Date * 1
}
handler.command = /^(mng)$/i

handler.cooldown = cooldown
handler.owner = true

export default handler

