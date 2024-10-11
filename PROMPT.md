Create a Visual Studio Code extension for the NeatConf configuration language. The extension should provide syntax highlighting, autocompletion, and linting for NeatConf files. Here are the key requirements:

1. Syntax Highlighting:
   - Implement syntax highlighting for NeatConf files (.ncf extension)
   - Highlight key-value pairs, nested structures, lists, comments, and special keywords
   - Use distinct colors for different elements (keys, values, comments, etc.)

2. Autocompletion:
   - Provide autocompletion suggestions for common NeatConf keywords and structures
   - Implement context-aware suggestions based on the current nesting level
   - Include snippets for common NeatConf patterns (e.g., nested structures, multi-line strings)

3. Language Configuration:
   - Define language configuration for proper indentation and bracket matching
   - Set up comment toggling functionality

4. Snippets:
   - Create snippets for common NeatConf constructs (e.g., include statements, conditional blocks)

5. Extension Structure:
   - Implement the extension using TypeScript
   - Use the VS Code Extension API
   - Follow VS Code extension best practices for performance and user experience

6. Documentation:
   - Provide clear documentation on how to use the extension
   - Include a README with installation instructions and feature overview

7. Publishing:
   - Prepare the extension for publication on the VS Code Marketplace
   - Include appropriate metadata and icons

8. Testing:
   - Implement unit tests for critical functionality
   - Include sample NeatConf files for testing syntax highlighting, autocompletion, and linting

9. Linting:
   - Implement a linter for NeatConf files
   - Check for indentation errors, mixed tabs and spaces, and other common issues
   - Provide configurable severity levels for different types of issues

Here are the principal aspects of the NeatConf language:

- Key-value pairs using '=' (e.g., key = value)
- Nesting using indentation (4 spaces or 1 tab)
- Lists simply indented (WITHOUT dashes)
- Comments starting with '#'
- Multi-line strings using '<' and '>' delimiters
- Optional type hints (e.g., port : int = 8080)
- Environment variable substitution (e.g., ${API_KEY})
- Include directive for other NeatConf files
- Basic arithmetic for numeric values
- Date and time literals (e.g., 2023-06-01, 14d)
- Units for numeric values (e.g., 50MB, 30min)
- Simple conditionals (if/else)
- Basic inheritance or extension mechanism
- Markdown support for documentation inside the config file