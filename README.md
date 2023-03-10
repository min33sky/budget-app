# Budget App

> react-router-dom@6.8의 새로운 기능을 이용한 예산 관리 앱

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

2. action에서 서로 다른 액션 처리하기

- 같은 페이지에서 여러 액션을 처리할 때, action 함수에서 분기 처리를 해야 한다.

```ts
// Form
<Form>
  //...
  <input type="hidden" name="_action" value="createBudget" />
  //...
</Form>
```

```ts
// action function
export async function dashboardAction({ request }: { request: Request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === 'newUser') {
    // ...
  } else if (_action === 'createBudget') {
    // ...
  }
}
```
