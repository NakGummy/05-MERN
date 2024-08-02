# このブランチは？

[Issue#1](https://github.com/NakGummy/05-MERN/issues/1)のお片付けブランチ

- [[c9a73da](c9a73da84808b21d3a97732bce7e1b6ecb7f27eb)]で発覚
- Admin アカウントの Users ページにて発生
- ページに Hedding1 以外何も表示されない
- エラーなし

-> Hedding1 は効いてるので、同じ親を持つ兄弟関係のノードがおかしい。  
 以下該当箇所

```jsx
return (
  <div className="p-4">
    <h1 className="text-2xl font-semibold mb-4">Users</h1>
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error?.data.message || error.message}</Message>
    ) : (
      <div className="flex flex-col md:flex-row">
        {/* Admin Menu */}
        <table className="w-full md:w-4/5 mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">NAME</th>
              <th className="px-4 py-2 text-left">EMAIL</th>
              <th className="px-4 py-2 text-left">ADMIN</th>
              <th className="px-4 py-2 text-left"></th>
            </tr>
          </thead>
        </table>
      </div>
    )}
  </div>
);
```
