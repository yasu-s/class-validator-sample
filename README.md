# class-validator-sample

## 概要

* class-validator + Angular のサンプルです。
* C#/WPF では INotifyDataErrorInfo を使用した入力バリデーションが存在します。今回はそれをAngular版にしてみました。

## 実行環境

* Node.js - 10.x
* Yarn - 1.17.x

## 使用ライブラリ

* TypeScript - 3.5.x
* Angular - 8.2.x
* class-validator - 0.10.x

## 動作確認

### 1. サンプルのダウンロード

```bash
git clone git@github.com:yasu-s/class-validator-sample.git
```

### 2. パッケージインストール  

```bash
cd class-validator-sample
yarn
```

### 3. サンプルの起動  

```bash
yarn start
```

## 実行結果

![class-valid](https://user-images.githubusercontent.com/2668146/67674192-34b72b80-f9bf-11e9-9d12-be52443779f4.gif)

## URL

* class-validator - https://www.npmjs.com/package/class-validator
* INotifyDataErrorInfo- https://docs.microsoft.com/ja-jp/dotnet/api/system.componentmodel.inotifydataerrorinfo?view=netframework-4.8
* INotifyDataErrorInfoの実装サンプル - https://github.com/yasu-s/WPF-Sample/blob/master/src/WPF-Sample/ViewModel/NotifyObject.cs
