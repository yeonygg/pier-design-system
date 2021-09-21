import textBody from './text-body/_index';
import textHeading from './text-heading/_index';
import textLabel from './text-label/_index';
import textCodeblock from './text-codeblock/_index';
import link from './text-link/_index';
import horizontalRule from './horizontal-rule/_index';
import list from './list/_index';
import breadcrumbs from './breadcrumbs/data';
import navigation from './navigation/data';
import tags from './tag/_index';
import cards from './card/_index';
import wells from './well/_index';
import bubbleMenu from './bubble-menu/data';
import buttonHero from './button-hero/data';
import buttonStandard from './button-standard/data';
import buttonIcon from './button-icon/data';
import inputText from './input-text/_index';
import inputGroup from './input-group/_index';
import inputCombo from './input-combo/data';
import inputTextarea from './input-textarea/_index';
import inputSelect from './input-select/_index';
import inputCheckbox from './input-checkbox/data';
import inputRadio from './input-radio/data';
import inputToggle from './input-toggle/_index';
import table from './table/_index';
import inputForm from './form/data';
import accordion from './accordion/data';
import loadingSpinner from './loading-spinner/_index';
import toolTip from './tooltip/data';
import section from './section/data';
import screen from './screen/data';

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
    loadingSpinner,
    toolTip,
    section,
    screen
);

componentsData.sort(function (a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
});

export default componentsData;
