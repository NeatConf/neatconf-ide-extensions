# NeatConf for Visual Studio Code

This extension provides language support for the NeatConf configuration language in Visual Studio Code.

## Features

- Syntax highlighting for NeatConf files (.ncf extension)
- Autocompletion for common NeatConf keywords and structures
- Snippets for common NeatConf patterns
- Language configuration for proper indentation and bracket matching

## Installation

1. Open Visual Studio Code
2. Press `Ctrl+P` (or `Cmd+P` on macOS) to open the Quick Open dialog
3. Type `ext install neatconf-vscode` and press Enter

## Usage

Once installed, the extension will automatically activate for files with the `.ncf` extension. You'll see syntax highlighting and receive autocompletion suggestions as you type.

## Debugging in Cursor

To debug the extension with hot reloading in Cursor:

1. Open the project in Cursor.
2. Open a terminal and run:
   ```
   npm run dev
   ```
   This will start nodemon, which watches for changes in your source files and recompiles them automatically.
3. Open a new Cursor window and use the "Developer: Install Extension from Location..." command to install your extension from its folder.
4. Make changes to the extension code in the `src` directory and save.
5. The extension will automatically recompile. To see the changes, you'll need to reload the window where the extension is installed. You can do this by running the "Developer: Reload Window" command.

Note: You may need to uninstall and reinstall the extension using the "Developer: Install Extension from Location..." command if you make changes to the `package.json` file.

## Contributing

If you'd like to contribute to this extension, please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This extension is released under the MIT License.
