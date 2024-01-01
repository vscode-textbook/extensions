'use strict';
import * as vscode from "vscode";

/**
 * Language Code and Language Name Mapping
 * Source data:
 * https://docs.microsoft.com/en-us/azure/cognitive-services/translator/language-support#translation
 */
const LANGUAGE_MAP: { [key:string]: string } ={
  "af" : "Afrikaans",
  "ar" : "Arabic",
  "bn" : "Bangla",
  "bs" : "Bosnian (Latin)",
  "bg" : "Bulgarian",
  "yue" : "Cantonese (Traditional)",
  "ca" : "Catalan",
  "zh-hans" : "Chinese Simplified",
  "zh-hant" : "Chinese Traditional",
  "hr" : "Croatian",
  "cs" : "Czech",
  "da" : "Danish",
  "nl" : "Dutch",
  "en" : "English",
  "et" : "Estonian",
  "fj" : "Fijian",
  "fil" : "Filipino",
  "fi" : "Finnish",
  "fr" : "French",
  "de" : "German",
  "el" : "Greek",
  "ht" : "Haitian Creole",
  "he" : "Hebrew",
  "hi" : "Hindi",
  "mww" : "Hmong Daw",
  "hu" : "Hungarian",
  "is" : "Icelandic",
  "id" : "Indonesian",
  "it" : "Italian",
  "ja" : "Japanese",
  "sw" : "Kiswahili",
  "tlh" : "Klingon",
  "tlh-qaak" : "Klingon (plqaD)",
  "ko" : "Korean",
  "lv" : "Latvian",
  "lt" : "Lithuanian",
  "mg" : "Malagasy",
  "ms" : "Malay",
  "mt" : "Maltese",
  "nb" : "Norwegian",
  "fa" : "Persian",
  "pl" : "Polish",
  "pt" : "Portuguese",
  "otq" : "Queretaro Otomi",
  "ro" : "Romanian",
  "ru" : "Russian",
  "sm" : "Samoan",
  "sr-cyrl" : "Serbian (Cyrillic)",
  "sr-latn" : "Serbian (Latin)",
  "sk" : "Slovak",
  "sl" : "Slovenian",
  "es" : "Spanish",
  "sv" : "Swedish",
  "ty" : "Tahitian",
  "ta" : "Tamil",
  "te" : "Telugu",
  "th" : "Thai",
  "to" : "Tongan",
  "tr" : "Turkish",
  "uk" : "Ukrainian",
  "ur" : "Urdu",
  "vi" : "Vietnamese",
  "cy" : "Welsh",
  "yua" : "Yucatec Maya"
};

export class Utilities {
  /**
   * Check if it's empty string
   * @param str 
   */
  public static isEmptyString(str: string): boolean {
    return ( !str && str.length < 1 );
  }

  /** 
   * Generate Query String from params
   * @param params 
   */
  public static queryString(params:any): string {
    return Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  }

  /**
   * Check if it's supported language code
   * @param langcode
   */
  public static isSupportedlanguageCode(langcode: string): boolean {
    let c:string = langcode.toLowerCase();
    return (
      !Utilities.isEmptyString(c)
         && ( c in LANGUAGE_MAP )
      );
  }

}