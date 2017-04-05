## Instructions

For each step below, you should only have to write a single command on the command line. Start the commands below inside of this folder; that is, if you type `pwd` inside this folder you should see the following at the end of output:

```bash
[...]/cli-assessment/src
```

## Important Notes

The tests that get run at the end of the sequence of commands requires:

* That your `history` lists your historical commands in chronological order; that is, your latest command is on the bottom.

* That you to only type in one command per line in the exact order they're presented.

The best way to accomplish the first point is to use `bash` or `zsh`. Alternatively, once you have a `my-instructions` file, feel free to edit the file directly to get the tests to pass.

### Steps

0. Create a blank file named `cli_notes.md`.

0. Open it using any text editor such as Atom or Sublime, from the command line, and write `# CLI Commands` on the first line. Save and close your text editor.

0. Create a folder named `notes`.

0. Move the `cli_notes.md` file into the `notes` folder.

0. Navigate into the `notes` folder.

0. Copy the file to another file called `cli_notes_2.md`.

0. Rename `cli_notes_2.md` to `cli_commands.md`.

0. List the contents of the current directory.

0. Delete the `cli_notes.md` file.

0. Show the contents of `cli_commands.md` in the terminal.

0. Navigate up a directory.

0. Delete the `notes` folder.

0. Run the following command: `history | tail -n 12 > my-instructions`

0. Navigate up a directory.

0. Run the tests with the following command: `npm test > ./src/test-output`
