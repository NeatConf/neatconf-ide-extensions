import * as vscode from 'vscode';

export class NeatConfLinter {
    private diagnosticCollection: vscode.DiagnosticCollection;

    constructor() {
        this.diagnosticCollection = vscode.languages.createDiagnosticCollection('neatconf');
    }

    public lint(document: vscode.TextDocument) {
        const diagnostics: vscode.Diagnostic[] = [];
        let previousIndentLevel = 0;
        const spaceIndentSize = 4; // 4 spaces or 1 tab for indentation

        for (let i = 0; i < document.lineCount; i++) {
            const line = document.lineAt(i);
            const text = line.text;

            // Skip empty lines and comments
            if (text.trim() === '' || text.trim().startsWith('#')) {
                continue;
            }

            const indentationMatch = text.match(/^(\s*)/);
            if (indentationMatch) {
                const indentation = indentationMatch[1];
                const currentIndentLevel = indentation.replace(/\t/g, ' '.repeat(spaceIndentSize)).length;

                // Check for mixed tabs and spaces (now a warning)
                if (indentation.includes('\t') && indentation.includes(' ')) {
                    diagnostics.push(new vscode.Diagnostic(
                        new vscode.Range(i, 0, i, indentation.length),
                        'Mixed tabs and spaces in indentation',
                        vscode.DiagnosticSeverity.Warning
                    ));
                }

                // Check for incorrect indentation level
                if (currentIndentLevel % spaceIndentSize !== 0) {
                    diagnostics.push(new vscode.Diagnostic(
                        new vscode.Range(i, 0, i, indentation.length),
                        'Indentation should be a multiple of 4 spaces or tabs',
                        vscode.DiagnosticSeverity.Error
                    ));
                }

                // Check for sudden indentation jumps
                if (currentIndentLevel > previousIndentLevel + spaceIndentSize) {
                    diagnostics.push(new vscode.Diagnostic(
                        new vscode.Range(i, 0, i, indentation.length),
                        'Indentation increased by more than one level',
                        vscode.DiagnosticSeverity.Error
                    ));
                }

                previousIndentLevel = currentIndentLevel;
            }

            // Check for lines that are too long
            if (text.trim().length > 100) {
                const diagnostic = new vscode.Diagnostic(
                    line.range,
                    'Line is too long (exceeds 100 characters)',
                    vscode.DiagnosticSeverity.Warning
                );
                diagnostics.push(diagnostic);
            }

            // Check for invalid key names (only alphanumeric and underscore allowed)
            if (text.includes('=')) {
                const key = text.split('=')[0].trim();
                if (!/^[a-zA-Z0-9_]+$/.test(key)) {
                    const diagnostic = new vscode.Diagnostic(
                        new vscode.Range(i, text.indexOf(key), i, text.indexOf(key) + key.length),
                        'Invalid key name (only alphanumeric characters and underscores allowed)',
                        vscode.DiagnosticSeverity.Error
                    );
                    diagnostics.push(diagnostic);
                }
            }
        }

        this.diagnosticCollection.set(document.uri, diagnostics);
    }

    public dispose() {
        this.diagnosticCollection.dispose();
    }
}
