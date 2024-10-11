import * as vscode from 'vscode';
import { NeatConfCompletionProvider } from './neatConfCompletionProvider';
import { NeatConfLinter } from './neatConfLinter';

export function activate(context: vscode.ExtensionContext) {
    console.log('NeatConf extension is now active');

    const completionProvider = vscode.languages.registerCompletionItemProvider(
        { language: 'neatconf', scheme: 'file' },
        new NeatConfCompletionProvider()
    );

    const linter = new NeatConfLinter();

    // Lint all open neatconf documents
    vscode.workspace.textDocuments.forEach(document => {
        if (document.languageId === 'neatconf') {
            linter.lint(document);
        }
    });

    // Lint neatconf documents when they are opened or modified
    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(document => {
        if (document.languageId === 'neatconf') {
            linter.lint(document);
        }
    }));

    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => {
        if (event.document.languageId === 'neatconf') {
            linter.lint(event.document);
        }
    }));

    context.subscriptions.push(completionProvider);
    context.subscriptions.push(linter);

    // Apply the NeatConf theme
    vscode.workspace.getConfiguration().update('workbench.colorTheme', 'NeatConf Theme', true);
}
export function deactivate() {}