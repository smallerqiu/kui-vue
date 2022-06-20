import Icon from '../icon'
import { t } from '../locale'
import Progress from '../progress'
import Tooltip from '../tooltip'
import { DocumentTextOutline, Close, AlertCircle, Add } from 'kui-icons'
let count = 0
const timestamp = Date.now()
function getUuid() {
  return `k-upload-${timestamp}-${count++}`
}
export default {
  name: "Upload",
  props: {
    method: { type: String, default: "post" },
    name: { type: String, default: 'file' }, //提交的 name值
    action: { type: String, required: true },
    type: { type: String, default: "list", validator: (val) => ['list', 'picture'].indexOf(val) >= 0 },
    data: { type: Object, default: () => { } },
    disabled: Boolean,
    directory: Boolean,
    multiple: Boolean,
    accept: String,
    headers: Object,
    showUploadList: { type: Boolean, default: true },
    transformFile: Function,
    fileList: Array,
    autoTrigger: { type: Boolean, default: true },
    limit: Number,
    minSize: Number,
    maxSize: Number,
    uploadText: String,
    uploadSubText: String,
    uploadIcon: [String, Array],
    draggable: Boolean,
  },
  watch: {
    fileList(v) {
      this.defaultFileList = v || []
    }
  },
  data() {
    return {
      defaultFileList: this.fileList || [],
      count: 0,
      uploadTemp: {},
      dragOver: false
    };
  },
  mounted() {
    // if (this.draggable && this.$isServer) {
    // window.addEventListener("dragover", function (e) {
    //   e = e || event;
    //   e.preventDefault();
    // }, false);
    // window.addEventListener("drop", function (e) {
    //   e = e || event;
    //   e.preventDefault();
    // }, false);
    // }
  },
  methods: {
    formatFileSize(fileSize) {
      if (fileSize < 1024) {
        return fileSize + 'B';
      } else if (fileSize < (1024 * 1024)) {
        var temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
      } else if (fileSize < (1024 * 1024 * 1024)) {
        var temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
      } else {
        var temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
      }
    },
    triggerSelect(e) {
      e.cancelBubble = true;
      if (this.disabled) return false;

      this.$refs["k-upload-file"].click();
      return false;
    },
    remove(i) {
      if (this.disabled) return false;
      let item = this.defaultFileList[i]
      this.defaultFileList.splice(i, 1)

      delete this.uploadTemp[item.uid]
      item.xhr && item.xhr.abort()
      this.$emit('remove', {
        file: item,
        fileList: this.defaultFileList
      })
    },
    upload() {
      if (!this.autoTrigger && !this.disabled) {
        let files = this.uploadTemp
        for (let k in files) {
          let item = this.defaultFileList.filter(x => x.uid == k)[0]
          item && this.uploadFile(item, files[k])
        }
      }
    },
    selectFiles(e) {
      let { limit, minSize, maxSize, autoTrigger } = this
      let files = e.dataTransfer ? e.dataTransfer.files : e.target.files
      for (let i = 0; i < files.length; i++) {

        let { size, type } = files[i]
        if (files[i].name == '.DS_Store') {
          continue;
        }
        let item = {
          uid: getUuid(),
          filename: files[i].name, size: this.formatFileSize(size),
          status: 'wait', percent: 0, preview: false
        }
        this.uploadTemp[item.uid] = files[i]

        if (limit && i > limit - 1) {
          this.$emit('exceed')
          return;
        }
        if ((type || '').indexOf('image') >= 0) {
          item.preview = window.URL.createObjectURL(files[i])
        }
        let error = false
        if ((minSize !== undefined && minSize >= 0 && size / 1024 < minSize) ||
          (maxSize !== undefined && maxSize >= 0 && size / 1024 > maxSize)
        ) {
          error = true
          item.errorText = t('k.upload.errorFileSize')
          item.status = 'error'
        }
        // if (multiple) {
        this.defaultFileList.push(item)

        this.$emit('before-upload', {
          file: item,
          fileList: this.defaultFileList,
        })

        if (error) {
          this.$emit('change', {
            file: item,
            fileList: this.defaultFileList,
          })
          this.$emit('size-error', {
            file: item,
            fileList: this.defaultFileList,
          })
          continue;
        }
        // } else {
        // this.defaultFileList = [item]
        // }
        if (autoTrigger) {
          this.uploadFile(item, files[i])
        }
      }
      e.target.value = ''
    },
    uploadFile(item, file) {
      let { action, name, headers, data } = this

      var formdata = new FormData();
      formdata.append(name, file);
      if (data) {
        for (let k in data) {
          formdata.append(k, data[k]);
        }
      }
      //创建xhr，使用ajax进行文件上传
      var xhr = new XMLHttpRequest();
      item.xhr = xhr

      xhr.open("post", action);
      if (headers) {
        for (let k in headers) {
          xhr.setRequestHeader(k, headers[k])
        }
      }
      //回调
      xhr.onreadystatechange = event => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          item.status = 'success'
          delete this.uploadTemp[item.uid]
          this.$emit('change', {
            file: Object.assign(item, { response: JSON.parse(xhr.responseText) }),
            fileList: this.defaultFileList,
            event
          })
        }
      }
      xhr.upload.onloadstart = () => item.status = 'uploading'
      //获取上传的进度
      xhr.upload.onprogress = (event) => {
        // console.log(event)
        if (event.lengthComputable) {
          var percent = (event.loaded / event.total) * 100;
          // console.log(percent)
          item.percent = percent
        }
        this.$emit('change', {
          file: Object.assign(item, { response: xhr.responseText }),
          fileList: this.defaultFileList,
          event
        })
      }
      xhr.onerror = event => {
        item.status = 'error'

        delete this.uploadTemp[item.uid]

        this.$emit('change', {
          file: Object.assign(item, { response: xhr.responseText }),
          fileList: this.defaultFileList,
          event: event
        })
      }
      //将formdata上传
      xhr.send(formdata);
    },
    getPreview(item) {
      if (item.preview == true && item.url) {
        return <img src={item.url} />
      }
      if (item.preview) {
        return <img src={item.preview} />
      } else if (item.url) {
        return <img src={item.url} />
      } else {
        return null
      }
    },
    onDrop(e) {
      // var files = e.dataTransfer.files;
      this.selectFiles(e)
      e.preventDefault()
      this.dragOver = false
      return false
    },
    onDragEnter(e) {
      this.dragOver = true
      e.preventDefault()
      return false
    },
    onDragOver(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  },

  render() {
    let { name, accept, multiple, directory, type, showUploadList, uploadIcon,
      defaultFileList, limit, uploadText, uploadSubText, draggable } = this
    let isPicture = type == 'picture'
    if (uploadIcon === undefined) {
      uploadIcon = Add
    }
    const props = {
      class: [
        "k-upload",
        {
          ["k-upload-disabled"]: this.disabled,
          ["k-upload-picture"]: isPicture,
          ["k-upload-drag"]: draggable
        }
      ],
    }
    // let list
    // let childs = getChild(this.$slots.default)
    // let child = childs.map(child => {
    //   return cloneVNode(child, { on: { click: this.triggerSelect } })
    // })
    let addProps = {
      attrs: {
        drag: draggable && this.dragOver ? 'over' : null
      },
      on: {
        dragenter: this.onDragEnter,
        drop: this.onDrop,
        dragover: this.onDragOver,
        dragleave: () => this.dragOver = false,
        click: this.triggerSelect
      }
    }

    let showSelector = (isPicture && limit && limit > defaultFileList.length) || !isPicture || !limit
    const selector = showSelector ? <div class='k-upload-select'>
      <div class="k-upload-add"  {...addProps}>
        <input type="file" class="k-upload-file"
          webkitdirectory={directory}
          name={name} accept={accept} multiple={multiple}
          onChange={this.selectFiles} ref="k-upload-file" />
        {(isPicture || draggable) ? <Icon type={uploadIcon} /> : this.$slots.default}
        {(isPicture || draggable && uploadText) ? <span class="k-upload-text">{uploadText}</span> : null}
        {(draggable && uploadSubText) ? <span class="k-upload-sub-text">{this.dragOver ? '松手开始上传' : uploadSubText}</span> : null}
      </div>
    </div> : null


    const filsList = () => {
      return (showUploadList && !isPicture) || isPicture ? <div class={`k-upload-${isPicture ? 'picture' : 'file'}-list`}>
        {
          defaultFileList.map((item, i) => {
            let statusText = item.status == 'success' ? t('k.upload.successful') : (item.errorText || t('k.upload.failed'))
            delete item.errorText
            item.uid = item.uid || getUuid()
            return (
              <div class={[`k-upload-file-${type}-item`, `k-upload-file-status-${item.status}`]} key={item.uid}>
                <div class={`k-upload-${isPicture ? 'picture' : 'file'}-preview`}>
                  {
                    this.getPreview(item) || <Icon type={DocumentTextOutline} />
                  }
                </div>
                <div class="k-upload-file-item-info">
                  {!isPicture ? <div class="k-upload-file-main">
                    <span class="k-upload-file-name">{item.filename}</span>
                    <span class="k-upload-file-size">{item.size}</span>
                  </div> : null}
                  {
                    (item.status != 'wait') ?
                      <div class="k-upload-file-status">
                        {item.status == 'uploading' ?
                          <Progress percent={item.percent} type={`${isPicture ? 'circle' : 'line'}`} size="small" showInfo={false} status="active" strokeWidth={15} />
                          :
                          statusText && !isPicture ? <div class="k-upload-file-status-text"><Icon type={AlertCircle} />{statusText}</div> : null
                        }

                        {isPicture && item.status == 'error' ? <Tooltip title={statusText} placement="bottom"><Icon type={AlertCircle} /></Tooltip> : null}
                      </div> : null}
                </div>
                <Icon type={Close} class={`k-upload-file-${isPicture ? 'picture' : 'item'}-remove`} onClick={() => this.remove(i)} />
              </div>
            )
          })
        }
        {isPicture && selector}
      </div> : null
    }
    return (
      <div {...props} >
        {!isPicture ? [selector, filsList()] : filsList(selector)}
      </div >
    )
  }
}