import { Fragment } from 'react';

import Breadcrumbs from 'src/pier-design-system/components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from 'src/pier-design-system/components/breadcrumbs/BreadcrumbsLink';

export default function TestPage() {
    return (
        <Fragment>
            <Breadcrumbs maxCrumbs={3} dark={false}>
                <BreadcrumbsLink>Home</BreadcrumbsLink>
                <BreadcrumbsLink>Hidden Link</BreadcrumbsLink>
                <BreadcrumbsLink>Link 1</BreadcrumbsLink>
                <BreadcrumbsLink disabled={true}>Link 2</BreadcrumbsLink>
            </Breadcrumbs>
        </Fragment>
    );
}
