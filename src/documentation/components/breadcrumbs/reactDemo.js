import jsxToString from 'jsx-to-string';
import { BreadcrumbsLink, Breadcrumbs } from 'dist';

export const reactDemo = jsxToString(
    <Breadcrumbs dark={false}>
        <BreadcrumbsLink>Home</BreadcrumbsLink>
        <BreadcrumbsLink>Link 1</BreadcrumbsLink>
        <BreadcrumbsLink disabled>Link 2</BreadcrumbsLink>
    </Breadcrumbs>
);
