import textBody from './text-body/_index';
import textHeading from './text-heading/_index';
import textLabel from './text-label/_index';
import textCodeblock from './text-codeblock/_index';
import link from './text-link/_index';
import horizontalRule from './horizontal-rule/_index';
import list from './list/_index';
import breadcrumbs from './breadcrumbs/_index';
import navigation from './navigation/_index';
import tags from './tag/_index';
import cards from './card/_index';
import wells from './wells/_index';
import bubbleMenu from './bubble-menu/_index';
import buttonHero from './button-hero/_index';
import buttonStandard from './button-standard/_index';
import buttonIcon from './button-icon/_index';
import inputText from './input-text/_index';
import inputGroup from './input-group/_index';
import inputCombo from './input-combo/_index';
import inputTextarea from './input-textarea/_index';
import inputSelect from './input-select/_index';
import inputCheckbox from './input-checkbox/_index';
import inputRadio from './input-radio/_index';
import inputToggle from './input-toggle/_index';
import table from './table/_index';
import inputForm from './form/_index';
import accordion from './accordion/_index';
import loadingSpinner from './loading-spinner/_index';

let componentsData = [];
componentsData.push(
    textBody,
    textHeading,
    textLabel,
    textCodeblock,
    horizontalRule,
    tags,
    cards,
    wells,
    link,
    list,
    breadcrumbs,
    navigation,
    bubbleMenu,
    buttonHero,
    buttonStandard,
    buttonIcon,
    inputText,
    inputGroup,
    inputTextarea,
    inputSelect,
    inputCheckbox,
    inputRadio,
    inputToggle,
    table,
    inputForm,
    inputCombo,
    accordion,
    loadingSpinner
);

componentsData.sort(function (a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
});

export default componentsData;
