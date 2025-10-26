import{A as e,At as t,Bt as n,G as r,g as i,k as a,zt as o}from"./index-Dw-BZmPh.js";var s=o({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h1`,[e._v(`Upload 上传`)]),t(`p`,[e._v(`上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。`)]),t(`h2`,{attrs:{id:`何时使用`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#何时使用`}},[e._v(`何时使用`)])]),t(`ul`,[t(`li`,[e._v(`当需要上传一个或一些文件时。`)]),t(`li`,[e._v(`当需要展现上传的进度时。`)]),t(`li`,[e._v(`当需要使用拖拽交互时。`)])]),t(`h2`,{attrs:{id:`代码演示`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#代码演示`}},[e._v(`代码演示`)])])])}],!1,null,null,null,null).exports,c=o({data(){return{CloudUpload:a,headers:{authorization:`here is token`}}},methods:{handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList),e.file.status===`success`?this.$Message.success(`${e.file.filename} uploaded successfully`):e.file.status===`error`&&this.$Message.error(`${e.file.filename} upload failed.`)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers},on:{change:e.handleChange}},[t(`Button`,{attrs:{icon:e.CloudUpload}},[e._v(`Click to upload`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`点击上传`)]),t(`p`,[e._v(`经典款式，用户点击按钮弹出文件选择框。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUpload"`)]),e._v(`>`)]),e._v(`Click to upload`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUpload`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUpload`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      }
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" uploaded successfully`")]),e._v(`);
      } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'error'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" upload failed.`")]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,l=o({data(){return{CloudUploadOutline:e,headers:{authorization:`here is token`}}},methods:{handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList),e.file.status===`success`?this.$Message.success(`${e.file.filename} uploaded successfully`):e.file.status===`error`&&this.$Message.error(`${e.file.filename} upload failed.`)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,multiple:``},on:{change:e.handleChange}},[t(`Button`,{attrs:{icon:e.CloudUploadOutline}},[e._v(`Click to upload`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`上传多个文件`)]),t(`p`,[e._v(`通过设置 multiple 属性可以支持同时选中多个文件上传。`)]),t(`blockquote`,[t(`p`,[e._v(`不设置为默认, 只能上传一个文件`)])])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUploadOutline"`)]),e._v(`>`)]),e._v(`Click to upload`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      }
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" uploaded successfully`")]),e._v(`);
      } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'error'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" upload failed.`")]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,u=o({data(){return{IconImage:r,Videocam:t,CloudUpload:a,headers:{authorization:`here is token`}}},methods:{handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList),e.file.status===`success`?this.$Message.success(`${e.file.filename} uploaded successfully`):e.file.status===`error`&&this.$Message.error(`${e.file.filename} upload failed.`)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,multiple:``,accept:`image/*`},on:{change:e.handleChange}},[t(`Button`,{attrs:{icon:e.IconImage}},[e._v(`Upload Image`)])],1),t(`br`),t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,multiple:``,accept:`video/*`},on:{change:e.handleChange}},[t(`Button`,{attrs:{icon:e.Videocam}},[e._v(`Upload Video`)])],1),t(`br`),t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,multiple:``,accept:`.pdf,.png,.jpeg`},on:{change:e.handleChange}},[t(`Button`,{attrs:{icon:e.CloudUpload}},[e._v(`Upload PDF,PNG,JPEG`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`上传文件类型`)]),t(`p`,[e._v("通过 accept 属性（input的原生html` 属性）可以限制上传的文件类型。"),t(`br`),e._v(` accept 支持传入以下两种类型字符串：`),t(`br`),e._v(` 文件后缀名集合（推荐），如 .jpg、.png 等；`),t(`br`),e._v(` 文件类型的 MIME types 集合，可参考`),t(`a`,{attrs:{href:`https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types`}},[e._v(`MDN`)]),e._v(` 文档`)]),t(`blockquote`,[t(`p`,[e._v(`例如只允许用户上传 PNG 和 PDF 文件，accept 可以这样写： accept = '.pdf,.png' 或 accept = 'application/pdf,image/png'（将 PNG 与 PDF 的 MIME type 通过,连接起来即可）。`)])])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/*"`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"IconImage"`)]),e._v(`>`)]),e._v(`Upload Image`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"video/*"`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"Videocam"`)]),e._v(`>`)]),e._v(`Upload Video`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`".pdf,.png,.jpeg"`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUpload"`)]),e._v(`>`)]),e._v(`Upload PDF,PNG,JPEG`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`IconImage`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Videocam`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUpload`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`IconImage`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Videocam`)]),e._v(`, `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUpload`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      }
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" uploaded successfully`")]),e._v(`);
      } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'error'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" upload failed.`")]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,d=o({data(){return{CameraOutline:i,headers:{authorization:`here is token`}}},methods:{transformFile(e){return new Promise((t,n)=>{let r=document.createElement(`canvas`),i=r.getContext(`2d`,{willReadFrequently:!0}),a=new Image,o=e.name;a.onload=function(){r.width=200,r.height=300,i.drawImage(a,(a.width-r.width)/2,(a.height-r.height)/2,r.width,r.height);for(var e=r.toDataURL(`image/png`).split(`,`),n=e[0].match(/:(.*?);/)[1],s=atob(e[1]),c=s.length,l=new Uint8Array(c);c--;)l[c]=s.charCodeAt(c);let u=new File([l],o,{type:n});t(u)},a.src=URL.createObjectURL(e)})},handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,type:`picture`,headers:e.headers,transformFile:e.transformFile,limit:1,accept:`image/*`,uploadIcon:e.CameraOutline,uploadText:`上传头像`},on:{change:e.handleChange}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`上传前处理图片`)]),t(`p`,[e._v(`利用 transformFile 可以在文件上传前处理文件, 上传之前压缩等`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"picture"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:transformFile`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"transformFile"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:limit`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/*"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:uploadIcon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CameraOutline"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`uploadText`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"上传头像"`)]),e._v(`
    >`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CameraOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-icons'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CameraOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      },
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`transformFile`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`file`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Promise`)]),e._v(`(`),t(`span`,{staticClass:`hljs-function`},[e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`res, rej`)]),e._v(`) =>`)]),e._v(` {
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` canvas = `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`document`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`createElement`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'canvas'`)]),e._v(`);
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` ctx = canvas.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`getContext`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'2d'`)]),e._v(`, { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`willReadFrequently`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(` });

        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` img = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Image`)]),e._v(`();
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` filename = file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`name`)]),e._v(`
        img.`),t(`span`,{staticClass:`hljs-property`},[e._v(`onload`)]),e._v(` = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`function`)]),e._v(` (`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
          canvas.`),t(`span`,{staticClass:`hljs-property`},[e._v(`width`)]),e._v(` = `),t(`span`,{staticClass:`hljs-number`},[e._v(`200`)]),e._v(`;
          canvas.`),t(`span`,{staticClass:`hljs-property`},[e._v(`height`)]),e._v(` = `),t(`span`,{staticClass:`hljs-number`},[e._v(`300`)]),e._v(`;
          ctx.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`drawImage`)]),e._v(`(img, (img.`),t(`span`,{staticClass:`hljs-property`},[e._v(`width`)]),e._v(` - canvas.`),t(`span`,{staticClass:`hljs-property`},[e._v(`width`)]),e._v(`) / `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`, (img.`),t(`span`,{staticClass:`hljs-property`},[e._v(`height`)]),e._v(` - canvas.`),t(`span`,{staticClass:`hljs-property`},[e._v(`height`)]),e._v(`) / `),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`, canvas.`),t(`span`,{staticClass:`hljs-property`},[e._v(`width`)]),e._v(`, canvas.`),t(`span`,{staticClass:`hljs-property`},[e._v(`height`)]),e._v(`);
          `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// canvas to file obj`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` data = canvas.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`toDataURL`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'image/png'`)]),e._v(`);
          `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`var`)]),e._v(` arr = data.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`split`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`','`)]),e._v(`),
            mime = arr[`),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`].`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`match`)]),e._v(`(`),t(`span`,{staticClass:`hljs-regexp`},[e._v(`/:(.*?);/`)]),e._v(`)[`),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`],
            bstr = `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`atob`)]),e._v(`(arr[`),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`]),
            n = bstr.`),t(`span`,{staticClass:`hljs-property`},[e._v(`length`)]),e._v(`,
            u8arr = `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Uint8Array`)]),e._v(`(n);
          `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`while`)]),e._v(` (n--) {
              u8arr[n] = bstr.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`charCodeAt`)]),e._v(`(n);
          }
          `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`const`)]),e._v(` newFile =  `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`new`)]),e._v(` `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`File`)]),e._v(`([u8arr], filename, { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`: mime });
          `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`res`)]),e._v(`(newFile)
          };
        img.`),t(`span`,{staticClass:`hljs-property`},[e._v(`src`)]),e._v(` = `),t(`span`,{staticClass:`hljs-variable constant_`},[e._v(`URL`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`createObjectURL`)]),e._v(`(file);
      })
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,f=o({data(){return{CloudUploadOutline:e,headers:{authorization:`here is token`},disabled:!1,limit:2}},methods:{handleChange(e){this.disabled=e.fileList.length>=this.limit}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,limit:e.limit,minSize:200,maxSize:1024,multiple:``},on:{exceed:()=>{this.$Message.warning(`最多只能上传${e.limit}个文件`)},"size-error":({file:e})=>{this.$Message.warning(`${e.filename}大小超过限制`)},change:e.handleChange,remove:e.handleChange}},[t(`Button`,{attrs:{icon:e.CloudUploadOutline,disabled:e.disabled}},[e._v(`点击上传 (最小200KB, 最大1MB,最多上传 `+e._s(e.limit)+` 项)`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`上传限制`)]),t(`p`,[e._v(`limit 限制上传数量, minSize 和 maxSize 属性可以自定义上传文件大小的限制。`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:limit`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"limit"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:minSize`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"200"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:maxSize`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1024"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`exceed`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v('"()=>{ this.$Message.warning(`最多只能上传${limit}个文件`) }"')]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`size-error`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v('"({file})=>{ this.$Message.warning(`${file.filename}大小超过限制`) }"')]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`remove`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUploadOutline"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:disabled`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"disabled"`)]),e._v(`>`)]),e._v(`点击上传 (最小200KB, 最大1MB,最多上传 `+e._s(e.limit)+` 项)`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`false`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`limit`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`2`)]),e._v(`,
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`disabled`)]),e._v(` = info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`length`)]),e._v(` >= `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`limit`)]),e._v(`
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,p=o({data(){return{CloudUploadOutline:e,pramas:{type:`image`,time:Date.now()},headers:{authorization:`here is token`},disabled:!0}},methods:{beforeUpload(e){this.disabled=e.fileList.length==0}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{ref:`upload`,attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,data:e.pramas,autoTrigger:!1,multiple:``},on:{"before-upload":e.beforeUpload,remove:e.beforeUpload}},[t(`Button`,{attrs:{icon:e.CloudUploadOutline}},[e._v(`点击选择上传文件`)])],1),t(`br`),t(`Button`,{attrs:{disabled:e.disabled},on:{click:function(t){return e.$refs.upload.upload()}}},[e._v(`开始上传`)])],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`手动上传/自定义属性`)]),t(`p`,[e._v(`通过设置 data、headers 可添加自定义上传属性`),t(`br`),e._v(` autoTrigger='false'，选中文件后将不会自动触发上传。需要手动调用 ref 上的 upload 方法触发`),t(`br`),e._v(` name 为上传文件名`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:data`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"pramas"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:autoTrigger`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`before-upload`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"beforeUpload"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`remove`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"beforeUpload"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`multiple`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`ref`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"upload"`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUploadOutline"`)]),e._v(` >`)]),e._v(`点击选择上传文件`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`br`)]),e._v(`/>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:disabled`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"disabled"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`click`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"$refs.upload.upload()"`)]),e._v(`>`)]),e._v(`开始上传`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`pramas`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'image'`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`time`)]),e._v(`: `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`Date`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`now`)]),e._v(`()
      },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`disabled`)]),e._v(`:`),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`,
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`beforeUpload`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`disabled`)]),e._v(` = info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`length`)]),e._v(` == `),t(`span`,{staticClass:`hljs-number`},[e._v(`0`)]),e._v(`
    },
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,m=o({data(){return{CloudUploadOutline:e,headers:{authorization:`here is token`}}},methods:{handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,directory:``,headers:e.headers},on:{change:e.handleChange}},[t(`Button`,{attrs:{icon:e.CloudUploadOutline}},[e._v(`Click to upload`)])],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`上传文件夹`)]),t(`p`,[e._v(`通过传入 directory 为 true，可以支持上传文件夹下的所有文件`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`directory`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUploadOutline"`)]),e._v(`>`)]),e._v(`Click to upload`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      }
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,h=o({data(){return{headers:{authorization:`here is token`},fileList:[{url:`https://cdn.chuchur.com/upload/demo/test_300.jpg`,status:`uploading`,filename:`test.jpg`,size:`222kb`,percent:50,status:`uploading`},{url:`https://cdn.chuchur.com/upload/demo/test_300.jpg`,status:`error`,filename:`test.jpg`,size:`222kb`}]}},methods:{handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,type:`picture`,headers:e.headers,fileList:e.fileList,accept:`image/*`,uploadText:`上传图片`},on:{change:e.handleChange}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`照片墙`)]),t(`p`,[e._v(`设置 type = 'picture'，用户可以上传图片并在列表中显示缩略图`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"picture"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:fileList`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"fileList"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/*"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`uploadText`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"上传图片"`)]),e._v(`
    >`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`fileList`)]),e._v(`:[
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`url`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'https://cdn.chuchur.com/upload/demo/test_300.jpg'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`status`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filename`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'test.jpg'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'222kb'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`percent`)]),e._v(`:`),t(`span`,{staticClass:`hljs-number`},[e._v(`50`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`status`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`
        },
        {
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`url`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'https://cdn.chuchur.com/upload/demo/test_300.jpg'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`status`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'error'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`filename`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'test.jpg'`)]),e._v(`,
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`size`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`'222kb'`)]),e._v(`
        },
      ]
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,g=o({data(){return{CameraOutline:i,headers:{authorization:`here is token`}}},methods:{handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,type:`picture`,headers:e.headers,limit:1,accept:`image/*`,uploadIcon:e.CameraOutline,uploadText:`上传头像`},on:{change:e.handleChange}})],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`上传头像`)]),t(`p`,[e._v(`limit等于上传文件数量时, 则不显示选择文件组件,`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"picture"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
    @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:limit`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/*"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:uploadIcon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CameraOutline"`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-attr`},[e._v(`uploadText`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"上传头像"`)]),e._v(`
    >`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CameraOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`'kui-icons'`)]),e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CameraOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      },
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,_=o({data(){return{CloudUploadOutline:e,headers:{authorization:`here is token`}}},methods:{handleChange(e){e.file.status!==`uploading`&&console.log(e.file,e.fileList),e.file.status===`success`?this.$Message.success(`${e.file.filename} uploaded successfully`):e.file.status===`error`&&this.$Message.error(`${e.file.filename} upload failed.`)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`div`,{staticStyle:{width:`556px`}},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,draggable:``,uploadIcon:e.CloudUploadOutline,uploadText:`点击上传文件或拖拽文件到这里`,uploadSubText:`支持任意类型文件`},on:{change:e.handleChange}})],1)]),t(`template`,{slot:`description`},[t(`h4`,[e._v(`拖拽上传`)]),t(`p`,[e._v(`draggable='true'，可以使用拖拽功能`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`style`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"width:556px"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`draggable`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:uploadIcon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUploadOutline"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`uploadText`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"点击上传文件或拖拽文件到这里"`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`uploadSubText`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"支持任意类型文件"`)]),e._v(`
      @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"handleChange"`)]),e._v(`
      >`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`div`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      }
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`handleChange`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`info`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` !== `),t(`span`,{staticClass:`hljs-string`},[e._v(`'uploading'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`, info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`fileList`)]),e._v(`);
      }
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`success`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" uploaded successfully`")]),e._v(`);
      } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`else`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (info.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` === `),t(`span`,{staticClass:`hljs-string`},[e._v(`'error'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`error`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v("`"),t(`span`,{staticClass:`hljs-subst`},[e._v("${info.file.filename}")]),e._v(" upload failed.`")]),e._v(`);
      }
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,v=o({data(){return{CloudUploadOutline:e,CameraOutline:i,labelCol:{span:6},wrapperCol:{span:16},headers:{authorization:`here is token`},form:{avatar:``,file:``,files:[]},rules:{avatar:[{required:!0,message:`请上传图像`}],file:[{required:!0,message:`请上传文件`}],files:[{required:!0,message:`请上传文件`}]}}},methods:{uploadFile({file:e}){e.status==`success`&&(this.form.file=e.response.url,this.$refs.form.test(`file`))},uploadFiles({file:e}){e.status==`success`&&(this.form.files.push(e.response.url),this.$refs.form.test(`files`))},remove({file:e}){if(e.status==`success`){let t=e.response.url,n=this.form.files.indexOf(t);this.form.files.slice(n,1),this.$refs.form.test(`files`)}},uploadAvatar({file:e}){e.status==`success`&&(this.form.avatar=e.response.url,this.$refs.form.test(`avatar`))},submit({valid:e,model:t}){this.$Message[e?`success`:`error`](e?`success`:`faild`),console.log(t)}}},function(){var e=this,t=e._self._c;return t(`Demo`,[t(`template`,{slot:`component`},[t(`Form`,{ref:`form`,attrs:{model:e.form,rules:e.rules,wrapperCol:e.wrapperCol,labelCol:e.labelCol},on:{submit:e.submit}},[t(`FormItem`,{attrs:{label:`图像`,prop:`avatar`}},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,type:`picture`,headers:e.headers,limit:1,accept:`image/*`,uploadIcon:e.CameraOutline,uploadText:`上传头像`},on:{change:e.uploadAvatar,remove:()=>e.form.avatar=``}}),t(`Input`,{attrs:{type:`hidden`}})],1),t(`FormItem`,{attrs:{label:`单个文件`,prop:`file`}},[t(`Input`,{attrs:{readonly:``,placeholder:`请上传文件`}},[t(`Upload`,{attrs:{slot:`suffix`,action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,showUploadList:!1,limit:1,accept:`image/*`},on:{change:e.uploadFile,remove:()=>e.form.file=``},slot:`suffix`},[t(`Button`,{attrs:{icon:e.CloudUploadOutline,type:`link`}})],1)],1)],1),t(`FormItem`,{attrs:{label:`多个文件`,prop:`files`}},[t(`Upload`,{attrs:{action:`https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2`,name:`file`,headers:e.headers,accept:`image/*`},on:{change:e.uploadFiles,remove:e.remove}},[t(`Button`,{attrs:{theme:`light`}},[e._v(`上传文件`)])],1),t(`Input`,{attrs:{type:`hidden`}})],1),t(`FormItem`,{attrs:{wrapperCol:{offset:6}}},[t(`Button`,{attrs:{type:`primary`,htmlType:`submit`}},[e._v(`提交表单`)])],1)],1)],1),t(`template`,{slot:`description`},[t(`h4`,[e._v(`表单校验`)]),t(`p`,[e._v(`上传表单校验`)])]),t(`template`,{slot:`code`},[t(`pre`,[t(`code`,{staticClass:`hljs language-html`},[t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Form`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:model`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"form"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:rules`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"rules"`)]),e._v(` @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`submit`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"submit"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:wrapperCol`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"wrapperCol"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:labelCol`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"labelCol"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`ref`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"form"`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"图像"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`prop`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"avatar"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"picture"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
        @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"uploadAvatar"`)]),e._v(`
        @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`remove`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"()=>form.avatar=''"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:limit`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/*"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:uploadIcon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CameraOutline"`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`uploadText`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"上传头像"`)]),e._v(`
        >`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"hidden"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"单个文件"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`prop`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`readonly`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`placeholder`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"请上传文件"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"uploadFile"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`remove`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"()=>form.file=''"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:showUploadList`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"false"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:limit`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"1"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/*"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`slot`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"suffix"`)]),e._v(`
          >`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:icon`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"CloudUploadOutline"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"link"`)]),e._v(` />`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`label`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"多个文件"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`prop`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"files"`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(` 
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`action`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"https://run.mocky.io/v3/79c1cb9d-040a-43d9-919d-91ded176a9c2"`)]),e._v(` 
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`name`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"file"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:headers`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"headers"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`change`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"uploadFiles"`)]),e._v(`
          @`),t(`span`,{staticClass:`hljs-attr`},[e._v(`remove`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"remove"`)]),e._v(`
          `),t(`span`,{staticClass:`hljs-attr`},[e._v(`accept`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"image/*"`)]),e._v(`
          >`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`theme`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"light"`)]),e._v(`>`)]),e._v(`上传文件`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Upload`)]),e._v(`>`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Input`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"hidden"`)]),e._v(`/>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`:wrapperCol`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"{offset:6}"`)]),e._v(`>`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`type`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"primary"`)]),e._v(` `),t(`span`,{staticClass:`hljs-attr`},[e._v(`htmlType`)]),e._v(`=`),t(`span`,{staticClass:`hljs-string`},[e._v(`"submit"`)]),e._v(`>`)]),e._v(`提交表单`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Button`)]),e._v(`>`)]),e._v(`
    `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`FormItem`)]),e._v(`>`)]),e._v(`
  `),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`Form`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`template`)]),e._v(`>`)]),e._v(`
`),t(`span`,{staticClass:`hljs-tag`},[e._v(`<`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),t(`span`,{staticClass:`language-javascript`},[e._v(`
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`import`)]),e._v(` { `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CameraOutline`)]),e._v(` } `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`from`)]),e._v(` `),t(`span`,{staticClass:`hljs-string`},[e._v(`"kui-icons"`)]),e._v(`;
`),t(`span`,{staticClass:`hljs-keyword`},[e._v(`export`)]),e._v(` `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`default`)]),e._v(`{
  `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`data`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`}),e._v(`) {
    `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`return`)]),e._v(` {
      `),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CloudUploadOutline`)]),e._v(`,`),t(`span`,{staticClass:`hljs-title class_`},[e._v(`CameraOutline`)]),e._v(`,
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`labelCol`)]),e._v(`: { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`span`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`6`)]),e._v(` },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`wrapperCol`)]),e._v(`: { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`span`)]),e._v(`: `),t(`span`,{staticClass:`hljs-number`},[e._v(`16`)]),e._v(` },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`headers`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`authorization`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'here is token'`)]),e._v(`
      },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`form`)]),e._v(`:{
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`avatar`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`''`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`file`)]),e._v(`:`),t(`span`,{staticClass:`hljs-string`},[e._v(`''`)]),e._v(`,
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`files`)]),e._v(`:[],
      },
      `),t(`span`,{staticClass:`hljs-attr`},[e._v(`rules`)]),e._v(`: {
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`avatar`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`required`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`message`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'请上传图像'`)]),e._v(` },
        ],
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`file`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`required`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`message`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'请上传文件'`)]),e._v(` },
        ],
        `),t(`span`,{staticClass:`hljs-attr`},[e._v(`files`)]),e._v(`: [
          { `),t(`span`,{staticClass:`hljs-attr`},[e._v(`required`)]),e._v(`: `),t(`span`,{staticClass:`hljs-literal`},[e._v(`true`)]),e._v(`, `),t(`span`,{staticClass:`hljs-attr`},[e._v(`message`)]),e._v(`: `),t(`span`,{staticClass:`hljs-string`},[e._v(`'请上传文件'`)]),e._v(` },
        ],
      },
    }
  },
  `),t(`span`,{staticClass:`hljs-attr`},[e._v(`methods`)]),e._v(`:{
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`uploadFile`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{file}`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` == `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`file`)]),e._v(` = file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`response`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`url`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$refs`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`test`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'file'`)]),e._v(`)
      }
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`uploadFiles`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{file}`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` == `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`files`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`push`)]),e._v(`(file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`response`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`url`)]),e._v(`)
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$refs`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`test`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'files'`)]),e._v(`)
      }
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`remove`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{file}`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-comment`},[e._v(`// 删除文件的时候 要对应的从表单中删除相对应的url`)]),e._v(`
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(`(file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` == `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`){
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` url = file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`response`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`url`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`let`)]),e._v(` index = `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`files`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`indexOf`)]),e._v(`(url)
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`files`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`slice`)]),e._v(`(index,`),t(`span`,{staticClass:`hljs-number`},[e._v(`1`)]),e._v(`)
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$refs`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`test`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'files'`)]),e._v(`)
      }
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`uploadAvatar`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{file}`)]),e._v(`){
      `),t(`span`,{staticClass:`hljs-keyword`},[e._v(`if`)]),e._v(` (file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`status`)]),e._v(` == `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(`) {
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`avatar`)]),e._v(` = file.`),t(`span`,{staticClass:`hljs-property`},[e._v(`response`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`url`)]),e._v(`
        `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$refs`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`form`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`test`)]),e._v(`(`),t(`span`,{staticClass:`hljs-string`},[e._v(`'avatar'`)]),e._v(`)
      }
    },
    `),t(`span`,{staticClass:`hljs-title function_`},[e._v(`submit`)]),e._v(`(`),t(`span`,{staticClass:`hljs-params`},[e._v(`{valid, model}`)]),e._v(`) {
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`this`)]),e._v(`.`),t(`span`,{staticClass:`hljs-property`},[e._v(`$Message`)]),e._v(`[valid ? `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(` : `),t(`span`,{staticClass:`hljs-string`},[e._v(`'error'`)]),e._v(`](valid ? `),t(`span`,{staticClass:`hljs-string`},[e._v(`'success'`)]),e._v(` : `),t(`span`,{staticClass:`hljs-string`},[e._v(`'faild'`)]),e._v(`)
      `),t(`span`,{staticClass:`hljs-variable language_`},[e._v(`console`)]),e._v(`.`),t(`span`,{staticClass:`hljs-title function_`},[e._v(`log`)]),e._v(`(model)
    }
  }
}
`)]),t(`span`,{staticClass:`hljs-tag`},[e._v(`</`),t(`span`,{staticClass:`hljs-name`},[e._v(`script`)]),e._v(`>`)]),e._v(`
`)])])])],2)},[],!1,null,null,null,null).exports,y=o({},function(){var e=this;return e._self._c,e._m(0)},[function(){var e=this,t=e._self._c;return t(`div`,{staticClass:`markdown-body`},[t(`h2`,{attrs:{id:`upload-api`,tabindex:`-1`}},[t(`a`,{staticClass:`header-anchor`,attrs:{href:`#upload-api`}},[e._v(`Upload API`)])]),t(`table`,[t(`thead`,[t(`tr`,[t(`th`,[e._v(`属性`)]),t(`th`,[e._v(`说明`)]),t(`th`,[e._v(`类型`)]),t(`th`,[e._v(`默认值`)])])]),t(`tbody`,[t(`tr`,[t(`td`,[e._v(`accept`)]),t(`td`,[e._v(`接受上传的文件类型, 详见 `),t(`a`,{attrs:{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept`}},[e._v(`input accept Attribute`)])]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`action`)]),t(`td`,[e._v(`上传的地址`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`method`)]),t(`td`,[e._v(`上传请求的 http method`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`post`)])]),t(`tr`,[t(`td`,[e._v(`data`)]),t(`td`,[e._v(`上传所需参数`)]),t(`td`,[e._v(`Object`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`disabled`)]),t(`td`,[e._v(`是否禁用`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`headers`)]),t(`td`,[e._v(`设置上传的请求头部`)]),t(`td`,[e._v(`Object`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`multiple`)]),t(`td`,[e._v(`是否支持多选文件`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`directory`)]),t(`td`,[e._v(`是否支持上传目录`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`showUploadList`)]),t(`td`,[e._v(`是否显示上传列表`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`autoTrigger`)]),t(`td`,[e._v(`是否自动上传`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`true`)])]),t(`tr`,[t(`td`,[e._v(`draggable`)]),t(`td`,[e._v(`是否支持拖拽上传`)]),t(`td`,[e._v(`Boolean`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`fileList`)]),t(`td`,[e._v(`上传的文件列表`)]),t(`td`,[e._v(`Array`)]),t(`td`,[e._v(`false`)])]),t(`tr`,[t(`td`,[e._v(`name`)]),t(`td`,[e._v(`发到后台的文件参数名`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'file'`)])]),t(`tr`,[t(`td`,[e._v(`uploadIcon`)]),t(`td`,[e._v(`上传域的辅助图标`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'file'`)])]),t(`tr`,[t(`td`,[e._v(`uploadText`)]),t(`td`,[e._v(`上传域的辅助文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'file'`)])]),t(`tr`,[t(`td`,[e._v(`uploadSubText`)]),t(`td`,[e._v(`上传域的二级辅助文字`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`'file'`)])]),t(`tr`,[t(`td`,[e._v(`limit`)]),t(`td`,[e._v(`最多允许上传文件个数`)]),t(`td`,[e._v(`Number`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`minSize`)]),t(`td`,[e._v(`上传文件最小单位(KB)`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`maxSize`)]),t(`td`,[e._v(`上传文件最大单位(KB)`)]),t(`td`,[e._v(`String`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`transformFile`)]),t(`td`,[e._v(`在上传之前转换文件。支持返回一个 Promise 对象`)]),t(`td`,[e._v(`Function(file)`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`change`)]),t(`td`,[e._v(`上传中、完成、失败都会调用这个函数`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])]),t(`tr`,[t(`td`,[e._v(`remove`)]),t(`td`,[e._v(`移除文件回调`)]),t(`td`,[e._v(`Function`)]),t(`td`,[e._v(`-`)])])])])])}],!1,null,null,null,null).exports,b={render(){return n(`div`,{class:`demo-upload`},[n(s),n(c),n(l),n(m),n(u),n(d),n(f),n(p),n(h),n(g),n(_),n(v),n(y)])}};export{b as default};