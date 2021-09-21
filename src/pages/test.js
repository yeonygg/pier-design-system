import { InputGroup, InputText } from 'dist';
import { Fragment } from 'react';

import Breadcrumbs from 'src/pier-design-system/components/breadcrumbs/Breadcrumbs';
import BreadcrumbsLink from 'src/pier-design-system/components/breadcrumbs/BreadcrumbsLink';

export default function TestPage() {
    return (
        <Fragment>
            <InputGroup label="error" error="*required" size="md">
                <InputText placeholder="eneter"></InputText>
            </InputGroup>
        </Fragment>
    );
}
