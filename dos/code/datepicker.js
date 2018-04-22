let code = {}

code.base = `<DatePicker></DatePicker>`

code.clearable = `<DatePicker clearable></DatePicker>`
code.size = `<DatePicker></DatePicker>
<DatePicker mini></DatePicker>`

code.date = `<Row gutter="10">
      <Col span="6">
      <h4>年</h4>
      <DatePicker format="YYYY"></DatePicker>
      </Col>
      <Col span="6">
      <h4>月</h4>
      <DatePicker format="MM"></DatePicker>
      </Col>
      <Col span="6">
      <h4>时间</h4>
      <DatePicker format="YYYY-MM-DD HH:mm:ss"></DatePicker>
      </Col>
    </Row>`

code.range = `<Row padding="10">
      <Col span="8">
      <h4>范围</h4>
      <DatePicker :value="[]"></DatePicker>
      </Col>
      <Col span="8">
      <h4>范围符号</h4>
      <DatePicker range-separator="至" :value="[]"></DatePicker>
      </Col>
    </Row>`

code.disabled = `<Row padding="10">
      <Col span="8">
      <h4>局部禁用</h4>
      <DatePicker :disabled-date="disabledDate"></DatePicker>
      </Col>
      <Col span="8">
      <h4>禁用</h4>
      <DatePicker disabled></DatePicker>
      </Col>
    </Row>
    methods: { 
        disabledDate: time => {
          var day = time.getDay();
          return day === 0 || day === 6;
        }
    }`
code.lang = `英文：
    <DatePicker lang="en"></DatePicker> 
    中文：
    <DatePicker></DatePicker>`

export default code