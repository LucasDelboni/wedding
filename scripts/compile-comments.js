'use strict'

const { promises: fs } = require('fs')

const main = async () => {
    const fileNames = await fs.readdir('_data/comments/')
    const allComments = await Promise.all(
        fileNames.map(async(fileName) => {
            const content = await fs.readFile(`_data/comments/${fileName}`, 'utf8')
            return JSON.parse(content)
        })
    )
    const sortedComments = allComments
        .sort((a, b) => a.date - b.date)

    const data = JSON.stringify(sortedComments);
    await fs.writeFile('public/comments.json', data);
    return data
}

main()