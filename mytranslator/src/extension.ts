import * as vscode from 'vscode';
import { ApiClient } from './apiclient';
import { Utilities } from "./utilities";

let targetLanguageCode: string,
    isVerified: boolean,
    apiclient: ApiClient;

function loadConfig(): boolean {

  let {
    subKeyTranslator,
    targetLanguage,
  } = vscode.workspace.getConfiguration("mytranslator");

  targetLanguageCode = targetLanguage;
  apiclient = new ApiClient( subKeyTranslator );

  if (!Utilities.isSupportedlanguageCode(targetLanguageCode )) {
    vscode.window.showErrorMessage(`MyTranslator Error: Language code is invalid or empty: ${targetLanguageCode}`);
    isVerified = false;
    return false;
  }
  isVerified = true;
  return isVerified;
}

export function activate(context:vscode.ExtensionContext) {

  // Load all configuration values in initial activation
  loadConfig();

  // Register command
  let disposable_translate =  
    vscode.commands.registerCommand('mytranslator.translate', async() => {
    try {
      if (!isVerified) {
        throw new Error('Invalid Configurations!');
      }
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        if (editor.selections.length > 1) {
          throw new Error('Multiple text is not supported!');
        }
        const text = editor.document.getText(
            new vscode.Range(
              editor.selections[0].start,
              editor.selections[0].end)
          );
        vscode.window.showInformationMessage(`Translating your text => Target Language (${targetLanguageCode})`);
        apiclient.translate(text, targetLanguageCode);
      }
    } catch (e) {
      vscode.window.showErrorMessage(`MyTranslator Error: ${e.message}`);
    } 
   });

  // Trigger reloading config when the configuration changed.
  let disposable_configchange =  vscode.workspace.onDidChangeConfiguration( ()=>loadConfig() );

  context.subscriptions.push(
    disposable_translate,
    disposable_configchange
  );
}

export function deactivate() {}
