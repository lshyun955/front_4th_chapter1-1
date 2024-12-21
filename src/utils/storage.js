/**
 * 로컬 스토리지 관련 유틸리티
 */
export default (function localStorageService() {
  function get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function remove(key) {
    localStorage.removeItem(key);
  }

  return {
    get,
    set,
    remove,
  };
})();
