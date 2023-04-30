/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Editor widget to test completion in
 */
export type EditorType = 'Notebook' | 'File Editor';
/**
 * Optional path to an existing document of specified editor type. When empty (default) a new temporary file will be created.
 */
export type PathToDocument = string;
/**
 * How should the editor be populated?
 */
export type EditorSetupForCompletion =
  | AutoGenerateTokensToComplete
  | IWillProvideACustomText;
/**
 * The number of completion items to generate
 */
export type TokenCount = number;
/**
 * The number characters in each token
 */
export type TokenSize = number;
/**
 * Text to enter into the editor. Last line should include a partial token on which the completion will be riggered.
 */
export type TriggerCode = string;
/**
 * Code to run prior to invoking completer, e.g. `import numpy as np`. Only has an effect in notebook.
 */
export type CodeToRunNotebookOnly = string;
/**
 * Where to attach the editor widget in the layout
 */
export type WidgetPositionInTheLayout =
  | 'split-top'
  | 'split-left'
  | 'split-right'
  | 'split-bottom'
  | 'tab-before'
  | 'tab-after';

export interface CompleterScenarioOptions {
  editor: EditorType;
  path?: PathToDocument;
  setup: EditorSetupForCompletion;
  widgetPosition?: WidgetPositionInTheLayout;
}
export interface AutoGenerateTokensToComplete {
  tokenCount: TokenCount;
  tokenSize: TokenSize;
  [k: string]: any;
}
export interface IWillProvideACustomText {
  setupText: TriggerCode;
  setupCell?: CodeToRunNotebookOnly;
  [k: string]: any;
}
