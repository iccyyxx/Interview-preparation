// 146. LRU 缓存
var LRUCache = function (capacity) {
  m = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (m.has(key)) {
    let v = m.get(key);
    m.delete(key);
    m.set(key, v);
    return v;
  }
  else return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (m.has(key)) {
    m.delete(key);
    m.set(key, value);
  }
  else {
    if (this.capacity > 0)
      this.capacity--;
    else
      m.delete(m.keys().next().value)
  }
  m.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
