export function saveStorage(name, value) {
  localStorage.setItem(name, value)
}

export function getStorage(name) {
  return localStorage.getItem(name)
}

export function clearToken() {
  localStorage.setItem('token', '')
}

export function isLogin() {
  return !!localStorage.getItem('token')
}

// export function getLength(str) {
//   return str.replace(/[^ -~]/g, 'AA').length
// }

// export function limitMaxLength(str, maxLength) {
//   var result = []
//   for (var i = 0; i < maxLength; i++) {
//     var char = str[i]
//     if (/[^ -~]/.test(char)) maxLength--
//     result.push(char)
//   }
//   return result.join('')
// }

// var maxLength = 8

// export function onInput() {
//   if (getLength(this.value) > maxLength) {
//     this.value = limitMaxLength(this.value, maxLength)
//   }
// }
