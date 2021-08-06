<cn>
#### 图标
`showIcon` 来设置是否显示图标
</cn>

```vue
<template>
  <div>
    <Alert type="success" showIcon>Success Text</Alert> 
    <Alert type="info" showIcon>Info Text</Alert>
    <Alert type="warning" showIcon>Warning Text</Alert>
    <Alert type="error" showIcon>Error Text</Alert>

    <Alert type="success" 
        showIcon
        message="Success Tip" 
        description="Congratulations, the operation is successful." 
      />
    <Alert type="info" 
        showIcon 
        message="Informational Notes" 
        description="Congratulations, the operation is successful." 
    />
    <Alert type="warning"
        showIcon 
        message="Warning" 
        description="Nuclear bomb launching base, please do not approach!" 
     />
    <Alert type="error" 
      showIcon 
      message="Error" 
      description="Encountered an error, please press any key to continue." 
    />
  </div>
</template>
```