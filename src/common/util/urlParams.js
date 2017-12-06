/**
 * 将url参数序列化为对象
 * @param {string} search
 */
const urlParams = (search = location.search) => {
  let qs = (search.length > 0 ? search.substring(1) : '')
  let arg = {}
  let items = qs.length ? qs.split('&') : []

  for (let item of items) {
    let name = decodeURIComponent(item.split('=')[0])
    let value = decodeURIComponent(item.split('=')[1])
    if (name.length) {
      arg[name] = value
    }
  }

  arg.get = (query) => {
    return arg[query] ? arg[query] : null
  }

  arg.set = (obj, status = true) => {
    let newArg = Object.assign(arg, obj)
    let newSearch = '?'
    for (let key in newArg) {
      if (key !== 'set' && key !== 'get') {
        newSearch += (encodeURIComponent(key) + '=' + encodeURIComponent(newArg[key])) + '&'
      }
    }

    newSearch = newSearch.substring(0, (newSearch.length - 1))

    if (status) {
      location.search = newSearch
    } else {
      location.replace(location.href.replace(location.search, newSearch))
    }
  }

  return arg
}

export default urlParams
