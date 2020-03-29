'use strict';

import * as needle from 'needle';
import * as vscode from 'vscode'; 
import { Utilities } from "./utilities";

const uuidv4 = require('uuid/v4');

export class ApiClient {
   private outputChannel: vscode.OutputChannel;
  private TRANSLATE_API_ENDPOINT="https://api.cognitive.microsofttranslator.com/translate";
  private subKeyTranslator: string;

  /**
   * @constructor
   * @param subKeyTranslator 
   */
  constructor(subKeyTranslator: string) {
    this.outputChannel = vscode.window.createOutputChannel('MyTranslator');
    this.subKeyTranslator = subKeyTranslator;
  }

  /**
   * Translate the text
   * @param text 
   * @param targetlang 
   */
  translate( text : string, targetlang: string = 'ja'){

    this.translateInternal(text, targetlang)
    .then((jsontext) => {
      let item:any = jsontext[0];
      let translated_text:string = item["translations"][0]["text"];

      this.outputChannel.show();
      this.outputChannel.appendLine(`Source: ${text}`);
      this.outputChannel.appendLine(`Translation: ${translated_text}`);
      this.outputChannel.appendLine('\n');
    })
    .catch((err: Error) => {
      throw new Error(`Translation API request failed: ${err.message}`);
    });
  }

  /**
   * Translate the text into the target language
   * @param text 
   * @param targetlang 
   */
  private translateInternal(text:string, targetlang:string = 'ja'): Promise<string> {

    let options = {
      headers: {
        'Ocp-Apim-Subscription-Key': this.subKeyTranslator,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      }
    };
    let body =[{
       'text': text
    }];
    let qs = Utilities.queryString(
      {
      'api-version': '3.0',
      'to': [targetlang] 
      }
    );

    return new Promise((resolve, reject) => {
      needle.post( `${this.TRANSLATE_API_ENDPOINT}?${qs}`, body, options, function(err:any, res:any) {
        if (err) {
          return reject(err);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Wrong status code ${res.statusCode} in Azure Cognitive Translator API`));
        }
        resolve(res.body);
      });
    });
  }
}