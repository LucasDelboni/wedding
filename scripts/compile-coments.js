'use strict'

// const core = require('@actions/core')
const { promises: fs } = require('fs')

const main = async () => {
  
    const fileNames = await fs.readdir('_data/comments/')
    const sortedComments = await fileNames
        .map(async(fileName) => {
            const content = await fs.readFile(`_data/comments/${fileName}`, 'utf8')
            return JSON.parse(content)
        })
        .sort((a, b) => a.date - b.date)

    const data = JSON.stringify(sortedComments);
    await fs.writeFile('public/comments2.json', data);
}

main().then(() => {
    console.log('fim')
})