let code = {}

code.base = `<Page :total="100" :curent="1" :pagesize="10"></Page>`
code.size = `<Page :total="60" :curent="1" :pagesize="10" mini></Page>`
code.sizer=`<Page :total="60" :current="1" show-sizer show-total show-elevator :pagesize="10" mini @change="test"></Page>`
export default code