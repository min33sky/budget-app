# Budget App

> This is a simple budget app that allows you to add and remove items from your budget.

## Stack

- React
- Typescript
- React Router@^6.8

## Note

1. action 함수에서 react-router-dom의 Form Event 데이터를 가져오기

```ts
export async function dashboardAction({ request }: { request: Request }) {
  const data = await request.formData();
  const formdata = Object.fromEntries(data);

  // ...
}
```
