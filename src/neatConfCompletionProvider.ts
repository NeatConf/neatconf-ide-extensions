import * as vscode from 'vscode';

export class NeatConfCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        
        // Provide suggestions based on the context
        if (linePrefix.endsWith('include ')) {
            return [
                new vscode.CompletionItem('file.ncf', vscode.CompletionItemKind.File),
                new vscode.CompletionItem('config.ncf', vscode.CompletionItemKind.File),
            ];
        }

        // Default suggestions
        return [
            new vscode.CompletionItem('include', vscode.CompletionItemKind.Keyword),
            new vscode.CompletionItem('if', vscode.CompletionItemKind.Keyword),
            new vscode.CompletionItem('else', vscode.CompletionItemKind.Keyword),
            // Add more default suggestions here
        ];
    }
}