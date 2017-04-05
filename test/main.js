const chai = require('chai')
const assert = chai.assert
const fs = require('fs')
const path = require('path')

describe('cli-commands', () => {
  let instructions = ''
  it('has a file called my-instructions', () => {
    const filePath = path.join('src','my-instructions')
    instructions = fs.readFileSync(filePath, 'utf-8')
      .trim().split('\n').map(cmd => cmd.replace(/[0-9]+/,'').trim())

    assert.isOk(instructions)
  })
  it('creates a new file called cli_notes.md', () => {
    const cmd = instructions[0]
    const re = /touch.*cli_notes.md/g

    assert.isOk(cmd.match(re))
  })
  it('creates a new folder called notes', () => {
    const cmd = instructions[2]
    const re = /mkdir notes/g

    assert.isOk(cmd.match(re))
  })
  it('moves cli_notes.md into the notes folder', () => {
    const cmd = instructions[3]
    const re = /mv.*cli_notes.md.*notes/g

    assert.isOk(cmd.match(re))
  })
  it('moves into the notes folder', () => {
    const cmd = instructions[4]
    const re = /cd.*notes/g

    assert.isOk(cmd.match(re))
  })
  it('copy cli_notes.md to cli_notes_2.md', () => {
    const cmd = instructions[5]
    const re = /cp.*cli_notes\.md.*cli_notes_2\.md/g

    assert.isOk(cmd.match(re))
  })
  it('rename cli_notes_2.md to cli_commands.md', () => {
    const cmd = instructions[6]
    const re = /mv.*cli_notes_2\.md.*cli_commands\.md/g

    assert.isOk(cmd.match(re))
  })
  it('lists the contents of the current directory', () => {
    const cmd = instructions[7]
    const re = /ls/g

    assert.isOk(cmd.match(re))
  })
  it('deletes the cli_notes.md file', () => {
    const cmd = instructions[8]
    const re = /rm.*cli_notes\.md/g

    assert.isOk(cmd.match(re))
  })
  it('shows the contents of cli_commands.md', () => {
    const cmd = instructions[9]
    const re = /cat.*cli_commands\.md/g

    assert.isOk(cmd.match(re))
  })
  it('navigates up a directory', () => {
    const cmd = instructions[10]
    const re = /cd.*\.\./g

    assert.isOk(cmd.match(re))
  })
  it('deletes the notes directory', () => {
    const cmd = instructions[11]
    const re = /rm -r.*notes/g

    assert.isOk(cmd.match(re))
  })
})
