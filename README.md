# これは？

MongoDB, Express, React, Nodejs の頭文字をとった MERN プロジェクト  
複数の技術スタックの組み合わせでモックを作成中

現在はユーザーアカウントまわりの操作。

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

HTTP リクエストの構造は以下(backend/models/userModels.js 参照)

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
・backend/controllers/userController.js  
参照  
  
### /api/users/  
post(username, password, email(, isAdmin)) :　ユーザードキュメント作成  
get() : 全ユーザードキュメント表示、Admin 専用

### /api/users/auth

post(username, password) : ログイン(トークン作成)

### /api/users/logout

post() : ログアウト(トークン削除)

### /api/users/profile

get() : ユーザードキュメント表示  
put((username), (password), (email)) : username, password, email 変更

### /api/users/{id}

get() : 指定 ID のユーザードキュメント表示  
delete() : 指定 ID のユーザードキュメント削除

## コマンド

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
