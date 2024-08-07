# これは？

MongoDB, Express, React, Nodejs の頭文字をとった MERN プロジェクト  
複数の技術スタックの組み合わせでモックを作成中

## To Do List

### Backend

- [x] ログイン
- [x] ログアウト

- [x] ユーザー管理

  - [x] 作成
  - [x] 削除
  - [x] 編集
  - [x] 検索
  - [x] 一覧

- [x] カテゴリ管理

  - [x] 作成
  - [x] 削除
  - [x] 編集
  - [x] 検索
  - [x] 一覧

- [x] アイテム管理
  - [x] 作成
  - [x] 削除
  - [x] 変更
  - [x] レビュー
  - [x] 検索
  - [x] 一覧

### Frontend

- [x] ホーム画面
- [x] ナビゲーション
- [x] ユーザー編集画面
- [x] ログイン画面
- [x] 登録画面
- [x] ログアウト

- [x] ユーザー管理画面

  - [x] 作成
  - [x] 削除
  - [x] 編集
  - [ ] 検索
  - [x] 一覧

- [ ] カテゴリ管理

  - [x] 作成
  - [x] 削除
  - [x] 編集
  - [ ] 検索
  - [x] 一覧

- [ ] アイテム管理
  - [ ] 作成
  - [ ] 編集
  - [ ] 削除
  - [ ] 作成
  - [ ] 検索
  - [ ] 一覧

## 動かすのに必要なもの

- VSCode  
  (Powershell でも行けると思うが、あると楽)
- Nodejs  
  (npm とかするために必要)
- MongoDB Community  
  (データベースとして必要)
- Postman  
  (各種 API テストにあればうれしい)

## 実装済み API

HTTP リクエストの構造は以下(backend/models/ 参照)

### Category

```json
{
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true,
  },
}
```

### User

```json
{
    {
        username: {
        type: String,
        required: true,
        },

        email: {
        type: String,
        required: true,
        unique: true,
        },

        password: {
        type: String,
        required: true,
        },

        isAdmin: {
        type: Boolean,
        required: true,
        default: false,
        },
    },
    {
        timestamps: true,
    }
  }
```

<hr>  
  
APIの詳細は  
・backend/routes/userRoute.js  
・backend/routes/categoryRoute.js  
・backend/controllers/userController.js  
・backend/controllers/categoryController.js  
参照  
  
## ユーザー操作API
### /api/users/  
post(username, password, email(, isAdmin)) :　ユーザードキュメント作成  
get() : 全ユーザードキュメント取得、管理者専用

### /api/users/auth

post(username, password) : ログイン(トークン作成)

### /api/users/logout

post() : ログアウト(トークン削除)、ユーザー用

### /api/users/profile

get() : ユーザードキュメント取得、ユーザー用  
put((username), (password), (email)) : username, password, email 変更、ユーザー用

### /api/users/{id}

get() : 指定 ID のユーザードキュメント取得、管理者用　　
put() : 指定 ID のユーザードキュメント変更、管理者用  
delete() : 指定 ID のユーザードキュメント削除、管理者用

## カテゴリ操作 API

### /api/category/

post(categoryname) : カテゴリドキュメント作成、管理者用

### /api/category/categories

get() : 全カテゴリドキュメント取得

### /api/category/{categoryId}

get() : 指定 ID カテゴリの取得  
put(name) : 指定 ID のカテゴリの name 変更、管理者用  
delete() : 指定 ID のカテゴリ削除、管理者用

## アイテム操作 API

### /api/products

post(name, description, price, category. quantity, brand, image) : アイテムドキュメント作成、管理者用  
get() : アイテムコレクション情報取得

### /api/products/top

get() : 高レートアイテムドキュメント 4 件取得

### /api/products/new

get() : 新規アイテムドキュメント 5 件取得

### /api/products/allproducts

get() : 全アイテムドキュメント取得

### /api/products/{productId}

get() : 指定 ID のアイテムドキュメント取得  
put() : 指定 ID のアイテムドキュメント変更、管理者用  
delete() : 指定 ID のアイテムドキュメント削除、管理者用

### /api/products/{productId}/reviews

post(rating, comment) : 指定 ID のアイテムドキュメントにレビュー追加

## コマンド

```
npm run quick-dev
```

```
npm install
npm run backend
```

```
npm install
npm run frontend
```

```
npm install
npm run dev
```
