import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: "/assets",
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: function()  {
    console.log((<any>window).monaco);
  }, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};

export default monacoConfig;