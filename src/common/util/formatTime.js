/**
 *  格式化聊天时间
 *  本周內的
 *     昨天展示昨天
 *     其余展示星期几
 *  其他时间展示 月-日
 *  @param {String || int } begin YYYY-mm-DD HH:mm:ss || millisecond
 */

const formatTime = ({ begin = 0 } = {}) => {
  let weekFormat = {
    0: '\u65e5',
    1: '\u4e00',
    2: '\u4e8c',
    3: '\u4e09',
    4: '\u56db',
    5: '\u4e94',
    6: '\u516d'
  }

  let data = {
    time: {},
    timeArr: [],
    timeStamp: 0,
    timeWeek: '',
    formatTime: ''
  }
  begin = String(begin)
  // 1.check args time
  let checkTimeFormat = begin.match(/^(\d{4})-(\d{2})-(\d{2})\s?(\d{0,2})?:?(\d{0,2})?:?(\d{0,2})?/)
  let time = ''
  let timeArr = []
  let timeStamp = 0
  let timeWeek = ''

  if (checkTimeFormat == null) {
    time = new Date()
    begin.match(/\d+/) !== null && time.setTime(begin)
    let o = {
      'M': time.getMonth() + 1,
      'd': time.getDate(),
      'H': time.getHours(),
      'm': time.getMinutes(),
      's': time.getSeconds()
    }
    timeArr = Object.values(o).map(item => `00${item}`.slice(-2))
    timeArr.unshift(time.getFullYear())
  } else {
    timeArr = checkTimeFormat.slice(1, 7).map((item) => item == undefined ? "0" : item)
    time = new Date(timeArr[0], parseInt(timeArr[1] - 1), timeArr[2], timeArr[3] || 0, timeArr[4] || 0, timeArr[5] || 0)
  }

  timeStamp = time.getTime()
  timeWeek = time.getDay()

  Object.assign(data, {
    time,
    timeArr,
    timeWeek,
    timeStamp
  })

  // 2.获取本周的开始时间
  let date = new Date()
  // let nowTime = date.getTime()
  let nowDate = date.getDate()
  // let year = date.getFullYear()
  let week = date.getDay()
  let zeroPointTime = date.setHours(0, 0, 0, 0)

  let weekBeginTime = week === 0 ? date.setDate(nowDate - 6) : date.setDate(parseInt(nowDate - week + 1))

  switch (true) {
    // yesterday
    case (zeroPointTime - 86400000) <= timeStamp && timeStamp < zeroPointTime:
      data['formatTime'] = '昨天'
      break
    // before this week afert yesterday
    case weekBeginTime <= timeStamp && timeStamp < (zeroPointTime - 86400000):
      data['formatTime'] = `星期${weekFormat[timeWeek]}`
      break
    case weekBeginTime > timeStamp:
      data['formatTime'] = `${timeArr[0]}-${timeArr[1]}-${timeArr[2]}`
      break
  }

  data['formatTime'] = `${data['formatTime']} ${timeArr[3]}:${timeArr[4]}`.trim()

  return data
}

export default formatTime
