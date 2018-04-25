let code = {}

code.base = `<Breadcrumb>
    <BreadcrumbItem to="/">Home</BreadcrumbItem>
    <BreadcrumbItem to="/breadcrumb">breadcrumb</BreadcrumbItem>
    <BreadcrumbItem>other</BreadcrumbItem>
</Breadcrumb>`

code.icon = `<Breadcrumb>
    <BreadcrumbItem to="/" icon="home">Home</BreadcrumbItem>
    <BreadcrumbItem to="/breadcrumb" icon="social-buffer">breadcrumb</BreadcrumbItem>
    <BreadcrumbItem icon="heart">other</BreadcrumbItem>
</Breadcrumb>`

code.separator = `<Breadcrumb>
    <BreadcrumbItem to="/" icon="home" separator="~">Home</BreadcrumbItem>
    <BreadcrumbItem to="/breadcrumb" icon="social-buffer" separator="~">breadcrumb</BreadcrumbItem>
    <BreadcrumbItem icon="heart" separator="~">other</BreadcrumbItem>
</Breadcrumb>`

export default code