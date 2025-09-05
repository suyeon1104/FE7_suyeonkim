// history
// 브라우저의 세션 기록(뒤로 가기, 앞으로 가기, 주소) 등을 제어할 수 있게 해주는 API
// SPA(Single Page Application)

// length -> 브라우저에서 관리하고 있는 히스토리 개수
// .back() -> 뒤로 가기
// .forward() -> 앞으로 가기
// .go(n) -> n만큼 이동하기 (양수 = 앞으로, 음수 = 뒤로)
// .pushState(state, title, url) -> 현재 보고 있는 url만 조작함. 페이지 이동 능력 없음.
// .replaceState(state, title, url) 