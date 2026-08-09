<template>
  <Space vertical block size="large">
    <FeedbackPanel
      compact
      kind="positive"
      heading="Sync Complete"
      description="12 records updated.。"
    />
    <FeedbackPanel
      compact
      kind="neutral"
      heading="Awaiting Confirmation"
      description="The change will only be implemented upon confirmation."
    />
    <FeedbackPanel
      compact
      kind="caution"
      heading="Partial Configuration Missing"
      description="Please add the notification recipients."
    />
    <FeedbackPanel
      compact
      kind="negative"
      heading="Connection Failed."
      description="Unable to access the target service. Please try again later."
    />
  </Space>
</template>
