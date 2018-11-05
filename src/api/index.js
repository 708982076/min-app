export const request = async (url, opt) => {
  opt = Object.assign({
    method: 'GET'
  }, opt)
  try {
    // https://www.easy-mock.com/mock/5ad206e12589533dee1315fe/example/index
    const res = await fetch('https://www.easy-mock.com/mock/5ad206e12589533dee1315fe/example' + url, opt)
    const resData = await res.json()
    if (resData.msg === 1) {
      return resData.data
    }else {
      console.error(resData.err)
    }
  }catch(e) {
    console.error(e)
  }
}