let stateStore = [];
let effectStore = [];
let currentIndex = 0;

export function useState(initialState) {
  const index = currentIndex;

  if (stateStore[index] === undefined) {
    stateStore[index] = initialState;
  }

  const setState = (newState) => {
    stateStore[index] = newState;
    render(); // 상태 변경 시 렌더링철l
  };

  currentIndex++;
  return [stateStore[index], setState];
}

export function useEffect(callback, deps) {
  const index = currentIndex;

  const hasNoDeps = !deps?.length;
  const prevDeps = effectStore[index];
  const hasChangedDeps = prevDeps
    ? !deps.every((dep, i) => dep === prevDeps[i])
    : true;

  if (hasNoDeps || hasChangedDeps) {
    callback();
    effectStore[index] = deps;
  }

  currentIndex++;
}

export function useCallback(callback, deps) {
  return useEffect(callback, deps);
}

export function render(component) {
  const $root = document.getElementById("root");
  currentIndex = 0; // 인덱스 초기화
  stateStore = []; // 상태 저장소 초기화
  effectStore = []; // 이펙트 저장소 초기화
  $root.innerHTML = component(); // 컴포넌트를 다시 실행
}
