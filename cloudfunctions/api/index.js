// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  let data;
  console.log(event, 'event');
  switch (event.type) {
    case 'getArgs':
      data = await getArgs(event);
      break;
    case 'login':
      data = await login(event);
      break;
    case 'reserve':
      data = await reserve(event);
      break;
    case 'getuser':
      data = await getuser(event);
      break;
  }
  console.log(data, 'data');
  return data
}

async function reserve(event) {
  let { username, nickname, _id, idx, infoIdx, timeIdx, reserve } = event;
  try {
    let check = await db.collection('user').where({
      username
    }).get()

    let data1 = await db.collection('args').where({
      _id: _id
    }).get()
    console.log(data1);
    let time = data1.data[0].children[idx].time[timeIdx].info[infoIdx];
    let assignObj = {
      headline: data1.data[0].title,
      subject: data1.data[0].children[idx].title, 
      week: data1.data[0].children[idx].time[timeIdx].week
    }
    Object.assign(time, reserve, assignObj)

    console.log(time);

    if (check.data[0].curriculum) {
      for (let i = check.data[0].curriculum.length - 1; i > 0; i--) {
        check.data[0].curriculum[i].now_people += 1
        if (JSON.stringify(check.data[0].curriculum[i]) == JSON.stringify(time)) {
          return '您已报名'
        }
      }
    }

    if (time.now_people < time.max_people) {
      let data2 = await db.collection('user').where({
        username
      }).update({
        data: {
          curriculum: _.push(time)
        }
      })
      console.log(data2, "data2");
      let data3 = await db.collection('reserve').add({
        data: {
          reserve: time,
          username: username,
          nickname: nickname,
          _createTime: new Date().getTime()
        }
      })
      console.log(data3, "data3");
      return await db.collection('args').where({
        _id: _id,
      }).update({
        data: {
          [`children.${idx}.time.${timeIdx}.info.${infoIdx}.now_people`]: _.inc(1)
        }
      })
    }
    else {
      return '人数已满'
    }
  } catch (error) {
    console.log(error);
  }
}

async function login(event) {
  let obj = event.obj
  try {
    let data1 = await db.collection('user').where({
      username: _.eq(obj.username)
    }).get()
    console.log(data1);
    if (data1.data.length == 0) {
      await db.collection('user').add({
        data: {
          ...obj
        }
      })
      return '注册成功'
    }

    if (data1.data[0].password == obj.password && data1.data[0].nickname == obj.nickname) {
      return '登录成功'
    } else {
      return '用户名或密码错误'
    }

  } catch (error) {
    console.log(error);
  }
}

async function getArgs(event) {
  try {
    return await db.collection('args').get()
  } catch (error) {

  }
}
async function getuser(event) {
  let username = event.username
  try {
    return await db.collection('user').where({
      username
    }).get()
  } catch (error) {

  }
}

