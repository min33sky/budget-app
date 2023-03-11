/**
 * 딜레이 함수
 * @default 3000ms
 * @param ms 딜레이 시간
 */
export async function delay(ms: number = 3000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
