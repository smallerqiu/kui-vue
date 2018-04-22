let code = {}

code.base = `<Row>
    <Col span="12">col-12</Col>
    <Col span="12">col-12</Col>
</Row>
<Row>
    <Col span="8">col-8</Col>
    <Col span="8">col-8</Col>
    <Col span="8">col-8</Col>
</Row>
<Row>
    <Col span="6">col-6</Col>
    <Col span="6">col-6</Col>
    <Col span="6">col-6</Col>
    <Col span="6">col-6</Col>
</Row>`

code.gutter =`<Row gutter="10" class="pd">
    <Col span="6">
        <div>col-6</div>
    </Col>
    <Col span="6">
        <div>col-6</div>
    </Col>
    <Col span="6">
        <div>col-6</div>
    </Col>
    <Col span="6">
        <div>col-6</div>
    </Col>
</Row>`

code.offset=`<Row>
    <Col span="8">col-8</Col>
    <Col span="8" offset=8>col-8 | offset-8</Col>
</Row>
<Row>
    <Col span="6">col-6</Col>
    <Col span="6" offset=6>col-6 | offset-6</Col>
    <Col span="6">col-6</Col>
</Row>
<Row>
    <Col span="12" offset=12>col-12 offset-12</Col>
</Row>`

export default code