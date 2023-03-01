import 'dotenv/config'//.env用

const { KintoneRestAPIClient } = require("@kintone/rest-api-client");

const BASE_URL = process.env['BASE_URL'] as string
const AUTH_API_TOKEN = process.env['AUTH_API_TOKEN'] as string
const APP_ID = process.env['APP_ID'] as string

const client = new KintoneRestAPIClient({
  baseUrl: BASE_URL,
  auth: { apiToken: AUTH_API_TOKEN },
});

const appID = APP_ID; // 追加するアプリのID

const request = {
  app: appID,
  properties: {
    'field1': {
      type: 'SINGLE_LINE_TEXT',
      code: 'field1',
      label: 'Field 1',
    },
    'field2': {
      type: 'NUMBER',
      code: 'field2',
      label: 'Field 2',
    },
		'Text__single_line_1': {
      type: 'SINGLE_LINE_TEXT',//type
      code: 'Text__single_line_1',//フィールドコード
      label: 'Text (single-line)',//フィールド名
      noLabel: false,//フィールド名を表示しない
      required: true,//必須項目にする
      unique: true,//値の重複を禁止
      maxLength: 64,//最大文字数
      minLength: 0,//最小文字数
      defaultValue: '',//初期値
      expression: '',//計算式
      hideExpression: false//計算式を表示しない
    },
    // 'field3': {
    //   type: 'DROP_DOWN',
    //   code: 'field3',
    //   label: 'Field 3',
    //   options: [
    //     "a", "b", "c"
    //   ],
    // },

		//他にも必要なフィールドをここに書く
  },
};

client.app.addFormFields(request)
  .then((response: any) => {
    console.log(response);
  })
  .catch((err: any) => {
    console.log(err);
  });