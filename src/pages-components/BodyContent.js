import HR from 'src/pier-design-system/components/horizonal-rule/HR';
import Section from 'src/pier-design-system/components/containers/Section';
import BodyText from 'src/pier-design-system/components/text/BodyText';

export default function BodyContent({ children }) {
    return (
        <div className="-p-b-12" style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
            {children}

            <HR className="-m-t-12 -m-b-11" theme="gray" size="sm" />
            <div className="-d-flex -flex-wrap -justify-content-around -m-h-12">
                {' '}
                <a className="pier-link" href={'/abstracts'}>
                    Abstracts
                </a>
                <a className="pier-link" href={'/components'}>
                    Components
                </a>
                <a className="pier-link" href={'/utilities'}>
                    Utilities
                </a>
                <a className="pier-link" href={'/attributions'}>
                    Attributions
                </a>
            </div>
            <Section className="-p-t-10 -d-flex -justify-content-center">
                <a href="./">
                    <img src="/pier_logo.svg" style={{ width: 200 }} />
                </a>
            </Section>
            <BodyText size="sm">
                <span>&copy;</span> 2021 Gumgum, Inc.
            </BodyText>
        </div>
    );
}
